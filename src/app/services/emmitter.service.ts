import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmmitterServiceService {

  constructor() { }

  private AddEmployee = new Subject<any>();
  
  listeningToAddEmployeeChange(): Observable<any> {
    return this.AddEmployee.asObservable();
  }

  broadcast(data: any) {
    switch (data.content_type) {
      case 'AddEmployee':
        this.AddEmployee.next();
        break;
    }
  }
}
