console.log("----------if, ifelse, else------------")

// if (şart){
//  şart durumu doğru ise bu blogu çalıştır
//}else{
//  şart durumu doğru değilse bu bloğu çalıştırır
//}

// let sayi = Number(prompt("Bir sayı giriniz."))
// let kalan = sayi%2
// if( kalan === 0){
//     console.log("Çift Sayı Girdiniz")
// }else{
//     console.log("Tek sayı girdiniz")
// }


let sayi1 = +prompt("birinci sayi");
let sayi2 = +prompt("ikinci sayı");
let operator = prompt("+,-,* değerlerinen birini giriniz");
let sonuc;


if(operator == "+"){
    sonuc = sayi1 + sayi2
}else if (operator == "-"){
    sonuc = sayi1 - sayi2
}else if(operator == "*"){
    sonuc = sayi1 * sayi2
}else{
    console.log("geçersiz operator")
}

console.log(sonuc);

// 2. Short Circuit

