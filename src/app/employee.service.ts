import { Injectable }               from '@angular/core';
import { HttpClient, HttpHeaders }  from '@angular/common/http';

import { Observable, of }           from 'rxjs';
import { catchError, map, tap }     from 'rxjs/operators';

import { Employee }                 from './employee';

const httpOptions = {
    headers: new HttpHeaders( { 'Content-Type': 'application/json' } )
};

@Injectable( { providedIn: 'root' } )
export class EmployeeService {
    private employeesUrl   = 'api/employees';  // URL to web api

    constructor( private http: HttpClient ) { }

    /**
     * GET employees from the server 
     */
    getEmployees(): Observable< Employee[] > {
        return this.http.get< Employee[] >( this.employeesUrl );
    }
}
