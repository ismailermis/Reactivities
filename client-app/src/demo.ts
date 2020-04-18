let data: any; // let data: number | string

data = "test";

export interface ICar {
  color: string;
  model: string;
  topSpeed?: number; // ? ile optional yapmış oluyorruz.
}

const car1: ICar = {
  color: "Red",
  model: "BMV",
};
const car2: ICar = {
  color: "Blue",
  model: "Mercedes",
  topSpeed: 100,
};

const multiply = (x: number, y: number) => {
  x * y;
};
/*
  const multiply = (x: any, y: any): string => {
    // :string dönüş tipi
  
    return (x * y).toString();
  };
  */
export const cars = [car1, car2];
