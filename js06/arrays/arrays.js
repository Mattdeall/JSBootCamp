//! ******ARRAYS*********
//? THEY ARE ONE OF THE NON PRIMITIVE DATA TYPE
//? ARRAYS ARE ONE OF MOST USED DATA STRUCTURE



//1- they are a data structure
//2- they are non primitive
//3- array's reference address kept on stack, data kept in heap
//4- they are ordered. each member of the array has a number in order

// how to create?

// 1 - Square Bracket (array literal) most used method

const names= ["ahmet", "mehmet", "ali", "veli", 56, true, [5,4,7,2]];

console.log(names);
console.log(typeof names);
console.log(names.length);


// Reading-Writing data from array (Indexing)
//---------------------------------------

//? Reading

console.log(names[1]);
console.log(names[5]);
console.log(names[6][2])//6 th index's 2nd index
console.log(names[names.length-1]) // last item of the array
//they are immutable, you wont change any data with these methods

const newNames = names[names.length-1]
console.log(newNames);

//? Writing
names[3] = "Can";

console.log(names);
names[4]++;
console.log(names[4])//it was 56 before increment. we could access this data even though it is declared by const. it is because of stack-heap

console.log(names[0].toUpperCase());

//! 2nd Method Object Constructor

const programmingLanguages = new Array("Go", "JS", "Python");
console.log(programmingLanguages)

const myArr = new Array(10);
console.log(myArr);

const sayilar = Array.of(4,1,3)

console.log(sayilar);

//? ===========================================================
//?  DIZIYI DEGISTIREN (MUTATOR) METOTLAR
//? ===========================================================

// programinLanguage.push("HTML")
// console.log(programinLanguage)