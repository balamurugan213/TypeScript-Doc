# TypeScript-Doc

Learning and implementing typescript

- Required to install node.
- To install TypeScript.

    ```cmd
    npm install -g typescript
    ```

- To Run a TypeScript file.

    ```cmd
    tsc filename.ts
    ```

- To Run a TypeScript file and specift output js.

    ```cmd
    tsc filename.ts | filename.js
    ```

- To connect your js and ys file so that change in ts uill affecs js.

    ```cmd
    tsc filename.ts -w 
    ```

- Init command creates a config JSON file which specify the properties of tsc.

    ```cmd
    tsc --init 
    ```

- ## Concepts in type-Script

  - DOM features

  - Classes

  - Visibility

  - Modules

  - Interface

---

## DOM features

We can assign a type for dom elements so that ve can use the intelligence.

```javascript
const form=document.querySelector('.new-item-form') as  HTMLFontElement;
```

## Classes

It is similar to the classes in java and other programmming language containing data members and functions.

```javascript
class Invoice{
    
    constructor(
        client:string,
        details:string,
        amount:number)
        {}

    format(){
        return `${this.client} owns Rs.${this.amount} for ${this.details}`;
    }
}

docone=new Invoice('sam','money for book ',3);

```

## Visibility

- private
- public
- readonly

```javascript
class Invoice{
    
    constructor(
        readonly client:string,
        private details:string,
        public amount:number)
        {}

    format(){
        return `${this.client} owns Rs.${this.amount} for ${this.details}`;
    }
}

docone=new Invoice('sam','money for book ',3);

```

## Interface

It is a important concept as it add structur to the program or class or anything.

```javascript
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

```