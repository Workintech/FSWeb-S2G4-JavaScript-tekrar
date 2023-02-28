## JavaScript Tekrar

## Amaçlar

- Tabii ki, JavasScipt'te öğrendiklerimizi kullanmak :)

## Giriş

Düşününki, artık çalıştığınız iş yerinde *tecrübeli bir çalışan oldunuz*. Sizden yeni gelen stajyerlere destek olmanız isteniyor. 
Siz de çalıştığınız farklı projelerdeki bazı ufak görevlerden hazırladığınız bir projeyi, yeni stajyer arkadaşınızla beraber yaptığınızı hayal edin.

### Commits

Görevleri yaptıkça, her adımda commit etmeyi unutmayın.

## Talimatlar

### Görev 1: Proje Kurulumu

VSCode ve Komut Satırını Kullanma:

#### Ön Ayarlar
 Bu *repo*yu *fork*la 
- VS Code veya harici terminalde, _cd_ komutlarıyla, repoyu yüklemek istediğin dizine git (Örn: ```cd C:/Documents/Git/*SprintNo*/```)
* *Fork*ladığın repoyu, kendi repolarından bulup, SSH ile bilgisayarına kopyala. ```git clone *ssh_tabından_kopyaladığın_komut*```
* Clone işlemi bitince, VS Code ile kaynak dosyalarının olduğu klasörü aç (Örn: ```cd *FSWEB-Proje-Adi*```)

#### Node Modüllerini Yükleme
* VS Code ekranında, _package.json_ ile aynı dizinde, *`.gitignore`* isimli bir dosya oluştur. (Başındaki noktayı unutma).
*  Bu dosya çine `/node_modules` yaz ve kaydet.
* VS Code veya harici terminalde, repo olduğu klasöre git (`cd bilgisayarım/Git/SNo/FSWEB-Proje-Adi`)
 Terminalde, *package.json olan dizindeyken*
* `npm install` yaz ve yardımcı paketleri bilgisayarına yükle.

#### Çalışma 
* ```npm run start``` yaz ve projeyi çalışır.  💻
* Projede parçalar tamamlandıkça, yaptıklarını *commit*le. Yeni BRANCH OLUŞTURMA! Hep *main* branch kullan.
* Proje tamamlanınca da, son halini *kendi repondaki* *main* branche `push` yaparak githuba aktar.


### Görev 2: Yapılması gerekenler

`index.js` dosyasını bul ve görevleri, adım adım tamamla.


### Test Etme & Debug Yapma

* Projenizin içinde "split terminal"i tıklayarak ikinci bir terminal ekranı açın.

* İkinci terminalde, ```npm run test``` yaz ve testleri çalıştır.

Bir terminal ekranında testleri çalıştırırken bir diğerinde ise debug yapabileceksin. Kodlarınızda güncelleme yaptıkça ilerlemeyi kontrol için `console.log`u kullanın.
