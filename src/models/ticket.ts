export interface Ticket {
  title?: string;
  description?: string;
  date?: Date;
  student?: string;
  major?: string;
  archived?: boolean;
}


export enum Major {
    rien = ' ',
    Maths = 'Maths',
    SVT = 'SVT',
    Physique = 'Physique',
    Art = 'Art',
}


