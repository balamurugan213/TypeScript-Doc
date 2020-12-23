import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/payment';
import { HasFormatter } from './interface/hasFormatter';

let docone:HasFormatter ;
let doctwo:HasFormatter ;

docone=new Invoice('s','s',3);
doctwo=new Payment('ddd','fine',54)

let docs : HasFormatter[]=[];

docs.push(docone);
docs.push(doctwo);



interface IsPerson{
    name:string;
    age:number;
    speak(a:string):void;
    spend(a:number):number;
}

const me:IsPerson={
    name:'bala',
    age:20,
    speak(lang:string):void{
        console.log(lang);
    },
    spend(amount:number):number{
        console.log(amount);
        return amount;
    }
}


const invoice1= new Invoice('parolta','money for website',600);
const invoice2= new Invoice('boyl','money for app',500);

// console.log(invoice1,invoice2)

let invoices:Invoice[]=[];

invoices.push(invoice1);
invoices.push(invoice2);

console.log(invoices);

const form=document.querySelector('.new-item-form') as  HTMLFontElement;

const type =document.querySelector('#type') as HTMLSelectElement;
const tofrom =document.querySelector('#tofrom') as HTMLInputElement;
const details =document.querySelector('#details') as HTMLInputElement;
const amount =document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit',(e:Event)=>{
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    )
})

// ______________________________________________

// Generics

const addUID =<T extends object>(obj:T)=>{
    let uid =Math.floor(Math.random()*100);
    return {...obj,uid};

}

let docne=addUID({name:'ram',age:23});

console.log(docne.name);

interface Resource<T>{
    uid:number;
    resoutcesName:string;
    data:T;
}

const d2:Resource<object>={
    uid:1,
    resoutcesName:'s',
    data:{a:'d',b:'ds'}
}

const d3:Resource<string>={
    uid:1,
    resoutcesName:'s',
    data:'d'
}

// ENUMS

enum ResourceType {Book,Author,Film,director,Preson}

const d4:Resource<string>={
    uid:ResourceType.Film,
    resoutcesName:'s',
    data:'d'
}

// Tuple

let arr=['aaa',2,true]
arr[2]='sss';

// tuple is setting the data type
let tup:[string,number,boolean]