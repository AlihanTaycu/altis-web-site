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

const englishRetailCopies: RetailEnglishCopy[] = [
  {
    id: 'r-overheadr',
    category: 'RFID Smart Gate System',
    summary_en:
      'UHF phased-array RFID smart gate system for retail. Read distance up to 5 meters, 0.3-second read speed, and integrated EAS alarm.',
    feature_highlights_en: [
      'Strong group reading capability with read distance up to 5 meters',
      '0.3-second read speed for high-traffic retail environments',
      '840-960 MHz UHF RFID technology with protocol expansion support',
      'Multiple interfaces including RJ45, RS232, WiFi, 4G, and alarm input',
      'Integrated audio and visual alarm with online/offline EAS alarm support',
      '120-degree phased-array tracking with 9 adaptive beams',
      'Customizable product appearance, functions, and protocols',
    ],
    sections: [
      {
        name: 'RF Features',
        items: {
          'Identification Method': 'UHF',
          'RF Chip': 'Impinj R2000',
          'Frequency Range': '840MHz-960MHz (Adjustable)',
          'Protocol': 'EPC C1G2, ISO 18000-6B, ISO 18000-6C',
          'Reading Distance': '0-5 m',
          'Function':
            'RFID reading, multi-tag identification, tag data filtering, quantity statistics, spatial triggering, RSSI detection, EAS alarm',
        },
      },
      {
        name: 'Hardware Features',
        items: {
          'RF Output Power': '33 dBm ± 1 dBm (Max.)',
          'Tag Recognition Speed': '>500 times/second',
          'Beam Scanning Range': '5 degrees',
          'Coverage Angle': '90° (Horizontal) / 120° (Vertical)',
          'Beamforming Time': '5 microseconds',
          'Alarm Type': 'Audio and visual',
        },
      },
      {
        name: 'Core Features',
        items: {
          'Material': 'Carbon steel sheet',
          'Power Supply': 'DC 12V / 5A',
          'Humidity': '5-95% (non-condensing)',
          'Operating Temperature': '-20°C ~ 60°C',
          'Dimensions': '350 mm × 670 mm × 168 mm',
        },
      },
    ],
  },
  {
    id: 'r-inbasketreader',
    category: 'Embedded UHF RFID Tunnel Reader',
    summary_en:
      'Embedded UHF RFID tunnel reader for checkout, workstation, and automated retail/warehouse systems. Bulk identification of 30+ items in 5 seconds.',
    feature_highlights_en: [
      'Bulk identification of 30+ items in 5 seconds',
      '840-960 MHz UHF RFID technology with protocol expansion support',
      '20 cm interference-prevention zone design',
      'Optimized for embedded counter and workstation installation',
      'Retail system integration with multiple interfaces',
      'IP54 embedded installation flexibility',
    ],
    sections: [
      {
        name: 'RF Features',
        items: {
          'Identification Method': 'UHF',
          'RF Chip': 'Impinj R2000',
          'Frequency Range': '840MHz-960MHz (Adjustable)',
          'Protocol': 'EPC C1G2, ISO 18000-6B, ISO 18000-6C',
          'Frequency Band (Optional)':
            'ETSI: 865-868MHz, JP: 916.8-920.4MHz, TW: 922.25-927.75MHz, ID: 923.125-925.125MHz, RUS: 866.6-867.4MHz, TEST: 802.75-998.75MHz, JP_LBT: 916.8-920.8MHz',
          'Reading Capacity': '30 units',
          'Function':
            'Read & write, multi-tag identification, tag data filtering, RSSI detection, quantity statistics, self-service card application',
        },
      },
      {
        name: 'Hardware Features',
        items: {
          'Communication': 'RS232',
        },
      },
      {
        name: 'Function Options',
        items: {
          'RFID Reading & Writing': 'Standard',
          'Barcode': 'Standard',
          'QR Code': 'Standard',
          'Fingerprint Recognition': 'Optional',
          'Face Recognition': 'Standard',
          'Audio/Visual Alarm': 'Optional',
          'Keyboard': 'Optional',
          'Solar Power': 'Optional',
          'Wireless Network': 'WiFi / 4G',
        },
      },
      {
        name: 'Core Features',
        items: {
          'Material': 'Carbon steel sheet, glass',
          'Power Supply': 'DC 12V / 4A',
          'Operating Humidity': '10-90% RH',
          'Operating Temperature': '-10°C ~ 60°C',
          'Dimensions': '680 mm × 560 mm × 296 mm',
          'Weight': 'Approx. 10 kg',
        },
      },
    ],
  },
  {
    id: 'r-basketreader',
    category: 'UHF Retail RFID Reader',
    summary_en:
      'Compact UHF retail RFID reader for fast bulk identification, self-service workflows, and counter-level retail system integration.',
    feature_highlights_en: [
      'Bulk identification of 30+ items in 5 seconds',
      '840-960 MHz UHF RFID technology with protocol expansion support',
      '20 cm interference-prevention zone design',
      'Retail system integration with multiple interfaces',
      'IP54 embedded installation flexibility',
      'Dual-color exterior options',
    ],
    sections: [
      {
        name: 'RF Features',
        items: {
          'Identification Method': 'UHF',
          'RF Chip': 'Impinj R2000',
          'Frequency Range': '840MHz-960MHz (Adjustable)',
          'Protocol': 'EPC C1G2, ISO 18000-6B, ISO 18000-6C',
          'Frequency Band (Optional)':
            'ETSI: 865-868MHz, JP: 916.8-920.4MHz, TW: 922.25-927.75MHz, ID: 923.125-925.125MHz, RUS: 866.6-867.4MHz, TEST: 802.75-998.75MHz, JP_LBT: 916.8-920.8MHz',
          'Reading Capacity': '30 units',
          'Function':
            'Read & write, multi-tag identification, tag data filtering, RSSI detection, quantity statistics, self-service card application',
        },
      },
      {
        name: 'Hardware Features',
        items: {
          'Communication': 'RS232',
        },
      },
      {
        name: 'Function Options',
        items: {
          'RFID Reading & Writing': 'Standard',
          'Barcode': 'Standard',
          'QR Code': 'Standard',
          'Fingerprint Recognition': 'Optional',
          'Face Recognition': 'Standard',
          'Audio/Visual Alarm': 'Optional',
          'Keyboard': 'Optional',
          'Solar Power': 'Optional',
          'Wireless Network': 'WiFi / 4G',
        },
      },
      {
        name: 'Core Features',
        items: {
          'Material': 'Carbon steel sheet, glass',
          'Power Supply': 'DC 12V / 4A',
          'Operating Humidity': '10-90% RH',
          'Operating Temperature': '-10°C ~ 60°C',
          'Dimensions': '680 mm × 580 mm × 814 mm',
          'Weight': 'Approx. 20 kg',
        },
      },
    ],
  },
  {
    id: 'r-shieldedbox',
    category: 'UHF RFID Workstation',
    summary_en:
      'Desktop UHF RFID workstation providing product reading, writing, registration, and self-service workflows for library, unmanned retail, and service environments.',
    feature_highlights_en: [
      '21.5-inch capacitive touchscreen with 1920 x 1080 resolution',
      '840-960 MHz UHF RFID technology with protocol expansion support',
      'RJ45 communication interface',
      'Authorization settings and function expansion support',
      'Card information recording support',
      'RFID read/write workflows for self-service applications',
    ],
    sections: [
      {
        name: 'RF Features',
        items: {
          'Identification Method': 'UHF',
          'RF Chip': 'Impinj R2000',
          'Frequency Range': '840MHz-960MHz',
          'Protocol': 'EPC C1G2, ISO 18000-6C, ISO 18000-6B',
          'Frequency Band (Optional)':
            'ETSI: 865-868MHz, JP: 916.8-920.4MHz, TW: 922.25-927.75MHz, ID: 923.125-925.125MHz, RUS: 866.6-867.4MHz, TEST: 802.75-998.75MHz, JP_LBT: 916.8-920.8MHz',
          'Reading Capacity': '15 units (depending on product size)',
          'Function':
            'RFID read & write, multi-tag identification, tag data filtering, quantity statistics, RSSI detection, self-service card application',
        },
      },
      {
        name: 'Hardware Features',
        items: {
          'System': 'Windows / Android (optional)',
          'Hardware': 'I5 CPU, 4G RAM, 128G ROM; RK3399 CPU, 4G RAM, 16G ROM (optional)',
          'Display': '1920 x 1080, 22-inch dual capacitive touchscreen',
          'Communication': 'RJ45 10/100 Mbps',
          'Other Interface': '2x USB 2.0',
        },
      },
      {
        name: 'Function Options',
        items: {
          'RFID Card Reader': 'Standard',
          'RFID Card Writer': 'Standard',
          'Barcode': 'Standard',
          'QR Code': 'Standard',
          'Fingerprint Recognition': 'Optional',
          'Face Recognition': 'Standard',
          'Audio/Visual Alarm': 'Optional',
          'Keyboard': 'Optional',
          'Solar Power': 'Optional',
          'Wireless Network': 'WiFi / 4G',
        },
      },
      {
        name: 'Core Features',
        items: {
          'Material': 'Carbon steel sheet',
          'Power Supply': 'AC 110-220V 50Hz 50W',
          'Operating Humidity': '10-90% RH',
          'Operating Temperature': '0°C ~ 60°C',
          'Dimensions': '80 × 70 × 95 cm',
          'Weight': 'Approx. 50 kg',
        },
      },
    ],
  },
  {
    id: 'r-widetunnel',
    category: 'UHF Conveyor Tunnel Reader',
    summary_en:
      'UHF RFID conveyor tunnel reader for high-volume item counting, goods inbound/outbound control, and automated inventory workflows.',
    feature_highlights_en: [
      'Identification of more than 400 items in 3 seconds',
      'Real-time on-screen list creation',
      'Professional motion control and mechanical design',
      'Electromagnetic shielding and RF optimization for accurate reading',
      'Three independent conveyor belt sections',
      'Abnormal sorting module expansion support',
    ],
    sections: [
      {
        name: 'Technical Specifications',
        items: {
          'Operating System': 'Windows (Android optional)',
          'Industrial Computer': 'I5, 4G+128; RK3399, 4G+16G',
          'Identification Technology': 'RFID (UHF)',
          'Reading Speed': '100 units/s',
          'Transfer Rate': 'Default 20 m/min, adjustable up to 30 m/min',
          'Maximum Load': '80 kg',
          'Box Reading Speed': '6-10 boxes/min',
          'Conveyor Belt': '3 independent sections',
          'Door Opening Speed': '1.2 s',
        },
      },
      {
        name: 'UHF RFID',
        items: {
          'Frequency Range': '840MHz-960MHz',
          'Protocol': 'ISO 18000-6C (EPC C1 G2)',
          'RFID Chip': 'Impinj R2000',
          'RFID Frequency Mode': 'Fixed frequency / frequency hopping',
          'Output Power': '33 dBm ± 1 dBm',
          'Tag Reading Capacity': '>=800 units',
          'Reading Time': '3-5 s',
          'Reading Mode': 'Static',
          'Operating Mode': 'Loop / trigger',
        },
      },
      {
        name: 'Physical Features',
        items: {
          'Material': '1.2 mm thick carbon steel',
          'Display': '10-inch touchscreen',
          'Dimensions': '1025 mm × 1875 mm × 4022 mm',
          'Carton Size': '900 × 700 × 550 mm',
        },
      },
      {
        name: 'Power Supply',
        items: {
          'Operating Power': 'Maximum 250W, 120W standby',
          'Operating Voltage': 'AC 220V',
        },
      },
      {
        name: 'Operating Environment',
        items: {
          'Storage Temperature': '-20°C ~ 60°C',
          'Operating Temperature': '-20°C ~ 60°C',
        },
      },
    ],
  },
  {
    id: 'r-boxtunnel',
    category: 'Industrial Inventory RFID Channel System',
    summary_en:
      'Tunnel-type bulk RFID reader machine for fast and accurate scanning of tagged items in tool rooms, workshops, and logistics warehouses.',
    feature_highlights_en: [
      '10.1-inch color touchscreen with 1366 x 768 resolution',
      '840-960 MHz UHF RFID technology with protocol expansion support',
      'Multiple interfaces including RJ45, RS232, WiFi, 4G, and alarm input',
      'Integrated audio and visual alarm',
      'Secure automatic shutter door',
      'Face recognition and presence sensor options',
    ],
    sections: [
      {
        name: 'RF Features',
        items: {
          'Identification Method': 'UHF',
          'RF Chip': 'Impinj R2000',
          'Frequency Range': '840MHz-960MHz (Adjustable)',
          'Protocol': 'EPC C1G2, ISO 18000-6B, ISO 18000-6C',
          'Frequency Band (Optional)':
            'ETSI: 865-868MHz, JP: 916.8-920.4MHz, TW: 922.25-927.75MHz, ID: 923.125-925.125MHz, RUS: 866.6-867.4MHz, TEST: 802.75-998.75MHz, JP_LBT: 916.8-920.8MHz',
          'Product Capacity': '1000 units (depending on product size)',
          'Recognition Time': '1-5 seconds',
          'Function':
            'RFID reading, multi-tag identification, tag data filtering, RSSI detection, quantity statistics',
        },
      },
      {
        name: 'Hardware Features',
        items: {
          'System Support': 'Windows / Android (optional)',
          'Hardware': 'I5 CPU, 4G RAM, 128G ROM; RK3399 CPU, 4G RAM, 16G ROM (optional)',
          'Display': '1366 x 768, 10.1-inch capacitive touchscreen',
          'Communication': 'RJ45 / RS232',
        },
      },
      {
        name: 'Function Options',
        items: {
          'RFID Card Reader': 'Standard',
          'Barcode': 'Optional',
          'QR Code': 'Optional',
          'Fingerprint Recognition': 'Optional',
          'Face Recognition': 'Optional',
          'CCTV Camera': 'Optional',
          'Solar Power': 'Optional',
          'Audio/Visual Alarm': 'Optional',
          'Wireless Network': 'WiFi / 4G',
        },
      },
      {
        name: 'Core Features',
        items: {
          'Material': 'Carbon steel sheet, glass',
          'Power Supply': 'AC 110-220V 50Hz 50W',
          'Operating Humidity': '10-90% RH',
          'Operating Temperature': '0°C ~ 60°C',
          'Dimensions': '164 × 150 × 238.2 cm',
          'Weight': 'Approx. 150 kg',
        },
      },
    ],
  },
  {
    id: 'r-visiondeskomni',
    category: 'UHF RFID Library Workstation',
    summary_en:
      'UHF RFID desktop workstation for library management, product registration, card operations, and self-service desk workflows.',
    feature_highlights_en: [
      '21.5-inch capacitive touchscreen with 1920 x 1080 resolution',
      '840-960 MHz UHF RFID technology with protocol expansion support',
      'RJ45 communication interface with 2x USB 2.0',
      'Authorization settings and function expansion support',
      'Card information recording support',
      'Integrated RFID reading for library workstation use',
    ],
    sections: [
      {
        name: 'RF Features',
        items: {
          'Identification Method': 'UHF',
          'RF Chip': 'Impinj R2000',
          'Frequency Range': '840MHz-960MHz (Adjustable)',
          'Protocol': 'EPC C1G2, ISO 18000-6B, ISO 18000-6C',
          'Frequency Band (Optional)':
            'ETSI: 865-868MHz, JP: 916.8-920.4MHz, TW: 922.25-927.75MHz, ID: 923.125-925.125MHz, RUS: 866.6-867.4MHz, TEST: 802.75-998.75MHz, JP_LBT: 916.8-920.8MHz',
          'Reading Capacity': '15 units (depending on product size)',
          'Function':
            'RFID reading, multi-tag identification, tag data filtering, RSSI detection, quantity statistics',
        },
      },
      {
        name: 'Hardware Features',
        items: {
          'System': 'Windows / Android (optional)',
          'Hardware': 'I5 CPU, 4G RAM, 128G ROM; RK3399 CPU, 4G RAM, 16G ROM (optional)',
          'Display': '1920 x 1080, 21.5-inch capacitive touchscreen',
          'Communication': 'RJ45 10/100 Mbps',
          'Other Interface': '2x USB 2.0',
        },
      },
      {
        name: 'Function Options',
        items: {
          'RFID Card Reader': 'Standard',
          'Face Recognition': 'Optional',
          'Barcode': 'Standard',
          'QR Code': 'Standard',
          'Audio/Visual Alarm': 'Optional',
          'Fingerprint Recognition': 'Optional',
          'Solar Power': 'Optional',
          'CCTV Camera': 'Optional',
          'Thermostatic Dehumidifier': 'Optional',
          'Wireless Network': 'WiFi / 4G',
        },
      },
      {
        name: 'Core Features',
        items: {
          'Material': 'Carbon steel sheet',
          'Power Supply': 'AC 110-220V 50Hz 50W',
          'Operating Humidity': '10-90% RH',
          'Operating Temperature': '0°C ~ 60°C',
          'Dimensions': '50.7 × 52 × 40 cm',
          'Weight': 'Approx. 50 kg',
        },
      },
    ],
  },
  {
    id: 'r-visiondeskmini',
    category: 'UHF RFID Reader/Writer Workstation',
    summary_en:
      'Desktop UHF RFID reader/writer workstation for read/write operations, card handling, registration, and self-service workflows.',
    feature_highlights_en: [
      '21.5-inch capacitive touchscreen with 1920 x 1080 resolution',
      '840-960 MHz UHF RFID technology with protocol expansion support',
      '5 dBi antenna',
      'RJ45 communication interface with 2x USB 2.0',
      'RFID card reading and writing support',
      'Designed for library, retail, and service workstation use',
    ],
    sections: [
      {
        name: 'RF Features',
        items: {
          'Identification Method': 'UHF',
          'RF Chip': 'Impinj R2000',
          'Frequency Range': '840MHz-960MHz',
          'Protocol': 'EPC C1G2, ISO 18000-6C, ISO 18000-6B',
          'Frequency Band (Optional)':
            'ETSI: 865-868MHz, JP: 916.8-920.4MHz, TW: 922.25-927.75MHz, ID: 923.125-925.125MHz, RUS: 866.6-867.4MHz, TEST: 802.75-998.75MHz, JP_LBT: 916.8-920.8MHz',
          'Antenna': '5 dBi',
          'Reading Capacity': '15 units (depending on product size)',
          'Function':
            'RFID read & write, multi-tag identification, tag data filtering, quantity statistics, RSSI detection, self-service card application',
        },
      },
      {
        name: 'Hardware Features',
        items: {
          'System': 'Windows / Android (optional)',
          'Hardware': 'I5 CPU, 4G RAM, 128G ROM; RK3399 CPU, 4G RAM, 16G ROM (optional)',
          'Display': '1920 x 1080, 21.5-inch dual capacitive touchscreen',
          'Communication': 'RJ45 10/100 Mbps',
          'Other Interface': '2x USB 2.0',
        },
      },
      {
        name: 'Function Options',
        items: {
          'RFID Card Reader': 'Standard',
          'RFID Card Writer': 'Standard',
          'Barcode': 'Standard',
          'QR Code': 'Standard',
          'Fingerprint Recognition': 'Optional',
          'Audio/Visual Alarm': 'Optional',
          'Face Recognition': 'Standard',
          'Keyboard': 'Optional',
          'Solar Power': 'Optional',
          'Wireless Network': 'WiFi / 4G',
        },
      },
      {
        name: 'Core Features',
        items: {
          'Material': 'Carbon steel sheet',
          'Power Supply': 'AC 110-220V 50Hz 50W',
          'Operating Humidity': '10-90% RH',
          'Operating Temperature': '0°C ~ 60°C',
          'Dimensions': '56 × 66 × 40 cm',
          'Weight': 'Approx. 45 kg',
        },
      },
    ],
  },
  {
    id: 'r-aerotunnel',
    category: 'RFID Inventory Tunnel System',
    summary_en:
      'Industrial UHF RFID inventory tunnel system designed for automated high-volume item identification on a conveyor line.',
    feature_highlights_en: [
      '10.1-inch capacitive touchscreen with 1280 x 800 resolution',
      '840-960 MHz UHF RFID technology with protocol expansion support',
      'Multi-interface communication including RJ45, RS232, and USB',
      'Support for multiple devices operating in parallel',
      'Real-time on-screen list creation for easier management',
      'Optional Windows or Android system support',
    ],
    sections: [
      {
        name: 'General Features',
        items: {
          'Identification Method': 'UHF',
          'RF Chip': 'Impinj R2000',
          'Frequency Range': '840MHz-960MHz (Adjustable)',
          'Protocol': 'EPC C1G2, ISO 18000-6B, ISO 18000-6C',
          'Frequency Band (Optional)':
            'ETSI: 865-868MHz, JP: 916.8-920.4MHz, TW: 922.25-927.75MHz, ID: 923.125-925.125MHz, RUS: 866.6-867.4MHz, TEST: 802.75-998.75MHz, JP_LBT: 916.8-920.8MHz',
          'RFID Output Power': '33 dBm ± 1 dBm (Max.)',
          'Reading Time': '3 seconds',
          'Reading Capacity': '400+ units',
          'Function':
            'RFID reading, multi-tag identification, tag data filtering, quantity statistics',
        },
      },
      {
        name: 'Hardware Features',
        items: {
          'System Support': 'Windows / Android (optional)',
          'Hardware': 'I5 CPU, 4G RAM, 128G ROM; RK3399 CPU, 4G RAM, 16G ROM (optional)',
          'Display': '1280 x 800, 10.1-inch capacitive touchscreen',
          'Communication': 'RJ45, RS232, USB',
        },
      },
      {
        name: 'Function Options',
        items: {
          'Audio/Visual Alarm': 'Standard',
          'CCTV Camera': 'Optional',
          'Wireless Network': 'WiFi / 4G',
        },
      },
      {
        name: 'Core Features',
        items: {
          'Material': 'Painted sheet metal',
          'Conveyor Speed': '33-50 cm/s',
          'Carrying Capacity': '50 kg (Max.)',
          'Power Supply': 'AC 110-220V 100W',
          'Operating Humidity': '10-90% RH',
          'Operating Temperature': '0°C ~ 60°C',
          'Dimensions': '850 mm × 1277 mm × 3391 mm',
          'Weight': 'Approx. 300 kg',
        },
      },
    ],
  },
  {
    id: 'r-minitunnel',
    category: 'RFID Warehouse Tunnel System',
    summary_en:
      'UHF RFID warehouse tunnel system for fast bulk inventory reading, conveyor-based item flow, and real-time warehouse data synchronization.',
    feature_highlights_en: [
      'Bulk reading capacity in 3 seconds for industrial inventory management',
      '10.1-inch capacitive touchscreen with 1366 x 768 resolution',
      '840-960 MHz UHF RFID technology with protocol expansion support',
      'Multi-interface communication including RJ45, RS232, USB, and alarm input',
      'Support for multiple devices operating in parallel',
      '33-50 cm/s conveyor speed for warehouse item flow',
    ],
    sections: [
      {
        name: 'RF Features',
        items: {
          'Identification Method': 'UHF',
          'RF Chip': 'Impinj R2000',
          'Frequency Range': '840MHz-960MHz (Adjustable)',
          'Protocol': 'EPC C1G2, ISO 18000-6B, ISO 18000-6C',
          'Frequency Band (Optional)':
            'ETSI: 865-868MHz, JP: 916.8-920.4MHz, TW: 922.25-927.75MHz, ID: 923.125-925.125MHz, RUS: 866.6-867.4MHz, TEST: 802.75-998.75MHz, JP_LBT: 916.8-920.8MHz',
          'Product Capacity': '1000 units (depending on product size)',
          'Recognition Time': '1-5 seconds',
          'Function':
            'RFID reading, multi-tag identification, tag data filtering, RSSI detection, quantity statistics',
        },
      },
      {
        name: 'Hardware Features',
        items: {
          'System Support': 'Windows / Android (optional)',
          'Hardware': 'I5 CPU, 4G RAM, 128G ROM; RK3399 CPU, 4G RAM, 16G ROM (optional)',
          'Display': '1920 x 1080, 10.1-inch capacitive touchscreen',
          'Communication': 'RJ45 10/100 Mbps',
        },
      },
      {
        name: 'Function Options',
        items: {
          'RFID Card Reader': 'Standard',
          'Barcode': 'Optional',
          'QR Code': 'Optional',
          'Fingerprint Recognition': 'Optional',
          'Face Recognition': 'Optional',
          'CCTV Camera': 'Optional',
          'Solar Power': 'Optional',
          'Audio/Visual Alarm': 'Optional',
          'Wireless Network': 'WiFi / 4G',
        },
      },
      {
        name: 'Core Features',
        items: {
          'Material': 'Carbon steel sheet, glass',
          'Power Supply': 'AC 110-220V 50Hz 50W',
          'Operating Humidity': '10-90% RH',
          'Operating Temperature': '0°C ~ 60°C',
          'Dimensions': '560 × 1532 × 1470 mm',
          'Weight': 'Approx. 150 kg',
        },
      },
    ],
  },
  {
    id: 'r-protunnel',
    category: 'RFID Warehouse Inventory Tracking System',
    summary_en:
      'Belt-type RFID tunnel gateway designed for bulk inventory management with UHF RFID reading and industrial conveyor mechanics.',
    feature_highlights_en: [
      '14-inch capacitive touchscreen with 1366 x 768 resolution',
      '840-960 MHz UHF RFID technology with protocol expansion support',
      'Multi-interface communication including RJ45, RS232, USB, and alarm input',
      'Support for multiple devices operating in parallel',
      '33-50 cm/s conveyor speed for warehouse item flow',
      'Real-time on-screen list creation for easier management',
    ],
    sections: [
      {
        name: 'RF Features',
        items: {
          'Identification Method': 'UHF / HF (optional)',
          'RF Chip': 'Impinj R2000',
          'Frequency Range': '840MHz-960MHz (Adjustable); HF: 13.56MHz',
          'Protocol': 'EPC C1G2, ISO 18000-6B, ISO 18000-6C',
          'Frequency Band (Optional)':
            'ETSI: 865-868MHz, JP: 916.8-920.4MHz, TW: 922.25-927.75MHz, ID: 923.125-925.125MHz, RUS: 866.6-867.4MHz, TEST: 802.75-998.75MHz, JP_LBT: 916.8-920.8MHz, HF: 13.56MHz',
          'Product Capacity': '1000 units (depending on product size)',
          'Recognition Time': '1-5 seconds',
          'Function':
            'RFID reading, multi-tag identification, tag data filtering, RSSI detection, quantity statistics',
        },
      },
      {
        name: 'Hardware Features',
        items: {
          'System Support': 'Windows / Android (optional)',
          'Hardware': 'I5 CPU, 4G RAM, 128G ROM; RK3399 CPU, 4G RAM, 16G ROM (optional)',
          'Display': '1920 x 1080, 14-inch capacitive touchscreen (21-inch optional)',
          'Communication': 'RJ45 10/100 Mbps',
        },
      },
      {
        name: 'Function Options',
        items: {
          'RFID Card Reader': 'Standard',
          'Barcode': 'Optional',
          'QR Code': 'Optional',
          'Fingerprint Recognition': 'Optional',
          'Face Recognition': 'Optional',
          'CCTV Camera': 'Optional',
          'Solar Power': 'Optional',
          'Audio/Visual Alarm': 'Optional',
          'Wireless Network': 'WiFi / 4G',
        },
      },
      {
        name: 'Core Features',
        items: {
          'Material': 'Carbon steel sheet, glass',
          'Power Supply': 'AC 110-220V 50Hz 50W',
          'Operating Humidity': '10-90% RH',
          'Operating Temperature': '0°C ~ 60°C',
          'Dimensions': '900 mm × 1644 mm × 2352 mm',
          'Weight': 'Approx. 150 kg',
        },
      },
    ],
  },
];

const englishRetailBySlug = new Map(englishRetailCopies.map(item => [item.id, item]));

const retailCategoryTranslations: Record<string, string> = {
  'Endüstriyel Envanter RFID Kanal Makinesi': 'Industrial Inventory RFID Channel System',
  'Gömülü UHF RFID Tünel Okuyucu': 'Embedded UHF RFID Tunnel Reader',
  'RFID Akıllı Geçit Sistemi': 'RFID Smart Gate System',
  'RFID Depo Envanter Takip Sistemi': 'RFID Warehouse Inventory Tracking System',
  'RFID Depo Tüneli Sistemi': 'RFID Warehouse Tunnel System',
  'RFID Envanter Tüneli Sistemi': 'RFID Inventory Tunnel System',
  'UHF Konveyör Tünel Okuyucu': 'UHF Conveyor Tunnel Reader',
  'UHF Perakende RFID Okuyucu': 'UHF Retail RFID Reader',
  'UHF RFID Kütüphane İş İstasyonu': 'UHF RFID Library Workstation',
  'UHF RFID Okur/Yazar İş İstasyonu': 'UHF RFID Reader/Writer Workstation',
  'UHF RFID İş İstasyonu': 'UHF RFID Workstation',
};

const retailSectionTranslations: Record<string, string> = {
  'Donanım Özellikleri': 'Hardware Features',
  'Fiziksel Özellikler': 'Physical Features',
  'Fonksiyon Seçimi': 'Function Options',
  'Genel Özellikler': 'General Features',
  'Güç Kaynağı': 'Power Supply',
  'RF Özellikleri': 'RF Features',
  'Teknik Özellikler': 'Technical Specifications',
  'Temel Özellikler': 'Core Features',
  'UHF RFID': 'UHF RFID',
  'Çalışma Ortamı': 'Operating Environment',
};

const retailSpecKeyTranslations: Record<string, string> = {
  'Aktarım Hızı': 'Transfer Rate',
  'Alarm Tipi': 'Alarm Type',
  'Anten': 'Antenna',
  'Ağırlık': 'Weight',
  'Barkod': 'Barcode',
  'Boyutlar': 'Dimensions',
  'CCTV Kamera': 'CCTV Camera',
  'Depolama Sıcaklığı': 'Storage Temperature',
  'Diğer Arayüz': 'Other Interface',
  'Donanım': 'Hardware',
  'Ekran': 'Display',
  'Endüstriyel Bilgisayar': 'Industrial Computer',
  'Etiket Okuma Kapasitesi': 'Tag Reading Capacity',
  'Etiket Tanıma Hızı': 'Tag Recognition Speed',
  'Frekans Aralığı': 'Frequency Range',
  'Frekans Bandı (Opsiyonel)': 'Frequency Band (Optional)',
  'Güneş Enerjisi': 'Solar Power',
  'Güç Kaynağı': 'Power Supply',
  'Işın Oluşturma Süresi': 'Beamforming Time',
  'Işın Tarama Aralığı': 'Beam Scanning Range',
  'Kablosuz Ağ': 'Wireless Network',
  'Kapsama Açısı': 'Coverage Angle',
  'Kapı Açılma Hızı': 'Door Opening Speed',
  'Karton Boyutu': 'Carton Size',
  'Klavye': 'Keyboard',
  'Konveyör Bantı': 'Conveyor Belt',
  'Konveyör Hızı': 'Conveyor Speed',
  'Kutu Okuma Hızı': 'Box Reading Speed',
  'Maksimum Yük': 'Maximum Load',
  'Malzeme': 'Material',
  'Nem': 'Humidity',
  'Okuma Hızı': 'Reading Speed',
  'Okuma Kapasitesi': 'Reading Capacity',
  'Okuma Mesafesi': 'Reading Distance',
  'Okuma Modu': 'Reading Mode',
  'Okuma Süresi': 'Reading Time',
  'Parmak İzi Tanıma': 'Fingerprint Recognition',
  'Protokol': 'Protocol',
  'QR Kod': 'QR Code',
  'RF Çip': 'RF Chip',
  'RF Çıkış Gücü': 'RF Output Power',
  'RFID Frekans Modu': 'RFID Frequency Mode',
  'RFID Kart Okuyucu': 'RFID Card Reader',
  'RFID Kart Yazıcı': 'RFID Card Writer',
  'RFID Okuma & Yazma': 'RFID Reading & Writing',
  'RFID Çip': 'RFID Chip',
  'RFID Çıkış Gücü': 'RFID Output Power',
  'Sesli/Işıklı Alarm': 'Audio/Visual Alarm',
  'Sistem': 'System',
  'Sistem Desteği': 'System Support',
  'Tanıma Süresi': 'Recognition Time',
  'Tanımlama Teknolojisi': 'Identification Technology',
  'Tanımlama Yöntemi': 'Identification Method',
  'Taşıma Kapasitesi': 'Carrying Capacity',
  'Termostatik Nem Alıcı': 'Thermostatic Dehumidifier',
  'Yüz Tanıma': 'Face Recognition',
  'Çalışma Gücü': 'Operating Power',
  'Çalışma Modu': 'Operating Mode',
  'Çalışma Nemi': 'Operating Humidity',
  'Çalışma Sıcaklığı': 'Operating Temperature',
  'Çalışma Voltajı': 'Operating Voltage',
  'Çıkış Gücü': 'Output Power',
  'Ürün Kapasitesi': 'Product Capacity',
  'İletişim': 'Communication',
  'İşletim Sistemi': 'Operating System',
  'İşlev': 'Function',
};

const retailTextTranslations: Array<[RegExp, string]> = [
  [/çözünürlüklü/gi, 'resolution'],
  [/kapasitif dokunmatik ekran/gi, 'capacitive touchscreen'],
  [/renkli dokunmatik ekran/gi, 'color touchscreen'],
  [/dokunmatik ekran/gi, 'touchscreen'],
  [/inç/gi, 'inch'],
  [/parazit önleme bölgesi tasarımı/gi, 'interference prevention zone design'],
  [/ile RJ45 iletişim arayüzü/gi, 'with RJ45 communication interface'],
  [/saniyede/gi, 'in seconds'],
  [/ürün tanımlama/gi, 'product identification'],
  [/ürün toplu tanımlama/gi, 'bulk product identification'],
  [/metreye kadar okuma mesafesiyle güçlü grup okuma kapasitesi/gi, 'read distance with strong group reading capability'],
  [/adaptif ışın demetiyle/gi, 'adaptive beams with'],
  [/derece fazlı dizi izleme/gi, 'degree phased-array tracking'],
  [/Anormal sıralama modülü genişletme desteği/gi, 'Abnormal sorting module expansion support'],
  [/Daha kolay yönetim için ekranda gerçek zamanlı liste oluşturma/gi, 'Real-time on-screen list creation for easier management'],
  [/Depo ürün akışı için/gi, 'For warehouse product flow,'],
  [/konveyör hızı/gi, 'conveyor speed'],
  [/Doğru okuma için elektromanyetik koruma ve RF optimizasyonu/gi, 'Electromagnetic shielding and RF optimization for accurate reading'],
  [/Ekranda gerçek zamanlı liste oluşturma/gi, 'Real-time on-screen list creation'],
  [/Endüstriyel envanter yönetimi için/gi, 'For industrial inventory management,'],
  [/toplu okuma kapasitesi/gi, 'bulk reading capacity'],
  [/Entegre sesli ve görsel alarm/gi, 'Integrated audio and visual alarm'],
  [/Gömülü tezgah ve iş istasyonu kurulumu için optimize edilmiş/gi, 'Optimized for embedded counter and workstation installation'],
  [/Güvenli otomatik kepenk kapısı/gi, 'Secure automatic shutter door'],
  [/gömülü kurulum esnekliği/gi, 'embedded installation flexibility'],
  [/Kart bilgisi kayıt desteği/gi, 'Card information recording support'],
  [/Kütüphane iş istasyonu kullanımı için entegre RFID okuma/gi, 'Integrated RFID reading for library workstation use'],
  [/Kütüphane, perakende ve servis iş istasyonu kullanımı için tasarlandı/gi, 'Designed for library, retail, and service workstation use'],
  [/Opsiyonel Windows veya Android sistem desteği/gi, 'Optional Windows or Android system support'],
  [/Paralel çalışan birden fazla cihaz desteği/gi, 'Support for multiple devices operating in parallel'],
  [/Profesyonel hareket kontrolü ve mekanik tasarım/gi, 'Professional motion control and mechanical design'],
  [/Protokol genişletme desteğiyle/gi, 'with protocol expansion support'],
  [/teknolojisi/gi, 'technology'],
  [/RFID kart okuma ve yazma desteği/gi, 'RFID card reading and writing support'],
  [/iletişim arayüzü/gi, 'communication interface'],
  [/dahil çoklu iletişim arayüzü/gi, 'multi-interface communication including'],
  [/dahil çoklu arayüz/gi, 'multi-interface support including'],
  [/Self-servis uygulamalar için RFID okuma\/yazma iş akışları/gi, 'RFID read/write workflows for self-service applications'],
  [/Yetkilendirme ayarları ve fonksiyon genişletme desteği/gi, 'Authorization settings and function expansion support'],
  [/Yüksek trafikli perakende ortamları için/gi, 'For high-traffic retail environments,'],
  [/okuma hızı/gi, 'reading speed'],
  [/Yüz tanıma ve mekan sensörü opsiyonları/gi, 'Face recognition and presence sensor options'],
  [/Çevrimiçi\/çevrimdışı EAS alarm desteğiyle entegre sesli ve görsel alarm/gi, 'Integrated audio and visual alarm with online/offline EAS alarm support'],
  [/Çift renk dış görünüm seçenekleri/gi, 'Dual-color exterior options'],
  [/Çoklu arayüzlü perakende sistem entegrasyonu/gi, 'Retail system integration with multiple interfaces'],
  [/Özelleştirilebilir ürün görünümü, işlevler ve protokoller/gi, 'Customizable product appearance, functions, and protocols'],
  [/Üç bağımsız konveyör bant bölümü/gi, 'Three independent conveyor belt sections'],
  [/ürün/gi, 'items'],
  [/etiket/gi, 'tags'],
  [/çalışma/gi, 'operating'],
  [/sıcaklığı/gi, 'temperature'],
  [/nem/gi, 'humidity'],
  [/ağırlık/gi, 'weight'],
  [/boyutlar/gi, 'dimensions'],
  [/malzeme/gi, 'material'],
  [/güç/gi, 'power'],
  [/destek/gi, 'support'],
  [/opsiyonel/gi, 'optional'],
];

function translateRetailText(value = '') {
  return retailTextTranslations.reduce(
    (text, [pattern, replacement]) => text.replace(pattern, replacement),
    value
  );
}

function retailFallbackSummary(item: ProductWithCopy & { category?: string; brand?: string }) {
  const category = retailCategoryTranslations[item.category ?? ''] ?? item.category ?? 'RFID retail product';
  return `${item.title} is a ${category.toLowerCase()} designed for RFID-based retail, warehouse, and inventory workflows. Altis Technology supports product selection, integration planning, and project-based delivery.`;
}

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
  brand?: string;
  connectivity?: string[];
  featureHighlights?: string[];
  sections?: { name: string; items: Record<string, string> }[];
}>(item: T): T {
  const englishCopy = englishRetailBySlug.get(item.slug);
  return {
    ...item,
    category: englishCopy?.category ?? retailCategoryTranslations[item.category ?? ''] ?? item.category,
    shortDesc: englishCopy?.summary_en ?? retailFallbackSummary(item),
    featureHighlights: englishCopy?.feature_highlights_en ?? item.featureHighlights?.map(translateRetailText),
    sections: englishCopy?.sections ?? item.sections?.map(section => ({
      name: retailSectionTranslations[section.name] ?? translateRetailText(section.name),
      items: Object.fromEntries(
        Object.entries(section.items).map(([key, value]) => [
          retailSpecKeyTranslations[key] ?? translateRetailText(key),
          translateRetailText(value),
        ])
      ),
    })),
    tags: translateEnglishTags(item.tags),
  };
}
