import { Ticket } from '../models/ticket';
import { Major } from '../models/ticket';
const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'Mon ticket pour Madrid',
    description: '',
    date: dateToday,
    student: 'Paul',
    major: Major.SVT,
    archived: false
  },
  {
    title: 'SI5 in Paris',
    description: 'Description du voyage',
    date: dateToday,
    student: 'Anakin',
    major: Major.Maths,
    archived: true
  },
  {
		title: 'GB6 in Lisbonne',
		description: 'Manger du bacalhau',
		date: dateToday,
		student: 'Henry',
		major: Major.Art,
    archived: false 
	},
];
