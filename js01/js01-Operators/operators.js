//Operatorler
//Aritmetik Operatorler

//Toplama

let yas = 34;

yas++;

console.log(yas);

let yas2 = 34;

yas2--;
console.log(yas2);

let sayi3 = 5;

sayi3 = 5 * 5;

const kola = 50;
const cips = 60;
const cikolata = 35;
let toplam = kola + cips + cikolata;

console.log("Aburcubur toplam fiyatı :", toplam);

console.log(
  `Fiyat Listesi kola = ${kola}, cips ${cips}, cikolata = ${cikolata}`
);

//increment (bir arttırma)

let toplam1;

toplam1 = 15;

toplam1++;

console.log(toplam1);

toplam1 += 10;

console.log(toplam1);

// concatination. + operatoru stringlerde birleştirme yapar

const ad = "Joseph";

const soyad = "Bilir";

console.log(ad + " " + soyad);

//Increment ile ilgili

//incement kod satırı çalıştıktan sonra değişkenin değerini değiştirir.

let a = 5;

console.log("ilk", a++);

console.log("ikinci", a); //increment ilk satır çalıştıktan sonra çalıştı

let b = a++;

console.log("b", b);
console.log("a", a);

let e = 45;

console.log(e--);
console.log(e);
console.log(--e);

//e'yi 5 arttır

e+=5;

console.log(e);

//e'nin 5 katı

e*=5;

console.log(e)


//Çarpma ve Üs Alma

const pi = 3.14

const yaricap = 5;

const alan = pi*yaricap**2;

console.log(alan)