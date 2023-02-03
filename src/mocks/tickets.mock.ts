import { Ticket } from '../models/ticket';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'Mon ticket pour Madrid',
    description: '',
    date: dateToday,
    student: 'Paul',
    major: 'science'
  },
  {
    title: 'SI5 in Paris',
    description: 'Description du voyage',
    date: dateToday,
    student: 'Anakin',
    major: "maths"
  },
];
