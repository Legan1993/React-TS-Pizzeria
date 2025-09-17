import React from 'react';
import './App.css';

// https://www.typescriptlang.org/docs/handbook/intro.html
let pizza: string = 'Salami';
let asStock: boolean = true;

let pizzas: string[] = ['Salami', 'Saussage'];
let numbers: number[] = [1, 2, 3];

const order1: Object = {title: 'margarita', quantity: 10};
const order2: {title: string, quantity: number} = {title: 'margarita', quantity: 10};

type Order = {
  title: string,
  quantity?: number
}
const order3: Order = {title: 'margarita', quantity: 10};
const order4: Order = {title: 'margarita'};
const orders: Order[] = [
  {title: 'margarita'},
  {title: 'salami', quantity: 10}
];

let number: null | number = null;
number = 10;

const unknown: unknown = 'test';
//test.trim(); вызовет ошибку

const printTitle1 = (title: string) => {
  console.log(title);
};

//void - функция возвращает undefined. never - функция никогда ничего не возвращает (даже undefined)
type PrintTitle = (title: string) => void;
const printTitle2: PrintTitle = (title) => {
  console.log(title);
};
//printTitle2('salami');

type X = {
  a: string,
  b: number
}
type Y = X & {
  c: string,
  d: number
}
let y: Y = {
  c: 'test',
  d: 5,
  a: 'one',
  b: 10
}

interface Auto {
  country: string
}
interface BMW extends Auto {
  model: string,
  year: number
}
let bmw: BMW = {
  model: '5',
  year: 2023,
  country: 'Russia'
}

function App() {
  return (
    <div className="App">
      New App!
    </div>
  );
}

export default App;
