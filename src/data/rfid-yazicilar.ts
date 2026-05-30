export type Printer = {
  slug: string;
  title: string;
  brand: string;
  image: string;
  shortDesc: string;
  description: string;
  storeUrl: string;
  tags: string[];
  type: 'endüstriyel' | 'masaüstü' | 'mobil';
};

export const printers: Printer[] = [
  {
    slug: 'sato-cl4nx-rfid-printer',
    title: 'Sato CL4NX+ RFID Yazıcı',
    brand: 'Sato',
    image: '/assets/products/sato-cl4nx-rfid-printer/sato-cl4nx-rfid-printer-1.webp',
    datasheet: '/assets/products/sato-cl4nx-rfid-printer/sato-cl4nx-rfid-printer-datasheet.pdf',
    gallery: [
      '/assets/products/sato-cl4nx-rfid-printer/sato-cl4nx-rfid-printer-1.webp',
      '/assets/products/sato-cl4nx-rfid-printer/sato-cl4nx-rfid-printer-2.webp',
    ],
    shortDesc: 'Snap-on kafa, alet gerektirmeyen platen değişimi, LED hata göstergesi, video kılavuzlu bakım.',
    description: 'Sato CL4NX+ Termal Endüstriyel Yazıcı; az bileşenli, kullanımı kolay ve sorunsuz bir RFID yazıcı olarak tüm ihtiyaçlarınızı karşılayabilen endüstriyel bir üründür. Confidex ve Epozzy\'nin esnek metal RFID etiketlerini sorunsuz basabilirsiniz. Üretim, perakende, otomotiv, ulaşım ve lojistik gibi alanlarda kullanılan RFID etiket baskısı için tasarlanan CL4NX+, mavi ve kırmızı LED ışıklı ekranı sayesinde hataları kolayca tespit etmenizi sağlar. Bakım ve hata çözümü için video kılavuzu sunar. Snap-on baskı kafası ve aletsiz platen değişimiyle kurulum ve bakımı minimuma indirir.',
    storeUrl: 'https://www.altis.com.tr/store/product/sato-cl4nx-thermal-industrial-printer/',
    tags: ['Endüstriyel', 'Metal RFID', 'UHF', 'LED Gösterge', 'Sato'],
    type: 'endüstriyel',
  },
  {
    slug: 'sato-cl6nx-rfid-printer',
    title: 'Sato CL6NX+ RFID Yazıcı',
    brand: 'Sato',
    image: '/assets/products/sato-cl6nx-rfid-printer/sato-cl6nx-rfid-printer-1.webp',
    datasheet: '/assets/products/sato-cl6nx-rfid-printer/sato-cl6nx-rfid-printer-datasheet.pdf',
    gallery: [
      '/assets/products/sato-cl6nx-rfid-printer/sato-cl6nx-rfid-printer-1.webp',
      '/assets/products/sato-cl6nx-rfid-printer/sato-cl6nx-rfid-printer-2.webp',
    ],
    shortDesc: '47 baskı dili, Bluetooth dahil çoklu arayüz, PureLineTM rulo aşınma takibi, kompakt metal kasa.',
    description: 'Sato CL6NX+ Endüstriyel Termal Yazıcı; az bileşenli, kullanımı kolay, sorunsuz bir UHF RFID yazıcısı olarak tüm endüstriyel ihtiyaçlarınızı karşılar. Metal kasası ve çift katmanlı kapağıyla sınırlı alanlı endüstriyel ortamlara da uygundur. LED ekran sayesinde hataları kolayca tespit edebilir, video kılavuz servisiyle kolaylık sağlarsınız. 47 baskı ve 31 ekran diliyle global kullanıma optimize edilmiş olan CL6NX+, PureLineTM rulo aşınma takibi ile olası sorunlara karşı hazırlıklı olmanızı sağlar ve Bluetooth dahil çoklu arayüzler üzerinden bağlantı imkânı sunar.',
    storeUrl: 'https://www.altis.com.tr/store/product/sato-cl6nx-rfid-printer/',
    tags: ['Endüstriyel', 'UHF', 'Bluetooth', '47 Dil', 'Metal RFID', 'Sato'],
    type: 'endüstriyel',
  },
  {
    slug: 'sato-ct4-lx-rfid-printer',
    title: 'Sato CT4-LX RFID Yazıcı',
    brand: 'Sato',
    image: '/assets/products/sato-ct4-lx-rfid-printer/sato-ct4-lx-rfid-printer-1.webp',
    datasheet: '/assets/products/sato-ct4-lx-rfid-printer/sato-ct4-lx-rfid-printer-datasheet.pdf',
    gallery: [
      '/assets/products/sato-ct4-lx-rfid-printer/sato-ct4-lx-rfid-printer-1.webp',
      '/assets/products/sato-ct4-lx-rfid-printer/sato-ct4-lx-rfid-printer-2.webp',
      '/assets/products/sato-ct4-lx-rfid-printer/sato-ct4-lx-rfid-printer-3.webp',
    ],
    shortDesc: 'Kompakt flatbed, 4.3" dokunmatik ekran, UHF ve HF/NFC kodlama, etiket israfı önleme.',
    description: 'Sato CT4-LX RFID Flatbed Yazıcı, olağanüstü projeleriniz için tasarlanmış; zekâyı, işlevselliği ve performansı kusursuz biçimde harmanlayan kompakt bir çözümdür. Genellikle yalnızca endüstriyel yazıcılarda bulunan özellik ve fonksiyonları küçük bir pakette sunan 4.3" termal yazıcıdır. Tam renkli dokunmatik ekranı, yeni nesil kablosuz ağ seçenekleri ve benzersiz etiket israfı önleme özelliğiyle maliyet etkinliği ve pratikliği bir arada sunar. UHF ve HF/NFC RFID yerleştirmelerini otomatik olarak kodlayabilen bu ürün, kullanıcı tarafından değiştirilebilir baskı kafası ve rulosuyla kolay kullanım ve bakım imkânı tanır.',
    storeUrl: 'https://www.altis.com.tr/store/product/sato-ct4-lx-rfid-printer/',
    tags: ['Kompakt', 'Flatbed', 'UHF', 'HF/NFC', 'Dokunmatik Ekran', 'Sato'],
    type: 'masaüstü',
  },
  {
    slug: 'zebra-zd500-rfid-printer',
    title: 'Zebra ZD500 RFID Yazıcı',
    brand: 'Zebra',
    image: '/assets/products/zebra-zd500-rfid-printer/zebra-zd500-rfid-printer-1.webp',
    datasheet: '/assets/products/zebra-zd500-rfid-printer/zebra-zd500-rfid-printer-datasheet.pdf',
    gallery: [
      '/assets/products/zebra-zd500-rfid-printer/zebra-zd500-rfid-printer-1.webp',
      '/assets/products/zebra-zd500-rfid-printer/zebra-zd500-rfid-printer-2.webp',
      '/assets/products/zebra-zd500-rfid-printer/zebra-zd500-rfid-printer-3.webp',
      '/assets/products/zebra-zd500-rfid-printer/zebra-zd500-rfid-printer-4.webp',
      '/assets/products/zebra-zd500-rfid-printer/zebra-zd500-rfid-printer-5.webp',
    ],
    shortDesc: 'Link-OS, WiFi + Bluetooth, otomatik kalibrasyon, üretim ve perakende için UHF RFID.',
    description: 'Zebra ZD500 Masaüstü Yazıcı, kompakt yapısına karşın performans için ihtiyaç duyulan tüm özellikleri barındırır. Link-OS destekli ZD500R; entegre ve yönetimi kolay bir cihazdır. Otomatik kalibrasyon sayesinde medya, atık ve rulo değişiminden tasarruf sağlarsınız. UHF RFID kodlama yetenekleriyle üretim, kamu ve sağlık sektörü takibi ile perakende etiketleme gibi çeşitli uygulamalara uygundur. Zebra\'nın sektör lideri RFID yazıcılarıyla aynı teknolojiye sahip olan ZD500R, bir sonraki nesil dock desteği ve WiFi ile Bluetooth (802.11a/b/g/n) bağlantısı sunar.',
    storeUrl: 'https://www.altis.com.tr/store/product/zebra-zd500-rfid-printer/',
    tags: ['Masaüstü', 'UHF', 'WiFi', 'Bluetooth', 'Link-OS', 'Zebra'],
    type: 'masaüstü',
  },
  {
    slug: 'zebra-zd621r-rfid-printer',
    title: 'Zebra ZD621R RFID Yazıcı',
    brand: 'Zebra',
    image: '/assets/products/zebra-zd621r-rfid-printer/zebra-zd621r-rfid-printer-1.webp',
    datasheet: '/assets/products/zebra-zd621r-rfid-printer/zebra-zd621r-rfid-printer-datasheet.pdf',
    gallery: [
      '/assets/products/zebra-zd621r-rfid-printer/zebra-zd621r-rfid-printer-1.webp',
    ],
    shortDesc: '4.3" tam LCD ekran, üstün baskı kalitesi, sahada kurulabilir modüller, sınıfının en iyisi.',
    description: 'Zebra ZD621R, tam 4.3" LCD ekranı, kullanım kolaylığı artırıcı özellikleri ve üstün baskı kalitesiyle sınıfının en iyisi konumundadır. RFID baskı/kodlama ve sahada kurulabilir özellikleriyle öne çıkan ZD621R; kullanıcı dostu arayüzü, yüksek yazdırma hızı ve güvenilir RFID performansıyla üretim, lojistik ve perakende ortamlarında kesintisiz çalışmayı destekler.',
    storeUrl: 'https://www.altis.com.tr/store/product/zebra-zd621r-rfid-printer/',
    tags: ['Masaüstü', 'UHF', '4.3" LCD', 'Sahada Kurulum', 'Zebra'],
    type: 'masaüstü',
  },
  {
    slug: 'zebra-zq500-mobile-rfid-printer',
    title: 'Zebra ZQ500 Mobil RFID Yazıcı',
    brand: 'Zebra',
    image: '/assets/products/zebra-zq500-mobile-rfid-printer/zebra-zq500-mobile-rfid-printer-1.webp',
    datasheet: '/assets/products/zebra-zq500-mobile-rfid-printer/zebra-zq500-mobile-rfid-printer-datasheet.pdf',
    gallery: [
      '/assets/products/zebra-zq500-mobile-rfid-printer/zebra-zq500-mobile-rfid-printer-1.webp',
      '/assets/products/zebra-zq500-mobile-rfid-printer/zebra-zq500-mobile-rfid-printer-2.webp',
      '/assets/products/zebra-zq500-mobile-rfid-printer/zebra-zq500-mobile-rfid-printer-3.webp',
      '/assets/products/zebra-zq500-mobile-rfid-printer/zebra-zq500-mobile-rfid-printer-4.webp',
      '/assets/products/zebra-zq500-mobile-rfid-printer/zebra-zq500-mobile-rfid-printer-5.webp',
    ],
    shortDesc: 'Sert saha koşullarına dayanıklı, eldiven uyumlu, yüksek kapasiteli batarya, mobil saha baskısı.',
    description: 'Zebra ZQ500 Serisi yazıcılar sert koşullardan, çarpma ve darbelerden etkilenmez. Betondan düşme, püskürtülen sıvılar, kir, kazalar ve mobil çalışma ortamlarında sık karşılaşılan diğer tehlikelere karşı dayanıklı olacak şekilde tasarlanmıştır. Büyük tuşlar ve kullanıcı dostu arayüzü sayesinde eldivenle bile kolaylıkla kullanılabilen bu yazıcılar, üstün özellikleri ve yüksek kapasiteli bataryaları sayesinde iş verimliliğini artırır ve sizinle aynı tempoda çalışır.',
    storeUrl: 'https://www.altis.com.tr/store/product/zebra-zq500-mobile-rfid-printer/',
    tags: ['Mobil', 'UHF', 'Dayanıklı', 'Eldiven Uyumlu', 'Zebra'],
    type: 'mobil',
  },
  {
    slug: 'zebra-zq630-mobile-rfid-printer',
    title: 'Zebra ZQ630 Mobil RFID Yazıcı',
    brand: 'Zebra',
    image: '/assets/products/zebra-zq630-mobile-rfid-printer/zebra-zq630-mobile-rfid-printer-1.webp',
    datasheet: '/assets/products/zebra-zq630-mobile-rfid-printer/zebra-zq630-mobile-rfid-printer-datasheet.pdf',
    gallery: [
      '/assets/products/zebra-zq630-mobile-rfid-printer/zebra-zq630-mobile-rfid-printer-1.webp',
      '/assets/products/zebra-zq630-mobile-rfid-printer/zebra-zq630-mobile-rfid-printer-2.webp',
      '/assets/products/zebra-zq630-mobile-rfid-printer/zebra-zq630-mobile-rfid-printer-3.webp',
      '/assets/products/zebra-zq630-mobile-rfid-printer/zebra-zq630-mobile-rfid-printer-4.webp',
    ],
    shortDesc: 'Renkli ekran, WiFi + Bluetooth hızlı uyandırma, sektör lideri batarya, uygulama noktasında RFID kodlama.',
    description: 'Zebra ZQ630 RFID\'nin hızlı, yüksek kaliteli baskısı ve gelişmiş yetenekleriyle üretimi artırabilirsiniz. Renkli ekran, sezgisel navigasyon, WiFi veya Bluetooth üzerinden hızlı uyandırma, sektör lideri batarya kapasitesi ve RFID — tüm bunlar tek bir hafif, dayanıklı mobil yazıcıda. Uygulama noktasında baskı/kodlama yaparak hataları azaltın ve RFID etiketlerini nesnelere daha hızlı uygulayın. Çalışanların en uzun vardiyada bile işi tamamlamaları için ihtiyaç duydukları batarya kapasitesini ve akıllı analizleri onlara sağlayın.',
    storeUrl: 'https://www.altis.com.tr/store/product/zebra-zq600-mobile-rfid-printer/',
    tags: ['Mobil', 'UHF', 'Renkli Ekran', 'WiFi', 'Bluetooth', 'Zebra'],
    type: 'mobil',
  },
  {
    slug: 'zebra-zt411-on-metal-rfid-printer',
    title: 'Zebra ZT411 Metal Yüzey RFID Yazıcı',
    brand: 'Zebra',
    image: '/assets/products/zebra-zt411-on-metal-rfid-printer/zebra-zt411-on-metal-rfid-printer-1.webp',
    datasheet: '/assets/products/zebra-zt411-on-metal-rfid-printer/zebra-zt411-on-metal-rfid-printer-datasheet.pdf',
    gallery: [
      '/assets/products/zebra-zt411-on-metal-rfid-printer/zebra-zt411-on-metal-rfid-printer-1.webp',
      '/assets/products/zebra-zt411-on-metal-rfid-printer/zebra-zt411-on-metal-rfid-printer-2.webp',
      '/assets/products/zebra-zt411-on-metal-rfid-printer/zebra-zt411-on-metal-rfid-printer-3.webp',
    ],
    shortDesc: 'Metal dahil her yüzey için anlık RFID varlık etiketleme, Silverline etiket desteği.',
    description: 'Zebra ZT411\'in RFID On Metal Etiketleme çözümü; metal dahil tüm yüzeyler için anlık RFID varlık etiketleme uygulamaları için idealdir. Üretimden perakendeye, ulaşımdan sağlığa kadar pek çok sektörde RFID\'nin avantajları bilinmektedir. RFID sistemleri (etiketler, yazıcılar ve okuyucular); varlık ve envanter takibini gerçek zamanlı olarak mümkün kılarak işletmenizin tüm varlıklarından maksimum verim almanızı sağlar. Baskı kafası tertibatı, Silverline etiketler gibi daha kalın medyaları barındırmak için özel tasarlanmış; ayarlanabilir sensör tertibatı standart medya ile Silverline etiketlerin artan kalınlığını destekler.',
    storeUrl: 'https://www.altis.com.tr/store/product/zebra-zt411-on-metal-rfid-printer/',
    tags: ['Endüstriyel', 'Metal Yüzey', 'UHF', 'Silverline', 'Varlık Takibi', 'Zebra'],
    type: 'endüstriyel',
  },
];
