//? ====================================================
// ?              FONKSİYONLAR - RECURSIVE
// ? ====================================================

//* Kendi kendi çağıran fonksiyona recursive fonksiyon denilir.
// BAzı formülü olan  matematiksel problem için kullanılabilir

//? verilen sayıya kadar(sayı dahil olmak şartıyla) olan sayma sayılarının toplamını bulan fonksiyon

//Klasik Yöntem

const toplam = (num) => {
  let toplam = 0;

  for (let i = 0; i <= num; i++) {
    toplam += i;
  }
  console.log("sayıların toplamı ", toplam);
};
toplam(10);

//! Recursive Fonksiyonun Yapısı

// Bir recursive fonksiyonun çalışması için en az iki temel bileşene ihtiyaç vardır

//? sonlanma koşulu: fonksiyonun kendi kenidne çağırılmasını dururma koşulu

const toplamlar = (n) => {
  if (n < 1) {
    return n;
  } else {
    toplamlar(n - 1) + n;
  }
};

console.log(toplamlar(8));

const fact = (n) => {
  if (n == 1) {
    return n;
  }
};

const countDown = (num) => {
  console.log(num);
  const updatedNum = num - 1;
  (updatedNum>=0) ? countDown(updatedNum) : console.log("bitti")
};


countDown(10);