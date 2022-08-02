//functions returning callbacks

export function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

// function as types

export type MutationFunc = (v: number) => number;

// function with params

export function ArrayMutate(
  numbers: Array<number>,
  mutate: MutationFunc
): number[] {
  return numbers.map(mutate);
}

console.log(ArrayMutate([1, 2, 3], (v) => v * 10));

const myNewMutateFunc: MutationFunc = (v: number) => v * 20;

// functions returining functions - closure

export type AdderFunction = (v: number) => number;

function addValue(num: number): AdderFunction {
  return (value: number) => value + num;
}

const addOne = addValue(55);
console.log(addOne(1));
