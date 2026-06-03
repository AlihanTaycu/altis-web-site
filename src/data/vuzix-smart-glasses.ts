export type VuzixSpecGroup = {
  title: string;
  specs: { label: string; value: string }[];
};

export type VuzixSmartGlass = {
  slug: string;
  name: string;
  shortName: string;
  schemaType: 'Product';
  route: string;
  badge: string;
  category: string;
  positioning: string;
  headline: string;
  shortDesc: string;
  description: string;
  image: string;
  gallery: string[];
  heroStats: { value: string; label: string }[];
  highlights: { title: string; text: string }[];
  useCases: { title: string; text: string }[];
  specGroups: VuzixSpecGroup[];
  packageNotes: { title: string; text: string }[];
  certifications: string[];
};

export const vuzixSmartGlasses: VuzixSmartGlass[] = [
  {
    slug: 'vuzix-m400',
    name: 'Vuzix M400',
    shortName: 'M400',
    schemaType: 'Product',
    route: '/urunler/akilli-gozluk/vuzix-m400/',
    badge: 'Kurumsal Monoküler',
    category: 'Saha servis, sağlık ve uzaktan destek',
    positioning: 'Güçlü, hafif ve çok yönlü kurumsal akıllı gözlük.',
    headline: 'Sahada çalışan ekipler için güçlü ve esnek akıllı gözlük.',
    shortDesc: 'Vuzix M400; 13 MP kamera, parlak OLED ekran, sıcak değiştirilebilir pil ve IP67 dayanıklılık ile saha servis, sağlık ve uzaktan destek operasyonları için tasarlanmıştır.',
    description: 'M400, depo, sağlık, saha servis ve eğitim senaryolarında operatörün ellerini serbest bırakan Android tabanlı bir giyilebilir bilgisayardır. Hafif gövdesi, çoklu montaj seçenekleri, 13 MP kamerası ve parlak OLED ekranı ile görüntülü destek, barkod okuma, iş talimatı ve saha dokümantasyonu süreçlerini tek cihazda toplar.',
    image: '/images/vuzix/m400-hero.jpg',
    gallery: ['/images/vuzix/m400-hero.jpg', '/images/vuzix/vuzix-M400-ozellikler-altis-1920x688.webp', '/images/vuzix/vuzix_m400_manken.webp'],
    heroStats: [
      { value: '13 MP', label: 'kamera' },
      { value: 'IP67', label: 'koruma' },
      { value: '2 m', label: 'düşme testi' },
      { value: 'OLED', label: 'parlak ekran' },
    ],
    highlights: [
      { title: 'Güçlü XR1 platformu', text: 'Qualcomm XR1 işlemci, 6 GB RAM ve Android işletim sistemiyle kurumsal uygulamaları sahaya taşır.' },
      { title: 'Sıcak değiştirilebilir pil', text: 'Harici pil mimarisi vardiya içinde cihazı kapatmadan pil değişimine imkan verir.' },
      { title: 'Uzaktan uzman desteği', text: 'See-what-I-see video, yüksek ses çıkışı ve gürültü azaltmalı mikrofonlarla canlı destek akışlarını netleştirir.' },
      { title: 'Esnek montaj', text: 'Sağ veya sol göz kullanımı, çerçeve, baret, kafa bandı ve güvenlik gözlüğü seçenekleriyle farklı sahalara uyarlanır.' },
    ],
    useCases: [
      { title: 'Saha servis', text: 'Teknisyenler bakım adımlarını görüntüler, fotoğraf/video kaydı alır ve uzaktaki uzmanla canlı görüşür.' },
      { title: 'Sağlık ve telemedikal', text: 'IEC 60601 tıbbi kullanım derecesiyle klinik eğitim ve canlı uzman desteği senaryolarına uygundur.' },
      { title: 'Depo ve envanter', text: 'Barkod okuma, iş emri görüntüleme ve kalite kontrol kayıtları operatörün görüş alanına taşınır.' },
    ],
    specGroups: [
      {
        title: 'Sistem',
        specs: [
          { label: 'İşlemci', value: 'Qualcomm XR1, 8 çekirdek 2.52 GHz' },
          { label: 'Bellek', value: '6 GB LPDDR4 RAM' },
          { label: 'Depolama', value: '64 GB dahili flash' },
          { label: 'İşletim sistemi', value: 'Android, OTA güncellenebilir' },
        ],
      },
      {
        title: 'Görüntü ve kamera',
        specs: [
          { label: 'Ekran', value: 'nHD OLED, 16:9' },
          { label: 'Parlaklık', value: '2000+ nit' },
          { label: 'Kontrast', value: '10.000:1 üzeri' },
          { label: 'Kamera', value: '13 MP fotoğraf, 1080p/60 video, PDAF' },
        ],
      },
      {
        title: 'Dayanıklılık ve bağlantı',
        specs: [
          { label: 'Koruma', value: 'IP67 toz ve su koruması' },
          { label: 'Düşme testi', value: '2 metreye kadar' },
          { label: 'Bağlantı', value: 'Wi-Fi 5, Bluetooth 5.0, USB-C' },
          { label: 'Ses', value: '97 dB hoparlör, üçlü gürültü önleyici mikrofon' },
        ],
      },
    ],
    packageNotes: [
      { title: 'Longevity Serisi', text: 'M400 ana ünite, IP67 USB-C pil, lenssiz çerçeve, güç kablosu, USB şarj kablosu, taşıma çantası ve kullanım kılavuzu içerir.' },
      { title: 'Extended Serisi', text: 'Daha uzun çalışma süresi için 3350 mAh USB-C güç bankası seçeneğiyle yapılandırılabilir.' },
    ],
    certifications: ['IP67', 'IEC 60601', 'ISO 14644-1', '2 m düşme testi'],
  },
  {
    slug: 'vuzix-m4000',
    name: 'Vuzix M4000',
    shortName: 'M4000',
    schemaType: 'Product',
    route: '/urunler/akilli-gozluk/vuzix-m4000/',
    badge: 'Waveguide AR',
    category: 'Üretim, montaj ve karmaşık bakım',
    positioning: 'Şeffaf waveguide ekranlı kurumsal AR çözümü.',
    headline: 'Gerçek AR katmanını operatörün görüş alanına taşıyın.',
    shortDesc: 'Vuzix M4000; şeffaf waveguide ekranı, 5000 nit parlaklığı, 4K kamera desteği ve hafif form faktörüyle üretim, montaj ve bakım operasyonları için geliştirilmiştir.',
    description: 'M4000, M400 platformunun kurumsal gücünü şeffaf waveguide optiklerle birleştirir. Operatör gerçek dünyayı görmeye devam ederken iş talimatı, uzman yönlendirmesi, kalite kontrol bilgisi ve AR katmanlarını görüş alanında takip eder. Bu yapı özellikle karmaşık montaj, bakım, mühendislik ve eğitim süreçlerinde güçlü bir avantaj sağlar.',
    image: '/images/vuzix/m4000-hero.webp',
    gallery: ['/images/vuzix/m4000-hero.webp', '/images/vuzix/m4000-detail.webp', '/images/vuzix/vuzix_m4000_manken.webp'],
    heroStats: [
      { value: '5000 nit', label: 'parlaklık' },
      { value: '28°', label: 'görüş açısı' },
      { value: '4K', label: 'video' },
      { value: '<100 g', label: 'hafiflik' },
    ],
    highlights: [
      { title: 'Şeffaf waveguide optik', text: 'AR içerikleri görüş alanına bindirilirken saha görünürlüğü korunur.' },
      { title: 'Yüksek parlaklık', text: '5000 nit ekran parlaklığı, yoğun ışıklı endüstriyel ortamlarda okunabilirliği artırır.' },
      { title: 'Profesyonel kamera', text: '12.8 MP kamera, 4K video, optik görüntü sabitleme ve barkod okuma iş akışlarını destekler.' },
      { title: 'Kurumsal montaj seçenekleri', text: 'Çerçeve, güvenlik gözlüğü, baret, kafa bandı ve kulaklık montajlarıyla sahaya uyarlanır.' },
    ],
    useCases: [
      { title: 'Montaj talimatları', text: 'Operatör adım adım talimatları ve kalite kontrol uyarılarını gerçek iş alanı üzerinde takip eder.' },
      { title: 'Karmaşık bakım', text: 'Uzmanlar sahadaki görüntüyü canlı izler, işaretleme ve yönlendirmelerle müdahaleyi hızlandırır.' },
      { title: 'Endüstriyel eğitim', text: 'Yeni personel, gerçek iş akışı üzerinde görsel yönlendirme ve kayıt altına alınmış prosedürlerle eğitilir.' },
    ],
    specGroups: [
      {
        title: 'Optik',
        specs: [
          { label: 'Ekran', value: 'Şeffaf waveguide DLP' },
          { label: 'Çözünürlük', value: 'WVGA 854 x 480' },
          { label: 'Görüş alanı', value: '28 derece çapraz' },
          { label: 'Parlaklık', value: '5000 nit' },
        ],
      },
      {
        title: 'Sistem',
        specs: [
          { label: 'İşlemci', value: 'Qualcomm XR1, 8 çekirdek 2.52 GHz' },
          { label: 'Bellek', value: '6 GB LPDDR4 RAM' },
          { label: 'Depolama', value: '64 GB dahili flash' },
          { label: 'MDM', value: 'Çoklu iş ortağı desteği' },
        ],
      },
      {
        title: 'Kamera ve bağlantı',
        specs: [
          { label: 'Kamera', value: '12.8 MP fotoğraf, 4K/30 video, PDAF, OIS' },
          { label: 'Bağlantı', value: 'Wi-Fi 5, Bluetooth 5.0, USB-C, GPS/GLONASS' },
          { label: 'Pil', value: '750 mAh IP67 pil veya 3350 mAh güç bankası seçenekleri' },
          { label: 'Çalışma süresi', value: 'Pil seçimine bağlı olarak 2-12 saat' },
        ],
      },
    ],
    packageNotes: [
      { title: 'Longevity Serisi', text: 'M4000 akıllı gözlük, IP67 USB-C pil, şarj/görüntüleyici kablosu, koruyucu gözlük, renkli lens aksesuarı, hızlı başlangıç kılavuzu ve sağlam kılıf içerir.' },
      { title: 'Extended Serisi', text: 'Uzun süreli kullanım için 3350 mAh USB-C güç bankasıyla yapılandırılabilir.' },
    ],
    certifications: ['IP67', 'IEC 60601', '1 m düşme testi', 'Sol/sağ göz desteği'],
  },
  {
    slug: 'vuzix-lx1',
    name: 'Vuzix LX1',
    shortName: 'LX1',
    schemaType: 'Product',
    route: '/urunler/akilli-gozluk/vuzix-lx1/',
    badge: 'Yeni Nesil Depo Gözlüğü',
    category: 'Depo, lojistik ve tam vardiya operasyon',
    positioning: 'Depo operasyonları için yeni nesil, tam vardiya akıllı gözlük.',
    headline: 'Depo ekipleri için tam vardiya eller serbest çalışma.',
    shortDesc: 'Vuzix LX1; 7000 mAh çıkarılabilir pil, Android 15, Wi-Fi 6E, yüksek parlaklıklı OLED ekran ve kemik iletimi mikrofonuyla depo ve lojistik operasyonları için tasarlanmıştır.',
    description: 'LX1, modern depo ve lojistik ekiplerinin voice picking, vision picking, barkod doğrulama ve uzaktan destek ihtiyaçları için geliştirilen yeni nesil Vuzix modelidir. 7000 mAh pil, -20 derece çalışma aralığı, Wi-Fi 6E ve Android 15 altyapısıyla tek vardiya boyunca stabil kullanım hedefler.',
    image: '/images/vuzix/lx1.png',
    gallery: ['/images/vuzix/lx1.png', '/images/vuzix/lx1-detail.jpg', '/images/vuzix/vuzix_Lx1_manken.webp'],
    heroStats: [
      { value: '7000 mAh', label: 'pil' },
      { value: '10 saat', label: 'çalışma' },
      { value: 'Wi-Fi 6E', label: 'bağlantı' },
      { value: 'Android 15', label: 'işletim sistemi' },
    ],
    highlights: [
      { title: 'Tam vardiya pil', text: '7000 mAh çıkarılabilir pil, tek şarjla uzun vardiya kullanımını hedefler.' },
      { title: 'Depo için tasarım', text: 'Baş bandı, hızlı çıkarma montajı ve soğuk ortam derecesiyle lojistik sahasına odaklanır.' },
      { title: 'Ses ve görüntü birlikte', text: 'Voice picking akışlarını görsel doğrulama, pick listesi ve barkod onayıyla tamamlar.' },
      { title: 'Güncel platform', text: 'Qualcomm QCS4490, 6 GB LPDDR5 RAM, 128 GB depolama, Android 15 ve Wi-Fi 6E ile gelir.' },
    ],
    useCases: [
      { title: 'Pick & pack', text: 'Operatör toplama listesini göz hizasında görür, lokasyon ve barkod doğrulamalarını eller serbest yapar.' },
      { title: 'Soğuk hava deposu', text: '-20 derece çalışma aralığı, dondurucu ve soğuk zincir operasyonlarında kullanım alanı açar.' },
      { title: 'Sevkiyat doğrulama', text: 'Kamera, barkod ve görüntülü kayıt kabiliyetleriyle sevkiyat kontrol adımları dijitalleşir.' },
    ],
    specGroups: [
      {
        title: 'Sistem',
        specs: [
          { label: 'İşlemci', value: 'Qualcomm QCS4490, 8 çekirdek 2.4/2.0 GHz' },
          { label: 'Bellek', value: '6 GB LPDDR5 RAM' },
          { label: 'Depolama', value: '128 GB dahili flash' },
          { label: 'İşletim sistemi', value: 'Android 15' },
        ],
      },
      {
        title: 'Görüntü, ses ve kamera',
        specs: [
          { label: 'Ekran', value: 'Yüksek çözünürlüklü OLED' },
          { label: 'Parlaklık', value: '2000 nit üzeri' },
          { label: 'Kontrast', value: '10.000:1 üzeri' },
          { label: 'Kamera', value: '12 MP fotoğraf, 1080p/60 video, otomatik odak' },
          { label: 'Ses', value: '100 dB hoparlör, üçlü mikrofon, kemik iletimi mikrofon' },
        ],
      },
      {
        title: 'Depo dayanımı',
        specs: [
          { label: 'Pil', value: 'Çıkarılabilir 7000 mAh pil' },
          { label: 'Bağlantı', value: 'Bluetooth, Wi-Fi 6E, NFC tap-to-pair' },
          { label: 'Çalışma sıcaklığı', value: '-20 derece ile 45 derece arası' },
          { label: 'Güvenlik', value: 'Secure Boot ve Verified Boot' },
        ],
      },
    ],
    packageNotes: [
      { title: 'Standart paket', text: 'LX1 akıllı gözlük, 7000 mAh pil, kolay çıkarılabilir baş bandı montaj sistemi, kullanım kılavuzu ve montaj kılavuzu içerir.' },
      { title: 'Operasyon aksesuarları', text: 'Çoklu pil şarj istasyonu ve şapka montajı gibi aksesuarlarla vardiya operasyonlarına göre yapılandırılabilir.' },
    ],
    certifications: ['FCC', 'CE', '-20 derece çalışma', 'MIL-STD-810H depolama testi'],
  },
];

export const vuzixComparisonRows = [
  { label: 'İdeal kullanım', values: ['Saha servis ve sağlık', 'Üretim AR ve montaj', 'Depo ve lojistik'] },
  { label: 'Ekran yaklaşımı', values: ['Monoküler OLED', 'Şeffaf waveguide AR', 'Monoküler OLED'] },
  { label: 'Kamera', values: ['13 MP, 1080p/60', '12.8 MP, 4K/30 OIS', '12 MP, 1080p/60'] },
  { label: 'Pil yaklaşımı', values: ['Harici, sıcak değiştirilebilir', '750 mAh veya güç bankası', '7000 mAh tam vardiya'] },
  { label: 'Bağlantı', values: ['Wi-Fi 5, Bluetooth 5.0', 'Wi-Fi 5, Bluetooth 5.0', 'Wi-Fi 6E, Bluetooth, NFC'] },
  { label: 'Öne çıkan fark', values: ['Çok yönlü saha kullanımı', 'Gerçek AR katmanı', 'Depo için yeni nesil platform'] },
];

export function getVuzixModel(slug: string) {
  return vuzixSmartGlasses.find(model => model.slug === slug);
}
