//! ---------------------------------------------
//! ****************** SWITCH - CASE ***********
//! ---------------------------------------------
// Switch -case bloğu if-else gibi kullanılacak if-else alternatif bir yöntemdir.
// Burda bir şart durumunun karşılacağı birden fazla ihtimale göre ortaya çıkabilme ihtimali olan her duruma karşılık bir yapı verilir .
// Switch de önemli olan şey;  bir şartla karşılaştığı zaman onu uygular ve devam eder işte o noktada çıkmasını istiyoruz ve kod blogunu kırıp çıkmazsak sadece sonuncu değeri yazar

// break

// let urun = prompt("lütfen ürün giriniz.");
// let fiyat;

// switch (urun) {
//   case "kalem":
//     fiyat = "Kalem 5 AUD";
//     break;
//   case "defter":
//     fiyat = "Defter 3 AUD";
//     break;
//   case "silgi":
//     fiyat = "Silgi 5 AUD";
//     break;
//   default:
//     console.log("Stokta yok.");
// }

// fiyat ? console.log(fiyat) : console.log("Gerersiz ürün girdiniz")


// Kıdeme göre alınacak promosyon miktarını gösteren programı switch case ile oluşturalım

// prof: 1000AUD
// senior: 700AUD
// junior: 300AUD
// defult: 1000AUD


let maas = 1000;

let kidem = prompt("Kıdem giriniz.");
let promosyon;

switch(kidem){
    case "prof":
        console.log(`Yeni maaşınız ${maas+=1000}.`);
        break;
    case "senior":
        console.log(`Yeni maaşınız ${maas+=700}`);
        break;
    case "junior":
        console.log(`Yeni maaşınız ${maas+=300}`);
        break;
        default:
            console.log(`Yeni maaşınız ${maas+=300}`)
}

let a = true;

a ? console.log("a True değerdir") : console.log("a False değerdir")
