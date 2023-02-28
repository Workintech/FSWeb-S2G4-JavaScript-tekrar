/* Aşağıda global olarak tanımlanmış değişkenler var, bunları sakın değiştirme. Yönergeleri adım adım takip ederek görevleri tamamla. */

var pi = 3.14159;

var sayilar = [45,856,12.5,63,0.02,154,2,54,78,61.7,654,26,12.5,63,969,152,32,31,14,74,32,365.9,5.2,45,76,20,27.4,562,12.15,365.85,45.87,22,88,56.4,96.45,23,56,332,361,713,321,258.3,10,974.8,275,570,707,814,326,596,626,494,546,724.8,359,231.4,883.1,379.1,691,990,815.9,937.1,837.3,859,476,370.8,480,860,221.1,78.8,255,613,958,973.7,209,470.6,157,13,314,269.6,885,507.9,383,276,636,268.8,558.1,114.7,336,311.7,340,403.2,356.9,529.5,932.5,17,756.5,771.6,415,523.1,736,187.8,680,618.6,945,105,712,696.7,217,68,500.7,28,358.6,69,87.1,477,289,86,33,885,458,102.8,328.8,776.1,948,762,902,286,810.9,888,770,194,423,61.4,916,19,146.5,255,38.4,356,971,19,269,49.3,877.8,474,130,113.3,992,198.2,962,467.3,231,719.5,708.3,0.02,196.2,38,178.3,740,521.8,237,140,260.3,546,774.4,430,531.4,706.7,238.4,384,14,319.6,992.1,839,572,11.5,788,381,938,430,908.9,398.1,675.6,568,319.1,593,50,574,349.6,316.6,506.9,933,180,731,692,822,552,743,250.7,88.3,986,954,930.1,430.2,590.8,971.1,463.4,798,956.8,845,75,156,362,41,14.5,76,123,369.4,7.7,45,78,23,27.4,502,12.00,335.85,45.87,24,85,56.4,96.45,23,57,337.8,245,703.02,8.41,1.3,4.24,1.17,7.85,5.94,3.55,8.45,7.84,296,30.1,957.6,207,782,762,305.8,628,777,798,467.3,828,526,588,909,200.5,209,833,159.6,565,901,36,501,396.5,197.2,273,314,652,123.9,561,586,523.4,422,793.5,493.2,686,427,5.22,4.99,0.08,5.2,1.7,3.85,0.85,2.04,1.64,7.16,862,506.4,3.9,159,266,548,910.1,919,491,845,650,470.6,464.5,423.2,730.8,923,239.5,358.6,339.1,507,667.7,867.7];



/* ÖRNEK GÖREV: *KareninAlani* fonksiyonunu, aşağıdaki adımları takip ederek güncelle:
	1. Karenin kenar uzunluğunu, tek parametre olarak alacak 
	2. Karenin alanını hesaplayacak (💡 İPUCU: karenin alanı = karenin kenar uzunluğunun karesi)
	3. Sonunda da yazdığın fonksiyon,, kenar uzunlu verilen karenin alanını dönmeli.
*/

//Örneğin çözümü:
function KareninAlani(kenaruzunlugu){
	return kenaruzunlugu*kenaruzunlugu;
}

/* (Oto test yok) Yukarıdaki KareninAlani fonksiyonunu kenar uzunluğu = 10 vererek aşağıda çalıştırıp, sonucu konsolda gözlemle (console.log)  */



/* 	GÖREV 1:  
		- *CemberinCevresi* fonksiyonunu, aşağıdaki adımları takip ederek güncelle:
			1. CemberinCevresi fonksiyonu, tek parametre olarak, sadece çemberin yarıçapını almalı. 
			2. "pi" sayısı, global değişken olarak verilmiş, yani pi sayısınu, fonksiyonun parametresi olarak almana gerek yok. 
			3. Çemberin çevresini hesaplayan bir fonksiyon yazmalısın. (💡 İPUCU: Çemberin çevresi = 2 * pi * yarıçap)
			4. Sonunda da yazdığın fonksiyon, yarıçapı verilen çemberin çevresini dönmeli.
		*/

function CemberinCevresi(/* kodlar buraya */){
	/* kodlar buraya */
}


/* (Oto test yok) Yukarıdaki *CemberinCevresi* fonksiyonunu yarıçap = 5 vererek aşağıda çalıştırıp, sonucu konsolda gözlemle (console.log)  */




/* 	GÖREV 2:  
		- CemberinAlani fonksiyonunu kullanarak aşağıdaki yönergeleri uygula:
			1. Argüman olarak çemberin yarıçapını BİRİNCİ parametre olacak alacaktır. 
			2. Global değişkenlerden gelen pi sayısını, fonksiyonun İKİNCİ parametresi olacak alacaktır.
			3. Yazacağın fonksiyon, çemberin alanı hesaplanacak (💡 İPUCU: Çemberin alanı = pi * yarıçapın karesi, yarıçapın karesini bulmak için Javascript içinde tanımlı Math kütüphanesini kullanabilirsin. Math.pow(yaricap,2))
			4. Sonunda da yazdığın fonksiyon, çemberin alanı döndürülecektir.
		*/
		
function CemberinAlani(/* kodlar buraya */){
	/* kodlar buraya */
}


/* (Oto test yok) Yukarıdaki CemberinAlani fonksiyonunu yarıçap = 15 vererek aşağıda çalıştırıp, sonucu konsolda gözlemleyin (console.log)  */



/* 	GÖREV 3:
		- Sayfanın en üstünde global değişken olarak tanımlanmış bir sayilar dizisi var. Bu dizi, içinde 0 ile 1000 arasında rasgele oluşturulmuş tam sayılar ve ondalıklı sayılardan oluşuyor. Bu diziyi kullanarak, aşağıdaki yönergeleri takip et:
			3a. Önce, enbuyuk ve enkucuk isminde 2 adet değişken tanımlayın. Sonra sayilar dizisindeki en küçük sayı ile en büyük sayıyı bu değişkenlere atayın. (for döngüsü kullanabilirsin)
			3b. `ucetambolunenler` adında bir dizi tanımla ve bu diziye sayilar dizisindeki 3'ün tam katı olan sayıları ata (.forEach metodunu kullanabilirsin)
			3c. `ucetambolunenler` dizisindeki sayıların toplamını .reduce metoduyla bulup, sonucu `ucebolunenlerintoplami` değişkenine yazdır (.reduce metodunu kullanabilirsin)
			3d. `besyuzdenkucuksayilar` adında bir dizi oluşturarak, sayilar dizisinin içindeki 500'den küçük sayıları bu diziye ata (.filter metodunu kullanabilirsin)
			3e. besyuzdenkucuksayilar dizisindeki sayıları küçükten büyüğe sıralayıp `siralisayilar` adındaki bir diziye aktar (.sort metodunu kullanabilirsin)
			3f. `tekraredensayilar` adında bir dizi oluştur. sayilar dizisi içerisindeki bazı sayılar birden fazla kere yazılmış. sayilar dizisi içerisinde birden fazla kez yazılmış sayıları tespit ederek kaç kere tekrar edildiğini belirten bir string oluşturulup `tekraredensayilar` dizisine aktarılmasını istiyoruz. Örnek string: "{sayı} sayısı {tekrarSayisi} kere tekrar edilmiş"
			ÖRNEK: sayilar dizisi içerisinde 45 sayısı 3 kere yazılmış. "45 sayısı 3 tekrar etmiş" stringini `tekraredensayilar` dizisine aktaracağız.
			💡 İPUCU: Tekrar edilen sayıları ve kaç kere tekrar edildiğini kaydetmek için bir nesne tanımlamalısın, bu görevi yapabilmek için en az 2 kere döngü yazmalısın. 
			Birinci döngüde hangi sayının kaç kere tekrar edildiğini tespit edip, 2. döngüde stringi oluşturup verilen diziye aktarmalısın.
	*/
	
	
/*  (oto test yok) sayilar dizisi içinde kaç adet sayı olduğunu konsola yazdır */



	var ucetambolunenler, enkucuk, enbuyuk, ucebolunenlerintoplami, besyuzdenkucuksayilar, siralisayilar, tekraredensayilar;
	
	//3a çözümü

	/* kodlar buraya */
	
	
	
	// 3b çözümü:

	/* kodlar buraya */
		
		
		
	//3c çözümü:
	
	/* kodlar buraya */

	
	
	//3d çözümü
	
	/* kodlar buraya */



	//3e çözümü

	/* kodlar buraya */
	
	
	//3f çözümü
	
	/* kodlar buraya */




	
		

/*  Bu satırın aşağısındaki kodları lütfen değiştirmeyin  */
function sa(){
    console.log('Kodlar çalışıyor');
    return 'as';
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
	tekraredensayilar
}

