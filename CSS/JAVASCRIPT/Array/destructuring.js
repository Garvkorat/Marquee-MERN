// let arrayOfCars = ['Maruti', 'Brezza', 'Innova Hycross', 'Hyundai'];

// const [first, second, ...third] = arrayOfCars;

// console.log(first);  
// console.log(second); 
// console.log(third);  


function createArray() {
  const items = [];
  return {
    push: (element) => items.push(element),
    getElement: (index) => items[index],
    getArray: () => items
  };
}

const myArray = createArray();
myArray.push(10);
myArray.push(20);
myArray.push(30);
myArray.push(50);
myArray.push(60);

console.log(myArray.getElement(1));
console.log(myArray.getElement(4));
console.log(myArray.getArray());

