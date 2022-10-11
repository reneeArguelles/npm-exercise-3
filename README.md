# npm-exercise-3: Infix to Postfix Converter

## Description
- This program takes a **single** infix expression as an argument and converts it to postfix using this [expression-parser](https://www.npmjs.com/package/@estilles/expression-parser) module. If used with more than 1 argument, only the first one will be converted to postfix.

## Usage
To use the converter, run the commands as specified:
### NPM ([expression-parser](https://www.npmjs.com/package/@estilles/expression-parser)) Module Installation
```
npm install @estilles/expression-parser
```

### To Run the Program
```
node index '<infix-expression>'
```

> _NOTE: the infix expression must be enclosed in string quotations to catch the cases with the * operation and the () symbol for grouping_

### Sample Usage
Sample Input
```
node index '1+2*3/4'
```
Expected Output
```
1 2 3 * 4 / +
```
