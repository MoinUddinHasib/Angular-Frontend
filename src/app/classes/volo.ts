export class Volo{
    id: number;
    code: string;
    status: string;
    departure: {date: Date, airport: string}
    arrival: {date: Date, airport: string}
}