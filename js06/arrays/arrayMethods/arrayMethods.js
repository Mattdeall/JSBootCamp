// ?==============================================
// ?            DIZI ERISIM METOTLARI
// ?==============================================

//Array Property
/* -------------------------------------------------------------------------- */
/*                                   length                                   */
/* -------------------------------------------------------------------------- */
// Bir arrayın kaç elemandan oluştuğunu verir

const number = [3, 5, 2, "4", "bes", "dort", 3, 6, "bes", 5, 56];

console.log(`Number arrayi ${number.length} eleman sayısına sahiptir`);

//! Includes Method

console.log(number.includes(3)); //true
const userList = [
  "excalibur16",
  "cezalandırıcı28",
  "fişek44",
  "tozduman55",
  "crazyboy_56",
];
// const guest = prompt("Bir kullanıcı adı girin");
// userList.includes(guest)
//   ? console.log("KAyıtlı kullanıcı giriş yap")
//   : console.log("Kayıt olabilirsiniz");

//! Indexof ve Lastindexof

console.log(number.indexOf(5));
console.log(number.indexOf("bes"));

if (number.indexOf("bes") < 0) {
  console.log("Aranan öğe bulunamadı!");
} else {
  console.log(`Aradğınız öğenin sıra numarası = ${number.indexOf("bes") + 1}`);
}

//! Join Method

const statement = ["oku", "da", "adam", "ol"];

console.log(statement.join(" "));

const newStr = statement.join(" ");

console.log(statement, newStr); // didnt change the original string;

//! Slice

console.log(statement.slice(1,3));