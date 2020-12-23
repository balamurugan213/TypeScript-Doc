import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/payment';
let docone;
let doctwo;
docone = new Invoice('s', 's', 3);
doctwo = new Payment('ddd', 'fine', 54);
let docs = [];
docs.push(docone);
docs.push(doctwo);
const me = {
    name: 'bala',
    age: 20,
    speak(lang) {
        console.log(lang);
    },
    spend(amount) {
        console.log(amount);
        return amount;
    }
};
const invoice1 = new Invoice('parolta', 'money for website', 600);
const invoice2 = new Invoice('boyl', 'money for app', 500);
// console.log(invoice1,invoice2)
let invoices = [];
invoices.push(invoice1);
invoices.push(invoice2);
console.log(invoices);
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
