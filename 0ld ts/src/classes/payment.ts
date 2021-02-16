import {HasFormatter} from '../interface/hasFormatter'

export class Payment implements HasFormatter{
    
    constructor(
        readonly recipent:string,
        private details:string,
        public amount:number)
        {}

    format(){
        return `${this.recipent} is ownsd Rs.${this.amount} for ${this.details}`;
    }
}