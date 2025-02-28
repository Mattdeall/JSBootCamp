// -------------------------------
//          OPERATORS
//          ARİTMETİK OPERATÖRLER

let a = 10;
let b = 2;

console.log(a + b);
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();

// öncelik sıralaması - işlem önceliği
// üs, parantez içi, çarpma/bölme, çıkarma/toplama

// Dakika olarak verilen aşağıdaki değer kaç saat kaç dakikaya denk gelmektedir?

let sure = 377;

let saat = Math.floor(sure / 60);

console.log(saat);

let dakika = sure % 60;

console.log(dakika);

console.log(`${saat}:${dakika}`);

// Increment & Decrement
// x++ print first, then increment
// ++x increment first, then print

let x = 10;

console.log("Increment");
console.log(++x);
console.log(x++);
console.log(x);
console.log("Decrement");
console.log(--x);
console.log(x--);
console.log(x);

// Atama Operatorleri - Assignment Operators

let t = 7;
let z = 6;

t = z; // z'nin değeri 7 olmaz, z'nin yeni değeri 6 olur.
// sol tarafı bir konteyner gibi düşün. number koyarsan number olur, string koyarsan string olur.
// bellekte o kutu yer kaplar
console.log(z, t);
t = t + z;

console.log(t); // 12 dönderir

t += z; // t = t + z

console.log(t);
console.log((t += z));

console.log(t);

console.log((t -= z));

console.log((t -= z));

t *= z;

console.log(t);
t /= 12;
console.log(t);

console.log(t == z); // true

t *= z;
console.log(t);

t %= 5;
console.log(t);

t *= z;
console.log(t);

if ((t %= 6) === 0) {
  console.log("true");
} else {
  console.log("false");
}

//          KARSILASTIRMA ISLETIMCILERI (COMPARISON OPERATORS)

let c = 2;
let d = "2";

console.log(typeof c);

console.log(typeof d);

console.log(c == d); // değer sınaması yapar

console.log(c === d); // === hem değer hem tip sınaması yapar

// Otomatik Tip Dönüşümü - Type Conversion

// + Hariç diğerlerinde bir string ve bir number ifade işleme alınıyorsa JS insiyatif kullanır ve işlemi gerçekleştirir.

console.log(c - d);

console.log(c != d); // false döner eşittir demiş oluyor:
//eşit değildir ==> false yani eşittir sonucunu veriyor. ikisi değer olarak eşit olduğu için eşit değildir kontrolünde (False) yani eşittir olarak veriyor. Tiplerine bakmadan kontrol ediyor.
console.log(c !== d); //2 = "2" eşit değil değil mi evet bunlar eşit değil

//----------------------------------------------------------
console.log("----------------------------------------------------------");
console.log(5 > 4);

console.log(5 < 4);

console.log(7 >= 17);

//          Mantıksal Operatorler (Logical Operators)

console.clear();

//! Ve İşletimcisi (AND Operator)

//Mükemmeliyetçi gibidir- herşey true olmalı. bir tane false gördüğü anda işlem orada biter

console.log(true && true && true && false); // false döner

console.log("elma" && "armut" && "muz" && "çilek"); //returns çilek

console.log("elma" && "armut" && "muz" && "" && "çilek"); //boş string döner

console.log(typeof ("elma" && "armut" && "muz" && "" && "çilek"));

//falsy değerler
console.log("Falsy Değerler");
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(false));

console.log(Boolean({})); //true döenr
console.log(Boolean([])); //true döner

console.log(true && true && 1 && "string");

// OR İşletimcisi (OR Operator)
// bir tane true arar--herşey false olsa bile bir tane true değeri olsa yeter onu döndürür. her şey false ise son false değerini döndürür.

console.log(false || false || 1 || false || false); //1 döndürdü. gerisini render etmedi


