//! For Each Method

const sayilar = [675, 45, 244, 235, 12, 89];

// for (let sayi of sayilar){
//     console.log(sayi);
// }

//! same example with forEach

sayilar.forEach((x) => console.log(x)); // one line arrow function does not require return ( inline arrow function )

const fruit = ["Elma", "Armut", "Muz", "Çilek"];

fruit.forEach((item) => console.log(item.toUpperCase())); // Does not return anything

let yas = [11, 17, 82, 45, 52, 34, 45];

yas.forEach((x) =>
  x >= 18
    ? console.log(`${x} Yetişkin bir yaştır`)
    : console.log(`${x} Yetişkin bir yaş değildir`)
);

yas.forEach((x) => {
  if (x >= 18) {
    console.log(`${x} yetişkin bir yaştır`);
  } else {
    console.log(`${x} çocuk bir yaştır`);
  }
});
//2. Yöntem
yas.forEach(yasYazdir);

function yasYazdir(x) {
  console.log("2.yöntem " + x);
}
//3. Yöntem
yas.forEach(function (x) {
  console.log("3.yöntem " + x);
});

//? forEach 3 parametre alır birincisi zorunlu.
//? ikinci parametre indextir.

const sebzeler = ["pırasa", "havuç", "ıspanak", "lahana", "kabak"];

sebzeler.forEach((sebze, index) => {
  console.log(`${index + 1} Numaralı sebze ${sebze}dir`);
});

sebzeler.forEach((item, index, arr) => console.log(item, index, arr));

const numbers = [1, 2, 3, 4, 5, 6];

let kare = [];

kare = numbers.forEach((num) => num * num);

console.log(kare); //! Crucial info forEach is void method

const sicakliklar = [23, 25, 22, 25, 19, 21, 25, 26, 22];

let toplamSicaklik = 0;
let sicakGunler = 0;
let farkToplami = 0;

let sonuc = sicakliklar.forEach((sicaklik, index, arr) => {
  toplamSicaklik += sicaklik;
  sicaklik > 22 ? sicakGunler++ : null;
  if (index < arr.length - 1) {
    const fark = Math.abs(arr[index + 1] - sicaklik);
  }
});
console.log(toplamSicaklik);
let ort = toplamSicaklik / sicakliklar.length;
console.log(ort.toFixed(2));

console.log(sicakGunler);
console.log(farkToplami);
console.log(`Sonuç: ${sonuc} - undefined çünkü değer döndürmez`);

//! MAP METHOD

const numbers1 = [45, 243, 123, 78, 23, 56];
//? Callback function is function that hold a place as a parameter of a method

const kare1 = numbers1.map((num) => num * num); // if it was forEach instead of map that would return undefined

console.log(numbers1, kare1);

//? write a program that covnert every item of an array into a capital

const isimler = ["Tuğba", "Nur", "Recep", "Celal", "Bahar", "Helen"];

let isimlerDuzenli = isimler.map((x) => x.toUpperCase());

console.log(isimlerDuzenli);

macBookTL = [90000, 75000, 60000, 40000, 30000];
const euro = 40;
const dollar = 36;

const macEuro = macBookTL.map((x) => x / euro);
console.log(macEuro);
const macDollar = macBookTL.map((x) => Math.trunc(x / dollar));

console.log(macDollar);
//! süslü kullandığımız zaman return yazılmalı

const macKur = macBookTL.map((mac) => {
  return Math.trunc(mac / dollar);
});
console.log(macKur);

//?-------------- ÖRNEK-2 -------------------
//?Öğrencinin sırasını,notunu ve başarı durumunu döndüren bir işlem
//? Notu 50 den büyükse başarılı değilse başarısız

const sinavSonuclari = [85, 72, 95, 60, 45, 47, 88];

//! map method take 3 parameters like forEach

let sonucDeg = sinavSonuclari.map((notu, index, arr) => {
  const durum = notu > 50 ? "Başarılı" : "Başarısız";
  // return `${index+1}. Öğrencinin notu: ${notu}, Durumu: ${durum}`;
  return [index + 1, notu, durum];
});

console.log(sonucDeg);

//! Filter Method

//? Belirli bir koşulu sağlayan elemanlar yeni bir dizi döner
//?-------------- ÖRNEK -------------------
//? maasi 50000 den büyük olanları yeni bir dizide toplayınız
const maaslar = [90000, 75000, 60000, 40000, 30000, 450000, 150000];

const buyuk = maaslar.filter((maas) => maas > 50000);
console.log(buyuk);

const basariliOgrenci = sinavSonuclari.filter((not) => not >= 50);

console.log(basariliOgrenci);
console.log(sinavSonuclari);

const names = ["Ali", "Mehmet", "Ayşe", "Zeynep", "Seda"];
const uzunAdlar = names.filter((x) => x.length > 4);
console.log(uzunAdlar);
const aIcerenAdlar = names.filter((x) => x.toLowerCase().includes("a"));
console.log(aIcerenAdlar);

const dusukMaas = maaslar.filter((c) => c <= 50000);

console.log(dusukMaas);

const zamliDusukMaas = dusukMaas.map((z) => z * 1.3);
console.log(zamliDusukMaas);

const zamli = maaslar.filter((x) => x < 50000).map((a) => a * 1.3);
console.log(zamli);
const zamli1 = maaslar
  .filter((x) => x < 50000)
  .map((a) => a * 1.3)
  .forEach((b) => console.log(b));
console.log(zamli1); // forEach void method ended the chain aq

//! Reduce Method

const maaslar2 = [90000, 75000, 60000, 40000, 30000, 450000, 150000];

const toplam1 = maaslar2.reduce((acc, item) => {
    return acc + item; // Assuming you want to sum the items
}, 0); // 0 is the initial value for the accumulator


//!REMAINING METHODS: EVERY, SOME, FINDLAST, FINDREDUCE