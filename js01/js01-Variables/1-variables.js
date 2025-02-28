const yas = 34;

console.log(yas, "yas değişkeinin tipi şudur: ", typeof yas);

const yas1 = 45; //const ile tanımlanan değişkene bu şekilde yeni bir değer atanamaz.

// const isim3; //const > constant yani sabit. tanımlanırken bir değer atanmalıdır. let yazsak hata almazdık.

// let isim2;

// isim2 = prompt();
// console.log(isim2);

// const isim = "Matt";
// console.log(typeof isim) //returns string

let dil;

dil = "java";

console.log(typeof dil); //returns string

dil = true;

console.log(typeof "dil"); //returns string

console.log(dil, typeof dil); //returns boolean, we can re assign values to the variables defined via let
var sayi2 = 45;

sayi2 = 561;

console.log(sayi2);

console.log("****************************************************");

var ilk = "GLOBAL";

console.log(ilk);

{

    console.log(ilk);
    ilk = "Ortamalı"

    console.log(ilk)
    var ikinci = "güvensiz"
}

console.log(ilk);
console.log(ikinci)
//! var keyword ü kullanılınca blok içerisinde ve dışarısında erişebiliriz. blok içinde tanımlanan değişkene dışardan da erişebiliriz

let first = "osman";

console.log(first);

{
    console.log(first);
    first = "hüseyin";
    let second = "Raife"
}

console.log(first) // globalde tanımlanan bir değişkene blok seviyede yeni bir değer atanırsa bu değer global scope'ta da değişir
// console.log(second) //undefined çünkü blok scope'ta tanımlanan bir değişkene globalden ulaşılmaz

let birr = "Cemal";

console.log(birr);

{
    console.log(birr);
    const iki = "hasan"

    // console.log(iki)
}

console.log(iki); //iki is not defined cuz initially it is defined within a block