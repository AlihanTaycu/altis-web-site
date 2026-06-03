# Altis Web Premium Polish Backlog

Guncelleme tarihi: 2026-06-02

## Amac

Altis Web'in mevcut guclu teknik ve icerik temelini daha premium, daha akici ve daha tutarli bir dijital deneyime tasimak. Bu backlog, audit bulgularini uygulanabilir is kalemlerine cevirir: oncelik, etki, zorluk, ilgili dosyalar ve dogrulama kriterleri net tutulur.

## Degerlendirme Ozeti

Mevcut site iyi bir "modern industrial B2B / SaaS entegrator sitesi" hissi veriyor. Premium algi yer yer guclu, ozellikle `platformlar`, `TrueScan` ve `Vuzix` sayfalarinda. Ancak Apple seviyesinde rafinelik icin fazla metin, fazla kart, fazla mockup, placeholder izleri ve sayfalar arasi gorsel dil farklari azaltilmali.

## Oncelik Kriterleri

- `P0`: Premium algiyi dogrudan bozan veya guven riski yaratan konu.
- `P1`: Kullanici algisini ve site akisini belirgin iyilestiren konu.
- `P2`: Tasarim sistemi, bakim ve uzun vadeli kalite icin gerekli konu.

Etki ve zorluk: `Yuksek`, `Orta`, `Dusuk`.

## Backlog

### P0-01 Placeholder ve guven kirici linkleri temizle

Etki: Yuksek
Zorluk: Dusuk

Neden:
Premium alginin en hizli kirildigi yer placeholder izleri. Gercek sirket sitesi hissi icin tum `href="#"`, sahte telefon, sahte e-posta, `PARTNER 01` gibi degerler temizlenmeli.

Ilgili dosyalar:

- `src/pages/platformlar/tag-trace.astro`
- `src/pages/platformlar/predictivo.astro`
- `src/pages/cozumler/goruntu-isleme.astro`
- `src/pages/cozumler/asset-yonetimi.astro`
- `src/pages/sektorler/*.astro`
- `src/components/layout/Footer.astro`

Kabul kriterleri:

- `href="#"` yalnizca bilincli, erisilebilir ve gercekten pasif kalmasi gereken kontrol ise kalir; navigasyon linki olarak kalmaz.
- `+902123456789`, `hello@altis.com.tr`, `wa.me/902123456789` gibi placeholder iletisimler gercek Altis iletisim bilgileriyle degisir veya kaldirilir.
- `PARTNER 01` benzeri sahte partner kutulari gercek logo/veri ile degisir veya bolum sade olarak kaldirilir.
- Footer ve iletisim sayfasi telefon/e-posta/adres bilgileri birbiriyle tutarlidir.

Dogurlama:

```powershell
rg -n 'href="#"|PARTNER|\+902123456789|hello@altis\.com\.tr|wa\.me/902123456789' src
npm.cmd test
npm.cmd run build
```

### P0-02 Turkce karakter ve encoding kalitesini dogrula

Etki: Yuksek
Zorluk: Orta

Neden:
Terminal ciktilarinda mojibake gorundu. Tarayicida da gorunuyorsa premium algi cok sert duser. Tarayicida duzgunse bile dosya encoding ve test kapsaminda netlik gerekir.

Ilgili dosyalar:

- `src/pages/**/*.astro`
- `src/components/**/*.astro`
- `src/data/**/*.ts`
- `docs/**/*.md`

Kabul kriterleri:

- Tarayicida Turkce karakterler dogru gorunur.
- HTML kaynakta beklenen Turkce metinler bozuk cikmaz.
- Kritik sayfa title/description/schema metinlerinde mojibake yoktur.

Dogurlama:

```powershell
rg -n '\u00C3|\u00C4|\u00C5|\u00E2\u20AC|\uFFFD' src docs
npm.cmd run build
```

Not:
Bu arama false-positive uretebilir; her eslesme manuel incelenmelidir. Gercek dosya UTF-8 ise ama terminal yanlis gosteriyorsa sorun olarak isaretlenmemeli.

### P1-01 Ana sayfa odagini azalt, premium ilk izlenimi guclendir

Etki: Yuksek
Zorluk: Yuksek

Neden:
Ana sayfa guclu ama fazla uzun ve cok fazla urun/cozum ayni anda yarisiyor. Premium his icin ilk viewport daha net, daha az metinli ve daha karar verdirici olmali.

Ilgili dosyalar:

- `src/pages/index.astro`
- `src/styles/global.css`
- `src/components/sections/*`

Kabul kriterleri:

- Hero metni daha kisa ve daha keskindir.
- Ilk viewport ana vaadi, 1-2 CTA'yi ve guven sinyalini net verir.
- Ana sayfada Tag&Trace, Predictivo ve cozumler arasi hiyerarsi sade hale gelir.
- Tekrarlayan kart ve mockup bloklari azalir veya daha net bolumlere ayrilir.
- Ana sayfa hala Altis'in RFID, IoT, RTLS ve entegrasyon yetkinligini anlatir.

Dogurlama:

```powershell
npm.cmd test -- tests/index-page-migration.test.mjs
npm.cmd test -- tests/mobile-overflow-guards.test.mjs
npm.cmd run build
```

### P1-02 Platformlar sayfasini tasarim standardi olarak sabitle

Etki: Yuksek
Zorluk: Orta

Neden:
`/platformlar/` sayfasi premium algida en guclu sayfalardan biri. Diger hub sayfalari icin referans standarda donusturulmeli.

Ilgili dosyalar:

- `src/pages/platformlar/index.astro`
- `src/pages/cozumler/index.astro`
- `src/pages/sektorler/index.astro`
- `src/components/sections/HubHero.astro`
- `src/components/sections/HubCard.astro`
- `src/components/sections/StatStrip.astro`

Kabul kriterleri:

- Hub sayfalarinda hero ritmi, spacing, CTA dili ve metrik sunumu tutarlidir.
- Koyu hero, trust band, showcase, CTA kaliplari nerede kullanilacak netlesir.
- Cozumler ve sektorler hub sayfalari platformlar kadar rafine hisseder; ancak ayni sayfanin kopyasi gibi olmaz.

Dogurlama:

```powershell
npm.cmd test -- tests/hub-pages.test.mjs
npm.cmd test -- tests/header-mega-menu.test.mjs
npm.cmd run build
```

### P1-03 TrueScan sayfasini premium vaka sayfasi seviyesine getir

Etki: Yuksek
Zorluk: Orta

Neden:
TrueScan en guclu hikayeye sahip: somut problem, net teknik cozum, saha referansi. Placeholder temizligi ve vaka anlatimi guclenirse premium etki hizli artar.

Ilgili dosyalar:

- `src/pages/cozumler/goruntu-isleme.astro`
- `src/components/sections/CTABanner.astro`

Kabul kriterleri:

- Placeholder iletisim bilgileri yoktur.
- `%99.5` iddiasi baglamlandirilir: "pilot/veri/saha kosullarina gore" gibi net bir ifade eklenir.
- YesilYurt vaka anlatimi daha guvenilir ve olculu hale gelir.
- Animasyon etkileyici kalir ama metin ve CTA akisi daha sakin olur.

Dogurlama:

```powershell
rg -n '\+902123456789|hello@altis\.com\.tr|wa\.me/902123456789|%99\.5' src/pages/cozumler/goruntu-isleme.astro
npm.cmd run build
```

### P1-04 Vuzix urun deneyimini katalog standardina donustur

Etki: Orta
Zorluk: Orta

Neden:
Vuzix sayfalari gercek urun gorselleri, sade hero ve net karsilastirma ile daha premium hissettiriyor. RFID urun kataloglari bu cizgiye yaklasmali.

Ilgili dosyalar:

- `src/pages/urunler/akilli-gozluk.astro`
- `src/pages/urunler/akilli-gozluk/[slug].astro`
- `src/pages/urunler/rfid-okuyucular.astro`
- `src/pages/urunler/rfid-yazicilar.astro`
- `src/pages/urunler/rfid-el-terminalleri.astro`
- `src/pages/urunler/perakende/[slug].astro`
- `src/data/*.ts`

Kabul kriterleri:

- Kategori sayfalarinda urun gorseli, kullanim senaryosu, fark ve teklif CTA'si daha net hiyerarsiye sahip olur.
- Detay sayfalarinda teknik ozellikler ile ticari fayda daha dengeli verilir.
- Katalog listeleri sadece "liste" degil, premium urun secim deneyimi gibi hisseder.

Dogurlama:

```powershell
npm.cmd test -- tests/vuzix-pages.test.mjs
npm.cmd test -- tests/mobile-overflow-guards.test.mjs
npm.cmd run build
```

### P1-05 Header mega menuyu azalt ve onceliklendir

Etki: Orta
Zorluk: Orta

Neden:
Mega menu kapsamli ama fazla secenek premium algida bilissel yuk yaratabilir. Kullanici kararini hizlandiran daha kisa bir yapi hedeflenmeli.

Ilgili dosyalar:

- `src/components/layout/Header.astro`
- `tests/header-dropdown.test.mjs`
- `tests/header-mega-menu.test.mjs`

Kabul kriterleri:

- Ana nav gruplari korunur: Platformlar, Cozumler, Sektorler, Urunler, Kaynaklar.
- Her mega panelde en onemli aksiyonlar one cikar; ikincil linkler azaltilir.
- Tamamlanmamis kaynaklara giden linkler kaldirilir veya gercek sayfaya baglanir.
- Mobil menu okunabilir ve kisa kalir.

Dogurlama:

```powershell
npm.cmd test -- tests/header-dropdown.test.mjs
npm.cmd test -- tests/header-mega-menu.test.mjs
npm.cmd run build
```

### P2-01 Sayfa ici CSS borcunu tasarim sistemiyle azalt

Etki: Orta
Zorluk: Yuksek

Neden:
Bazi sayfalar buyuk sayfa-ici CSS bloklariyla ayri tasarim sistemi gibi davranmaya baslamis. Bu uzun vadede premium tutarliligi ve bakimi zorlastirir.

Ilgili dosyalar:

- `src/styles/global.css`
- `src/components/sections/*.astro`
- `src/pages/platformlar/*.astro`
- `src/pages/cozumler/*.astro`
- `src/pages/urunler/*.astro`

Kabul kriterleri:

- Ortak hero, card, metric, trust band, CTA, product detail patternleri component veya global utility seviyesine tasinir.
- Sayfa-ici CSS sadece sayfaya ozgu sahneler icin kalir.
- Gorsel dil tokenlarla yonetilir: radius, shadow, spacing, renk, typography.

Dogurlama:

```powershell
rg -n '<style>' src/pages src/components
npm.cmd test
npm.cmd run build
```

### P2-02 Ingilizce route stratejisini netlestir

Etki: Orta
Zorluk: Orta

Neden:
Header'da `/en/` fallback linkleri var fakat gercek sayfalar tamamlanmis gorunmuyor. Premium sitede yarim dil destegi guven kirar.

Ilgili dosyalar:

- `src/components/layout/Header.astro`
- `src/components/seo/Head.astro`
- `src/pages/**/*.astro`

Kabul kriterleri:

- Ya `/en/` sayfalari planli sekilde olusturulur.
- Ya da dil switch ve `alternateUrl` stratejisi tamamlanana kadar tutarli sekilde geri cekilir.
- Hreflang/canonical yapisi gercek route'larla uyumludur.

Dogurlama:

```powershell
rg -n 'alternateUrl="/en|alternateUrl="https://www\.altis\.com\.tr/en|href=.*\/en' src
npm.cmd run build
```

## Onerilen Uygulama Sirasi

1. `P0-01` Placeholder ve guven kirici link temizligi.
2. `P0-02` Turkce karakter / encoding dogrulamasi.
3. `P1-03` TrueScan premium vaka rafinmani.
4. `P1-01` Ana sayfa sadelestirme.
5. `P1-02` Hub sayfalarinda tutarlilik.
6. `P1-05` Header mega menu azaltma.
7. `P1-04` Urun katalog standardi.
8. `P2-01` CSS/design system borcu.
9. `P2-02` Ingilizce route stratejisi.

## Ilk Sprint Onerisi

Kapsam: 1-2 gunluk premium polish.

- Placeholder/link temizligi.
- `.gitignore` icinde lokal audit artifact korumasi.
- TrueScan iletisim ve iddia metni temizligi.
- Header'daki tamamlanmamis kaynak linklerini azaltma.
- Build ve test dogrulamasi.

Basari kriteri:

- Git status yalniz bilincli degisiklikleri gosterir.
- Placeholder aramasi temiz veya bilincli istisnalar dokumante edilir.
- `npm.cmd test` ve `npm.cmd run build` basarili olur.
- Ana premium riskler icin yeni backlog dosyasi referans alinabilir durumdadir.
