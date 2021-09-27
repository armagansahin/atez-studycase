import { Entity } from '@loopback/repository';
export declare class Employee extends Entity {
    id?: number;
    name?: string;
    surname?: string;
    email?: string;
    phone?: number;
    department?: string;
    salary?: number;
    title?: string;
    supervisor?: number;
    constructor(data?: Partial<Employee>);
}
export interface EmployeeRelations {
}
export declare type EmployeeWithRelations = Employee & EmployeeRelations;
