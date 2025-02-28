/* -------------------------------------------------------------------------- */
//!                    SHORT CIRCUIT                              */
/* -------------------------------------------------------------------------- */
// JavaScript'te || (veya) ve && (ve) operatörleri, ifadeleri değerlendirirken "kısa devre" yaparak çalışır. Bu, ifadelerin doğruluğunu ya da yanlışlığını kontrol ederek sonuca erken ulaşmalarını sağlar. Böylece, gerekli olmadıkça diğer ifadeleri incelemezler.

// Short-Circuit Operatörleri Nasıl Çalışır?

// OR (||) Operatörü: İlk doğru (truthy) değeri bulduğunda durur ve onu döndürür. Eğer ilk ifade yanlış (falsy) ise, bir sonrakine geçer.

// AND (&&) Operatörü: İlk yanlış (falsy) değeri bulduğunda durur ve onu döndürür. Eğer ilk ifade doğru (truthy) ise, bir sonrakine geçer.

let yas = 10;

let kontrol = yas > 18 && "Oy Kullanabilir";

console.log(kontrol);

// kullanıcı giriş yaptığında premium üyeliği varsa "üyemiz hoşgeldiniz" yazsın

let isLoggedin = true;
let isPremium = true;

let message = isLoggedin && isPremium && "Premium Üyemiz Hoşgeldiniz";

console.log(message);

//! OR İşletimcisi - OR Operator

let sevilenRenk = null;
let varsayilanRenk = "mavi";

let color = sevilenRenk || varsayilanRenk || "renk tanımlı değil"; // True arıyor, sevilen renk = null yani falsy. o değeri döndürmez sonra sıradakini sınar. bu durumda varsayilan renk oluyor. o da string yani true bir değer, onu döndürüyor.

console.log(color);