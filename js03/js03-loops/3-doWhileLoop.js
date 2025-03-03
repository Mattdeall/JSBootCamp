// * ============================================
// *            DONGULER(LOOPS)- DO-WHILE
// * ============================================

console.log("****** DO-WHILE *******");

let devammi="";

do{
    let vize= +prompt("vize");
    let final= +prompt("final");
    //ortalama
    console.log((vize + final) / 2)

    devammi = prompt("devam?")
}while(devammi == "evet");
console.log("Programı kullandığınız için teşekkürler");