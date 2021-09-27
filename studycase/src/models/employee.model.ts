import {Entity, model, property} from '@loopback/repository';

@model()
export class Employee extends Entity {
  @property({
    type: 'number',
    generated: true,
    id: true,
    default: 0
  })
  id?: number;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  surname?: string;

  @property({
    type: 'string',
  })
  email?: string;

  @property({
    type: 'number',
  })
  phone?: number;

  @property({
    type: 'number',
  })
  department?: number;

  @property({
    type: 'number',
  })
  salary?: number;

  @property({
    type: 'string',
  })
  title?: string;

  @property({
    type: 'number',
  })
  supervisor?: number;


  constructor(data?: Partial<Employee>) {
    super(data);
  }
}

export interface EmployeeRelations {
  // describe navigational properties here
}

export type EmployeeWithRelations = Employee & EmployeeRelations;
