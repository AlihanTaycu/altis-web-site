# Altis Web - Handoff Notu

## Proje Dizini

`C:\Users\aliha\OneDrive - Altis Teknoloji\Desktop\altis-web\`

Kaynak HTML dosyalari:

`C:\Users\aliha\OneDrive - Altis Teknoloji\Desktop\Altis WEB 2\`

Calisma ortami:

- Astro 6.3.3
- Windows PowerShell
- `npm.cmd` kullan; PowerShell execution policy nedeniyle `npm` yerine bu daha sorunsuz.
- Dev server daha once `http://127.0.0.1:4321/` uzerinde baslatildi.
- Bu klasorde `.git` repo yok.

---

## Tamamlanan Altyapi

Asagidaki temel yapi hazir ve kullaniliyor:

| Dosya | Aciklama |
|---|---|
| `astro.config.mjs` | Static Astro build + sitemap |
| `src/styles/global.css` | Global reset, typography, container, button ve temel stiller |
| `src/components/seo/Head.astro` | title, description, canonical, hreflang, OG, Twitter Card, JSON-LD |
| `src/components/layout/Header.astro` | Ortak header/nav |
| `src/components/layout/Footer.astro` | Ortak footer |
| `src/layouts/Base.astro` | Head + Header + main slot + Footer wrapper |
| `public/assets/altis-logo.png` | Logo asset |

---

## Tamamlanan Migration Sayfalari

Kaynak klasordeki 8 HTML dosyasinin 8'i Astro sayfasina tasindi.

| Kaynak HTML | Astro hedefi | Route |
|---|---|---|
| `altis-landing.html` | `src/pages/index.astro` | `/` |
| `tagtrace.html` | `src/pages/platformlar/tag-trace.astro` | `/platformlar/tag-trace/` |
| `predictivo.html` | `src/pages/platformlar/predictivo.astro` | `/platformlar/predictivo/` |
| `pick-to-light.html` | `src/pages/cozumler/pick-to-light.astro` | `/cozumler/pick-to-light/` |
| `asset-tag-and-trace.html` | `src/pages/cozumler/asset-yonetimi.astro` | `/cozumler/asset-yonetimi/` |
| `sektor-depo-lojistik.html` | `src/pages/sektorler/depo-lojistik.astro` | `/sektorler/depo-lojistik/` |
| `sektor-perakende-tekstil.html` | `src/pages/sektorler/perakende-tekstil.astro` | `/sektorler/perakende-tekstil/` |
| `sektor-uretim.html` | `src/pages/sektorler/uretim.astro` | `/sektorler/uretim/` |

Her sayfa:

- Ortak `Base.astro` layout ile sarildi.
- Kaynak HTML icindeki ortak header/footer cikarildi.
- Sayfa CSS'i ilgili `.astro` dosyasinin sonunda korundu.
- Eski `.html` linkleri temiz route'lara cevrildi.
- `{{...}}` benzeri template ifadeleri Astro parse hatasi vermemesi icin escape edildi.
- Ilgili JSON-LD schema frontmatter'a eklendi.

Eski link izi kontrolu:

```powershell
rg -n 'altis-landing\.html|tagtrace\.html|predictivo\.html|pick-to-light\.html|asset-tag-and-trace\.html|sektor-[^" ]+\.html|href="#"|TODO|FIXME' src scripts tests
```

Son calistirmada sonuc donmedi.

---

## Migration Scriptleri

Sayfalari kaynak HTML'den tekrar uretmek icin scriptler:

| Script | Urettigi sayfa |
|---|---|
| `scripts/migrate-landing.mjs` | `src/pages/index.astro` |
| `scripts/migrate-tagtrace.mjs` | `src/pages/platformlar/tag-trace.astro` |
| `scripts/migrate-predictivo.mjs` | `src/pages/platformlar/predictivo.astro` |
| `scripts/migrate-pick-to-light.mjs` | `src/pages/cozumler/pick-to-light.astro` |
| `scripts/migrate-asset-management.mjs` | `src/pages/cozumler/asset-yonetimi.astro` |
| `scripts/migrate-warehouse-logistics.mjs` | `src/pages/sektorler/depo-lojistik.astro` |
| `scripts/migrate-retail-textile.mjs` | `src/pages/sektorler/perakende-tekstil.astro` |
| `scripts/migrate-manufacturing.mjs` | `src/pages/sektorler/uretim.astro` |

Not: Bunlar migration yardimci scriptleri. Ileride kaynak HTML'ler degismeyecekse repo temizligi asamasinda kalip kalmayacaklarina karar verilebilir.

---

## Testler

Her migration sayfasi icin test var:

| Test | Kapsam |
|---|---|
| `tests/index-page-migration.test.mjs` | Ana sayfa |
| `tests/tagtrace-page-migration.test.mjs` | Tag&Trace |
| `tests/predictivo-page-migration.test.mjs` | Predictivo |
| `tests/pick-to-light-page-migration.test.mjs` | Pick-to-Light |
| `tests/asset-management-page-migration.test.mjs` | Asset yonetimi |
| `tests/warehouse-logistics-page-migration.test.mjs` | Depo & Lojistik |
| `tests/retail-textile-page-migration.test.mjs` | Perakende & Tekstil |
| `tests/manufacturing-page-migration.test.mjs` | Uretim |

Son dogrulama:

```powershell
npm.cmd test
```

Sonuc: 23/23 test basarili.

```powershell
npm.cmd run build
```

Sonuc: build basarili, 14 sayfa uretildi.

Build edilen route'lar:

- `/`
- `/platformlar/`
- `/platformlar/tag-trace/`
- `/platformlar/predictivo/`
- `/cozumler/`
- `/cozumler/pick-to-light/`
- `/cozumler/asset-yonetimi/`
- `/cozumler/goruntu-isleme/`
- `/sektorler/`
- `/sektorler/depo-lojistik/`
- `/sektorler/perakende-tekstil/`
- `/sektorler/uretim/`
- `/hakkimizda/`
- `/iletisim/`

---

## 2026-05-18 Oturumunda Tamamlananlar

### Altyapi & SEO
- `public/robots.txt` olusturuldu (sitemap referansi ile)
- `src/pages/index.astro` — Organization JSON-LD telefonu gercek numarayla guncellendi (+90 216 415 82 55)
- `src/pages/iletisim.astro` — Gercek sirket bilgileri eklendi: Altis Teknoloji Yazilim Danismanlik, iki ofis adresi (IMES + BUDOTEK), +90 216 415 82 55, info@altis.com.tr

### Yeni Sayfa: TrueScan
- `src/pages/cozumler/goruntu-isleme.astro` olusturuldu (YesilYurt Metalurji vaka calismasi temel alinarak)
- `src/pages/cozumler/index.astro` — TrueScan karti eklendi
- `src/components/layout/Header.astro` — TR ve EN navbara TrueScan eklendi

### Tag&Trace UI Duzenlemeleri
- "Teknik Sartname" bolumu tamamen silindi
- Fake-interactive Devices/Templates tablari kaldirildi (sadece Rule Engine kaldi)
- Kart renk tutarsizligi duzeltildi (featured class kaldirildi)
- Hero gorseli: device status tablosu → koyu temali canli EPC stream paneli
- Rule Engine flow canvas herodan cikarildi; "Yetenekler · Derinlemesine" altinda ilk feature-block olarak yeniden konumlandirildi (Predictivo ile ayni yapi)
- product-name "g" descender kesimi duzeltildi (padding-bottom:0.12em)

### Predictivo UI Duzenlemeleri
- "Teknik Sartname" bolumu tamamen silindi
- Fake-interactive tablar kaldirildi
- featured card renk tutarsizligi duzeltildi

### Test Guncellemeleri
- `tests/tagtrace-page-migration.test.mjs` — "Teknik Sartname" → "Gorsel Kural Motoru"
- `tests/predictivo-page-migration.test.mjs` — ayni degisiklik
- 23/23 test gecmekte

---

## Siradaki Isler

1. **Agir Sanayi / Demir & Celik sektor sayfasi** — kullanici onayladi; TrueScan + YesilYurt referansi ile
2. **iletisim.astro harita** — Google Maps embed linki geldiginde eklenecek
3. **YesilYurt musteri alintisi** — `goruntu-isleme.astro` icindeki placeholder musteri tarafindan guncellenecek
4. **Ingilizce `/en/` sayfalari**
5. **Blog yapisi**
6. **Lighthouse audit**

---

## Bilinen Eksikler

- `iletisim.astro` harita embed'i eksik (link bekleniyor)
- YesilYurt musteri alintisi placeholder (`goruntu-isleme.astro`)
- `/en/` sayfalari henuz yok

---

## Komutlar

```powershell
cd "C:\Users\aliha\OneDrive - Altis Teknoloji\Desktop\altis-web"
npm.cmd install
npm.cmd run dev
npm.cmd test
npm.cmd run build
npm.cmd run preview
```

Tek sayfa migration scripti calistirma ornegi:

```powershell
node scripts\migrate-manufacturing.mjs
```

---

## Teknik Notlar

### El Terminali Datasheet UI Notu

- EL_TERMINALLERI PDF'leri urun verisinde `datasheet` alaniyla bagli.
- PDF dosyalari public tarafta `public/assets/products/<urun-slug>/<urun-slug>-datasheet.pdf` yapisinda tutuluyor.
- El terminali detay sayfasinda datasheet karti urun gorselinin altinda (`src/pages/urunler/el-terminalleri/[slug].astro`).
- El terminali liste sayfasinda PDF'in kullanici tarafindan gorunur olmasi icin kart aksiyonlarina kirmizi `PDF` butonu eklendi (`src/pages/urunler/rfid-el-terminalleri.astro`). Bu kisim silinirse kullanici UI'da PDF'i goremiyor.
- Dev server bazen eski gorunumu gosterebiliyor; `npm.cmd run dev -- --host 127.0.0.1` ile temiz yeniden baslatmak ve tarayicida `Ctrl+F5` yapmak sorunu giderdi.

Sayfa pattern'i:

```astro
---
import Base from '../layouts/Base.astro';

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "..."
};
---

<Base
  title="..."
  description="..."
  {schema}
  lang="tr"
  alternateUrl="https://www.altis.com.tr/en/..."
>
  <!-- sayfa icerigi -->
</Base>

<style>
  /* sayfa-spesifik CSS */
</style>
```

Astro route kurali:

- `src/pages/platformlar/tag-trace.astro` -> `/platformlar/tag-trace/`
- `src/pages/sektorler/uretim.astro` -> `/sektorler/uretim/`

Link donusumlerinde dikkat edilen ana eslemeler:

- `altis-landing.html#contact` -> `/iletisim/`
- `altis-landing.html#about` -> `/hakkimizda/`
- `altis-landing.html#technology` -> `/#technology`
- `tagtrace.html` -> `/platformlar/tag-trace/`
- `predictivo.html` -> `/platformlar/predictivo/`
- `pick-to-light.html` -> `/cozumler/pick-to-light/`
- `asset-tag-and-trace.html` -> `/cozumler/asset-yonetimi/`
- `sektor-depo-lojistik.html` -> `/sektorler/depo-lojistik/`
- `sektor-perakende-tekstil.html` -> `/sektorler/perakende-tekstil/`
- `sektor-uretim.html` -> `/sektorler/uretim/`
