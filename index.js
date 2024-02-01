/* Aşağıda global olarak tanımlanmış değişkenler bulunmaktadır, bunları değiştirmeyiniz. Açıklamaları takip ederek görevleri tamamlayın. */

const pi = 3.14159;

const sayilar = [
  45, 856, 12.5, 63, 0.02, 154, 2, 54, 78, 61.7, 654, 26, 12.5, 63, 969, 152,
  32, 31, 14, 74, 32, 365.9, 5.2, 45, 76, 20, 27.4, 562, 12.15, 365.85, 45.87,
  22, 88, 56.4, 96.45, 23, 56, 332, 361, 713, 321, 258.3, 10, 974.8, 275, 570,
  707, 814, 326, 596, 626, 494, 546, 724.8, 359, 231.4, 883.1, 379.1, 691, 990,
  815.9, 937.1, 837.3, 859, 476, 370.8, 480, 860, 221.1, 78.8, 255, 613, 958,
  973.7, 209, 470.6, 157, 13, 314, 269.6, 885, 507.9, 383, 276, 636, 268.8,
  558.1, 114.7, 336, 311.7, 340, 403.2, 356.9, 529.5, 932.5, 17, 756.5, 771.6,
  415, 523.1, 736, 187.8, 680, 618.6, 945, 105, 712, 696.7, 217, 68, 500.7, 28,
  358.6, 69, 87.1, 477, 289, 86, 33, 885, 458, 102.8, 328.8, 776.1, 948, 762,
  902, 286, 810.9, 888, 770, 194, 423, 61.4, 916, 19, 146.5, 255, 38.4, 356,
  971, 19, 269, 49.3, 877.8, 474, 130, 113.3, 992, 198.2, 962, 467.3, 231,
  719.5, 708.3, 0.02, 196.2, 38, 178.3, 740, 521.8, 237, 140, 260.3, 546, 774.4,
  430, 531.4, 706.7, 238.4, 384, 14, 319.6, 992.1, 839, 572, 11.5, 788, 381,
  938, 430, 908.9, 398.1, 675.6, 568, 319.1, 593, 50, 574, 349.6, 316.6, 506.9,
  933, 180, 731, 692, 822, 552, 743, 250.7, 88.3, 986, 954, 930.1, 430.2, 590.8,
  971.1, 463.4, 798, 956.8, 845, 75, 156, 362, 41, 14.5, 76, 123, 369.4, 7.7,
  45, 78, 23, 27.4, 502, 12.0, 335.85, 45.87, 24, 85, 56.4, 96.45, 23, 57,
  337.8, 245, 703.02, 8.41, 1.3, 4.24, 1.17, 7.85, 5.94, 3.55, 8.45, 7.84, 296,
  30.1, 957.6, 207, 782, 762, 305.8, 628, 777, 798, 467.3, 828, 526, 588, 909,
  200.5, 209, 833, 159.6, 565, 901, 36, 501, 396.5, 197.2, 273, 314, 652, 123.9,
  561, 586, 523.4, 422, 793.5, 493.2, 686, 427, 5.22, 4.99, 0.08, 5.2, 1.7,
  3.85, 0.85, 2.04, 1.64, 7.16, 862, 506.4, 3.9, 159, 266, 548, 910.1, 919, 491,
  845, 650, 470.6, 464.5, 423.2, 730.8, 923, 239.5, 358.6, 339.1, 507, 667.7,
  867.7,
];

/* ÖRNEK GÖREV: KareninAlani fonksiyonunu kullanarak aşağıdakileri uygulayın: 
	1. Karenin kenar uzunluğunu fonksiyonun tek parametresi olarak alacak 
	2. Karenin alanını hesaplayacak (💡 İPUCU: karenin alanı = karenin kenar uzunluğunun karesi)
	3. Hesaplanan alanı döndürecek
*/

//Örneğin çözümü:
function KareninAlani(kenaruzunlugu) {
  return kenaruzunlugu * kenaruzunlugu;
}

console.log(KareninAlani(10));

/* GÖREV 1:  
- CemberinCevresi fonksiyonunu kullanarak aşağıdaki yönergeleri uygulayın:
	1. CemberinCevresi fonksiyonu parametre olarak sadece çemberin yarıçapını alacaktır. 
	2. Global değişken olarak verilmiş pi sayısı fonksiyon içinde kullanılacak (pi sayısı fonksiyonun parametresi olarak alınmayacaktır)
	3. Çemberin çevresi hesaplanacaktır (💡 İPUCU: Çemberin çevresi = 2 * pi * yarıçap)
	4. Hesaplanan çemberin çevresi döndürülecektir.
*/

function CemberinCevresi(yaricap) {
  return 2 * pi * yaricap;
}
console.log(CemberinCevresi(5))
/* 	GÖREV 2:  
- CemberinAlani fonksiyonunu kullanarak aşağıdaki yönergeleri uygulayın:
	1. Argüman olarak çemberin yarıçapını BİRİNCİ parametre olacak alacaktır. 
	2. Global değişken olarak verilmiş pi sayısını fonksiyonun İKİNCİ parametresi olacak alacaktır.
	3. Çemberin alanı hesaplanacaktır (💡 İPUCU: Çemberin alanı = pi * yarıçapın karesi, yarıçapın karesini bulmak için Javascript içinde tanımlı Math kütüphanesini kullanabilirsiniz. Math.pow(yaricap,2))
	4. Hesaplanan çemberin alanı döndürülecektir.
*/

function CemberinAlani(yaricap, pi) {
  return pi * Math.pow(yaricap, 2);
}
console.log(CemberinAlani(5, pi))

/* 	GÖREV 3: */
let ucetambolunenler,
  enkucuk,
  enbuyuk,
  ucebolunenlerintoplami,
  besyuzdenkucuksayilar,
  siralisayilar,
  tekraredensayilar;

// 3a çözümü

let enBuyuk = sayilar[0];
let enKucuk = sayilar[0];
for (let a=1; a<sayilar.length; a++) {
  if (sayilar[a] > enBuyuk) {
    enBuyuk = sayilar[a];
  }
  if(sayilar[a] < enKucuk) {
    enKucuk = sayilar[a];
  }
}

// 3b çözümü:

const uceBol = [];
sayilar.forEach((sayi) => {
  if (sayi % 3 === 0) {
    uceBol.push(sayi);
  }
});


// 3c çözümü:

const uceBolListeToplami = uceBol.reduce((toplam, sayi) => toplam + sayi, 0);

// 3d çözümü

const besYuzdenKucuk = sayilar.filter((sayi) => sayi < 500);

// 3e çözümü

const sirali = besYuzdenKucuk.sort((a, b) => a - b);

// 3f çözümü

const tekrarEden = [];
const sayiSayisi = {};
sayilar.forEach((sayi) => {
  if(!sayiSayisi[sayi]) {
    sayiSayisi[sayi] = 1;
  } else {
    sayiSayisi[sayi]++;
  }
});
for (const sayi in sayiSayisi) {
  if (sayiSayisi[sayi] > 1) {
    tekrarEden.push(`${sayi} sayısı ${sayiSayisi[sayi]} kere tekrar etmiştir.`)
  }
}

console.log("sayilar dizisindeki sayı adedi:", sayilar.length);
console.log("3a. En büyük sayı:", enBuyuk);
console.log("3a. En küçük sayı:", enKucuk);
console.log("3b. 3'e tam bölünenler:", uceBol);
console.log("3c. 3'e tam bölünenlerin toplamı:", uceBolListeToplami);
console.log("3d. 500'den küçük sayılar:", besYuzdenKucuk);
console.log("3e. Küçükten büyüğe sıralanmış sayılar:", sirali);
console.log("3f. Tekrar eden sayılar:", tekrarEden);
/*  Bu satırın aşağısındaki kodları lütfen değiştirmeyin  */

function sa() {
  console.log("Kodlar çalışıyor");
  return "as";
}
sa();
module.exports = {
  sa,
  CemberinCevresi,
  CemberinAlani,
  ucetambolunenler,
  enbuyuk,
  enkucuk,
  ucebolunenlerintoplami,
  besyuzdenkucuksayilar,
  siralisayilar,
  tekraredensayilar,
};
