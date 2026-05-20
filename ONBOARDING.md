# Altis Web — Stajyer Onboarding

Altis Teknoloji kurumsal web sitesi. Astro 6 tabanlı statik site.

## Kurulum

```powershell
# Repo'yu klonla
git clone <repo-url>
cd altis-web

# Bağımlılıkları yükle
npm.cmd install

# Dev server'ı başlat
npm.cmd run dev
# → http://127.0.0.1:4321
```

> **Not:** Windows'ta `npm` yerine `npm.cmd` kullan (PowerShell execution policy).

---

## Proje Yapısı

```
altis-web/
├── src/
│   ├── data/               ← Ürün veri dosyaları (.ts)
│   ├── pages/
│   │   └── urunler/        ← Ürün sayfaları
│   │       ├── el-terminalleri/[slug].astro  ← Dinamik detay sayfası
│   │       ├── yazicilar/[slug].astro
│   │       └── okuyucular/[slug].astro
│   ├── components/layout/  ← Header, Footer
│   └── layouts/Base.astro  ← Tüm sayfalarda kullanılan wrapper
├── altis_brain/urunler/store/  ← Ham ürün verileri (kaynak)
└── HANDOFF.md              ← Proje geçmişi
```

---

## Tamamlanan Sayfalar

| Kategori | Dosya | Ürün sayısı |
|---|---|---|
| El Terminalleri | `src/data/el-terminalleri.ts` | 14 |
| RFID Yazıcılar | `src/data/rfid-yazicilar.ts` | 8 |
| RFID Okuyucular | `src/data/rfid-okuyucular.ts` | 33 |

---

## Senin Görevlerin

### 1. RFID Etiketler Sayfaları

**Kaynak veriler:** `C:\Users\aliha\OneDrive - Altis Teknoloji\Desktop\altis_brain\urunler\store\`

Alt kategoriler ve ürün sayıları:

| Klasör | Kategori | Ürün |
|---|---|---|
| `pasif-uhf-etiketler/` | Pasif UHF Etiketler | 25 |
| `metal-ustu-etiketler/` | Metal Üstü Etiketler | 67 |
| `hf-nfc-etiketler/` | HF / NFC Etiketler | 7 |
| `yikanabilir-etiketler/` | Yıkanabilir Etiketler | 2 |
| `ozel-etiketler/` | Özel Etiketler | 10 |

**Nasıl yapılır:**

Mevcut örüntüyü takip et — `src/data/el-terminalleri.ts` dosyasına bak:

```typescript
// src/data/pasif-uhf-etiketler.ts
export type Tag = {
  slug: string;
  title: string;
  brand: string;
  image: string;       // altis.com.tr/store'dan
  shortDesc: string;   // Türkçe, 1-2 cümle
  description: string; // Türkçe, 3-5 cümle
  storeUrl: string;
  tags: string[];
};

export const tags: Tag[] = [ ... ];
```

Her alt kategori için:
1. `src/data/<kategori-adı>.ts` oluştur
2. `src/pages/urunler/<kategori-adı>.astro` — liste sayfası
3. `src/pages/urunler/<kategori-slug>/[slug].astro` — detay sayfası

**Referans olarak bak:**
- `src/data/rfid-yazicilar.ts` — veri yapısı örneği
- `src/pages/urunler/rfid-yazicilar.astro` — kategori liste sayfası
- `src/pages/urunler/yazicilar/[slug].astro` — detay sayfası

**Önemli notlar:**
- Açıklamaları Türkçeye çevir (kaynak dosyalar İngilizce)
- `image` URL'leri aynen kullan — `altis.com.tr/store` hâlâ canlı
- `slug` URL dostu olmalı: küçük harf, tire ile ayrılmış, Türkçe karakter yok

---

### 2. RFID Perakende Ürünler Sayfası

Şu an `/urunler/rfid-perakende/` sayfası placeholder. İçeriği doldurmak için:

**Seçenekler:**
- `altis_brain/urunler/store/diger/` klasöründeki Vuzix akıllı gözlükleri ekle
- Yıkanabilir etiketler ve konfeksiyon etiketlerini "perakende" çerçevesinde sun
- Müdürünüzle hangi ürünlerin bu sayfaya gireceğini netleştir

---

### 3. Türkçe İçerik İyileştirmesi

Mevcut bazı ürün açıklamaları İngilizce kaynak metinden direkt alındı. Düzeltilmesi gerekenler:

- `src/data/el-terminalleri.ts` içindeki açıklamaları gözden geçir
- `src/data/rfid-okuyucular.ts` içindeki Nordic ID variant açıklamaları çok benzer — farklılaştır

---

## Çalışma Akışı

```powershell
# 1. Yeni bir branch aç
git checkout -b feature/rfid-etiketler

# 2. Değişikliklerini yap, test et
npm.cmd run build   # hata yoksa devam
npm.cmd test        # mevcut testler geçmeli

# 3. Commit at
git add src/data/pasif-uhf-etiketler.ts src/pages/urunler/...
git commit -m "feat: pasif UHF etiket sayfaları (25 ürün)"

# 4. Push et ve PR aç
git push origin feature/rfid-etiketler
```

Her alt kategori için ayrı PR açman daha kolay review sağlar.

---

## Bileşen Şablonu

Yeni bir sayfa eklerken Base.astro layout kullan:

```astro
---
import Base from '../../layouts/Base.astro';

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Sayfa Başlığı",
  "description": "Açıklama",
  "url": "https://www.altis.com.tr/urunler/..."
};
---

<Base
  title="Başlık — Altis Teknoloji"
  description="Açıklama"
  {schema}
  lang="tr"
  alternateUrl="https://www.altis.com.tr/en/..."
>
  <!-- İçerik -->
</Base>
```

---

## Yardım

Sıkışırsan `HANDOFF.md` dosyasını oku — projenin tüm geçmişi orada.

Renk sistemi:
- Navy (ana renk): `#00125C` → `var(--primary)`
- Cyan (vurgu): `#18B7D6` → `var(--cyan)`
