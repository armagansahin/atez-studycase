import {Entity, model, property} from '@loopback/repository';

@model()
export class TitleHistory extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'date',
  })
  dateofstart?: string;

  @property({
    type: 'date',
  })
  dateofend?: string;

  @property({
    type: 'number',
  })
  title?: number;

  @property({
    type: 'number',
  })
  department?: number;


  constructor(data?: Partial<TitleHistory>) {
    super(data);
  }
}

export interface TitleHistoryRelations {
  // describe navigational properties here
}

export type TitleHistoryWithRelations = TitleHistory & TitleHistoryRelations;
