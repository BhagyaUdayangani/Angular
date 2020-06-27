import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, config, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { NgForm } from '@angular/forms';


const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}; const apiUrl = 'http://dummy.restapiexample.com/api/v1';

@Injectable({ providedIn: 'root' })

export class EmployeeService {

	constructor(private http: HttpClient) { }

	private handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			// A client-side or network error occurred. Handle it accordingly.
			console.error('An error occurred:', error.error.message);
		} else {
			// The backend returned an unsuccessful response code.
			// The response body may contain clues as to what went wrong,
			console.error(
				`Backend returned code ${error.status}, ` +
				`body was: ${error.error}`);
		}
		// return an observable with a user-facing error message
		return throwError('Something bad happened; please try again later.');
	}

	private extractData(res: Response) {
		let body = res;
		return body || {};
	}
	getAll(): Observable<any> {
		const url = `${apiUrl}/employees`;
		return this.http.get(url, httpOptions).pipe(
			catchError(this.handleError),
			map(result => {
				if (result['status'] === 200) {
					if (result['data'] === 0) {
						console.log('Empty');
					}
					else {
						return result['data'];
					}
				} else {
					return [];
				}
			}));
  }
  
  get(id: string): Observable<any> {
		const url = `${apiUrl}/employee/${id}`;
		return this.http.get(url, httpOptions).pipe(
			catchError(this.handleError),
			map(result => {
				if (result['status'] === 200) {
					if (result['data'] === 0) {
						console.log('Empty');
					}
					else {
						return result['data'];
					}
				} else {
					return [];
				}
			}));
	}

	update(id: string, data: string): Observable<any> {
		const url = `${apiUrl}/update${id}`;
		return this.http.put(url, httpOptions)
			.pipe(
				catchError(this.handleError),
				map(this.extractData));
	} 

	delete(id: string): Observable<{}> {
		const url = `${apiUrl}/delete${id}`;
		return this.http.delete(url, httpOptions)
			.pipe(
				catchError(this.handleError)
			);
	}

	create(data: NgForm): Observable<{}> {
		const url = `${apiUrl}/create`;
		return this.http.post<{}>(url, data, httpOptions)
			.pipe(
				catchError(this.handleError)
			);
  }
}