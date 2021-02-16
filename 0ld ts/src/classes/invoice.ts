import {HasFormatter} from '../interface/hasFormatter'

export class Invoice implements HasFormatter{
    
    constructor(
        readonly client:string,
        private details:string,
        public amount:number)
        {}

    format(){
        return `${this.client} owns Rs.${this.amount} for ${this.details}`;
    }
}