import { build } from 'esbuild';
import { mkdir, writeFile } from 'node:fs/promises';

const SITE_BASE = 'https://www.altis.com.tr';
const TODAY = new Date().toISOString().slice(0, 10);

// AIKOS tarafinda data/AltisWeb/ klasorune yazilir
const OUT_DIR = new URL('../../AIKOS/data/AltisWeb/', import.meta.url);

function absUrl(path) {
  if (!path) return null;
  if (path.startsWith('http')) return path;
  return `${SITE_BASE}${path}`;
}

function flattenSections(sections) {
  if (!sections || !sections.length) return '';
  return sections
    .map((s) => {
      const items = Object.entries(s.items || {})
        .map(([k, v]) => `${k}: ${v}`)
        .join(', ');
      return `${s.name} -> ${items}`;
    })
    .join(' | ');
}

function flattenSpecGroups(groups) {
  if (!groups || !groups.length) return '';
  return groups
    .map((g) => {
      const specs = (g.specs || []).map((s) => `${s.label}: ${s.value}`).join(', ');
      return `${g.title} -> ${specs}`;
    })
    .join(' | ');
}

function joinParts(parts) {
  return parts.filter(Boolean).join('. ');
}

// Tum kategoriler icin ortak AIKOS urun semasi
function toAikosProduct({
  idSlug,
  productFamily,
  brand,
  sku,
  model,
  title,
  subtitle,
  shortDescription,
  description,
  customerSummary,
  embeddingText,
  category,
  applications,
  industries,
  keywords,
  onMetal,
  formFactor,
  extraMetadata,
  productUrl,
  imageUrl,
  datasheetUrl,
  galleryUrls,
  sourceName,
}) {
  return {
    id: `altisweb-${idSlug}`,
    source_id: idSlug,
    entity_type: 'product',
    product_family: productFamily,
    record_type: 'catalog_item',
    status: 'active',
    language: 'tr',
    brand,
    supplier: brand,
    manufacturer: brand,
    sku: sku || model || idSlug,
    mpn: null,
    model: model || idSlug,
    title,
    subtitle: subtitle || '',
    short_description: shortDescription || '',
    description: description || shortDescription || '',
    customer_summary: customerSummary || shortDescription || '',
    embedding_text: embeddingText,
    store: {
      is_published: true,
      currency: 'TRY',
      price: null,
      price_text: 'Fiyat icin iletisime gecin',
      pricing_model: 'quote_or_tiered',
      pricing_tiers: [],
      quantity_available: null,
      quantity_unit: 'pcs',
      min_order_quantity: null,
      stock_status: 'inquiry',
      allow_backorder: null,
      lead_time_days: null,
      last_price_update: null,
    },
    metadata: {
      category: category || null,
      industry: industries || [],
      applications: applications || [],
      applications_list: applications || [],
      surface_type: onMetal === undefined ? [] : [onMetal ? 'metal' : 'non-metal'],
      environment_type: [],
      mounting_type: [],
      reader_type: ['fixed', 'handheld'],
      compatibility: [],
      region: [],
      keywords: keywords || [],
      customer_keywords: applications || [],
      frequency: null,
      frequency_band: null,
      protocol: null,
      chip: null,
      on_metal: Boolean(onMetal),
      washable: null,
      printable: null,
      flexible: null,
      rugged: null,
      battery_required: false,
      form_factor: formFactor || null,
      dimensions_length_mm: null,
      dimensions_width_mm: null,
      dimensions_height_mm: null,
      size_text: null,
      weight_g: null,
      fixed_read_range_m: null,
      fixed_read_range_text: null,
      handheld_read_range_m: null,
      handheld_read_range_text: null,
      operating_temp_min_c: null,
      operating_temp_max_c: null,
      operating_temp_text: null,
      storage_temp_min_c: null,
      storage_temp_max_c: null,
      ip_rating: null,
      material: null,
      saas_type: null,
      deployment_type: null,
      integrations: [],
      license_model: null,
      project_fit_score: null,
      lead_capture_recommended: false,
      ...extraMetadata,
    },
    media: {
      product_url: absUrl(productUrl),
      image_url: absUrl(imageUrl),
      datasheet_url: absUrl(datasheetUrl),
      video_url: null,
      brochure_url: null,
      gallery: (galleryUrls || []).map(absUrl),
    },
    relations: {
      compatible_with: [],
      alternative_to: [],
      accessories: [],
      required_with: [],
    },
    company_context: {
      solution_area: ['rfid'],
      business_unit: 'store',
      requires_discovery_call: false,
    },
    source: {
      source_type: 'website_export',
      source_name: sourceName,
      source_url: absUrl(productUrl),
      last_updated: TODAY,
    },
  };
}

// ── RFID Etiketler ──────────────────────────────────────────────────────────

function mapRfidTag(tag) {
  const embeddingText = joinParts([
    `Baslik: ${tag.title}`,
    `Tip: rfid_tag`,
    tag.shortDesc && `Kisa aciklama: ${tag.shortDesc}`,
    tag.description !== tag.shortDesc && tag.description && `Aciklama: ${tag.description}`,
    tag.applications?.length && `Uygulamalar: ${tag.applications.join(', ')}`,
    tag.industries?.length && `Sektorler: ${tag.industries.join(', ')}`,
    tag.tags?.length && `Etiketler: ${tag.tags.join(', ')}`,
    tag.frequency && `Frekans: ${tag.frequency}`,
    tag.frequencyBand && `Frekans bandi: ${tag.frequencyBand}`,
    tag.protocol && `Protokol: ${tag.protocol}`,
    tag.chip && `Cip: ${tag.chip}`,
    `Metal ustu kullanim: ${tag.onMetal ? 'Evet' : 'Hayir'}`,
    tag.formFactor && `Form faktoru: ${tag.formFactor}`,
    tag.sizeText && `Boyut: ${tag.sizeText}`,
    tag.material && `Malzeme: ${tag.material}`,
    tag.fixedReadRange && `Sabit okuyucu okuma mesafesi: ${tag.fixedReadRange}`,
    tag.handheldReadRange && `El terminali okuma mesafesi: ${tag.handheldReadRange}`,
    tag.operatingTemp && `Calisma sicakligi: ${tag.operatingTemp}`,
    tag.ipRating && `IP derecesi: ${tag.ipRating}`,
    flattenSections(tag.sections) && `Teknik ozellikler: ${flattenSections(tag.sections)}`,
  ]);

  return toAikosProduct({
    idSlug: tag.slug,
    productFamily: 'rfid_tag',
    brand: tag.brand,
    sku: tag.sku,
    model: tag.model,
    title: tag.title,
    subtitle: tag.subtitle,
    shortDescription: tag.shortDesc,
    description: tag.description,
    customerSummary: tag.customerSummary,
    embeddingText,
    category: tag.formFactor || tag.subtitle || 'RFID Etiket',
    applications: tag.applications,
    industries: tag.industries,
    keywords: tag.tags,
    onMetal: Boolean(tag.onMetal),
    formFactor: tag.formFactor,
    extraMetadata: {
      compatibility: tag.frequency ? [tag.frequency.toLowerCase()] : [],
      frequency: tag.frequency || null,
      frequency_band: tag.frequencyBand || null,
      protocol: tag.protocol || null,
      chip: tag.chip || null,
      size_text: tag.sizeText || null,
      fixed_read_range_text: tag.fixedReadRange || null,
      handheld_read_range_text: tag.handheldReadRange || null,
      operating_temp_text: tag.operatingTemp || null,
      ip_rating: tag.ipRating || null,
      material: tag.material || null,
      spec_sections: tag.sections || [],
    },
    productUrl: tag.productUrl,
    imageUrl: tag.image,
    datasheetUrl: tag.datasheet,
    galleryUrls: tag.gallery,
    sourceName: 'altis-web-site/src/data/rfid-etiketler.ts',
  });
}

// ── El Terminalleri ─────────────────────────────────────────────────────────

function mapHandheld(p) {
  const embeddingText = joinParts([
    `Baslik: ${p.title}`,
    `Tip: rfid_handheld_terminal`,
    p.shortDesc && `Kisa aciklama: ${p.shortDesc}`,
    p.description !== p.shortDesc && p.description && `Aciklama: ${p.description}`,
    p.tags?.length && `Etiketler: ${p.tags.join(', ')}`,
  ]);

  return toAikosProduct({
    idSlug: p.slug,
    productFamily: 'rfid_handheld_terminal',
    brand: p.brand,
    model: p.slug,
    title: p.title,
    shortDescription: p.shortDesc,
    description: p.description,
    embeddingText,
    category: 'El Terminali',
    keywords: p.tags,
    extraMetadata: {},
    productUrl: p.storeUrl,
    imageUrl: p.image,
    datasheetUrl: p.datasheet,
    galleryUrls: p.gallery,
    sourceName: 'altis-web-site/src/data/el-terminalleri.ts',
  });
}

// ── RFID Yazicilar ──────────────────────────────────────────────────────────

function mapPrinter(p) {
  const embeddingText = joinParts([
    `Baslik: ${p.title}`,
    `Tip: rfid_printer`,
    p.shortDesc && `Kisa aciklama: ${p.shortDesc}`,
    p.description !== p.shortDesc && p.description && `Aciklama: ${p.description}`,
    p.type && `Yazici tipi: ${p.type}`,
    p.tags?.length && `Etiketler: ${p.tags.join(', ')}`,
  ]);

  return toAikosProduct({
    idSlug: p.slug,
    productFamily: 'rfid_printer',
    brand: p.brand,
    model: p.slug,
    title: p.title,
    shortDescription: p.shortDesc,
    description: p.description,
    embeddingText,
    category: p.type ? `RFID Yazici (${p.type})` : 'RFID Yazici',
    keywords: p.tags,
    extraMetadata: { printer_type: p.type || null },
    productUrl: p.storeUrl,
    imageUrl: p.image,
    datasheetUrl: p.datasheet,
    galleryUrls: p.gallery,
    sourceName: 'altis-web-site/src/data/rfid-yazicilar.ts',
  });
}

// ── RFID Okuyucular ─────────────────────────────────────────────────────────

function mapReader(r) {
  const embeddingText = joinParts([
    `Baslik: ${r.title}`,
    `Tip: rfid_reader`,
    r.isAltisOwn && `Altis'in kendi urunu`,
    r.shortDesc && `Kisa aciklama: ${r.shortDesc}`,
    r.description !== r.shortDesc && r.description && `Aciklama: ${r.description}`,
    r.ports && r.ports !== '—' && `Port sayisi: ${r.ports}`,
    r.connectivity?.length && `Baglanti: ${r.connectivity.join(', ')}`,
    r.tags?.length && `Etiketler: ${r.tags.join(', ')}`,
  ]);

  return toAikosProduct({
    idSlug: r.slug,
    productFamily: 'rfid_reader',
    brand: r.brand,
    model: r.slug,
    title: r.title,
    shortDescription: r.shortDesc,
    description: r.description,
    embeddingText,
    category: 'RFID Okuyucu',
    keywords: r.tags,
    extraMetadata: {
      is_altis_own: Boolean(r.isAltisOwn),
      ports: r.ports || null,
      connectivity: r.connectivity || [],
    },
    productUrl: r.storeUrl,
    imageUrl: r.image,
    datasheetUrl: r.datasheet,
    galleryUrls: r.gallery,
    sourceName: 'altis-web-site/src/data/rfid-okuyucular.ts',
  });
}

// ── RFID Perakende ──────────────────────────────────────────────────────────

function mapRetail(p) {
  const embeddingText = joinParts([
    `Baslik: ${p.title}`,
    `Tip: rfid_retail_system`,
    p.isAltisOwn && `Altis'in kendi urunu`,
    p.category && `Kategori: ${p.category}`,
    p.shortDesc && `Kisa aciklama: ${p.shortDesc}`,
    p.featureHighlights?.length && `Ozellikler: ${p.featureHighlights.join('; ')}`,
    p.connectivity?.length && `Baglanti: ${p.connectivity.join(', ')}`,
    p.tags?.length && `Etiketler: ${p.tags.join(', ')}`,
    flattenSections(p.sections) && `Teknik ozellikler: ${flattenSections(p.sections)}`,
  ]);

  return toAikosProduct({
    idSlug: p.slug,
    productFamily: 'rfid_retail_system',
    brand: p.brand,
    sku: p.sku,
    model: p.slug,
    title: p.title,
    shortDescription: p.shortDesc,
    description: p.shortDesc,
    embeddingText,
    category: p.category || 'RFID Perakende',
    keywords: p.tags,
    extraMetadata: {
      is_altis_own: Boolean(p.isAltisOwn),
      connectivity: p.connectivity || [],
      feature_highlights: p.featureHighlights || [],
      spec_sections: p.sections || [],
    },
    productUrl: `${SITE_BASE}/urunler/perakende/${p.slug}/`,
    imageUrl: p.image,
    datasheetUrl: p.datasheet,
    galleryUrls: p.gallery,
    sourceName: 'altis-web-site/src/data/rfid-perakende.ts',
  });
}

// ── Vuzix Akilli Gozluk ─────────────────────────────────────────────────────

function mapVuzix(g) {
  const heroStatsText = (g.heroStats || []).map((s) => `${s.value} ${s.label}`).join(', ');
  const highlightsText = (g.highlights || []).map((h) => `${h.title}: ${h.text}`).join(' | ');
  const useCasesText = (g.useCases || []).map((u) => `${u.title}: ${u.text}`).join(' | ');
  const packageText = (g.packageNotes || []).map((n) => `${n.title}: ${n.text}`).join(' | ');

  const embeddingText = joinParts([
    `Baslik: ${g.name}`,
    `Tip: smart_glasses`,
    g.badge && `Rozet: ${g.badge}`,
    g.category && `Kategori: ${g.category}`,
    g.positioning && `Konumlandirma: ${g.positioning}`,
    g.headline && `Baslik metni: ${g.headline}`,
    g.shortDesc && `Kisa aciklama: ${g.shortDesc}`,
    g.description !== g.shortDesc && g.description && `Aciklama: ${g.description}`,
    heroStatsText && `Temel istatistikler: ${heroStatsText}`,
    highlightsText && `Ozellikler: ${highlightsText}`,
    useCasesText && `Kullanim senaryolari: ${useCasesText}`,
    flattenSpecGroups(g.specGroups) && `Teknik ozellikler: ${flattenSpecGroups(g.specGroups)}`,
    packageText && `Paket icerigi: ${packageText}`,
    g.certifications?.length && `Sertifikalar: ${g.certifications.join(', ')}`,
  ]);

  return toAikosProduct({
    idSlug: g.slug,
    productFamily: 'smart_glasses',
    brand: 'Vuzix',
    model: g.shortName || g.slug,
    title: g.name,
    subtitle: g.badge,
    shortDescription: g.shortDesc,
    description: g.description,
    customerSummary: g.positioning,
    embeddingText,
    category: g.category || 'Akilli Gozluk',
    keywords: g.certifications,
    extraMetadata: {
      hero_stats: g.heroStats || [],
      highlights: g.highlights || [],
      use_cases: g.useCases || [],
      spec_groups: g.specGroups || [],
      package_notes: g.packageNotes || [],
      certifications: g.certifications || [],
    },
    productUrl: g.route,
    imageUrl: g.image,
    galleryUrls: g.gallery,
    sourceName: 'altis-web-site/src/data/vuzix-smart-glasses.ts',
  });
}

// ── Main ────────────────────────────────────────────────────────────────────

const CATEGORIES = [
  { name: 'rfid-etiketler', entry: 'src/data/rfid-etiketler.ts', key: 'rfidTags', mapper: mapRfidTag },
  { name: 'el-terminalleri', entry: 'src/data/el-terminalleri.ts', key: 'products', mapper: mapHandheld },
  { name: 'rfid-yazicilar', entry: 'src/data/rfid-yazicilar.ts', key: 'printers', mapper: mapPrinter },
  { name: 'rfid-okuyucular', entry: 'src/data/rfid-okuyucular.ts', key: 'readers', mapper: mapReader },
  { name: 'rfid-perakende', entry: 'src/data/rfid-perakende.ts', key: 'retailProducts', mapper: mapRetail },
  { name: 'vuzix-smart-glasses', entry: 'src/data/vuzix-smart-glasses.ts', key: 'vuzixSmartGlasses', mapper: mapVuzix },
];

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  let total = 0;

  for (const { name, entry, key, mapper } of CATEGORIES) {
    const outFile = `/tmp/${name}.mjs`;
    await build({
      entryPoints: [entry],
      outfile: outFile,
      bundle: true,
      format: 'esm',
      platform: 'node',
      external: ['node:fs', 'node:path'],
    });
    const mod = await import(outFile + `?t=${Date.now()}`);
    const items = mod[key].map(mapper);

    const outPath = new URL(`${name}.json`, OUT_DIR);
    await writeFile(outPath, JSON.stringify(items, null, 2), 'utf8');
    console.log(`${name}: ${items.length} urun -> ${outPath.pathname}`);
    total += items.length;
  }

  console.log(`Toplam: ${total} urun`);
}

main();
