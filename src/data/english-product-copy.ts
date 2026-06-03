type ProductWithCopy = {
  slug: string;
  shortDesc: string;
  tags?: string[];
};

type RetailEnglishCopy = {
  id: string;
  category?: string;
  summary_en?: string;
  feature_highlights_en?: string[];
  sections?: { name: string; items: Record<string, string> }[];
};

export const englishShortDescriptions: Record<string, string> = {
  'sato-cl4nx-rfid-printer': 'Snap-on printhead, tool-free platen replacement, LED error indicator, and video-guided maintenance for industrial RFID printing.',
  'sato-cl6nx-rfid-printer': 'Industrial RFID printer with 47 print languages, Bluetooth-enabled connectivity, PureLine roll wear tracking, and compact metal housing.',
  'sato-ct4-lx-rfid-printer': 'Compact desktop RFID printer with a 4.3-inch touchscreen, UHF and HF/NFC encoding, and label waste prevention.',
  'zebra-zd500-rfid-printer': 'Link-OS RFID printer with WiFi, Bluetooth, automatic calibration, and UHF RFID support for manufacturing and retail.',
  'zebra-zd621r-rfid-printer': 'Premium desktop RFID printer with a full-color LCD, high print quality, field-installable modules, and best-in-class performance.',
  'zebra-zq500-mobile-rfid-printer': 'Rugged mobile RFID printer for harsh field conditions, glove-friendly use, high-capacity battery, and on-site printing.',
  'zebra-zq630-mobile-rfid-printer': 'Mobile RFID printer with color display, WiFi and Bluetooth, fast wake-up, long battery life, and point-of-application RFID encoding.',
  'zebra-zt411-on-metal-rfid-printer': 'RFID printer for on-metal asset labels, supporting immediate RFID asset labeling across metal and other surfaces.',

  'brady-hh83-rfid-handheld-terminal-2d-imager': 'Dual-polarized antenna design with wide read range, IP65 protection, and drop-tested rugged performance.',
  'brady-hh83-uhf-rfid-handheld-terminal-acd-lte': '4G LTE RFID handheld terminal with dual-polarized antenna, IP65 housing, and strong fit for field operations.',
  'brady-hh85-uhf-rfid-handheld-terminal': 'UHF RFID handheld terminal with hot-swappable battery, dual-polarized antenna, and long read range.',
  'honeywell-ck65-handheld-terminal': 'Android handheld terminal with up to 28-hour battery life, long product lifecycle, and 1D/2D scanning.',
  'honeywell-eda51-handheld-terminal': 'Lightweight ergonomic handheld terminal with 13 MP camera, 12+ hour battery, and retail or DSD workflow support.',
  'honeywell-eda61k-handheld-terminal': 'Warehouse and distribution handheld terminal with multi-shift battery life and RFID reading up to 15 meters.',
  'hopeland-wing-820-handheld-rfid-terminal': 'Android RFID handheld with up to 15 m read range, 400 tags per second, 10,000 mAh battery, and IP65 protection.',
  'nordic-id-exa51e-host-device-installation-kit': 'Host device installation kit for the Nordic ID EXA51e RFID reader, ready for enterprise RFID deployments.',
  'nordic-id-exa51e-uhf-rfid-reader': 'Wireless UHF RFID reader that connects to smart devices over Bluetooth LE and supports major operating systems.',
  'nordic-id-hh83-uhf-rfid-handheld-terminal-wlan': 'Android 10 RFID handheld terminal with barcode and RFID reading, ergonomic design, and WLAN connectivity.',
  'nordic-id-hh83-uhf-rfid-handheld-terminal-4g': 'Android 10 RFID handheld terminal with WLAN and 4G connectivity, barcode reading, RFID reading, and ergonomic design.',
  'nordic-id-hh85-uhf-rfid-handheld-terminal-wlan': 'Ultra-light RFID handheld terminal with 18-hour operation, 1.6 m read range, and glove-friendly use.',
  'nordic-id-hh85-uhf-rfid-handheld-terminal-4g': 'Ultra-light Android 10 RFID handheld with 18-hour battery life, WLAN and 4G connectivity, and glove-friendly operation.',
  'zebra-mc3330xr-handheld-terminal': 'Rugged RFID handheld terminal with up to 6 m RFID read range, 4 GB RAM, SE4770 2D imager, and cradle kit availability.',
};

const tagTranslations: Record<string, string> = {
  'Araç Yönetimi': 'Vehicle Management',
  'Aksesuar': 'Accessory',
  'Bant Tipi': 'Belt Type',
  'Barkod Tarayıcı': 'Barcode Scanner',
  'Değiştirilebilir Batarya': 'Swappable Battery',
  'Depo': 'Warehouse',
  'Dokunmatik Ekran': 'Touchscreen',
  'Dayanıklı': 'Rugged',
  'EAS Alarm': 'EAS Alarm',
  'Eldiven Uyumlu': 'Glove Friendly',
  'Endüstriyel': 'Industrial',
  'Entegre Anten': 'Integrated Antenna',
  'Erişim Kontrol': 'Access Control',
  'Fazlı Dizi': 'Phased Array',
  'Forklift': 'Forklift',
  'Geniş Alan': 'Wide Area',
  'Giyilebilir': 'Wearable',
  'Gömülü': 'Embedded',
  'Gömülü Bilgisayar': 'Embedded Computer',
  'Işık Sensörü': 'Light Sensor',
  'İş İstasyonu': 'Workstation',
  'El Terminali': 'Handheld Terminal',
  'Kompakt': 'Compact',
  'Konumlandırma': 'Positioning',
  'Konveyör': 'Conveyor',
  'Kütüphane': 'Library',
  'Masaüstü': 'Desktop',
  'Metal RFID': 'On-Metal RFID',
  'Metal Yüzey': 'Metal Surface',
  'Mobil': 'Mobile',
  'Montajlanabilir': 'Mountable',
  'Okur/Yazar': 'Reader/Writer',
  'Otomatik Kapı': 'Automatic Door',
  'Perakende': 'Retail',
  'Portal/Geçit': 'Portal/Gate',
  'Renkli Ekran': 'Color Display',
  'RFID Okuyucu': 'RFID Reader',
  'Sahada Kurulum': 'Field Installable',
  'Self-Servis': 'Self-Service',
  'Su Geçirmez': 'Waterproof',
  'Taşınabilir': 'Portable',
  'Tavan Montaj': 'Ceiling Mount',
  'Tezgah': 'Countertop',
  'Toplu Okuma': 'Batch Reading',
  'Tünel': 'Tunnel',
  'Varlık Takibi': 'Asset Tracking',
  'Yönlü Okuma': 'Directional Reading',
  'Yüksek Hacim': 'High Volume',
  '3sn Okuma': '3s Reading',
  '5m Okuma': '5m Reading',
  '6m Menzil': '6m Range',
  '15m Menzil': '15m Range',
  '18 Saat Batarya': '18h Battery',
  '30 ürün/5s': '30 items/5s',
  '400+ Ürün': '400+ Items',
  '800+ Etiket': '800+ Tags',
  '1000 etiket/sn': '1000 tags/s',
  '1000 ürün': '1000 Items',
  '2D Barkod': '2D Barcode',
  '3-Bölmeli': '3-Section',
  '3 Anten': '3 Antennas',
  '5dBi Anten': '5dBi Antenna',
  '13 MP Kamera': '13 MP Camera',
  '21.5" Ekran': '21.5" Display',
  '52 Anten': '52 Antennas',
  'AB+ABD Frekans': 'EU+US Frequency',
  '47 Dil': '47 Languages',
  'LED Gösterge': 'LED Indicator',
};

const englishRetailCopies: RetailEnglishCopy[] = [];

const englishRetailBySlug = new Map(englishRetailCopies.map(item => [item.id, item]));

export function translateEnglishTags(tags: string[] = []): string[] {
  return tags.map(tag => tagTranslations[tag] ?? tag);
}

export function withEnglishProductCopy<T extends ProductWithCopy>(item: T): T {
  return {
    ...item,
    shortDesc: englishShortDescriptions[item.slug] ?? item.shortDesc,
    tags: translateEnglishTags(item.tags),
  };
}

export function withEnglishRetailCopy<T extends ProductWithCopy & {
  category?: string;
  featureHighlights?: string[];
  sections?: { name: string; items: Record<string, string> }[];
}>(item: T): T {
  const englishCopy = englishRetailBySlug.get(item.slug);
  return {
    ...item,
    category: englishCopy?.category ?? item.category,
    shortDesc: englishCopy?.summary_en ?? item.shortDesc,
    featureHighlights: englishCopy?.feature_highlights_en ?? item.featureHighlights,
    sections: englishCopy?.sections ?? item.sections,
    tags: translateEnglishTags(item.tags),
  };
}
