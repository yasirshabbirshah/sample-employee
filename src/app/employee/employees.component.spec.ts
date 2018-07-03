import { TestBed, async }      from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

import { EmployeesComponent }  from './employees.component';

describe( 'Employee Component Test', () => {
    beforeEach( async(() => {
        TestBed.configureTestingModule( {
            imports: [ HttpClientTestingModule ],
            declarations: [
                EmployeesComponent
            ],
        } ).compileComponents();
    } ) );
  
    it( 'should create the employee list', async( () => {
        const fixture   = TestBed.createComponent( EmployeesComponent );
        const list      = fixture.debugElement.componentInstance;
        expect( list ).toBeTruthy();
    } ) );

    it( 'should render title in a h1 tag', async( () => {
        const fixture   = TestBed.createComponent( EmployeesComponent );
        fixture.detectChanges();
        const compiled  = fixture.debugElement.nativeElement;
        expect( compiled.querySelector( 'h1' ).textContent ).toContain( 'Employee List' );
    } ) );

});
