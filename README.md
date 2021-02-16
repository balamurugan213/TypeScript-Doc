# Webpack and typecript

-Init type script.

```cmd
tsc --init
```

-Initialize package.json(npm dependencies)

```cmd
npm init
```

-Install webpack and other requirements

```cmd
npm install webpack webpack-cli ts-loader -D
```

Note:-D will add package to the dependencies

---

## Create Webpack file

webpack.config.js

```js
const path =require('path');

module.exports={
    entry:'./src/index.ts',
    module:{
        rules:[
            {
                test:/\.ts$/, 
                use:'ts-loader',
                include:[path.resolve(__dirname, 'src')]
            }
        ]
    },
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
}
```

To run the file add webpack in the script of package.json

```json
"scripts": {
    "build":"webpack",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

Run

```cmd
npm run build
```

## To  create a live server 

```cmd
npm install webpack-dev-server -D
```
