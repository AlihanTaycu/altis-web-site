# Altis Web Plan

## Current Goal

Altis Teknoloji web sitesini ve teklif odakli e-store/katalog deneyimini musteri kazanimi icin guclendirmek.

Site su anda kurumsal web, platform sayfalari, cozum sayfalari, sektor sayfalari ve buyuk urun katalogu ureten Astro tabanli statik bir proje. Kisa vadeli hedef, ziyaretciyi daha net yonlendiren, guven veren ve teklif/demo talebine daha hazir hale getiren bir B2B deneyim kurmak.

## Active Priorities

1. **Ingilizce site akisindaki kirik sayfalari duzelt**
   - Header su anda `/en/about/`, `/en/contact/`, `/en/platforms/`, `/en/solutions/`, `/en/sectors/` linklerini gosteriyor.
   - Bu sayfalar ya olusturulmali ya da menu sadece mevcut Ingilizce sayfalara gore sadelelestirilmeli.
   - Urun tarafindaki Ingilizce katalog korunmali.

2. **Ana sayfa ve iletisim akisini lead toplama odakli sadelelestir**
   - Ana sayfa vaadi, hedef kitleyi ve sonraki aksiyonu daha hizli anlatmali.
   - CTA dili demo, teklif ve kesif gorusmesi etrafinda tutarli olmali.
   - Form backend/CRM entegrasyonu bu asamada yapilmayacak; ancak formun gecici durumu kullaniciyi yaniltmayacak sekilde netlestirilmeli.

3. **Performans ve basari iddialarini guvenli dile cek**
   - Kesin yuzde, hiz, dogruluk, SLA ve uptime iddialari kaynak/pilot baglami olmadan kullanilmamali.
   - TrueScan, Pick-to-Light, RFID stok dogrulugu ve benzeri metrikler "pilot kosullarina gore", "olculen sahalarda" veya "proje kapsaminda dogrulanir" gibi guvenli cerceveye alinmali.
   - Pazarlama etkisi korunurken dogrulanamayan iddialar azaltilmali.

4. **Urun katalogunu B2B teklif deneyimi olarak netlestir**
   - Kisa vadede checkout/sepet degil, teklif odakli katalog hedefleniyor.
   - Kategori sayfalari "hangi urunu ne zaman secmeliyim?" sorusunu daha iyi yanitlamali.
   - Detay sayfalarinda teknik ozellik, kullanim senaryosu, datasheet ve teklif CTA hiyerarsisi net olmali.
   - Ileride gerekirse "teklif listesi" veya "urun karsilastirma" deneyimi ayrica planlanabilir.

## Later

- Gercek form backend/CRM/e-posta entegrasyonu.
- Blog ve icerik pazarlama altyapisi.
- Lighthouse, Core Web Vitals ve teknik SEO audit.
- Ayrintili arama, filtreleme, karsilastirma veya teklif listesi ozellikleri.
- PowerPoint/sunum calismalari. Bu konu su an aktif web kapsami disindadir.

## Current Known Issues

- `HANDOFF.md` ve `ONBOARDING.md` eski bilgiler iceriyordu; bu dosyalar teknik devir ve yeni gelistirici baslangici icin sade tutulmali.
- Ingilizce kurumsal route'lar eksik.
- Iletisim formu gorsel olarak mevcut, ancak gercek submit akisi yok.
- Ana sayfa ve bazi cozum/sektor sayfalari fazla kesin performans iddialari iceriyor.
- "Auto-ID" terimi web metinlerinde yaygin; RFID ana terim olarak tercih edilecekse temizlik planlanmali.

## Decisions

- E-store kisa vadede checkout/sepet degil, teklif odakli B2B katalog olacak.
- Form backend/CRM entegrasyonu sona birakilacak.
- Sunum/PowerPoint dosyalari aktif web planinin parcasi degil.
- `PLAN.md` aktif karar ve onceliklerin ana dosyasi olacak.
- `HANDOFF.md` teknik devir notu, `ONBOARDING.md` ise yeni gelistirici kurulum ve calisma rehberi olarak kalacak.

## Verification Commands

```powershell
npm.cmd test
npm.cmd run build
```
