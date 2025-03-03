// * ============================================
//!            WHILE LOOP
// * ============================================
// JavaScript'te while döngüsü, bir koşul doğru olduğu sürece belirli bir kod bloğunu tekrar tekrar çalıştırmak için kullanılır.

// while (şart){
//     yapılacak işlemler
// }

// let i = 0;
// while(i<10){
//     console.log(i);

//     i++

// }

//kullanıcıdan doğru şifre gelene kadar şifre girmesini isteyelim

// let password = prompt("şifre");

// while(password!= "123asd"){
//     password = prompt("şifre");
// }

// console.log("tebrikler")

//0-100 arasında bir değer isteyen snippet
// let number1 = +prompt("sayi");

// while (number1 < 0 || number1 > 100) {
//   alert("Geçersiz bir sayı girdiniz.");

//   number1 = +prompt("Lütfen Belirtilen Aralıkta Bir Sayı Girin. çıkmak için q değeri girin");
//   if(number1 == "q"){
//     break
//   }
// }
// console.log(`girdiğiniz sayı ${number1}`);

// if(number1== "q"){
//     console.log("Döngüden kendi rızanız ile ayrıldınız")
// }

//? : Tahmin Oyunu
//* Program 1*20 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer 5 hak içinde bildi ise "Tebrikler  bildiniz" yazacaktır.

const sayi4 = 24.65;
const sayi5 = 54.211;

console.log(sayi4.toFixed(1)); //ondalık basamak sayısı
console.log(Math.floor(sayi5)); // küçüğüne yuvarlar
console.log(Math.ceil(sayi4)); // büyüğüne yuvarlar
console.log(Math.random()); // 0-1 arası rasgele sayı
console.log((Math.random() * 10).toFixed(2));

<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sayı Tahmin Oyunu</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 400px;
            margin: 50px auto;
            padding: 20px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        input {
            padding: 10px;
            font-size: 16px;
            margin: 10px 0;
            width: 80%;
        }
        button {
            padding: 10px 15px;
            font-size: 16px;
            background: #007bff;
            color: white;
            border: none;
            cursor: pointer;
            border-radius: 5px;
        }
        button:hover {
            background: #0056b3;
        }
        .message {
            margin-top: 15px;
            font-size: 18px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Sayı Tahmin Oyunu</h2>
        <p>1 ile 100 arasında bir sayı tahmin edin</p>
        <input type="number" id="guess" placeholder="Tahmininizi girin">
        <button onclick="playGame()">Tahmin Et</button>
        <p class="message" id="message"></p>
        <p class="message" id="remaining"></p>
    </div>

    <script>
        let hak = 5;
        let rasgele = 18;

        function playGame() {
            if (hak > 0) {
                const tahmin = Number(document.getElementById("guess").value);
                hak--;
                
                if (tahmin === rasgele) {
                    document.getElementById("message").innerText = "🎉 Bildiniz!";
                    return;
                } else if (tahmin > rasgele) {
                    document.getElementById("message").innerText = "📉 Azalt!";
                } else {
                    document.getElementById("message").innerText = "📈 Arttır!";
                }
                
                document.getElementById("remaining").innerText = `Kalan Deneme: ${hak}`;
                if (hak == 0) {
                    document.getElementById("message").innerText = "😞 Hakkınız bitti!";
                }
            }
        }
    </script>
</body>
</html>
