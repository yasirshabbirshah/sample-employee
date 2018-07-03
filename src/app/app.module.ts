import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { HttpClientModule }     from '@angular/common/http';

import { HttpClientInMemoryWebApiModule }   from 'angular-in-memory-web-api';
import { InMemoryDataService }              from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';
import { EmployeesComponent }   from './employee/employees.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,

        // HttpClientInMemoryWebApiModule is only for stubbing and should be removed when api is ready
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, { dataEncapsulation: false }
        )
    ],
    
    declarations: [ EmployeesComponent ],
    bootstrap:    [ EmployeesComponent ]
})

export class AppModule { }
