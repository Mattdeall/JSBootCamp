


const maaslar =[50000, 80000, 40000, 30000];
let sum = 0
for( let i = 0; i<maaslar.length; i++){
    sum+= maaslar[i];
}
console.log("toplam maas ödemesi: "+sum);

const notlar = [50, 45, 67, 75, 15];

// let gecti = [];
// let kaldi = [];

// for(let i = 0; i<notlar.length; i++){
//     notlar[i]<50 ? kaldi.push(notlar[i]) : gecti.push(notlar[i]);
// }

// console.log(gecti);
// console.log(kaldi);

//?-------------- FOR IN -------------------
// for...in, bir nesnenin (object) ya da dizinin (array) özelliklerini veya indislerini döngüyle döner.
// Bir String üzerinde çalıştığında, stringin her bir karakterinin indisini (0, 1, 2, ...) döner.

let gecti = [];
let kaldi = [];
for (let i in notlar){
    // console.log(notlar[i]);
    notlar[i]<50 ? gecti.push(notlar[i]) : kaldi.push(notlar[i]);
};

console.log(gecti, kaldi);

const maaslar1 =[50000, 80000, 40000, 30000];

let toplam = 0;

for (let i in maaslar1){
    toplam+=maaslar1[i];
}
console.log(toplam);

const ortalama = toplam / maaslar1.length
console.log(ortalama);

/* -------------------------------------------------------------------------- */
//?-------------- FOR OF -------------------
//! for of dongusu, for in dongusunun bir cok veri yapisini kapsayacak sekilde guncellenmis halidir.
//! Bu dongude dizi icindeki veriye erisirken indisleme kullanmaya gerek yoktur.

const sayilar = [67, 78, 89, 54, 53, 21];
const buyuk = new Array();
const kucuk = new Array();

for (let i of sayilar){
    i > 60 ? buyuk.push(i) : kucuk.push(i);
}

console.log(buyuk, kucuk);

