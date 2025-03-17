//! ******ARRAYS*********
//? THEY ARE ONE OF THE NON PRIMITIVE DATA TYPE
//? ARRAYS ARE ONE OF MOST USED DATA STRUCTURE

//1- they are a data structure
//2- they are non primitive
//3- array's reference address kept on stack, data kept in heap
//4- they are ordered. each member of the array has a number in order

// how to create?

// 1 - Square Bracket (array literal) most used method

const names = ["ahmet", "mehmet", "ali", "veli", 56, true, [5, 4, 7, 2]];

console.log(names);
console.log(typeof names);
console.log(names.length);

// Reading-Writing data from array (Indexing)
//---------------------------------------

//? Reading

console.log(names[1]);
console.log(names[5]);
console.log(names[6][2]); //6 th index's 2nd index
console.log(names[names.length - 1]); // last item of the array
//they are immutable, you wont change any data with these methods

const newNames = names[names.length - 1];
console.log(newNames);

//? Writing
names[3] = "Can";

console.log(names);
names[4]++;
console.log(names[4]); //it was 56 before increment. we could access this data even though it is declared by const. it is because of stack-heap

console.log(names[0].toUpperCase());

//! 2nd Method Object Constructor

const programmingLanguages = new Array("Go", "JS", "Python");
console.log(programmingLanguages);

const myArr = new Array(10);
console.log(myArr);

const sayilar = Array.of(4, 1, 3);

console.log(sayilar);

//? ===========================================================
//?  DIZIYI DEGISTIREN (MUTATOR) METOTLAR
//? ===========================================================
const cars = ["BMW", "Audi", "Mercedes", "Scoda", "Porche", "Tesla"];
// programinLanguage.push("HTML")
// console.log(programinLanguage)

/* -------------------------------------------------------------------------- */
//!                                 PUSH METODU                               */
/* -------------------------------------------------------------------------- */
//* push() dizinin sonuna eleman ekler. ( Çok kullanılacak önemlidir)
//* Yeni eleman eklenmiş halini döndürür.
//* Yeni eklenmiş eleman ile birlikte eleman sayısını döndürür.

const newCar = cars.push("Jeep");
console.log(cars);
console.log(newCar);

/* -------------------------------------------------------------------------- */
//!                                 POP METODU                                */
/* -------------------------------------------------------------------------- */
//** pop() son elemani siler ve sildigi elemani dondurur.

const deletedcar = cars.pop();
console.log(cars);
console.log(deletedcar);

/* -------------------------------------------------------------------------- */
//!                                 UNSHIFT METODU                            */
/* -------------------------------------------------------------------------- */
//* unshift dizinin 0. indeksine eleman ekler ve dizinin son eleman sayisini dondurur.

const ElemanEkle = cars.unshift("Tofaş");
console.log(cars);
console.log(ElemanEkle);

/* -------------------------------------------------------------------------- */
//!                                 SHIFT METODU                              */
/* -------------------------------------------------------------------------- */
//* shift, dizinin 0. indeks elemanini siler ve silenen elemani dondurur.
const elemanSilinen = cars.shift();
console.log(cars);
console.log(elemanSilinen);




/* -------------------------------------------------------------------------- */
//!                                   SPLICE                                  */
/* -------------------------------------------------------------------------- */
//* Bir array içinde arada bir noktaya ekleme yapmak için kullanılır
//? 1.parametre: eklenecek indis numarasi
//? 2.parametre: 0 ise araya ekleme, 1 ise uzerine yazma
//? 3.parametre: yeni eklenecek veri
cars.splice(2, 1, "Serçe", "Seat", "Bugatti", "Togg"); //2nd parameter 1 overwrites (replaces), if it was 0 it would add on

console.log(cars);

cars.splice(5, 1, "Ford");
console.log(cars);

cars.splice(3, 0, "Fiat");
console.log(cars);

cars.splice(3); //returns the first 3 items of the array;

console.log(cars);

/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
//!                                   REVERSE                                 */
/* -------------------------------------------------------------------------- */
// Diziyi tersine çevirir.
console.log(cars)
console.log(cars.reverse())
console.log(cars[2])

console.log(cars);
console.log(cars.reverse());
console.log(cars[2])


/* -------------------------------------------------------------------------- */
//!                                    SORT                                   */
/* -------------------------------------------------------------------------- */
//! sort metodu diziyi iterasyona ugratir ve ascii karaktere göre sıralama yapar.
//! Dolayısıyla string'le doğru şekilde sıralama yapabilir.

cars.sort()
console.log(cars)

// Sort metodu sayılarıda stringmiş gibi bir sıralamaya sokar. Bu nedenle sayısal oalrak hatalı bir sıralama oluşur. 

const numbers1=[3,556,243,133,6,78,98];

numbers1.sort();
console.log(numbers1) // It wont work since it based on ascii hierarchy

numbers1.sort((a,b)=>a-b);
console.log(numbers1)