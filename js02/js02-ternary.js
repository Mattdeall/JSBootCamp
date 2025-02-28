


// Ternary İşletimcisi - Ternary Operator



let yas = 18;

if(yas >= 18){
    console.log("Oy Kullanabilirsin")
}else {
    console.log("Oy Kullanamazsın")
}

yas>=18 ? console.log("Oy Kullanabilirsin") : console.log("Oy Kullanamazsın")


// 2. Yol

// let message = yas>=18 ? "Oy Kullanabilirsin" : "Oy Kullanamazsın"

// console.log(message);

// let age = 20;

// let gender = "Erkek";

// let health = true;

// if (age>18 && gender == "Kadın" && health == true){
//     console.log("askerlik yapabilir")
// }else {
//     console.log("Askerlik yapamazsın")
// };

// const sonuc = age >= 18 && gender == "Erkek" && health == true ? "Askerlik yapabilir" : "Askerlik yapamaz";
// console.log(sonuc);

// let sayi = prompt("sayi giriniz");

// console.log(sayi);

// let result = sayi%2 === 0 ? "Çift Sayı" : "Tek Sayı"

// console.log(result);

//Nested Ternary

// Hıza göre mesaj gönder

let hiz = 180;

if (hiz >120){
    console.log("hızlı")
}else if(condition){
    console.log("normal")
}else{
    console.log("yavas")
};

let speed = 110;

let spdy = speed > 120 ? "hızlı" : speed>90 ? "normal" : "yavaş"
console.log(spdy)

//gün cts pazarsa haftasonu yoksa hafta içi yazsın

let gun = "cumartesi"

let durum = gun === "cumartesi" || gun === "pazar" ? "Haftasonu" : "Haftaiçi"

console.log(durum)