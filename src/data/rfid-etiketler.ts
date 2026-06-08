export type RfidTag = {
  slug: string;
  title: string;
  brand: string;
  model: string;
  sku: string;
  subtitle: string;
  shortDesc: string;
  description: string;
  customerSummary: string;
  image: string;
  gallery?: string[];
  datasheet: string;
  productUrl: string;
  frequency: string;
  frequencyBand: string;
  protocol: string;
  chip: string;
  surface: string;
  onMetal: boolean;
  formFactor: string;
  sizeText: string;
  material: string;
  fixedReadRange: string;
  handheldReadRange: string;
  operatingTemp: string;
  ipRating: string;
  applications: string[];
  industries: string[];
  tags: string[];
  sections?: {
    name: string;
    items: Record<string, string>;
  }[];
};

const allRfidTags: any[] = [
  {
    "id": "alien-aln-9654",
    "alt_code": "ALN-9654",
    "display_brand": "Alien Technology",
    "category": "UHF RFID Inlay",
    "product_group": "RFID Label / Inlay",
    "title_en": "Alien ALN-9654 G Inlay",
    "summary_en": "Ultra-high-performance general-purpose UHF RFID inlay powered by Alien Higgs-3 IC, optimized for high-dielectric materials such as windshields, reusable plastic pallets and containers. World Tag compliant for worldwide operation.",
    "feature_highlights_en": [
      "Alien Higgs-3 IC with 800-bit nonvolatile memory",
      "96–480-bit extensible EPC memory bank",
      "512-bit User Memory for distributed data applications",
      "Pre-programmed 64-bit Unique TID for authentication and serialization",
      "Password-protected read/write with 32-bit Access and Kill passwords",
      "World Tag compliant – worldwide UHF operation 840–960 MHz",
      "Available in dry (unslit/slit) and white wet inlay roll formats"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "ISO/IEC 18000-6C, EPCglobal Class 1 Gen 2",
          "Integrated Circuit": "Alien Higgs-3",
          "Operating Frequency": "840–960 MHz",
          "EPC Size": "96–480 Bits",
          "User Memory": "512 Bits",
          "TID": "32 Bits",
          "Unique TID": "64 Bits",
          "Access Password": "32 Bits",
          "Kill Password": "32 Bits",
          "EPCglobal Certificate": "950110126000001084"
        }
      },
      {
        "name": "DRY INLAY DIMENSIONS",
        "items": {
          "Antenna Width": "3.66\" [93.0 mm]",
          "Antenna Length": "0.748\" [19.0 mm]",
          "Web Width (-FR Unslit)": "4.173\" [106.0 mm]",
          "Web Width (-FSR Slit)": "3.799\" [96.5 mm]",
          "Web Pitch": "1.0\" [25.4 mm]",
          "Inlays per Roll": "12,500 Nominal",
          "Maximum Roll OD": "< 12\" [304.8 mm]",
          "Core ID": "6\" [152.4 mm]",
          "Core Material": "Fiberboard",
          "Interleaf Material": "Paper",
          "Interleaf Width": "1.5\" [38.1 mm]"
        }
      },
      {
        "name": "WET INLAY DIMENSIONS",
        "items": {
          "Inlay Width": "3.799\" [96.5 mm]",
          "Inlay Length": "0.913\" [23.2 mm]",
          "Web Width": "3.925\" [99.7 mm]",
          "Web Pitch": "1.0\" [25.4 mm]",
          "Inlays per Roll": "12,500 Nominal",
          "Maximum Roll OD": "< 16\" [406.4 mm]",
          "Printable Surface": "White TT Printable White Film",
          "Overlay Adhesive": "General Purpose Permanent",
          "Inlay Adhesive": "General Purpose Permanent",
          "Adhesive Application Temp": "> +25°F [-4°C]",
          "Adhesive Service Temp": "-40°F to +200°F [-40°C to +93.3°C]",
          "Release Liner": "40# SCK"
        }
      },
      {
        "name": "ENVIRONMENTAL",
        "items": {
          "Shelf Life (Dry)": "5 years at +25°C @ 40% RH",
          "Shelf Life (Wet)": "2 years at +25°C @ 40% RH",
          "Recommended Storage": "+25°C @ 40% RH",
          "Storage Limits": "-25°C to +50°C, 20–90% RH non-condensing",
          "Operating Limits": "-40°C to +70°C, 20–90% RH non-condensing",
          "Bend Diameter": "> 1.97\" [50 mm]",
          "Write Cycles": "100,000 @ 25°C",
          "RoHS": "2002/95/EC, 2005/618/EC, 2011/65/EU Compliant",
          "REACH": "1907/2006/EC Compliant",
          "ESD Limit (HBM / CDM)": "5.0 kV / 1.5 kV"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/02/alien-aln-9654-g-600x400.webp",
    "hero_image_variant": "large",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "ALN-9654 G Inlay Datasheet – Alien Technology",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2021/11/alien-aln-9654-g-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/alien-aln-9654-uhf-rfid-etiketi/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "alien-aln-9654-4x2",
    "alt_code": "ALN-9654 4x2\"",
    "display_brand": "Alien Technology",
    "category": "UHF RFID Label",
    "product_group": "RFID Label / Inlay",
    "title_en": "Alien ALN-9654 G Label 4x2\"",
    "summary_en": "High-performance UHF RFID label in 4x2\" TT-printable white wet format, embedding the Alien Higgs-3 inlay. Designed for general-purpose non-metal surface asset tracking and identification.",
    "feature_highlights_en": [
      "4x2\" (103 x 52 mm) white thermal-transfer printable label format",
      "Alien Higgs-3 IC – 840–960 MHz worldwide UHF operation",
      "512-bit User Memory and 96–480-bit extensible EPC",
      "General-purpose permanent adhesive for non-metal surfaces",
      "Pre-programmed 64-bit Unique TID for serialization and authentication",
      "Password-protected read/write with 32-bit Access and Kill passwords",
      "World Tag compliant – consistent operation across all world regions"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "ISO/IEC 18000-6C, EPCglobal Class 1 Gen 2",
          "Integrated Circuit": "Alien Higgs-3",
          "Operating Frequency": "840–960 MHz",
          "EPC Size": "96–480 Bits",
          "User Memory": "512 Bits",
          "TID": "32 Bits",
          "Unique TID": "64 Bits",
          "Access Password": "32 Bits",
          "Kill Password": "32 Bits"
        }
      },
      {
        "name": "LABEL DIMENSIONS",
        "items": {
          "Label Size": "4x2\" (103 x 52 mm)",
          "Inlay Width": "3.799\" [96.5 mm]",
          "Inlay Length": "0.913\" [23.2 mm]",
          "Web Width": "3.925\" [99.7 mm]",
          "Web Pitch": "1.0\" [25.4 mm]",
          "Inlays per Roll": "12,500 Nominal",
          "Maximum Roll OD": "< 16\" [406.4 mm]",
          "Printable Surface": "White TT Printable White Film",
          "Overlay Adhesive": "General Purpose Permanent",
          "Inlay Adhesive": "General Purpose Permanent",
          "Adhesive Application Temp": "> +25°F [-4°C]",
          "Adhesive Service Temp": "-40°F to +200°F [-40°C to +93.3°C]",
          "Release Liner": "40# SCK"
        }
      },
      {
        "name": "ENVIRONMENTAL",
        "items": {
          "Shelf Life": "2 years at +25°C @ 40% RH",
          "Recommended Storage": "+25°C @ 40% RH",
          "Storage Limits": "-25°C to +50°C, 20–90% RH non-condensing",
          "Operating Limits": "-40°C to +70°C, 20–90% RH non-condensing",
          "Write Cycles": "100,000 @ 25°C",
          "RoHS": "2002/95/EC, 2005/618/EC, 2011/65/EU Compliant",
          "REACH": "1907/2006/EC Compliant",
          "ESD Limit (HBM / CDM)": "5.0 kV / 1.5 kV"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2021/11/alien-aln9654-rfid-tag-103x52-p-600x400.webp",
    "hero_image_variant": "large",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "ALN-9654 G Inlay Datasheet – Alien Technology",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2021/11/alien-aln-9654-g-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/alien-aln-9654-uhf-rfid-etiketi-4x2/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "altis-pvc-rti-label",
    "alt_code": "Crafty Bold",
    "display_brand": "Altis",
    "category": "UHF RFID PVC Label",
    "product_group": "RFID Label / Inlay",
    "title_en": "Altis Crafty Bold RFID PVC Label",
    "summary_en": "107 × 31 mm UHF RFID PVC label optimized for RTI, PLP and KLT plastic transport assets. Provides read range up to 7 m, is fully GRAI, GTIN and SSCC encoding compliant, and supports customizable dual-sided full-color printing.",
    "feature_highlights_en": [
      "Optimized for reusable plastic layer pads (PLP), returnable transport items (RTI) and small load carriers (KLT)",
      "GRAI, GTIN and SSCC memory block encoding compliant",
      "Read range up to 7 m – operates on large portals and wide dock gates",
      "Mountable on plastic surfaces or concealable inside assets",
      "Chip options: Impinj R6, M730/750, Alien H9, UCode U8/U9",
      "Customized dual-sided full color artwork and visual printing",
      "CE, REACH and RoHS certified"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "EPC Gen2 Class 1 (ISO 18000-6C)",
          "Encoding Compliance": "GRAI, GTIN, SSCC",
          "Operating Frequency": "UHF 868 MHz (EU)",
          "Chip Options": "Impinj R6 / M730/750 / Alien H9 / UCode U8/U9",
          "Read Range": "Up to 7 m (fixed portal)",
          "Surface": "Non-metal / Plastic optimized"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Label Size": "107 × 31 mm (custom sizes available on demand)",
          "Material": "High-durability PVC",
          "Form Factor": "Adhesive label",
          "Mounting": "Surface adhesive or hidden inside asset",
          "Printing": "Dual-sided full color – logo, text, barcode, numbering",
          "Certifications": "CE, REACH, RoHS"
        }
      },
      {
        "name": "APPLICATIONS",
        "items": {
          "Primary Use": "Returnable Transport Item (RTI) tracking",
          "Asset Types": "Plastic layer pads (PLP), small load carriers (KLT), containers",
          "Industries": "Automotive, white goods, logistics, supply chain",
          "Portal Compatibility": "Standard ramps and wide dock gates (up to 7 m read range)"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/02/altis-crafty-bold-rfid-etiketi-scaled-1-600x400.webp",
    "hero_image_variant": "large",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Altis Crafty Bold RFID Label Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2022/02/rfid-pcv-depozitolu-tasima-etiketi-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/rfid-pvc-depozitolu-tasima-etiketi/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "altis-it-asset-sample-pack",
    "_note": "DATASHEET MISSING – awaiting correct datasheet URL from user before generating PDF"
  },
  {
    "id": "avery-ad-141-u9",
    "alt_code": "AD-141 U9",
    "display_brand": "Avery Dennison",
    "category": "UHF RFID Inlay",
    "product_group": "RFID Label / Inlay",
    "title_en": "Avery Dennison AD-141 U9 UHF RFID Inlay",
    "summary_en": "Ultra-slim 4 × 28 mm Gen2 UHF RFID inlay powered by NXP UCODE 9 with Direct Chip Attach technology. Designed for beauty & personal care and pharmaceutical applications with excellent broadband performance across 860–930 MHz.",
    "feature_highlights_en": [
      "NXP UCODE 9 chip with Direct Chip Attach technology",
      "96-bit EPC memory and 96-bit factory-locked TID",
      "Ultra-slim 4 × 28 mm antenna for space-constrained retail items",
      "Excellent broadband performance 860–930 MHz (global design)",
      "Available in dry inlay and wet inlay formats",
      "ARC accredited quality – ISO 9001:2015 and ISO 14001:2015 certified",
      "RoHS compliant – EU Directive 2011/65/EU and 2015/863"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Chip": "NXP UCODE 9",
          "IC Attachment Technology": "Direct Chip Attach",
          "Standard": "ISO/IEC 18000-63 Type C",
          "Frequency Band": "UHF 860–960 MHz",
          "EPC Memory": "96-bit",
          "TID Memory": "96-bit / 48-bit unique serial number",
          "On-Metal": "Non metal",
          "Certificate": "ARC (RFID Lab, Auburn University)",
          "RoHS": "EU Directive 2011/65/EU and 2015/863 Compliant"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Antenna Dimensions": "4 × 28 mm / 0.157 × 1.102 in",
          "Dry Inlay (3008211 / IL-604154)": "PET substrate — 15,000 pcs/reel — pitch 36 mm",
          "Wet Inlay (IL-611143)": "6 × 30 mm die-cut — White PET 50 face sheet — 8,000 pcs/reel",
          "Web Width": "40 mm / 1.575 in",
          "Core Size": "76 mm / 3 in",
          "Operating Temperature": "-40°C to +85°C"
        }
      }
    ],
    "image": "https://rfid.averydennison.com/content/dam/rfid/en/products/rfid-products/thumbnails/AD-141-U9-antenna-340x340.png",
    "hero_image_variant": "large",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "AD-141 U9 Product Data Sheet – Avery Dennison",
      "source_url": "https://www.averydennison.com/content/dam/rfid/en/products/rfid-products/data-sheets/datasheet-AD-141-U9.pdf",
      "product_url": "https://rfid.averydennison.com/content/rfid/na/en/home/product-finder/ad-141.html",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "avery-ad-163u8",
    "alt_code": "AD-163u8",
    "display_brand": "Avery Dennison",
    "category": "UHF RFID Inlay",
    "product_group": "RFID Label / Inlay",
    "title_en": "Avery Dennison AD-163u8 UHF RFID Inlay",
    "summary_en": "Slender 60 × 4 mm Gen2 UHF RFID inlay with NXP UCODE 8 featuring Self Adjust technology. Achieves up to 7 m read distance on high-dielectric materials including glass, plastics and near-liquid. Ideal for beauty & personal care and pharmaceutical tagging.",
    "feature_highlights_en": [
      "NXP UCODE 8 with Self Adjust feature for challenging environments",
      "128-bit EPC memory and 48-bit unique serialized TID number",
      "Up to 7 m read distance on glass, plastics and near-liquid",
      "Slender 60 × 4 mm antenna – ideal for small retail items",
      "Available in dry inlay, wet inlay and label / sticker formats",
      "ARC accredited quality by RFID Lab at Auburn University",
      "RoHS compliant – EU Directive 2011/65/EU and 2015/863"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Chip": "NXP UCODE 8",
          "Standard": "ISO/IEC 18000-63 Type C",
          "Frequency Band": "UHF 860–960 MHz",
          "EPC Memory": "128-bit",
          "TID Memory": "96-bit / 48-bit unique serial number",
          "On-Metal": "Non metal",
          "Certificate": "ARC (RFID Lab, Auburn University)",
          "RoHS": "EU Directive 2011/65/EU and 2015/863 Compliant"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Antenna Dimensions": "60 × 4 mm / 2.36 × 0.16 in",
          "Dry Inlay (RF601236)": "PET substrate — 20,000 pcs/reel — pitch 15.88 mm",
          "Wet Inlay (RF601235)": "64 × 6 mm die-cut — PET substrate — 20,000 pcs/reel",
          "Label / Sticker (RF100479)": "64 × 6 mm — White BOPP face sheet — 7,008 pcs/reel",
          "Web Width": "70.4 mm / 3 in",
          "Core Size": "76 mm / 3 in",
          "Operating Temperature": "-40°C to +85°C"
        }
      }
    ],
    "image": "https://rfid.averydennison.com/content/dam/rfid/en/products/rfid-products/thumbnails/AD-163-antenna-340x340.png",
    "hero_image_variant": "large",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "AD-163u8 Product Data Sheet – Avery Dennison",
      "source_url": "https://rfid.averydennison.com/content/dam/rfid/en/products/rfid-products/data-sheets/datasheet-AD-163u8.pdf",
      "product_url": "https://rfid.averydennison.com/content/rfid/na/en/home/product-finder/ad-163u8.html",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "avery-ad-164-u9",
    "alt_code": "AD-164 U9",
    "display_brand": "Avery Dennison",
    "category": "UHF RFID Inlay",
    "product_group": "RFID Label / Inlay",
    "title_en": "Avery Dennison AD-164 U9 UHF RFID Inlay",
    "summary_en": "Slender 60 × 4 mm Gen2 UHF RFID inlay powered by NXP UCODE 9 with Direct Chip Attach. Achieves up to 7 m read distance on high-dielectric materials. Upgraded from UCODE 8 with improved read/write sensitivity and faster encoding speed.",
    "feature_highlights_en": [
      "NXP UCODE 9 with Direct Chip Attach and Self Adjust feature",
      "96-bit EPC memory – improved sensitivity vs. UCODE 8",
      "Up to 7 m read distance on glass, plastics and near-liquid",
      "Slender 60 × 4 mm antenna – die-cut 64 × 6 mm",
      "Available in dry inlay, wet inlay and label formats",
      "ARC accredited – ISO 9001:2015 and ISO 14001:2015 certified",
      "RoHS compliant – EU Directive 2011/65/EU and 2015/863"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Chip": "NXP UCODE 9",
          "IC Attachment Technology": "Direct Chip Attach",
          "Standard": "ISO/IEC 18000-63 Type C",
          "Frequency Band": "UHF 860–960 MHz",
          "EPC Memory": "96-bit",
          "TID Memory": "96-bit / 48-bit unique serial number",
          "On-Metal": "Non metal",
          "Certificate": "ARC (RFID Lab, Auburn University)",
          "RoHS": "EU Directive 2011/65/EU and 2015/863 Compliant"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Antenna Dimensions": "60 × 4 mm / 2.362 × 0.157 in",
          "Die-Cut Dimension": "64 × 6 mm / 2.520 × 0.236 in",
          "Dry Inlay (3008611 / IL-604464)": "38um PET — 20,000 pcs/reel — MAX OD 15.5\"",
          "Wet Inlay (3008613 / IL-604466)": "38um PET — 10,000 pcs/reel — MAX OD 13\"",
          "Label (3008612 / IL-604465)": "38um PET + BW0053 face sheet — 5,000 pcs/reel — MAX OD 8\"",
          "Web Width": "70.35–70.36 mm / 2.770 in",
          "Core Size": "76 mm / 3 in",
          "Operating Temperature": "-40°C to +85°C"
        }
      }
    ],
    "image": "https://rfid.averydennison.com/content/dam/rfid/en/products/rfid-products/thumbnails/AD-164-U9-antenna-340x340.png",
    "hero_image_variant": "large",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "AD-164 U9 Product Data Sheet – Avery Dennison",
      "source_url": "https://www.averydennison.com/content/dam/rfid/en/products/rfid-products/data-sheets/datasheet-AD-164-U9.pdf",
      "product_url": "https://rfid.averydennison.com/content/rfid/na/en/home/product-finder/ad-164.html",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "avery-ad-183-u9",
    "alt_code": "AD-183 U9",
    "display_brand": "Avery Dennison",
    "category": "UHF RFID Inlay",
    "product_group": "RFID Label / Inlay",
    "title_en": "Avery Dennison AD-183 U9 UHF RFID Inlay",
    "summary_en": "Compact round Ø 26 mm Gen2 UHF RFID inlay with NXP UCODE 9. Achieves class-leading read distances on a wide array of surfaces. Ideal for apparel, cosmetics and personal care product tagging.",
    "feature_highlights_en": [
      "NXP UCODE 9 chip with 96-bit EPC memory and unique serialized TID",
      "Compact round Ø 26 mm form factor for small cosmetic items",
      "Class-leading read distances across diverse surface materials",
      "Excellent broadband performance 860–930 MHz global design",
      "Available in dry inlay, wet inlay and paper label formats",
      "RoHS and REACH compliant",
      "ARC accredited quality by RFID Lab at Auburn University"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Chip": "NXP UCODE 9",
          "Standard": "ISO/IEC 18000-63 Type C",
          "Frequency Band": "UHF 860–960 MHz",
          "EPC Memory": "96-bit",
          "TID Memory": "96-bit / 48-bit unique serial number",
          "On-Metal": "Non metal",
          "Certificate": "ARC (RFID Lab, Auburn University)",
          "RoHS": "EU Directive 2011/65/EU and Directive (EU) 2015/863",
          "REACH": "Regulation (EC) No. 1907/2006"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Antenna Dimensions": "Ø 26 mm / 1.02 in",
          "Die-Cut Dimension": "29.25 mm / 1.152 in",
          "Dry Inlay (RF602211 / IL-605984)": "Opaque PET + 1.2 mil PET overlaminate — 9,958 pcs/reel",
          "Wet Inlay (RF602212 / IL-605630)": "Opaque PET — 3,341 pcs/reel",
          "Label Paper (RF100993 / IL-606134)": "Paper + TT2C face stock — 2,366 pcs/reel",
          "Label PET (RF100994 / IL-612867)": "Opaque PET + 1.2 mil overlaminate + TC PET — 2,500 pcs/reel",
          "Web Width": "36 mm / 1.4 in",
          "Operating Temperature": "-40°C to +85°C"
        }
      }
    ],
    "image": "https://rfid.averydennison.com/content/dam/rfid/en/products/rfid-products/thumbnails/AD-183-U9-antenna-340x340.png",
    "hero_image_variant": "large",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "AD-183 U9 Product Data Sheet – Avery Dennison",
      "source_url": "https://www.averydennison.com/content/dam/rfid/en/products/rfid-products/data-sheets/datasheet-AD-183-U9.pdf",
      "product_url": "https://rfid.averydennison.com/content/rfid/na/en/home/product-finder/ad-183u9.html",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "avery-ad-192-m730",
    "alt_code": "AD-192 M730",
    "display_brand": "Avery Dennison",
    "category": "UHF RFID Inlay",
    "product_group": "RFID Label / Inlay",
    "title_en": "Avery Dennison AD-192 M730 UHF RFID Inlay",
    "summary_en": "Tiny 22 × 12.5 mm Gen2 UHF RFID inlay with Impinj M730 Strap Attach chip featuring autotune technology. Specially designed for jewelry, cosmetics and small item-level tagging with 100% performance testing.",
    "feature_highlights_en": [
      "Impinj M730 chip with autotune for peak efficiency in changing environments",
      "128-bit EPC memory and 96-bit TID with 48-bit unique serial number",
      "Tiny 22 × 12.5 mm form factor for small hang-tags and cosmetic items",
      "100% performance tested",
      "Available in dry inlay, wet inlay and label delivery formats",
      "RoHS and REACH compliant",
      "ISO 9001:2015 and ISO 14001:2015 certified"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Chip": "Impinj M730",
          "IC Attachment Technology": "Strap Attach",
          "Standard": "ISO 18000-63, EPC Class 1 Gen 2",
          "Frequency Band": "UHF 860–960 MHz",
          "EPC Memory": "128-bit",
          "TID Memory": "96-bit / 48-bit unique serial number",
          "On-Metal": "Non metal",
          "RoHS": "EU Directive 2011/65/EC and Directive (EU) 2015/863",
          "REACH": "Regulation (EC) No 1907/2006"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Antenna Dimensions": "22 × 12.5 mm / 0.9 × 0.5 in",
          "Dry Inlay (RF602397 / IL-607934)": "40# Paper substrate — pitch 38.1 mm — web 36.83 mm",
          "Wet Inlay (RF602398 / IL-605202)": "24 × 15.5 mm die-cut — 40# Paper — pitch 38.1 mm",
          "Label (RF101097 / IL-605854)": "31.75 × 15.5 mm — TT2C Bright White — pitch 38.1 mm",
          "Core Size": "76 mm / 3 in",
          "Operating Temperature": "-40°C to +85°C"
        }
      }
    ],
    "image": "https://rfid.averydennison.com/content/dam/rfid/en/products/rfid-products/thumbnails/AD-192-M730-antenna-340x340.png",
    "hero_image_variant": "large",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "AD-192 M730 Product Data Sheet – Avery Dennison",
      "source_url": "https://www.averydennison.com/content/dam/rfid/en/products/rfid-products/data-sheets/datasheet-AD-192-M730.pdf",
      "product_url": "https://rfid.averydennison.com/content/rfid/na/en/home/product-finder/ad-192.html",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "avery-ad-229r6-p",
    "alt_code": "AD-229r6-P",
    "display_brand": "Avery Dennison",
    "category": "UHF RFID Inlay",
    "product_group": "RFID Label / Inlay",
    "title_en": "Avery Dennison AD-229r6-P UHF RFID Inlay",
    "summary_en": "High-performing 95 × 8.15 mm Gen2 UHF RFID inlay with Impinj Monza R6-P chip. Offers multiple EPC and user memory options, kill and access password protection. Suitable for supply chain, RTUs, apparel and brand protection.",
    "feature_highlights_en": [
      "Impinj Monza R6-P chip – multiple EPC and user memory options (128/96-bit EPC, 32/64-bit user)",
      "Kill and access password protection for user privacy",
      "96-bit TID with 48-bit unique factory-encoded serial number",
      "Long 95 × 8.15 mm antenna for high read performance",
      "Available in dry inlay and wet inlay formats",
      "ARC accredited quality by RFID Lab at Auburn University",
      "RoHS compliant – EU Directive 2011/65/EU and 2015/863"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Chip": "Impinj Monza R6-P",
          "Standard": "ISO/IEC 18000-63 Type C",
          "Frequency Band": "UHF 860–960 MHz",
          "EPC Memory Options": "128-bit or 96-bit",
          "User Memory Options": "32-bit or 64-bit",
          "TID Memory": "96-bit / 48-bit unique serial number",
          "Access Password": "Supported",
          "Kill Password": "Supported",
          "On-Metal": "Non metal",
          "Certificate": "ARC (RFID Lab, Auburn University)",
          "RoHS": "EU Directive 2011/65/EU and 2015/863 Compliant"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Antenna Dimensions": "95 × 8.15 mm / 3.74 × 0.32 in",
          "Dry Inlay (RF600776)": "Opaque PET — 20,000 pcs/reel — pitch 15.88 mm — core 152 mm / 6 in",
          "Wet Inlay (RF600773)": "98.7 × 11.2 mm die-cut — Opaque PET — 20,000 pcs/reel — core 76 mm / 3 in",
          "Web Width (Dry)": "98 mm / 3.875 in",
          "Web Width (Wet)": "105 mm / 4.125 in",
          "Operating Temperature": "-40°C to +85°C"
        }
      }
    ],
    "image": "https://rfid.averydennison.com/content/dam/rfid/en/products/rfid-products/thumbnails/AD-229-antenna-340x340.png",
    "hero_image_variant": "large",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "AD-229r6 / AD-229r6-P Product Data Sheet – Avery Dennison",
      "source_url": "https://static.ticimax.cloud/54431/uploads/dosyalar/avery-dennison-ad-229.pdf",
      "product_url": "https://rfid.averydennison.com/content/rfid/na/en/home/product-finder/ad-229.html",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "avery-dennison-ad-238u8",
    "alt_code": "AD-238u8",
    "display_brand": "Avery Dennison",
    "category": "UHF RFID Inlay",
    "product_group": "RFID Label / Inlay",
    "title_en": "Avery Dennison AD-238u8 UHF RFID Inlay",
    "summary_en": "High-performance 70 × 14.5 mm Gen2 UHF RFID inlay powered by NXP UCODE 8 chip, suitable for supply chain, inventory & logistics, apparel and home essentials. ARC-certified quality manufactured to the highest industry standards.",
    "feature_highlights_en": [
      "NXP UCODE 8 chip with 128-bit EPC memory and 96-bit factory-locked TID",
      "48-bit unique serial number factory-encoded into TID",
      "Compact 70 × 14.5 mm footprint for space-constrained applications",
      "Available in dry inlay, wet inlay and pressure sensitive label formats",
      "ARC accredited quality by RFID Lab at Auburn University",
      "Operating temperature -40°C to +85°C",
      "RoHS compliant – EU Directive 2011/65/EU and 2015/863"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Chip": "NXP UCODE 8",
          "Standard": "ISO/IEC 18000-63 Type C",
          "Frequency Band": "UHF 860–960 MHz",
          "EPC Memory": "128-bit",
          "TID Memory": "96-bit / 48-bit unique serial number",
          "On-Metal": "Non metal",
          "Certificate": "ARC (RFID Lab, Auburn University)",
          "RoHS": "EU Directive 2011/65/EU and 2015/863 Compliant"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Antenna Dimensions": "70 × 14.5 mm / 2.76 × 0.57 in",
          "Dry Inlay (RF600958)": "PET substrate — 40,000 pcs/reel — pitch 22.23 mm",
          "Wet Inlay (RF600959)": "73 × 17 mm die-cut — PET substrate — 10,000 pcs/reel",
          "Label / Sticker (RF100413)": "76 × 20 mm — 40# Paper + TT2C Bright White — 3,154 pcs/reel",
          "Core Size (Dry)": "152 mm / 6 in",
          "Core Size (Wet / Label)": "76 mm / 3 in",
          "Operating Temperature": "-40°C to +85°C"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/avery-dennison-ad238-rfid-etiketi-1-600x400.webp",
    "hero_image_variant": "large",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "AD-238u8 Product Data Sheet – Avery Dennison",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/averydennison-ad238-rfid-etiketi-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/avery-dennison-ad-238-u8-uhf-rfid-etiketi/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "avery-ad-239-m730",
    "alt_code": "AD-239 M730",
    "display_brand": "Avery Dennison",
    "category": "UHF RFID Inlay",
    "product_group": "RFID Label / Inlay",
    "title_en": "Avery Dennison AD-239 M730 UHF RFID Inlay",
    "summary_en": "High-performance 70 × 14.5 mm Gen2 UHF RFID inlay with Impinj M730 Strap Attach chip. Suitable for supply chain, inventory & logistics, apparel and home essentials with ARC-certified quality.",
    "feature_highlights_en": [
      "Impinj M730 chip with Strap Attach technology",
      "128-bit EPC memory and 96-bit factory-locked TID with 48-bit unique serial number",
      "70 × 14.5 mm footprint – maximum performance on given form factor",
      "Available in dry inlay, wet inlay and label formats",
      "ARC certified (multiple Spec compliance including N, Q, G, F, L, J, I, K, W1–W6)",
      "RoHS compliant – EU Directive 2011/65/EC and Directive (EU) 2015/863"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Chip": "Impinj M730",
          "IC Attachment Technology": "Strap Attach",
          "Standard": "ISO 18000-63, EPC Class 1 Gen 2",
          "Frequency Band": "UHF 860–960 MHz",
          "EPC Memory": "128-bit",
          "TID Memory": "96-bit / 48-bit unique serial number",
          "On-Metal": "Non metal",
          "Certificate": "ARC (Spec N, Q, G, F, L, J, I, K, W1–W6)",
          "RoHS": "EU Directive 2011/65/EC and Directive (EU) 2015/863"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Antenna Dimensions": "70 × 14.5 mm / 2.76 × 0.57 in",
          "Dry Inlay (RF602386 / IL-605262)": "40# Paper substrate — pitch 38.1 mm — web 82.5 mm",
          "Wet Inlay (RF602387 / IL-605608)": "76 × 20 mm die-cut — 40# Paper — MAX OD 13\"",
          "Label (RF101088 / IL-606128)": "76 × 20 mm — TT2C Bright White — MAX OD 8\"",
          "Core Size": "76.2 mm / 3 in",
          "Operating Temperature": "-40°C to +85°C"
        }
      }
    ],
    "image": "https://rfid.averydennison.com/content/dam/rfid/en/products/rfid-products/thumbnails/AD-239-M730-antenna-340x340.png",
    "hero_image_variant": "large",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "AD-239 M730 Product Data Sheet – Avery Dennison",
      "source_url": "https://www.averydennison.com/content/dam/rfid/en/products/rfid-products/data-sheets/datasheet-AD-239-M730.pdf",
      "product_url": "https://rfid.averydennison.com/content/rfid/na/en/home/product-finder/ad-239.html",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "avery-ad-23x-u9",
    "alt_code": "AD-23x U9",
    "display_brand": "Avery Dennison",
    "category": "UHF RFID Inlay",
    "product_group": "RFID Label / Inlay",
    "title_en": "Avery Dennison AD-23x U9 UHF RFID Inlay",
    "summary_en": "High-performance 70 × 14.5 mm Gen2 UHF RFID inlay with NXP UCODE 9. Delivers maximum performance for supply chain, inventory & logistics, apparel and brand protection applications with comprehensive ARC certification.",
    "feature_highlights_en": [
      "NXP UCODE 9 chip with 96-bit EPC memory and 96-bit factory-locked TID",
      "48-bit unique serial number factory-encoded into TID",
      "70 × 14.5 mm footprint – die-cut 76 × 20 mm",
      "Available in dry inlay, wet inlay and pressure sensitive label",
      "Comprehensive ARC certification (Spec N, Q, M, G, F, L, J, I, K, W1–W6)",
      "RoHS compliant – EU Directive 2011/65/EU and 2015/863"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Chip": "NXP UCODE 9",
          "Standard": "ISO/IEC 18000-63 Type C",
          "Frequency Band": "UHF 860–960 MHz",
          "EPC Memory": "96-bit",
          "TID Memory": "96-bit / 48-bit unique serial number",
          "On-Metal": "Non metal",
          "Certificate": "ARC (Spec N, Q, M, G, F, L, J, I, K, W1–W6)",
          "RoHS": "EU Directive 2011/65/EU and 2015/863 Compliant"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Antenna Dimensions": "70 × 14.5 mm / 2.76 × 0.57 in",
          "Dry Inlay (RF602327 / IL-607121)": "40# Paper substrate — 12,390 pcs/reel (13\" max OD)",
          "Wet Inlay (RF602328 / IL-605267)": "76 × 20 mm die-cut — 40# Paper — 11,377 pcs/reel (13\" max OD)",
          "Label (RF101055 / IL-605489)": "76 × 20 mm — TT2C Bright White — 3,154 pcs/reel (8\" max OD)",
          "Web Width": "82.5 mm / 3.25 in",
          "Core Size": "76 mm / 3 in",
          "Operating Temperature": "-40°C to +85°C"
        }
      }
    ],
    "image": "https://rfid.averydennison.com/content/dam/rfid/en/products/rfid-products/thumbnails/AD-23xu9-antenna-340x340.png",
    "hero_image_variant": "large",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "AD-23x U9 Product Data Sheet – Avery Dennison",
      "source_url": "https://rfid.averydennison.com/content/dam/rfid/en/products/rfid-products/data-sheets/datasheet-AD-23xu9.pdf",
      "product_url": "https://rfid.averydennison.com/content/rfid/na/en/home/product-finder/ad-23x.html",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "avery-ad-23x-u9-pure-95",
    "alt_code": "AD-23x U9 Pure 95",
    "display_brand": "Avery Dennison",
    "category": "UHF RFID Inlay",
    "product_group": "RFID Label / Inlay",
    "title_en": "Avery Dennison AD-23x U9 Pure 95™ UHF RFID Inlay",
    "summary_en": "Sustainable 70 × 14.5 mm Gen2 UHF RFID inlay with NXP UCODE 9, featuring up to 95% plastic-free construction with pure aluminum antenna. Delivers 70–90% carbon footprint savings vs. traditional etching and is certified recyclable.",
    "feature_highlights_en": [
      "Up to 95% plastic-free construction – pure aluminum antenna replaces PET laminate",
      "70–90% carbon footprint savings vs. traditional etching methods",
      "EU and US paper recyclability certified (PTS-RH021:97/2012, SBS-E)",
      "NXP UCODE 9 with 96-bit EPC memory and 96-bit TID",
      "Available in wet inlay and pressure sensitive label formats",
      "RoHS and REACH compliant",
      "ARC accredited quality by RFID Lab at Auburn University"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Chip": "NXP UCODE 9",
          "IC Attachment Technology": "Strap Attach",
          "Standard": "ISO/IEC 18000-63 Type C",
          "Frequency Band": "UHF 860–960 MHz",
          "EPC Memory": "96-bit",
          "TID Memory": "96-bit / 48-bit unique serial number",
          "On-Metal": "Non metal",
          "RoHS": "EU Directive 2011/65/EU and 2015/863 Compliant",
          "REACH": "Regulation (EC) No. 1907/2006"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Antenna Dimensions": "70 × 14.5 mm / 2.756 × 0.571 in",
          "Die-Cut Dimension": "76 × 20 mm",
          "Wet Inlay (IL-607854)": "40# Paper substrate — 5,767 pcs/reel — MAX OD 13\"",
          "Label (IL-612802)": "40# Paper + TT2C face sheet — 6,300 pcs/reel — MAX OD 9\"",
          "Web Width": "82.55 mm / 3.25 in",
          "Core Size": "76.2 mm / 3 in",
          "Operating Temperature": "-40°C to +85°C"
        }
      },
      {
        "name": "SUSTAINABILITY",
        "items": {
          "Plastic-Free Content": "Up to 95% plastic-free (wet inlay and label formats)",
          "Antenna Material": "Pure aluminum (replaces PET aluminum laminate)",
          "Carbon Footprint Savings": "Typically 70–90% vs. traditional etching methods",
          "EU Recyclability": "PTS-RH 021:97/2012 certified",
          "US Recyclability": "SBS-E Part I (repulpability) and Part II (recyclability)"
        }
      }
    ],
    "image": "https://rfid.averydennison.com/content/dam/rfid/en/products/rfid-products/thumbnails/AD-23X-U9-pure-antenna-340x340%EF%B8%8F.png",
    "hero_image_variant": "large",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "AD-23x U9 Pure 95™ Product Data Sheet – Avery Dennison",
      "source_url": "https://www.averydennison.com/content/dam/rfid/en/products/rfid-products/data-sheets/datasheet-AD-23x-U9-Pure-95.pdf",
      "product_url": "https://rfid.averydennison.com/content/rfid/na/en/home/product-finder/ad-23x-pure-95.html",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "avery-ad-23x-u9-slim",
    "alt_code": "AD-23x U9 Slim",
    "display_brand": "Avery Dennison",
    "category": "UHF RFID Inlay",
    "product_group": "RFID Label / Inlay",
    "title_en": "Avery Dennison AD-23x U9 Slim UHF RFID Inlay",
    "summary_en": "Slim-profile 70 × 10.5 mm Gen2 UHF RFID inlay with NXP UCODE 9 and Strap Attach. Optimized for supply chain, apparel and brand protection with a narrower footprint than the standard AD-23x for tighter label applications.",
    "feature_highlights_en": [
      "NXP UCODE 9 with Strap Attach – 96-bit EPC and 96-bit TID",
      "Slimmer 70 × 10.5 mm antenna vs. standard AD-23x (narrower profile)",
      "Die-cut 73 × 13.5 mm for wet inlay and label formats",
      "Available in wet inlay and pressure sensitive label formats",
      "ARC Specification Guide certified",
      "RoHS compliant – EU Directive 2011/65/EU and 2015/863"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Chip": "NXP UCODE 9",
          "IC Attachment Technology": "Strap Attach",
          "Standard": "ISO/IEC 18000-63 Type C",
          "Frequency Band": "UHF 860–960 MHz",
          "EPC Memory": "96-bit",
          "TID Memory": "96-bit / 48-bit unique serial number",
          "On-Metal": "Non metal",
          "Certificate": "ARC Specification Guide",
          "RoHS": "EU Directive 2011/65/EU and 2015/863 Compliant"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Antenna Dimensions": "70 × 10.5 mm / 2.756 × 0.413 in",
          "Die-Cut Dimension": "73 × 13.5 mm / 2.874 × 0.532 in",
          "Wet Inlay (IL-611239)": "40# Paper — pitch 15.88 mm — MAX OD 13\"",
          "Label (IL-611588)": "40# Paper + TT2C Bright White — pitch 19.05 mm — MAX OD 8\"",
          "Web Width": "82.55 mm / 3.25 in",
          "Core Size": "76 mm / 3 in",
          "Operating Temperature": "-40°C to +85°C"
        }
      }
    ],
    "image": "https://rfid.averydennison.com/content/dam/rfid/en/products/rfid-products/thumbnails/AD-23xu9-slim-antenna-340x340.png",
    "hero_image_variant": "large",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "AD-23x U9 Slim Product Data Sheet – Avery Dennison",
      "source_url": "https://www.averydennison.com/content/dam/rfid/en/products/rfid-products/data-sheets/datasheet-AD-23x-U9-Slim.pdf",
      "product_url": "https://rfid.averydennison.com/content/rfid/na/en/home/product-finder/ad-23x-slim.html",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "avery-dennison-ad-324u8",
    "alt_code": "AD-324u8 FCC",
    "display_brand": "Avery Dennison",
    "category": "UHF RFID Inlay",
    "product_group": "RFID Label / Inlay",
    "title_en": "Avery Dennison AD-324u8 FCC UHF RFID Inlay",
    "summary_en": "Versatile 41.4 × 16 mm Gen2 UHF RFID inlay optimized for FCC frequency band (902–928 MHz) with NXP UCODE 8. Ideal for supply chain, inventory & logistics, apparel and pharmaceutical & healthcare applications.",
    "feature_highlights_en": [
      "NXP UCODE 8 chip with 128-bit EPC memory and 96-bit TID",
      "FCC optimized (902–928 MHz); ETSI-specific design also available",
      "Supports Perma-LOCK and Kill Command per EPC global V.2.0.1",
      "48-bit unique serial number factory-encoded into TID",
      "Compact 41.4 × 16 mm footprint – die-cut 44 × 19 mm",
      "Available in dry inlay, wet inlay and paper label formats",
      "ARC accredited quality – RoHS EU Directive 2011/65/EU and 2015/863 Compliant"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Chip": "NXP UCODE 8",
          "Standard": "ISO/IEC 18000-63 Type C",
          "Frequency Band": "UHF 860–960 MHz (FCC optimized: 902–928 MHz)",
          "EPC Memory": "128-bit",
          "TID Memory": "96-bit / 48-bit unique serial number",
          "On-Metal": "Non metal",
          "Certificate": "ARC (RFID Lab, Auburn University)",
          "RoHS": "EU Directive 2011/65/EU and 2015/863 Compliant"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Antenna Dimensions": "41 × 16 mm / 1.63 × 0.63 in",
          "Die-cut Dimension": "44 × 19 mm / 1.75 × 0.75 in",
          "Dry Inlay (RF601478)": "38um Paper — 20,000 pcs/reel",
          "Wet Inlay (RF601480)": "38um Paper — 20,000 pcs/reel",
          "Label / Sticker (RF100606)": "5 pt Paper substrate — 5,966 pcs/reel",
          "Web Width": "50.8 mm / 2 in",
          "Core Size": "76 mm / 3 in",
          "Operating Temperature": "-40°C to +85°C"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/avery-dennison-ad324-rfid-etiketi-1.webp",
    "hero_image_variant": "large",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "AD-324u8 FCC Product Data Sheet – Avery Dennison",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/averydennison-ad324u8-fcc-rfid-etiketi-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/avery-dennison-ad-324u8-uhf-rfid-etiketi/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "avery-dennison-ad-385u8",
    "alt_code": "AD-385u8",
    "display_brand": "Avery Dennison",
    "category": "UHF RFID Inlay",
    "product_group": "RFID Label / Inlay",
    "title_en": "Avery Dennison AD-385u8 UHF RFID Inlay",
    "summary_en": "High-performing 50 × 30 mm Gen2 UHF RFID inlay combining performance and versatility with NXP UCODE 8 chip. Available in wide-edge and narrow-edge leading formats for supply chain, logistics and apparel.",
    "feature_highlights_en": [
      "NXP UCODE 8 chip with 128-bit EPC memory, 32-bit access and kill passwords",
      "96-bit TID with 48-bit unique serial number factory-encoded",
      "Available in wide-edge leading (WEL) and narrow-edge leading (NEL) formats",
      "50 × 30 mm antenna – die-cut 54 × 34 mm (wet and label)",
      "Available in dry inlay, wet inlay and label / sticker delivery formats",
      "ARC accredited quality by RFID Lab at Auburn University",
      "RoHS compliant – EU Directive 2011/65/EU and 2015/863"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Chip": "NXP UCODE 8",
          "Standard": "ISO/IEC 18000-63 Type C",
          "Frequency Band": "UHF 860–960 MHz",
          "EPC Memory": "128-bit",
          "TID Memory": "96-bit (48-bit unique serial number)",
          "Access Password": "32-bit",
          "Kill Password": "32-bit",
          "On-Metal": "Non metal",
          "Certificate": "ARC (RFID Lab, Auburn University)",
          "RoHS": "EU Directive 2011/65/EU and 2015/863 Compliant"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Antenna Dimensions": "50 × 30 mm / 1.97 × 1.18 in",
          "Dry Inlay (RF601086)": "PET substrate — 15,000 pcs/reel",
          "Wet Inlay (RF601087)": "54 × 34 mm die-cut — PET substrate — 10,000 pcs/reel",
          "Label / Sticker (RF100465)": "54 × 34 mm — 38um Paper + TT2C Bright White — 2,610 pcs/reel",
          "Web Width": "54–58 mm / 2 in",
          "Core Size": "76 mm / 3 in",
          "Operating Temperature": "-40°C to +85°C"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/avery-dennison-ad385-rfid-etiketi-1-600x400.webp",
    "hero_image_variant": "large",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "AD-385u8 Product Data Sheet – Avery Dennison",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/averydennison-ad385-rfid-etiketi-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/avery-dennison-ad-385u8-uhf-rfid-etiketi/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "avery-dennison-ad-sample-pack",
    "alt_code": "AD Sample Pack",
    "display_brand": "Avery Dennison",
    "category": "UHF RFID Inlay Sample Pack",
    "product_group": "RFID Label / Inlay",
    "title_en": "Avery Dennison RFID Inlay Sample Pack",
    "summary_en": "Evaluation pack containing 10 units each of AD-238u8, AD-324u8 and AD-385u8 Gen2 UHF RFID inlays. Enables side-by-side testing of three high-performance NXP UCODE 8 inlay formats before project deployment.",
    "feature_highlights_en": [
      "10 units each of AD-238u8, AD-324u8 and AD-385u8 — 30 inlays total",
      "All powered by NXP UCODE 8 with 128-bit EPC memory",
      "Three different antenna footprints for application compatibility testing",
      "Covers supply chain, apparel, logistics and brand protection use cases",
      "Ideal for RFID project evaluation and pre-deployment testing",
      "ARC accredited quality from RFID Lab at Auburn University",
      "RoHS compliant – EU Directive 2011/65/EU and 2015/863"
    ],
    "sections": [
      {
        "name": "INCLUDED PRODUCTS",
        "items": {
          "AD-238u8 (×10)": "70 × 14.5 mm antenna — supply chain, apparel, home essentials",
          "AD-324u8 FCC (×10)": "41.4 × 16 mm antenna — logistics, healthcare, supply chain",
          "AD-385u8 (×10)": "50 × 30 mm antenna — apparel, logistics, brand protection",
          "Total Quantity": "30 inlays (10 each)"
        }
      },
      {
        "name": "SHARED RFID SPECIFICATION",
        "items": {
          "Chip": "NXP UCODE 8",
          "Standard": "ISO/IEC 18000-63 Type C",
          "Frequency Band": "UHF 860–960 MHz",
          "EPC Memory": "128-bit",
          "TID Memory": "96-bit / 48-bit unique serial number",
          "On-Metal": "Non metal",
          "Certificate": "ARC (RFID Lab, Auburn University)",
          "RoHS": "EU Directive 2011/65/EU and 2015/863 Compliant"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/02/avery-dennison-rfid-tag-sample-pack-p-scaled.webp",
    "hero_image_variant": "large",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Avery Dennison RFID Inlay Sample Pack Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2022/02/avery-dennison-rfid-tag-sample-pack-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/avery-dennison-rfid-etiket-numune-paketi/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "brady-tht-nfc-pet-25x25",
    "alt_code": "THT-NFC-25x25",
    "display_brand": "Brady",
    "category": "NFC RFID Label",
    "product_group": "RFID Label / Inlay",
    "title_en": "Brady Anti-Liquid NFC RFID Label 25×25 mm",
    "summary_en": "25×25 mm polyester NFC RFID label designed for on-metal and all-surface applications. Fully customisable including antenna, chip, label material, adhesive and print. 500 labels per roll.",
    "feature_highlights_en": [
      "NFC frequency – works on metal and all surface materials",
      "25×25 mm polyester construction – anti-liquid",
      "Up to 2 cm NFC read range",
      "144 bytes user memory",
      "500 labels per roll",
      "Operating temperature -35°C to +85°C",
      "Fully customisable: antenna, chip, material, adhesive and print"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "RFID Type": "NFC",
          "Frequency": "13.56 MHz",
          "Material (Label)": "Polyester",
          "EPC Memory": "—",
          "User Memory": "144 bytes",
          "Read Range": "Up to 2 cm",
          "On-Metal": "Yes"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Label Reference": "THT-NFC-25x25",
          "Art Number": "309086",
          "Dimensions": "25×25 mm",
          "Quantity / Roll": "500",
          "Operating Temperature": "-35°C to +85°C",
          "Markets": "General, Manufacturing, Healthcare"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/03/polyester-nfc-rfid-etiketi-l-2588-25b-600x400.webp",
    "hero_image_variant": "large",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Brady Standard RFID Labels Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2022/03/brady-rfid-label-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/brady-anti-sivi-nfc-rfid-etiketi/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "brady-tht-uhf-pet-64x6",
    "alt_code": "THT-UHF-64x6",
    "display_brand": "Brady",
    "category": "UHF RFID Label",
    "product_group": "RFID Label / Inlay",
    "title_en": "Brady Anti-Liquid UHF RFID Label 64×6 mm",
    "summary_en": "64×6 mm slim polyester UHF RFID label designed for on-metal surfaces including healthcare, beverages and industrial materials tracking. Read range up to 3 m. 500 labels per roll.",
    "feature_highlights_en": [
      "UHF frequency optimized for metal surfaces",
      "Slim 64×6 mm polyester label strip format",
      "Up to 3 m read range on metal",
      "128-bit EPC memory",
      "500 labels per roll",
      "Operating temperature -40°C to +85°C",
      "Fully customisable: antenna, chip, material, adhesive and print"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "RFID Type": "UHF",
          "Frequency": "860–960 MHz",
          "Material (Label)": "Polyester",
          "EPC Memory": "128 bits",
          "User Memory": "—",
          "Read Range": "Up to 3 m",
          "On-Metal": "Yes"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Label Reference": "THT-UHF-64x6",
          "Art Number": "309087",
          "Dimensions": "64×6 mm",
          "Quantity / Roll": "500",
          "Operating Temperature": "-40°C to +85°C",
          "Markets": "General, Manufacturing, Healthcare, Data/Telecom"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/03/polyester-uhf-rfid-etiketi-l-2588-25c.webp",
    "hero_image_variant": "large",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Brady Standard RFID Labels Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2022/03/brady-rfid-label-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/brady-anti-sivi-uhf-rfid-etiketi/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "brady-tht-df-423-33x17",
    "alt_code": "THT-UHF/NF-B423-33x17",
    "display_brand": "Brady",
    "category": "Dual Frequency RFID Label",
    "product_group": "RFID Label / Inlay",
    "title_en": "Brady B-423 Dual Frequency RFID Label 33×17 mm",
    "summary_en": "33×17 mm polyester B-423 dual-frequency (NFC + UHF) RFID label for retail, supply chain and product authentication. UHF up to 2.8 m, NFC up to 2 cm. 2048-bit user memory (UHF + HF). 500 labels per roll.",
    "feature_highlights_en": [
      "Dual frequency: NFC (13.56 MHz) + UHF (860–960 MHz) in one label",
      "480-bit EPC memory and 2048-bit user memory (UHF + HF combined)",
      "UHF read range up to 2.8 m; NFC up to 2 cm",
      "Polyester B-423 material – UV resistant",
      "500 labels per roll",
      "Operating temperature -40°C to +85°C",
      "Fully customisable: antenna, chip, material, adhesive and print"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "RFID Type": "NFC + UHF (Dual Frequency)",
          "Frequency": "13.56 MHz (NFC) + 860–960 MHz (UHF)",
          "Material (Label)": "Polyester (B-423)",
          "EPC Memory": "480 bits",
          "User Memory": "2048 bits (UHF + HF)",
          "Read Range (UHF)": "Up to 2.8 m",
          "Read Range (NFC)": "Up to 2 cm",
          "On-Metal": "No"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Label Reference": "THT-UHF/NF-B423-33x17",
          "Art Number": "310250",
          "Dimensions": "33×17 mm",
          "Quantity / Roll": "500",
          "Operating Temperature": "-40°C to +85°C",
          "Markets": "General, Laboratory, Manufacturing, Healthcare, Data/Telecom, Transport & Logistics"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/03/polyester-b-423-cift-frekansli-rfid-etiketi-l-2588-27d.webp",
    "hero_image_variant": "large",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Brady Standard RFID Labels Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2022/03/brady-rfid-label-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/brady-b-423-cift-frekansli-rfid-etiketi-33x17-mm/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "brady-tht-df-423-66x46",
    "alt_code": "THT-UHF/NF-B423-66x46",
    "display_brand": "Brady",
    "category": "Dual Frequency RFID Label",
    "product_group": "RFID Label / Inlay",
    "title_en": "Brady B-423 Dual Frequency RFID Label 66×46 mm",
    "summary_en": "66×46 mm polyester B-423 dual-frequency (NFC + UHF) RFID label for retail, industrial supply chain and product authentication. UHF up to 5 m, NFC up to 2 cm. 500 labels per roll.",
    "feature_highlights_en": [
      "Dual frequency: NFC (13.56 MHz) + UHF (860–960 MHz) in one label",
      "128-bit EPC memory; 160-bit UHF user memory + 1920-bit NFC user memory",
      "UHF read range up to 5 m; NFC up to 2 cm",
      "Larger 66×46 mm format – easier to read and scan",
      "Polyester B-423 material",
      "500 labels per roll – operating temperature -40°C to +85°C",
      "Fully customisable: antenna, chip, material, adhesive and print"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "RFID Type": "NFC + UHF (Dual Frequency)",
          "Frequency": "13.56 MHz (NFC) + 860–960 MHz (UHF)",
          "Material (Label)": "Polyester (B-423)",
          "EPC Memory": "128 bits",
          "User Memory (UHF)": "160 bits",
          "User Memory (NFC)": "1920 bits",
          "Read Range (UHF)": "Up to 5 m",
          "Read Range (NFC)": "Up to 2 cm",
          "On-Metal": "No"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Label Reference": "THT-UHF/NF-B423-66x46",
          "Art Number": "310251",
          "Dimensions": "66×46 mm",
          "Quantity / Roll": "500",
          "Operating Temperature": "-40°C to +85°C",
          "Markets": "General, Laboratory, Manufacturing, Healthcare, Data/Telecom, Transport & Logistics"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/03/polyester-b-423-cift-frekansli-rfid-etiketi-l-2588-27c-600x400.webp",
    "hero_image_variant": "large",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Brady Standard RFID Labels Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2022/03/brady-rfid-label-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/brady-b-423-cift-frekansli-rfid-etiketi-66x46-mm/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "brady-tht-nfc-423-50x40",
    "alt_code": "THT-NFC-B423-50x40",
    "display_brand": "Brady",
    "category": "NFC RFID Label",
    "product_group": "RFID Label / Inlay",
    "title_en": "Brady B-423 Temperature Sensing NFC RFID Label 50×40 mm",
    "summary_en": "50×40 mm polyester B-423 NFC RFID label with temperature sensing capability for wireless temperature monitoring in UV-exposed and challenging environments. 320 bytes user memory. 500 labels per roll.",
    "feature_highlights_en": [
      "NFC 13.56 MHz with built-in temperature sensing capability",
      "320 bytes user memory for temperature data storage",
      "Up to 5 cm NFC read range",
      "Polyester B-423 material – UV and chemical resistant",
      "500 labels per roll",
      "Operating temperature -40°C to +85°C",
      "Fully customisable: antenna, chip, material, adhesive and print"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "RFID Type": "NFC",
          "Frequency": "13.56 MHz",
          "Material (Label)": "Polyester (B-423)",
          "EPC Memory": "—",
          "User Memory": "320 bytes",
          "Read Range": "Up to 5 cm",
          "Special Feature": "Temperature sensing"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Label Reference": "THT-NFC-B423-50x40",
          "Art Number": "309084",
          "Dimensions": "50×40 mm",
          "Quantity / Roll": "500",
          "Operating Temperature": "-40°C to +85°C",
          "Markets": "General, Manufacturing"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/03/polyester-b-423-nfc-rfid-label-l-2899-7b-600x400.webp",
    "hero_image_variant": "large",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Brady Standard RFID Labels Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2022/03/brady-rfid-label-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/brady-b-423-sicaklik-sensorlu-nfc-rfid-etiketi/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "brady-tht-uhf-423-53x26",
    "alt_code": "THT-UHF-B423-53x26",
    "display_brand": "Brady",
    "category": "UHF RFID Label",
    "product_group": "RFID Label / Inlay",
    "title_en": "Brady B-423 Temperature Sensing UHF RFID Label 53×26 mm",
    "summary_en": "53×26 mm polyester B-423 UHF RFID label for product ID, medical equipment and distribution & warehousing applications. Up to 11 m read range with 128-bit EPC memory. 500 labels per roll.",
    "feature_highlights_en": [
      "UHF 860–960 MHz with up to 11 m read range",
      "128-bit EPC memory",
      "Polyester B-423 material – suitable for industrial and healthcare environments",
      "Applications: product ID, medical equipment ID, distribution & warehousing",
      "500 labels per roll",
      "Operating temperature -40°C to +85°C",
      "Fully customisable: antenna, chip, material, adhesive and print"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "RFID Type": "UHF",
          "Frequency": "860–960 MHz",
          "Material (Label)": "Polyester (B-423)",
          "EPC Memory": "128 bits",
          "User Memory": "—",
          "Read Range": "Up to 11 m",
          "On-Metal": "No"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Label Reference": "THT-UHF-B423-53x26",
          "Art Number": "307923",
          "Dimensions": "53×26 mm",
          "Quantity / Roll": "500",
          "Operating Temperature": "-40°C to +85°C",
          "Markets": "General, Manufacturing, Healthcare, Transport & Logistics"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/03/polypropylene-b-7425-uhf-rfid-label-l-2588-26b.webp",
    "hero_image_variant": "large",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Brady Standard RFID Labels Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2022/03/brady-rfid-label-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/brady-b-423-sicaklik-sensorlu-uhf-etiketi-53x26-mm/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "brady-tht-uhf-423-93x26",
    "alt_code": "THT-UHF-B423-93x26",
    "display_brand": "Brady",
    "category": "UHF RFID Label",
    "product_group": "RFID Label / Inlay",
    "title_en": "Brady B-423 Temperature Sensing UHF RFID Label 93×26 mm",
    "summary_en": "93×26 mm polyester B-423 UHF RFID label with temperature sensing for general manufacturing and warehousing. Up to 9 m read range, 128-bit EPC and 176-bit user memory. 500 labels per roll.",
    "feature_highlights_en": [
      "UHF 860–960 MHz with up to 9 m read range",
      "128-bit EPC memory + 176-bit user memory",
      "Built-in temperature sensing capability",
      "Longer 93×26 mm format for improved readability",
      "Polyester B-423 material",
      "500 labels per roll – operating temperature -40°C to +85°C",
      "Fully customisable: antenna, chip, material, adhesive and print"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "RFID Type": "UHF",
          "Frequency": "860–960 MHz",
          "Material (Label)": "Polyester (B-423)",
          "EPC Memory": "128 bits",
          "User Memory": "176 bits",
          "Read Range": "Up to 9 m",
          "Special Feature": "Temperature sensing"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Label Reference": "THT-UHF-B423-93x26",
          "Art Number": "309085",
          "Dimensions": "93×26 mm",
          "Quantity / Roll": "500",
          "Operating Temperature": "-40°C to +85°C",
          "Markets": "General, Manufacturing, Warehousing"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/03/polyester-b-423-uhf-rfid-etiketi-l-2899-8a.webp",
    "hero_image_variant": "large",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Brady Standard RFID Labels Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2022/03/brady-rfid-label-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/brady-b-423-sicaklik-sensorlu-uhf-etiketi-93x26-mm/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "brady-tht-uhf-b481-24x16",
    "alt_code": "THT-UHF-B481-24x16",
    "display_brand": "Brady",
    "category": "UHF RFID Label",
    "product_group": "RFID Label / Inlay",
    "title_en": "Brady B-481 Chemical Resistant UHF RFID Label 24×16 mm",
    "summary_en": "24×16 mm polyester B-481 UHF RFID label designed for medical laboratory slide labelling and chemical-resistant environments. Up to 2 m read range, 128-bit EPC and 512-bit user memory. 500 labels per roll.",
    "feature_highlights_en": [
      "Chemical-resistant polyester B-481 material for laboratory use",
      "UHF 860–960 MHz – up to 2 m read range",
      "128-bit EPC memory + 512-bit user memory",
      "Compact 24×16 mm format for medical slide labelling",
      "500 labels per roll",
      "Operating temperature -40°C to +85°C",
      "Fully customisable: antenna, chip, material, adhesive and print"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "RFID Type": "UHF",
          "Frequency": "860–960 MHz",
          "Material (Label)": "Polyester (B-481)",
          "EPC Memory": "128 bits",
          "User Memory": "512 bits",
          "Read Range": "Up to 2 m",
          "On-Metal": "No"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Label Reference": "THT-UHF-B481-24x16",
          "Art Number": "309083",
          "Dimensions": "24×16 mm",
          "Quantity / Roll": "500",
          "Operating Temperature": "-40°C to +85°C",
          "Markets": "Laboratory"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/03/polyester-b-481-uhf-rfid-label-l-2899-4c.webp",
    "hero_image_variant": "large",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Brady Standard RFID Labels Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2022/03/brady-rfid-label-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/brady-b-481-kimyasal-dayanikli-rfid-etiketi/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "brady-tht-uhf-7425-45x30",
    "alt_code": "THT-UHF-B7425-45x30",
    "display_brand": "Brady",
    "category": "UHF RFID Label",
    "product_group": "RFID Label / Inlay",
    "title_en": "Brady B-7425 Special Purpose UHF RFID Label 45×30 mm",
    "summary_en": "45×30 mm polypropylene B-7425 UHF RFID label for laboratory identification on conical tubes and well plates. Up to 6 m read range, 448-bit EPC and 2048-bit user memory. 500 labels per roll.",
    "feature_highlights_en": [
      "Polypropylene B-7425 material – laboratory-grade durability",
      "UHF 860–960 MHz – up to 6 m read range",
      "Large 448-bit EPC memory + 2048-bit user memory",
      "45×30 mm format for conical tubes and well plates",
      "500 labels per roll",
      "Operating temperature -40°C to +85°C",
      "Fully customisable: antenna, chip, material, adhesive and print"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "RFID Type": "UHF",
          "Frequency": "860–960 MHz",
          "Material (Label)": "Polypropylene (B-7425)",
          "EPC Memory": "448 bits",
          "User Memory": "2048 bits",
          "Read Range": "Up to 6 m",
          "On-Metal": "No"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Label Reference": "THT-UHF-B7425-45x30",
          "Art Number": "309082",
          "Dimensions": "45×30 mm",
          "Quantity / Roll": "500",
          "Operating Temperature": "-40°C to +85°C",
          "Markets": "General, Laboratory, Manufacturing, Healthcare"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/07/polypropylene-b-7425-uhf-rfid-label-l-2588.webp",
    "hero_image_variant": "large",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Brady Standard RFID Labels Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2022/03/brady-rfid-label-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/brady-b-7425-ozel-amacli-uhf-rfid-etiketi-45x30-mm/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "brady-tht-uhf-7425-53x26",
    "alt_code": "THT-UHF-B7425-53x26",
    "display_brand": "Brady",
    "category": "UHF RFID Label",
    "product_group": "RFID Label / Inlay",
    "title_en": "Brady B-7425 Special Purpose UHF RFID Label 53×26 mm",
    "summary_en": "53×26 mm polypropylene B-7425 UHF RFID label for laboratory sample identification, test tubes and pharmaceutical tracking. Up to 10 m read range with 128-bit EPC memory. 500 labels per roll.",
    "feature_highlights_en": [
      "Polypropylene B-7425 material – chemical and laboratory grade",
      "UHF 860–960 MHz – up to 10 m read range",
      "128-bit EPC memory",
      "53×26 mm format for test tubes and specimen containers",
      "500 labels per roll",
      "Operating temperature -40°C to +85°C",
      "Fully customisable: antenna, chip, material, adhesive and print"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "RFID Type": "UHF",
          "Frequency": "860–960 MHz",
          "Material (Label)": "Polypropylene (B-7425)",
          "EPC Memory": "128 bits",
          "User Memory": "—",
          "Read Range": "Up to 10 m",
          "On-Metal": "Yes (both surfaces)"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Label Reference": "THT-UHF-B7425-53x26",
          "Art Number": "309081",
          "Dimensions": "53×26 mm",
          "Quantity / Roll": "500",
          "Operating Temperature": "-40°C to +85°C",
          "Markets": "General, Laboratory, Manufacturing, Healthcare, Transport & Logistics"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/03/polypropylene-b-7425-uhf-rfid-label-l-2588-26b-600x400.webp",
    "hero_image_variant": "large",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Brady Standard RFID Labels Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2022/03/brady-rfid-label-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/brady-b-7425-ozel-amacli-rfid-etiketi-53x26-mm/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "confidex-carrier-classic",
    "display_brand": "Confidex",
    "category": "UHF RFID Label",
    "product_group": "RFID Label / Tag",
    "title_en": "Confidex Carrier Classic RFID Label",
    "summary_en": "Slim printable UHF RFID label optimized for washable plastic surfaces. Engineered for returnable transport items, plastic containers and assets with limited labeling space, delivering read ranges up to 10 m on plastic.",
    "feature_highlights_en": [
      "EPCglobal Gen2v2 – 860–960 MHz global operation",
      "Impinj Monza 4QT IC with 512-bit User Memory",
      "Read range up to 10 m on plastic (ETSI)",
      "IP68 waterproof – withstands industrial washing up to 60°C"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "EPCglobal UHF Class 1 Gen 2v2 (ISO 18000-6C)",
          "Integrated Circuit": "Impinj Monza 4QT",
          "Operating Frequency": "860–960 MHz (Global)",
          "Memory": "EPC 128 bit; User 512 bit; TID 96 bit",
          "EPC Content": "Unique number encoded",
          "Read Range (2W ERP)": "Up to 10 m on plastic (ETSI)"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Dimensions": "73 × 8 × 0.2 mm",
          "Material": "Printable white PET",
          "Adhesive": "Permanent acrylic adhesive",
          "Delivery Format": "Reel",
          "Applicable Surfaces": "Plastic, non-metal"
        }
      },
      {
        "name": "ENVIRONMENTAL RESISTANCE",
        "items": {
          "Operating Temperature": "-35°C to +85°C / -31°F to +185°F",
          "IP Classification": "IP68",
          "Washing Resistance": "Industrial laundry up to 60°C",
          "Chemical Resistance": "Salt water, motor oil, sulfuric acid (10%), NaOH (10%)",
          "Expected Lifetime": "Years in normal operating conditions"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/02/confidex-carrier-classic-rfid-etiketi-monza-4QT-600x338.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Confidex Carrier Classic Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2021/10/confidex-carrier-classic-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/confidex-carrier-classic-rfid-etiketi-monza-4qt/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "confidex-carrier-dual",
    "display_brand": "Confidex",
    "category": "Dual-Frequency RFID Label",
    "product_group": "RFID Label / Tag",
    "title_en": "Confidex Carrier Dual RFID Label",
    "summary_en": "Dual-frequency RFID label combining UHF (860–960 MHz) and HF/NFC (13.56 MHz) in a single slim tag. Ideal for supply chain management, inventory counting and NFC-based mobile interaction.",
    "feature_highlights_en": [
      "Dual UHF + HF/NFC in one tag – EM Microelectronic EM4425",
      "UHF read range up to 11 m; NFC mobile read up to 3 cm",
      "ISO/IEC 18000-63 + ISO/IEC 15693 compliant",
      "Printable white PET – 36 × 70 × 0.2 mm",
      "Enables simultaneous long-range UHF and smartphone NFC interaction",
      "Operating temperature -35°C to +85°C"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "ISO/IEC 18000-63 (UHF) + ISO/IEC 15693 (HF)",
          "Integrated Circuit": "EM Microelectronic EM4425",
          "UHF Frequency": "860–960 MHz (Global)",
          "HF/NFC Frequency": "13.56 MHz",
          "UHF Read Range": "Up to 11 m (ETSI)",
          "NFC Read Range (Mobile)": "Up to 3 cm",
          "NFC Read Range (Fixed)": "Up to 60 cm"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Dimensions": "36 × 70 × 0.2 mm",
          "Material": "Printable white PET",
          "Adhesive": "Permanent acrylic adhesive",
          "Delivery Format": "Reel",
          "Applicable Surfaces": "Non-metal"
        }
      },
      {
        "name": "ENVIRONMENTAL RESISTANCE",
        "items": {
          "Operating Temperature": "-35°C to +85°C / -31°F to +185°F",
          "Chemical Resistance": "Salt water, motor oil, sulfuric acid (10%), NaOH (10%)",
          "Expected Lifetime": "Years in normal operating conditions"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/08/confidex-carrier-dual-rfid-etiketi-p.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Confidex Carrier Dual Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2022/08/confidex-carrier-dual-rfid-etiketi-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/confidex-carrier-dual-etiket/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "confidex-carrier-hf",
    "display_brand": "Confidex",
    "category": "UHF RFID Label",
    "product_group": "RFID Label / Tag",
    "title_en": "Confidex Carrier HF RFID Label",
    "summary_en": "Washable and reusable UHF RFID label for plastic containers and returnable transport items. IP68-rated with industrial washing resistance, designed for long-term reuse in demanding supply chain environments.",
    "feature_highlights_en": [
      "EPCglobal Gen2v2 – 860–960 MHz global operation",
      "Impinj Monza 4QT / 4E IC options",
      "Read range up to 10 m on plastic (ETSI)",
      "Withstands industrial washing – reusable lifecycle",
      "IP68 waterproof, chemical resistant",
      "Slim 73 × 8 × 0.2 mm printable white PET label"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "EPCglobal UHF Class 1 Gen 2v2 (ISO 18000-6C)",
          "IC Options": "Impinj Monza 4QT / Monza 4E",
          "Operating Frequency": "860–960 MHz (Global)",
          "Memory (Monza 4QT)": "EPC 128 bit; User 512 bit; TID 96 bit",
          "Memory (Monza 4E)": "EPC 496 bit; User 128 bit; TID 96 bit",
          "Read Range (2W ERP)": "Up to 10 m on plastic (ETSI)"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Dimensions": "73 × 8 × 0.2 mm",
          "Material": "Printable white PET",
          "Adhesive": "Permanent acrylic adhesive",
          "Delivery Format": "Reel",
          "Applicable Surfaces": "Plastic, non-metal"
        }
      },
      {
        "name": "ENVIRONMENTAL RESISTANCE",
        "items": {
          "Operating Temperature": "-35°C to +85°C / -31°F to +185°F",
          "IP Classification": "IP68",
          "Washing Resistance": "Industrial laundry up to 60°C",
          "Chemical Resistance": "Salt water, motor oil, sulfuric acid (10%), NaOH (10%)",
          "Expected Lifetime": "Years in normal operating conditions"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/02/confidex-carrier-hf-rfid-etiketi-600x338.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Confidex Carrier HF Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2021/12/confidex-carrier-hf-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/confidex-carrier-hf/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "confidex-carrier-klt",
    "display_brand": "Confidex",
    "category": "HF RFID Label",
    "product_group": "RFID Label / Tag",
    "title_en": "Confidex Carrier KLT RFID Label",
    "summary_en": "HF 13.56 MHz RFID label specially designed for washable adhesive plastic surfaces, optimized for KLT small load carriers and returnable plastic containers in automotive and industrial supply chains.",
    "feature_highlights_en": [
      "HF 13.56 MHz – designed for KLT and RTI container tracking",
      "Adhesive label format for plastic surfaces",
      "Optimized for automotive industry and returnable container logistics",
      "Suitable for plastic dollies, KLT boxes and load carriers",
      "Washable and reusable design"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Operating Frequency": "13.56 MHz (HF)",
          "Applicable Surfaces": "Non-metal (plastic optimized)",
          "Primary Application": "KLT small load carriers, returnable plastic containers"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Form Factor": "Adhesive label",
          "Material": "Plastic",
          "Delivery Format": "Standard",
          "Applicable Surfaces": "Plastic, non-metal"
        }
      },
      {
        "name": "APPLICATIONS",
        "items": {
          "Primary Use": "KLT small load carrier tracking",
          "Industries": "Automotive, industrial supply chain",
          "Asset Types": "KLT boxes, plastic dollies, returnable containers"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2021/12/confidex-carrier-klt-rfid-etiketi-600x338.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Confidex Carrier KLT Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2021/12/confidex-carrier-klt-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/confidex-carrier-klt/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "confidex-carrier-pro",
    "display_brand": "Confidex",
    "category": "UHF RFID Label",
    "product_group": "RFID Label / Tag",
    "title_en": "Confidex Carrier Pro RFID Label",
    "summary_en": "High-performance washable UHF RFID label optimized for low surface energy plastics and returnable transport items (RTI). Delivers read ranges up to 12.5 m on plastic and withstands industrial wash cycles.",
    "feature_highlights_en": [
      "Optimized for low surface energy (LSE) plastics and RTI",
      "Impinj Monza 4QT / 4E IC options",
      "Read range up to 12.5 m on plastic (ETSI)",
      "IP68 waterproof – withstands industrial washing"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "EPCGlobal Class1 Gen2 ISO 18000-6C",
          "IC Options": "Impinj Monza 4QT / Monza 4E",
          "Operating Frequency": "860–960 MHz (Global)",
          "Memory (Monza 4QT)": "EPC 128 bit; User 512 bit; TID 96 bit",
          "Memory (Monza 4E)": "EPC 496 bit; User 128 bit; TID 96 bit",
          "Read Range (2W ERP)": "Up to 12.5 m on plastic (ETSI)"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Dimensions": "92 × 24 × 0.2 mm",
          "Material": "Printable white PET",
          "Adhesive": "Permanent acrylic adhesive",
          "Delivery Format": "Reel",
          "Applicable Surfaces": "Plastic, LSE plastics, non-metal"
        }
      },
      {
        "name": "ENVIRONMENTAL RESISTANCE",
        "items": {
          "Operating Temperature": "-35°C to +85°C / -31°F to +185°F",
          "IP Classification": "IP68",
          "Washing Resistance": "Industrial laundry up to 60°C",
          "Chemical Resistance": "Salt water, motor oil, sulfuric acid (10%), NaOH (10%)",
          "Expected Lifetime": "Years in normal operating conditions"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/02/confidex-carrier-pro-rfid-etiketi-monza-4QT-600x237.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Confidex Carrier Pro Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2021/10/confidex-carrier-pro-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/confidex-carrier-pro/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "confidex-carrier-tough-slim",
    "display_brand": "Confidex",
    "category": "UHF RFID Label",
    "product_group": "RFID Label / Tag",
    "title_en": "Confidex Carrier Tough Slim RFID Label",
    "summary_en": "Flexible yet durable UHF RFID label optimized for washable plastic surfaces. Engineered for assets exposed to repeated washing cycles, curved surfaces and high-temperature environments.",
    "feature_highlights_en": [
      "EPCglobal Gen2v2 – 860–960 MHz global operation",
      "Impinj Monza 4QT / 4E IC options",
      "Read range up to 10 m on plastic (ETSI)",
      "IP68 waterproof – withstands repeated industrial wash cycles",
      "Flexible construction for curved surfaces",
      "Slim 73 × 8 × 0.2 mm printable white PET format"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "EPCglobal UHF Class 1 Gen 2v2 (ISO 18000-6C)",
          "IC Options": "Impinj Monza 4QT / Monza 4E",
          "Operating Frequency": "860–960 MHz (Global)",
          "Memory (Monza 4QT)": "EPC 128 bit; User 512 bit; TID 96 bit",
          "Memory (Monza 4E)": "EPC 496 bit; User 128 bit; TID 96 bit",
          "Read Range (2W ERP)": "Up to 10 m on plastic (ETSI)"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Dimensions": "73 × 8 × 0.2 mm",
          "Material": "Printable white PET",
          "Adhesive": "Permanent acrylic adhesive",
          "Delivery Format": "Reel",
          "Applicable Surfaces": "Plastic, non-metal, curved surfaces"
        }
      },
      {
        "name": "ENVIRONMENTAL RESISTANCE",
        "items": {
          "Operating Temperature": "-35°C to +85°C / -31°F to +185°F",
          "IP Classification": "IP68",
          "Washing Resistance": "Industrial laundry – repeated wash cycles",
          "Chemical Resistance": "Salt water, motor oil, sulfuric acid (10%), NaOH (10%)",
          "Expected Lifetime": "Years in normal operating conditions"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2021/12/confidex-carrier-tough-slim-rfid-etiketi-600x338.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Confidex Carrier Tough Slim Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2021/12/confidex-carrier-tough-slim-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/confidex-carrier-tough-slim/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "confidex-casey",
    "display_brand": "Confidex",
    "category": "UHF RFID Label",
    "product_group": "RFID Label / Tag",
    "title_en": "Confidex Casey RFID Label",
    "summary_en": "Industrial-grade UHF RFID label with Impinj Monza R6-P IC, optimized for glass and plastic surfaces. Delivers exceptional read ranges up to 16 m on plastic for large-scale inventory and asset management applications.",
    "feature_highlights_en": [
      "Impinj Monza R6-P IC – 865–928 MHz global operation",
      "Industry-leading read range up to 16 m on plastic",
      "IP68 waterproof with chemical resistance",
      "92 × 24 mm printable white synthetic face label",
      "Applications: industrial use, inventory tracking, asset management"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "EPCglobal UHF Class 1 Gen 2v2 (ISO 18000-6C)",
          "Integrated Circuit": "Impinj Monza R6-P",
          "Operating Frequency": "865–928 MHz (Global)",
          "Read Range (2W ERP)": "Up to 16 m on plastic"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Dimensions": "92 × 24 × 0.2 mm",
          "Material": "Printable white synthetic face layer",
          "Adhesive": "Permanent acrylic adhesive",
          "Delivery Format": "Reel",
          "Applicable Surfaces": "Glass, plastic, non-metal"
        }
      },
      {
        "name": "ENVIRONMENTAL RESISTANCE",
        "items": {
          "Operating Temperature": "-35°C to +85°C / -31°F to +185°F",
          "IP Classification": "IP68",
          "Chemical Resistance": "Salt water, motor oil, sulfuric acid (10%), NaOH (10%)",
          "Expected Lifetime": "Years in normal operating conditions"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/02/confidex-casey-600x338.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Confidex Casey Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2021/10/confidex-casey.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/confidex-casey-rfid-etiketi-monza-r6-p/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "confidex-crosswave-classic",
    "display_brand": "Confidex",
    "category": "UHF RFID Label",
    "product_group": "RFID Label / Tag",
    "title_en": "Confidex Crosswave Classic RFID Label",
    "summary_en": "Dual-dipole UHF RFID label with Impinj M730 IC, optimized for plastic and cardboard surfaces. Provides 360-degree read angle and read ranges up to 11 m for logistics and inventory management.",
    "feature_highlights_en": [
      "Dual-dipole antenna for 360-degree read angle",
      "Impinj M730 IC – 865–928 MHz global operation",
      "Read range up to 11 m on plastic",
      "75 × 50 mm printable matt-coated paper label",
      "Applications: logistics, inventory management, supply chain"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "EPCglobal UHF Class 1 Gen 2 (ISO 18000-6C)",
          "Integrated Circuit": "Impinj M730",
          "Operating Frequency": "865–928 MHz (Global)",
          "Read Range (2W ERP)": "Up to 11 m on plastic"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Dimensions": "75 × 50 × 0.2 mm",
          "Material": "Printable matt coated paper",
          "Adhesive": "Permanent adhesive",
          "Delivery Format": "Reel",
          "Applicable Surfaces": "Plastic, cardboard, non-metal"
        }
      },
      {
        "name": "ENVIRONMENTAL RESISTANCE",
        "items": {
          "Operating Temperature": "-35°C to +70°C / -31°F to +158°F",
          "Chemical Resistance": "Salt water, motor oil exposure",
          "Expected Lifetime": "Years in normal operating conditions"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2021/12/confidex-crosswave-classic-rfid-etiketi.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Confidex Crosswave Classic Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2021/12/confidex-crosswave-classic-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/confidex-crosswave-classic/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "confidex-crosswave-neo",
    "display_brand": "Confidex",
    "category": "UHF RFID Label",
    "product_group": "RFID Label / Tag",
    "title_en": "Confidex Crosswave Neo RFID Label",
    "summary_en": "High-performance printable UHF RFID label with Impinj M730 IC and 360-degree read capability. Designed for logistics, asset tracking and washable plastic surface applications requiring excellent read range.",
    "feature_highlights_en": [
      "Impinj M730 IC – 865–928 MHz global operation",
      "360-degree read angle for omnidirectional scanning",
      "Read range up to 11 m on plastic",
      "75 × 50 mm printable matt-coated paper label",
      "Applications: logistics, asset tracking, washable plastic surfaces"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "EPCglobal UHF Class 1 Gen 2 (ISO 18000-6C)",
          "Integrated Circuit": "Impinj M730",
          "Operating Frequency": "865–928 MHz (Global)",
          "Read Range (2W ERP)": "Up to 11 m on plastic"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Dimensions": "75 × 50 × 0.2 mm",
          "Material": "Printable matt coated paper",
          "Adhesive": "Permanent adhesive",
          "Delivery Format": "Reel",
          "Applicable Surfaces": "Plastic, non-metal"
        }
      },
      {
        "name": "ENVIRONMENTAL RESISTANCE",
        "items": {
          "Operating Temperature": "-35°C to +70°C / -31°F to +158°F",
          "Chemical Resistance": "Salt water, motor oil exposure",
          "Expected Lifetime": "Years in normal operating conditions"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/02/confidex-crosswave-neo-yapistirilabilir-rfid-etiketi-monza-730-600x338.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Confidex Crosswave Neo Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2021/10/confidex-crosswave-neo-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/confidex-crosswave-neo-etiket/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "confidex-crosswave-neo-4x6",
    "display_brand": "Confidex",
    "category": "UHF RFID Label",
    "product_group": "RFID Label / Tag",
    "title_en": "Confidex Crosswave Neo 4×6\" RFID Label",
    "summary_en": "4×6 inch high-performance printable UHF RFID label with Impinj M730 IC. The larger format offers superior read performance for logistics, supply chain and inventory applications requiring a standard shipping label size.",
    "feature_highlights_en": [
      "Standard 4×6 inch shipping label format",
      "Impinj M730 IC – 865–928 MHz global operation",
      "Read range up to 11 m on plastic",
      "Printable matt-coated paper face",
      "Applications: logistics, supply chain, inventory management"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "EPCglobal UHF Class 1 Gen 2v2 (ISO 18000-6C)",
          "Integrated Circuit": "Impinj M730",
          "Operating Frequency": "865–928 MHz (Global)",
          "Read Range (2W ERP)": "Up to 11 m on plastic"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Dimensions": "4×6 inch (approx. 100 × 150 mm)",
          "Material": "Printable matt coated paper",
          "Adhesive": "Permanent adhesive",
          "Delivery Format": "Reel",
          "Applicable Surfaces": "Plastic, cardboard, non-metal"
        }
      },
      {
        "name": "ENVIRONMENTAL RESISTANCE",
        "items": {
          "Operating Temperature": "-35°C to +70°C / -31°F to +158°F",
          "Chemical Resistance": "Salt water, motor oil exposure",
          "Expected Lifetime": "Years in normal operating conditions"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2021/10/confidex-crosswave-neo-4x6-yapistirilabilir-rfid-etiketi-monza-730-2.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Confidex Crosswave Neo Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2021/10/confidex-crosswave-neo-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/confidex-crosswave-neo-4x6/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "confidex-cruiser-headlamp",
    "display_brand": "Confidex",
    "category": "UHF RFID Label",
    "product_group": "RFID Label / Tag",
    "title_en": "Confidex Cruiser Headlamp RFID Label",
    "summary_en": "UHF RFID label optimized for vehicle headlamps and plastic surfaces. Engineered to withstand UV radiation and automotive chemicals, delivering read ranges up to 9 m (ETSI) on glass for vehicle tracking applications.",
    "feature_highlights_en": [
      "Optimized for vehicle headlamps and windshields",
      "Impinj Monza 4E IC – 860–960 MHz global operation",
      "Read range up to 9 m (ETSI) / 10.5 m (FCC) on glass",
      "UV and automotive chemical resistance",
      "Transparent PET front – 90 × 11.5 × 0.2 mm slim format",
      "Applications: automotive tracking, vehicle identification"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "ISO 18000-6-3 / EPC Class 1 Gen 2v2",
          "Integrated Circuit": "Impinj Monza 4E",
          "Operating Frequency": "860–960 MHz (Global)",
          "Read Range – ETSI on glass": "Up to 9 m / 30 ft",
          "Read Range – FCC on glass": "Up to 10.5 m / 34 ft"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Dimensions": "90 × 11.5 × 0.2 mm",
          "Material": "Aluminum antenna; transparent PET front",
          "Adhesive": "Acrylic adhesive",
          "Delivery Format": "Reel",
          "Applicable Surfaces": "Glass, plastic"
        }
      },
      {
        "name": "ENVIRONMENTAL RESISTANCE",
        "items": {
          "Operating Temperature": "-35°C to +85°C / -31°F to +185°F",
          "UV Resistance": "Excellent",
          "Chemical Resistance": "Automotive chemicals, salt water, motor oil",
          "Expected Lifetime": "Years in normal operating conditions"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2021/12/confidex-cruiser-headlamp-600x338.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Confidex Cruiser Headlamp Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2021/12/confidex-cruiser-headlamp-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/confidex-cruiser-headlamp/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "confidex-cruiser-windshield",
    "display_brand": "Confidex",
    "category": "UHF RFID Label",
    "product_group": "RFID Label / Tag",
    "title_en": "Confidex Cruiser Windshield RFID Label",
    "summary_en": "Passive UHF RFID label engineered for vehicle windshields, enabling fast and reliable vehicle identification. Suitable for OGS/HGS toll applications, parking management and vehicle authentication systems.",
    "feature_highlights_en": [
      "Specifically designed for vehicle windshield attachment",
      "Impinj Monza 4E IC – EPCglobal Gen2v2",
      "Read range up to 8 m on glass (ETSI/FCC)",
      "PP front and back construction for printability",
      "Applications: OGS/HGS tolling, parking management, vehicle authentication",
      "92 × 26 × 0.2 mm format"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "EPCglobal Gen2v2 (ISO 18000-6C)",
          "Integrated Circuit": "Impinj Monza 4E",
          "Operating Frequency": "860–960 MHz (Global)",
          "Read Range on Glass (ETSI)": "Up to 8 m / 26 ft",
          "Read Range on Glass (FCC)": "Up to 8 m / 26 ft"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Dimensions": "92 × 26 × 0.2 mm",
          "Material": "PP back + PP front (printable)",
          "Adhesive": "Acrylic adhesive",
          "Delivery Format": "Reel",
          "Applicable Surfaces": "Glass (windshield)"
        }
      },
      {
        "name": "ENVIRONMENTAL RESISTANCE",
        "items": {
          "Operating Temperature": "-35°C to +70°C / -31°F to +158°F",
          "UV Resistance": "Excellent",
          "Chemical Resistance": "Automotive chemicals, salt water",
          "Expected Lifetime": "Years in normal operating conditions"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2021/12/confidex-cruiser-windshield-rfid-etiketi-600x400.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Confidex Cruiser Windshield Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2021/12/confidex-cruiser-windshield-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/confidex-cruiser-windshield/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "confidex-cruiser-windshield-crypto",
    "display_brand": "Confidex",
    "category": "UHF RFID Label",
    "product_group": "RFID Label / Tag",
    "title_en": "Confidex Cruiser Windshield Crypto RFID Label",
    "summary_en": "Secure UHF RFID windshield label with NXP UCODE DNA cryptographic IC for authenticated vehicle identification. Engineered for high-speed tolling, parking systems and traffic management requiring tamper-proof vehicle authentication.",
    "feature_highlights_en": [
      "NXP UCODE DNA IC with cryptographic authentication",
      "EPCglobal Gen2v2 – 860–960 MHz global operation",
      "Read range up to 10 m (ETSI) / 8 m (FCC) on glass",
      "Tamper-proof authenticated vehicle identification",
      "107 × 21.5 mm windshield label format",
      "Applications: toll collection, parking management, traffic optimization"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "EPCglobal Gen2v2 (ISO 18000-6C)",
          "Integrated Circuit": "NXP UCODE DNA",
          "Security": "Cryptographic authentication",
          "Operating Frequency": "860–960 MHz (Global)",
          "Read Range – ETSI on glass": "Up to 10 m / 33 ft",
          "Read Range – FCC on glass": "Up to 8 m / 26 ft"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Dimensions": "107 × 21.5 × 0.2 mm",
          "Material": "Aluminum antenna; transparent PET front",
          "Adhesive": "Acrylic adhesive",
          "Delivery Format": "Reel",
          "Applicable Surfaces": "Glass (windshield)"
        }
      },
      {
        "name": "ENVIRONMENTAL RESISTANCE",
        "items": {
          "Operating Temperature": "-35°C to +85°C / -31°F to +185°F",
          "UV Resistance": "Excellent",
          "Chemical Resistance": "Automotive chemicals, salt water",
          "Expected Lifetime": "Years in normal operating conditions"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2021/12/confidex-cruiser-windshield-crypto-600x338.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Confidex Cruiser Windshield Crypto Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2021/12/confidex-cruiser-windshield-crypto-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/confidex-cruiser-windshield-crypto-etiket/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "confidex-ferrowave-classic",
    "display_brand": "Confidex",
    "category": "UHF RFID On-Metal Label",
    "product_group": "RFID Label / Tag",
    "title_en": "Confidex Ferrowave Classic RFID Label",
    "summary_en": "High-performance all-surface UHF RFID label for metal, liquid, plastic, glass and cardboard. IP68-rated and engineered to deliver reliable performance on metal surfaces with read ranges up to 5 m (FCC).",
    "feature_highlights_en": [
      "Works on all surfaces including metal and liquids",
      "IC options: Impinj Monza R6-P / Monza 4E / NXP UCODE 8m",
      "Read range up to 4 m (ETSI) / 5 m (FCC) on metal",
      "IP68 waterproof with chemical resistance",
      "100 × 17 × 1.1 mm printable white PET label",
      "Applications: asset tracking, logistics, inventory management"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "EPCglobal UHF Class 1 Gen 2v2 (ISO 18000-6C)",
          "IC Options": "Impinj Monza R6-P / Monza 4E / NXP UCODE 8m",
          "Operating Frequency": "865–868 MHz (ETSI) / 902–928 MHz (FCC)",
          "Read Range – ETSI on metal": "Up to 4 m / 13 ft",
          "Read Range – FCC on metal": "Up to 5 m / 16 ft",
          "Applicable Surfaces": "All surfaces (metal, plastic, glass, liquid, cardboard)"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Dimensions": "100 × 17 × 1.1 mm",
          "Material": "Printable white PET",
          "Adhesive": "Permanent acrylic adhesive",
          "Delivery Format": "Reel",
          "Applicable Surfaces": "Metal, plastic, glass, liquid, cardboard"
        }
      },
      {
        "name": "ENVIRONMENTAL RESISTANCE",
        "items": {
          "Operating Temperature": "-35°C to +85°C / -31°F to +185°F",
          "IP Classification": "IP68",
          "Chemical Resistance": "168h sulfuric acid, motor oil, salt water; 24h NaOH",
          "Expected Lifetime": "Years in normal operating conditions"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/02/confidex-ferrowave-classic-yapistirilabilir-rfid-etiketi-monza-R6-P-600x338.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Confidex Ferrowave Classic Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2021/10/confidex-ferrowave-classic-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/confidex-ferrowave-classic/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "confidex-ferrowave-micro",
    "display_brand": "Confidex",
    "category": "UHF RFID On-Metal Label",
    "product_group": "RFID Label / Tag",
    "title_en": "Confidex Ferrowave Micro RFID Label",
    "summary_en": "Compact UHF RFID on-metal label with Impinj M730 IC in a slim 45 × 8 mm form factor. Ideal for asset tracking in retail, maintenance and sports equipment sectors where minimal labeling space is available.",
    "feature_highlights_en": [
      "Optimized for metal surfaces – compact 45 × 8 mm format",
      "Impinj M730 IC – 865–928 MHz global operation",
      "Read range up to 3 m (ETSI) / 4 m (FCC) on metal",
      "IP68 waterproof with chemical resistance",
      "Printable white PET adhesive label",
      "Applications: retail asset tracking, maintenance equipment, sports equipment"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "EPCGlobal Class1 Gen2 ISO 18000-6C",
          "Integrated Circuit": "Impinj M730",
          "Operating Frequency": "865–928 MHz (Global)",
          "Read Range – ETSI on metal": "Up to 3 m / 10 ft",
          "Read Range – FCC on metal": "Up to 4 m / 13 ft",
          "Off-metal Read Range": "Up to 1.5 m / 5 ft"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Dimensions": "45 × 8 × 1.5 mm",
          "Material": "Printable white PET",
          "Adhesive": "Permanent acrylic adhesive",
          "Delivery Format": "Reel",
          "Applicable Surfaces": "Metal (optimized)"
        }
      },
      {
        "name": "ENVIRONMENTAL RESISTANCE",
        "items": {
          "Operating Temperature": "-35°C to +85°C / -31°F to +185°F",
          "IP Classification": "IP68",
          "Chemical Resistance": "Salt water, motor oil, sulfuric acid (10%), NaOH (10%)",
          "Expected Lifetime": "Years in normal operating conditions"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/02/confidex-ferrowave-classic-yapistirilabilir-rfid-etiketi-monza-R6-P-600x338.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Confidex Ferrowave Micro Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2021/10/confidex-ferrowave-micro-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/confidex-ferrowave-micro-rfid-etiketi-monza-730/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "confidex-heatwave-flag",
    "display_brand": "Confidex",
    "category": "UHF RFID Hard Tag",
    "product_group": "RFID Label / Tag",
    "title_en": "Confidex Heatwave Flag RFID Tag",
    "summary_en": "High-temperature resistant UHF RFID flag tag engineered for automotive paint shop processes. Withstands peak temperatures up to 260°C for 10 minutes and attaches via Ø5 mm screw or rivet holes, surviving the full paint shop lifecycle.",
    "feature_highlights_en": [
      "Survives peak temperature up to 260°C / 500°F for 10 minutes",
      "Alien Higgs 9 IC with 688-bit User Memory",
      "Read range up to 10 m / 33 ft (2W ERP)",
      "IP68 waterproof – chemical resistant to acids, motor oil and NaOH",
      "Screw/rivet attachment via Ø5 mm holes – flag form factor",
      "Designed for single-use automotive paint shop lifecycle"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "UHF RFID / EPCglobal Gen2v2",
          "Integrated Circuit": "Alien Higgs 9",
          "Operating Frequency": "865–928 MHz (Global)",
          "EPC Memory": "96 bit (extendable to 496 bit)",
          "User Memory": "688 bit",
          "TID Memory": "96 bit",
          "EPC Content": "Unique number encoded",
          "Read Range (2W ERP)": "Up to 10 m / 33 ft"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Dimensions": "76 × 55 × 0.37 mm / 2.99 × 2.17 × 0.015 in",
          "Tag Materials": "Special polymer designed for high temperatures",
          "Attachment": "Screws or pop rivets through Ø5 mm holes",
          "Weight": "1.5 g",
          "Amount in Box": "200 pcs",
          "Delivery Format": "Single"
        }
      },
      {
        "name": "ENVIRONMENTAL RESISTANCE",
        "items": {
          "Operating Temperature": "-35°C to +85°C / -31°F to +185°F",
          "Peak Temperature (168h)": "+180°C / +356°F",
          "Peak Temperature (3h)": "+230°C / +446°F",
          "Peak Temperature (10min)": "+260°C / +500°F",
          "IP Classification": "IP68",
          "Chemical Resistance": "168h salt water (10%), motor oil, sulfuric acid (10%); 2h NaOH (10%); acetone wipe"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/02/confidex-heatwave-flag-rfid-etiketi-600x338.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Confidex Heatwave Flag Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2021/12/confidex-heatwave-flag-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/confidex-heatwave-flag/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "confidex-heatwave-tough",
    "display_brand": "Confidex",
    "category": "UHF RFID Hard Tag",
    "product_group": "RFID Label / Tag",
    "title_en": "Confidex Heatwave Tough RFID Tag",
    "summary_en": "High-temperature resistant UHF RFID tag with NXP UCODE 7xm+ IC for metallic surfaces. Built from special epoxy-based composite, it withstands peak temperatures up to 250°C for 50 minutes – ideal for automotive paint shop drying cycles.",
    "feature_highlights_en": [
      "Withstands peak temperature 250°C / 482°F for 50 minutes",
      "NXP UCODE 7xm+ IC – 2048-bit User Memory with 384-bit digital signature",
      "Read range up to 9 m on metal (ETSI/FCC)",
      "IP68 waterproof – chemical resistant to acetone, acids and oils",
      "Special epoxy-based composite – 50 × 30 × 3 mm compact form factor",
      "ETSI 865–869 MHz and FCC 902–928 MHz variants available"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "UHF RFID / EPCglobal Gen2v2",
          "Integrated Circuit": "NXP UCODE 7xm+",
          "Operating Frequency – ETSI": "865–869 MHz",
          "Operating Frequency – FCC": "902–928 MHz",
          "EPC Memory": "448 bit",
          "User Memory": "2048 bit",
          "TID Memory": "96 bit",
          "Digital Signature": "384 bit",
          "EPC Content": "Unique number encoded",
          "Read Range – on metal": "Up to 9 m / 30 ft",
          "Read Range – on plastic": "Up to 2 m / 7 ft"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Dimensions": "50 × 30 × 3 mm / 1.97 × 1.18 × 0.12 in",
          "Tag Materials": "Special epoxy-based engineering composite for extreme temperatures",
          "Attachment": "Acrylic foam adhesive (optional), polyurethane/epoxy adhesives, silicone sealants",
          "Weight": "9.5 g",
          "Amount in Box": "100 pcs",
          "Delivery Format": "Single"
        }
      },
      {
        "name": "ENVIRONMENTAL RESISTANCE",
        "items": {
          "Operating Temperature": "-40°C to +85°C / -40°F to +185°F",
          "Peak Temperature": "250°C / 482°F for 50 minutes",
          "IP Classification": "IP68",
          "Chemical Resistance": "168h salt water (10%), motor oil, acetone; 24h sulfuric acid (10%), NaOH (10%)",
          "Expected Lifetime": "Years in normal conditions; designed for paint shop drying cycles"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/02/confidex-heatwave-flag-rfid-etiketi-600x338.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Confidex Heatwave Tough Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2021/12/confidex-heatwave-tough-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/confidex-heatwave-tough/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "confidex-ironside-classic",
    "display_brand": "Confidex",
    "category": "UHF RFID Hard Tag",
    "product_group": "RFID Label / Tag",
    "title_en": "Confidex Ironside Classic RFID Tag",
    "summary_en": "The most durable RFID tag for challenging industrial asset management. SAE AS5678 compliant, IP68-rated and built from high-quality engineering plastics with thermoplastic elastomer surface, delivering read ranges up to 15 m on metal.",
    "feature_highlights_en": [
      "SAE AS5678 compliant – certified for industrial asset tracking",
      "IC options: Impinj M4QT, M4E or MR6-P",
      "Read range up to 15 m on metal (ETSI/FCC variants)",
      "IP68, vibration and operational shock resistant (RTCA DO-160)",
      "Pressure resistance: 170 kPa for 10 min",
      "Multiple attachment: adhesive, structural adhesive, screws (M4), pop rivets, welding bracket"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "UHF RFID / EPCglobal Gen2v2 (ISO 18000-6C)",
          "IC Options": "Impinj M4QT / M4E / MR6-P",
          "Operating Frequency": "860–960 MHz (Global)",
          "Memory (M4QT)": "EPC 128 bit; User 512 bit; TID 96 bit",
          "Memory (M4E)": "EPC 496 bit; User 128 bit; TID 96 bit",
          "Read Range – ETSI on metal": "Up to 15 m / 50 ft",
          "Read Range – FCC on metal": "Up to 15 m / 50 ft",
          "Read Range – Global on metal (ETSI)": "Up to 9 m / 30 ft"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Dimensions": "51.5 × 47.5 × 10 mm / 2.03 × 1.87 × 0.39 in",
          "Tag Materials": "High quality engineering plastics; surface thermoplastic elastomer",
          "Standard Compliancy": "SAE AS5678",
          "Weight": "22 g",
          "Amount in Box": "500 pcs",
          "Delivery Format": "Single",
          "Attachment Methods": "3M 300LSE adhesive, structural adhesive, M4 screws, pop rivets, welding bracket"
        }
      },
      {
        "name": "ENVIRONMENTAL RESISTANCE",
        "items": {
          "Operating Temperature": "-40°C to +85°C / -40°F to +185°F",
          "Ambient Temperature": "-55°C (3h) to +105°C / -67°F to +221°F",
          "Peak Temperature": "+125°C / +257°F for 1 hour",
          "IP Classification": "IP68",
          "Pressure Resistance": "170 kPa for 10 min",
          "Vibration Resistance": "JESD22-B103B service condition 2; RTCA DO-160 Rev E 8.5",
          "Operational Shock": "RTCA DO-160 Rev E 7.2",
          "Chemical Resistance": "168h motor oil, salt water (10%), sulfuric acid (10%); 24h NaOH (10%)"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/02/confidex-ironside-classic-rfid-etiketi-monza-4QT-600x600-1.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Confidex Ironside Classic Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2021/10/ironside-classic.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/confidex-ironside-classic-rfid-etiketi-monza-4qt/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "confidex-ironside-flag",
    "display_brand": "Confidex",
    "category": "UHF RFID Hard Tag",
    "product_group": "RFID Label / Tag",
    "title_en": "Confidex Ironside Flag RFID Tag",
    "summary_en": "Excellent-performing IP69K-rated UHF RFID flag tag with unique single-screw attachment. Engineered from high-quality thermoplastic elastomer for the most demanding industrial environments, delivering read ranges up to 11 m on metal.",
    "feature_highlights_en": [
      "IP69K rated – highest ingress protection standard",
      "Impinj Monza 4E IC – EPC 496 bit / User 128 bit",
      "Read range up to 11 m on metal / 4 m on plastic",
      "Single-screw attachment with included metallic limiter",
      "Peak temperature +140°C / +284°F for 10 min",
      "High-quality thermoplastic elastomer construction"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "UHF RFID / EPCglobal Gen2v2 (ISO 18000-6C)",
          "Integrated Circuit": "Impinj Monza 4E",
          "Operating Frequency": "865–928 MHz (Global)",
          "EPC Memory": "496 bit",
          "User Memory": "128 bit",
          "TID Memory": "96 bit",
          "EPC Content": "Unique number encoded",
          "Read Range – on metal": "Up to 11 m / 36 ft",
          "Read Range – on plastic": "Up to 4 m / 13 ft"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Tag Dimensions": "52.2 × 29 × 14 mm / 2.1 × 1.1 × 0.55 in",
          "Tag Materials": "High quality thermoplastic elastomer",
          "Attachment": "Single M5 screw or rivet through hole (15 mm from metal edge)",
          "Weight": "5.5 g",
          "Amount in Box": "500 pcs",
          "Delivery Format": "Single"
        }
      },
      {
        "name": "ENVIRONMENTAL RESISTANCE",
        "items": {
          "Operating Temperature": "-40°C to +85°C / -40°F to +185°F",
          "Peak Temperature": "+140°C / +284°F for 10 min",
          "Water Resistance": "IP69K",
          "Storage Condition": "1 year at +20°C / 50% RH",
          "Chemical Resistance": "168h NaOH (10%), sulfuric acid (10%), motor oil, salt water (10%); 2h acetone",
          "Expected Lifetime": "Years in normal operating conditions"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/02/ironside-flag-600x338.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Confidex Ironside Flag Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2021/10/ironside-flag-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/confidex-ironside-flag-rfid-etiketi-monza-4e/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "confidex-ironside-micro",
    "display_brand": "Confidex",
    "category": "UHF RFID Hard Tag",
    "product_group": "RFID Label / Tag",
    "title_en": "Confidex Ironside Micro RFID Tag",
    "summary_en": "Compact square-inch on-metal UHF RFID tag with a 27 × 27 mm footprint. IP68-rated and built from high-quality engineering plastics, suitable for various metal asset tracking applications where space is limited.",
    "feature_highlights_en": [
      "Square-inch footprint – 27 × 27 × 5.5 mm compact form factor",
      "IC options: Impinj Monza 4QT / 4E",
      "Read range up to 5 m (ETSI) / 4 m (FCC) on metal",
      "IP68 waterproof with chemical resistance",
      "Multiple attachment: adhesive, screws (M3), pop rivets, plastic rivets",
      "Polarization at 45° to the Confidex logo"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "UHF RFID / ISO 18000-6C / EPCglobal Gen2v2",
          "IC Options": "Impinj Monza 4QT / Monza 4E",
          "Operating Frequency": "865–928 MHz (Global)",
          "Memory (M4QT)": "EPC 128 bit; User 512 bit; TID 96 bit",
          "Memory (M4E)": "EPC 496 bit; User 128 bit; TID 96 bit",
          "EPC Content": "Unique number encoded",
          "Read Range – ETSI on metal": "Up to 5 m / 16 ft",
          "Read Range – FCC on metal": "Up to 4 m / 13 ft"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Dimensions": "27 × 27 × 5.5 mm / 1.06 × 1.06 × 0.22 in",
          "Tag Materials": "High quality engineering plastics",
          "Attachment": "Adhesive (3M 300LSE), screws (M3), pop rivets, plastic rivets (3mm)",
          "Weight": "4.3 g",
          "Amount in Box": "500 pcs",
          "Delivery Format": "Single"
        }
      },
      {
        "name": "ENVIRONMENTAL RESISTANCE",
        "items": {
          "Operating Temperature": "-35°C to +85°C / -31°F to +185°F",
          "IP Classification": "IP68",
          "Chemical Resistance": "168h motor oil, salt water (10%); 5h sulfuric acid (10%); 1h NaOH (10%)",
          "Expected Lifetime": "Years in normal operating conditions"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/02/confidex-ironside-micro-600x338.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Confidex Ironside Micro Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2021/10/confidex-ironside-micro-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/confidex-ironside-micro-rfid-etiketi-monza-4qt/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "confidex-ironside-micro-nfc",
    "display_brand": "Confidex",
    "category": "NFC Hard Tag",
    "product_group": "RFID Label / Tag",
    "title_en": "Confidex Ironside Micro NFC Tag",
    "summary_en": "Ruggedized NFC tag in the same compact 27 × 27 mm form factor as the Ironside Micro UHF. IP68-rated and built for harsh environments involving impacts, chemicals and moisture, compatible with any NFC smartphone.",
    "feature_highlights_en": [
      "NFC Forum Type 2 / ISO 14443A – 13.56 MHz",
      "NXP NTAG213 IC – 144 bytes User Memory",
      "Read range up to 30 mm (mobile) / 70 mm (fixed reader)",
      "Works on any surface including metal",
      "IP68 waterproof with chemical resistance",
      "Same compact 27 × 27 × 5.5 mm footprint as Ironside Micro UHF"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "NFC Forum Type 2 / ISO 14443A",
          "Integrated Circuit": "NXP NTAG213",
          "Operating Frequency": "13.56 MHz",
          "User Memory": "144 Bytes",
          "Read Range – Mobile phone": "Up to 30 mm",
          "Read Range – Fixed reader": "Up to 70 mm",
          "Applicable Surfaces": "All materials including metal"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Dimensions": "27 × 27 × 5.5 mm / 1.06 × 1.06 × 0.22 in",
          "Tag Materials": "High quality engineering plastics",
          "Attachment": "Adhesive (3M 300LSE), screws (M3), pop rivets, plastic rivets (3mm)",
          "Weight": "4.3 g",
          "Amount in Box": "500 pcs",
          "Delivery Format": "Single"
        }
      },
      {
        "name": "ENVIRONMENTAL RESISTANCE",
        "items": {
          "Operating Temperature": "-35°C to +85°C / -31°F to +185°F",
          "IP Classification": "IP68",
          "Chemical Resistance": "168h motor oil, salt water (10%); 5h sulfuric acid (10%); 1h NaOH (10%)",
          "Expected Lifetime": "Years in normal operating conditions"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/02/confidex-ironside-micro-600x338.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Confidex Ironside Micro NFC Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2022/10/confidex-ironside-micro-nfc-rfid-tag.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/confidex-ironside-micro-nfc-rfid-etiketi/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "confidex-ironside-plate",
    "display_brand": "Confidex",
    "category": "UHF RFID Hard Tag",
    "product_group": "RFID Label / Tag",
    "title_en": "Confidex Ironside Plate RFID Tag",
    "summary_en": "Robust RAIN RFID tag with aluminum/stainless steel construction and durable laser-engravable surface. Engineered for the most challenging industrial environments, delivering read ranges up to 10 m on metal with IP68 rating.",
    "feature_highlights_en": [
      "Aluminum top with anti-corrosion coating + stainless steel back",
      "NXP UCODE 8 IC – EPC 128 bit",
      "Read range up to 10 m on metal / 7 m on plastic",
      "IP68 waterproof – industrial washing resistance",
      "Laser-engravable surface for permanent visual marking",
      "Multiple attachment: 3M VHB adhesive, M3 screws or pop rivets"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "EPCGlobal Class1 Gen2 ISO 18000-6C",
          "Integrated Circuit": "NXP UCODE 8",
          "Operating Frequency": "865–928 MHz (Global)",
          "EPC Memory": "128 bit",
          "TID Memory": "96 bit",
          "EPC Content": "Unique 96 bit EPC in every tag",
          "Read Range – on metal": "Up to 10 m / 33 ft",
          "Read Range – on plastic": "Up to 7 m / 23 ft"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Tag Dimensions": "108 × 50.8 × 3.7 mm / 4.25 × 2 × 0.15 in",
          "Tag Surface": "Top: Aluminum with anti-corrosion coating; Back: Stainless steel",
          "Attachment": "3M VHB adhesive (optional), M3 screws or pop rivets (Ø3.3 mm holes)",
          "Weight": "68 g",
          "Amount in Box": "80 pcs",
          "Delivery Format": "Single"
        }
      },
      {
        "name": "ENVIRONMENTAL RESISTANCE",
        "items": {
          "Operating Temperature": "-35°C to +85°C / -31°F to +185°F",
          "Ambient Temperature": "-35°C to +85°C / -31°F to +185°F",
          "Peak Temperature": "+130°C / +266°F for 10 min",
          "Water Resistance": "IP68 (tested 5h in 1m deep water)",
          "Washing Resistance": "Tolerates industrial washing with standard solvents",
          "Storage Condition": "1 year at +20°C / 50% RH",
          "Chemical Resistance": "168h motor oil; 24h salt water (10%); 10min sulfuric acid (10%); 10min NaOH (10%)"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/02/ironside-plate-600x338.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Confidex Ironside Plate Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2021/10/confidex-ironside-plate-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/confidex-ironside-plate/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "confidex-ironside-slim",
    "display_brand": "Confidex",
    "category": "UHF RFID Hard Tag",
    "product_group": "RFID Label / Tag",
    "title_en": "Confidex Ironside Slim RFID Tag",
    "summary_en": "Versatile and durable slim UHF RFID tag for global asset tracking with excellent on-metal performance. IP68-rated with Impinj Monza 4E IC, delivering read ranges up to 10 m on metal in a compact 85 × 21 mm form factor.",
    "feature_highlights_en": [
      "Slim 85 × 21 × 10 mm form factor – versatile global asset tracking",
      "Impinj Monza 4E IC – EPC 496 bit / User 128 bit",
      "Read range up to 10 m on metal / 4 m off metal",
      "IP68 waterproof with chemical resistance",
      "Multiple attachment: adhesive, structural adhesive, M4 screws",
      "Available as Personalization Kit with 700 blank PET data labels per box"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "EPCGlobal Gen2 v1.2 / ISO 18000-63",
          "Integrated Circuit": "Impinj Monza 4E",
          "Operating Frequency": "865–928 MHz (Global)",
          "EPC Memory": "496 bit",
          "User Memory": "128 bit",
          "TID Memory": "96 bit",
          "EPC Content": "Unique number encoded",
          "Read Range – on metal": "Up to 10 m / 33 ft",
          "Read Range – off metal": "Up to 4 m / 13 ft"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Dimensions": "85 × 21 × 10 mm / 3.35 × 0.83 × 0.39 in",
          "Tag Materials": "High quality engineering plastics",
          "Attachment": "Acrylic adhesive, polyurethane/epoxy adhesives, M4 screws with compression limiters",
          "Weight": "15.5 g",
          "Amount in Box": "600 pcs",
          "Delivery Format": "Single"
        }
      },
      {
        "name": "ENVIRONMENTAL RESISTANCE",
        "items": {
          "Operating Temperature": "-35°C to +85°C / -31°F to +185°F",
          "IP Classification": "IP68",
          "Chemical Resistance": "168h motor oil; 24h salt water (10%), sulfuric acid (10%), NaOH (10%)",
          "Expected Lifetime": "Years in normal operating conditions"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/02/confidex-ironside-slim-600x400.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Confidex Ironside Slim Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2021/10/confidex-ironside-slim.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/confidex-ironside-slim-rfid-etiketi-m4e/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "confidex-leaf",
    "display_brand": "Confidex",
    "category": "UHF RFID Label",
    "product_group": "RFID Label / Tag",
    "title_en": "Confidex Leaf RFID Label",
    "summary_en": "Sustainable paper-based and plastic-free UHF RFID label suitable for indirect contact with food. Delivered on reel with water-soluble adhesive for short-term logistics, food shipping and eco-conscious supply chain applications.",
    "feature_highlights_en": [
      "Paper-based and 100% plastic-free – sustainable RFID label",
      "Suitable for indirect food contact applications",
      "Impinj Monza 4E IC – 865–928 MHz global operation",
      "Read range up to 8 m (ETSI) / 10 m (FCC) on cardboard",
      "Water-soluble adhesive – 92 × 27 mm on 2000 pcs/reel",
      "Applications: short-term logistics, food shipment tracking"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "UHF RFID / EPCglobal Gen2v2 (ISO 18000-6C)",
          "Integrated Circuit": "Impinj Monza 4E",
          "Operating Frequency": "865–928 MHz (Global)",
          "EPC Memory": "496 bit",
          "User Memory": "128 bit",
          "TID Memory": "96 bit",
          "Read Range – ETSI on cardboard": "Up to 8 m / 26 ft",
          "Read Range – FCC on cardboard": "Up to 10 m / 33 ft",
          "Applicable Surfaces": "Non-metallic surfaces"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Tag Dimensions": "92 × 27 mm / 3.62 × 1.06 in",
          "Tag Materials": "Paper face material (plastic-free)",
          "Adhesive": "Water-soluble adhesive",
          "Delivery Format": "2000 pcs on reel",
          "Pitch on Reel": "33.87 mm / 1.333 in",
          "Reel Core Inner Diameter": "76 mm / 3 in",
          "Minimum Bending Diameter": "50 mm"
        }
      },
      {
        "name": "ENVIRONMENTAL RESISTANCE",
        "items": {
          "Application Temperature": "0°C to +30°C / 32°F to +86°F",
          "Operating Temperature": "-30°C to +55°C / -22°F to +131°F",
          "Storage Condition": "6 months shelf life at +20°C / 45% RH (original sealed package)",
          "Additional Notes": "Label is sensitive to environmental humidity; store in plastic sealed packages"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2021/12/confidex-leaf-rfid-etiketi-600x338.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Confidex Leaf Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2021/12/confidex-leaf-rfid-etiketi-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/confidex-leaf-etiket/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "confidex-looptag",
    "display_brand": "Confidex",
    "category": "UHF RFID Label",
    "product_group": "RFID Label / Tag",
    "title_en": "Confidex LoopTag RFID Label",
    "summary_en": "Printable and versatile UHF RFID loop label designed for hard-to-tag cylindrical assets such as tubes, wires and pipes. Available in 150 mm and 250 mm strap lengths to accommodate a wide range of asset diameters.",
    "feature_highlights_en": [
      "Loop design for tubes, wires and cylindrical assets",
      "Impinj Monza 4E IC – 865–928 MHz global operation",
      "Read range up to 7 m on metal pipe / 5 m on plastic pipe",
      "IP68 waterproof – chemical resistant",
      "Available in 150 mm and 250 mm strap lengths",
      "Printable white PET on 500 pcs/reel"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "EPCglobal Class1 Gen2 ISO 18000-6C",
          "Integrated Circuit": "Impinj Monza 4E",
          "Operating Frequency": "865–928 MHz (Global)",
          "EPC Memory": "496 bit",
          "User Memory": "128 bit",
          "TID Memory": "96 bit",
          "Read Range – on metal pipe": "Up to 7 m / 23 ft",
          "Read Range – on plastic pipe": "Up to 5 m / 16 ft",
          "Applicable Surfaces": "All materials"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Dimensions (150 mm)": "150 × 33 × 0.2 mm / 5.91 × 1.30 × 0.01 in",
          "Dimensions (250 mm)": "250 × 33 × 0.2 mm / 9.84 × 1.30 × 0.01 in",
          "Tag Materials": "Printable white PET; resin ribbon recommended",
          "Adhesive": "Permanent adhesive for general purpose",
          "Weight": "< 1 g",
          "Amount per Reel": "500 pcs",
          "Reel Core Inner Diameter": "76 mm / 3 in",
          "Minimum Bending Diameter": "50 mm (excluding strap)"
        }
      },
      {
        "name": "ENVIRONMENTAL RESISTANCE",
        "items": {
          "Operating Temperature": "-40°C to +85°C / -40°F to +185°F",
          "Water Resistance": "IP68 (tested 5h in 1m deep water)",
          "Storage Condition": "1 year at +20°C / 50% RH (adhesive shelf life)",
          "Chemical Resistance": "168h salt water (10%), motor oil; 24h sulfuric acid (10%), NaOH (10%); 30min acetone",
          "Expected Lifetime": "Years in normal operating conditions"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2021/12/confidex-looptag-rfid-etiketi-600x338.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Confidex LoopTag Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2021/12/confidex-looptag-rfid-etiketi-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/confidex-looptag-etiket/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "confidex-steelwave-classic",
    "display_brand": "Confidex",
    "category": "UHF RFID Hard Tag",
    "product_group": "RFID Label / Tag",
    "title_en": "Confidex Steelwave Classic RFID Tag",
    "summary_en": "Thin all-surface UHF RFID tag for returnable transit item tracking with extreme performance. Delivers read ranges up to 12 m on metal and up to 11 m on other materials in a slim 115 × 30 × 3.9 mm enclosure.",
    "feature_highlights_en": [
      "All-surface performance – 12 m on metal, 11 m on other materials",
      "Impinj Monza 4QT IC – EPC 128 bit / User 512 bit",
      "ETSI 865–869 MHz and FCC 902–928 MHz variants",
      "IP68 waterproof – industrial washing resistance",
      "High-performance acrylic adhesive for metal and painted metal",
      "Printable personalization with cover film protection"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "EPC Class1 Gen2 ISO 18000-6C / EPCglobal Gen2v2",
          "Integrated Circuit": "Impinj Monza 4QT (4E upon request)",
          "Operating Frequency – ETSI": "865–869 MHz",
          "Operating Frequency – FCC": "902–928 MHz",
          "Memory (Monza 4QT)": "EPC 128 bit; User 512 bit; TID 96 bit",
          "EPC Content": "Unique number encoded",
          "Read Range – on metal": "Up to 12 m / 40 ft",
          "Read Range – other materials": "Up to 11 m / 36 ft"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Tag Dimensions": "115 × 30 × 3.9 mm / 4.53 × 1.18 × 0.15 in",
          "Tag Materials": "High quality engineering plastics",
          "Adhesive": "High performance acrylic adhesive (metal and painted metal)",
          "Weight": "12 g",
          "Amount in Box": "50 tags",
          "Delivery Format": "Single"
        }
      },
      {
        "name": "ENVIRONMENTAL RESISTANCE",
        "items": {
          "Operating Temperature": "-35°C to +85°C / -31°F to +185°F",
          "Water Resistance": "IP68",
          "Washing Resistance": "Tolerates industrial washing with standard solvents",
          "Storage Condition": "1 year at +20°C / 50% RH (adhesive shelf life)",
          "Chemical Resistance": "168h sulfuric acid (10%), motor oil, salt water (10%); 1h NaOH (10%)",
          "Expected Lifetime": "Years in normal operating conditions"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/02/confidex-steelwave-classic-600x338.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Confidex Steelwave Classic Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2021/10/confidex-steelwave-classic-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/confidex-steelwave-classic-rfid-etiketi-monza-4-qt-etsi/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "confidex-steelwave-micro-ii",
    "display_brand": "Confidex",
    "category": "UHF RFID Hard Tag",
    "product_group": "RFID Label / Tag",
    "title_en": "Confidex Steelwave Micro II RFID Tag",
    "summary_en": "Small-sized on-metal RFID tag with versatile attachment options and unparalleled performance in a compact 38 × 13 mm form factor. IP67-rated, suitable for IT asset tracking, office equipment and inventory management.",
    "feature_highlights_en": [
      "Ultra-compact 38 × 13 × 4.5 mm on-metal form factor",
      "Impinj Monza 4QT IC – EPC 128 bit / User 512 bit",
      "Read range up to 5 m on metal / 1.5 m off metal",
      "IP67 rated with acrylic adhesive included",
      "Multiple attachment: adhesive, tethering string, cable tie",
      "Applications: IT asset tracking, office equipment, inventory management"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "EPCGlobal Class1 Gen2 ISO 18000-6C",
          "Integrated Circuit": "Impinj Monza 4QT (4E upon request)",
          "Operating Frequency": "865–928 MHz (Global)",
          "Memory (Monza 4QT)": "EPC 128 bit; User 512 bit; TID 96 bit",
          "EPC Content": "Unique number encoded",
          "Read Range – on metal": "Up to 5 m / 16 ft",
          "Read Range – off metal": "Up to 1.5 m / 5 ft"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Dimensions": "38 × 13 × 4.5 mm / 1.5 × 0.5 × 0.17 in",
          "Tag Materials": "Engineering plastics with synthetic face layer",
          "Adhesive": "High performance acrylic adhesive (included)",
          "Attachment Options": "Adhesive, hanging with tethering string, cable tie through tag",
          "Weight": "2 g",
          "Amount in Box": "1000 pcs",
          "Delivery Format": "Single"
        }
      },
      {
        "name": "ENVIRONMENTAL RESISTANCE",
        "items": {
          "Operating Temperature": "-20°C to +70°C / -4°F to +158°F",
          "IP Classification": "IP67",
          "Chemical Resistance": "2h salt water (10%), motor oil; short-time sulfuric acid exposure",
          "Expected Lifetime": "Years in normal operating conditions"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/02/confidex-steelwave-micro-II-rfid-etiketi-Monza-4-QT-600x338.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Confidex Steelwave Micro II Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2021/10/steelwave-micro-2-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/confidex-steelwave-micro-2-rfid-etiketi-monza-4-qt/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "epozzy-on-metal-55x15x125",
    "display_brand": "Epozzy",
    "category": "UHF RFID On-Metal Label",
    "product_group": "RFID Label / Tag",
    "title_en": "Epozzy Printable On-Metal RFID Label 55×15×1.25 mm",
    "summary_en": "Ultra-slim flexible UHF RFID on-metal label in 55×15×1.25 mm format. Printable with Sato and Zebra RFID printers, optimized for curved metallic surfaces with read range up to 5.5 m on metal.",
    "feature_highlights_en": [
      "Impinj Monza R6-P – EPC C1G2 (ISO18000-6C), 860–960 MHz",
      "Read range up to 5.5 m on metal / 2.8 m on plastic (FCC)",
      "IP68 – flexible PET/Aluminum/Foam construction for curved surfaces"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "EPC C1G2 (ISO18000-6C)",
          "Integrated Circuit": "Impinj Monza R6-P",
          "Operating Frequency": "860–960 MHz",
          "EPC Memory": "128 bit",
          "User Memory": "32 bit",
          "Read Range – on metal (FCC)": "5.5 m",
          "Read Range – on plastic (FCC)": "2.8 m"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Dimensions": "55 × 15 × 1.25 mm (L×W×T)",
          "Material": "PET / Aluminum Foil / Foam",
          "Installation": "Adhesive",
          "Supported Printers": "SATO CL4NX, Zebra ZT410, Postek TX3r",
          "Package": "500 pcs / roll, 76.2 mm / 3\" reel core"
        }
      },
      {
        "name": "ENVIRONMENTAL RESISTANCE",
        "items": {
          "Operating Temperature": "-40°C to +85°C",
          "IP Classification": "IP68 (tested 5h at 1m depth)"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2021/11/55x15x1.25-metal-etiketi-600x400.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Epozzy 55x15x1.25 mm On-Metal Label Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2021/12/epozzy-uhf-metal-yapiskan-yazdirilabilir-rfid-etiketi-eu-55x15x1.25mm-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/rfid-metal-ustu-etiket-55x15x1-25-mm/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "epozzy-on-metal-60x25x1",
    "display_brand": "Epozzy",
    "category": "UHF RFID On-Metal Label",
    "product_group": "RFID Label / Tag",
    "title_en": "Epozzy Printable On-Metal RFID Label 60×25×1 mm",
    "summary_en": "Flexible printable UHF RFID on-metal label in 60×25×1 mm format. Compatible with major RFID printers, optimized for metallic and curved assets with read range up to 5 m on metal.",
    "feature_highlights_en": [
      "Impinj Monza R6-P – EPC C1G2 (ISO18000-6C), 860–960 MHz",
      "Read range up to 5 m on metal / 2 m on plastic (FCC)",
      "IP68 – flexible PET/Aluminum/Foam for curved metal surfaces"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "EPC C1G2 (ISO18000-6C)",
          "Integrated Circuit": "Impinj Monza R6-P",
          "Operating Frequency": "860–960 MHz",
          "EPC Memory": "128 bit",
          "User Memory": "32 bit",
          "Read Range – on metal (FCC)": "5 m",
          "Read Range – on plastic (FCC)": "2 m"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Dimensions": "60 × 25 × 1 mm (L×W×T)",
          "Material": "PET / Aluminum Foil / Foam",
          "Installation": "Adhesive",
          "Supported Printers": "SATO CL4NX, Zebra ZT410, Postek TX3r",
          "Package": "500 pcs / roll, 76.2 mm / 3\" reel core"
        }
      },
      {
        "name": "ENVIRONMENTAL RESISTANCE",
        "items": {
          "Operating Temperature": "-40°C to +85°C",
          "IP Classification": "IP68 (tested 5h at 1m depth)"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2021/11/60x25x1-metal-yapiskanli-etiket-600x400.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Epozzy 60x25x1 mm On-Metal Label Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2021/12/epozzy-uhf-metal-yapiskan-yazdirilabilir-rfid-etiketi-eu-60x25x1mm-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/rfid-metal-ustu-etiket-60x25x1-mm/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "epozzy-on-metal-64x6x1",
    "display_brand": "Epozzy",
    "category": "UHF RFID On-Metal Label",
    "product_group": "RFID Label / Tag",
    "title_en": "Epozzy Printable On-Metal RFID Label 64×6×1 mm",
    "summary_en": "Ultra-slim 64×6×1 mm UHF RFID on-metal label with NXP UCode 8 IC. Ideal for narrow metal assets such as tools, shelving and IT equipment, with read ranges up to 4 m on metal and 4.5 m on plastic.",
    "feature_highlights_en": [
      "NXP UCode 8 – EPC C1G2 (ISO18000-6C), 860–960 MHz",
      "Read range up to 4 m on metal / 4.5 m on plastic (FCC)",
      "IP68 – ultra-slim 64×6 mm for narrow metal surfaces"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "EPC C1G2 (ISO18000-6C)",
          "Integrated Circuit": "NXP UCode 8",
          "Operating Frequency": "860–960 MHz",
          "EPC Memory": "128 bit",
          "TID Memory": "96 bit",
          "User Memory": "32 bit",
          "Read Range – on metal (FCC)": "4 m",
          "Read Range – on plastic (FCC)": "4.5 m"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Dimensions": "64 × 6 × 1 mm (L×W×T)",
          "Material": "PET / Aluminum Foil / Foam",
          "Installation": "Adhesive",
          "Supported Printers": "SATO CL4NX, Zebra ZT410, Postek TX3r",
          "Package": "500 pcs / roll, 76.2 mm / 3\" reel core"
        }
      },
      {
        "name": "ENVIRONMENTAL RESISTANCE",
        "items": {
          "Operating Temperature": "-40°C to +85°C",
          "IP Classification": "IP68 (tested 5h at 1m depth)"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2021/11/64x6x1-etiket-600x400.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Epozzy 64x6x1 mm On-Metal Label Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2021/12/epozzy-uhf-metal-yapiskan-yazdirilabilir-rfid-etiketi-eu-64x6x1mm-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/rfid-metal-ustu-etiket-64x6x1-mm/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "epozzy-on-metal-70x30x1",
    "display_brand": "Epozzy",
    "category": "UHF RFID On-Metal Label",
    "product_group": "RFID Label / Tag",
    "title_en": "Epozzy Printable On-Metal RFID Label 70×30×1 mm",
    "summary_en": "Flexible printable UHF RFID on-metal label in 70×30×1 mm format. Delivers read ranges up to 8 m on metal, optimized for IT assets, fixed assets and metal equipment tracking.",
    "feature_highlights_en": [
      "Impinj Monza R6-P – EPC C1G2 (ISO18000-6C), 860–960 MHz",
      "Read range up to 8 m on metal / 4 m on plastic (FCC)",
      "IP68 – flexible PET/Aluminum/Foam adhesive label"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "EPC C1G2 (ISO18000-6C)",
          "Integrated Circuit": "Impinj Monza R6-P",
          "Operating Frequency": "860–960 MHz",
          "EPC Memory": "128 bit",
          "User Memory": "32 bit",
          "Read Range – on metal (FCC)": "8 m",
          "Read Range – on plastic (FCC)": "4 m"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Dimensions": "70 × 30 × 1 mm (L×W×T)",
          "Material": "PET / Aluminum Foil / Foam",
          "Installation": "Adhesive",
          "Supported Printers": "SATO CL4NX, Zebra ZT410, Postek TX3r",
          "Package": "500 pcs / roll, 76.2 mm / 3\" reel core"
        }
      },
      {
        "name": "ENVIRONMENTAL RESISTANCE",
        "items": {
          "Operating Temperature": "-40°C to +85°C",
          "IP Classification": "IP68 (tested 5h at 1m depth)"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2021/11/70x30x1-metal-yapiskanli-etiket-600x400.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Epozzy 70x30x1 mm On-Metal Label Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2021/12/epozzy-uhf-metal-yapiskan-yazdirilabilir-rfid-etiketi-eu-70x30x1mm-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/rfid-metal-ustu-etiket-70x30x1-mm/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "epozzy-on-metal-80x20x1",
    "display_brand": "Epozzy",
    "category": "UHF RFID On-Metal Label",
    "product_group": "RFID Label / Tag",
    "title_en": "Epozzy Printable On-Metal RFID Label 80×20×1 mm",
    "summary_en": "Flexible printable UHF RFID on-metal label in 80×20×1 mm format. Delivers read ranges up to 7 m on metal, well-suited for IT asset management, container tracking and warehouse shelf applications.",
    "feature_highlights_en": [
      "Impinj Monza R6-P – EPC C1G2 (ISO18000-6C), 860–960 MHz",
      "Read range up to 7 m on metal / 4 m on plastic (FCC)",
      "IP68 – flexible PET/Aluminum/Foam for curved surfaces"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "EPC C1G2 (ISO18000-6C)",
          "Integrated Circuit": "Impinj Monza R6-P",
          "Operating Frequency": "860–960 MHz",
          "EPC Memory": "128 bit",
          "User Memory": "32 bit",
          "Read Range – on metal (FCC)": "7 m",
          "Read Range – on plastic (FCC)": "4 m"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Dimensions": "80 × 20 × 1 mm (L×W×T)",
          "Material": "PET / Aluminum Foil / Foam",
          "Installation": "Adhesive",
          "Supported Printers": "SATO CL4NX, Zebra ZT410, Postek TX3r",
          "Package": "500 pcs / roll, 76.2 mm / 3\" reel core"
        }
      },
      {
        "name": "ENVIRONMENTAL RESISTANCE",
        "items": {
          "Operating Temperature": "-40°C to +85°C",
          "IP Classification": "IP68 (tested 5h at 1m depth)"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2021/11/80x20x1-on-metal-yapiskanli-etiketi-600x400.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Epozzy 80x20x1 mm On-Metal Label Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2021/12/epozzy-uhf-metal-yapiskan-yazdirilabilir-rfid-etiketi-eu-80x20x1mm-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/rfid-metal-ustu-etiket-80x20x1-mm/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "epozzy-on-metal-95x22x125",
    "display_brand": "Epozzy",
    "category": "UHF RFID On-Metal Label",
    "product_group": "RFID Label / Tag",
    "title_en": "Epozzy Printable On-Metal RFID Label 95×22×1.25 mm",
    "summary_en": "High-performance flexible UHF RFID on-metal label in 95×22×1.25 mm format. Delivers exceptional read ranges up to 12 m on metal and 10 m on plastic, ideal for large-scale metal asset tracking.",
    "feature_highlights_en": [
      "Impinj Monza R6-P – EPC C1G2 (ISO18000-6C), 860–960 MHz",
      "Best-in-class read range: 12 m on metal / 10 m on plastic (FCC)",
      "IP68 – flexible PET/Aluminum/Foam adhesive label"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "EPC C1G2 (ISO18000-6C)",
          "Integrated Circuit": "Impinj Monza R6-P",
          "Operating Frequency": "860–960 MHz",
          "EPC Memory": "128 bit",
          "User Memory": "32 bit",
          "Read Range – on metal (FCC)": "12 m",
          "Read Range – on plastic (FCC)": "10 m"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Dimensions": "95 × 22 × 1.25 mm (L×W×T)",
          "Material": "PET / Aluminum Foil / Foam",
          "Installation": "Adhesive",
          "Supported Printers": "SATO CL4NX, Zebra ZT410, Postek TX3r",
          "Package": "500 pcs / roll, 76.2 mm / 3\" reel core"
        }
      },
      {
        "name": "ENVIRONMENTAL RESISTANCE",
        "items": {
          "Operating Temperature": "-40°C to +85°C",
          "IP Classification": "IP68 (tested 5h at 1m depth)"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2021/11/95x22x1.25-on-metal-etiket-600x400.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Epozzy 95x22x1.25 mm On-Metal Label Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2021/12/epozzy-uhf-metal-yapiskan-yazdirilabilir-rfid-etiketi-eu-95x22x1.25mm-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/rfid-metal-ustu-etiket-95x22x1-25-mm/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "epozzy-on-metal-128x30x8",
    "display_brand": "Epozzy",
    "category": "UHF RFID Hard Tag",
    "product_group": "RFID Label / Tag",
    "title_en": "Epozzy UHF Metal RFID Tag 128×30×8 mm",
    "summary_en": "Rugged UHF RFID hard tag in 128×30×8 mm engineering plastic housing for metal asset tracking in heavy industry, oil, gas and mining. IP68-rated with read range up to 10 m and multiple attachment options.",
    "feature_highlights_en": [
      "Impinj Monza R6P – ISO/IEC 18000-6C, 860–960 MHz",
      "Read range up to 10 m on metal (FCC)",
      "IP68 – attachment: 3M adhesive, screw, magnet or cable"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "ISO/IEC 18000-6C (EPC C1G2)",
          "Integrated Circuit": "Impinj Monza R6P",
          "Operating Frequency": "860–960 MHz",
          "EPC Memory": "128 (96) bit",
          "User Memory": "32 (64) bit",
          "Read Range (2W ERP FCC)": "10 m"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Dimensions": "128 × 30 × 8.5 mm",
          "Material": "Engineering plastics",
          "Weight": "15.5 g",
          "Installation": "3M adhesive, screw, magnet, cable",
          "Package": "100 pcs / bag"
        }
      },
      {
        "name": "ENVIRONMENTAL RESISTANCE",
        "items": {
          "Operating Temperature": "-40°C to +85°C",
          "IP Classification": "IP68",
          "Humidity": "98% non-condensing"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/rfid-metal-ustu-etiket-128x30x8.5-mm-p1-600x603.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Epozzy 128x30 mm UHF Metal Tag Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2022/02/epozzy-128x30-mm-rfid-metal-etiket-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/rfid-metal-ustu-etiket-128x30x8-mm/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "epozzy-on-metal-136x43x10",
    "display_brand": "Epozzy",
    "category": "UHF RFID Hard Tag",
    "product_group": "RFID Label / Tag",
    "title_en": "Epozzy UHF Metal RFID Tag 136×43×10 mm",
    "summary_en": "High-protection UHF RFID metal tag in 136×43×10 mm engineering plastic housing. Delivers exceptional read range up to 30 m and supports multiple attachment methods for demanding industrial environments.",
    "feature_highlights_en": [
      "Impinj Monza 4E/4QT/4i – ISO/IEC 18000-6C, 860–960 MHz",
      "Read range up to 30 m on metal (FCC)",
      "IP68 – attachment: 3M adhesive, screw, magnet or cable"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "ISO/IEC 18000-6C (EPC C1G2)",
          "IC Options": "Impinj Monza 4E / 4QT / 4i",
          "Operating Frequency": "860–960 MHz",
          "EPC Memory": "496 / 128 / 256 bit",
          "User Memory": "128 / 512 / 480 bit",
          "Max Read Range (2W ERP FCC)": "30 m"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Dimensions": "136 × 43 × 10 mm",
          "Material": "Engineering plastics",
          "Weight": "47 g",
          "Installation": "3M adhesive, screw, magnet, cable",
          "Package": "100 pcs / bag"
        }
      },
      {
        "name": "ENVIRONMENTAL RESISTANCE",
        "items": {
          "Operating Temperature": "-40°C to +85°C",
          "IP Classification": "IP68"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/rfid-metal-ustu-etiketi-136x43x10.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Epozzy 136x43 mm UHF Metal Tag Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2022/02/epozzy-metal-rfid-etiketi-136x43-mm-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/rfid-metal-ustu-etiket-136x43x10-mm/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "epozzy-pcb-metal-tag-36x13x27",
    "display_brand": "Epozzy",
    "category": "UHF RFID PCB Tag",
    "product_group": "RFID Label / Tag",
    "title_en": "Epozzy UHF PCB On-Metal RFID Tag 36×13×2.7 mm",
    "summary_en": "Rugged FR-4 PCB on-metal RFID tag in compact 36×13×2.7 mm format. IP68-rated with read range up to 8.5 m on metal, attachable via 3M adhesive or screws. Laser-printable surface for visual identification.",
    "feature_highlights_en": [
      "NXP UCode 7 – ISO/IEC 18000-6 Type-C (EPC Gen2)",
      "Read range up to 8.5 m on metal (FCC)",
      "IP68 – FR-4 PCB, attachable by 3M adhesive or screw, laser-printable"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "ISO/IEC 18000-6 Type-C (EPC Gen2)",
          "Integrated Circuit": "NXP UCode 7",
          "Operating Frequency": "860–960 MHz",
          "EPC Memory": "128 bit",
          "TID Memory": "96 bit",
          "User Memory": "32 bit",
          "Read Range (2W ERP FCC)": "8.5 m on metal"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Dimensions": "36 × 13 × 2.7 mm (L×W×T)",
          "Material": "FR-4",
          "Installation": "3M adhesive or screw",
          "Customization": "Logo, serial number, barcode laser printing",
          "Package": "200 pcs / bag"
        }
      },
      {
        "name": "ENVIRONMENTAL RESISTANCE",
        "items": {
          "Operating Temperature": "-40°C to +85°C",
          "IP Classification": "IP68",
          "Designed Lifetime": "Over 5 years in outdoor conditions"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2021/11/36x13x2.7-metal-etiketi-600x400.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Epozzy PCB On-Metal Tag 36x13x2.7 mm Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2021/12/epozzy-uhf-pcb-metal-rfid-etiketi-36x13x2.7mm-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/rfid-pcb-metal-etiketi/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "epozzy-uhf-label-100x150",
    "display_brand": "Epozzy",
    "category": "UHF RFID Label",
    "product_group": "RFID Label / Tag",
    "title_en": "Epozzy White Wet UHF RFID Label 100×150 mm",
    "summary_en": "Large-format 100×150 mm passive UHF RFID label with NXP UCode 9 chip and H47 dual dipole antenna. Designed for clothing, asset management and logistics applications requiring a standard shipping label size.",
    "feature_highlights_en": [
      "NXP UCode 9 – EPC C1G2 (ISO18000-6C), 860–960 MHz",
      "Read range up to 4 m on metal (ETSI) / 4.5 m off-metal (FCC)",
      "IP68 – PET/Aluminum/Foam adhesive label, 100×150 mm format"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "EPC C1G2 (ISO18000-6C)",
          "Integrated Circuit": "NXP UCode 9",
          "Operating Frequency": "860–960 MHz",
          "Read Range – on metal (ETSI)": "Up to 4 m",
          "Read Range – off metal (FCC)": "Up to 4.5 m"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Label Size": "100 × 150 mm",
          "Inlay Dimensions": "64 × 6 × 1 mm",
          "Material": "PET / Aluminum Foil / Foam",
          "Installation": "Adhesive"
        }
      },
      {
        "name": "ENVIRONMENTAL RESISTANCE",
        "items": {
          "Operating Temperature": "-40°C to +85°C",
          "IP Classification": "IP68"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2021/11/epozzy-passive-uhf-rfid-tag-100x150-p-600x400.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Epozzy UHF RFID Label 100x150 mm Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2021/12/epozzy-pasif-uhf-rfid-label-tag-100x150mm-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/rfid-etiketi-100x150-mm/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "epozzy-uhf-label-4x2",
    "display_brand": "Epozzy",
    "category": "UHF RFID Label",
    "product_group": "RFID Label / Tag",
    "title_en": "Epozzy UHF RFID Label 4×2 Inch",
    "summary_en": "Passive UHF RFID label in standard 4×2 inch (101×51 mm) format with NXP UCode 8 IC. Performs on both metal and non-metal surfaces including cardboard, plastic and wood.",
    "feature_highlights_en": [
      "NXP UCode 8 – EPC C1G2 (ISO18000-6C), 860–960 MHz",
      "Read range up to 4 m on metal (ETSI) / 4.5 m off-metal (FCC)",
      "IP68 – standard 4×2 inch format, works on metal and non-metal"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "EPC C1G2 (ISO18000-6C)",
          "Integrated Circuit": "NXP UCode 8",
          "Operating Frequency": "860–960 MHz",
          "Read Range – on metal (ETSI)": "Up to 4 m",
          "Read Range – off metal (FCC)": "Up to 4.5 m",
          "Applicable Surfaces": "Metal, plastic, cardboard, wood"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Dimensions": "101.6 × 50.8 mm (4×2 in)",
          "Material": "PET / Aluminum Foil / Foam",
          "Installation": "Adhesive"
        }
      },
      {
        "name": "ENVIRONMENTAL RESISTANCE",
        "items": {
          "Operating Temperature": "-40°C to +85°C",
          "IP Classification": "IP68"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2021/11/epozzy-passive-uhf-rfid-tag-101x50-p-600x400.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Epozzy UHF RFID Label 4x2 Inch Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2022/02/epozzy-pasif-uhf-rfid-label-tag-101x50mm-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/rfid-etiketi-4x2/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "epozzy-nfc-on-metal-30x30",
    "display_brand": "Epozzy",
    "category": "NFC On-Metal Label",
    "product_group": "RFID Label / Tag",
    "title_en": "Epozzy NFC On-Metal RFID Tag 30×30 mm",
    "summary_en": "Compact 30×30 mm NFC tag designed to work directly on metallic surfaces. ISO 14443A compliant with NXP Ntag 213/215/216 chip, suitable for asset tagging and industrial identification on metal.",
    "feature_highlights_en": [
      "NXP Ntag 213/215/216 – ISO14443A, 13.56 MHz",
      "Works directly on metal surfaces",
      "30×30 mm compact form – Paper/PET adhesive label"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "ISO14443A",
          "Integrated Circuit": "NXP Ntag 213 / 215 / 216",
          "Operating Frequency": "13.56 MHz",
          "Applicable Surfaces": "On-metal"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Dimensions": "30 × 30 mm",
          "Material": "Paper / PET",
          "Installation": "Adhesive"
        }
      },
      {
        "name": "ENVIRONMENTAL RESISTANCE",
        "items": {
          "Operating Temperature": "-20°C to +75°C"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/07/epozzy-metal-ustu-nfc-etiket-600x400.webp",
    "details_break_before": true,
    "source": {
      "source_type": "product_page",
      "source_name": "Epozzy NFC On-Metal Tag 30x30 mm",
      "source_url": "",
      "product_url": "https://www.altis.com.tr/store/tr/urun/metal-ustu-nfc-rfid-etiketi-30x30-mm/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "epozzy-ntag213-d25",
    "display_brand": "Epozzy",
    "category": "NFC Label / Sticker",
    "product_group": "RFID Label / Tag",
    "title_en": "Epozzy NFC Tag 25 mm Diameter",
    "summary_en": "25 mm diameter ICODE NFC dry inlay / label tag operating at 13.56 MHz. ISO 15693 compliant with NXP ICODE SLI/SLIX chip family, suitable for logistics, library, IT asset management and retail applications.",
    "feature_highlights_en": [
      "NXP ICODE SLI/SLIX – ISO15693, 13.56 MHz",
      "Read range 0–10 cm – connects Android and iOS smartphones",
      "D=25 mm dry inlay, D=30 mm wet label available"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "ISO15693",
          "IC Options": "NXP ICODE SLI / SLIX / SLIX-L / SLIX-S",
          "Operating Frequency": "13.56 MHz",
          "Memory": "1024 / 1024 / 512 / 2048 bit",
          "Read Range": "0–10 cm"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Antenna Size": "D=25 mm",
          "Wet Inlay / Label Size": "D=30 mm (customized)",
          "Label Material": "Coated Paper / PET / Fragile Paper",
          "Delivery Format": "Reel"
        }
      },
      {
        "name": "ENVIRONMENTAL RESISTANCE",
        "items": {
          "Operating Temperature": "-20°C to +75°C"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2021/11/epozzy-nfc-ntag-rfid-d25-600x400.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Epozzy D=25mm ICODE NFC Dry Inlay Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2021/12/epozzy-d25mm-ntag-nfc-rfid-hf-seffaf-etiket-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/nfc-etiketi-ntag213-25-mm-cap/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "epozzy-rfid-tire-tag-patch",
    "display_brand": "Epozzy",
    "category": "UHF RFID Tire Tag",
    "product_group": "RFID Label / Tag",
    "title_en": "Epozzy UHF RFID Tire Tag (Patch)",
    "summary_en": "Durable rubber RFID patch tag designed to be vulcanized onto the sidewall of finished tires. Provides lifetime tire identification with unique ID to prevent theft and cloning for buses, trucks and trailers.",
    "feature_highlights_en": [
      "Alien Higgs-3 – EPC C1G2 (ISO18000-6C), 860–960 MHz",
      "Attached by vulcanization – lasts the lifetime of the tire",
      "IP68 – rubber construction, 95×35×2 mm, 120 pcs/box"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "EPC C1G2 (ISO18000-6C)",
          "Integrated Circuit": "Alien Higgs-3",
          "Operating Frequency": "860–960 MHz",
          "EPC Memory": "96 bit",
          "User Memory": "512 bit",
          "Read Range (2W ERP FCC)": "1.08 m"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Dimensions": "95 × 35 × 2 mm",
          "Material": "Rubber",
          "Weight": "5.0 g",
          "Installation": "Vulcanizing agent (outside tire sidewall)",
          "Package": "120 pcs / box"
        }
      },
      {
        "name": "ENVIRONMENTAL RESISTANCE",
        "items": {
          "Operating Temperature": "-40°C to +85°C",
          "IP Classification": "IP68"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2021/11/epozzy-uhf-rfid-tire-tag-p-600x400.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Epozzy UHF RFID Tire Tag Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2021/12/epozzy-uhf-tire-rfid-tag-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/epozzy-rfid-lastik-etiketi-yama/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "epozzy-round-head-silicone-wristband-hf",
    "display_brand": "Epozzy",
    "category": "NFC Silicone Wristband",
    "product_group": "RFID Label / Tag",
    "title_en": "Epozzy NFC Silicone Wristband (Round Head, HF)",
    "summary_en": "Waterproof NFC silicone wristband with round head design, operating at 13.56 MHz with NTAG213 chip. Designed for theme parks, swimming pools, access control, events and healthcare wearable identification.",
    "feature_highlights_en": [
      "NTAG213 – ISO14443/15693, 13.56 MHz NFC",
      "Read range 0–10 cm – compatible with iOS and Android",
      "IP68 waterproof silicone – D=50 mm, color options available"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "ISO14443 / 15693",
          "Integrated Circuit": "NTAG213",
          "Operating Frequency": "13.56 MHz",
          "Memory": "512 bits (8k)",
          "Reading Range": "0–10 cm",
          "Data Storage": "> 10 years"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Dimensions": "D=50 mm",
          "Material": "Silicone",
          "Color Options": "Red, blue, yellow and custom",
          "Options": "Numbering, encoding, logo printing"
        }
      },
      {
        "name": "ENVIRONMENTAL RESISTANCE",
        "items": {
          "Operating Temperature": "-40°C to +100°C",
          "IP Classification": "IP68"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2021/11/epozzy-uhf-silicone-wristbandbracelet-tag-p-600x400.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Epozzy NFC Silicone Wristband Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2022/02/epozzy-nfc-silikon-bileklik-rfid-etiketi-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/yuvarlak-baslikli-silikon-rfid-bileklik-hf-ntag213/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "epozzy-round-head-silicone-wristband-uhf",
    "display_brand": "Epozzy",
    "category": "UHF Silicone Wristband",
    "product_group": "RFID Label / Tag",
    "title_en": "Epozzy UHF Silicone Wristband (Round Head)",
    "summary_en": "UHF RFID silicone wristband with round head design, operating at 860–960 MHz with up to 1 m read range. IP68-rated waterproof wristband for access control, theme parks, events and leisure center applications.",
    "feature_highlights_en": [
      "IC options: Alien Higgs3 / Monza4QT / Impinj M5 – 860–960 MHz",
      "Read range 0.5–1 m – IP68 waterproof",
      "Flexible silicone – D=72/65 mm, multiple color options"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "EPC C1G2 (ISO18000-6C)",
          "IC Options": "Alien Higgs3 / Monza4QT / Impinj M5",
          "Operating Frequency": "860–960 MHz",
          "Memory": "96–512 bit",
          "Read Range (2W ERP FCC)": "0.5–1 m"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Dimensions": "D=72 mm / D=65 mm",
          "Material": "Silicone",
          "Color Options": "Blue, yellow, red and custom"
        }
      },
      {
        "name": "ENVIRONMENTAL RESISTANCE",
        "items": {
          "Operating Temperature": "-40°C to +100°C",
          "IP Classification": "IP68"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2021/11/epozzy-uhf-silicone-wristbandbracelet-tag-p-600x400.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Epozzy UHF Silicone Wristband Round Head Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2021/12/epozzy-yuvarlak-baslikli-silikon-bileklik-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/epozzy-yuvarlak-baslikli-silikon-uhf-rfid-bileklik/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "epozzy-silicone-rfid-wristband",
    "display_brand": "Epozzy",
    "category": "UHF Silicone Wristband",
    "product_group": "RFID Label / Tag",
    "title_en": "Epozzy UHF Silicone Spring Wristband",
    "summary_en": "UHF RFID silicone wristband with spring mechanism, operating at 860–960 MHz with up to 1 m read range. IP68-rated for access control, pools, theme parks, events and healthcare applications.",
    "feature_highlights_en": [
      "IC options: Alien Higgs3 / Monza4QT / Impinj M5 – 860–960 MHz",
      "Read range 0.5–1 m – IP68 waterproof, -40°C to +120°C",
      "Silicone + spring mechanism – D=72×6 mm, color options"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "EPC C1G2 (ISO18000-6C)",
          "IC Options": "Alien Higgs3 / Monza4QT / Impinj M5",
          "Operating Frequency": "860–960 MHz",
          "Memory": "96–512 bit",
          "Read Range (2W ERP FCC)": "0.5–1 m"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Dimensions": "D=72×6 mm",
          "Material": "Silicone, Spring",
          "Color Options": "Red, blue, black and custom"
        }
      },
      {
        "name": "ENVIRONMENTAL RESISTANCE",
        "items": {
          "Operating Temperature": "-40°C to +120°C",
          "IP Classification": "IP68"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2021/11/epozzy-uhf-rfid-silicone-spring-wristband-tag-gr-600x400.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Epozzy Silicone Spring Wristband Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2021/12/epozzy-silikon-rfid-bileklik-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/epozzy-silikon-rfid-bileklik/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "epozzy-silicone-rfid-wristband-classic",
    "display_brand": "Epozzy",
    "category": "UHF Silicone Wristband",
    "product_group": "RFID Label / Tag",
    "title_en": "Epozzy UHF Remote Distance Silicone Wristband",
    "summary_en": "UHF RFID adjustable silicone wristband with extended 2 m read range for hands-free access control, theme parks and leisure center applications. IP68-rated, operating at 860–960 MHz.",
    "feature_highlights_en": [
      "IC options: Alien Higgs3 / Monza4QT / Impinj M5 – 860–960 MHz",
      "Extended read range up to 2 m (FCC)",
      "IP68 – adjustable silicone, 258×21×10 mm, color options"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "EPC C1G2 (ISO18000-6C)",
          "IC Options": "Alien Higgs3 / Monza4QT / Impinj M5",
          "Operating Frequency": "860–960 MHz",
          "Memory": "512 bit",
          "Read Range (2W ERP FCC)": "2 m"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Dimensions": "258 × 21 × 10 mm",
          "Material": "Silicone",
          "Color Options": "Blue, yellow, red and custom"
        }
      },
      {
        "name": "ENVIRONMENTAL RESISTANCE",
        "items": {
          "Operating Temperature": "-40°C to +120°C",
          "IP Classification": "IP68"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2021/11/epozzy-uhf-remote-distance-silicone-rfid-wristband-tag-p-600x400.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Epozzy UHF Remote Distance Silicone Wristband Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2021/12/epozzy-uzak-menzilli-uhf-rfid-bileklik-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/silikon-rfid-bileklik/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "epozzy-fabric-tag",
    "display_brand": "Epozzy",
    "category": "UHF RFID Fabric Tag",
    "product_group": "RFID Label / Tag",
    "title_en": "Epozzy UHF RFID Fabric Tag",
    "summary_en": "Sewable UHF RFID fabric tag in 50×35 mm format with Impinj Monza R6 IC. Designed for textile and garment inventory tracking, anti-counterfeiting and supply chain management with sew-in installation.",
    "feature_highlights_en": [
      "Impinj Monza R6 – EPC C1G2 (ISO18000-6C), 860–960 MHz",
      "Read range 3.0–6.0 m (FCC/ETSI) – data storage > 10 years",
      "Sewable fabric – 50×35 mm, custom logo/barcode printing"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "EPC C1G2 (ISO18000-6C)",
          "Integrated Circuit": "Impinj Monza R6",
          "Operating Frequency": "902–928 MHz (FCC) / 865–868 MHz (ETSI)",
          "EPC Memory": "96 bit",
          "Read Range": "3.0–6.0 m"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Dimensions": "50 × 35 mm",
          "Material": "Fabric",
          "Installation": "Sewing",
          "Customization": "Company logo, barcode, number printing & encoding"
        }
      },
      {
        "name": "ENVIRONMENTAL RESISTANCE",
        "items": {
          "Operating Temperature": "-20°C to +120°C",
          "Humidity": "98% non-condensing",
          "Data Storage": "> 10 years"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/rfid-tekstil-etiketi-50x35-1-600x603.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Epozzy UHF Fabric Tag Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2022/08/epozzy-fabric-tag-kumas-etiketi-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/uhf-rfid-kumas-etiketi/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "epozzy-jewellery-tag-standard",
    "display_brand": "Epozzy",
    "category": "UHF RFID Jewellery Label",
    "product_group": "RFID Label / Tag",
    "title_en": "Epozzy UHF RFID Jewellery Label",
    "summary_en": "Slim 68×13 mm UHF RFID PET adhesive label for jewellery, watch, glasses and bag tracking. NXP UCode 8 IC with read range up to 8 m (FCC), designed for retail inventory, anti-counterfeiting and warehouse management.",
    "feature_highlights_en": [
      "NXP UCode 8 – EPC C1G2 (ISO18000-6C), 860–960 MHz",
      "Read range: 8 m (FCC) / 3.5 m (ETSI)",
      "IP68 – slim 68×13 mm PET label, optimized for metallic-coated items"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "EPC C1G2 (ISO18000-6C)",
          "Integrated Circuit": "NXP UCode 8",
          "Operating Frequency": "860–960 MHz",
          "EPC Memory": "128 bit",
          "TID Memory": "96 bit",
          "User Memory": "32 bit",
          "Read Range – FCC (2W ERP)": "8 m",
          "Read Range – ETSI (2W ERP)": "3.5 m"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Dimensions": "68 × 13 mm",
          "Material": "PET",
          "Installation": "Adhesive",
          "Customization": "Logo, barcode / QR code, number printing"
        }
      },
      {
        "name": "ENVIRONMENTAL RESISTANCE",
        "items": {
          "Operating Temperature": "-40°C to +85°C",
          "IP Classification": "IP68"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2021/11/epozzy-jewellery-kuyumcu-rfid-tag-p-600x400.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Epozzy UHF PET Jewellery Label Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2021/12/epozzy-uhf-rfid-kuyumcu-jewellery-etiketi-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/rfid-kuyumcu-etiketi-standart-tip/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "epozzy-pin-tag-apparel",
    "display_brand": "Epozzy",
    "category": "UHF RFID Pin Tag",
    "product_group": "RFID Label / Tag",
    "title_en": "Epozzy RFID Pin Tag (Apparel)",
    "summary_en": "Reusable UHF RFID pin tag with metal piercing pin, replacing traditional EAS security tags in apparel retail. NXP UCode 9 chip, designed for garment tracking, inventory management and anti-theft protection.",
    "feature_highlights_en": [
      "NXP UCode 9 – EPC C1G2, 860–960 MHz",
      "Replaces EAS hard tags – reusable pin attachment",
      "ABS plastic – anti-theft, inventory counting, brand protection"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "EPC Gen 2 (ISO18000-6C)",
          "Integrated Circuit": "NXP UCode 9",
          "Operating Frequency": "860–960 MHz"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Material": "ABS plastic with rough coating",
          "Installation": "Metal piercing pin",
          "Applicable Use": "Apparel, retail garments"
        }
      },
      {
        "name": "APPLICATIONS",
        "items": {
          "Primary Use": "Retail garment tagging and anti-theft",
          "Industries": "Apparel, retail",
          "Features": "Inventory tracking, anti-shrink, brand anti-counterfeiting"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/07/epozzy-rfid-pin-tag-600x400.webp",
    "details_break_before": true,
    "source": {
      "source_type": "product_page",
      "source_name": "Epozzy RFID Pin Tag Apparel",
      "source_url": "",
      "product_url": "https://www.altis.com.tr/store/tr/urun/pin-tag-rfid-giysi-etiketi/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "epozzy-flag-tag",
    "display_brand": "Epozzy",
    "category": "UHF RFID Flag Tag",
    "product_group": "RFID Label / Tag",
    "title_en": "Epozzy UHF RFID Flag Tag",
    "summary_en": "UHF RFID flag tag designed for tracking liquid-filled containers, cardboard boxes and general products. NXP UCode 9 chip with EPC C1G2 protocol, suitable for logistics and supply chain product identification.",
    "feature_highlights_en": [
      "NXP UCode 9 – EPC C1G2, 860–960 MHz",
      "Flag form factor – suitable for liquid-filled containers and cardboard",
      "General-purpose product tracking for logistics and supply chain"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "EPC C1G2 (ISO18000-6C)",
          "Integrated Circuit": "NXP UCode 9",
          "Operating Frequency": "860–960 MHz"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Form Factor": "Flag tag",
          "Applicable Surfaces": "Non-metal, liquid containers, cardboard"
        }
      },
      {
        "name": "APPLICATIONS",
        "items": {
          "Primary Use": "Product tracking on liquid-filled containers and cardboard",
          "Industries": "Logistics, supply chain, FMCG"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2021/11/epozzy-flag-tag-bayrak-etiketi-1.webp",
    "details_break_before": true,
    "source": {
      "source_type": "product_page",
      "source_name": "Epozzy RFID Flag Tag",
      "source_url": "",
      "product_url": "https://www.altis.com.tr/store/tr/urun/rfid-bayrak-etiketi/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "epozzy-high-temp-metal-tag-48x35x7",
    "display_brand": "Epozzy",
    "category": "UHF RFID High Temperature Tag",
    "product_group": "RFID Label / Tag",
    "title_en": "Epozzy UHF High Temperature Metal Tag 48×35×7 mm",
    "summary_en": "IP68 waterproof UHF RFID tag rated for operating temperatures up to 225°C, designed for metallic asset tracking in extreme environments including medical sterilization, surgical instruments and mining.",
    "feature_highlights_en": [
      "NXP UCode 9 – EPC C1G2 (ISO18000-6C), 860–960 MHz",
      "High temperature rated – up to 225°C operating",
      "IP68 – read range up to 10 m on metal"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "EPC C1G2 (ISO18000-6C)",
          "Integrated Circuit": "NXP UCode 9",
          "Operating Frequency": "860–960 MHz",
          "Read Range": "Up to 10 m on metal"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Dimensions": "48 × 35 × 7 mm",
          "Material": "PET / Aluminum Foil / Foam",
          "Installation": "Adhesive"
        }
      },
      {
        "name": "ENVIRONMENTAL RESISTANCE",
        "items": {
          "Operating Temperature": "-40°C to +225°C",
          "IP Classification": "IP68"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/rfid-yuksek-sicakliga-dayanikli-metal-ustu-etiketi-48x35x7-mm-p-1.webp",
    "details_break_before": true,
    "source": {
      "source_type": "product_page",
      "source_name": "Epozzy High Temperature Metal Tag 48x35x7 mm",
      "source_url": "",
      "product_url": "https://www.altis.com.tr/store/tr/urun/rfid-yuksek-sicaklik-etiketi/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "epozzy-pcb-metal-tag-ht-48x35x7",
    "display_brand": "Epozzy",
    "category": "UHF RFID High Temperature Tag",
    "product_group": "RFID Label / Tag",
    "title_en": "Epozzy UHF High Temperature PCB Metal Tag 48×35×7 mm",
    "summary_en": "IP68 waterproof high-temperature PCB RFID tag operating up to 225°C for metallic asset tracking in medical, surgical and industrial environments. Read range up to 4 m on metal (ETSI).",
    "feature_highlights_en": [
      "NXP UCode 9 – EPC C1G2 (ISO18000-6C), 860–960 MHz",
      "High temperature rated – up to 225°C operating",
      "IP68 – PCB construction, read range up to 4 m on metal"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "EPC C1G2 (ISO18000-6C)",
          "Integrated Circuit": "NXP UCode 9",
          "Operating Frequency": "860–960 MHz",
          "Read Range – on metal (ETSI)": "Up to 4 m"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Dimensions": "48 × 35 × 7 mm",
          "Material": "PET / Aluminum Foil / Foam",
          "Installation": "Adhesive"
        }
      },
      {
        "name": "ENVIRONMENTAL RESISTANCE",
        "items": {
          "Operating Temperature": "-40°C to +225°C",
          "IP Classification": "IP68"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/rfid-yuksek-sicakliga-dayanikli-metal-ustu-etiketi-48x35x7-mm-p-1-600x603.webp",
    "details_break_before": true,
    "source": {
      "source_type": "product_page",
      "source_name": "Epozzy High Temperature PCB Metal Tag 48x35x7 mm",
      "source_url": "",
      "product_url": "https://www.altis.com.tr/store/tr/urun/rfid-yuksek-sicakliga-dayanikli-pcb-metal-ustu-etiket-48x35x7-mm/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "epozzy-tamper-proof-on-metal",
    "display_brand": "Epozzy",
    "category": "UHF RFID Tamper-Proof Tag",
    "product_group": "RFID Label / Tag",
    "title_en": "Epozzy Tamper-Proof On-Metal RFID Tag",
    "summary_en": "UHF RFID tamper-proof tag for IT and industrial metal asset security. NXP UCode 9 chip, detects any removal attempt, providing an additional layer of security for fixed asset tracking.",
    "feature_highlights_en": [
      "NXP UCode 9 – EPC Gen 2 (ISO18000-6C), 860–960 MHz",
      "Tamper-proof – detects tag removal from metal surface",
      "Read range up to 3 m – 60×25×1 mm adhesive format"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "EPC Gen 2 (ISO18000-6C)",
          "Integrated Circuit": "NXP UCode 9",
          "Operating Frequency": "860–960 MHz",
          "Read Range": "Up to 3 m"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Dimensions": "60 × 25 × 1 mm",
          "Material": "Metal surface",
          "Installation": "Adhesive – tamper-evident on removal"
        }
      },
      {
        "name": "APPLICATIONS",
        "items": {
          "Primary Use": "IT asset security, industrial metal asset tracking",
          "Security Feature": "Tamper detection on removal"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/10/tamper-proof-metal-ustu-rfid-etiketi-p-1.webp",
    "details_break_before": true,
    "source": {
      "source_type": "product_page",
      "source_name": "Epozzy Tamper Proof On-Metal RFID Tag",
      "source_url": "",
      "product_url": "https://www.altis.com.tr/store/tr/urun/tamper-proof-metal-ustu-rfid-etiketi/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "epozzy-washable-textile-tag",
    "display_brand": "Epozzy",
    "category": "UHF RFID Laundry Tag",
    "product_group": "RFID Label / Tag",
    "title_en": "Epozzy Washable UHF RFID Laundry Tag",
    "summary_en": "Flexible fabric UHF RFID laundry tag in 70×15 mm format with NXP UCODE 8 IC. Withstands 200 wash cycles, rated for detergent, bleach and alkali exposure. Read range up to 10.5 m (FCC) for hospital, hotel and linen management.",
    "feature_highlights_en": [
      "NXP UCODE 8 – ISO/IEC 18000-6C EPC Gen2, 860–960 MHz",
      "Read range 10.5 m (FCC) / 7.5 m (ETSI) – sew or insert installation",
      "200 wash cycles – chemical resistant to detergent, bleach and alkali"
    ],
    "sections": [
      {
        "name": "RFID SPECIFICATION",
        "items": {
          "Protocol": "ISO/IEC 18000-6 TypeC (EPC Gen2)",
          "Integrated Circuit": "NXP UCODE 8",
          "Operating Frequency": "860–960 MHz",
          "EPC Memory": "128 bit",
          "TID Memory": "96 bit",
          "Read Range – FCC (2W ERP)": "10.5 m",
          "Read Range – ETSI (2W ERP)": "7.5 m"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Dimensions": "70 × 15 mm",
          "Weight": "0.6 g",
          "Material": "Fabric Base",
          "Installation": "Sewing or Insert",
          "Estimated Lifetime": "200 washing cycles or 3 years"
        }
      },
      {
        "name": "ENVIRONMENTAL RESISTANCE",
        "items": {
          "Operating Temperature": "-20°C to +50°C",
          "Chemical Resistance": "Detergent, Softener, Bleach (Oxygen/Chlorine), Alkali",
          "Water Extraction Pressure": "60 bar"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/tekstil-600x400.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Epozzy Washable UHF RFID Laundry Tag Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/yikanabilir-rfid-tekstil-etiketi-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/yikanabilir-rfid-tekstil-etiketi/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "omni-id-adept-400-5-layer-gs",
    "display_brand": "Omni-ID",
    "category": "UHF RFID Industrial Tag",
    "product_group": "RFID Label / Tag",
    "title_en": "Omni-ID Adept 400 (5-Layer) GS",
    "summary_en": "Rugged 5-layer stainless steel UHF RFID tag for attachment to pipes and fixed assets in remote production, extraction and processing facilities. Global frequency, MIL-STD-810 G rated with optional ATEX/IECEx certification.",
    "feature_highlights_en": [
      "Impinj Monza 4QT – EPC Class 1 Gen2v2, 860–930 MHz (GS)",
      "Read range: 4 m fixed / 2 m handheld – optimized for metal",
      "MIL-STD-810 G, IP68 – steel strap or weld attachment, ATEX option"
    ],
    "sections": [
      {
        "name": "RF SPECIFICATION",
        "items": {
          "Radio Protocol": "EPC Class 1 Gen2v2",
          "Frequency Range": "860–930 MHz (GS)",
          "IC Type (Chip)": "Impinj Monza 4QT",
          "EPC Memory": "128 bits",
          "User Memory": "512 bits",
          "Unique TID": "48 bits",
          "Read Range – Fixed Reader": "Up to 4 m / 13.1 ft",
          "Read Range – Handheld Reader": "Up to 2 m / 6.5 ft",
          "Optimized For": "Metal"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Size": "45 × 30.5 × 15.5 mm / 1.77 × 1.20 × 0.61 in",
          "Material": "Stainless steel with ceramic core",
          "Layers": "5 layers",
          "Weight": "94 g",
          "Attachment": "Steel strap or welded"
        }
      },
      {
        "name": "ENVIRONMENTAL SPECIFICATION",
        "items": {
          "Operating Temperature": "-20°C to +65°C",
          "IP Rating": "IP68",
          "Shock & Vibration": "MIL-STD-810 G",
          "Certifications": "CE, RoHS; optional ATEX/IECEx, US&Canada C1D1/D2"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/omni-id-Adept-400-5-layer-gs.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Omni-ID Adept 400 (5-Layer) GS Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/omni-id-adept-400-5-layer-gs-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/omni-id-adept-400-5-katman-gs/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "omni-id-adept-400-5-layer-us",
    "display_brand": "Omni-ID",
    "category": "UHF RFID Industrial Tag",
    "product_group": "RFID Label / Tag",
    "title_en": "Omni-ID Adept 400 (5-Layer) US",
    "summary_en": "Rugged 5-layer stainless steel UHF RFID tag for pipes and fixed assets in harsh industrial facilities. US band (902–928 MHz) with Alien Higgs 3 IC, MIL-STD-810 G and optional ATEX/IECEx certification.",
    "feature_highlights_en": [
      "Alien Higgs 3 – EPC Class 1 Gen2v2, 902–928 MHz (US)",
      "Read range: 4–6 m fixed / 1–3 m handheld – optimized for metal",
      "MIL-STD-810 G, IP68 – steel strap or weld attachment, ATEX option"
    ],
    "sections": [
      {
        "name": "RF SPECIFICATION",
        "items": {
          "Radio Protocol": "EPC Class 1 Gen2v2",
          "Frequency Range": "902–928 MHz (US)",
          "IC Type (Chip)": "Alien Higgs 3",
          "EPC Memory": "96 bits",
          "User Memory": "512 bits",
          "Unique TID": "64 bits",
          "Read Range – Fixed Reader": "4–6 m / 13–20 ft",
          "Read Range – Handheld Reader": "1–3 m / 10 ft",
          "Optimized For": "Metal"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Size": "36 × 25 × 13.5 mm / 1.42 × 0.98 × 0.53 in",
          "Material": "Stainless steel with ceramic core",
          "Layers": "5 layers",
          "Weight": "58 g",
          "Attachment": "Steel strap or welded"
        }
      },
      {
        "name": "ENVIRONMENTAL SPECIFICATION",
        "items": {
          "Operating Temperature": "-20°C to +65°C",
          "IP Rating": "IP68",
          "Shock & Vibration": "MIL-STD-810 G",
          "Certifications": "CE, RoHS; optional ATEX/IECEx, US&Canada C1D1/D2"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/Adept-400-5-layer-us-600x400.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Omni-ID Adept 400 (5-Layer) US Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/omni-id-adept-400-5-layer-us-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/omni-id-adept-400-5-katman-us/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "omni-id-adept-500-gs",
    "display_brand": "Omni-ID",
    "category": "UHF RFID Hard Tag",
    "product_group": "RFID Label / Tag",
    "title_en": "Omni-ID Adept 500 GS",
    "summary_en": "Small circular UHF hard tag designed for permanent attachment to the shoulder of industrial gas cylinders and beverage kegs. Global frequency, Monza R6-P IC with exceptional 12 m fixed read range.",
    "feature_highlights_en": [
      "Impinj Monza R6-P – EPC Class 1 Gen2v2, 860–930 MHz (GS)",
      "Read range: 12 m fixed / 5 m handheld – optimized for metal",
      "IP68, MIL-STD-810 F – circular 37×37 mm, adhesive attachment"
    ],
    "sections": [
      {
        "name": "RF SPECIFICATION",
        "items": {
          "Radio Protocol": "EPC Class 1 Gen2v2",
          "Frequency Range": "860–930 MHz (GS)",
          "IC Type (Chip)": "Impinj Monza R6-P",
          "EPC Memory": "128 (96) bits",
          "User Memory": "32 (64) bits",
          "Unique TID": "48 bits",
          "Read Range – Fixed Reader": "Up to 12.0 m / 39.4 ft",
          "Read Range – Handheld Reader": "Up to 5 m / 16.4 ft",
          "Material Compatibility": "Metal"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Size": "37 × 37 × 11.5 mm / 1.46 × 1.46 × 0.45 in",
          "Material": "Durable thermoplastic material",
          "Weight": "9.8 g",
          "Attachment": "Adhesive (standard)"
        }
      },
      {
        "name": "ENVIRONMENTAL SPECIFICATION",
        "items": {
          "Operating Temperature": "-20°C to +65°C",
          "Short Term Max Temperature": "+75°C",
          "IP Rating": "IP68",
          "Shock & Vibration": "MIL-STD-810 F",
          "Certifications": "CE, RoHS; optional ATEX/IECEx, US&Canada C1D1/D2"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/omni-id-Adept-500-gs-600x400.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Omni-ID Adept 500 GS Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/omni-id-adept-500-gs-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/omni-id-adept-500-gs/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "omni-id-exo-400-ht",
    "display_brand": "Omni-ID",
    "category": "UHF RFID High Temperature Tag",
    "product_group": "RFID Label / Tag",
    "title_en": "Omni-ID Exo 400 HT",
    "summary_en": "Small form factor High Temperature UHF RFID tag optimized for metal, withstanding cycling temperatures up to +235°C. Ideal for healthcare sterilization, manufacturing and automotive paint processes.",
    "feature_highlights_en": [
      "Alien Higgs 3 – EPC Class 1 Gen2v2, EU 866–868 MHz / US 902–928 MHz",
      "Survives cycling up to +235°C – read range 4 m fixed / 2 m handheld",
      "IP68, MIL-STD-810 G – 37×14×7.5 mm, mechanical attachment (2×3mm holes)"
    ],
    "sections": [
      {
        "name": "RF SPECIFICATION",
        "items": {
          "Radio Protocol": "EPC Class 1 Gen2v2",
          "Frequency Range – EU": "866–868 MHz",
          "Frequency Range – US": "902–928 MHz",
          "IC Type (Chip)": "Alien Higgs 3",
          "EPC Memory": "96 bits",
          "User Memory": "512 bits",
          "Unique TID": "64 bits",
          "Read Range – Fixed Reader": "Up to 4 m / 13.1 ft",
          "Read Range – Handheld Reader": "Up to 2 m / 6.5 ft",
          "Material Compatibility": "Metal"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Size": "37 × 14 × 7.5 mm / 1.46 × 0.55 × 0.30 in",
          "Material": "Thermoplastic cover",
          "Weight": "5.7 g",
          "Attachment": "Mechanical (2 × 3mm holes, standard)"
        }
      },
      {
        "name": "ENVIRONMENTAL SPECIFICATION",
        "items": {
          "Operating Temperature": "-20°C to +85°C",
          "Max Temperature Exposure": "-20°C to +235°C",
          "IP Rating": "IP68",
          "Shock & Vibration": "MIL-STD-810 G",
          "Certifications": "CE, RoHS; optional ATEX/IECEx, US&Canada C1D1/D2"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/omni-id-Exo-400-HT-600x400.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Omni-ID Exo 400 HT Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/omni-id-exo-400-ht-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/omni-id-exo-400-ht/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "omni-id-fit-220-ht",
    "display_brand": "Omni-ID",
    "category": "UHF RFID High Temperature Tag",
    "product_group": "RFID Label / Tag",
    "title_en": "Omni-ID Fit 220 HT",
    "summary_en": "The smallest regional UHF RFID tag capable of surviving cycling to +235°C. At just 6.8×6.8 mm, the Fit 220 HT tracks very small metal assets including hand tools, IT assets and medical instruments.",
    "feature_highlights_en": [
      "Alien Higgs 3 – EPC Class 1 Gen2v2, EU/US dual frequency",
      "Smallest high-temp tag: 6.8×6.8×2.7 mm, 0.6 g",
      "Survives cycling to +235°C – IP68, MIL-STD-810 G"
    ],
    "sections": [
      {
        "name": "RF SPECIFICATION",
        "items": {
          "Radio Protocol": "EPC Class 1 Gen2v2",
          "Frequency Range – EU": "866–868 MHz",
          "Frequency Range – US": "902–928 MHz",
          "IC Type (Chip)": "Alien Higgs 3",
          "EPC Memory": "96 bits",
          "User Memory": "512 bits",
          "Unique TID": "64 bits",
          "Read Range – Fixed Reader": "Up to 2.2 m / 7.2 ft",
          "Read Range – Handheld Reader": "Up to 1.4 m / 4.6 ft",
          "Material Compatibility": "Metal"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Size": "6.8 × 6.8 × 2.7 mm (without IC bump)",
          "Material": "Painted Black",
          "Weight": "0.6 g",
          "Attachment": "Film Adhesive (included)"
        }
      },
      {
        "name": "ENVIRONMENTAL SPECIFICATION",
        "items": {
          "Operating Temperature": "-20°C to +85°C",
          "Max Temperature Exposure": "-20°C to +235°C",
          "IP Rating": "IP68",
          "Shock & Vibration": "MIL-STD-810 G",
          "Certifications": "CE, RoHS, Ex; optional ATEX/IECEx, US&Canada C1D1/D2"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/omni-id-Fit-220HT-600x400.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Omni-ID Fit 220 HT Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/omni-id-fit-220-ht-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/omni-id-fit-220-ht/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "omni-id-fit-400-ht",
    "display_brand": "Omni-ID",
    "category": "UHF RFID High Temperature Tag",
    "product_group": "RFID Label / Tag",
    "title_en": "Omni-ID Fit 400 HT",
    "summary_en": "Compact High Temperature UHF RFID tag surviving cycling to +235°C with up to 4 m read range. At 13.1×7.8 mm the Fit 400 HT tracks small metal hand tools, IT assets and autoclave/sterilization applications.",
    "feature_highlights_en": [
      "Alien Higgs 3 – EPC Class 1 Gen2v2, EU/US dual frequency",
      "Read range: 4 m fixed / 2 m handheld – 13.1×7.8×3.1 mm form factor",
      "Survives cycling to +235°C – IP68, CE, RoHS, Ex certified"
    ],
    "sections": [
      {
        "name": "RF SPECIFICATION",
        "items": {
          "Radio Protocol": "EPC Class 1 Gen2v2",
          "Frequency Range – EU": "866–868 MHz",
          "Frequency Range – US": "902–928 MHz",
          "IC Type (Chip)": "Alien Higgs 3",
          "EPC Memory": "96 bits",
          "User Memory": "512 bits",
          "Unique TID": "64 bits",
          "Read Range – Fixed Reader": "Up to 4 m / 13.1 ft",
          "Read Range – Handheld Reader": "Up to 2 m / 6.5 ft",
          "Material Compatibility": "Metal"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Size": "13.1 × 7.8 × 3.1 mm / 0.52 × 0.31 × 0.12 in",
          "Material": "Painted Black",
          "Weight": "1.6 g",
          "Attachment": "Film Adhesive (included)"
        }
      },
      {
        "name": "ENVIRONMENTAL SPECIFICATION",
        "items": {
          "Operating Temperature": "-20°C to +85°C",
          "Max Temperature Exposure": "-20°C to +235°C",
          "IP Rating": "IP68",
          "Certifications": "CE, RoHS, Ex; optional ATEX/IECEx, US&Canada C1D1/D2"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/omni-id-Fit-220HT-600x400.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Omni-ID Fit 400 HT Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/omni-id-fit-400-ht-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/omni-id-fit-400-ht/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "omni-id-fit-400p",
    "display_brand": "Omni-ID",
    "category": "UHF RFID Hard Tag",
    "product_group": "RFID Label / Tag",
    "title_en": "Omni-ID Fit 400P",
    "summary_en": "Compact ceramic UHF RFID tag optimized for non-metallic and plastic substrates. Compatible with heat shrink, potting and injection moulding finishing processes for covert embedding in plastic assets and tool handles.",
    "feature_highlights_en": [
      "EM 4124 – EPC Class 1 Gen2v2, EU/US dual frequency",
      "Read range: 4 m fixed / 2 m handheld – optimized for plastic/non-metal",
      "IP68, MIL-STD-810 G – ceramic 17.6×7.1×4.1 mm, covert tag"
    ],
    "sections": [
      {
        "name": "RF SPECIFICATION",
        "items": {
          "Radio Protocol": "EPC Class 1 Gen2v2",
          "Frequency Range – EU": "866–868 MHz",
          "Frequency Range – US": "902–928 MHz",
          "IC Type (Chip)": "EM 4124",
          "EPC Memory": "96 bits",
          "User Memory": "0 bits",
          "Unique TID": "64 bits",
          "Read Range – Fixed Reader": "Up to 4 m / 13.1 ft",
          "Read Range – Handheld Reader": "Up to 2 m / 6.5 ft",
          "Material Compatibility": "Plastic and non-metallic substrates"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Size": "17.6 × 7.1 × 4.1 mm / 0.70 × 0.28 × 0.16 in",
          "Material": "Ceramic",
          "Weight": "2.6 g",
          "Attachment": "Permanent liquid adhesive (not included) or film adhesive (option)"
        }
      },
      {
        "name": "ENVIRONMENTAL SPECIFICATION",
        "items": {
          "Operating Temperature": "-40°C to +75°C",
          "Application Temperature": "+18°C to +35°C",
          "IP Rating": "IP68",
          "Shock & Vibration": "MIL-STD-810 G",
          "Certifications": "CE, RoHS"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/omni-id-Fit-400P-600x400.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Omni-ID Fit 400P Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/omni-id-fit-400-p-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/omni-id-fit-400p/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "omni-id-iq-400p-ht",
    "display_brand": "Omni-ID",
    "category": "UHF RFID High Temperature Label",
    "product_group": "RFID Label / Tag",
    "title_en": "Omni-ID IQ 400P HT",
    "summary_en": "High temperature synthetic RFID hang tag rated to +230°C for single-use manufacturing applications. Global frequency with Alien Higgs 3 IC, optimized for thermal barcode printing in automotive paint and electronics processes.",
    "feature_highlights_en": [
      "Alien Higgs 3 – EPC Class 1 Gen2v2, 860–960 MHz (Global)",
      "Survives up to +230°C – read range 4 m fixed / 2 m handheld",
      "IP68 – 50×30×0.49 mm synthetic label, CE, RoHS, Ex certified"
    ],
    "sections": [
      {
        "name": "RF SPECIFICATION",
        "items": {
          "Radio Protocol": "EPC Class 1 Gen2v2",
          "Frequency Range": "860–960 MHz (Global)",
          "IC Type (Chip)": "Alien Higgs 3",
          "EPC Memory": "96 bits",
          "User Memory": "512 bits",
          "Unique TID": "64 bits",
          "Read Range – Fixed Reader": "Up to 4 m / 13.1 ft",
          "Read Range – Handheld Reader": "Up to 2 m / 6.5 ft",
          "Material Compatibility": "Plastic and non-metallic substrates"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Size": "50 × 30 × 0.49 mm / 1.97 × 1.18 × 0.02 in",
          "Material": "High Temperature Synthetic Label",
          "Weight": "0.51 g",
          "Attachment": "Holes for mechanical attachment",
          "Supply Format": "1 roll (1,020 labels)"
        }
      },
      {
        "name": "ENVIRONMENTAL SPECIFICATION",
        "items": {
          "Operating Temperature": "-40°C to +85°C",
          "Max Temperature Exposure": "-40°C to +230°C",
          "IP Rating": "IP68",
          "Certifications": "CE, RoHS, Ex; optional ATEX/IECEx"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/omni-id-IQ-400P-HT-600x400.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Omni-ID IQ 400P HT Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/omni-id-iq-400-p-ht-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/omni-id-iq-400p-ht/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "omni-id-iq-800p-ht",
    "display_brand": "Omni-ID",
    "category": "UHF RFID High Temperature Label",
    "product_group": "RFID Label / Tag",
    "title_en": "Omni-ID IQ 800P HT",
    "summary_en": "Large format high temperature synthetic RFID hang tag rated to +230°C. Global frequency with Impinj M730 IC delivering 12 m fixed read range for manufacturing, automotive paint and electronics single-use applications.",
    "feature_highlights_en": [
      "Impinj M730 – EPC Class 1 Gen2v2, 860–960 MHz (Global)",
      "Exceptional 12 m fixed / 6 m handheld read range",
      "Survives up to +230°C – IP68, MIL-STD-810 G, 85×55 mm label"
    ],
    "sections": [
      {
        "name": "RF SPECIFICATION",
        "items": {
          "Radio Protocol": "EPC Class 1 Gen2v2",
          "Frequency Range": "860–960 MHz (Global)",
          "IC Type (Chip)": "Impinj M730",
          "EPC Memory": "128 bits",
          "User Memory": "0 bits",
          "Unique TID": "48 bits",
          "Read Range – Fixed Reader": "Up to 12.0 m / 39.4 ft",
          "Read Range – Handheld Reader": "Up to 6.0 m / 19.7 ft",
          "Material Compatibility": "Plastic"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Size": "85 × 55 × 0.49 mm / 3.35 × 2.17 × 0.02 in",
          "Material": "High Temperature Synthetic Label",
          "Weight": "1.5 g",
          "Attachment": "Holes for mechanical attachment",
          "Supply Format": "1,020 labels (1 roll)"
        }
      },
      {
        "name": "ENVIRONMENTAL SPECIFICATION",
        "items": {
          "Operating Temperature": "-40°C to +85°C",
          "Max Temperature Exposure": "-40°C to +230°C",
          "IP Rating": "IP68",
          "Shock & Vibration": "MIL-STD-810 G",
          "Certifications": "CE, RoHS"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/omni-id-IQ-400P-HT.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Omni-ID IQ 800P HT Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/omni-id-iq-800-p-ht-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/omni-id-iq-800p-ht/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "omni-id-sense-asset-xl",
    "display_brand": "Omni-ID",
    "category": "IoT Asset Tracking Device",
    "product_group": "RFID Label / Tag",
    "title_en": "Omni-ID Sense Asset XL",
    "summary_en": "Ultra-rugged LoRaWAN + GPS IoT device for long-range outdoor asset tracking. 3-year battery life with GPS, accelerometer and temperature sensors for container management, ports, field operations and fleet tracking.",
    "feature_highlights_en": [
      "NFC + LoRaWAN – GPS, accelerometer and temperature sensors",
      "3-year battery life (3.2 Ah) – outdoor accuracy with LoRa",
      "IP68, MIL-STD-810 G – 113×58×24 mm rugged TPE construction"
    ],
    "sections": [
      {
        "name": "RF SPECIFICATION",
        "items": {
          "Radio Protocol": "NFC, LoRaWAN",
          "Supported Profiles": "868 MHz – Europe / 915 MHz – USA",
          "Sensors": "GPS, Accelerometer, Temperature",
          "Temperature Sensor Range": "-20°C to +60°C (±2°C accuracy)",
          "Battery Type": "Sealed prismatic battery, non-replaceable",
          "Battery Capacity": "3.2 Ah",
          "Battery Life": "3 years (DBR 24h, 1 movement/day)",
          "Default Beacon Rate": "1–254 hours",
          "Visual Indicator": "Bi-color LED"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Size": "113.4 × 58.3 × 24.3 mm / 4.46 × 2.30 × 0.96 in",
          "Material": "Overmoulded durable, shock resistant TPE",
          "Weight": "134 g",
          "Attachment": "Mechanical (std), cable tie, magnet, foam adhesive"
        }
      },
      {
        "name": "ENVIRONMENTAL SPECIFICATION",
        "items": {
          "Operating Temperature": "-20°C to +60°C",
          "IP Rating": "IP68",
          "Shock & Vibration": "MIL-STD-810 G",
          "Certifications": "CE, FCC, RoHS, NFC, LoRa"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/omni-id-sense-asset-xl-2-600x400.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Omni-ID Sense Asset XL Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/omni-id-sense-asset-xl-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/omni-id-sense-asset-xl/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "id": "omni-id-sense-shield",
    "display_brand": "Omni-ID",
    "category": "BLE Wearable Beacon",
    "product_group": "RFID Label / Tag",
    "title_en": "Omni-ID Sense Shield",
    "summary_en": "Wearable BLE beacon with Quuppa technology for sub-1-metre contact tracing and personnel tracking. Enables social distancing monitoring and worker safety alerts in warehouses, hospitals, ports and construction yards.",
    "feature_highlights_en": [
      "Bluetooth + NFC with Quuppa – sub-1-metre personnel tracking",
      "6-month battery life (CR2032) – audible alert on distance breach",
      "IP68 – 3 variants: lanyard, belt clip or watch strap"
    ],
    "sections": [
      {
        "name": "RF SPECIFICATION",
        "items": {
          "Radio Protocol": "Bluetooth, NFC",
          "Supported Profiles": "Quuppa",
          "Location Accuracy": "Sub 1 metre",
          "Battery Type": "Replaceable CR2032",
          "Battery Capacity": "225 mAh",
          "Battery Life": "6 months (10h moving/day + 14h stationary/day)",
          "Visual Indicator": "Bi-color LED"
        }
      },
      {
        "name": "PHYSICAL SPECIFICATION",
        "items": {
          "Size – Lanyard/Belt Clip": "50.1 × 44.5 × 13 mm",
          "Size – Watch Strap": "44.5 mm bezel",
          "Material": "2-part durable plastic case",
          "Attachment": "3 variants: lanyard, belt clip or watch strap"
        }
      },
      {
        "name": "ENVIRONMENTAL SPECIFICATION",
        "items": {
          "Operating Temperature": "-10°C to +60°C",
          "IP Rating": "IP68",
          "Certifications": "CE, FCC, RoHS, NFC, Bluetooth"
        }
      }
    ],
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/omni-id-sense-shield-600x400.webp",
    "details_break_before": true,
    "source": {
      "source_type": "pdf_extraction",
      "source_name": "Omni-ID Sense Shield Datasheet",
      "source_url": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/omni-id-sense-shield-datasheet.pdf",
      "product_url": "https://www.altis.com.tr/store/tr/urun/omni-id-sense-shield/",
      "last_updated": "2026-06-03"
    }
  },
  {
    "slug": "rfid-discovery-voyager-10040",
    "title": "RFID Discovery 10040",
    "brand": "RFID Discovery",
    "model": "10040",
    "sku": "10040",
    "subtitle": "VOYAGER-10040 RFID TAG/LABEL VARIATION",
    "shortDesc": "Aviation tracking and management",
    "description": "SKU: 10040. Supplier: RFID Discovery (Paragon ID). Category: VOYAGER-10040 RFID TAG/LABEL VARIATION. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: RFID Tag / Label. Description: Specialized RFID solution for Aviation applications, optimized for performance and durability.",
    "customerSummary": "VOYAGER-10040 RFID TAG/LABEL VARIATION | RFID Tag / Label | Applications: Aviation",
    "image": "https://www.rfiddiscovery.com/sites/default/files/styles/product_image/public/2022-03/RFID-Discovery-Logo.png",
    "datasheet": "",
    "productUrl": "https://www.rfiddiscovery.com/en-us/solutions/rfid",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Impinj M730",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "RFID Tag / Label",
    "sizeText": "100 x 40 mm",
    "material": "Standard",
    "fixedReadRange": "Standard",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP67",
    "applications": [
      "Aviation"
    ],
    "industries": [
      "Aviation"
    ],
    "tags": [
      "UHF",
      "RFID Tag / Label",
      "Non Metal",
      "Impinj M730",
      "Aviation"
    ]
  },
  {
    "slug": "rfid-discovery-pioneer-1515",
    "title": "RFID Discovery 1515",
    "brand": "RFID Discovery",
    "model": "1515",
    "sku": "1515",
    "subtitle": "PIONEER-1515 RFID TAG/LABEL VARIATION",
    "shortDesc": "Pharma tracking and management",
    "description": "SKU: 1515. Supplier: RFID Discovery (Paragon ID). Category: PIONEER-1515 RFID TAG/LABEL VARIATION. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: RFID Tag / Label. Description: Specialized RFID solution for Pharma applications, optimized for performance and durability.",
    "customerSummary": "PIONEER-1515 RFID TAG/LABEL VARIATION | RFID Tag / Label | Applications: Pharma",
    "image": "https://www.rfiddiscovery.com/sites/default/files/styles/product_image/public/2022-03/RFID-Discovery-Logo.png",
    "datasheet": "",
    "productUrl": "https://www.rfiddiscovery.com/en-us/solutions/rfid",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Impinj M730",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "RFID Tag / Label",
    "sizeText": "15 x 15 mm",
    "material": "Standard",
    "fixedReadRange": "Standard",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP67",
    "applications": [
      "Pharma"
    ],
    "industries": [
      "Pharma"
    ],
    "tags": [
      "UHF",
      "RFID Tag / Label",
      "Non Metal",
      "Impinj M730",
      "Pharma"
    ]
  },
  {
    "slug": "rfid-discovery-pioneer-2010",
    "title": "RFID Discovery 2010",
    "brand": "RFID Discovery",
    "model": "2010",
    "sku": "2010",
    "subtitle": "PIONEER-2010 RFID TAG/LABEL VARIATION",
    "shortDesc": "Healthcare tracking and management",
    "description": "SKU: 2010. Supplier: RFID Discovery (Paragon ID). Category: PIONEER-2010 RFID TAG/LABEL VARIATION. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: RFID Tag / Label. Description: Specialized RFID solution for Healthcare applications, optimized for performance and durability.",
    "customerSummary": "PIONEER-2010 RFID TAG/LABEL VARIATION | RFID Tag / Label | Applications: Healthcare",
    "image": "https://www.rfiddiscovery.com/sites/default/files/styles/product_image/public/2022-03/RFID-Discovery-Logo.png",
    "datasheet": "",
    "productUrl": "https://www.rfiddiscovery.com/en-us/solutions/rfid",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Impinj M730",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "RFID Tag / Label",
    "sizeText": "20 x 10 mm",
    "material": "Standard",
    "fixedReadRange": "Standard",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP67",
    "applications": [
      "Healthcare"
    ],
    "industries": [
      "Healthcare"
    ],
    "tags": [
      "UHF",
      "RFID Tag / Label",
      "Non Metal",
      "Impinj M730",
      "Healthcare"
    ]
  },
  {
    "slug": "rfid-discovery-pioneer-2512",
    "title": "RFID Discovery 2512",
    "brand": "RFID Discovery",
    "model": "2512",
    "sku": "2512",
    "subtitle": "PIONEER FAMILY RAIN RFID INLAY",
    "shortDesc": "Pharmaceutical tracking, healthcare asset management, medication identification",
    "description": "SKU: 2512. Supplier: RFID Discovery (Paragon ID). Category: PIONEER FAMILY RAIN RFID INLAY. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: RFID Inlay / Label. Description: ARC certified RAIN RFID inlay developed for pharmaceutical and healthcare sectors. Supports UnitVisID for medication tracking. ARC Spec: S, UnitVisID.",
    "customerSummary": "PIONEER FAMILY RAIN RFID INLAY | RFID Inlay / Label | Applications: Pharma, Healthcare",
    "image": "https://www.paragon-id.com/sites/default/files/styles/product_image/public/2022-03/Pioneer.png",
    "datasheet": "",
    "productUrl": "https://www.paragon-id.com/en/pioneer-range",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Impinj M730/M750",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "RFID Inlay / Label",
    "sizeText": "25 x 12 mm",
    "material": "PET / Paper",
    "fixedReadRange": "Up to 3m",
    "handheldReadRange": "Up to 2m",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP67",
    "applications": [
      "Pharma",
      "Healthcare"
    ],
    "industries": [
      "Pharma",
      "Healthcare"
    ],
    "tags": [
      "UHF",
      "RFID Inlay / Label",
      "Non Metal",
      "Impinj M730/M750",
      "Pharma",
      "Healthcare"
    ]
  },
  {
    "slug": "rfid-discovery-pioneer-2612",
    "title": "RFID Discovery 2612",
    "brand": "RFID Discovery",
    "model": "2612",
    "sku": "2612",
    "subtitle": "PIONEER FAMILY RAIN RFID INLAY",
    "shortDesc": "Pharmaceutical tracking, healthcare asset management, medication identification",
    "description": "SKU: 2612. Supplier: RFID Discovery (Paragon ID). Category: PIONEER FAMILY RAIN RFID INLAY. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: RFID Inlay / Label. Description: ARC certified RAIN RFID inlay developed for pharmaceutical and healthcare sectors. Supports UnitVisID for medication tracking. ARC Spec: S, unitVisID.",
    "customerSummary": "PIONEER FAMILY RAIN RFID INLAY | RFID Inlay / Label | Applications: Pharma, Healthcare",
    "image": "https://www.paragon-id.com/sites/default/files/styles/product_image/public/2022-03/Pioneer.png",
    "datasheet": "",
    "productUrl": "https://www.paragon-id.com/en/pioneer-range",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Impinj M730/M750",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "RFID Inlay / Label",
    "sizeText": "26 x 12 mm",
    "material": "PET / Paper",
    "fixedReadRange": "Up to 3m",
    "handheldReadRange": "Up to 2m",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP67",
    "applications": [
      "Pharma",
      "Healthcare"
    ],
    "industries": [
      "Pharma",
      "Healthcare"
    ],
    "tags": [
      "UHF",
      "RFID Inlay / Label",
      "Non Metal",
      "Impinj M730/M750",
      "Pharma",
      "Healthcare"
    ]
  },
  {
    "slug": "rfid-discovery-explorer-3015",
    "title": "RFID Discovery 3015",
    "brand": "RFID Discovery",
    "model": "3015",
    "sku": "3015",
    "subtitle": "EXPLORER-3015 RFID TAG/LABEL VARIATION",
    "shortDesc": "Retail tracking and management",
    "description": "SKU: 3015. Supplier: RFID Discovery (Paragon ID). Category: EXPLORER-3015 RFID TAG/LABEL VARIATION. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: RFID Tag / Label. Description: Specialized RFID solution for Retail applications, optimized for performance and durability.",
    "customerSummary": "EXPLORER-3015 RFID TAG/LABEL VARIATION | RFID Tag / Label | Applications: Retail",
    "image": "https://www.rfiddiscovery.com/sites/default/files/styles/product_image/public/2022-03/RFID-Discovery-Logo.png",
    "datasheet": "",
    "productUrl": "https://www.rfiddiscovery.com/en-us/solutions/rfid",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Impinj M730",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "RFID Tag / Label",
    "sizeText": "30 x 15 mm",
    "material": "Standard",
    "fixedReadRange": "Standard",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP67",
    "applications": [
      "Retail"
    ],
    "industries": [
      "Retail"
    ],
    "tags": [
      "UHF",
      "RFID Tag / Label",
      "Non Metal",
      "Impinj M730",
      "Retail"
    ]
  },
  {
    "slug": "rfid-discovery-explorer-4216-m7-v2",
    "title": "RFID Discovery 4216-M7-V2",
    "brand": "RFID Discovery",
    "model": "4216-M7-V2",
    "sku": "4216-M7-V2",
    "subtitle": "EXPLORER FAMILY RAIN RFID INLAY",
    "shortDesc": "Retail item-level tagging, logistics, inventory management",
    "description": "SKU: 4216-M7-V2. Supplier: RFID Discovery (Paragon ID). Category: EXPLORER FAMILY RAIN RFID INLAY. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: RFID Inlay / Label. Description: ARC certified RAIN RFID inlay developed for retail, logistics, and industry applications. ARC Spec: F, G, N, O, Q, W2, W5, W6.",
    "customerSummary": "EXPLORER FAMILY RAIN RFID INLAY | RFID Inlay / Label | Applications: Retail, Logistics, Inventory",
    "image": "https://www.paragon-id.com/sites/default/files/styles/product_image/public/2022-03/Explorer.png",
    "datasheet": "",
    "productUrl": "https://www.paragon-id.com/en/explorer-range",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Impinj M730/M750",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "RFID Inlay / Label",
    "sizeText": "42 x 16 mm",
    "material": "Paper / PET",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP67 (when converted)",
    "applications": [
      "Retail",
      "Logistics",
      "Inventory"
    ],
    "industries": [
      "Retail",
      "Logistics",
      "Inventory"
    ],
    "tags": [
      "UHF",
      "RFID Inlay / Label",
      "Non Metal",
      "Impinj M730/M750",
      "Retail",
      "Logistics"
    ]
  },
  {
    "slug": "rfid-discovery-explorer-4216-r6",
    "title": "RFID Discovery 4216-R6",
    "brand": "RFID Discovery",
    "model": "4216-R6",
    "sku": "4216-R6",
    "subtitle": "EXPLORER-4216-R6 RFID TAG/LABEL VARIATION",
    "shortDesc": "Retail tracking and management",
    "description": "SKU: 4216-R6. Supplier: RFID Discovery (Paragon ID). Category: EXPLORER-4216-R6 RFID TAG/LABEL VARIATION. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: RFID Tag / Label. Description: Specialized RFID solution for Retail applications, optimized for performance and durability.",
    "customerSummary": "EXPLORER-4216-R6 RFID TAG/LABEL VARIATION | RFID Tag / Label | Applications: Retail",
    "image": "https://www.rfiddiscovery.com/sites/default/files/styles/product_image/public/2022-03/RFID-Discovery-Logo.png",
    "datasheet": "",
    "productUrl": "https://www.rfiddiscovery.com/en-us/solutions/rfid",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Impinj M730",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "RFID Tag / Label",
    "sizeText": "42 x 16 mm",
    "material": "Standard",
    "fixedReadRange": "Standard",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP67",
    "applications": [
      "Retail"
    ],
    "industries": [
      "Retail"
    ],
    "tags": [
      "UHF",
      "RFID Tag / Label",
      "Non Metal",
      "Impinj M730",
      "Retail"
    ]
  },
  {
    "slug": "rfid-discovery-explorer-4216-u9",
    "title": "RFID Discovery 4216-U9",
    "brand": "RFID Discovery",
    "model": "4216-U9",
    "sku": "4216-U9",
    "subtitle": "EXPLORER FAMILY RAIN RFID INLAY",
    "shortDesc": "Retail item-level tagging, logistics, inventory management",
    "description": "SKU: 4216-U9. Supplier: RFID Discovery (Paragon ID). Category: EXPLORER FAMILY RAIN RFID INLAY. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: RFID Inlay / Label. Description: ARC certified RAIN RFID inlay developed for retail, logistics, and industry applications. ARC Spec: F, G, N, O, Q, W2, W5, W6.",
    "customerSummary": "EXPLORER FAMILY RAIN RFID INLAY | RFID Inlay / Label | Applications: Retail, Logistics, Inventory",
    "image": "https://www.paragon-id.com/sites/default/files/styles/product_image/public/2022-03/Explorer.png",
    "datasheet": "",
    "productUrl": "https://www.paragon-id.com/en/explorer-range",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP U9",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "RFID Inlay / Label",
    "sizeText": "42 x 16 mm",
    "material": "Paper / PET",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP67 (when converted)",
    "applications": [
      "Retail",
      "Logistics",
      "Inventory"
    ],
    "industries": [
      "Retail",
      "Logistics",
      "Inventory"
    ],
    "tags": [
      "UHF",
      "RFID Inlay / Label",
      "Non Metal",
      "NXP U9",
      "Retail",
      "Logistics"
    ]
  },
  {
    "slug": "rfid-discovery-explorer-4420-m7",
    "title": "RFID Discovery 4420-M7",
    "brand": "RFID Discovery",
    "model": "4420-M7",
    "sku": "4420-M7",
    "subtitle": "EXPLORER FAMILY RAIN RFID INLAY",
    "shortDesc": "Retail item-level tagging, logistics, inventory management",
    "description": "SKU: 4420-M7. Supplier: RFID Discovery (Paragon ID). Category: EXPLORER FAMILY RAIN RFID INLAY. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: RFID Inlay / Label. Description: ARC certified RAIN RFID inlay developed for retail, logistics, and industry applications. ARC Spec: F, G, N, O, Q, R, W1-W6, Y, Y2.",
    "customerSummary": "EXPLORER FAMILY RAIN RFID INLAY | RFID Inlay / Label | Applications: Retail, Logistics, Inventory",
    "image": "https://www.paragon-id.com/sites/default/files/styles/product_image/public/2022-03/Explorer.png",
    "datasheet": "",
    "productUrl": "https://www.paragon-id.com/en/explorer-range",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Impinj M730/M750",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "RFID Inlay / Label",
    "sizeText": "44 x 20 mm",
    "material": "Paper / PET",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP67 (when converted)",
    "applications": [
      "Retail",
      "Logistics",
      "Inventory"
    ],
    "industries": [
      "Retail",
      "Logistics",
      "Inventory"
    ],
    "tags": [
      "UHF",
      "RFID Inlay / Label",
      "Non Metal",
      "Impinj M730/M750",
      "Retail",
      "Logistics"
    ]
  },
  {
    "slug": "rfid-discovery-explorer-4420-r6",
    "title": "RFID Discovery 4420-R6",
    "brand": "RFID Discovery",
    "model": "4420-R6",
    "sku": "4420-R6",
    "subtitle": "EXPLORER-4420-R6 RFID TAG/LABEL VARIATION",
    "shortDesc": "Retail tracking and management",
    "description": "SKU: 4420-R6. Supplier: RFID Discovery (Paragon ID). Category: EXPLORER-4420-R6 RFID TAG/LABEL VARIATION. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: RFID Tag / Label. Description: Specialized RFID solution for Retail applications, optimized for performance and durability.",
    "customerSummary": "EXPLORER-4420-R6 RFID TAG/LABEL VARIATION | RFID Tag / Label | Applications: Retail",
    "image": "https://www.rfiddiscovery.com/sites/default/files/styles/product_image/public/2022-03/RFID-Discovery-Logo.png",
    "datasheet": "",
    "productUrl": "https://www.rfiddiscovery.com/en-us/solutions/rfid",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Impinj M730",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "RFID Tag / Label",
    "sizeText": "44 x 20 mm",
    "material": "Standard",
    "fixedReadRange": "Standard",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP67",
    "applications": [
      "Retail"
    ],
    "industries": [
      "Retail"
    ],
    "tags": [
      "UHF",
      "RFID Tag / Label",
      "Non Metal",
      "Impinj M730",
      "Retail"
    ]
  },
  {
    "slug": "rfid-discovery-explorer-4420-u9",
    "title": "RFID Discovery 4420-U9",
    "brand": "RFID Discovery",
    "model": "4420-U9",
    "sku": "4420-U9",
    "subtitle": "EXPLORER FAMILY RAIN RFID INLAY",
    "shortDesc": "Retail item-level tagging, logistics, inventory management",
    "description": "SKU: 4420-U9. Supplier: RFID Discovery (Paragon ID). Category: EXPLORER FAMILY RAIN RFID INLAY. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: RFID Inlay / Label. Description: ARC certified RAIN RFID inlay developed for retail, logistics, and industry applications. ARC Spec: F, G, N, O, Q, R, W1-W6, Y, Y2.",
    "customerSummary": "EXPLORER FAMILY RAIN RFID INLAY | RFID Inlay / Label | Applications: Retail, Logistics, Inventory",
    "image": "https://www.paragon-id.com/sites/default/files/styles/product_image/public/2022-03/Explorer.png",
    "datasheet": "",
    "productUrl": "https://www.paragon-id.com/en/explorer-range",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP U9",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "RFID Inlay / Label",
    "sizeText": "44 x 20 mm",
    "material": "Paper / PET",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP67 (when converted)",
    "applications": [
      "Retail",
      "Logistics",
      "Inventory"
    ],
    "industries": [
      "Retail",
      "Logistics",
      "Inventory"
    ],
    "tags": [
      "UHF",
      "RFID Inlay / Label",
      "Non Metal",
      "NXP U9",
      "Retail",
      "Logistics"
    ]
  },
  {
    "slug": "rfid-discovery-explorer-4428-m7",
    "title": "RFID Discovery 4428-M7",
    "brand": "RFID Discovery",
    "model": "4428-M7",
    "sku": "4428-M7",
    "subtitle": "EXPLORER FAMILY RAIN RFID INLAY",
    "shortDesc": "Retail item-level tagging, logistics, inventory management",
    "description": "SKU: 4428-M7. Supplier: RFID Discovery (Paragon ID). Category: EXPLORER FAMILY RAIN RFID INLAY. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: RFID Inlay / Label. Description: ARC certified RAIN RFID inlay developed for retail, logistics, and industry applications. ARC Spec: F, G, I, J, K, L, N, O, Q, R, W1-W6, Y, Y2.",
    "customerSummary": "EXPLORER FAMILY RAIN RFID INLAY | RFID Inlay / Label | Applications: Retail, Logistics, Inventory",
    "image": "https://www.paragon-id.com/sites/default/files/styles/product_image/public/2022-03/Explorer.png",
    "datasheet": "",
    "productUrl": "https://www.paragon-id.com/en/explorer-range",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Impinj M730/M750",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "RFID Inlay / Label",
    "sizeText": "44 x 28 mm",
    "material": "Paper / PET",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP67 (when converted)",
    "applications": [
      "Retail",
      "Logistics",
      "Inventory"
    ],
    "industries": [
      "Retail",
      "Logistics",
      "Inventory"
    ],
    "tags": [
      "UHF",
      "RFID Inlay / Label",
      "Non Metal",
      "Impinj M730/M750",
      "Retail",
      "Logistics"
    ]
  },
  {
    "slug": "rfid-discovery-explorer-5030-m7",
    "title": "RFID Discovery 5030-M7",
    "brand": "RFID Discovery",
    "model": "5030-M7",
    "sku": "5030-M7",
    "subtitle": "EXPLORER FAMILY RAIN RFID INLAY",
    "shortDesc": "Retail item-level tagging, logistics, inventory management",
    "description": "SKU: 5030-M7. Supplier: RFID Discovery (Paragon ID). Category: EXPLORER FAMILY RAIN RFID INLAY. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: RFID Inlay / Label. Description: ARC certified RAIN RFID inlay developed for retail, logistics, and industry applications. ARC Spec: F, G, I, J, K, L, N, O, Q, R, W1-W6, Y, Y2.",
    "customerSummary": "EXPLORER FAMILY RAIN RFID INLAY | RFID Inlay / Label | Applications: Retail, Logistics, Inventory",
    "image": "https://www.paragon-id.com/sites/default/files/styles/product_image/public/2022-03/Explorer.png",
    "datasheet": "",
    "productUrl": "https://www.paragon-id.com/en/explorer-range",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Impinj M730/M750",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "RFID Inlay / Label",
    "sizeText": "50 x 30 mm",
    "material": "Paper / PET",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP67 (when converted)",
    "applications": [
      "Retail",
      "Logistics",
      "Inventory"
    ],
    "industries": [
      "Retail",
      "Logistics",
      "Inventory"
    ],
    "tags": [
      "UHF",
      "RFID Inlay / Label",
      "Non Metal",
      "Impinj M730/M750",
      "Retail",
      "Logistics"
    ]
  },
  {
    "slug": "rfid-discovery-explorer-5030-r6",
    "title": "RFID Discovery 5030-R6",
    "brand": "RFID Discovery",
    "model": "5030-R6",
    "sku": "5030-R6",
    "subtitle": "EXPLORER FAMILY RAIN RFID INLAY",
    "shortDesc": "Retail item-level tagging, logistics, inventory management",
    "description": "SKU: 5030-R6. Supplier: RFID Discovery (Paragon ID). Category: EXPLORER FAMILY RAIN RFID INLAY. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: RFID Inlay / Label. Description: ARC certified RAIN RFID inlay developed for retail, logistics, and industry applications. ARC Spec: F, G, I, J, K, L, N, O, Q, R, W1-W6, Y, Y2.",
    "customerSummary": "EXPLORER FAMILY RAIN RFID INLAY | RFID Inlay / Label | Applications: Retail, Logistics, Inventory",
    "image": "https://www.paragon-id.com/sites/default/files/styles/product_image/public/2022-03/Explorer.png",
    "datasheet": "",
    "productUrl": "https://www.paragon-id.com/en/explorer-range",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Impinj R6/R6-P",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "RFID Inlay / Label",
    "sizeText": "50 x 30 mm",
    "material": "Paper / PET",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP67 (when converted)",
    "applications": [
      "Retail",
      "Logistics",
      "Inventory"
    ],
    "industries": [
      "Retail",
      "Logistics",
      "Inventory"
    ],
    "tags": [
      "UHF",
      "RFID Inlay / Label",
      "Non Metal",
      "Impinj R6/R6-P",
      "Retail",
      "Logistics"
    ]
  },
  {
    "slug": "rfid-discovery-explorer-5050",
    "title": "RFID Discovery 5050",
    "brand": "RFID Discovery",
    "model": "5050",
    "sku": "5050",
    "subtitle": "EXPLORER-5050 RFID TAG/LABEL VARIATION",
    "shortDesc": "Logistics tracking and management",
    "description": "SKU: 5050. Supplier: RFID Discovery (Paragon ID). Category: EXPLORER-5050 RFID TAG/LABEL VARIATION. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: RFID Tag / Label. Description: Specialized RFID solution for Logistics applications, optimized for performance and durability.",
    "customerSummary": "EXPLORER-5050 RFID TAG/LABEL VARIATION | RFID Tag / Label | Applications: Logistics",
    "image": "https://www.rfiddiscovery.com/sites/default/files/styles/product_image/public/2022-03/RFID-Discovery-Logo.png",
    "datasheet": "",
    "productUrl": "https://www.rfiddiscovery.com/en-us/solutions/rfid",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Impinj M730",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "RFID Tag / Label",
    "sizeText": "50 x 50 mm",
    "material": "Standard",
    "fixedReadRange": "Standard",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP67",
    "applications": [
      "Logistics"
    ],
    "industries": [
      "Logistics"
    ],
    "tags": [
      "UHF",
      "RFID Tag / Label",
      "Non Metal",
      "Impinj M730",
      "Logistics"
    ]
  },
  {
    "slug": "rfid-discovery-voyager-6034",
    "title": "RFID Discovery 6034",
    "brand": "RFID Discovery",
    "model": "6034",
    "sku": "6034",
    "subtitle": "VOYAGER FAMILY RAIN RFID INLAY",
    "shortDesc": "Aviation baggage tracking, airline logistics",
    "description": "SKU: 6034. Supplier: RFID Discovery (Paragon ID). Category: VOYAGER FAMILY RAIN RFID INLAY. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: RFID Inlay / Label. Description: RAIN RFID inlay developed for the aviation sector, specifically for baggage tracking and airline logistics. ARC Spec: U.",
    "customerSummary": "VOYAGER FAMILY RAIN RFID INLAY | RFID Inlay / Label | Applications: Aviation, Baggage Tracking",
    "image": "https://www.paragon-id.com/sites/default/files/styles/product_image/public/2022-03/Voyager.png",
    "datasheet": "",
    "productUrl": "https://www.paragon-id.com/en/voyager-range",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP U9",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "RFID Inlay / Label",
    "sizeText": "60 x 34 mm",
    "material": "PET / Paper",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP67",
    "applications": [
      "Aviation",
      "Baggage Tracking"
    ],
    "industries": [
      "Aviation",
      "Baggage Tracking"
    ],
    "tags": [
      "UHF",
      "RFID Inlay / Label",
      "Non Metal",
      "NXP U9",
      "Aviation",
      "Baggage Tracking"
    ]
  },
  {
    "slug": "rfid-discovery-explorer-7010-m7",
    "title": "RFID Discovery 7010-M7",
    "brand": "RFID Discovery",
    "model": "7010-M7",
    "sku": "7010-M7",
    "subtitle": "EXPLORER FAMILY RAIN RFID INLAY",
    "shortDesc": "Retail item-level tagging, logistics, inventory management",
    "description": "SKU: 7010-M7. Supplier: RFID Discovery (Paragon ID). Category: EXPLORER FAMILY RAIN RFID INLAY. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: RFID Inlay / Label. Description: ARC certified RAIN RFID inlay developed for retail, logistics, and industry applications. ARC Spec: C2, F, G, I, J, K, L, N, O, Q, R, W1-W6, Y, Y2.",
    "customerSummary": "EXPLORER FAMILY RAIN RFID INLAY | RFID Inlay / Label | Applications: Retail, Logistics, Inventory",
    "image": "https://www.paragon-id.com/sites/default/files/styles/product_image/public/2022-03/Explorer.png",
    "datasheet": "",
    "productUrl": "https://www.paragon-id.com/en/explorer-range",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Impinj M730/M750",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "RFID Inlay / Label",
    "sizeText": "70 x 10 mm",
    "material": "Paper / PET",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP67 (when converted)",
    "applications": [
      "Retail",
      "Logistics",
      "Inventory"
    ],
    "industries": [
      "Retail",
      "Logistics",
      "Inventory"
    ],
    "tags": [
      "UHF",
      "RFID Inlay / Label",
      "Non Metal",
      "Impinj M730/M750",
      "Retail",
      "Logistics"
    ]
  },
  {
    "slug": "rfid-discovery-explorer-7014-m7",
    "title": "RFID Discovery 7014-M7",
    "brand": "RFID Discovery",
    "model": "7014-M7",
    "sku": "7014-M7",
    "subtitle": "EXPLORER FAMILY RAIN RFID INLAY",
    "shortDesc": "Retail item-level tagging, logistics, inventory management",
    "description": "SKU: 7014-M7. Supplier: RFID Discovery (Paragon ID). Category: EXPLORER FAMILY RAIN RFID INLAY. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: RFID Inlay / Label. Description: ARC certified RAIN RFID inlay developed for retail, logistics, and industry applications. ARC Spec: F, G, I, J, K, L, N, O, Q, R, W1-W6, Y, Y2.",
    "customerSummary": "EXPLORER FAMILY RAIN RFID INLAY | RFID Inlay / Label | Applications: Retail, Logistics, Inventory",
    "image": "https://www.paragon-id.com/sites/default/files/styles/product_image/public/2022-03/Explorer.png",
    "datasheet": "",
    "productUrl": "https://www.paragon-id.com/en/explorer-range",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Impinj M730/M750",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "RFID Inlay / Label",
    "sizeText": "70 x 14 mm",
    "material": "Paper / PET",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP67 (when converted)",
    "applications": [
      "Retail",
      "Logistics",
      "Inventory"
    ],
    "industries": [
      "Retail",
      "Logistics",
      "Inventory"
    ],
    "tags": [
      "UHF",
      "RFID Inlay / Label",
      "Non Metal",
      "Impinj M730/M750",
      "Retail",
      "Logistics"
    ]
  },
  {
    "slug": "rfid-discovery-explorer-7014-r6",
    "title": "RFID Discovery 7014-R6",
    "brand": "RFID Discovery",
    "model": "7014-R6",
    "sku": "7014-R6",
    "subtitle": "EXPLORER FAMILY RAIN RFID INLAY",
    "shortDesc": "Retail item-level tagging, logistics, inventory management",
    "description": "SKU: 7014-R6. Supplier: RFID Discovery (Paragon ID). Category: EXPLORER FAMILY RAIN RFID INLAY. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: RFID Inlay / Label. Description: ARC certified RAIN RFID inlay developed for retail, logistics, and industry applications. ARC Spec: F, G, I, J, K, L, N, O, Q, R, W1-W6, Y, Y2.",
    "customerSummary": "EXPLORER FAMILY RAIN RFID INLAY | RFID Inlay / Label | Applications: Retail, Logistics, Inventory",
    "image": "https://www.paragon-id.com/sites/default/files/styles/product_image/public/2022-03/Explorer.png",
    "datasheet": "",
    "productUrl": "https://www.paragon-id.com/en/explorer-range",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Impinj R6/R6-P",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "RFID Inlay / Label",
    "sizeText": "70 x 14 mm",
    "material": "Paper / PET",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP67 (when converted)",
    "applications": [
      "Retail",
      "Logistics",
      "Inventory"
    ],
    "industries": [
      "Retail",
      "Logistics",
      "Inventory"
    ],
    "tags": [
      "UHF",
      "RFID Inlay / Label",
      "Non Metal",
      "Impinj R6/R6-P",
      "Retail",
      "Logistics"
    ]
  },
  {
    "slug": "rfid-discovery-explorer-7014-u9",
    "title": "RFID Discovery 7014-U9",
    "brand": "RFID Discovery",
    "model": "7014-U9",
    "sku": "7014-U9",
    "subtitle": "EXPLORER FAMILY RAIN RFID INLAY",
    "shortDesc": "Retail item-level tagging, logistics, inventory management",
    "description": "SKU: 7014-U9. Supplier: RFID Discovery (Paragon ID). Category: EXPLORER FAMILY RAIN RFID INLAY. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: RFID Inlay / Label. Description: ARC certified RAIN RFID inlay developed for retail, logistics, and industry applications. ARC Spec: F, G, I, J, K, L, N, O, Q, R, W1-W6, Y, Y2.",
    "customerSummary": "EXPLORER FAMILY RAIN RFID INLAY | RFID Inlay / Label | Applications: Retail, Logistics, Inventory",
    "image": "https://www.paragon-id.com/sites/default/files/styles/product_image/public/2022-03/Explorer.png",
    "datasheet": "",
    "productUrl": "https://www.paragon-id.com/en/explorer-range",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP U9",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "RFID Inlay / Label",
    "sizeText": "70 x 14 mm",
    "material": "Paper / PET",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP67 (when converted)",
    "applications": [
      "Retail",
      "Logistics",
      "Inventory"
    ],
    "industries": [
      "Retail",
      "Logistics",
      "Inventory"
    ],
    "tags": [
      "UHF",
      "RFID Inlay / Label",
      "Non Metal",
      "NXP U9",
      "Retail",
      "Logistics"
    ]
  },
  {
    "slug": "rfid-discovery-ranger-7040",
    "title": "RFID Discovery 7040",
    "brand": "RFID Discovery",
    "model": "7040",
    "sku": "7040",
    "subtitle": "RANGER-7040 RFID TAG/LABEL VARIATION",
    "shortDesc": "Logistics tracking and management",
    "description": "SKU: 7040. Supplier: RFID Discovery (Paragon ID). Category: RANGER-7040 RFID TAG/LABEL VARIATION. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: RFID Tag / Label. Description: Specialized RFID solution for Logistics applications, optimized for performance and durability.",
    "customerSummary": "RANGER-7040 RFID TAG/LABEL VARIATION | RFID Tag / Label | Applications: Logistics",
    "image": "https://www.rfiddiscovery.com/sites/default/files/styles/product_image/public/2022-03/RFID-Discovery-Logo.png",
    "datasheet": "",
    "productUrl": "https://www.rfiddiscovery.com/en-us/solutions/rfid",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Impinj M730",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "RFID Tag / Label",
    "sizeText": "70 x 40 mm",
    "material": "Standard",
    "fixedReadRange": "Standard",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP67",
    "applications": [
      "Logistics"
    ],
    "industries": [
      "Logistics"
    ],
    "tags": [
      "UHF",
      "RFID Tag / Label",
      "Non Metal",
      "Impinj M730",
      "Logistics"
    ]
  },
  {
    "slug": "rfid-discovery-voyager-7834",
    "title": "RFID Discovery 7834",
    "brand": "RFID Discovery",
    "model": "7834",
    "sku": "7834",
    "subtitle": "VOYAGER FAMILY RAIN RFID INLAY",
    "shortDesc": "Aviation baggage tracking, airline logistics",
    "description": "SKU: 7834. Supplier: RFID Discovery (Paragon ID). Category: VOYAGER FAMILY RAIN RFID INLAY. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: RFID Inlay / Label. Description: RAIN RFID inlay developed for the aviation sector, specifically for baggage tracking and airline logistics. ARC Spec: U.",
    "customerSummary": "VOYAGER FAMILY RAIN RFID INLAY | RFID Inlay / Label | Applications: Aviation, Baggage Tracking",
    "image": "https://www.paragon-id.com/sites/default/files/styles/product_image/public/2022-03/Voyager.png",
    "datasheet": "",
    "productUrl": "https://www.paragon-id.com/en/voyager-range",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Impinj R6-P",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "RFID Inlay / Label",
    "sizeText": "78 x 34 mm",
    "material": "PET / Paper",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP67",
    "applications": [
      "Aviation",
      "Baggage Tracking"
    ],
    "industries": [
      "Aviation",
      "Baggage Tracking"
    ],
    "tags": [
      "UHF",
      "RFID Inlay / Label",
      "Non Metal",
      "Impinj R6-P",
      "Aviation",
      "Baggage Tracking"
    ]
  },
  {
    "slug": "rfid-discovery-ranger-9525",
    "title": "RFID Discovery 9525",
    "brand": "RFID Discovery",
    "model": "9525",
    "sku": "9525",
    "subtitle": "RANGER-9525 RFID TAG/LABEL VARIATION",
    "shortDesc": "Industrial tracking and management",
    "description": "SKU: 9525. Supplier: RFID Discovery (Paragon ID). Category: RANGER-9525 RFID TAG/LABEL VARIATION. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: RFID Tag / Label. Description: Specialized RFID solution for Industrial applications, optimized for performance and durability.",
    "customerSummary": "RANGER-9525 RFID TAG/LABEL VARIATION | RFID Tag / Label | Applications: Industrial",
    "image": "https://www.rfiddiscovery.com/sites/default/files/styles/product_image/public/2022-03/RFID-Discovery-Logo.png",
    "datasheet": "",
    "productUrl": "https://www.rfiddiscovery.com/en-us/solutions/rfid",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Impinj M730",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "RFID Tag / Label",
    "sizeText": "95 x 25 mm",
    "material": "Standard",
    "fixedReadRange": "Standard",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP67",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "RFID Tag / Label",
      "Non Metal",
      "Impinj M730",
      "Industrial"
    ]
  },
  {
    "slug": "rfid-discovery-ble-asset-tag-mini",
    "title": "RFID Discovery BLE-ATM",
    "brand": "RFID Discovery",
    "model": "BLE-ATM",
    "sku": "BLE-ATM",
    "subtitle": "BLE-ASSET-TAG-MINI RFID TAG/LABEL VARIATION",
    "shortDesc": "RTLS tracking and management",
    "description": "SKU: BLE-ATM. Supplier: RFID Discovery (Paragon ID). Category: BLE-ASSET-TAG-MINI RFID TAG/LABEL VARIATION. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: RFID Tag / Label. Description: Specialized RFID solution for RTLS applications, optimized for performance and durability.",
    "customerSummary": "BLE-ASSET-TAG-MINI RFID TAG/LABEL VARIATION | RFID Tag / Label | Applications: RTLS",
    "image": "https://www.rfiddiscovery.com/sites/default/files/styles/product_image/public/2022-03/RFID-Discovery-Logo.png",
    "datasheet": "",
    "productUrl": "https://www.rfiddiscovery.com/en-us/solutions/rfid",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Impinj M730",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "RFID Tag / Label",
    "sizeText": "Small",
    "material": "Standard",
    "fixedReadRange": "Standard",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP67",
    "applications": [
      "RTLS"
    ],
    "industries": [
      "RTLS"
    ],
    "tags": [
      "UHF",
      "RFID Tag / Label",
      "Non Metal",
      "Impinj M730",
      "RTLS"
    ]
  },
  {
    "slug": "rfid-discovery-ble-beacon",
    "title": "RFID Discovery BLE-BEACON-V1",
    "brand": "RFID Discovery",
    "model": "BLE-BEACON-V1",
    "sku": "BLE-BEACON-V1",
    "subtitle": "ACTIVE BLE TRACKING BEACON",
    "shortDesc": "Real-time location systems (RTLS), high-value asset tracking",
    "description": "SKU: BLE-BEACON-V1. Supplier: RFID Discovery (Paragon ID). Category: ACTIVE BLE TRACKING BEACON. Frequency: 2.4 GHz 860-960 MHz (Global). Non-metal surface application. Form factor: Active Tag / Beacon. Description: Active Bluetooth Low Energy beacon for real-time location tracking of high-value assets.",
    "customerSummary": "ACTIVE BLE TRACKING BEACON | Active Tag / Beacon | Applications: RTLS, High-Value Assets",
    "image": "https://www.rfiddiscovery.com/sites/default/files/styles/product_image/public/2022-03/BLE.png",
    "datasheet": "",
    "productUrl": "https://www.rfiddiscovery.com/en-us/solutions/ble",
    "frequency": "2.4 GHz",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "Bluetooth 5.0",
    "chip": "Nordic Semiconductor",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Active Tag / Beacon",
    "sizeText": "",
    "material": "ABS Plastic",
    "fixedReadRange": "Up to 100m",
    "handheldReadRange": "",
    "operatingTemp": "-20°C to +60°C",
    "ipRating": "IP67",
    "applications": [
      "RTLS",
      "High-Value Assets"
    ],
    "industries": [
      "RTLS",
      "High-Value Assets"
    ],
    "tags": [
      "2.4 GHz",
      "Active Tag / Beacon",
      "Non Metal",
      "Nordic Semiconductor",
      "RTLS",
      "High-Value Assets"
    ]
  },
  {
    "slug": "rfid-discovery-explorer-dual-freq",
    "title": "RFID Discovery E-DF-T",
    "brand": "RFID Discovery",
    "model": "E-DF-T",
    "sku": "E-DF-T",
    "subtitle": "EXPLORER-DUAL-FREQ RFID TAG/LABEL VARIATION",
    "shortDesc": "Logistics tracking and management",
    "description": "SKU: E-DF-T. Supplier: RFID Discovery (Paragon ID). Category: EXPLORER-DUAL-FREQ RFID TAG/LABEL VARIATION. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: RFID Tag / Label. Description: Specialized RFID solution for Logistics applications, optimized for performance and durability.",
    "customerSummary": "EXPLORER-DUAL-FREQ RFID TAG/LABEL VARIATION | RFID Tag / Label | Applications: Logistics",
    "image": "https://www.rfiddiscovery.com/sites/default/files/styles/product_image/public/2022-03/RFID-Discovery-Logo.png",
    "datasheet": "",
    "productUrl": "https://www.rfiddiscovery.com/en-us/solutions/rfid",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Impinj M730",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "RFID Tag / Label",
    "sizeText": "",
    "material": "Standard",
    "fixedReadRange": "Standard",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP67",
    "applications": [
      "Logistics"
    ],
    "industries": [
      "Logistics"
    ],
    "tags": [
      "UHF",
      "RFID Tag / Label",
      "Non Metal",
      "Impinj M730",
      "Logistics"
    ]
  },
  {
    "slug": "rfid-discovery-explorer-eco-paper",
    "title": "RFID Discovery E-ECO-P",
    "brand": "RFID Discovery",
    "model": "E-ECO-P",
    "sku": "E-ECO-P",
    "subtitle": "EXPLORER-ECO-PAPER RFID TAG/LABEL VARIATION",
    "shortDesc": "Retail tracking and management",
    "description": "SKU: E-ECO-P. Supplier: RFID Discovery (Paragon ID). Category: EXPLORER-ECO-PAPER RFID TAG/LABEL VARIATION. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: RFID Tag / Label. Description: Specialized RFID solution for Retail applications, optimized for performance and durability.",
    "customerSummary": "EXPLORER-ECO-PAPER RFID TAG/LABEL VARIATION | RFID Tag / Label | Applications: Retail",
    "image": "https://www.rfiddiscovery.com/sites/default/files/styles/product_image/public/2022-03/RFID-Discovery-Logo.png",
    "datasheet": "",
    "productUrl": "https://www.rfiddiscovery.com/en-us/solutions/rfid",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Impinj M730",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "RFID Tag / Label",
    "sizeText": "",
    "material": "Standard",
    "fixedReadRange": "Standard",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP67",
    "applications": [
      "Retail"
    ],
    "industries": [
      "Retail"
    ],
    "tags": [
      "UHF",
      "RFID Tag / Label",
      "Non Metal",
      "Impinj M730",
      "Retail"
    ]
  },
  {
    "slug": "rfid-discovery-gs1-healthcare-label",
    "title": "RFID Discovery GS1-HC-L",
    "brand": "RFID Discovery",
    "model": "GS1-HC-L",
    "sku": "GS1-HC-L",
    "subtitle": "GS1-HEALTHCARE-LABEL RFID TAG/LABEL VARIATION",
    "shortDesc": "Healthcare tracking and management",
    "description": "SKU: GS1-HC-L. Supplier: RFID Discovery (Paragon ID). Category: GS1-HEALTHCARE-LABEL RFID TAG/LABEL VARIATION. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: RFID Tag / Label. Description: Specialized RFID solution for Healthcare applications, optimized for performance and durability.",
    "customerSummary": "GS1-HEALTHCARE-LABEL RFID TAG/LABEL VARIATION | RFID Tag / Label | Applications: Healthcare",
    "image": "https://www.rfiddiscovery.com/sites/default/files/styles/product_image/public/2022-03/RFID-Discovery-Logo.png",
    "datasheet": "",
    "productUrl": "https://www.rfiddiscovery.com/en-us/solutions/rfid",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Impinj M730",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "RFID Tag / Label",
    "sizeText": "",
    "material": "Standard",
    "fixedReadRange": "Standard",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP67",
    "applications": [
      "Healthcare"
    ],
    "industries": [
      "Healthcare"
    ],
    "tags": [
      "UHF",
      "RFID Tag / Label",
      "Non Metal",
      "Impinj M730",
      "Healthcare"
    ]
  },
  {
    "slug": "rfid-discovery-nfc-patient-id",
    "title": "RFID Discovery NFC-PID",
    "brand": "RFID Discovery",
    "model": "NFC-PID",
    "sku": "NFC-PID",
    "subtitle": "NFC-PATIENT-ID RFID TAG/LABEL VARIATION",
    "shortDesc": "Healthcare tracking and management",
    "description": "SKU: NFC-PID. Supplier: RFID Discovery (Paragon ID). Category: NFC-PATIENT-ID RFID TAG/LABEL VARIATION. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: RFID Tag / Label. Description: Specialized RFID solution for Healthcare applications, optimized for performance and durability.",
    "customerSummary": "NFC-PATIENT-ID RFID TAG/LABEL VARIATION | RFID Tag / Label | Applications: Healthcare",
    "image": "https://www.rfiddiscovery.com/sites/default/files/styles/product_image/public/2022-03/RFID-Discovery-Logo.png",
    "datasheet": "",
    "productUrl": "https://www.rfiddiscovery.com/en-us/solutions/rfid",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Impinj M730",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "RFID Tag / Label",
    "sizeText": "",
    "material": "Standard",
    "fixedReadRange": "Standard",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP67",
    "applications": [
      "Healthcare"
    ],
    "industries": [
      "Healthcare"
    ],
    "tags": [
      "UHF",
      "RFID Tag / Label",
      "Non Metal",
      "Impinj M730",
      "Healthcare"
    ]
  },
  {
    "slug": "rfid-discovery-nfc-smart-label",
    "title": "RFID Discovery NFC-SL",
    "brand": "RFID Discovery",
    "model": "NFC-SL",
    "sku": "NFC-SL",
    "subtitle": "NFC-SMART-LABEL RFID TAG/LABEL VARIATION",
    "shortDesc": "Retail tracking and management",
    "description": "SKU: NFC-SL. Supplier: RFID Discovery (Paragon ID). Category: NFC-SMART-LABEL RFID TAG/LABEL VARIATION. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: RFID Tag / Label. Description: Specialized RFID solution for Retail applications, optimized for performance and durability.",
    "customerSummary": "NFC-SMART-LABEL RFID TAG/LABEL VARIATION | RFID Tag / Label | Applications: Retail",
    "image": "https://www.rfiddiscovery.com/sites/default/files/styles/product_image/public/2022-03/RFID-Discovery-Logo.png",
    "datasheet": "",
    "productUrl": "https://www.rfiddiscovery.com/en-us/solutions/rfid",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Impinj M730",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "RFID Tag / Label",
    "sizeText": "",
    "material": "Standard",
    "fixedReadRange": "Standard",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP67",
    "applications": [
      "Retail"
    ],
    "industries": [
      "Retail"
    ],
    "tags": [
      "UHF",
      "RFID Tag / Label",
      "Non Metal",
      "Impinj M730",
      "Retail"
    ]
  },
  {
    "slug": "rfid-discovery-pioneer-syringe-tag",
    "title": "RFID Discovery P-SYR-T",
    "brand": "RFID Discovery",
    "model": "P-SYR-T",
    "sku": "P-SYR-T",
    "subtitle": "PIONEER-SYRINGE-TAG RFID TAG/LABEL VARIATION",
    "shortDesc": "Healthcare tracking and management",
    "description": "SKU: P-SYR-T. Supplier: RFID Discovery (Paragon ID). Category: PIONEER-SYRINGE-TAG RFID TAG/LABEL VARIATION. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: RFID Tag / Label. Description: Specialized RFID solution for Healthcare applications, optimized for performance and durability.",
    "customerSummary": "PIONEER-SYRINGE-TAG RFID TAG/LABEL VARIATION | RFID Tag / Label | Applications: Healthcare",
    "image": "https://www.rfiddiscovery.com/sites/default/files/styles/product_image/public/2022-03/RFID-Discovery-Logo.png",
    "datasheet": "",
    "productUrl": "https://www.rfiddiscovery.com/en-us/solutions/rfid",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Impinj M730",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "RFID Tag / Label",
    "sizeText": "Small",
    "material": "Standard",
    "fixedReadRange": "Standard",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP67",
    "applications": [
      "Healthcare"
    ],
    "industries": [
      "Healthcare"
    ],
    "tags": [
      "UHF",
      "RFID Tag / Label",
      "Non Metal",
      "Impinj M730",
      "Healthcare"
    ]
  },
  {
    "slug": "rfid-discovery-pioneer-vial-label",
    "title": "RFID Discovery P-VIAL-L",
    "brand": "RFID Discovery",
    "model": "P-VIAL-L",
    "sku": "P-VIAL-L",
    "subtitle": "PIONEER-VIAL-LABEL RFID TAG/LABEL VARIATION",
    "shortDesc": "Pharma tracking and management",
    "description": "SKU: P-VIAL-L. Supplier: RFID Discovery (Paragon ID). Category: PIONEER-VIAL-LABEL RFID TAG/LABEL VARIATION. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: RFID Tag / Label. Description: Specialized RFID solution for Pharma applications, optimized for performance and durability.",
    "customerSummary": "PIONEER-VIAL-LABEL RFID TAG/LABEL VARIATION | RFID Tag / Label | Applications: Pharma",
    "image": "https://www.rfiddiscovery.com/sites/default/files/styles/product_image/public/2022-03/RFID-Discovery-Logo.png",
    "datasheet": "",
    "productUrl": "https://www.rfiddiscovery.com/en-us/solutions/rfid",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Impinj M730",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "RFID Tag / Label",
    "sizeText": "Small",
    "material": "Standard",
    "fixedReadRange": "Standard",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP67",
    "applications": [
      "Pharma"
    ],
    "industries": [
      "Pharma"
    ],
    "tags": [
      "UHF",
      "RFID Tag / Label",
      "Non Metal",
      "Impinj M730",
      "Pharma"
    ]
  },
  {
    "slug": "rfid-discovery-ranger-high-temp",
    "title": "RFID Discovery R-HT-T",
    "brand": "RFID Discovery",
    "model": "R-HT-T",
    "sku": "R-HT-T",
    "subtitle": "RANGER-HIGH-TEMP RFID TAG/LABEL VARIATION",
    "shortDesc": "Industrial tracking and management",
    "description": "SKU: R-HT-T. Supplier: RFID Discovery (Paragon ID). Category: RANGER-HIGH-TEMP RFID TAG/LABEL VARIATION. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: RFID Tag / Label. Description: Specialized RFID solution for Industrial applications, optimized for performance and durability.",
    "customerSummary": "RANGER-HIGH-TEMP RFID TAG/LABEL VARIATION | RFID Tag / Label | Applications: Industrial",
    "image": "https://www.rfiddiscovery.com/sites/default/files/styles/product_image/public/2022-03/RFID-Discovery-Logo.png",
    "datasheet": "",
    "productUrl": "https://www.rfiddiscovery.com/en-us/solutions/rfid",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Impinj M730",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "RFID Tag / Label",
    "sizeText": "",
    "material": "Standard",
    "fixedReadRange": "Standard",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP67",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "RFID Tag / Label",
      "Non Metal",
      "Impinj M730",
      "Industrial"
    ]
  },
  {
    "slug": "rfid-discovery-ranger-on-metal-tag",
    "title": "RFID Discovery R-OM-T",
    "brand": "RFID Discovery",
    "model": "R-OM-T",
    "sku": "R-OM-T",
    "subtitle": "RANGER-ON-METAL-TAG RFID TAG/LABEL VARIATION",
    "shortDesc": "Industrial tracking and management",
    "description": "SKU: R-OM-T. Supplier: RFID Discovery (Paragon ID). Category: RANGER-ON-METAL-TAG RFID TAG/LABEL VARIATION. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: RFID Tag / Label. Description: Specialized RFID solution for Industrial applications, optimized for performance and durability.",
    "customerSummary": "RANGER-ON-METAL-TAG RFID TAG/LABEL VARIATION | RFID Tag / Label | Applications: Industrial",
    "image": "https://www.rfiddiscovery.com/sites/default/files/styles/product_image/public/2022-03/RFID-Discovery-Logo.png",
    "datasheet": "",
    "productUrl": "https://www.rfiddiscovery.com/en-us/solutions/rfid",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Impinj M730",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "RFID Tag / Label",
    "sizeText": "",
    "material": "Standard",
    "fixedReadRange": "Standard",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP67",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "RFID Tag / Label",
      "Non Metal",
      "Impinj M730",
      "Industrial"
    ]
  },
  {
    "slug": "rfid-discovery-ranger-tamper-evident",
    "title": "RFID Discovery R-TE-L",
    "brand": "RFID Discovery",
    "model": "R-TE-L",
    "sku": "R-TE-L",
    "subtitle": "RANGER-TAMPER-EVIDENT RFID TAG/LABEL VARIATION",
    "shortDesc": "Security tracking and management",
    "description": "SKU: R-TE-L. Supplier: RFID Discovery (Paragon ID). Category: RANGER-TAMPER-EVIDENT RFID TAG/LABEL VARIATION. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: RFID Tag / Label. Description: Specialized RFID solution for Security applications, optimized for performance and durability.",
    "customerSummary": "RANGER-TAMPER-EVIDENT RFID TAG/LABEL VARIATION | RFID Tag / Label | Applications: Security",
    "image": "https://www.rfiddiscovery.com/sites/default/files/styles/product_image/public/2022-03/RFID-Discovery-Logo.png",
    "datasheet": "",
    "productUrl": "https://www.rfiddiscovery.com/en-us/solutions/rfid",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Impinj M730",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "RFID Tag / Label",
    "sizeText": "",
    "material": "Standard",
    "fixedReadRange": "Standard",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP67",
    "applications": [
      "Security"
    ],
    "industries": [
      "Security"
    ],
    "tags": [
      "UHF",
      "RFID Tag / Label",
      "Non Metal",
      "Impinj M730",
      "Security"
    ]
  },
  {
    "slug": "rfid-discovery-ra9508",
    "title": "RFID Discovery RA9508",
    "brand": "RFID Discovery",
    "model": "RA9508",
    "sku": "RA9508",
    "subtitle": "RANGER FAMILY RAIN RFID INLAY",
    "shortDesc": "Logistics, industrial asset tracking, supply chain visibility",
    "description": "SKU: RA9508. Supplier: RFID Discovery (Paragon ID). Category: RANGER FAMILY RAIN RFID INLAY. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: RFID Inlay / Label. Description: High-performance RAIN RFID inlay developed specifically for logistics and industrial sectors.",
    "customerSummary": "RANGER FAMILY RAIN RFID INLAY | RFID Inlay / Label | Applications: Logistics, Industrial",
    "image": "https://www.paragon-id.com/sites/default/files/styles/product_image/public/2022-03/Ranger.png",
    "datasheet": "",
    "productUrl": "https://www.paragon-id.com/en/ranger-range",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP U78",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "RFID Inlay / Label",
    "sizeText": "95 x 8 mm",
    "material": "PET / Paper",
    "fixedReadRange": "Up to 12m",
    "handheldReadRange": "Up to 8m",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP67",
    "applications": [
      "Logistics",
      "Industrial"
    ],
    "industries": [
      "Logistics",
      "Industrial"
    ],
    "tags": [
      "UHF",
      "RFID Inlay / Label",
      "Non Metal",
      "NXP U78",
      "Logistics",
      "Industrial"
    ]
  },
  {
    "slug": "rfid-discovery-uwb-asset-tag-rugged",
    "title": "RFID Discovery UWB-ATR",
    "brand": "RFID Discovery",
    "model": "UWB-ATR",
    "sku": "UWB-ATR",
    "subtitle": "UWB-ASSET-TAG-RUGGED RFID TAG/LABEL VARIATION",
    "shortDesc": "Industrial tracking and management",
    "description": "SKU: UWB-ATR. Supplier: RFID Discovery (Paragon ID). Category: UWB-ASSET-TAG-RUGGED RFID TAG/LABEL VARIATION. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: RFID Tag / Label. Description: Specialized RFID solution for Industrial applications, optimized for performance and durability.",
    "customerSummary": "UWB-ASSET-TAG-RUGGED RFID TAG/LABEL VARIATION | RFID Tag / Label | Applications: Industrial",
    "image": "https://www.rfiddiscovery.com/sites/default/files/styles/product_image/public/2022-03/RFID-Discovery-Logo.png",
    "datasheet": "",
    "productUrl": "https://www.rfiddiscovery.com/en-us/solutions/rfid",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Impinj M730",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "RFID Tag / Label",
    "sizeText": "Rugged",
    "material": "Standard",
    "fixedReadRange": "Standard",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP67",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "RFID Tag / Label",
      "Non Metal",
      "Impinj M730",
      "Industrial"
    ]
  },
  {
    "slug": "rfid-discovery-uwb-tag-precision",
    "title": "RFID Discovery UWB-P1",
    "brand": "RFID Discovery",
    "model": "UWB-P1",
    "sku": "UWB-P1",
    "subtitle": "UWB-TAG-PRECISION RFID TAG/LABEL VARIATION",
    "shortDesc": "RTLS tracking and management",
    "description": "SKU: UWB-P1. Supplier: RFID Discovery (Paragon ID). Category: UWB-TAG-PRECISION RFID TAG/LABEL VARIATION. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: RFID Tag / Label. Description: Specialized RFID solution for RTLS applications, optimized for performance and durability.",
    "customerSummary": "UWB-TAG-PRECISION RFID TAG/LABEL VARIATION | RFID Tag / Label | Applications: RTLS",
    "image": "https://www.rfiddiscovery.com/sites/default/files/styles/product_image/public/2022-03/RFID-Discovery-Logo.png",
    "datasheet": "",
    "productUrl": "https://www.rfiddiscovery.com/en-us/solutions/rfid",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Impinj M730",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "RFID Tag / Label",
    "sizeText": "",
    "material": "Standard",
    "fixedReadRange": "Standard",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP67",
    "applications": [
      "RTLS"
    ],
    "industries": [
      "RTLS"
    ],
    "tags": [
      "UHF",
      "RFID Tag / Label",
      "Non Metal",
      "Impinj M730",
      "RTLS"
    ]
  },
  {
    "slug": "rfid-discovery-voyager-cargo-tag",
    "title": "RFID Discovery V-CARGO-T",
    "brand": "RFID Discovery",
    "model": "V-CARGO-T",
    "sku": "V-CARGO-T",
    "subtitle": "VOYAGER-CARGO-TAG RFID TAG/LABEL VARIATION",
    "shortDesc": "Aviation tracking and management",
    "description": "SKU: V-CARGO-T. Supplier: RFID Discovery (Paragon ID). Category: VOYAGER-CARGO-TAG RFID TAG/LABEL VARIATION. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: RFID Tag / Label. Description: Specialized RFID solution for Aviation applications, optimized for performance and durability.",
    "customerSummary": "VOYAGER-CARGO-TAG RFID TAG/LABEL VARIATION | RFID Tag / Label | Applications: Aviation",
    "image": "https://www.rfiddiscovery.com/sites/default/files/styles/product_image/public/2022-03/RFID-Discovery-Logo.png",
    "datasheet": "",
    "productUrl": "https://www.rfiddiscovery.com/en-us/solutions/rfid",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Impinj M730",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "RFID Tag / Label",
    "sizeText": "Large",
    "material": "Standard",
    "fixedReadRange": "Standard",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP67",
    "applications": [
      "Aviation"
    ],
    "industries": [
      "Aviation"
    ],
    "tags": [
      "UHF",
      "RFID Tag / Label",
      "Non Metal",
      "Impinj M730",
      "Aviation"
    ]
  },
  {
    "slug": "richrfid-eval01-cyclon-rm",
    "title": "RichRFID EVAL01-CYCLON-RM",
    "brand": "RichRFID",
    "model": "EVAL01-CYCLON-RM",
    "sku": "EVAL01-CYCLON-RM",
    "subtitle": "UHF Sensor Tag",
    "shortDesc": "Sensor monitoring",
    "description": "SKU: EVAL01-CYCLON-RM. Supplier: RichRFID. Category: UHF Sensor Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Sensor Tag. Description: Batteryless sensor tag for industrial monitoring.",
    "customerSummary": "UHF Sensor Tag | Sensor Tag | Applications: Sensors",
    "image": "https://www.richrfid.com/uploads/PS/sensor_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/508.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Farsens",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Sensor Tag",
    "sizeText": "",
    "material": "PCB",
    "fixedReadRange": "Up to 5m",
    "handheldReadRange": "Up to 3m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Sensors"
    ],
    "industries": [
      "Sensors"
    ],
    "tags": [
      "UHF",
      "Sensor Tag",
      "Non Metal",
      "Farsens",
      "Sensors"
    ]
  },
  {
    "slug": "richrfid-eval01-fenix-rm",
    "title": "RichRFID EVAL01-FENIX-RM",
    "brand": "RichRFID",
    "model": "EVAL01-FENIX-RM",
    "sku": "EVAL01-FENIX-RM",
    "subtitle": "UHF Sensor Tag",
    "shortDesc": "Sensor monitoring",
    "description": "SKU: EVAL01-FENIX-RM. Supplier: RichRFID. Category: UHF Sensor Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Sensor Tag. Description: Batteryless sensor tag for industrial monitoring.",
    "customerSummary": "UHF Sensor Tag | Sensor Tag | Applications: Sensors",
    "image": "https://www.richrfid.com/uploads/PS/sensor_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/508.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Farsens",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Sensor Tag",
    "sizeText": "",
    "material": "PCB",
    "fixedReadRange": "Up to 5m",
    "handheldReadRange": "Up to 3m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Sensors"
    ],
    "industries": [
      "Sensors"
    ],
    "tags": [
      "UHF",
      "Sensor Tag",
      "Non Metal",
      "Farsens",
      "Sensors"
    ]
  },
  {
    "slug": "richrfid-eval01-fenix-vortex-rm",
    "title": "RichRFID EVAL01-FENIX-VORTEX-RM",
    "brand": "RichRFID",
    "model": "EVAL01-FENIX-VORTEX-RM",
    "sku": "EVAL01-FENIX-VORTEX-RM",
    "subtitle": "UHF Sensor Tag",
    "shortDesc": "Sensor monitoring",
    "description": "SKU: EVAL01-FENIX-VORTEX-RM. Supplier: RichRFID. Category: UHF Sensor Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Sensor Tag. Description: Batteryless sensor tag for industrial monitoring.",
    "customerSummary": "UHF Sensor Tag | Sensor Tag | Applications: Sensors",
    "image": "https://www.richrfid.com/uploads/PS/sensor_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/508.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Farsens",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Sensor Tag",
    "sizeText": "",
    "material": "PCB",
    "fixedReadRange": "Up to 5m",
    "handheldReadRange": "Up to 3m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Sensors"
    ],
    "industries": [
      "Sensors"
    ],
    "tags": [
      "UHF",
      "Sensor Tag",
      "Non Metal",
      "Farsens",
      "Sensors"
    ]
  },
  {
    "slug": "richrfid-eval01-hydro-rm-h402",
    "title": "RichRFID EVAL01-HYDRO-RM-H402",
    "brand": "RichRFID",
    "model": "EVAL01-HYDRO-RM-H402",
    "sku": "EVAL01-HYDRO-RM-H402",
    "subtitle": "UHF Sensor Tag",
    "shortDesc": "Sensor monitoring",
    "description": "SKU: EVAL01-HYDRO-RM-H402. Supplier: RichRFID. Category: UHF Sensor Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Sensor Tag. Description: Batteryless sensor tag for industrial monitoring.",
    "customerSummary": "UHF Sensor Tag | Sensor Tag | Applications: Sensors",
    "image": "https://www.richrfid.com/uploads/PS/sensor_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/508.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Farsens",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Sensor Tag",
    "sizeText": "",
    "material": "PCB",
    "fixedReadRange": "Up to 5m",
    "handheldReadRange": "Up to 3m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Sensors"
    ],
    "industries": [
      "Sensors"
    ],
    "tags": [
      "UHF",
      "Sensor Tag",
      "Non Metal",
      "Farsens",
      "Sensors"
    ]
  },
  {
    "slug": "richrfid-eval01-hygro-fenix-rm",
    "title": "RichRFID EVAL01-HYGRO-FENIX-RM",
    "brand": "RichRFID",
    "model": "EVAL01-HYGRO-FENIX-RM",
    "sku": "EVAL01-HYGRO-FENIX-RM",
    "subtitle": "UHF Sensor Tag",
    "shortDesc": "Sensor monitoring",
    "description": "SKU: EVAL01-HYGRO-FENIX-RM. Supplier: RichRFID. Category: UHF Sensor Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Sensor Tag. Description: Batteryless sensor tag for industrial monitoring.",
    "customerSummary": "UHF Sensor Tag | Sensor Tag | Applications: Sensors",
    "image": "https://www.richrfid.com/uploads/PS/sensor_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/508.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Farsens",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Sensor Tag",
    "sizeText": "",
    "material": "PCB",
    "fixedReadRange": "Up to 5m",
    "handheldReadRange": "Up to 3m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Sensors"
    ],
    "industries": [
      "Sensors"
    ],
    "tags": [
      "UHF",
      "Sensor Tag",
      "Non Metal",
      "Farsens",
      "Sensors"
    ]
  },
  {
    "slug": "richrfid-eval01-kineo-rm",
    "title": "RichRFID EVAL01-KINEO-RM",
    "brand": "RichRFID",
    "model": "EVAL01-KINEO-RM",
    "sku": "EVAL01-KINEO-RM",
    "subtitle": "UHF Sensor Tag",
    "shortDesc": "Sensor monitoring",
    "description": "SKU: EVAL01-KINEO-RM. Supplier: RichRFID. Category: UHF Sensor Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Sensor Tag. Description: Batteryless sensor tag for industrial monitoring.",
    "customerSummary": "UHF Sensor Tag | Sensor Tag | Applications: Sensors",
    "image": "https://www.richrfid.com/uploads/PS/sensor_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/508.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Farsens",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Sensor Tag",
    "sizeText": "",
    "material": "PCB",
    "fixedReadRange": "Up to 5m",
    "handheldReadRange": "Up to 3m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Sensors"
    ],
    "industries": [
      "Sensors"
    ],
    "tags": [
      "UHF",
      "Sensor Tag",
      "Non Metal",
      "Farsens",
      "Sensors"
    ]
  },
  {
    "slug": "richrfid-eval01-magneto-rm",
    "title": "RichRFID EVAL01-MAGNETO-RM",
    "brand": "RichRFID",
    "model": "EVAL01-MAGNETO-RM",
    "sku": "EVAL01-MAGNETO-RM",
    "subtitle": "UHF Sensor Tag",
    "shortDesc": "Sensor monitoring",
    "description": "SKU: EVAL01-MAGNETO-RM. Supplier: RichRFID. Category: UHF Sensor Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Sensor Tag. Description: Batteryless sensor tag for industrial monitoring.",
    "customerSummary": "UHF Sensor Tag | Sensor Tag | Applications: Sensors",
    "image": "https://www.richrfid.com/uploads/PS/sensor_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/508.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Farsens",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Sensor Tag",
    "sizeText": "",
    "material": "PCB",
    "fixedReadRange": "Up to 5m",
    "handheldReadRange": "Up to 3m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Sensors"
    ],
    "industries": [
      "Sensors"
    ],
    "tags": [
      "UHF",
      "Sensor Tag",
      "Non Metal",
      "Farsens",
      "Sensors"
    ]
  },
  {
    "slug": "richrfid-eval01-photon-r",
    "title": "RichRFID EVAL01-PHOTON-R",
    "brand": "RichRFID",
    "model": "EVAL01-PHOTON-R",
    "sku": "EVAL01-PHOTON-R",
    "subtitle": "UHF Sensor Tag",
    "shortDesc": "Sensor monitoring",
    "description": "SKU: EVAL01-PHOTON-R. Supplier: RichRFID. Category: UHF Sensor Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Sensor Tag. Description: Batteryless sensor tag for industrial monitoring.",
    "customerSummary": "UHF Sensor Tag | Sensor Tag | Applications: Sensors",
    "image": "https://www.richrfid.com/uploads/PS/sensor_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/508.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Farsens",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Sensor Tag",
    "sizeText": "",
    "material": "PCB",
    "fixedReadRange": "Up to 5m",
    "handheldReadRange": "Up to 3m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Sensors"
    ],
    "industries": [
      "Sensors"
    ],
    "tags": [
      "UHF",
      "Sensor Tag",
      "Non Metal",
      "Farsens",
      "Sensors"
    ]
  },
  {
    "slug": "richrfid-eval01-pyros-rm-0373",
    "title": "RichRFID EVAL01-PYROS-RM-0373",
    "brand": "RichRFID",
    "model": "EVAL01-PYROS-RM-0373",
    "sku": "EVAL01-PYROS-RM-0373",
    "subtitle": "UHF Sensor Tag",
    "shortDesc": "Sensor monitoring",
    "description": "SKU: EVAL01-PYROS-RM-0373. Supplier: RichRFID. Category: UHF Sensor Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Sensor Tag. Description: Batteryless sensor tag for industrial monitoring.",
    "customerSummary": "UHF Sensor Tag | Sensor Tag | Applications: Sensors",
    "image": "https://www.richrfid.com/uploads/PS/sensor_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/508.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Farsens",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Sensor Tag",
    "sizeText": "",
    "material": "PCB",
    "fixedReadRange": "Up to 5m",
    "handheldReadRange": "Up to 3m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Sensors"
    ],
    "industries": [
      "Sensors"
    ],
    "tags": [
      "UHF",
      "Sensor Tag",
      "Non Metal",
      "Farsens",
      "Sensors"
    ]
  },
  {
    "slug": "richrfid-eval01-shadow-rm-l108g",
    "title": "RichRFID EVAL01-SHADOW-RM-L108G",
    "brand": "RichRFID",
    "model": "EVAL01-SHADOW-RM-L108G",
    "sku": "EVAL01-SHADOW-RM-L108G",
    "subtitle": "UHF Sensor Tag",
    "shortDesc": "Sensor monitoring",
    "description": "SKU: EVAL01-SHADOW-RM-L108G. Supplier: RichRFID. Category: UHF Sensor Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Sensor Tag. Description: Batteryless sensor tag for industrial monitoring.",
    "customerSummary": "UHF Sensor Tag | Sensor Tag | Applications: Sensors",
    "image": "https://www.richrfid.com/uploads/PS/sensor_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/508.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Farsens",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Sensor Tag",
    "sizeText": "",
    "material": "PCB",
    "fixedReadRange": "Up to 5m",
    "handheldReadRange": "Up to 3m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Sensors"
    ],
    "industries": [
      "Sensors"
    ],
    "tags": [
      "UHF",
      "Sensor Tag",
      "Non Metal",
      "Farsens",
      "Sensors"
    ]
  },
  {
    "slug": "richrfid-eval01-stella-r",
    "title": "RichRFID EVAL01-STELLA-R",
    "brand": "RichRFID",
    "model": "EVAL01-STELLA-R",
    "sku": "EVAL01-STELLA-R",
    "subtitle": "UHF Sensor Tag",
    "shortDesc": "Sensor monitoring",
    "description": "SKU: EVAL01-STELLA-R. Supplier: RichRFID. Category: UHF Sensor Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Sensor Tag. Description: Batteryless sensor tag for industrial monitoring.",
    "customerSummary": "UHF Sensor Tag | Sensor Tag | Applications: Sensors",
    "image": "https://www.richrfid.com/uploads/PS/sensor_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/508.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Farsens",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Sensor Tag",
    "sizeText": "",
    "material": "PCB",
    "fixedReadRange": "Up to 5m",
    "handheldReadRange": "Up to 3m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Sensors"
    ],
    "industries": [
      "Sensors"
    ],
    "tags": [
      "UHF",
      "Sensor Tag",
      "Non Metal",
      "Farsens",
      "Sensors"
    ]
  },
  {
    "slug": "richrfid-eval01-x5-r",
    "title": "RichRFID EVAL01-X5-R",
    "brand": "RichRFID",
    "model": "EVAL01-X5-R",
    "sku": "EVAL01-X5-R",
    "subtitle": "UHF Sensor Tag",
    "shortDesc": "Sensor monitoring",
    "description": "SKU: EVAL01-X5-R. Supplier: RichRFID. Category: UHF Sensor Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Sensor Tag. Description: Batteryless sensor tag for industrial monitoring.",
    "customerSummary": "UHF Sensor Tag | Sensor Tag | Applications: Sensors",
    "image": "https://www.richrfid.com/uploads/PS/sensor_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/508.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Farsens",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Sensor Tag",
    "sizeText": "",
    "material": "PCB",
    "fixedReadRange": "Up to 5m",
    "handheldReadRange": "Up to 3m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Sensors"
    ],
    "industries": [
      "Sensors"
    ],
    "tags": [
      "UHF",
      "Sensor Tag",
      "Non Metal",
      "Farsens",
      "Sensors"
    ]
  },
  {
    "slug": "richrfid-eval01-zygos-rm",
    "title": "RichRFID EVAL01-ZYGOS-RM",
    "brand": "RichRFID",
    "model": "EVAL01-ZYGOS-RM",
    "sku": "EVAL01-ZYGOS-RM",
    "subtitle": "UHF Sensor Tag",
    "shortDesc": "Sensor monitoring",
    "description": "SKU: EVAL01-ZYGOS-RM. Supplier: RichRFID. Category: UHF Sensor Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Sensor Tag. Description: Batteryless sensor tag for industrial monitoring.",
    "customerSummary": "UHF Sensor Tag | Sensor Tag | Applications: Sensors",
    "image": "https://www.richrfid.com/uploads/PS/sensor_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/508.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Farsens",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Sensor Tag",
    "sizeText": "",
    "material": "PCB",
    "fixedReadRange": "Up to 5m",
    "handheldReadRange": "Up to 3m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Sensors"
    ],
    "industries": [
      "Sensors"
    ],
    "tags": [
      "UHF",
      "Sensor Tag",
      "Non Metal",
      "Farsens",
      "Sensors"
    ]
  },
  {
    "slug": "richrfid-eval02-fenix-rm",
    "title": "RichRFID EVAL02-FENIX-RM",
    "brand": "RichRFID",
    "model": "EVAL02-FENIX-RM",
    "sku": "EVAL02-FENIX-RM",
    "subtitle": "UHF Sensor Tag",
    "shortDesc": "Sensor monitoring",
    "description": "SKU: EVAL02-FENIX-RM. Supplier: RichRFID. Category: UHF Sensor Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Sensor Tag. Description: Batteryless sensor tag for industrial monitoring.",
    "customerSummary": "UHF Sensor Tag | Sensor Tag | Applications: Sensors",
    "image": "https://www.richrfid.com/uploads/PS/sensor_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/508.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Farsens",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Sensor Tag",
    "sizeText": "",
    "material": "PCB",
    "fixedReadRange": "Up to 5m",
    "handheldReadRange": "Up to 3m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Sensors"
    ],
    "industries": [
      "Sensors"
    ],
    "tags": [
      "UHF",
      "Sensor Tag",
      "Non Metal",
      "Farsens",
      "Sensors"
    ]
  },
  {
    "slug": "richrfid-eval02-hygro-fenix-rm",
    "title": "RichRFID EVAL02-HYGRO-FENIX-RM",
    "brand": "RichRFID",
    "model": "EVAL02-HYGRO-FENIX-RM",
    "sku": "EVAL02-HYGRO-FENIX-RM",
    "subtitle": "UHF Sensor Tag",
    "shortDesc": "Sensor monitoring",
    "description": "SKU: EVAL02-HYGRO-FENIX-RM. Supplier: RichRFID. Category: UHF Sensor Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Sensor Tag. Description: Batteryless sensor tag for industrial monitoring.",
    "customerSummary": "UHF Sensor Tag | Sensor Tag | Applications: Sensors",
    "image": "https://www.richrfid.com/uploads/PS/sensor_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/508.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Farsens",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Sensor Tag",
    "sizeText": "",
    "material": "PCB",
    "fixedReadRange": "Up to 5m",
    "handheldReadRange": "Up to 3m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Sensors"
    ],
    "industries": [
      "Sensors"
    ],
    "tags": [
      "UHF",
      "Sensor Tag",
      "Non Metal",
      "Farsens",
      "Sensors"
    ]
  },
  {
    "slug": "richrfid-eval02-kineo-rm",
    "title": "RichRFID EVAL02-KINEO-RM",
    "brand": "RichRFID",
    "model": "EVAL02-KINEO-RM",
    "sku": "EVAL02-KINEO-RM",
    "subtitle": "UHF Sensor Tag",
    "shortDesc": "Sensor monitoring",
    "description": "SKU: EVAL02-KINEO-RM. Supplier: RichRFID. Category: UHF Sensor Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Sensor Tag. Description: Batteryless sensor tag for industrial monitoring.",
    "customerSummary": "UHF Sensor Tag | Sensor Tag | Applications: Sensors",
    "image": "https://www.richrfid.com/uploads/PS/sensor_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/508.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Farsens",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Sensor Tag",
    "sizeText": "",
    "material": "PCB",
    "fixedReadRange": "Up to 5m",
    "handheldReadRange": "Up to 3m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Sensors"
    ],
    "industries": [
      "Sensors"
    ],
    "tags": [
      "UHF",
      "Sensor Tag",
      "Non Metal",
      "Farsens",
      "Sensors"
    ]
  },
  {
    "slug": "richrfid-eval02-stella-r",
    "title": "RichRFID EVAL02-STELLA-R",
    "brand": "RichRFID",
    "model": "EVAL02-STELLA-R",
    "sku": "EVAL02-STELLA-R",
    "subtitle": "UHF Sensor Tag",
    "shortDesc": "Sensor monitoring",
    "description": "SKU: EVAL02-STELLA-R. Supplier: RichRFID. Category: UHF Sensor Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Sensor Tag. Description: Batteryless sensor tag for industrial monitoring.",
    "customerSummary": "UHF Sensor Tag | Sensor Tag | Applications: Sensors",
    "image": "https://www.richrfid.com/uploads/PS/sensor_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/508.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Farsens",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Sensor Tag",
    "sizeText": "",
    "material": "PCB",
    "fixedReadRange": "Up to 5m",
    "handheldReadRange": "Up to 3m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Sensors"
    ],
    "industries": [
      "Sensors"
    ],
    "tags": [
      "UHF",
      "Sensor Tag",
      "Non Metal",
      "Farsens",
      "Sensors"
    ]
  },
  {
    "slug": "richrfid-evalo1-titan-r",
    "title": "RichRFID EVALO1-TITAN-R",
    "brand": "RichRFID",
    "model": "EVALO1-TITAN-R",
    "sku": "EVALO1-TITAN-R",
    "subtitle": "UHF Sensor Tag",
    "shortDesc": "Sensor monitoring",
    "description": "SKU: EVALO1-TITAN-R. Supplier: RichRFID. Category: UHF Sensor Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Sensor Tag. Description: Batteryless sensor tag for industrial monitoring.",
    "customerSummary": "UHF Sensor Tag | Sensor Tag | Applications: Sensors",
    "image": "https://www.richrfid.com/uploads/PS/sensor_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/508.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Farsens",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Sensor Tag",
    "sizeText": "",
    "material": "PCB",
    "fixedReadRange": "Up to 5m",
    "handheldReadRange": "Up to 3m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Sensors"
    ],
    "industries": [
      "Sensors"
    ],
    "tags": [
      "UHF",
      "Sensor Tag",
      "Non Metal",
      "Farsens",
      "Sensors"
    ]
  },
  {
    "slug": "richrfid-evalo1-truck-pt-rm",
    "title": "RichRFID EVALO1-TRUCK-PT-RM",
    "brand": "RichRFID",
    "model": "EVALO1-TRUCK-PT-RM",
    "sku": "EVALO1-TRUCK-PT-RM",
    "subtitle": "UHF Sensor Tag",
    "shortDesc": "Sensor monitoring",
    "description": "SKU: EVALO1-TRUCK-PT-RM. Supplier: RichRFID. Category: UHF Sensor Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Sensor Tag. Description: Batteryless sensor tag for industrial monitoring.",
    "customerSummary": "UHF Sensor Tag | Sensor Tag | Applications: Sensors",
    "image": "https://www.richrfid.com/uploads/PS/sensor_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/508.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Farsens",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Sensor Tag",
    "sizeText": "",
    "material": "PCB",
    "fixedReadRange": "Up to 5m",
    "handheldReadRange": "Up to 3m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Sensors"
    ],
    "industries": [
      "Sensors"
    ],
    "tags": [
      "UHF",
      "Sensor Tag",
      "Non Metal",
      "Farsens",
      "Sensors"
    ]
  },
  {
    "slug": "richrfid-hf-label-1",
    "title": "RichRFID HF-Label-1",
    "brand": "RichRFID",
    "model": "HF-Label-1",
    "sku": "HF-Label-1",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-1. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-10",
    "title": "RichRFID HF-Label-10",
    "brand": "RichRFID",
    "model": "HF-Label-10",
    "sku": "HF-Label-10",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-10. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-11",
    "title": "RichRFID HF-Label-11",
    "brand": "RichRFID",
    "model": "HF-Label-11",
    "sku": "HF-Label-11",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-11. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-12",
    "title": "RichRFID HF-Label-12",
    "brand": "RichRFID",
    "model": "HF-Label-12",
    "sku": "HF-Label-12",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-12. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-13",
    "title": "RichRFID HF-Label-13",
    "brand": "RichRFID",
    "model": "HF-Label-13",
    "sku": "HF-Label-13",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-13. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-14",
    "title": "RichRFID HF-Label-14",
    "brand": "RichRFID",
    "model": "HF-Label-14",
    "sku": "HF-Label-14",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-14. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-15",
    "title": "RichRFID HF-Label-15",
    "brand": "RichRFID",
    "model": "HF-Label-15",
    "sku": "HF-Label-15",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-15. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-16",
    "title": "RichRFID HF-Label-16",
    "brand": "RichRFID",
    "model": "HF-Label-16",
    "sku": "HF-Label-16",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-16. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-17",
    "title": "RichRFID HF-Label-17",
    "brand": "RichRFID",
    "model": "HF-Label-17",
    "sku": "HF-Label-17",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-17. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-18",
    "title": "RichRFID HF-Label-18",
    "brand": "RichRFID",
    "model": "HF-Label-18",
    "sku": "HF-Label-18",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-18. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-19",
    "title": "RichRFID HF-Label-19",
    "brand": "RichRFID",
    "model": "HF-Label-19",
    "sku": "HF-Label-19",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-19. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-2",
    "title": "RichRFID HF-Label-2",
    "brand": "RichRFID",
    "model": "HF-Label-2",
    "sku": "HF-Label-2",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-2. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-20",
    "title": "RichRFID HF-Label-20",
    "brand": "RichRFID",
    "model": "HF-Label-20",
    "sku": "HF-Label-20",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-20. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-21",
    "title": "RichRFID HF-Label-21",
    "brand": "RichRFID",
    "model": "HF-Label-21",
    "sku": "HF-Label-21",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-21. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-22",
    "title": "RichRFID HF-Label-22",
    "brand": "RichRFID",
    "model": "HF-Label-22",
    "sku": "HF-Label-22",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-22. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-23",
    "title": "RichRFID HF-Label-23",
    "brand": "RichRFID",
    "model": "HF-Label-23",
    "sku": "HF-Label-23",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-23. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-24",
    "title": "RichRFID HF-Label-24",
    "brand": "RichRFID",
    "model": "HF-Label-24",
    "sku": "HF-Label-24",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-24. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-25",
    "title": "RichRFID HF-Label-25",
    "brand": "RichRFID",
    "model": "HF-Label-25",
    "sku": "HF-Label-25",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-25. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-26",
    "title": "RichRFID HF-Label-26",
    "brand": "RichRFID",
    "model": "HF-Label-26",
    "sku": "HF-Label-26",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-26. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-27",
    "title": "RichRFID HF-Label-27",
    "brand": "RichRFID",
    "model": "HF-Label-27",
    "sku": "HF-Label-27",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-27. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-28",
    "title": "RichRFID HF-Label-28",
    "brand": "RichRFID",
    "model": "HF-Label-28",
    "sku": "HF-Label-28",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-28. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-29",
    "title": "RichRFID HF-Label-29",
    "brand": "RichRFID",
    "model": "HF-Label-29",
    "sku": "HF-Label-29",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-29. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-3",
    "title": "RichRFID HF-Label-3",
    "brand": "RichRFID",
    "model": "HF-Label-3",
    "sku": "HF-Label-3",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-3. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-30",
    "title": "RichRFID HF-Label-30",
    "brand": "RichRFID",
    "model": "HF-Label-30",
    "sku": "HF-Label-30",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-30. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-31",
    "title": "RichRFID HF-Label-31",
    "brand": "RichRFID",
    "model": "HF-Label-31",
    "sku": "HF-Label-31",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-31. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-32",
    "title": "RichRFID HF-Label-32",
    "brand": "RichRFID",
    "model": "HF-Label-32",
    "sku": "HF-Label-32",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-32. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-33",
    "title": "RichRFID HF-Label-33",
    "brand": "RichRFID",
    "model": "HF-Label-33",
    "sku": "HF-Label-33",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-33. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-34",
    "title": "RichRFID HF-Label-34",
    "brand": "RichRFID",
    "model": "HF-Label-34",
    "sku": "HF-Label-34",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-34. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-35",
    "title": "RichRFID HF-Label-35",
    "brand": "RichRFID",
    "model": "HF-Label-35",
    "sku": "HF-Label-35",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-35. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-36",
    "title": "RichRFID HF-Label-36",
    "brand": "RichRFID",
    "model": "HF-Label-36",
    "sku": "HF-Label-36",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-36. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-37",
    "title": "RichRFID HF-Label-37",
    "brand": "RichRFID",
    "model": "HF-Label-37",
    "sku": "HF-Label-37",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-37. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-38",
    "title": "RichRFID HF-Label-38",
    "brand": "RichRFID",
    "model": "HF-Label-38",
    "sku": "HF-Label-38",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-38. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-39",
    "title": "RichRFID HF-Label-39",
    "brand": "RichRFID",
    "model": "HF-Label-39",
    "sku": "HF-Label-39",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-39. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-4",
    "title": "RichRFID HF-Label-4",
    "brand": "RichRFID",
    "model": "HF-Label-4",
    "sku": "HF-Label-4",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-4. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-40",
    "title": "RichRFID HF-Label-40",
    "brand": "RichRFID",
    "model": "HF-Label-40",
    "sku": "HF-Label-40",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-40. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-41",
    "title": "RichRFID HF-Label-41",
    "brand": "RichRFID",
    "model": "HF-Label-41",
    "sku": "HF-Label-41",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-41. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-42",
    "title": "RichRFID HF-Label-42",
    "brand": "RichRFID",
    "model": "HF-Label-42",
    "sku": "HF-Label-42",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-42. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-43",
    "title": "RichRFID HF-Label-43",
    "brand": "RichRFID",
    "model": "HF-Label-43",
    "sku": "HF-Label-43",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-43. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-44",
    "title": "RichRFID HF-Label-44",
    "brand": "RichRFID",
    "model": "HF-Label-44",
    "sku": "HF-Label-44",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-44. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-45",
    "title": "RichRFID HF-Label-45",
    "brand": "RichRFID",
    "model": "HF-Label-45",
    "sku": "HF-Label-45",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-45. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-46",
    "title": "RichRFID HF-Label-46",
    "brand": "RichRFID",
    "model": "HF-Label-46",
    "sku": "HF-Label-46",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-46. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-47",
    "title": "RichRFID HF-Label-47",
    "brand": "RichRFID",
    "model": "HF-Label-47",
    "sku": "HF-Label-47",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-47. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-48",
    "title": "RichRFID HF-Label-48",
    "brand": "RichRFID",
    "model": "HF-Label-48",
    "sku": "HF-Label-48",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-48. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-49",
    "title": "RichRFID HF-Label-49",
    "brand": "RichRFID",
    "model": "HF-Label-49",
    "sku": "HF-Label-49",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-49. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-5",
    "title": "RichRFID HF-Label-5",
    "brand": "RichRFID",
    "model": "HF-Label-5",
    "sku": "HF-Label-5",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-5. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-50",
    "title": "RichRFID HF-Label-50",
    "brand": "RichRFID",
    "model": "HF-Label-50",
    "sku": "HF-Label-50",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-50. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-51",
    "title": "RichRFID HF-Label-51",
    "brand": "RichRFID",
    "model": "HF-Label-51",
    "sku": "HF-Label-51",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-51. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-52",
    "title": "RichRFID HF-Label-52",
    "brand": "RichRFID",
    "model": "HF-Label-52",
    "sku": "HF-Label-52",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-52. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-53",
    "title": "RichRFID HF-Label-53",
    "brand": "RichRFID",
    "model": "HF-Label-53",
    "sku": "HF-Label-53",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-53. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-54",
    "title": "RichRFID HF-Label-54",
    "brand": "RichRFID",
    "model": "HF-Label-54",
    "sku": "HF-Label-54",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-54. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-55",
    "title": "RichRFID HF-Label-55",
    "brand": "RichRFID",
    "model": "HF-Label-55",
    "sku": "HF-Label-55",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-55. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-56",
    "title": "RichRFID HF-Label-56",
    "brand": "RichRFID",
    "model": "HF-Label-56",
    "sku": "HF-Label-56",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-56. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-57",
    "title": "RichRFID HF-Label-57",
    "brand": "RichRFID",
    "model": "HF-Label-57",
    "sku": "HF-Label-57",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-57. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-58",
    "title": "RichRFID HF-Label-58",
    "brand": "RichRFID",
    "model": "HF-Label-58",
    "sku": "HF-Label-58",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-58. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-59",
    "title": "RichRFID HF-Label-59",
    "brand": "RichRFID",
    "model": "HF-Label-59",
    "sku": "HF-Label-59",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-59. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-6",
    "title": "RichRFID HF-Label-6",
    "brand": "RichRFID",
    "model": "HF-Label-6",
    "sku": "HF-Label-6",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-6. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-60",
    "title": "RichRFID HF-Label-60",
    "brand": "RichRFID",
    "model": "HF-Label-60",
    "sku": "HF-Label-60",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-60. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-7",
    "title": "RichRFID HF-Label-7",
    "brand": "RichRFID",
    "model": "HF-Label-7",
    "sku": "HF-Label-7",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-7. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-8",
    "title": "RichRFID HF-Label-8",
    "brand": "RichRFID",
    "model": "HF-Label-8",
    "sku": "HF-Label-8",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-8. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-hf-label-9",
    "title": "RichRFID HF-Label-9",
    "brand": "RichRFID",
    "model": "HF-Label-9",
    "sku": "HF-Label-9",
    "subtitle": "HF/NFC Inlay/Label",
    "shortDesc": "NFC applications",
    "description": "SKU: HF-Label-9. Supplier: RichRFID. Category: HF/NFC Inlay/Label. Frequency: HF 13.56 MHz. Non-metal surface application. Form factor: Label. Description: High-frequency RFID label for short-range tracking.",
    "customerSummary": "HF/NFC Inlay/Label | Label | Applications: NFC",
    "image": "https://www.richrfid.com/uploads/PS/hf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/425.html",
    "frequency": "HF",
    "frequencyBand": "13.56 MHz",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10cm",
    "handheldReadRange": "Up to 5cm",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "NFC"
    ],
    "industries": [
      "NFC"
    ],
    "tags": [
      "HF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "NFC"
    ]
  },
  {
    "slug": "richrfid-la401",
    "title": "RichRFID LA401",
    "brand": "RichRFID",
    "model": "LA401",
    "sku": "LA401",
    "subtitle": "UHF Laundry Tag",
    "shortDesc": "Laundry management",
    "description": "SKU: LA401. Supplier: RichRFID. Category: UHF Laundry Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Laundry Tag. Description: High-performance UHF laundry tag for textile tracking.",
    "customerSummary": "UHF Laundry Tag | Laundry Tag | Applications: Laundry",
    "image": "https://www.richrfid.com/uploads/PS/laundry_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/507.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Laundry Tag",
    "sizeText": "",
    "material": "Textile/Silicone",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Laundry"
    ],
    "industries": [
      "Laundry"
    ],
    "tags": [
      "UHF",
      "Laundry Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Laundry"
    ]
  },
  {
    "slug": "richrfid-la401-p",
    "title": "RichRFID LA401-P",
    "brand": "RichRFID",
    "model": "LA401-P",
    "sku": "LA401-P",
    "subtitle": "UHF Laundry Tag",
    "shortDesc": "Laundry management",
    "description": "SKU: LA401-P. Supplier: RichRFID. Category: UHF Laundry Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Laundry Tag. Description: High-performance UHF laundry tag for textile tracking.",
    "customerSummary": "UHF Laundry Tag | Laundry Tag | Applications: Laundry",
    "image": "https://www.richrfid.com/uploads/PS/laundry_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/507.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Laundry Tag",
    "sizeText": "",
    "material": "Textile/Silicone",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Laundry"
    ],
    "industries": [
      "Laundry"
    ],
    "tags": [
      "UHF",
      "Laundry Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Laundry"
    ]
  },
  {
    "slug": "richrfid-la402",
    "title": "RichRFID LA402",
    "brand": "RichRFID",
    "model": "LA402",
    "sku": "LA402",
    "subtitle": "UHF Laundry Tag",
    "shortDesc": "Laundry management",
    "description": "SKU: LA402. Supplier: RichRFID. Category: UHF Laundry Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Laundry Tag. Description: High-performance UHF laundry tag for textile tracking.",
    "customerSummary": "UHF Laundry Tag | Laundry Tag | Applications: Laundry",
    "image": "https://www.richrfid.com/uploads/PS/laundry_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/507.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Laundry Tag",
    "sizeText": "",
    "material": "Textile/Silicone",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Laundry"
    ],
    "industries": [
      "Laundry"
    ],
    "tags": [
      "UHF",
      "Laundry Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Laundry"
    ]
  },
  {
    "slug": "richrfid-la402-p",
    "title": "RichRFID LA402-P",
    "brand": "RichRFID",
    "model": "LA402-P",
    "sku": "LA402-P",
    "subtitle": "UHF Laundry Tag",
    "shortDesc": "Laundry management",
    "description": "SKU: LA402-P. Supplier: RichRFID. Category: UHF Laundry Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Laundry Tag. Description: High-performance UHF laundry tag for textile tracking.",
    "customerSummary": "UHF Laundry Tag | Laundry Tag | Applications: Laundry",
    "image": "https://www.richrfid.com/uploads/PS/laundry_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/507.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Laundry Tag",
    "sizeText": "",
    "material": "Textile/Silicone",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Laundry"
    ],
    "industries": [
      "Laundry"
    ],
    "tags": [
      "UHF",
      "Laundry Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Laundry"
    ]
  },
  {
    "slug": "richrfid-la403",
    "title": "RichRFID LA403",
    "brand": "RichRFID",
    "model": "LA403",
    "sku": "LA403",
    "subtitle": "UHF Laundry Tag",
    "shortDesc": "Laundry management",
    "description": "SKU: LA403. Supplier: RichRFID. Category: UHF Laundry Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Laundry Tag. Description: High-performance UHF laundry tag for textile tracking.",
    "customerSummary": "UHF Laundry Tag | Laundry Tag | Applications: Laundry",
    "image": "https://www.richrfid.com/uploads/PS/laundry_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/507.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Laundry Tag",
    "sizeText": "",
    "material": "Textile/Silicone",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Laundry"
    ],
    "industries": [
      "Laundry"
    ],
    "tags": [
      "UHF",
      "Laundry Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Laundry"
    ]
  },
  {
    "slug": "richrfid-la404",
    "title": "RichRFID LA404",
    "brand": "RichRFID",
    "model": "LA404",
    "sku": "LA404",
    "subtitle": "UHF Laundry Tag",
    "shortDesc": "Laundry management",
    "description": "SKU: LA404. Supplier: RichRFID. Category: UHF Laundry Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Laundry Tag. Description: High-performance UHF laundry tag for textile tracking.",
    "customerSummary": "UHF Laundry Tag | Laundry Tag | Applications: Laundry",
    "image": "https://www.richrfid.com/uploads/PS/laundry_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/507.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Laundry Tag",
    "sizeText": "",
    "material": "Textile/Silicone",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Laundry"
    ],
    "industries": [
      "Laundry"
    ],
    "tags": [
      "UHF",
      "Laundry Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Laundry"
    ]
  },
  {
    "slug": "richrfid-la404-p",
    "title": "RichRFID LA404-P",
    "brand": "RichRFID",
    "model": "LA404-P",
    "sku": "LA404-P",
    "subtitle": "UHF Laundry Tag",
    "shortDesc": "Laundry management",
    "description": "SKU: LA404-P. Supplier: RichRFID. Category: UHF Laundry Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Laundry Tag. Description: High-performance UHF laundry tag for textile tracking.",
    "customerSummary": "UHF Laundry Tag | Laundry Tag | Applications: Laundry",
    "image": "https://www.richrfid.com/uploads/PS/laundry_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/507.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Laundry Tag",
    "sizeText": "",
    "material": "Textile/Silicone",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Laundry"
    ],
    "industries": [
      "Laundry"
    ],
    "tags": [
      "UHF",
      "Laundry Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Laundry"
    ]
  },
  {
    "slug": "richrfid-la405",
    "title": "RichRFID LA405",
    "brand": "RichRFID",
    "model": "LA405",
    "sku": "LA405",
    "subtitle": "UHF Laundry Tag",
    "shortDesc": "Laundry management",
    "description": "SKU: LA405. Supplier: RichRFID. Category: UHF Laundry Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Laundry Tag. Description: High-performance UHF laundry tag for textile tracking.",
    "customerSummary": "UHF Laundry Tag | Laundry Tag | Applications: Laundry",
    "image": "https://www.richrfid.com/uploads/PS/laundry_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/507.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Laundry Tag",
    "sizeText": "",
    "material": "Textile/Silicone",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Laundry"
    ],
    "industries": [
      "Laundry"
    ],
    "tags": [
      "UHF",
      "Laundry Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Laundry"
    ]
  },
  {
    "slug": "richrfid-la406",
    "title": "RichRFID LA406",
    "brand": "RichRFID",
    "model": "LA406",
    "sku": "LA406",
    "subtitle": "UHF Laundry Tag",
    "shortDesc": "Laundry management",
    "description": "SKU: LA406. Supplier: RichRFID. Category: UHF Laundry Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Laundry Tag. Description: High-performance UHF laundry tag for textile tracking.",
    "customerSummary": "UHF Laundry Tag | Laundry Tag | Applications: Laundry",
    "image": "https://www.richrfid.com/uploads/PS/laundry_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/507.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Laundry Tag",
    "sizeText": "",
    "material": "Textile/Silicone",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Laundry"
    ],
    "industries": [
      "Laundry"
    ],
    "tags": [
      "UHF",
      "Laundry Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Laundry"
    ]
  },
  {
    "slug": "richrfid-la406-p",
    "title": "RichRFID LA406-P",
    "brand": "RichRFID",
    "model": "LA406-P",
    "sku": "LA406-P",
    "subtitle": "UHF Laundry Tag",
    "shortDesc": "Laundry management",
    "description": "SKU: LA406-P. Supplier: RichRFID. Category: UHF Laundry Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Laundry Tag. Description: High-performance UHF laundry tag for textile tracking.",
    "customerSummary": "UHF Laundry Tag | Laundry Tag | Applications: Laundry",
    "image": "https://www.richrfid.com/uploads/PS/laundry_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/507.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Laundry Tag",
    "sizeText": "",
    "material": "Textile/Silicone",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Laundry"
    ],
    "industries": [
      "Laundry"
    ],
    "tags": [
      "UHF",
      "Laundry Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Laundry"
    ]
  },
  {
    "slug": "richrfid-la407",
    "title": "RichRFID LA407",
    "brand": "RichRFID",
    "model": "LA407",
    "sku": "LA407",
    "subtitle": "UHF Laundry Tag",
    "shortDesc": "Laundry management",
    "description": "SKU: LA407. Supplier: RichRFID. Category: UHF Laundry Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Laundry Tag. Description: High-performance UHF laundry tag for textile tracking.",
    "customerSummary": "UHF Laundry Tag | Laundry Tag | Applications: Laundry",
    "image": "https://www.richrfid.com/uploads/PS/laundry_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/507.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Laundry Tag",
    "sizeText": "",
    "material": "Textile/Silicone",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Laundry"
    ],
    "industries": [
      "Laundry"
    ],
    "tags": [
      "UHF",
      "Laundry Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Laundry"
    ]
  },
  {
    "slug": "richrfid-la407-p",
    "title": "RichRFID LA407-P",
    "brand": "RichRFID",
    "model": "LA407-P",
    "sku": "LA407-P",
    "subtitle": "UHF Laundry Tag",
    "shortDesc": "Laundry management",
    "description": "SKU: LA407-P. Supplier: RichRFID. Category: UHF Laundry Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Laundry Tag. Description: High-performance UHF laundry tag for textile tracking.",
    "customerSummary": "UHF Laundry Tag | Laundry Tag | Applications: Laundry",
    "image": "https://www.richrfid.com/uploads/PS/laundry_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/507.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Laundry Tag",
    "sizeText": "",
    "material": "Textile/Silicone",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Laundry"
    ],
    "industries": [
      "Laundry"
    ],
    "tags": [
      "UHF",
      "Laundry Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Laundry"
    ]
  },
  {
    "slug": "richrfid-la408",
    "title": "RichRFID LA408",
    "brand": "RichRFID",
    "model": "LA408",
    "sku": "LA408",
    "subtitle": "UHF Laundry Tag",
    "shortDesc": "Laundry management",
    "description": "SKU: LA408. Supplier: RichRFID. Category: UHF Laundry Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Laundry Tag. Description: High-performance UHF laundry tag for textile tracking.",
    "customerSummary": "UHF Laundry Tag | Laundry Tag | Applications: Laundry",
    "image": "https://www.richrfid.com/uploads/PS/laundry_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/507.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Laundry Tag",
    "sizeText": "",
    "material": "Textile/Silicone",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Laundry"
    ],
    "industries": [
      "Laundry"
    ],
    "tags": [
      "UHF",
      "Laundry Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Laundry"
    ]
  },
  {
    "slug": "richrfid-la409",
    "title": "RichRFID LA409",
    "brand": "RichRFID",
    "model": "LA409",
    "sku": "LA409",
    "subtitle": "UHF Laundry Tag",
    "shortDesc": "Laundry management",
    "description": "SKU: LA409. Supplier: RichRFID. Category: UHF Laundry Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Laundry Tag. Description: High-performance UHF laundry tag for textile tracking.",
    "customerSummary": "UHF Laundry Tag | Laundry Tag | Applications: Laundry",
    "image": "https://www.richrfid.com/uploads/PS/laundry_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/507.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Laundry Tag",
    "sizeText": "",
    "material": "Textile/Silicone",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Laundry"
    ],
    "industries": [
      "Laundry"
    ],
    "tags": [
      "UHF",
      "Laundry Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Laundry"
    ]
  },
  {
    "slug": "richrfid-la421",
    "title": "RichRFID LA421",
    "brand": "RichRFID",
    "model": "LA421",
    "sku": "LA421",
    "subtitle": "UHF Laundry Tag",
    "shortDesc": "Laundry management",
    "description": "SKU: LA421. Supplier: RichRFID. Category: UHF Laundry Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Laundry Tag. Description: High-performance UHF laundry tag for textile tracking.",
    "customerSummary": "UHF Laundry Tag | Laundry Tag | Applications: Laundry",
    "image": "https://www.richrfid.com/uploads/PS/laundry_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/507.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Laundry Tag",
    "sizeText": "",
    "material": "Textile/Silicone",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Laundry"
    ],
    "industries": [
      "Laundry"
    ],
    "tags": [
      "UHF",
      "Laundry Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Laundry"
    ]
  },
  {
    "slug": "richrfid-la421-h",
    "title": "RichRFID LA421-H",
    "brand": "RichRFID",
    "model": "LA421-H",
    "sku": "LA421-H",
    "subtitle": "UHF Laundry Tag",
    "shortDesc": "Laundry management",
    "description": "SKU: LA421-H. Supplier: RichRFID. Category: UHF Laundry Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Laundry Tag. Description: High-performance UHF laundry tag for textile tracking.",
    "customerSummary": "UHF Laundry Tag | Laundry Tag | Applications: Laundry",
    "image": "https://www.richrfid.com/uploads/PS/laundry_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/507.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Laundry Tag",
    "sizeText": "",
    "material": "Textile/Silicone",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Laundry"
    ],
    "industries": [
      "Laundry"
    ],
    "tags": [
      "UHF",
      "Laundry Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Laundry"
    ]
  },
  {
    "slug": "richrfid-la421-p",
    "title": "RichRFID LA421-P",
    "brand": "RichRFID",
    "model": "LA421-P",
    "sku": "LA421-P",
    "subtitle": "UHF Laundry Tag",
    "shortDesc": "Laundry management",
    "description": "SKU: LA421-P. Supplier: RichRFID. Category: UHF Laundry Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Laundry Tag. Description: High-performance UHF laundry tag for textile tracking.",
    "customerSummary": "UHF Laundry Tag | Laundry Tag | Applications: Laundry",
    "image": "https://www.richrfid.com/uploads/PS/laundry_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/507.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Laundry Tag",
    "sizeText": "",
    "material": "Textile/Silicone",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Laundry"
    ],
    "industries": [
      "Laundry"
    ],
    "tags": [
      "UHF",
      "Laundry Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Laundry"
    ]
  },
  {
    "slug": "richrfid-la422",
    "title": "RichRFID LA422",
    "brand": "RichRFID",
    "model": "LA422",
    "sku": "LA422",
    "subtitle": "UHF Laundry Tag",
    "shortDesc": "Laundry management",
    "description": "SKU: LA422. Supplier: RichRFID. Category: UHF Laundry Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Laundry Tag. Description: High-performance UHF laundry tag for textile tracking.",
    "customerSummary": "UHF Laundry Tag | Laundry Tag | Applications: Laundry",
    "image": "https://www.richrfid.com/uploads/PS/laundry_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/507.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Laundry Tag",
    "sizeText": "",
    "material": "Textile/Silicone",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Laundry"
    ],
    "industries": [
      "Laundry"
    ],
    "tags": [
      "UHF",
      "Laundry Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Laundry"
    ]
  },
  {
    "slug": "richrfid-la422-h",
    "title": "RichRFID LA422-H",
    "brand": "RichRFID",
    "model": "LA422-H",
    "sku": "LA422-H",
    "subtitle": "UHF Laundry Tag",
    "shortDesc": "Laundry management",
    "description": "SKU: LA422-H. Supplier: RichRFID. Category: UHF Laundry Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Laundry Tag. Description: High-performance UHF laundry tag for textile tracking.",
    "customerSummary": "UHF Laundry Tag | Laundry Tag | Applications: Laundry",
    "image": "https://www.richrfid.com/uploads/PS/laundry_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/507.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Laundry Tag",
    "sizeText": "",
    "material": "Textile/Silicone",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Laundry"
    ],
    "industries": [
      "Laundry"
    ],
    "tags": [
      "UHF",
      "Laundry Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Laundry"
    ]
  },
  {
    "slug": "richrfid-la422-p",
    "title": "RichRFID LA422-P",
    "brand": "RichRFID",
    "model": "LA422-P",
    "sku": "LA422-P",
    "subtitle": "UHF Laundry Tag",
    "shortDesc": "Laundry management",
    "description": "SKU: LA422-P. Supplier: RichRFID. Category: UHF Laundry Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Laundry Tag. Description: High-performance UHF laundry tag for textile tracking.",
    "customerSummary": "UHF Laundry Tag | Laundry Tag | Applications: Laundry",
    "image": "https://www.richrfid.com/uploads/PS/laundry_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/507.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Laundry Tag",
    "sizeText": "",
    "material": "Textile/Silicone",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Laundry"
    ],
    "industries": [
      "Laundry"
    ],
    "tags": [
      "UHF",
      "Laundry Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Laundry"
    ]
  },
  {
    "slug": "richrfid-la423",
    "title": "RichRFID LA423",
    "brand": "RichRFID",
    "model": "LA423",
    "sku": "LA423",
    "subtitle": "UHF Laundry Tag",
    "shortDesc": "Laundry management",
    "description": "SKU: LA423. Supplier: RichRFID. Category: UHF Laundry Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Laundry Tag. Description: High-performance UHF laundry tag for textile tracking.",
    "customerSummary": "UHF Laundry Tag | Laundry Tag | Applications: Laundry",
    "image": "https://www.richrfid.com/uploads/PS/laundry_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/507.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Laundry Tag",
    "sizeText": "",
    "material": "Textile/Silicone",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Laundry"
    ],
    "industries": [
      "Laundry"
    ],
    "tags": [
      "UHF",
      "Laundry Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Laundry"
    ]
  },
  {
    "slug": "richrfid-la423-p",
    "title": "RichRFID LA423-P",
    "brand": "RichRFID",
    "model": "LA423-P",
    "sku": "LA423-P",
    "subtitle": "UHF Laundry Tag",
    "shortDesc": "Laundry management",
    "description": "SKU: LA423-P. Supplier: RichRFID. Category: UHF Laundry Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Laundry Tag. Description: High-performance UHF laundry tag for textile tracking.",
    "customerSummary": "UHF Laundry Tag | Laundry Tag | Applications: Laundry",
    "image": "https://www.richrfid.com/uploads/PS/laundry_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/507.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Laundry Tag",
    "sizeText": "",
    "material": "Textile/Silicone",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Laundry"
    ],
    "industries": [
      "Laundry"
    ],
    "tags": [
      "UHF",
      "Laundry Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Laundry"
    ]
  },
  {
    "slug": "richrfid-la424",
    "title": "RichRFID LA424",
    "brand": "RichRFID",
    "model": "LA424",
    "sku": "LA424",
    "subtitle": "UHF Laundry Tag",
    "shortDesc": "Laundry management",
    "description": "SKU: LA424. Supplier: RichRFID. Category: UHF Laundry Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Laundry Tag. Description: High-performance UHF laundry tag for textile tracking.",
    "customerSummary": "UHF Laundry Tag | Laundry Tag | Applications: Laundry",
    "image": "https://www.richrfid.com/uploads/PS/laundry_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/507.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Laundry Tag",
    "sizeText": "",
    "material": "Textile/Silicone",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Laundry"
    ],
    "industries": [
      "Laundry"
    ],
    "tags": [
      "UHF",
      "Laundry Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Laundry"
    ]
  },
  {
    "slug": "richrfid-la424-h",
    "title": "RichRFID LA424-H",
    "brand": "RichRFID",
    "model": "LA424-H",
    "sku": "LA424-H",
    "subtitle": "UHF Laundry Tag",
    "shortDesc": "Laundry management",
    "description": "SKU: LA424-H. Supplier: RichRFID. Category: UHF Laundry Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Laundry Tag. Description: High-performance UHF laundry tag for textile tracking.",
    "customerSummary": "UHF Laundry Tag | Laundry Tag | Applications: Laundry",
    "image": "https://www.richrfid.com/uploads/PS/laundry_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/507.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Laundry Tag",
    "sizeText": "",
    "material": "Textile/Silicone",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Laundry"
    ],
    "industries": [
      "Laundry"
    ],
    "tags": [
      "UHF",
      "Laundry Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Laundry"
    ]
  },
  {
    "slug": "richrfid-la424-p",
    "title": "RichRFID LA424-P",
    "brand": "RichRFID",
    "model": "LA424-P",
    "sku": "LA424-P",
    "subtitle": "UHF Laundry Tag",
    "shortDesc": "Laundry management",
    "description": "SKU: LA424-P. Supplier: RichRFID. Category: UHF Laundry Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Laundry Tag. Description: High-performance UHF laundry tag for textile tracking.",
    "customerSummary": "UHF Laundry Tag | Laundry Tag | Applications: Laundry",
    "image": "https://www.richrfid.com/uploads/PS/laundry_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/507.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Laundry Tag",
    "sizeText": "",
    "material": "Textile/Silicone",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Laundry"
    ],
    "industries": [
      "Laundry"
    ],
    "tags": [
      "UHF",
      "Laundry Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Laundry"
    ]
  },
  {
    "slug": "richrfid-la425",
    "title": "RichRFID LA425",
    "brand": "RichRFID",
    "model": "LA425",
    "sku": "LA425",
    "subtitle": "UHF Laundry Tag",
    "shortDesc": "Laundry management",
    "description": "SKU: LA425. Supplier: RichRFID. Category: UHF Laundry Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Laundry Tag. Description: High-performance UHF laundry tag for textile tracking.",
    "customerSummary": "UHF Laundry Tag | Laundry Tag | Applications: Laundry",
    "image": "https://www.richrfid.com/uploads/PS/laundry_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/507.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Laundry Tag",
    "sizeText": "",
    "material": "Textile/Silicone",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Laundry"
    ],
    "industries": [
      "Laundry"
    ],
    "tags": [
      "UHF",
      "Laundry Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Laundry"
    ]
  },
  {
    "slug": "richrfid-la425-h",
    "title": "RichRFID LA425-H",
    "brand": "RichRFID",
    "model": "LA425-H",
    "sku": "LA425-H",
    "subtitle": "UHF Laundry Tag",
    "shortDesc": "Laundry management",
    "description": "SKU: LA425-H. Supplier: RichRFID. Category: UHF Laundry Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Laundry Tag. Description: High-performance UHF laundry tag for textile tracking.",
    "customerSummary": "UHF Laundry Tag | Laundry Tag | Applications: Laundry",
    "image": "https://www.richrfid.com/uploads/PS/laundry_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/507.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Laundry Tag",
    "sizeText": "",
    "material": "Textile/Silicone",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Laundry"
    ],
    "industries": [
      "Laundry"
    ],
    "tags": [
      "UHF",
      "Laundry Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Laundry"
    ]
  },
  {
    "slug": "richrfid-la425-p",
    "title": "RichRFID LA425-P",
    "brand": "RichRFID",
    "model": "LA425-P",
    "sku": "LA425-P",
    "subtitle": "UHF Laundry Tag",
    "shortDesc": "Laundry management",
    "description": "SKU: LA425-P. Supplier: RichRFID. Category: UHF Laundry Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Laundry Tag. Description: High-performance UHF laundry tag for textile tracking.",
    "customerSummary": "UHF Laundry Tag | Laundry Tag | Applications: Laundry",
    "image": "https://www.richrfid.com/uploads/PS/laundry_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/507.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Laundry Tag",
    "sizeText": "",
    "material": "Textile/Silicone",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Laundry"
    ],
    "industries": [
      "Laundry"
    ],
    "tags": [
      "UHF",
      "Laundry Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Laundry"
    ]
  },
  {
    "slug": "richrfid-la426",
    "title": "RichRFID LA426",
    "brand": "RichRFID",
    "model": "LA426",
    "sku": "LA426",
    "subtitle": "UHF Laundry Tag",
    "shortDesc": "Laundry management",
    "description": "SKU: LA426. Supplier: RichRFID. Category: UHF Laundry Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Laundry Tag. Description: High-performance UHF laundry tag for textile tracking.",
    "customerSummary": "UHF Laundry Tag | Laundry Tag | Applications: Laundry",
    "image": "https://www.richrfid.com/uploads/PS/laundry_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/507.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Laundry Tag",
    "sizeText": "",
    "material": "Textile/Silicone",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Laundry"
    ],
    "industries": [
      "Laundry"
    ],
    "tags": [
      "UHF",
      "Laundry Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Laundry"
    ]
  },
  {
    "slug": "richrfid-la426-p",
    "title": "RichRFID LA426-P",
    "brand": "RichRFID",
    "model": "LA426-P",
    "sku": "LA426-P",
    "subtitle": "UHF Laundry Tag",
    "shortDesc": "Laundry management",
    "description": "SKU: LA426-P. Supplier: RichRFID. Category: UHF Laundry Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Laundry Tag. Description: High-performance UHF laundry tag for textile tracking.",
    "customerSummary": "UHF Laundry Tag | Laundry Tag | Applications: Laundry",
    "image": "https://www.richrfid.com/uploads/PS/laundry_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/507.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Laundry Tag",
    "sizeText": "",
    "material": "Textile/Silicone",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Laundry"
    ],
    "industries": [
      "Laundry"
    ],
    "tags": [
      "UHF",
      "Laundry Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Laundry"
    ]
  },
  {
    "slug": "richrfid-la427",
    "title": "RichRFID LA427",
    "brand": "RichRFID",
    "model": "LA427",
    "sku": "LA427",
    "subtitle": "UHF Laundry Tag",
    "shortDesc": "Laundry management",
    "description": "SKU: LA427. Supplier: RichRFID. Category: UHF Laundry Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Laundry Tag. Description: High-performance UHF laundry tag for textile tracking.",
    "customerSummary": "UHF Laundry Tag | Laundry Tag | Applications: Laundry",
    "image": "https://www.richrfid.com/uploads/PS/laundry_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/507.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Laundry Tag",
    "sizeText": "",
    "material": "Textile/Silicone",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Laundry"
    ],
    "industries": [
      "Laundry"
    ],
    "tags": [
      "UHF",
      "Laundry Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Laundry"
    ]
  },
  {
    "slug": "richrfid-la427-p",
    "title": "RichRFID LA427-P",
    "brand": "RichRFID",
    "model": "LA427-P",
    "sku": "LA427-P",
    "subtitle": "UHF Laundry Tag",
    "shortDesc": "Laundry management",
    "description": "SKU: LA427-P. Supplier: RichRFID. Category: UHF Laundry Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Laundry Tag. Description: High-performance UHF laundry tag for textile tracking.",
    "customerSummary": "UHF Laundry Tag | Laundry Tag | Applications: Laundry",
    "image": "https://www.richrfid.com/uploads/PS/laundry_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/507.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Laundry Tag",
    "sizeText": "",
    "material": "Textile/Silicone",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Laundry"
    ],
    "industries": [
      "Laundry"
    ],
    "tags": [
      "UHF",
      "Laundry Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Laundry"
    ]
  },
  {
    "slug": "richrfid-la601",
    "title": "RichRFID LA601",
    "brand": "RichRFID",
    "model": "LA601",
    "sku": "LA601",
    "subtitle": "UHF Laundry Tag",
    "shortDesc": "Laundry management",
    "description": "SKU: LA601. Supplier: RichRFID. Category: UHF Laundry Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Laundry Tag. Description: High-performance UHF laundry tag for textile tracking.",
    "customerSummary": "UHF Laundry Tag | Laundry Tag | Applications: Laundry",
    "image": "https://www.richrfid.com/uploads/PS/laundry_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/507.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Laundry Tag",
    "sizeText": "",
    "material": "Textile/Silicone",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Laundry"
    ],
    "industries": [
      "Laundry"
    ],
    "tags": [
      "UHF",
      "Laundry Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Laundry"
    ]
  },
  {
    "slug": "richrfid-la602",
    "title": "RichRFID LA602",
    "brand": "RichRFID",
    "model": "LA602",
    "sku": "LA602",
    "subtitle": "UHF Laundry Tag",
    "shortDesc": "Laundry management",
    "description": "SKU: LA602. Supplier: RichRFID. Category: UHF Laundry Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Laundry Tag. Description: High-performance UHF laundry tag for textile tracking.",
    "customerSummary": "UHF Laundry Tag | Laundry Tag | Applications: Laundry",
    "image": "https://www.richrfid.com/uploads/PS/laundry_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/507.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Laundry Tag",
    "sizeText": "",
    "material": "Textile/Silicone",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Laundry"
    ],
    "industries": [
      "Laundry"
    ],
    "tags": [
      "UHF",
      "Laundry Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Laundry"
    ]
  },
  {
    "slug": "richrfid-la603",
    "title": "RichRFID LA603",
    "brand": "RichRFID",
    "model": "LA603",
    "sku": "LA603",
    "subtitle": "UHF Laundry Tag",
    "shortDesc": "Laundry management",
    "description": "SKU: LA603. Supplier: RichRFID. Category: UHF Laundry Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Laundry Tag. Description: High-performance UHF laundry tag for textile tracking.",
    "customerSummary": "UHF Laundry Tag | Laundry Tag | Applications: Laundry",
    "image": "https://www.richrfid.com/uploads/PS/laundry_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/507.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Laundry Tag",
    "sizeText": "",
    "material": "Textile/Silicone",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Laundry"
    ],
    "industries": [
      "Laundry"
    ],
    "tags": [
      "UHF",
      "Laundry Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Laundry"
    ]
  },
  {
    "slug": "richrfid-la711",
    "title": "RichRFID LA711",
    "brand": "RichRFID",
    "model": "LA711",
    "sku": "LA711",
    "subtitle": "UHF Laundry Tag",
    "shortDesc": "Laundry management",
    "description": "SKU: LA711. Supplier: RichRFID. Category: UHF Laundry Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Laundry Tag. Description: High-performance UHF laundry tag for textile tracking.",
    "customerSummary": "UHF Laundry Tag | Laundry Tag | Applications: Laundry",
    "image": "https://www.richrfid.com/uploads/PS/laundry_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/507.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Laundry Tag",
    "sizeText": "",
    "material": "Textile/Silicone",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Laundry"
    ],
    "industries": [
      "Laundry"
    ],
    "tags": [
      "UHF",
      "Laundry Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Laundry"
    ]
  },
  {
    "slug": "richrfid-la711-p",
    "title": "RichRFID LA711-P",
    "brand": "RichRFID",
    "model": "LA711-P",
    "sku": "LA711-P",
    "subtitle": "UHF Laundry Tag",
    "shortDesc": "Laundry management",
    "description": "SKU: LA711-P. Supplier: RichRFID. Category: UHF Laundry Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Laundry Tag. Description: High-performance UHF laundry tag for textile tracking.",
    "customerSummary": "UHF Laundry Tag | Laundry Tag | Applications: Laundry",
    "image": "https://www.richrfid.com/uploads/PS/laundry_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/507.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Laundry Tag",
    "sizeText": "",
    "material": "Textile/Silicone",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Laundry"
    ],
    "industries": [
      "Laundry"
    ],
    "tags": [
      "UHF",
      "Laundry Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Laundry"
    ]
  },
  {
    "slug": "richrfid-rc5020",
    "title": "RichRFID RC5020",
    "brand": "RichRFID",
    "model": "RC5020",
    "sku": "RC5020",
    "subtitle": "Special RFID Tag",
    "shortDesc": "Specialized tracking",
    "description": "SKU: RC5020. Supplier: RichRFID. Category: Special RFID Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Special Tag. Description: Specialized RFID tag for unique applications.",
    "customerSummary": "Special RFID Tag | Special Tag | Applications: Special",
    "image": "https://www.richrfid.com/uploads/PS/special_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Special Tag",
    "sizeText": "",
    "material": "",
    "fixedReadRange": "",
    "handheldReadRange": "",
    "operatingTemp": "",
    "ipRating": "IP67",
    "applications": [
      "Special"
    ],
    "industries": [
      "Special"
    ],
    "tags": [
      "UHF",
      "Special Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Special"
    ]
  },
  {
    "slug": "richrfid-rc5031",
    "title": "RichRFID RC5031",
    "brand": "RichRFID",
    "model": "RC5031",
    "sku": "RC5031",
    "subtitle": "Special RFID Tag",
    "shortDesc": "Specialized tracking",
    "description": "SKU: RC5031. Supplier: RichRFID. Category: Special RFID Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Special Tag. Description: Specialized RFID tag for unique applications.",
    "customerSummary": "Special RFID Tag | Special Tag | Applications: Special",
    "image": "https://www.richrfid.com/uploads/PS/special_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Special Tag",
    "sizeText": "",
    "material": "",
    "fixedReadRange": "",
    "handheldReadRange": "",
    "operatingTemp": "",
    "ipRating": "IP67",
    "applications": [
      "Special"
    ],
    "industries": [
      "Special"
    ],
    "tags": [
      "UHF",
      "Special Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Special"
    ]
  },
  {
    "slug": "richrfid-rc5053",
    "title": "RichRFID RC5053",
    "brand": "RichRFID",
    "model": "RC5053",
    "sku": "RC5053",
    "subtitle": "Special RFID Tag",
    "shortDesc": "Specialized tracking",
    "description": "SKU: RC5053. Supplier: RichRFID. Category: Special RFID Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Special Tag. Description: Specialized RFID tag for unique applications.",
    "customerSummary": "Special RFID Tag | Special Tag | Applications: Special",
    "image": "https://www.richrfid.com/uploads/PS/special_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Special Tag",
    "sizeText": "",
    "material": "",
    "fixedReadRange": "",
    "handheldReadRange": "",
    "operatingTemp": "",
    "ipRating": "IP67",
    "applications": [
      "Special"
    ],
    "industries": [
      "Special"
    ],
    "tags": [
      "UHF",
      "Special Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Special"
    ]
  },
  {
    "slug": "richrfid-rc5055",
    "title": "RichRFID RC5055",
    "brand": "RichRFID",
    "model": "RC5055",
    "sku": "RC5055",
    "subtitle": "Special RFID Tag",
    "shortDesc": "Specialized tracking",
    "description": "SKU: RC5055. Supplier: RichRFID. Category: Special RFID Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Special Tag. Description: Specialized RFID tag for unique applications.",
    "customerSummary": "Special RFID Tag | Special Tag | Applications: Special",
    "image": "https://www.richrfid.com/uploads/PS/special_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Special Tag",
    "sizeText": "",
    "material": "",
    "fixedReadRange": "",
    "handheldReadRange": "",
    "operatingTemp": "",
    "ipRating": "IP67",
    "applications": [
      "Special"
    ],
    "industries": [
      "Special"
    ],
    "tags": [
      "UHF",
      "Special Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Special"
    ]
  },
  {
    "slug": "richrfid-rc5067",
    "title": "RichRFID RC5067",
    "brand": "RichRFID",
    "model": "RC5067",
    "sku": "RC5067",
    "subtitle": "Special RFID Tag",
    "shortDesc": "Specialized tracking",
    "description": "SKU: RC5067. Supplier: RichRFID. Category: Special RFID Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Special Tag. Description: Specialized RFID tag for unique applications.",
    "customerSummary": "Special RFID Tag | Special Tag | Applications: Special",
    "image": "https://www.richrfid.com/uploads/PS/special_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Special Tag",
    "sizeText": "",
    "material": "",
    "fixedReadRange": "",
    "handheldReadRange": "",
    "operatingTemp": "",
    "ipRating": "IP67",
    "applications": [
      "Special"
    ],
    "industries": [
      "Special"
    ],
    "tags": [
      "UHF",
      "Special Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Special"
    ]
  },
  {
    "slug": "richrfid-rc5085",
    "title": "RichRFID RC5085",
    "brand": "RichRFID",
    "model": "RC5085",
    "sku": "RC5085",
    "subtitle": "Special RFID Tag",
    "shortDesc": "Specialized tracking",
    "description": "SKU: RC5085. Supplier: RichRFID. Category: Special RFID Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Special Tag. Description: Specialized RFID tag for unique applications.",
    "customerSummary": "Special RFID Tag | Special Tag | Applications: Special",
    "image": "https://www.richrfid.com/uploads/PS/special_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Special Tag",
    "sizeText": "",
    "material": "",
    "fixedReadRange": "",
    "handheldReadRange": "",
    "operatingTemp": "",
    "ipRating": "IP67",
    "applications": [
      "Special"
    ],
    "industries": [
      "Special"
    ],
    "tags": [
      "UHF",
      "Special Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Special"
    ]
  },
  {
    "slug": "richrfid-rc9003",
    "title": "RichRFID RC9003",
    "brand": "RichRFID",
    "model": "RC9003",
    "sku": "RC9003",
    "subtitle": "Special RFID Tag",
    "shortDesc": "Specialized tracking",
    "description": "SKU: RC9003. Supplier: RichRFID. Category: Special RFID Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Special Tag. Description: Specialized RFID tag for unique applications.",
    "customerSummary": "Special RFID Tag | Special Tag | Applications: Special",
    "image": "https://www.richrfid.com/uploads/PS/special_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Special Tag",
    "sizeText": "",
    "material": "",
    "fixedReadRange": "",
    "handheldReadRange": "",
    "operatingTemp": "",
    "ipRating": "IP67",
    "applications": [
      "Special"
    ],
    "industries": [
      "Special"
    ],
    "tags": [
      "UHF",
      "Special Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Special"
    ]
  },
  {
    "slug": "richrfid-rc9008-2",
    "title": "RichRFID RC9008-2",
    "brand": "RichRFID",
    "model": "RC9008-2",
    "sku": "RC9008-2",
    "subtitle": "Special RFID Tag",
    "shortDesc": "Specialized tracking",
    "description": "SKU: RC9008-2. Supplier: RichRFID. Category: Special RFID Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Special Tag. Description: Specialized RFID tag for unique applications.",
    "customerSummary": "Special RFID Tag | Special Tag | Applications: Special",
    "image": "https://www.richrfid.com/uploads/PS/special_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Special Tag",
    "sizeText": "",
    "material": "",
    "fixedReadRange": "",
    "handheldReadRange": "",
    "operatingTemp": "",
    "ipRating": "IP67",
    "applications": [
      "Special"
    ],
    "industries": [
      "Special"
    ],
    "tags": [
      "UHF",
      "Special Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Special"
    ]
  },
  {
    "slug": "richrfid-rc9008-3",
    "title": "RichRFID RC9008-3",
    "brand": "RichRFID",
    "model": "RC9008-3",
    "sku": "RC9008-3",
    "subtitle": "Special RFID Tag",
    "shortDesc": "Specialized tracking",
    "description": "SKU: RC9008-3. Supplier: RichRFID. Category: Special RFID Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Special Tag. Description: Specialized RFID tag for unique applications.",
    "customerSummary": "Special RFID Tag | Special Tag | Applications: Special",
    "image": "https://www.richrfid.com/uploads/PS/special_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Special Tag",
    "sizeText": "",
    "material": "",
    "fixedReadRange": "",
    "handheldReadRange": "",
    "operatingTemp": "",
    "ipRating": "IP67",
    "applications": [
      "Special"
    ],
    "industries": [
      "Special"
    ],
    "tags": [
      "UHF",
      "Special Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Special"
    ]
  },
  {
    "slug": "richrfid-rc9020",
    "title": "RichRFID RC9020",
    "brand": "RichRFID",
    "model": "RC9020",
    "sku": "RC9020",
    "subtitle": "Special RFID Tag",
    "shortDesc": "Specialized tracking",
    "description": "SKU: RC9020. Supplier: RichRFID. Category: Special RFID Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Special Tag. Description: Specialized RFID tag for unique applications.",
    "customerSummary": "Special RFID Tag | Special Tag | Applications: Special",
    "image": "https://www.richrfid.com/uploads/PS/special_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Special Tag",
    "sizeText": "",
    "material": "",
    "fixedReadRange": "",
    "handheldReadRange": "",
    "operatingTemp": "",
    "ipRating": "IP67",
    "applications": [
      "Special"
    ],
    "industries": [
      "Special"
    ],
    "tags": [
      "UHF",
      "Special Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Special"
    ]
  },
  {
    "slug": "richrfid-rc9020-1",
    "title": "RichRFID RC9020-1",
    "brand": "RichRFID",
    "model": "RC9020-1",
    "sku": "RC9020-1",
    "subtitle": "Special RFID Tag",
    "shortDesc": "Specialized tracking",
    "description": "SKU: RC9020-1. Supplier: RichRFID. Category: Special RFID Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Special Tag. Description: Specialized RFID tag for unique applications.",
    "customerSummary": "Special RFID Tag | Special Tag | Applications: Special",
    "image": "https://www.richrfid.com/uploads/PS/special_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Special Tag",
    "sizeText": "",
    "material": "",
    "fixedReadRange": "",
    "handheldReadRange": "",
    "operatingTemp": "",
    "ipRating": "IP67",
    "applications": [
      "Special"
    ],
    "industries": [
      "Special"
    ],
    "tags": [
      "UHF",
      "Special Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Special"
    ]
  },
  {
    "slug": "richrfid-rc9020-2",
    "title": "RichRFID RC9020-2",
    "brand": "RichRFID",
    "model": "RC9020-2",
    "sku": "RC9020-2",
    "subtitle": "Special RFID Tag",
    "shortDesc": "Specialized tracking",
    "description": "SKU: RC9020-2. Supplier: RichRFID. Category: Special RFID Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Special Tag. Description: Specialized RFID tag for unique applications.",
    "customerSummary": "Special RFID Tag | Special Tag | Applications: Special",
    "image": "https://www.richrfid.com/uploads/PS/special_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Special Tag",
    "sizeText": "",
    "material": "",
    "fixedReadRange": "",
    "handheldReadRange": "",
    "operatingTemp": "",
    "ipRating": "IP67",
    "applications": [
      "Special"
    ],
    "industries": [
      "Special"
    ],
    "tags": [
      "UHF",
      "Special Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Special"
    ]
  },
  {
    "slug": "richrfid-rc9020-3",
    "title": "RichRFID RC9020-3",
    "brand": "RichRFID",
    "model": "RC9020-3",
    "sku": "RC9020-3",
    "subtitle": "Special RFID Tag",
    "shortDesc": "Specialized tracking",
    "description": "SKU: RC9020-3. Supplier: RichRFID. Category: Special RFID Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Special Tag. Description: Specialized RFID tag for unique applications.",
    "customerSummary": "Special RFID Tag | Special Tag | Applications: Special",
    "image": "https://www.richrfid.com/uploads/PS/special_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Special Tag",
    "sizeText": "",
    "material": "",
    "fixedReadRange": "",
    "handheldReadRange": "",
    "operatingTemp": "",
    "ipRating": "IP67",
    "applications": [
      "Special"
    ],
    "industries": [
      "Special"
    ],
    "tags": [
      "UHF",
      "Special Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Special"
    ]
  },
  {
    "slug": "richrfid-rc9022",
    "title": "RichRFID RC9022",
    "brand": "RichRFID",
    "model": "RC9022",
    "sku": "RC9022",
    "subtitle": "Special RFID Tag",
    "shortDesc": "Specialized tracking",
    "description": "SKU: RC9022. Supplier: RichRFID. Category: Special RFID Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Special Tag. Description: Specialized RFID tag for unique applications.",
    "customerSummary": "Special RFID Tag | Special Tag | Applications: Special",
    "image": "https://www.richrfid.com/uploads/PS/special_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Special Tag",
    "sizeText": "",
    "material": "",
    "fixedReadRange": "",
    "handheldReadRange": "",
    "operatingTemp": "",
    "ipRating": "IP67",
    "applications": [
      "Special"
    ],
    "industries": [
      "Special"
    ],
    "tags": [
      "UHF",
      "Special Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Special"
    ]
  },
  {
    "slug": "richrfid-rc9028",
    "title": "RichRFID RC9028",
    "brand": "RichRFID",
    "model": "RC9028",
    "sku": "RC9028",
    "subtitle": "Special RFID Tag",
    "shortDesc": "Specialized tracking",
    "description": "SKU: RC9028. Supplier: RichRFID. Category: Special RFID Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Special Tag. Description: Specialized RFID tag for unique applications.",
    "customerSummary": "Special RFID Tag | Special Tag | Applications: Special",
    "image": "https://www.richrfid.com/uploads/PS/special_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Special Tag",
    "sizeText": "",
    "material": "",
    "fixedReadRange": "",
    "handheldReadRange": "",
    "operatingTemp": "",
    "ipRating": "IP67",
    "applications": [
      "Special"
    ],
    "industries": [
      "Special"
    ],
    "tags": [
      "UHF",
      "Special Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Special"
    ]
  },
  {
    "slug": "richrfid-rc9602",
    "title": "RichRFID RC9602",
    "brand": "RichRFID",
    "model": "RC9602",
    "sku": "RC9602",
    "subtitle": "Special RFID Tag",
    "shortDesc": "Specialized tracking",
    "description": "SKU: RC9602. Supplier: RichRFID. Category: Special RFID Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Special Tag. Description: Specialized RFID tag for unique applications.",
    "customerSummary": "Special RFID Tag | Special Tag | Applications: Special",
    "image": "https://www.richrfid.com/uploads/PS/special_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Special Tag",
    "sizeText": "",
    "material": "",
    "fixedReadRange": "",
    "handheldReadRange": "",
    "operatingTemp": "",
    "ipRating": "IP67",
    "applications": [
      "Special"
    ],
    "industries": [
      "Special"
    ],
    "tags": [
      "UHF",
      "Special Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Special"
    ]
  },
  {
    "slug": "richrfid-rc9604",
    "title": "RichRFID RC9604",
    "brand": "RichRFID",
    "model": "RC9604",
    "sku": "RC9604",
    "subtitle": "Special RFID Tag",
    "shortDesc": "Specialized tracking",
    "description": "SKU: RC9604. Supplier: RichRFID. Category: Special RFID Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Special Tag. Description: Specialized RFID tag for unique applications.",
    "customerSummary": "Special RFID Tag | Special Tag | Applications: Special",
    "image": "https://www.richrfid.com/uploads/PS/special_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Special Tag",
    "sizeText": "",
    "material": "",
    "fixedReadRange": "",
    "handheldReadRange": "",
    "operatingTemp": "",
    "ipRating": "IP67",
    "applications": [
      "Special"
    ],
    "industries": [
      "Special"
    ],
    "tags": [
      "UHF",
      "Special Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Special"
    ]
  },
  {
    "slug": "richrfid-rc9605",
    "title": "RichRFID RC9605",
    "brand": "RichRFID",
    "model": "RC9605",
    "sku": "RC9605",
    "subtitle": "Special RFID Tag",
    "shortDesc": "Specialized tracking",
    "description": "SKU: RC9605. Supplier: RichRFID. Category: Special RFID Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Special Tag. Description: Specialized RFID tag for unique applications.",
    "customerSummary": "Special RFID Tag | Special Tag | Applications: Special",
    "image": "https://www.richrfid.com/uploads/PS/special_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Special Tag",
    "sizeText": "",
    "material": "",
    "fixedReadRange": "",
    "handheldReadRange": "",
    "operatingTemp": "",
    "ipRating": "IP67",
    "applications": [
      "Special"
    ],
    "industries": [
      "Special"
    ],
    "tags": [
      "UHF",
      "Special Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Special"
    ]
  },
  {
    "slug": "richrfid-rc9606",
    "title": "RichRFID RC9606",
    "brand": "RichRFID",
    "model": "RC9606",
    "sku": "RC9606",
    "subtitle": "Special RFID Tag",
    "shortDesc": "Specialized tracking",
    "description": "SKU: RC9606. Supplier: RichRFID. Category: Special RFID Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Special Tag. Description: Specialized RFID tag for unique applications.",
    "customerSummary": "Special RFID Tag | Special Tag | Applications: Special",
    "image": "https://www.richrfid.com/uploads/PS/special_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Special Tag",
    "sizeText": "",
    "material": "",
    "fixedReadRange": "",
    "handheldReadRange": "",
    "operatingTemp": "",
    "ipRating": "IP67",
    "applications": [
      "Special"
    ],
    "industries": [
      "Special"
    ],
    "tags": [
      "UHF",
      "Special Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Special"
    ]
  },
  {
    "slug": "richrfid-rcc6001",
    "title": "RichRFID RCC6001",
    "brand": "RichRFID",
    "model": "RCC6001",
    "sku": "RCC6001",
    "subtitle": "UHF Ceramic On-metal Tag",
    "shortDesc": "Tool tracking",
    "description": "SKU: RCC6001. Supplier: RichRFID. Category: UHF Ceramic On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Ceramic Tag. Description: Small ceramic tag for metal tracking.",
    "customerSummary": "UHF Ceramic On-metal Tag | Ceramic Tag | Applications: Tools",
    "image": "https://www.richrfid.com/uploads/PS/ceramic_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/503.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Ceramic Tag",
    "sizeText": "",
    "material": "Ceramic",
    "fixedReadRange": "Up to 5m",
    "handheldReadRange": "Up to 3m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Tools"
    ],
    "industries": [
      "Tools"
    ],
    "tags": [
      "UHF",
      "Ceramic Tag",
      "On Metal",
      "NXP Ucode 8",
      "Tools"
    ]
  },
  {
    "slug": "richrfid-rcc6002",
    "title": "RichRFID RCC6002",
    "brand": "RichRFID",
    "model": "RCC6002",
    "sku": "RCC6002",
    "subtitle": "UHF Ceramic On-metal Tag",
    "shortDesc": "Tool tracking",
    "description": "SKU: RCC6002. Supplier: RichRFID. Category: UHF Ceramic On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Ceramic Tag. Description: Small ceramic tag for metal tracking.",
    "customerSummary": "UHF Ceramic On-metal Tag | Ceramic Tag | Applications: Tools",
    "image": "https://www.richrfid.com/uploads/PS/ceramic_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/503.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Ceramic Tag",
    "sizeText": "",
    "material": "Ceramic",
    "fixedReadRange": "Up to 5m",
    "handheldReadRange": "Up to 3m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Tools"
    ],
    "industries": [
      "Tools"
    ],
    "tags": [
      "UHF",
      "Ceramic Tag",
      "On Metal",
      "NXP Ucode 8",
      "Tools"
    ]
  },
  {
    "slug": "richrfid-rcc6003",
    "title": "RichRFID RCC6003",
    "brand": "RichRFID",
    "model": "RCC6003",
    "sku": "RCC6003",
    "subtitle": "UHF Ceramic On-metal Tag",
    "shortDesc": "Tool tracking",
    "description": "SKU: RCC6003. Supplier: RichRFID. Category: UHF Ceramic On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Ceramic Tag. Description: Small ceramic tag for metal tracking.",
    "customerSummary": "UHF Ceramic On-metal Tag | Ceramic Tag | Applications: Tools",
    "image": "https://www.richrfid.com/uploads/PS/ceramic_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/503.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Ceramic Tag",
    "sizeText": "",
    "material": "Ceramic",
    "fixedReadRange": "Up to 5m",
    "handheldReadRange": "Up to 3m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Tools"
    ],
    "industries": [
      "Tools"
    ],
    "tags": [
      "UHF",
      "Ceramic Tag",
      "On Metal",
      "NXP Ucode 8",
      "Tools"
    ]
  },
  {
    "slug": "richrfid-rcc6004",
    "title": "RichRFID RCC6004",
    "brand": "RichRFID",
    "model": "RCC6004",
    "sku": "RCC6004",
    "subtitle": "UHF Ceramic On-metal Tag",
    "shortDesc": "Tool tracking",
    "description": "SKU: RCC6004. Supplier: RichRFID. Category: UHF Ceramic On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Ceramic Tag. Description: Small ceramic tag for metal tracking.",
    "customerSummary": "UHF Ceramic On-metal Tag | Ceramic Tag | Applications: Tools",
    "image": "https://www.richrfid.com/uploads/PS/ceramic_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/503.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Ceramic Tag",
    "sizeText": "",
    "material": "Ceramic",
    "fixedReadRange": "Up to 5m",
    "handheldReadRange": "Up to 3m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Tools"
    ],
    "industries": [
      "Tools"
    ],
    "tags": [
      "UHF",
      "Ceramic Tag",
      "On Metal",
      "NXP Ucode 8",
      "Tools"
    ]
  },
  {
    "slug": "richrfid-rcc6005",
    "title": "RichRFID RCC6005",
    "brand": "RichRFID",
    "model": "RCC6005",
    "sku": "RCC6005",
    "subtitle": "UHF Ceramic On-metal Tag",
    "shortDesc": "Tool tracking",
    "description": "SKU: RCC6005. Supplier: RichRFID. Category: UHF Ceramic On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Ceramic Tag. Description: Small ceramic tag for metal tracking.",
    "customerSummary": "UHF Ceramic On-metal Tag | Ceramic Tag | Applications: Tools",
    "image": "https://www.richrfid.com/uploads/PS/ceramic_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/503.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Ceramic Tag",
    "sizeText": "",
    "material": "Ceramic",
    "fixedReadRange": "Up to 5m",
    "handheldReadRange": "Up to 3m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Tools"
    ],
    "industries": [
      "Tools"
    ],
    "tags": [
      "UHF",
      "Ceramic Tag",
      "On Metal",
      "NXP Ucode 8",
      "Tools"
    ]
  },
  {
    "slug": "richrfid-rcc6006",
    "title": "RichRFID RCC6006",
    "brand": "RichRFID",
    "model": "RCC6006",
    "sku": "RCC6006",
    "subtitle": "UHF Ceramic On-metal Tag",
    "shortDesc": "Tool tracking",
    "description": "SKU: RCC6006. Supplier: RichRFID. Category: UHF Ceramic On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Ceramic Tag. Description: Small ceramic tag for metal tracking.",
    "customerSummary": "UHF Ceramic On-metal Tag | Ceramic Tag | Applications: Tools",
    "image": "https://www.richrfid.com/uploads/PS/ceramic_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/503.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Ceramic Tag",
    "sizeText": "",
    "material": "Ceramic",
    "fixedReadRange": "Up to 5m",
    "handheldReadRange": "Up to 3m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Tools"
    ],
    "industries": [
      "Tools"
    ],
    "tags": [
      "UHF",
      "Ceramic Tag",
      "On Metal",
      "NXP Ucode 8",
      "Tools"
    ]
  },
  {
    "slug": "richrfid-rcc6007",
    "title": "RichRFID RCC6007",
    "brand": "RichRFID",
    "model": "RCC6007",
    "sku": "RCC6007",
    "subtitle": "UHF Ceramic On-metal Tag",
    "shortDesc": "Tool tracking",
    "description": "SKU: RCC6007. Supplier: RichRFID. Category: UHF Ceramic On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Ceramic Tag. Description: Small ceramic tag for metal tracking.",
    "customerSummary": "UHF Ceramic On-metal Tag | Ceramic Tag | Applications: Tools",
    "image": "https://www.richrfid.com/uploads/PS/ceramic_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/503.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Ceramic Tag",
    "sizeText": "",
    "material": "Ceramic",
    "fixedReadRange": "Up to 5m",
    "handheldReadRange": "Up to 3m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Tools"
    ],
    "industries": [
      "Tools"
    ],
    "tags": [
      "UHF",
      "Ceramic Tag",
      "On Metal",
      "NXP Ucode 8",
      "Tools"
    ]
  },
  {
    "slug": "richrfid-rcc6008",
    "title": "RichRFID RCC6008",
    "brand": "RichRFID",
    "model": "RCC6008",
    "sku": "RCC6008",
    "subtitle": "UHF Ceramic On-metal Tag",
    "shortDesc": "Tool tracking",
    "description": "SKU: RCC6008. Supplier: RichRFID. Category: UHF Ceramic On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Ceramic Tag. Description: Small ceramic tag for metal tracking.",
    "customerSummary": "UHF Ceramic On-metal Tag | Ceramic Tag | Applications: Tools",
    "image": "https://www.richrfid.com/uploads/PS/ceramic_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/503.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Ceramic Tag",
    "sizeText": "",
    "material": "Ceramic",
    "fixedReadRange": "Up to 5m",
    "handheldReadRange": "Up to 3m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Tools"
    ],
    "industries": [
      "Tools"
    ],
    "tags": [
      "UHF",
      "Ceramic Tag",
      "On Metal",
      "NXP Ucode 8",
      "Tools"
    ]
  },
  {
    "slug": "richrfid-rcc6009",
    "title": "RichRFID RCC6009",
    "brand": "RichRFID",
    "model": "RCC6009",
    "sku": "RCC6009",
    "subtitle": "UHF Ceramic On-metal Tag",
    "shortDesc": "Tool tracking",
    "description": "SKU: RCC6009. Supplier: RichRFID. Category: UHF Ceramic On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Ceramic Tag. Description: Small ceramic tag for metal tracking.",
    "customerSummary": "UHF Ceramic On-metal Tag | Ceramic Tag | Applications: Tools",
    "image": "https://www.richrfid.com/uploads/PS/ceramic_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/503.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Ceramic Tag",
    "sizeText": "",
    "material": "Ceramic",
    "fixedReadRange": "Up to 5m",
    "handheldReadRange": "Up to 3m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Tools"
    ],
    "industries": [
      "Tools"
    ],
    "tags": [
      "UHF",
      "Ceramic Tag",
      "On Metal",
      "NXP Ucode 8",
      "Tools"
    ]
  },
  {
    "slug": "richrfid-rcc6010",
    "title": "RichRFID RCC6010",
    "brand": "RichRFID",
    "model": "RCC6010",
    "sku": "RCC6010",
    "subtitle": "UHF Ceramic On-metal Tag",
    "shortDesc": "Tool tracking",
    "description": "SKU: RCC6010. Supplier: RichRFID. Category: UHF Ceramic On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Ceramic Tag. Description: Small ceramic tag for metal tracking.",
    "customerSummary": "UHF Ceramic On-metal Tag | Ceramic Tag | Applications: Tools",
    "image": "https://www.richrfid.com/uploads/PS/ceramic_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/503.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Ceramic Tag",
    "sizeText": "",
    "material": "Ceramic",
    "fixedReadRange": "Up to 5m",
    "handheldReadRange": "Up to 3m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Tools"
    ],
    "industries": [
      "Tools"
    ],
    "tags": [
      "UHF",
      "Ceramic Tag",
      "On Metal",
      "NXP Ucode 8",
      "Tools"
    ]
  },
  {
    "slug": "richrfid-rcc6011",
    "title": "RichRFID RCC6011",
    "brand": "RichRFID",
    "model": "RCC6011",
    "sku": "RCC6011",
    "subtitle": "UHF Ceramic On-metal Tag",
    "shortDesc": "Tool tracking",
    "description": "SKU: RCC6011. Supplier: RichRFID. Category: UHF Ceramic On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Ceramic Tag. Description: Small ceramic tag for metal tracking.",
    "customerSummary": "UHF Ceramic On-metal Tag | Ceramic Tag | Applications: Tools",
    "image": "https://www.richrfid.com/uploads/PS/ceramic_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/503.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Ceramic Tag",
    "sizeText": "",
    "material": "Ceramic",
    "fixedReadRange": "Up to 5m",
    "handheldReadRange": "Up to 3m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Tools"
    ],
    "industries": [
      "Tools"
    ],
    "tags": [
      "UHF",
      "Ceramic Tag",
      "On Metal",
      "NXP Ucode 8",
      "Tools"
    ]
  },
  {
    "slug": "richrfid-rcc6012",
    "title": "RichRFID RCC6012",
    "brand": "RichRFID",
    "model": "RCC6012",
    "sku": "RCC6012",
    "subtitle": "UHF Ceramic On-metal Tag",
    "shortDesc": "Tool tracking",
    "description": "SKU: RCC6012. Supplier: RichRFID. Category: UHF Ceramic On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Ceramic Tag. Description: Small ceramic tag for metal tracking.",
    "customerSummary": "UHF Ceramic On-metal Tag | Ceramic Tag | Applications: Tools",
    "image": "https://www.richrfid.com/uploads/PS/ceramic_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/503.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Ceramic Tag",
    "sizeText": "",
    "material": "Ceramic",
    "fixedReadRange": "Up to 5m",
    "handheldReadRange": "Up to 3m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Tools"
    ],
    "industries": [
      "Tools"
    ],
    "tags": [
      "UHF",
      "Ceramic Tag",
      "On Metal",
      "NXP Ucode 8",
      "Tools"
    ]
  },
  {
    "slug": "richrfid-rco7001",
    "title": "RichRFID RCO7001",
    "brand": "RichRFID",
    "model": "RCO7001",
    "sku": "RCO7001",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7001. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7002",
    "title": "RichRFID RCO7002",
    "brand": "RichRFID",
    "model": "RCO7002",
    "sku": "RCO7002",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7002. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7003",
    "title": "RichRFID RCO7003",
    "brand": "RichRFID",
    "model": "RCO7003",
    "sku": "RCO7003",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7003. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7004",
    "title": "RichRFID RCO7004",
    "brand": "RichRFID",
    "model": "RCO7004",
    "sku": "RCO7004",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7004. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7005",
    "title": "RichRFID RCO7005",
    "brand": "RichRFID",
    "model": "RCO7005",
    "sku": "RCO7005",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7005. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7006",
    "title": "RichRFID RCO7006",
    "brand": "RichRFID",
    "model": "RCO7006",
    "sku": "RCO7006",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7006. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7007",
    "title": "RichRFID RCO7007",
    "brand": "RichRFID",
    "model": "RCO7007",
    "sku": "RCO7007",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7007. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7008",
    "title": "RichRFID RCO7008",
    "brand": "RichRFID",
    "model": "RCO7008",
    "sku": "RCO7008",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7008. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7009",
    "title": "RichRFID RCO7009",
    "brand": "RichRFID",
    "model": "RCO7009",
    "sku": "RCO7009",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7009. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7010",
    "title": "RichRFID RCO7010",
    "brand": "RichRFID",
    "model": "RCO7010",
    "sku": "RCO7010",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7010. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7011",
    "title": "RichRFID RCO7011",
    "brand": "RichRFID",
    "model": "RCO7011",
    "sku": "RCO7011",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7011. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7012",
    "title": "RichRFID RCO7012",
    "brand": "RichRFID",
    "model": "RCO7012",
    "sku": "RCO7012",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7012. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7013",
    "title": "RichRFID RCO7013",
    "brand": "RichRFID",
    "model": "RCO7013",
    "sku": "RCO7013",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7013. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7014",
    "title": "RichRFID RCO7014",
    "brand": "RichRFID",
    "model": "RCO7014",
    "sku": "RCO7014",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7014. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7015",
    "title": "RichRFID RCO7015",
    "brand": "RichRFID",
    "model": "RCO7015",
    "sku": "RCO7015",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7015. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7016",
    "title": "RichRFID RCO7016",
    "brand": "RichRFID",
    "model": "RCO7016",
    "sku": "RCO7016",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7016. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7017",
    "title": "RichRFID RCO7017",
    "brand": "RichRFID",
    "model": "RCO7017",
    "sku": "RCO7017",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7017. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7018",
    "title": "RichRFID RCO7018",
    "brand": "RichRFID",
    "model": "RCO7018",
    "sku": "RCO7018",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7018. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7019",
    "title": "RichRFID RCO7019",
    "brand": "RichRFID",
    "model": "RCO7019",
    "sku": "RCO7019",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7019. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7020",
    "title": "RichRFID RCO7020",
    "brand": "RichRFID",
    "model": "RCO7020",
    "sku": "RCO7020",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7020. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7021",
    "title": "RichRFID RCO7021",
    "brand": "RichRFID",
    "model": "RCO7021",
    "sku": "RCO7021",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7021. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7022",
    "title": "RichRFID RCO7022",
    "brand": "RichRFID",
    "model": "RCO7022",
    "sku": "RCO7022",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7022. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7023",
    "title": "RichRFID RCO7023",
    "brand": "RichRFID",
    "model": "RCO7023",
    "sku": "RCO7023",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7023. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7024",
    "title": "RichRFID RCO7024",
    "brand": "RichRFID",
    "model": "RCO7024",
    "sku": "RCO7024",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7024. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7025",
    "title": "RichRFID RCO7025",
    "brand": "RichRFID",
    "model": "RCO7025",
    "sku": "RCO7025",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7025. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7026",
    "title": "RichRFID RCO7026",
    "brand": "RichRFID",
    "model": "RCO7026",
    "sku": "RCO7026",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7026. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7027",
    "title": "RichRFID RCO7027",
    "brand": "RichRFID",
    "model": "RCO7027",
    "sku": "RCO7027",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7027. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7028",
    "title": "RichRFID RCO7028",
    "brand": "RichRFID",
    "model": "RCO7028",
    "sku": "RCO7028",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7028. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7029",
    "title": "RichRFID RCO7029",
    "brand": "RichRFID",
    "model": "RCO7029",
    "sku": "RCO7029",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7029. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7030",
    "title": "RichRFID RCO7030",
    "brand": "RichRFID",
    "model": "RCO7030",
    "sku": "RCO7030",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7030. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7031",
    "title": "RichRFID RCO7031",
    "brand": "RichRFID",
    "model": "RCO7031",
    "sku": "RCO7031",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7031. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7032",
    "title": "RichRFID RCO7032",
    "brand": "RichRFID",
    "model": "RCO7032",
    "sku": "RCO7032",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7032. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7033",
    "title": "RichRFID RCO7033",
    "brand": "RichRFID",
    "model": "RCO7033",
    "sku": "RCO7033",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7033. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7034",
    "title": "RichRFID RCO7034",
    "brand": "RichRFID",
    "model": "RCO7034",
    "sku": "RCO7034",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7034. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7035",
    "title": "RichRFID RCO7035",
    "brand": "RichRFID",
    "model": "RCO7035",
    "sku": "RCO7035",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7035. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7036",
    "title": "RichRFID RCO7036",
    "brand": "RichRFID",
    "model": "RCO7036",
    "sku": "RCO7036",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7036. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7037",
    "title": "RichRFID RCO7037",
    "brand": "RichRFID",
    "model": "RCO7037",
    "sku": "RCO7037",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7037. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7038",
    "title": "RichRFID RCO7038",
    "brand": "RichRFID",
    "model": "RCO7038",
    "sku": "RCO7038",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7038. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7039",
    "title": "RichRFID RCO7039",
    "brand": "RichRFID",
    "model": "RCO7039",
    "sku": "RCO7039",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7039. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7040",
    "title": "RichRFID RCO7040",
    "brand": "RichRFID",
    "model": "RCO7040",
    "sku": "RCO7040",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7040. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7041",
    "title": "RichRFID RCO7041",
    "brand": "RichRFID",
    "model": "RCO7041",
    "sku": "RCO7041",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7041. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7042",
    "title": "RichRFID RCO7042",
    "brand": "RichRFID",
    "model": "RCO7042",
    "sku": "RCO7042",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7042. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7043",
    "title": "RichRFID RCO7043",
    "brand": "RichRFID",
    "model": "RCO7043",
    "sku": "RCO7043",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7043. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7044",
    "title": "RichRFID RCO7044",
    "brand": "RichRFID",
    "model": "RCO7044",
    "sku": "RCO7044",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7044. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7045",
    "title": "RichRFID RCO7045",
    "brand": "RichRFID",
    "model": "RCO7045",
    "sku": "RCO7045",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7045. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7046",
    "title": "RichRFID RCO7046",
    "brand": "RichRFID",
    "model": "RCO7046",
    "sku": "RCO7046",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7046. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7047",
    "title": "RichRFID RCO7047",
    "brand": "RichRFID",
    "model": "RCO7047",
    "sku": "RCO7047",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7047. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7048",
    "title": "RichRFID RCO7048",
    "brand": "RichRFID",
    "model": "RCO7048",
    "sku": "RCO7048",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7048. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7049",
    "title": "RichRFID RCO7049",
    "brand": "RichRFID",
    "model": "RCO7049",
    "sku": "RCO7049",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7049. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7050",
    "title": "RichRFID RCO7050",
    "brand": "RichRFID",
    "model": "RCO7050",
    "sku": "RCO7050",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7050. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7051",
    "title": "RichRFID RCO7051",
    "brand": "RichRFID",
    "model": "RCO7051",
    "sku": "RCO7051",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7051. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7052",
    "title": "RichRFID RCO7052",
    "brand": "RichRFID",
    "model": "RCO7052",
    "sku": "RCO7052",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7052. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7053",
    "title": "RichRFID RCO7053",
    "brand": "RichRFID",
    "model": "RCO7053",
    "sku": "RCO7053",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7053. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7054",
    "title": "RichRFID RCO7054",
    "brand": "RichRFID",
    "model": "RCO7054",
    "sku": "RCO7054",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7054. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7055",
    "title": "RichRFID RCO7055",
    "brand": "RichRFID",
    "model": "RCO7055",
    "sku": "RCO7055",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7055. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7056",
    "title": "RichRFID RCO7056",
    "brand": "RichRFID",
    "model": "RCO7056",
    "sku": "RCO7056",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7056. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7057",
    "title": "RichRFID RCO7057",
    "brand": "RichRFID",
    "model": "RCO7057",
    "sku": "RCO7057",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7057. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7058",
    "title": "RichRFID RCO7058",
    "brand": "RichRFID",
    "model": "RCO7058",
    "sku": "RCO7058",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7058. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7059",
    "title": "RichRFID RCO7059",
    "brand": "RichRFID",
    "model": "RCO7059",
    "sku": "RCO7059",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7059. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7060",
    "title": "RichRFID RCO7060",
    "brand": "RichRFID",
    "model": "RCO7060",
    "sku": "RCO7060",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7060. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7061",
    "title": "RichRFID RCO7061",
    "brand": "RichRFID",
    "model": "RCO7061",
    "sku": "RCO7061",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7061. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7062",
    "title": "RichRFID RCO7062",
    "brand": "RichRFID",
    "model": "RCO7062",
    "sku": "RCO7062",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7062. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7063",
    "title": "RichRFID RCO7063",
    "brand": "RichRFID",
    "model": "RCO7063",
    "sku": "RCO7063",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7063. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7064",
    "title": "RichRFID RCO7064",
    "brand": "RichRFID",
    "model": "RCO7064",
    "sku": "RCO7064",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7064. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7065",
    "title": "RichRFID RCO7065",
    "brand": "RichRFID",
    "model": "RCO7065",
    "sku": "RCO7065",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7065. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7066",
    "title": "RichRFID RCO7066",
    "brand": "RichRFID",
    "model": "RCO7066",
    "sku": "RCO7066",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7066. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7067",
    "title": "RichRFID RCO7067",
    "brand": "RichRFID",
    "model": "RCO7067",
    "sku": "RCO7067",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7067. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7068",
    "title": "RichRFID RCO7068",
    "brand": "RichRFID",
    "model": "RCO7068",
    "sku": "RCO7068",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7068. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7069",
    "title": "RichRFID RCO7069",
    "brand": "RichRFID",
    "model": "RCO7069",
    "sku": "RCO7069",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7069. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco7070",
    "title": "RichRFID RCO7070",
    "brand": "RichRFID",
    "model": "RCO7070",
    "sku": "RCO7070",
    "subtitle": "UHF On-metal Label",
    "shortDesc": "Asset tracking",
    "description": "SKU: RCO7070. Supplier: RichRFID. Category: UHF On-metal Label. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Flexible and printable UHF on-metal label.",
    "customerSummary": "UHF On-metal Label | Flexible Label | Applications: Asset Tracking",
    "image": "https://www.richrfid.com/uploads/PS/on_metal_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/499.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "",
    "material": "Synthetic Paper",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 5m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Asset Tracking"
    ],
    "industries": [
      "Asset Tracking"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP Ucode 8",
      "Asset Tracking"
    ]
  },
  {
    "slug": "richrfid-rco8001",
    "title": "RichRFID RCO8001",
    "brand": "RichRFID",
    "model": "RCO8001",
    "sku": "RCO8001",
    "subtitle": "UHF High Protection Tag",
    "shortDesc": "Outdoor assets",
    "description": "SKU: RCO8001. Supplier: RichRFID. Category: UHF High Protection Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Rugged Tag. Description: Ruggedized tag for extreme environments.",
    "customerSummary": "UHF High Protection Tag | Rugged Tag | Applications: Outdoor",
    "image": "https://www.richrfid.com/uploads/PS/protection_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/502.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Rugged Tag",
    "sizeText": "",
    "material": "ABS",
    "fixedReadRange": "Up to 12m",
    "handheldReadRange": "Up to 8m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Outdoor"
    ],
    "industries": [
      "Outdoor"
    ],
    "tags": [
      "UHF",
      "Rugged Tag",
      "On Metal",
      "NXP Ucode 8",
      "Outdoor"
    ]
  },
  {
    "slug": "richrfid-rco8002",
    "title": "RichRFID RCO8002",
    "brand": "RichRFID",
    "model": "RCO8002",
    "sku": "RCO8002",
    "subtitle": "UHF High Protection Tag",
    "shortDesc": "Outdoor assets",
    "description": "SKU: RCO8002. Supplier: RichRFID. Category: UHF High Protection Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Rugged Tag. Description: Ruggedized tag for extreme environments.",
    "customerSummary": "UHF High Protection Tag | Rugged Tag | Applications: Outdoor",
    "image": "https://www.richrfid.com/uploads/PS/protection_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/502.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Rugged Tag",
    "sizeText": "",
    "material": "ABS",
    "fixedReadRange": "Up to 12m",
    "handheldReadRange": "Up to 8m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Outdoor"
    ],
    "industries": [
      "Outdoor"
    ],
    "tags": [
      "UHF",
      "Rugged Tag",
      "On Metal",
      "NXP Ucode 8",
      "Outdoor"
    ]
  },
  {
    "slug": "richrfid-rco8003",
    "title": "RichRFID RCO8003",
    "brand": "RichRFID",
    "model": "RCO8003",
    "sku": "RCO8003",
    "subtitle": "UHF High Protection Tag",
    "shortDesc": "Outdoor assets",
    "description": "SKU: RCO8003. Supplier: RichRFID. Category: UHF High Protection Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Rugged Tag. Description: Ruggedized tag for extreme environments.",
    "customerSummary": "UHF High Protection Tag | Rugged Tag | Applications: Outdoor",
    "image": "https://www.richrfid.com/uploads/PS/protection_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/502.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Rugged Tag",
    "sizeText": "",
    "material": "ABS",
    "fixedReadRange": "Up to 12m",
    "handheldReadRange": "Up to 8m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Outdoor"
    ],
    "industries": [
      "Outdoor"
    ],
    "tags": [
      "UHF",
      "Rugged Tag",
      "On Metal",
      "NXP Ucode 8",
      "Outdoor"
    ]
  },
  {
    "slug": "richrfid-rco8004",
    "title": "RichRFID RCO8004",
    "brand": "RichRFID",
    "model": "RCO8004",
    "sku": "RCO8004",
    "subtitle": "UHF High Protection Tag",
    "shortDesc": "Outdoor assets",
    "description": "SKU: RCO8004. Supplier: RichRFID. Category: UHF High Protection Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Rugged Tag. Description: Ruggedized tag for extreme environments.",
    "customerSummary": "UHF High Protection Tag | Rugged Tag | Applications: Outdoor",
    "image": "https://www.richrfid.com/uploads/PS/protection_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/502.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Rugged Tag",
    "sizeText": "",
    "material": "ABS",
    "fixedReadRange": "Up to 12m",
    "handheldReadRange": "Up to 8m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Outdoor"
    ],
    "industries": [
      "Outdoor"
    ],
    "tags": [
      "UHF",
      "Rugged Tag",
      "On Metal",
      "NXP Ucode 8",
      "Outdoor"
    ]
  },
  {
    "slug": "richrfid-rco8005",
    "title": "RichRFID RCO8005",
    "brand": "RichRFID",
    "model": "RCO8005",
    "sku": "RCO8005",
    "subtitle": "UHF High Protection Tag",
    "shortDesc": "Outdoor assets",
    "description": "SKU: RCO8005. Supplier: RichRFID. Category: UHF High Protection Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Rugged Tag. Description: Ruggedized tag for extreme environments.",
    "customerSummary": "UHF High Protection Tag | Rugged Tag | Applications: Outdoor",
    "image": "https://www.richrfid.com/uploads/PS/protection_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/502.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Rugged Tag",
    "sizeText": "",
    "material": "ABS",
    "fixedReadRange": "Up to 12m",
    "handheldReadRange": "Up to 8m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Outdoor"
    ],
    "industries": [
      "Outdoor"
    ],
    "tags": [
      "UHF",
      "Rugged Tag",
      "On Metal",
      "NXP Ucode 8",
      "Outdoor"
    ]
  },
  {
    "slug": "richrfid-rco8006",
    "title": "RichRFID RCO8006",
    "brand": "RichRFID",
    "model": "RCO8006",
    "sku": "RCO8006",
    "subtitle": "UHF High Protection Tag",
    "shortDesc": "Outdoor assets",
    "description": "SKU: RCO8006. Supplier: RichRFID. Category: UHF High Protection Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Rugged Tag. Description: Ruggedized tag for extreme environments.",
    "customerSummary": "UHF High Protection Tag | Rugged Tag | Applications: Outdoor",
    "image": "https://www.richrfid.com/uploads/PS/protection_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/502.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Rugged Tag",
    "sizeText": "",
    "material": "ABS",
    "fixedReadRange": "Up to 12m",
    "handheldReadRange": "Up to 8m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Outdoor"
    ],
    "industries": [
      "Outdoor"
    ],
    "tags": [
      "UHF",
      "Rugged Tag",
      "On Metal",
      "NXP Ucode 8",
      "Outdoor"
    ]
  },
  {
    "slug": "richrfid-rco8007",
    "title": "RichRFID RCO8007",
    "brand": "RichRFID",
    "model": "RCO8007",
    "sku": "RCO8007",
    "subtitle": "UHF High Protection Tag",
    "shortDesc": "Outdoor assets",
    "description": "SKU: RCO8007. Supplier: RichRFID. Category: UHF High Protection Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Rugged Tag. Description: Ruggedized tag for extreme environments.",
    "customerSummary": "UHF High Protection Tag | Rugged Tag | Applications: Outdoor",
    "image": "https://www.richrfid.com/uploads/PS/protection_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/502.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Rugged Tag",
    "sizeText": "",
    "material": "ABS",
    "fixedReadRange": "Up to 12m",
    "handheldReadRange": "Up to 8m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Outdoor"
    ],
    "industries": [
      "Outdoor"
    ],
    "tags": [
      "UHF",
      "Rugged Tag",
      "On Metal",
      "NXP Ucode 8",
      "Outdoor"
    ]
  },
  {
    "slug": "richrfid-rco8008",
    "title": "RichRFID RCO8008",
    "brand": "RichRFID",
    "model": "RCO8008",
    "sku": "RCO8008",
    "subtitle": "UHF High Protection Tag",
    "shortDesc": "Outdoor assets",
    "description": "SKU: RCO8008. Supplier: RichRFID. Category: UHF High Protection Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Rugged Tag. Description: Ruggedized tag for extreme environments.",
    "customerSummary": "UHF High Protection Tag | Rugged Tag | Applications: Outdoor",
    "image": "https://www.richrfid.com/uploads/PS/protection_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/502.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Rugged Tag",
    "sizeText": "",
    "material": "ABS",
    "fixedReadRange": "Up to 12m",
    "handheldReadRange": "Up to 8m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Outdoor"
    ],
    "industries": [
      "Outdoor"
    ],
    "tags": [
      "UHF",
      "Rugged Tag",
      "On Metal",
      "NXP Ucode 8",
      "Outdoor"
    ]
  },
  {
    "slug": "richrfid-rco8009",
    "title": "RichRFID RCO8009",
    "brand": "RichRFID",
    "model": "RCO8009",
    "sku": "RCO8009",
    "subtitle": "UHF High Protection Tag",
    "shortDesc": "Outdoor assets",
    "description": "SKU: RCO8009. Supplier: RichRFID. Category: UHF High Protection Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Rugged Tag. Description: Ruggedized tag for extreme environments.",
    "customerSummary": "UHF High Protection Tag | Rugged Tag | Applications: Outdoor",
    "image": "https://www.richrfid.com/uploads/PS/protection_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/502.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Rugged Tag",
    "sizeText": "",
    "material": "ABS",
    "fixedReadRange": "Up to 12m",
    "handheldReadRange": "Up to 8m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Outdoor"
    ],
    "industries": [
      "Outdoor"
    ],
    "tags": [
      "UHF",
      "Rugged Tag",
      "On Metal",
      "NXP Ucode 8",
      "Outdoor"
    ]
  },
  {
    "slug": "richrfid-rco8010",
    "title": "RichRFID RCO8010",
    "brand": "RichRFID",
    "model": "RCO8010",
    "sku": "RCO8010",
    "subtitle": "UHF High Protection Tag",
    "shortDesc": "Outdoor assets",
    "description": "SKU: RCO8010. Supplier: RichRFID. Category: UHF High Protection Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Rugged Tag. Description: Ruggedized tag for extreme environments.",
    "customerSummary": "UHF High Protection Tag | Rugged Tag | Applications: Outdoor",
    "image": "https://www.richrfid.com/uploads/PS/protection_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/502.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Rugged Tag",
    "sizeText": "",
    "material": "ABS",
    "fixedReadRange": "Up to 12m",
    "handheldReadRange": "Up to 8m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Outdoor"
    ],
    "industries": [
      "Outdoor"
    ],
    "tags": [
      "UHF",
      "Rugged Tag",
      "On Metal",
      "NXP Ucode 8",
      "Outdoor"
    ]
  },
  {
    "slug": "richrfid-rco8011",
    "title": "RichRFID RCO8011",
    "brand": "RichRFID",
    "model": "RCO8011",
    "sku": "RCO8011",
    "subtitle": "UHF High Protection Tag",
    "shortDesc": "Outdoor assets",
    "description": "SKU: RCO8011. Supplier: RichRFID. Category: UHF High Protection Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Rugged Tag. Description: Ruggedized tag for extreme environments.",
    "customerSummary": "UHF High Protection Tag | Rugged Tag | Applications: Outdoor",
    "image": "https://www.richrfid.com/uploads/PS/protection_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/502.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Rugged Tag",
    "sizeText": "",
    "material": "ABS",
    "fixedReadRange": "Up to 12m",
    "handheldReadRange": "Up to 8m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Outdoor"
    ],
    "industries": [
      "Outdoor"
    ],
    "tags": [
      "UHF",
      "Rugged Tag",
      "On Metal",
      "NXP Ucode 8",
      "Outdoor"
    ]
  },
  {
    "slug": "richrfid-rco8012",
    "title": "RichRFID RCO8012",
    "brand": "RichRFID",
    "model": "RCO8012",
    "sku": "RCO8012",
    "subtitle": "UHF High Protection Tag",
    "shortDesc": "Outdoor assets",
    "description": "SKU: RCO8012. Supplier: RichRFID. Category: UHF High Protection Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Rugged Tag. Description: Ruggedized tag for extreme environments.",
    "customerSummary": "UHF High Protection Tag | Rugged Tag | Applications: Outdoor",
    "image": "https://www.richrfid.com/uploads/PS/protection_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/502.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Rugged Tag",
    "sizeText": "",
    "material": "ABS",
    "fixedReadRange": "Up to 12m",
    "handheldReadRange": "Up to 8m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Outdoor"
    ],
    "industries": [
      "Outdoor"
    ],
    "tags": [
      "UHF",
      "Rugged Tag",
      "On Metal",
      "NXP Ucode 8",
      "Outdoor"
    ]
  },
  {
    "slug": "richrfid-rco8013",
    "title": "RichRFID RCO8013",
    "brand": "RichRFID",
    "model": "RCO8013",
    "sku": "RCO8013",
    "subtitle": "UHF High Protection Tag",
    "shortDesc": "Outdoor assets",
    "description": "SKU: RCO8013. Supplier: RichRFID. Category: UHF High Protection Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Rugged Tag. Description: Ruggedized tag for extreme environments.",
    "customerSummary": "UHF High Protection Tag | Rugged Tag | Applications: Outdoor",
    "image": "https://www.richrfid.com/uploads/PS/protection_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/502.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Rugged Tag",
    "sizeText": "",
    "material": "ABS",
    "fixedReadRange": "Up to 12m",
    "handheldReadRange": "Up to 8m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Outdoor"
    ],
    "industries": [
      "Outdoor"
    ],
    "tags": [
      "UHF",
      "Rugged Tag",
      "On Metal",
      "NXP Ucode 8",
      "Outdoor"
    ]
  },
  {
    "slug": "richrfid-rco8014",
    "title": "RichRFID RCO8014",
    "brand": "RichRFID",
    "model": "RCO8014",
    "sku": "RCO8014",
    "subtitle": "UHF High Protection Tag",
    "shortDesc": "Outdoor assets",
    "description": "SKU: RCO8014. Supplier: RichRFID. Category: UHF High Protection Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Rugged Tag. Description: Ruggedized tag for extreme environments.",
    "customerSummary": "UHF High Protection Tag | Rugged Tag | Applications: Outdoor",
    "image": "https://www.richrfid.com/uploads/PS/protection_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/502.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Rugged Tag",
    "sizeText": "",
    "material": "ABS",
    "fixedReadRange": "Up to 12m",
    "handheldReadRange": "Up to 8m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Outdoor"
    ],
    "industries": [
      "Outdoor"
    ],
    "tags": [
      "UHF",
      "Rugged Tag",
      "On Metal",
      "NXP Ucode 8",
      "Outdoor"
    ]
  },
  {
    "slug": "richrfid-rco8015",
    "title": "RichRFID RCO8015",
    "brand": "RichRFID",
    "model": "RCO8015",
    "sku": "RCO8015",
    "subtitle": "UHF High Protection Tag",
    "shortDesc": "Outdoor assets",
    "description": "SKU: RCO8015. Supplier: RichRFID. Category: UHF High Protection Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Rugged Tag. Description: Ruggedized tag for extreme environments.",
    "customerSummary": "UHF High Protection Tag | Rugged Tag | Applications: Outdoor",
    "image": "https://www.richrfid.com/uploads/PS/protection_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/502.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Rugged Tag",
    "sizeText": "",
    "material": "ABS",
    "fixedReadRange": "Up to 12m",
    "handheldReadRange": "Up to 8m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Outdoor"
    ],
    "industries": [
      "Outdoor"
    ],
    "tags": [
      "UHF",
      "Rugged Tag",
      "On Metal",
      "NXP Ucode 8",
      "Outdoor"
    ]
  },
  {
    "slug": "richrfid-rco8016",
    "title": "RichRFID RCO8016",
    "brand": "RichRFID",
    "model": "RCO8016",
    "sku": "RCO8016",
    "subtitle": "UHF High Protection Tag",
    "shortDesc": "Outdoor assets",
    "description": "SKU: RCO8016. Supplier: RichRFID. Category: UHF High Protection Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Rugged Tag. Description: Ruggedized tag for extreme environments.",
    "customerSummary": "UHF High Protection Tag | Rugged Tag | Applications: Outdoor",
    "image": "https://www.richrfid.com/uploads/PS/protection_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/502.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Rugged Tag",
    "sizeText": "",
    "material": "ABS",
    "fixedReadRange": "Up to 12m",
    "handheldReadRange": "Up to 8m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Outdoor"
    ],
    "industries": [
      "Outdoor"
    ],
    "tags": [
      "UHF",
      "Rugged Tag",
      "On Metal",
      "NXP Ucode 8",
      "Outdoor"
    ]
  },
  {
    "slug": "richrfid-rco8017",
    "title": "RichRFID RCO8017",
    "brand": "RichRFID",
    "model": "RCO8017",
    "sku": "RCO8017",
    "subtitle": "UHF High Protection Tag",
    "shortDesc": "Outdoor assets",
    "description": "SKU: RCO8017. Supplier: RichRFID. Category: UHF High Protection Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Rugged Tag. Description: Ruggedized tag for extreme environments.",
    "customerSummary": "UHF High Protection Tag | Rugged Tag | Applications: Outdoor",
    "image": "https://www.richrfid.com/uploads/PS/protection_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/502.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Rugged Tag",
    "sizeText": "",
    "material": "ABS",
    "fixedReadRange": "Up to 12m",
    "handheldReadRange": "Up to 8m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Outdoor"
    ],
    "industries": [
      "Outdoor"
    ],
    "tags": [
      "UHF",
      "Rugged Tag",
      "On Metal",
      "NXP Ucode 8",
      "Outdoor"
    ]
  },
  {
    "slug": "richrfid-rco8018",
    "title": "RichRFID RCO8018",
    "brand": "RichRFID",
    "model": "RCO8018",
    "sku": "RCO8018",
    "subtitle": "UHF High Protection Tag",
    "shortDesc": "Outdoor assets",
    "description": "SKU: RCO8018. Supplier: RichRFID. Category: UHF High Protection Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Rugged Tag. Description: Ruggedized tag for extreme environments.",
    "customerSummary": "UHF High Protection Tag | Rugged Tag | Applications: Outdoor",
    "image": "https://www.richrfid.com/uploads/PS/protection_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/502.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Rugged Tag",
    "sizeText": "",
    "material": "ABS",
    "fixedReadRange": "Up to 12m",
    "handheldReadRange": "Up to 8m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Outdoor"
    ],
    "industries": [
      "Outdoor"
    ],
    "tags": [
      "UHF",
      "Rugged Tag",
      "On Metal",
      "NXP Ucode 8",
      "Outdoor"
    ]
  },
  {
    "slug": "richrfid-rco8019",
    "title": "RichRFID RCO8019",
    "brand": "RichRFID",
    "model": "RCO8019",
    "sku": "RCO8019",
    "subtitle": "UHF High Protection Tag",
    "shortDesc": "Outdoor assets",
    "description": "SKU: RCO8019. Supplier: RichRFID. Category: UHF High Protection Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Rugged Tag. Description: Ruggedized tag for extreme environments.",
    "customerSummary": "UHF High Protection Tag | Rugged Tag | Applications: Outdoor",
    "image": "https://www.richrfid.com/uploads/PS/protection_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/502.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Rugged Tag",
    "sizeText": "",
    "material": "ABS",
    "fixedReadRange": "Up to 12m",
    "handheldReadRange": "Up to 8m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP68",
    "applications": [
      "Outdoor"
    ],
    "industries": [
      "Outdoor"
    ],
    "tags": [
      "UHF",
      "Rugged Tag",
      "On Metal",
      "NXP Ucode 8",
      "Outdoor"
    ]
  },
  {
    "slug": "richrfid-rcp8001",
    "title": "RichRFID RCP8001",
    "brand": "RichRFID",
    "model": "RCP8001",
    "sku": "RCP8001",
    "subtitle": "UHF PCB On-metal Tag",
    "shortDesc": "Industrial assets",
    "description": "SKU: RCP8001. Supplier: RichRFID. Category: UHF PCB On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: PCB Tag. Description: Rugged PCB tag for metal surfaces.",
    "customerSummary": "UHF PCB On-metal Tag | PCB Tag | Applications: Industrial",
    "image": "https://www.richrfid.com/uploads/PS/pcb_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/501.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "PCB Tag",
    "sizeText": "",
    "material": "FR4",
    "fixedReadRange": "Up to 6m",
    "handheldReadRange": "Up to 4m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "PCB Tag",
      "On Metal",
      "NXP Ucode 8",
      "Industrial"
    ]
  },
  {
    "slug": "richrfid-rcp8002",
    "title": "RichRFID RCP8002",
    "brand": "RichRFID",
    "model": "RCP8002",
    "sku": "RCP8002",
    "subtitle": "UHF PCB On-metal Tag",
    "shortDesc": "Industrial assets",
    "description": "SKU: RCP8002. Supplier: RichRFID. Category: UHF PCB On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: PCB Tag. Description: Rugged PCB tag for metal surfaces.",
    "customerSummary": "UHF PCB On-metal Tag | PCB Tag | Applications: Industrial",
    "image": "https://www.richrfid.com/uploads/PS/pcb_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/501.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "PCB Tag",
    "sizeText": "",
    "material": "FR4",
    "fixedReadRange": "Up to 6m",
    "handheldReadRange": "Up to 4m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "PCB Tag",
      "On Metal",
      "NXP Ucode 8",
      "Industrial"
    ]
  },
  {
    "slug": "richrfid-rcp8003",
    "title": "RichRFID RCP8003",
    "brand": "RichRFID",
    "model": "RCP8003",
    "sku": "RCP8003",
    "subtitle": "UHF PCB On-metal Tag",
    "shortDesc": "Industrial assets",
    "description": "SKU: RCP8003. Supplier: RichRFID. Category: UHF PCB On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: PCB Tag. Description: Rugged PCB tag for metal surfaces.",
    "customerSummary": "UHF PCB On-metal Tag | PCB Tag | Applications: Industrial",
    "image": "https://www.richrfid.com/uploads/PS/pcb_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/501.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "PCB Tag",
    "sizeText": "",
    "material": "FR4",
    "fixedReadRange": "Up to 6m",
    "handheldReadRange": "Up to 4m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "PCB Tag",
      "On Metal",
      "NXP Ucode 8",
      "Industrial"
    ]
  },
  {
    "slug": "richrfid-rcp8004",
    "title": "RichRFID RCP8004",
    "brand": "RichRFID",
    "model": "RCP8004",
    "sku": "RCP8004",
    "subtitle": "UHF PCB On-metal Tag",
    "shortDesc": "Industrial assets",
    "description": "SKU: RCP8004. Supplier: RichRFID. Category: UHF PCB On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: PCB Tag. Description: Rugged PCB tag for metal surfaces.",
    "customerSummary": "UHF PCB On-metal Tag | PCB Tag | Applications: Industrial",
    "image": "https://www.richrfid.com/uploads/PS/pcb_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/501.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "PCB Tag",
    "sizeText": "",
    "material": "FR4",
    "fixedReadRange": "Up to 6m",
    "handheldReadRange": "Up to 4m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "PCB Tag",
      "On Metal",
      "NXP Ucode 8",
      "Industrial"
    ]
  },
  {
    "slug": "richrfid-rcp8005",
    "title": "RichRFID RCP8005",
    "brand": "RichRFID",
    "model": "RCP8005",
    "sku": "RCP8005",
    "subtitle": "UHF PCB On-metal Tag",
    "shortDesc": "Industrial assets",
    "description": "SKU: RCP8005. Supplier: RichRFID. Category: UHF PCB On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: PCB Tag. Description: Rugged PCB tag for metal surfaces.",
    "customerSummary": "UHF PCB On-metal Tag | PCB Tag | Applications: Industrial",
    "image": "https://www.richrfid.com/uploads/PS/pcb_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/501.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "PCB Tag",
    "sizeText": "",
    "material": "FR4",
    "fixedReadRange": "Up to 6m",
    "handheldReadRange": "Up to 4m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "PCB Tag",
      "On Metal",
      "NXP Ucode 8",
      "Industrial"
    ]
  },
  {
    "slug": "richrfid-rcp8006",
    "title": "RichRFID RCP8006",
    "brand": "RichRFID",
    "model": "RCP8006",
    "sku": "RCP8006",
    "subtitle": "UHF PCB On-metal Tag",
    "shortDesc": "Industrial assets",
    "description": "SKU: RCP8006. Supplier: RichRFID. Category: UHF PCB On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: PCB Tag. Description: Rugged PCB tag for metal surfaces.",
    "customerSummary": "UHF PCB On-metal Tag | PCB Tag | Applications: Industrial",
    "image": "https://www.richrfid.com/uploads/PS/pcb_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/501.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "PCB Tag",
    "sizeText": "",
    "material": "FR4",
    "fixedReadRange": "Up to 6m",
    "handheldReadRange": "Up to 4m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "PCB Tag",
      "On Metal",
      "NXP Ucode 8",
      "Industrial"
    ]
  },
  {
    "slug": "richrfid-rcp8007",
    "title": "RichRFID RCP8007",
    "brand": "RichRFID",
    "model": "RCP8007",
    "sku": "RCP8007",
    "subtitle": "UHF PCB On-metal Tag",
    "shortDesc": "Industrial assets",
    "description": "SKU: RCP8007. Supplier: RichRFID. Category: UHF PCB On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: PCB Tag. Description: Rugged PCB tag for metal surfaces.",
    "customerSummary": "UHF PCB On-metal Tag | PCB Tag | Applications: Industrial",
    "image": "https://www.richrfid.com/uploads/PS/pcb_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/501.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "PCB Tag",
    "sizeText": "",
    "material": "FR4",
    "fixedReadRange": "Up to 6m",
    "handheldReadRange": "Up to 4m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "PCB Tag",
      "On Metal",
      "NXP Ucode 8",
      "Industrial"
    ]
  },
  {
    "slug": "richrfid-rcp8008",
    "title": "RichRFID RCP8008",
    "brand": "RichRFID",
    "model": "RCP8008",
    "sku": "RCP8008",
    "subtitle": "UHF PCB On-metal Tag",
    "shortDesc": "Industrial assets",
    "description": "SKU: RCP8008. Supplier: RichRFID. Category: UHF PCB On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: PCB Tag. Description: Rugged PCB tag for metal surfaces.",
    "customerSummary": "UHF PCB On-metal Tag | PCB Tag | Applications: Industrial",
    "image": "https://www.richrfid.com/uploads/PS/pcb_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/501.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "PCB Tag",
    "sizeText": "",
    "material": "FR4",
    "fixedReadRange": "Up to 6m",
    "handheldReadRange": "Up to 4m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "PCB Tag",
      "On Metal",
      "NXP Ucode 8",
      "Industrial"
    ]
  },
  {
    "slug": "richrfid-rcp8009",
    "title": "RichRFID RCP8009",
    "brand": "RichRFID",
    "model": "RCP8009",
    "sku": "RCP8009",
    "subtitle": "UHF PCB On-metal Tag",
    "shortDesc": "Industrial assets",
    "description": "SKU: RCP8009. Supplier: RichRFID. Category: UHF PCB On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: PCB Tag. Description: Rugged PCB tag for metal surfaces.",
    "customerSummary": "UHF PCB On-metal Tag | PCB Tag | Applications: Industrial",
    "image": "https://www.richrfid.com/uploads/PS/pcb_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/501.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "PCB Tag",
    "sizeText": "",
    "material": "FR4",
    "fixedReadRange": "Up to 6m",
    "handheldReadRange": "Up to 4m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "PCB Tag",
      "On Metal",
      "NXP Ucode 8",
      "Industrial"
    ]
  },
  {
    "slug": "richrfid-rcp8010",
    "title": "RichRFID RCP8010",
    "brand": "RichRFID",
    "model": "RCP8010",
    "sku": "RCP8010",
    "subtitle": "UHF PCB On-metal Tag",
    "shortDesc": "Industrial assets",
    "description": "SKU: RCP8010. Supplier: RichRFID. Category: UHF PCB On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: PCB Tag. Description: Rugged PCB tag for metal surfaces.",
    "customerSummary": "UHF PCB On-metal Tag | PCB Tag | Applications: Industrial",
    "image": "https://www.richrfid.com/uploads/PS/pcb_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/501.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "PCB Tag",
    "sizeText": "",
    "material": "FR4",
    "fixedReadRange": "Up to 6m",
    "handheldReadRange": "Up to 4m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "PCB Tag",
      "On Metal",
      "NXP Ucode 8",
      "Industrial"
    ]
  },
  {
    "slug": "richrfid-rcp8011",
    "title": "RichRFID RCP8011",
    "brand": "RichRFID",
    "model": "RCP8011",
    "sku": "RCP8011",
    "subtitle": "UHF PCB On-metal Tag",
    "shortDesc": "Industrial assets",
    "description": "SKU: RCP8011. Supplier: RichRFID. Category: UHF PCB On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: PCB Tag. Description: Rugged PCB tag for metal surfaces.",
    "customerSummary": "UHF PCB On-metal Tag | PCB Tag | Applications: Industrial",
    "image": "https://www.richrfid.com/uploads/PS/pcb_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/501.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "PCB Tag",
    "sizeText": "",
    "material": "FR4",
    "fixedReadRange": "Up to 6m",
    "handheldReadRange": "Up to 4m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "PCB Tag",
      "On Metal",
      "NXP Ucode 8",
      "Industrial"
    ]
  },
  {
    "slug": "richrfid-rcp8012",
    "title": "RichRFID RCP8012",
    "brand": "RichRFID",
    "model": "RCP8012",
    "sku": "RCP8012",
    "subtitle": "UHF PCB On-metal Tag",
    "shortDesc": "Industrial assets",
    "description": "SKU: RCP8012. Supplier: RichRFID. Category: UHF PCB On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: PCB Tag. Description: Rugged PCB tag for metal surfaces.",
    "customerSummary": "UHF PCB On-metal Tag | PCB Tag | Applications: Industrial",
    "image": "https://www.richrfid.com/uploads/PS/pcb_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/501.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "PCB Tag",
    "sizeText": "",
    "material": "FR4",
    "fixedReadRange": "Up to 6m",
    "handheldReadRange": "Up to 4m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "PCB Tag",
      "On Metal",
      "NXP Ucode 8",
      "Industrial"
    ]
  },
  {
    "slug": "richrfid-rcp8013",
    "title": "RichRFID RCP8013",
    "brand": "RichRFID",
    "model": "RCP8013",
    "sku": "RCP8013",
    "subtitle": "UHF PCB On-metal Tag",
    "shortDesc": "Industrial assets",
    "description": "SKU: RCP8013. Supplier: RichRFID. Category: UHF PCB On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: PCB Tag. Description: Rugged PCB tag for metal surfaces.",
    "customerSummary": "UHF PCB On-metal Tag | PCB Tag | Applications: Industrial",
    "image": "https://www.richrfid.com/uploads/PS/pcb_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/501.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "PCB Tag",
    "sizeText": "",
    "material": "FR4",
    "fixedReadRange": "Up to 6m",
    "handheldReadRange": "Up to 4m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "PCB Tag",
      "On Metal",
      "NXP Ucode 8",
      "Industrial"
    ]
  },
  {
    "slug": "richrfid-rcp8014",
    "title": "RichRFID RCP8014",
    "brand": "RichRFID",
    "model": "RCP8014",
    "sku": "RCP8014",
    "subtitle": "UHF PCB On-metal Tag",
    "shortDesc": "Industrial assets",
    "description": "SKU: RCP8014. Supplier: RichRFID. Category: UHF PCB On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: PCB Tag. Description: Rugged PCB tag for metal surfaces.",
    "customerSummary": "UHF PCB On-metal Tag | PCB Tag | Applications: Industrial",
    "image": "https://www.richrfid.com/uploads/PS/pcb_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/501.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "PCB Tag",
    "sizeText": "",
    "material": "FR4",
    "fixedReadRange": "Up to 6m",
    "handheldReadRange": "Up to 4m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "PCB Tag",
      "On Metal",
      "NXP Ucode 8",
      "Industrial"
    ]
  },
  {
    "slug": "richrfid-rcp8015",
    "title": "RichRFID RCP8015",
    "brand": "RichRFID",
    "model": "RCP8015",
    "sku": "RCP8015",
    "subtitle": "UHF PCB On-metal Tag",
    "shortDesc": "Industrial assets",
    "description": "SKU: RCP8015. Supplier: RichRFID. Category: UHF PCB On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: PCB Tag. Description: Rugged PCB tag for metal surfaces.",
    "customerSummary": "UHF PCB On-metal Tag | PCB Tag | Applications: Industrial",
    "image": "https://www.richrfid.com/uploads/PS/pcb_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/501.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "PCB Tag",
    "sizeText": "",
    "material": "FR4",
    "fixedReadRange": "Up to 6m",
    "handheldReadRange": "Up to 4m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "PCB Tag",
      "On Metal",
      "NXP Ucode 8",
      "Industrial"
    ]
  },
  {
    "slug": "richrfid-rcp8016",
    "title": "RichRFID RCP8016",
    "brand": "RichRFID",
    "model": "RCP8016",
    "sku": "RCP8016",
    "subtitle": "UHF PCB On-metal Tag",
    "shortDesc": "Industrial assets",
    "description": "SKU: RCP8016. Supplier: RichRFID. Category: UHF PCB On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: PCB Tag. Description: Rugged PCB tag for metal surfaces.",
    "customerSummary": "UHF PCB On-metal Tag | PCB Tag | Applications: Industrial",
    "image": "https://www.richrfid.com/uploads/PS/pcb_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/501.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "PCB Tag",
    "sizeText": "",
    "material": "FR4",
    "fixedReadRange": "Up to 6m",
    "handheldReadRange": "Up to 4m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "PCB Tag",
      "On Metal",
      "NXP Ucode 8",
      "Industrial"
    ]
  },
  {
    "slug": "richrfid-rcp8017",
    "title": "RichRFID RCP8017",
    "brand": "RichRFID",
    "model": "RCP8017",
    "sku": "RCP8017",
    "subtitle": "UHF PCB On-metal Tag",
    "shortDesc": "Industrial assets",
    "description": "SKU: RCP8017. Supplier: RichRFID. Category: UHF PCB On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: PCB Tag. Description: Rugged PCB tag for metal surfaces.",
    "customerSummary": "UHF PCB On-metal Tag | PCB Tag | Applications: Industrial",
    "image": "https://www.richrfid.com/uploads/PS/pcb_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/501.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "PCB Tag",
    "sizeText": "",
    "material": "FR4",
    "fixedReadRange": "Up to 6m",
    "handheldReadRange": "Up to 4m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "PCB Tag",
      "On Metal",
      "NXP Ucode 8",
      "Industrial"
    ]
  },
  {
    "slug": "richrfid-rcp8018",
    "title": "RichRFID RCP8018",
    "brand": "RichRFID",
    "model": "RCP8018",
    "sku": "RCP8018",
    "subtitle": "UHF PCB On-metal Tag",
    "shortDesc": "Industrial assets",
    "description": "SKU: RCP8018. Supplier: RichRFID. Category: UHF PCB On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: PCB Tag. Description: Rugged PCB tag for metal surfaces.",
    "customerSummary": "UHF PCB On-metal Tag | PCB Tag | Applications: Industrial",
    "image": "https://www.richrfid.com/uploads/PS/pcb_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/501.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "PCB Tag",
    "sizeText": "",
    "material": "FR4",
    "fixedReadRange": "Up to 6m",
    "handheldReadRange": "Up to 4m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "PCB Tag",
      "On Metal",
      "NXP Ucode 8",
      "Industrial"
    ]
  },
  {
    "slug": "richrfid-rcp8019",
    "title": "RichRFID RCP8019",
    "brand": "RichRFID",
    "model": "RCP8019",
    "sku": "RCP8019",
    "subtitle": "UHF PCB On-metal Tag",
    "shortDesc": "Industrial assets",
    "description": "SKU: RCP8019. Supplier: RichRFID. Category: UHF PCB On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: PCB Tag. Description: Rugged PCB tag for metal surfaces.",
    "customerSummary": "UHF PCB On-metal Tag | PCB Tag | Applications: Industrial",
    "image": "https://www.richrfid.com/uploads/PS/pcb_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/501.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "PCB Tag",
    "sizeText": "",
    "material": "FR4",
    "fixedReadRange": "Up to 6m",
    "handheldReadRange": "Up to 4m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "PCB Tag",
      "On Metal",
      "NXP Ucode 8",
      "Industrial"
    ]
  },
  {
    "slug": "richrfid-rcp8020",
    "title": "RichRFID RCP8020",
    "brand": "RichRFID",
    "model": "RCP8020",
    "sku": "RCP8020",
    "subtitle": "UHF PCB On-metal Tag",
    "shortDesc": "Industrial assets",
    "description": "SKU: RCP8020. Supplier: RichRFID. Category: UHF PCB On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: PCB Tag. Description: Rugged PCB tag for metal surfaces.",
    "customerSummary": "UHF PCB On-metal Tag | PCB Tag | Applications: Industrial",
    "image": "https://www.richrfid.com/uploads/PS/pcb_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/501.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "PCB Tag",
    "sizeText": "",
    "material": "FR4",
    "fixedReadRange": "Up to 6m",
    "handheldReadRange": "Up to 4m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "PCB Tag",
      "On Metal",
      "NXP Ucode 8",
      "Industrial"
    ]
  },
  {
    "slug": "richrfid-rcp8021",
    "title": "RichRFID RCP8021",
    "brand": "RichRFID",
    "model": "RCP8021",
    "sku": "RCP8021",
    "subtitle": "UHF PCB On-metal Tag",
    "shortDesc": "Industrial assets",
    "description": "SKU: RCP8021. Supplier: RichRFID. Category: UHF PCB On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: PCB Tag. Description: Rugged PCB tag for metal surfaces.",
    "customerSummary": "UHF PCB On-metal Tag | PCB Tag | Applications: Industrial",
    "image": "https://www.richrfid.com/uploads/PS/pcb_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/501.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "PCB Tag",
    "sizeText": "",
    "material": "FR4",
    "fixedReadRange": "Up to 6m",
    "handheldReadRange": "Up to 4m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "PCB Tag",
      "On Metal",
      "NXP Ucode 8",
      "Industrial"
    ]
  },
  {
    "slug": "richrfid-rcp8022",
    "title": "RichRFID RCP8022",
    "brand": "RichRFID",
    "model": "RCP8022",
    "sku": "RCP8022",
    "subtitle": "UHF PCB On-metal Tag",
    "shortDesc": "Industrial assets",
    "description": "SKU: RCP8022. Supplier: RichRFID. Category: UHF PCB On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: PCB Tag. Description: Rugged PCB tag for metal surfaces.",
    "customerSummary": "UHF PCB On-metal Tag | PCB Tag | Applications: Industrial",
    "image": "https://www.richrfid.com/uploads/PS/pcb_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/501.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "PCB Tag",
    "sizeText": "",
    "material": "FR4",
    "fixedReadRange": "Up to 6m",
    "handheldReadRange": "Up to 4m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "PCB Tag",
      "On Metal",
      "NXP Ucode 8",
      "Industrial"
    ]
  },
  {
    "slug": "richrfid-rcp8023",
    "title": "RichRFID RCP8023",
    "brand": "RichRFID",
    "model": "RCP8023",
    "sku": "RCP8023",
    "subtitle": "UHF PCB On-metal Tag",
    "shortDesc": "Industrial assets",
    "description": "SKU: RCP8023. Supplier: RichRFID. Category: UHF PCB On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: PCB Tag. Description: Rugged PCB tag for metal surfaces.",
    "customerSummary": "UHF PCB On-metal Tag | PCB Tag | Applications: Industrial",
    "image": "https://www.richrfid.com/uploads/PS/pcb_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/501.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "PCB Tag",
    "sizeText": "",
    "material": "FR4",
    "fixedReadRange": "Up to 6m",
    "handheldReadRange": "Up to 4m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "PCB Tag",
      "On Metal",
      "NXP Ucode 8",
      "Industrial"
    ]
  },
  {
    "slug": "richrfid-rcp8024",
    "title": "RichRFID RCP8024",
    "brand": "RichRFID",
    "model": "RCP8024",
    "sku": "RCP8024",
    "subtitle": "UHF PCB On-metal Tag",
    "shortDesc": "Industrial assets",
    "description": "SKU: RCP8024. Supplier: RichRFID. Category: UHF PCB On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: PCB Tag. Description: Rugged PCB tag for metal surfaces.",
    "customerSummary": "UHF PCB On-metal Tag | PCB Tag | Applications: Industrial",
    "image": "https://www.richrfid.com/uploads/PS/pcb_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/501.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "PCB Tag",
    "sizeText": "",
    "material": "FR4",
    "fixedReadRange": "Up to 6m",
    "handheldReadRange": "Up to 4m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "PCB Tag",
      "On Metal",
      "NXP Ucode 8",
      "Industrial"
    ]
  },
  {
    "slug": "richrfid-rcp8025",
    "title": "RichRFID RCP8025",
    "brand": "RichRFID",
    "model": "RCP8025",
    "sku": "RCP8025",
    "subtitle": "UHF PCB On-metal Tag",
    "shortDesc": "Industrial assets",
    "description": "SKU: RCP8025. Supplier: RichRFID. Category: UHF PCB On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: PCB Tag. Description: Rugged PCB tag for metal surfaces.",
    "customerSummary": "UHF PCB On-metal Tag | PCB Tag | Applications: Industrial",
    "image": "https://www.richrfid.com/uploads/PS/pcb_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/501.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "PCB Tag",
    "sizeText": "",
    "material": "FR4",
    "fixedReadRange": "Up to 6m",
    "handheldReadRange": "Up to 4m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "PCB Tag",
      "On Metal",
      "NXP Ucode 8",
      "Industrial"
    ]
  },
  {
    "slug": "richrfid-rcp8026",
    "title": "RichRFID RCP8026",
    "brand": "RichRFID",
    "model": "RCP8026",
    "sku": "RCP8026",
    "subtitle": "UHF PCB On-metal Tag",
    "shortDesc": "Industrial assets",
    "description": "SKU: RCP8026. Supplier: RichRFID. Category: UHF PCB On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: PCB Tag. Description: Rugged PCB tag for metal surfaces.",
    "customerSummary": "UHF PCB On-metal Tag | PCB Tag | Applications: Industrial",
    "image": "https://www.richrfid.com/uploads/PS/pcb_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/501.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "PCB Tag",
    "sizeText": "",
    "material": "FR4",
    "fixedReadRange": "Up to 6m",
    "handheldReadRange": "Up to 4m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "PCB Tag",
      "On Metal",
      "NXP Ucode 8",
      "Industrial"
    ]
  },
  {
    "slug": "richrfid-rcp8027",
    "title": "RichRFID RCP8027",
    "brand": "RichRFID",
    "model": "RCP8027",
    "sku": "RCP8027",
    "subtitle": "UHF PCB On-metal Tag",
    "shortDesc": "Industrial assets",
    "description": "SKU: RCP8027. Supplier: RichRFID. Category: UHF PCB On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: PCB Tag. Description: Rugged PCB tag for metal surfaces.",
    "customerSummary": "UHF PCB On-metal Tag | PCB Tag | Applications: Industrial",
    "image": "https://www.richrfid.com/uploads/PS/pcb_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/501.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "PCB Tag",
    "sizeText": "",
    "material": "FR4",
    "fixedReadRange": "Up to 6m",
    "handheldReadRange": "Up to 4m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "PCB Tag",
      "On Metal",
      "NXP Ucode 8",
      "Industrial"
    ]
  },
  {
    "slug": "richrfid-rcp8028",
    "title": "RichRFID RCP8028",
    "brand": "RichRFID",
    "model": "RCP8028",
    "sku": "RCP8028",
    "subtitle": "UHF PCB On-metal Tag",
    "shortDesc": "Industrial assets",
    "description": "SKU: RCP8028. Supplier: RichRFID. Category: UHF PCB On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: PCB Tag. Description: Rugged PCB tag for metal surfaces.",
    "customerSummary": "UHF PCB On-metal Tag | PCB Tag | Applications: Industrial",
    "image": "https://www.richrfid.com/uploads/PS/pcb_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/501.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "PCB Tag",
    "sizeText": "",
    "material": "FR4",
    "fixedReadRange": "Up to 6m",
    "handheldReadRange": "Up to 4m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "PCB Tag",
      "On Metal",
      "NXP Ucode 8",
      "Industrial"
    ]
  },
  {
    "slug": "richrfid-rcp8029",
    "title": "RichRFID RCP8029",
    "brand": "RichRFID",
    "model": "RCP8029",
    "sku": "RCP8029",
    "subtitle": "UHF PCB On-metal Tag",
    "shortDesc": "Industrial assets",
    "description": "SKU: RCP8029. Supplier: RichRFID. Category: UHF PCB On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: PCB Tag. Description: Rugged PCB tag for metal surfaces.",
    "customerSummary": "UHF PCB On-metal Tag | PCB Tag | Applications: Industrial",
    "image": "https://www.richrfid.com/uploads/PS/pcb_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/501.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "PCB Tag",
    "sizeText": "",
    "material": "FR4",
    "fixedReadRange": "Up to 6m",
    "handheldReadRange": "Up to 4m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "PCB Tag",
      "On Metal",
      "NXP Ucode 8",
      "Industrial"
    ]
  },
  {
    "slug": "richrfid-rcp8030",
    "title": "RichRFID RCP8030",
    "brand": "RichRFID",
    "model": "RCP8030",
    "sku": "RCP8030",
    "subtitle": "UHF PCB On-metal Tag",
    "shortDesc": "Industrial assets",
    "description": "SKU: RCP8030. Supplier: RichRFID. Category: UHF PCB On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: PCB Tag. Description: Rugged PCB tag for metal surfaces.",
    "customerSummary": "UHF PCB On-metal Tag | PCB Tag | Applications: Industrial",
    "image": "https://www.richrfid.com/uploads/PS/pcb_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/501.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "PCB Tag",
    "sizeText": "",
    "material": "FR4",
    "fixedReadRange": "Up to 6m",
    "handheldReadRange": "Up to 4m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "PCB Tag",
      "On Metal",
      "NXP Ucode 8",
      "Industrial"
    ]
  },
  {
    "slug": "richrfid-rcp8031",
    "title": "RichRFID RCP8031",
    "brand": "RichRFID",
    "model": "RCP8031",
    "sku": "RCP8031",
    "subtitle": "UHF PCB On-metal Tag",
    "shortDesc": "Industrial assets",
    "description": "SKU: RCP8031. Supplier: RichRFID. Category: UHF PCB On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: PCB Tag. Description: Rugged PCB tag for metal surfaces.",
    "customerSummary": "UHF PCB On-metal Tag | PCB Tag | Applications: Industrial",
    "image": "https://www.richrfid.com/uploads/PS/pcb_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/501.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "PCB Tag",
    "sizeText": "",
    "material": "FR4",
    "fixedReadRange": "Up to 6m",
    "handheldReadRange": "Up to 4m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "PCB Tag",
      "On Metal",
      "NXP Ucode 8",
      "Industrial"
    ]
  },
  {
    "slug": "richrfid-rcp8032",
    "title": "RichRFID RCP8032",
    "brand": "RichRFID",
    "model": "RCP8032",
    "sku": "RCP8032",
    "subtitle": "UHF PCB On-metal Tag",
    "shortDesc": "Industrial assets",
    "description": "SKU: RCP8032. Supplier: RichRFID. Category: UHF PCB On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: PCB Tag. Description: Rugged PCB tag for metal surfaces.",
    "customerSummary": "UHF PCB On-metal Tag | PCB Tag | Applications: Industrial",
    "image": "https://www.richrfid.com/uploads/PS/pcb_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/501.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "PCB Tag",
    "sizeText": "",
    "material": "FR4",
    "fixedReadRange": "Up to 6m",
    "handheldReadRange": "Up to 4m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "PCB Tag",
      "On Metal",
      "NXP Ucode 8",
      "Industrial"
    ]
  },
  {
    "slug": "richrfid-rcp8033",
    "title": "RichRFID RCP8033",
    "brand": "RichRFID",
    "model": "RCP8033",
    "sku": "RCP8033",
    "subtitle": "UHF PCB On-metal Tag",
    "shortDesc": "Industrial assets",
    "description": "SKU: RCP8033. Supplier: RichRFID. Category: UHF PCB On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: PCB Tag. Description: Rugged PCB tag for metal surfaces.",
    "customerSummary": "UHF PCB On-metal Tag | PCB Tag | Applications: Industrial",
    "image": "https://www.richrfid.com/uploads/PS/pcb_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/501.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "PCB Tag",
    "sizeText": "",
    "material": "FR4",
    "fixedReadRange": "Up to 6m",
    "handheldReadRange": "Up to 4m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "PCB Tag",
      "On Metal",
      "NXP Ucode 8",
      "Industrial"
    ]
  },
  {
    "slug": "richrfid-rcp8034",
    "title": "RichRFID RCP8034",
    "brand": "RichRFID",
    "model": "RCP8034",
    "sku": "RCP8034",
    "subtitle": "UHF PCB On-metal Tag",
    "shortDesc": "Industrial assets",
    "description": "SKU: RCP8034. Supplier: RichRFID. Category: UHF PCB On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: PCB Tag. Description: Rugged PCB tag for metal surfaces.",
    "customerSummary": "UHF PCB On-metal Tag | PCB Tag | Applications: Industrial",
    "image": "https://www.richrfid.com/uploads/PS/pcb_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/501.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "PCB Tag",
    "sizeText": "",
    "material": "FR4",
    "fixedReadRange": "Up to 6m",
    "handheldReadRange": "Up to 4m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "PCB Tag",
      "On Metal",
      "NXP Ucode 8",
      "Industrial"
    ]
  },
  {
    "slug": "richrfid-rcp8035",
    "title": "RichRFID RCP8035",
    "brand": "RichRFID",
    "model": "RCP8035",
    "sku": "RCP8035",
    "subtitle": "UHF PCB On-metal Tag",
    "shortDesc": "Industrial assets",
    "description": "SKU: RCP8035. Supplier: RichRFID. Category: UHF PCB On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: PCB Tag. Description: Rugged PCB tag for metal surfaces.",
    "customerSummary": "UHF PCB On-metal Tag | PCB Tag | Applications: Industrial",
    "image": "https://www.richrfid.com/uploads/PS/pcb_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/501.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "PCB Tag",
    "sizeText": "",
    "material": "FR4",
    "fixedReadRange": "Up to 6m",
    "handheldReadRange": "Up to 4m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "PCB Tag",
      "On Metal",
      "NXP Ucode 8",
      "Industrial"
    ]
  },
  {
    "slug": "richrfid-rcp8036",
    "title": "RichRFID RCP8036",
    "brand": "RichRFID",
    "model": "RCP8036",
    "sku": "RCP8036",
    "subtitle": "UHF PCB On-metal Tag",
    "shortDesc": "Industrial assets",
    "description": "SKU: RCP8036. Supplier: RichRFID. Category: UHF PCB On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: PCB Tag. Description: Rugged PCB tag for metal surfaces.",
    "customerSummary": "UHF PCB On-metal Tag | PCB Tag | Applications: Industrial",
    "image": "https://www.richrfid.com/uploads/PS/pcb_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/501.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "PCB Tag",
    "sizeText": "",
    "material": "FR4",
    "fixedReadRange": "Up to 6m",
    "handheldReadRange": "Up to 4m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "PCB Tag",
      "On Metal",
      "NXP Ucode 8",
      "Industrial"
    ]
  },
  {
    "slug": "richrfid-rcp8037",
    "title": "RichRFID RCP8037",
    "brand": "RichRFID",
    "model": "RCP8037",
    "sku": "RCP8037",
    "subtitle": "UHF PCB On-metal Tag",
    "shortDesc": "Industrial assets",
    "description": "SKU: RCP8037. Supplier: RichRFID. Category: UHF PCB On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: PCB Tag. Description: Rugged PCB tag for metal surfaces.",
    "customerSummary": "UHF PCB On-metal Tag | PCB Tag | Applications: Industrial",
    "image": "https://www.richrfid.com/uploads/PS/pcb_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/501.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "PCB Tag",
    "sizeText": "",
    "material": "FR4",
    "fixedReadRange": "Up to 6m",
    "handheldReadRange": "Up to 4m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "PCB Tag",
      "On Metal",
      "NXP Ucode 8",
      "Industrial"
    ]
  },
  {
    "slug": "richrfid-rcp8038",
    "title": "RichRFID RCP8038",
    "brand": "RichRFID",
    "model": "RCP8038",
    "sku": "RCP8038",
    "subtitle": "UHF PCB On-metal Tag",
    "shortDesc": "Industrial assets",
    "description": "SKU: RCP8038. Supplier: RichRFID. Category: UHF PCB On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: PCB Tag. Description: Rugged PCB tag for metal surfaces.",
    "customerSummary": "UHF PCB On-metal Tag | PCB Tag | Applications: Industrial",
    "image": "https://www.richrfid.com/uploads/PS/pcb_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/501.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "PCB Tag",
    "sizeText": "",
    "material": "FR4",
    "fixedReadRange": "Up to 6m",
    "handheldReadRange": "Up to 4m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "PCB Tag",
      "On Metal",
      "NXP Ucode 8",
      "Industrial"
    ]
  },
  {
    "slug": "richrfid-rcp8039",
    "title": "RichRFID RCP8039",
    "brand": "RichRFID",
    "model": "RCP8039",
    "sku": "RCP8039",
    "subtitle": "UHF PCB On-metal Tag",
    "shortDesc": "Industrial assets",
    "description": "SKU: RCP8039. Supplier: RichRFID. Category: UHF PCB On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: PCB Tag. Description: Rugged PCB tag for metal surfaces.",
    "customerSummary": "UHF PCB On-metal Tag | PCB Tag | Applications: Industrial",
    "image": "https://www.richrfid.com/uploads/PS/pcb_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/501.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "PCB Tag",
    "sizeText": "",
    "material": "FR4",
    "fixedReadRange": "Up to 6m",
    "handheldReadRange": "Up to 4m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "PCB Tag",
      "On Metal",
      "NXP Ucode 8",
      "Industrial"
    ]
  },
  {
    "slug": "richrfid-rcp8040",
    "title": "RichRFID RCP8040",
    "brand": "RichRFID",
    "model": "RCP8040",
    "sku": "RCP8040",
    "subtitle": "UHF PCB On-metal Tag",
    "shortDesc": "Industrial assets",
    "description": "SKU: RCP8040. Supplier: RichRFID. Category: UHF PCB On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: PCB Tag. Description: Rugged PCB tag for metal surfaces.",
    "customerSummary": "UHF PCB On-metal Tag | PCB Tag | Applications: Industrial",
    "image": "https://www.richrfid.com/uploads/PS/pcb_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/501.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "PCB Tag",
    "sizeText": "",
    "material": "FR4",
    "fixedReadRange": "Up to 6m",
    "handheldReadRange": "Up to 4m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "PCB Tag",
      "On Metal",
      "NXP Ucode 8",
      "Industrial"
    ]
  },
  {
    "slug": "richrfid-rcp8041",
    "title": "RichRFID RCP8041",
    "brand": "RichRFID",
    "model": "RCP8041",
    "sku": "RCP8041",
    "subtitle": "UHF PCB On-metal Tag",
    "shortDesc": "Industrial assets",
    "description": "SKU: RCP8041. Supplier: RichRFID. Category: UHF PCB On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: PCB Tag. Description: Rugged PCB tag for metal surfaces.",
    "customerSummary": "UHF PCB On-metal Tag | PCB Tag | Applications: Industrial",
    "image": "https://www.richrfid.com/uploads/PS/pcb_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/501.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "PCB Tag",
    "sizeText": "",
    "material": "FR4",
    "fixedReadRange": "Up to 6m",
    "handheldReadRange": "Up to 4m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "PCB Tag",
      "On Metal",
      "NXP Ucode 8",
      "Industrial"
    ]
  },
  {
    "slug": "richrfid-rcp8042",
    "title": "RichRFID RCP8042",
    "brand": "RichRFID",
    "model": "RCP8042",
    "sku": "RCP8042",
    "subtitle": "UHF PCB On-metal Tag",
    "shortDesc": "Industrial assets",
    "description": "SKU: RCP8042. Supplier: RichRFID. Category: UHF PCB On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: PCB Tag. Description: Rugged PCB tag for metal surfaces.",
    "customerSummary": "UHF PCB On-metal Tag | PCB Tag | Applications: Industrial",
    "image": "https://www.richrfid.com/uploads/PS/pcb_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/501.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "PCB Tag",
    "sizeText": "",
    "material": "FR4",
    "fixedReadRange": "Up to 6m",
    "handheldReadRange": "Up to 4m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "PCB Tag",
      "On Metal",
      "NXP Ucode 8",
      "Industrial"
    ]
  },
  {
    "slug": "richrfid-rcp8043",
    "title": "RichRFID RCP8043",
    "brand": "RichRFID",
    "model": "RCP8043",
    "sku": "RCP8043",
    "subtitle": "UHF PCB On-metal Tag",
    "shortDesc": "Industrial assets",
    "description": "SKU: RCP8043. Supplier: RichRFID. Category: UHF PCB On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: PCB Tag. Description: Rugged PCB tag for metal surfaces.",
    "customerSummary": "UHF PCB On-metal Tag | PCB Tag | Applications: Industrial",
    "image": "https://www.richrfid.com/uploads/PS/pcb_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/501.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "PCB Tag",
    "sizeText": "",
    "material": "FR4",
    "fixedReadRange": "Up to 6m",
    "handheldReadRange": "Up to 4m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "PCB Tag",
      "On Metal",
      "NXP Ucode 8",
      "Industrial"
    ]
  },
  {
    "slug": "richrfid-rcp8044",
    "title": "RichRFID RCP8044",
    "brand": "RichRFID",
    "model": "RCP8044",
    "sku": "RCP8044",
    "subtitle": "UHF PCB On-metal Tag",
    "shortDesc": "Industrial assets",
    "description": "SKU: RCP8044. Supplier: RichRFID. Category: UHF PCB On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: PCB Tag. Description: Rugged PCB tag for metal surfaces.",
    "customerSummary": "UHF PCB On-metal Tag | PCB Tag | Applications: Industrial",
    "image": "https://www.richrfid.com/uploads/PS/pcb_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/501.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "PCB Tag",
    "sizeText": "",
    "material": "FR4",
    "fixedReadRange": "Up to 6m",
    "handheldReadRange": "Up to 4m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "PCB Tag",
      "On Metal",
      "NXP Ucode 8",
      "Industrial"
    ]
  },
  {
    "slug": "richrfid-rcp8045",
    "title": "RichRFID RCP8045",
    "brand": "RichRFID",
    "model": "RCP8045",
    "sku": "RCP8045",
    "subtitle": "UHF PCB On-metal Tag",
    "shortDesc": "Industrial assets",
    "description": "SKU: RCP8045. Supplier: RichRFID. Category: UHF PCB On-metal Tag. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: PCB Tag. Description: Rugged PCB tag for metal surfaces.",
    "customerSummary": "UHF PCB On-metal Tag | PCB Tag | Applications: Industrial",
    "image": "https://www.richrfid.com/uploads/PS/pcb_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/501.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "PCB Tag",
    "sizeText": "",
    "material": "FR4",
    "fixedReadRange": "Up to 6m",
    "handheldReadRange": "Up to 4m",
    "operatingTemp": "-40 to +150C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "PCB Tag",
      "On Metal",
      "NXP Ucode 8",
      "Industrial"
    ]
  },
  {
    "slug": "richrfid-rct10001",
    "title": "RichRFID RCT10001",
    "brand": "RichRFID",
    "model": "RCT10001",
    "sku": "RCT10001",
    "subtitle": "Special RFID Tag",
    "shortDesc": "Specialized tracking",
    "description": "SKU: RCT10001. Supplier: RichRFID. Category: Special RFID Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Special Tag. Description: Specialized RFID tag for unique applications.",
    "customerSummary": "Special RFID Tag | Special Tag | Applications: Special",
    "image": "https://www.richrfid.com/uploads/PS/special_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Special Tag",
    "sizeText": "",
    "material": "",
    "fixedReadRange": "",
    "handheldReadRange": "",
    "operatingTemp": "",
    "ipRating": "IP67",
    "applications": [
      "Special"
    ],
    "industries": [
      "Special"
    ],
    "tags": [
      "UHF",
      "Special Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Special"
    ]
  },
  {
    "slug": "richrfid-rct10002",
    "title": "RichRFID RCT10002",
    "brand": "RichRFID",
    "model": "RCT10002",
    "sku": "RCT10002",
    "subtitle": "Special RFID Tag",
    "shortDesc": "Specialized tracking",
    "description": "SKU: RCT10002. Supplier: RichRFID. Category: Special RFID Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Special Tag. Description: Specialized RFID tag for unique applications.",
    "customerSummary": "Special RFID Tag | Special Tag | Applications: Special",
    "image": "https://www.richrfid.com/uploads/PS/special_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Special Tag",
    "sizeText": "",
    "material": "",
    "fixedReadRange": "",
    "handheldReadRange": "",
    "operatingTemp": "",
    "ipRating": "IP67",
    "applications": [
      "Special"
    ],
    "industries": [
      "Special"
    ],
    "tags": [
      "UHF",
      "Special Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Special"
    ]
  },
  {
    "slug": "richrfid-rct10003",
    "title": "RichRFID RCT10003",
    "brand": "RichRFID",
    "model": "RCT10003",
    "sku": "RCT10003",
    "subtitle": "Special RFID Tag",
    "shortDesc": "Specialized tracking",
    "description": "SKU: RCT10003. Supplier: RichRFID. Category: Special RFID Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Special Tag. Description: Specialized RFID tag for unique applications.",
    "customerSummary": "Special RFID Tag | Special Tag | Applications: Special",
    "image": "https://www.richrfid.com/uploads/PS/special_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Special Tag",
    "sizeText": "",
    "material": "",
    "fixedReadRange": "",
    "handheldReadRange": "",
    "operatingTemp": "",
    "ipRating": "IP67",
    "applications": [
      "Special"
    ],
    "industries": [
      "Special"
    ],
    "tags": [
      "UHF",
      "Special Tag",
      "Non Metal",
      "NXP Ucode 8",
      "Special"
    ]
  },
  {
    "slug": "richrfid-rocky-100",
    "title": "RichRFID ROCKY-100",
    "brand": "RichRFID",
    "model": "ROCKY-100",
    "sku": "ROCKY-100",
    "subtitle": "UHF Sensor Tag",
    "shortDesc": "Sensor monitoring",
    "description": "SKU: ROCKY-100. Supplier: RichRFID. Category: UHF Sensor Tag. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Sensor Tag. Description: Batteryless sensor tag for industrial monitoring.",
    "customerSummary": "UHF Sensor Tag | Sensor Tag | Applications: Sensors",
    "image": "https://www.richrfid.com/uploads/PS/sensor_tag.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/508.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Farsens",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Sensor Tag",
    "sizeText": "",
    "material": "PCB",
    "fixedReadRange": "Up to 5m",
    "handheldReadRange": "Up to 3m",
    "operatingTemp": "-40 to +85C",
    "ipRating": "IP67",
    "applications": [
      "Sensors"
    ],
    "industries": [
      "Sensors"
    ],
    "tags": [
      "UHF",
      "Sensor Tag",
      "Non Metal",
      "Farsens",
      "Sensors"
    ]
  },
  {
    "slug": "richrfid-uhf-label-1",
    "title": "RichRFID UHF-Label-1",
    "brand": "RichRFID",
    "model": "UHF-Label-1",
    "sku": "UHF-Label-1",
    "subtitle": "UHF Inlay/Label",
    "shortDesc": "Logistics",
    "description": "SKU: UHF-Label-1. Supplier: RichRFID. Category: UHF Inlay/Label. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Label. Description: General purpose UHF RFID label.",
    "customerSummary": "UHF Inlay/Label | Label | Applications: Logistics",
    "image": "https://www.richrfid.com/uploads/PS/uhf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/49.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "Logistics"
    ],
    "industries": [
      "Logistics"
    ],
    "tags": [
      "UHF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "Logistics"
    ]
  },
  {
    "slug": "richrfid-uhf-label-10",
    "title": "RichRFID UHF-Label-10",
    "brand": "RichRFID",
    "model": "UHF-Label-10",
    "sku": "UHF-Label-10",
    "subtitle": "UHF Inlay/Label",
    "shortDesc": "Logistics",
    "description": "SKU: UHF-Label-10. Supplier: RichRFID. Category: UHF Inlay/Label. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Label. Description: General purpose UHF RFID label.",
    "customerSummary": "UHF Inlay/Label | Label | Applications: Logistics",
    "image": "https://www.richrfid.com/uploads/PS/uhf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/49.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "Logistics"
    ],
    "industries": [
      "Logistics"
    ],
    "tags": [
      "UHF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "Logistics"
    ]
  },
  {
    "slug": "richrfid-uhf-label-11",
    "title": "RichRFID UHF-Label-11",
    "brand": "RichRFID",
    "model": "UHF-Label-11",
    "sku": "UHF-Label-11",
    "subtitle": "UHF Inlay/Label",
    "shortDesc": "Logistics",
    "description": "SKU: UHF-Label-11. Supplier: RichRFID. Category: UHF Inlay/Label. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Label. Description: General purpose UHF RFID label.",
    "customerSummary": "UHF Inlay/Label | Label | Applications: Logistics",
    "image": "https://www.richrfid.com/uploads/PS/uhf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/49.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "Logistics"
    ],
    "industries": [
      "Logistics"
    ],
    "tags": [
      "UHF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "Logistics"
    ]
  },
  {
    "slug": "richrfid-uhf-label-12",
    "title": "RichRFID UHF-Label-12",
    "brand": "RichRFID",
    "model": "UHF-Label-12",
    "sku": "UHF-Label-12",
    "subtitle": "UHF Inlay/Label",
    "shortDesc": "Logistics",
    "description": "SKU: UHF-Label-12. Supplier: RichRFID. Category: UHF Inlay/Label. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Label. Description: General purpose UHF RFID label.",
    "customerSummary": "UHF Inlay/Label | Label | Applications: Logistics",
    "image": "https://www.richrfid.com/uploads/PS/uhf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/49.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "Logistics"
    ],
    "industries": [
      "Logistics"
    ],
    "tags": [
      "UHF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "Logistics"
    ]
  },
  {
    "slug": "richrfid-uhf-label-13",
    "title": "RichRFID UHF-Label-13",
    "brand": "RichRFID",
    "model": "UHF-Label-13",
    "sku": "UHF-Label-13",
    "subtitle": "UHF Inlay/Label",
    "shortDesc": "Logistics",
    "description": "SKU: UHF-Label-13. Supplier: RichRFID. Category: UHF Inlay/Label. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Label. Description: General purpose UHF RFID label.",
    "customerSummary": "UHF Inlay/Label | Label | Applications: Logistics",
    "image": "https://www.richrfid.com/uploads/PS/uhf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/49.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "Logistics"
    ],
    "industries": [
      "Logistics"
    ],
    "tags": [
      "UHF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "Logistics"
    ]
  },
  {
    "slug": "richrfid-uhf-label-14",
    "title": "RichRFID UHF-Label-14",
    "brand": "RichRFID",
    "model": "UHF-Label-14",
    "sku": "UHF-Label-14",
    "subtitle": "UHF Inlay/Label",
    "shortDesc": "Logistics",
    "description": "SKU: UHF-Label-14. Supplier: RichRFID. Category: UHF Inlay/Label. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Label. Description: General purpose UHF RFID label.",
    "customerSummary": "UHF Inlay/Label | Label | Applications: Logistics",
    "image": "https://www.richrfid.com/uploads/PS/uhf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/49.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "Logistics"
    ],
    "industries": [
      "Logistics"
    ],
    "tags": [
      "UHF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "Logistics"
    ]
  },
  {
    "slug": "richrfid-uhf-label-15",
    "title": "RichRFID UHF-Label-15",
    "brand": "RichRFID",
    "model": "UHF-Label-15",
    "sku": "UHF-Label-15",
    "subtitle": "UHF Inlay/Label",
    "shortDesc": "Logistics",
    "description": "SKU: UHF-Label-15. Supplier: RichRFID. Category: UHF Inlay/Label. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Label. Description: General purpose UHF RFID label.",
    "customerSummary": "UHF Inlay/Label | Label | Applications: Logistics",
    "image": "https://www.richrfid.com/uploads/PS/uhf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/49.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "Logistics"
    ],
    "industries": [
      "Logistics"
    ],
    "tags": [
      "UHF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "Logistics"
    ]
  },
  {
    "slug": "richrfid-uhf-label-16",
    "title": "RichRFID UHF-Label-16",
    "brand": "RichRFID",
    "model": "UHF-Label-16",
    "sku": "UHF-Label-16",
    "subtitle": "UHF Inlay/Label",
    "shortDesc": "Logistics",
    "description": "SKU: UHF-Label-16. Supplier: RichRFID. Category: UHF Inlay/Label. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Label. Description: General purpose UHF RFID label.",
    "customerSummary": "UHF Inlay/Label | Label | Applications: Logistics",
    "image": "https://www.richrfid.com/uploads/PS/uhf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/49.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "Logistics"
    ],
    "industries": [
      "Logistics"
    ],
    "tags": [
      "UHF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "Logistics"
    ]
  },
  {
    "slug": "richrfid-uhf-label-17",
    "title": "RichRFID UHF-Label-17",
    "brand": "RichRFID",
    "model": "UHF-Label-17",
    "sku": "UHF-Label-17",
    "subtitle": "UHF Inlay/Label",
    "shortDesc": "Logistics",
    "description": "SKU: UHF-Label-17. Supplier: RichRFID. Category: UHF Inlay/Label. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Label. Description: General purpose UHF RFID label.",
    "customerSummary": "UHF Inlay/Label | Label | Applications: Logistics",
    "image": "https://www.richrfid.com/uploads/PS/uhf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/49.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "Logistics"
    ],
    "industries": [
      "Logistics"
    ],
    "tags": [
      "UHF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "Logistics"
    ]
  },
  {
    "slug": "richrfid-uhf-label-18",
    "title": "RichRFID UHF-Label-18",
    "brand": "RichRFID",
    "model": "UHF-Label-18",
    "sku": "UHF-Label-18",
    "subtitle": "UHF Inlay/Label",
    "shortDesc": "Logistics",
    "description": "SKU: UHF-Label-18. Supplier: RichRFID. Category: UHF Inlay/Label. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Label. Description: General purpose UHF RFID label.",
    "customerSummary": "UHF Inlay/Label | Label | Applications: Logistics",
    "image": "https://www.richrfid.com/uploads/PS/uhf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/49.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "Logistics"
    ],
    "industries": [
      "Logistics"
    ],
    "tags": [
      "UHF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "Logistics"
    ]
  },
  {
    "slug": "richrfid-uhf-label-19",
    "title": "RichRFID UHF-Label-19",
    "brand": "RichRFID",
    "model": "UHF-Label-19",
    "sku": "UHF-Label-19",
    "subtitle": "UHF Inlay/Label",
    "shortDesc": "Logistics",
    "description": "SKU: UHF-Label-19. Supplier: RichRFID. Category: UHF Inlay/Label. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Label. Description: General purpose UHF RFID label.",
    "customerSummary": "UHF Inlay/Label | Label | Applications: Logistics",
    "image": "https://www.richrfid.com/uploads/PS/uhf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/49.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "Logistics"
    ],
    "industries": [
      "Logistics"
    ],
    "tags": [
      "UHF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "Logistics"
    ]
  },
  {
    "slug": "richrfid-uhf-label-2",
    "title": "RichRFID UHF-Label-2",
    "brand": "RichRFID",
    "model": "UHF-Label-2",
    "sku": "UHF-Label-2",
    "subtitle": "UHF Inlay/Label",
    "shortDesc": "Logistics",
    "description": "SKU: UHF-Label-2. Supplier: RichRFID. Category: UHF Inlay/Label. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Label. Description: General purpose UHF RFID label.",
    "customerSummary": "UHF Inlay/Label | Label | Applications: Logistics",
    "image": "https://www.richrfid.com/uploads/PS/uhf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/49.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "Logistics"
    ],
    "industries": [
      "Logistics"
    ],
    "tags": [
      "UHF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "Logistics"
    ]
  },
  {
    "slug": "richrfid-uhf-label-20",
    "title": "RichRFID UHF-Label-20",
    "brand": "RichRFID",
    "model": "UHF-Label-20",
    "sku": "UHF-Label-20",
    "subtitle": "UHF Inlay/Label",
    "shortDesc": "Logistics",
    "description": "SKU: UHF-Label-20. Supplier: RichRFID. Category: UHF Inlay/Label. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Label. Description: General purpose UHF RFID label.",
    "customerSummary": "UHF Inlay/Label | Label | Applications: Logistics",
    "image": "https://www.richrfid.com/uploads/PS/uhf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/49.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "Logistics"
    ],
    "industries": [
      "Logistics"
    ],
    "tags": [
      "UHF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "Logistics"
    ]
  },
  {
    "slug": "richrfid-uhf-label-21",
    "title": "RichRFID UHF-Label-21",
    "brand": "RichRFID",
    "model": "UHF-Label-21",
    "sku": "UHF-Label-21",
    "subtitle": "UHF Inlay/Label",
    "shortDesc": "Logistics",
    "description": "SKU: UHF-Label-21. Supplier: RichRFID. Category: UHF Inlay/Label. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Label. Description: General purpose UHF RFID label.",
    "customerSummary": "UHF Inlay/Label | Label | Applications: Logistics",
    "image": "https://www.richrfid.com/uploads/PS/uhf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/49.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "Logistics"
    ],
    "industries": [
      "Logistics"
    ],
    "tags": [
      "UHF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "Logistics"
    ]
  },
  {
    "slug": "richrfid-uhf-label-22",
    "title": "RichRFID UHF-Label-22",
    "brand": "RichRFID",
    "model": "UHF-Label-22",
    "sku": "UHF-Label-22",
    "subtitle": "UHF Inlay/Label",
    "shortDesc": "Logistics",
    "description": "SKU: UHF-Label-22. Supplier: RichRFID. Category: UHF Inlay/Label. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Label. Description: General purpose UHF RFID label.",
    "customerSummary": "UHF Inlay/Label | Label | Applications: Logistics",
    "image": "https://www.richrfid.com/uploads/PS/uhf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/49.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "Logistics"
    ],
    "industries": [
      "Logistics"
    ],
    "tags": [
      "UHF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "Logistics"
    ]
  },
  {
    "slug": "richrfid-uhf-label-23",
    "title": "RichRFID UHF-Label-23",
    "brand": "RichRFID",
    "model": "UHF-Label-23",
    "sku": "UHF-Label-23",
    "subtitle": "UHF Inlay/Label",
    "shortDesc": "Logistics",
    "description": "SKU: UHF-Label-23. Supplier: RichRFID. Category: UHF Inlay/Label. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Label. Description: General purpose UHF RFID label.",
    "customerSummary": "UHF Inlay/Label | Label | Applications: Logistics",
    "image": "https://www.richrfid.com/uploads/PS/uhf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/49.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "Logistics"
    ],
    "industries": [
      "Logistics"
    ],
    "tags": [
      "UHF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "Logistics"
    ]
  },
  {
    "slug": "richrfid-uhf-label-24",
    "title": "RichRFID UHF-Label-24",
    "brand": "RichRFID",
    "model": "UHF-Label-24",
    "sku": "UHF-Label-24",
    "subtitle": "UHF Inlay/Label",
    "shortDesc": "Logistics",
    "description": "SKU: UHF-Label-24. Supplier: RichRFID. Category: UHF Inlay/Label. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Label. Description: General purpose UHF RFID label.",
    "customerSummary": "UHF Inlay/Label | Label | Applications: Logistics",
    "image": "https://www.richrfid.com/uploads/PS/uhf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/49.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "Logistics"
    ],
    "industries": [
      "Logistics"
    ],
    "tags": [
      "UHF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "Logistics"
    ]
  },
  {
    "slug": "richrfid-uhf-label-25",
    "title": "RichRFID UHF-Label-25",
    "brand": "RichRFID",
    "model": "UHF-Label-25",
    "sku": "UHF-Label-25",
    "subtitle": "UHF Inlay/Label",
    "shortDesc": "Logistics",
    "description": "SKU: UHF-Label-25. Supplier: RichRFID. Category: UHF Inlay/Label. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Label. Description: General purpose UHF RFID label.",
    "customerSummary": "UHF Inlay/Label | Label | Applications: Logistics",
    "image": "https://www.richrfid.com/uploads/PS/uhf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/49.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "Logistics"
    ],
    "industries": [
      "Logistics"
    ],
    "tags": [
      "UHF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "Logistics"
    ]
  },
  {
    "slug": "richrfid-uhf-label-26",
    "title": "RichRFID UHF-Label-26",
    "brand": "RichRFID",
    "model": "UHF-Label-26",
    "sku": "UHF-Label-26",
    "subtitle": "UHF Inlay/Label",
    "shortDesc": "Logistics",
    "description": "SKU: UHF-Label-26. Supplier: RichRFID. Category: UHF Inlay/Label. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Label. Description: General purpose UHF RFID label.",
    "customerSummary": "UHF Inlay/Label | Label | Applications: Logistics",
    "image": "https://www.richrfid.com/uploads/PS/uhf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/49.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "Logistics"
    ],
    "industries": [
      "Logistics"
    ],
    "tags": [
      "UHF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "Logistics"
    ]
  },
  {
    "slug": "richrfid-uhf-label-27",
    "title": "RichRFID UHF-Label-27",
    "brand": "RichRFID",
    "model": "UHF-Label-27",
    "sku": "UHF-Label-27",
    "subtitle": "UHF Inlay/Label",
    "shortDesc": "Logistics",
    "description": "SKU: UHF-Label-27. Supplier: RichRFID. Category: UHF Inlay/Label. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Label. Description: General purpose UHF RFID label.",
    "customerSummary": "UHF Inlay/Label | Label | Applications: Logistics",
    "image": "https://www.richrfid.com/uploads/PS/uhf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/49.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "Logistics"
    ],
    "industries": [
      "Logistics"
    ],
    "tags": [
      "UHF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "Logistics"
    ]
  },
  {
    "slug": "richrfid-uhf-label-28",
    "title": "RichRFID UHF-Label-28",
    "brand": "RichRFID",
    "model": "UHF-Label-28",
    "sku": "UHF-Label-28",
    "subtitle": "UHF Inlay/Label",
    "shortDesc": "Logistics",
    "description": "SKU: UHF-Label-28. Supplier: RichRFID. Category: UHF Inlay/Label. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Label. Description: General purpose UHF RFID label.",
    "customerSummary": "UHF Inlay/Label | Label | Applications: Logistics",
    "image": "https://www.richrfid.com/uploads/PS/uhf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/49.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "Logistics"
    ],
    "industries": [
      "Logistics"
    ],
    "tags": [
      "UHF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "Logistics"
    ]
  },
  {
    "slug": "richrfid-uhf-label-29",
    "title": "RichRFID UHF-Label-29",
    "brand": "RichRFID",
    "model": "UHF-Label-29",
    "sku": "UHF-Label-29",
    "subtitle": "UHF Inlay/Label",
    "shortDesc": "Logistics",
    "description": "SKU: UHF-Label-29. Supplier: RichRFID. Category: UHF Inlay/Label. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Label. Description: General purpose UHF RFID label.",
    "customerSummary": "UHF Inlay/Label | Label | Applications: Logistics",
    "image": "https://www.richrfid.com/uploads/PS/uhf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/49.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "Logistics"
    ],
    "industries": [
      "Logistics"
    ],
    "tags": [
      "UHF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "Logistics"
    ]
  },
  {
    "slug": "richrfid-uhf-label-3",
    "title": "RichRFID UHF-Label-3",
    "brand": "RichRFID",
    "model": "UHF-Label-3",
    "sku": "UHF-Label-3",
    "subtitle": "UHF Inlay/Label",
    "shortDesc": "Logistics",
    "description": "SKU: UHF-Label-3. Supplier: RichRFID. Category: UHF Inlay/Label. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Label. Description: General purpose UHF RFID label.",
    "customerSummary": "UHF Inlay/Label | Label | Applications: Logistics",
    "image": "https://www.richrfid.com/uploads/PS/uhf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/49.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "Logistics"
    ],
    "industries": [
      "Logistics"
    ],
    "tags": [
      "UHF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "Logistics"
    ]
  },
  {
    "slug": "richrfid-uhf-label-30",
    "title": "RichRFID UHF-Label-30",
    "brand": "RichRFID",
    "model": "UHF-Label-30",
    "sku": "UHF-Label-30",
    "subtitle": "UHF Inlay/Label",
    "shortDesc": "Logistics",
    "description": "SKU: UHF-Label-30. Supplier: RichRFID. Category: UHF Inlay/Label. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Label. Description: General purpose UHF RFID label.",
    "customerSummary": "UHF Inlay/Label | Label | Applications: Logistics",
    "image": "https://www.richrfid.com/uploads/PS/uhf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/49.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "Logistics"
    ],
    "industries": [
      "Logistics"
    ],
    "tags": [
      "UHF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "Logistics"
    ]
  },
  {
    "slug": "richrfid-uhf-label-31",
    "title": "RichRFID UHF-Label-31",
    "brand": "RichRFID",
    "model": "UHF-Label-31",
    "sku": "UHF-Label-31",
    "subtitle": "UHF Inlay/Label",
    "shortDesc": "Logistics",
    "description": "SKU: UHF-Label-31. Supplier: RichRFID. Category: UHF Inlay/Label. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Label. Description: General purpose UHF RFID label.",
    "customerSummary": "UHF Inlay/Label | Label | Applications: Logistics",
    "image": "https://www.richrfid.com/uploads/PS/uhf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/49.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "Logistics"
    ],
    "industries": [
      "Logistics"
    ],
    "tags": [
      "UHF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "Logistics"
    ]
  },
  {
    "slug": "richrfid-uhf-label-32",
    "title": "RichRFID UHF-Label-32",
    "brand": "RichRFID",
    "model": "UHF-Label-32",
    "sku": "UHF-Label-32",
    "subtitle": "UHF Inlay/Label",
    "shortDesc": "Logistics",
    "description": "SKU: UHF-Label-32. Supplier: RichRFID. Category: UHF Inlay/Label. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Label. Description: General purpose UHF RFID label.",
    "customerSummary": "UHF Inlay/Label | Label | Applications: Logistics",
    "image": "https://www.richrfid.com/uploads/PS/uhf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/49.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "Logistics"
    ],
    "industries": [
      "Logistics"
    ],
    "tags": [
      "UHF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "Logistics"
    ]
  },
  {
    "slug": "richrfid-uhf-label-33",
    "title": "RichRFID UHF-Label-33",
    "brand": "RichRFID",
    "model": "UHF-Label-33",
    "sku": "UHF-Label-33",
    "subtitle": "UHF Inlay/Label",
    "shortDesc": "Logistics",
    "description": "SKU: UHF-Label-33. Supplier: RichRFID. Category: UHF Inlay/Label. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Label. Description: General purpose UHF RFID label.",
    "customerSummary": "UHF Inlay/Label | Label | Applications: Logistics",
    "image": "https://www.richrfid.com/uploads/PS/uhf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/49.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "Logistics"
    ],
    "industries": [
      "Logistics"
    ],
    "tags": [
      "UHF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "Logistics"
    ]
  },
  {
    "slug": "richrfid-uhf-label-34",
    "title": "RichRFID UHF-Label-34",
    "brand": "RichRFID",
    "model": "UHF-Label-34",
    "sku": "UHF-Label-34",
    "subtitle": "UHF Inlay/Label",
    "shortDesc": "Logistics",
    "description": "SKU: UHF-Label-34. Supplier: RichRFID. Category: UHF Inlay/Label. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Label. Description: General purpose UHF RFID label.",
    "customerSummary": "UHF Inlay/Label | Label | Applications: Logistics",
    "image": "https://www.richrfid.com/uploads/PS/uhf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/49.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "Logistics"
    ],
    "industries": [
      "Logistics"
    ],
    "tags": [
      "UHF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "Logistics"
    ]
  },
  {
    "slug": "richrfid-uhf-label-35",
    "title": "RichRFID UHF-Label-35",
    "brand": "RichRFID",
    "model": "UHF-Label-35",
    "sku": "UHF-Label-35",
    "subtitle": "UHF Inlay/Label",
    "shortDesc": "Logistics",
    "description": "SKU: UHF-Label-35. Supplier: RichRFID. Category: UHF Inlay/Label. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Label. Description: General purpose UHF RFID label.",
    "customerSummary": "UHF Inlay/Label | Label | Applications: Logistics",
    "image": "https://www.richrfid.com/uploads/PS/uhf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/49.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "Logistics"
    ],
    "industries": [
      "Logistics"
    ],
    "tags": [
      "UHF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "Logistics"
    ]
  },
  {
    "slug": "richrfid-uhf-label-36",
    "title": "RichRFID UHF-Label-36",
    "brand": "RichRFID",
    "model": "UHF-Label-36",
    "sku": "UHF-Label-36",
    "subtitle": "UHF Inlay/Label",
    "shortDesc": "Logistics",
    "description": "SKU: UHF-Label-36. Supplier: RichRFID. Category: UHF Inlay/Label. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Label. Description: General purpose UHF RFID label.",
    "customerSummary": "UHF Inlay/Label | Label | Applications: Logistics",
    "image": "https://www.richrfid.com/uploads/PS/uhf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/49.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "Logistics"
    ],
    "industries": [
      "Logistics"
    ],
    "tags": [
      "UHF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "Logistics"
    ]
  },
  {
    "slug": "richrfid-uhf-label-37",
    "title": "RichRFID UHF-Label-37",
    "brand": "RichRFID",
    "model": "UHF-Label-37",
    "sku": "UHF-Label-37",
    "subtitle": "UHF Inlay/Label",
    "shortDesc": "Logistics",
    "description": "SKU: UHF-Label-37. Supplier: RichRFID. Category: UHF Inlay/Label. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Label. Description: General purpose UHF RFID label.",
    "customerSummary": "UHF Inlay/Label | Label | Applications: Logistics",
    "image": "https://www.richrfid.com/uploads/PS/uhf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/49.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "Logistics"
    ],
    "industries": [
      "Logistics"
    ],
    "tags": [
      "UHF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "Logistics"
    ]
  },
  {
    "slug": "richrfid-uhf-label-38",
    "title": "RichRFID UHF-Label-38",
    "brand": "RichRFID",
    "model": "UHF-Label-38",
    "sku": "UHF-Label-38",
    "subtitle": "UHF Inlay/Label",
    "shortDesc": "Logistics",
    "description": "SKU: UHF-Label-38. Supplier: RichRFID. Category: UHF Inlay/Label. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Label. Description: General purpose UHF RFID label.",
    "customerSummary": "UHF Inlay/Label | Label | Applications: Logistics",
    "image": "https://www.richrfid.com/uploads/PS/uhf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/49.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "Logistics"
    ],
    "industries": [
      "Logistics"
    ],
    "tags": [
      "UHF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "Logistics"
    ]
  },
  {
    "slug": "richrfid-uhf-label-39",
    "title": "RichRFID UHF-Label-39",
    "brand": "RichRFID",
    "model": "UHF-Label-39",
    "sku": "UHF-Label-39",
    "subtitle": "UHF Inlay/Label",
    "shortDesc": "Logistics",
    "description": "SKU: UHF-Label-39. Supplier: RichRFID. Category: UHF Inlay/Label. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Label. Description: General purpose UHF RFID label.",
    "customerSummary": "UHF Inlay/Label | Label | Applications: Logistics",
    "image": "https://www.richrfid.com/uploads/PS/uhf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/49.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "Logistics"
    ],
    "industries": [
      "Logistics"
    ],
    "tags": [
      "UHF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "Logistics"
    ]
  },
  {
    "slug": "richrfid-uhf-label-4",
    "title": "RichRFID UHF-Label-4",
    "brand": "RichRFID",
    "model": "UHF-Label-4",
    "sku": "UHF-Label-4",
    "subtitle": "UHF Inlay/Label",
    "shortDesc": "Logistics",
    "description": "SKU: UHF-Label-4. Supplier: RichRFID. Category: UHF Inlay/Label. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Label. Description: General purpose UHF RFID label.",
    "customerSummary": "UHF Inlay/Label | Label | Applications: Logistics",
    "image": "https://www.richrfid.com/uploads/PS/uhf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/49.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "Logistics"
    ],
    "industries": [
      "Logistics"
    ],
    "tags": [
      "UHF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "Logistics"
    ]
  },
  {
    "slug": "richrfid-uhf-label-40",
    "title": "RichRFID UHF-Label-40",
    "brand": "RichRFID",
    "model": "UHF-Label-40",
    "sku": "UHF-Label-40",
    "subtitle": "UHF Inlay/Label",
    "shortDesc": "Logistics",
    "description": "SKU: UHF-Label-40. Supplier: RichRFID. Category: UHF Inlay/Label. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Label. Description: General purpose UHF RFID label.",
    "customerSummary": "UHF Inlay/Label | Label | Applications: Logistics",
    "image": "https://www.richrfid.com/uploads/PS/uhf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/49.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "Logistics"
    ],
    "industries": [
      "Logistics"
    ],
    "tags": [
      "UHF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "Logistics"
    ]
  },
  {
    "slug": "richrfid-uhf-label-5",
    "title": "RichRFID UHF-Label-5",
    "brand": "RichRFID",
    "model": "UHF-Label-5",
    "sku": "UHF-Label-5",
    "subtitle": "UHF Inlay/Label",
    "shortDesc": "Logistics",
    "description": "SKU: UHF-Label-5. Supplier: RichRFID. Category: UHF Inlay/Label. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Label. Description: General purpose UHF RFID label.",
    "customerSummary": "UHF Inlay/Label | Label | Applications: Logistics",
    "image": "https://www.richrfid.com/uploads/PS/uhf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/49.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "Logistics"
    ],
    "industries": [
      "Logistics"
    ],
    "tags": [
      "UHF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "Logistics"
    ]
  },
  {
    "slug": "richrfid-uhf-label-6",
    "title": "RichRFID UHF-Label-6",
    "brand": "RichRFID",
    "model": "UHF-Label-6",
    "sku": "UHF-Label-6",
    "subtitle": "UHF Inlay/Label",
    "shortDesc": "Logistics",
    "description": "SKU: UHF-Label-6. Supplier: RichRFID. Category: UHF Inlay/Label. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Label. Description: General purpose UHF RFID label.",
    "customerSummary": "UHF Inlay/Label | Label | Applications: Logistics",
    "image": "https://www.richrfid.com/uploads/PS/uhf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/49.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "Logistics"
    ],
    "industries": [
      "Logistics"
    ],
    "tags": [
      "UHF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "Logistics"
    ]
  },
  {
    "slug": "richrfid-uhf-label-7",
    "title": "RichRFID UHF-Label-7",
    "brand": "RichRFID",
    "model": "UHF-Label-7",
    "sku": "UHF-Label-7",
    "subtitle": "UHF Inlay/Label",
    "shortDesc": "Logistics",
    "description": "SKU: UHF-Label-7. Supplier: RichRFID. Category: UHF Inlay/Label. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Label. Description: General purpose UHF RFID label.",
    "customerSummary": "UHF Inlay/Label | Label | Applications: Logistics",
    "image": "https://www.richrfid.com/uploads/PS/uhf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/49.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "Logistics"
    ],
    "industries": [
      "Logistics"
    ],
    "tags": [
      "UHF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "Logistics"
    ]
  },
  {
    "slug": "richrfid-uhf-label-8",
    "title": "RichRFID UHF-Label-8",
    "brand": "RichRFID",
    "model": "UHF-Label-8",
    "sku": "UHF-Label-8",
    "subtitle": "UHF Inlay/Label",
    "shortDesc": "Logistics",
    "description": "SKU: UHF-Label-8. Supplier: RichRFID. Category: UHF Inlay/Label. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Label. Description: General purpose UHF RFID label.",
    "customerSummary": "UHF Inlay/Label | Label | Applications: Logistics",
    "image": "https://www.richrfid.com/uploads/PS/uhf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/49.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "Logistics"
    ],
    "industries": [
      "Logistics"
    ],
    "tags": [
      "UHF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "Logistics"
    ]
  },
  {
    "slug": "richrfid-uhf-label-9",
    "title": "RichRFID UHF-Label-9",
    "brand": "RichRFID",
    "model": "UHF-Label-9",
    "sku": "UHF-Label-9",
    "subtitle": "UHF Inlay/Label",
    "shortDesc": "Logistics",
    "description": "SKU: UHF-Label-9. Supplier: RichRFID. Category: UHF Inlay/Label. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Label. Description: General purpose UHF RFID label.",
    "customerSummary": "UHF Inlay/Label | Label | Applications: Logistics",
    "image": "https://www.richrfid.com/uploads/PS/uhf_label.png",
    "datasheet": "",
    "productUrl": "https://www.richrfid.com/product/list/49.html",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP Ucode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "",
    "material": "Paper/PET",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-20 to +70C",
    "ipRating": "IP65",
    "applications": [
      "Logistics"
    ],
    "industries": [
      "Logistics"
    ],
    "tags": [
      "UHF",
      "Label",
      "Non Metal",
      "NXP Ucode 8",
      "Logistics"
    ]
  },
  {
    "slug": "smartrac-belt-u8",
    "title": "Smartrac Belt u8 RFID Paper Tag",
    "brand": "Smartrac",
    "model": "Belt u8",
    "sku": "Belt u8",
    "subtitle": "Label RFID Tag",
    "shortDesc": "Mid-sized UHF RFID label for difficult-to-label materials in industrial and logistics applications",
    "description": "Model: Belt u8. Brand: Smartrac. Frequency: 860-960 MHz. Surface: non_metal. Form factor: Label. Mid-sized UHF RFID label for difficult-to-label materials in industrial and logistics applications",
    "customerSummary": "Label RFID Tag | UHF | Applications: Industrial asset management, Supply chain, Warehouse management, Retail inventory",
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/smartrac-belt-rfid-etiketi-600x400.webp",
    "datasheet": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/smartrac-belt-rfid-etiketi-datasheet.pdf",
    "productUrl": "https://www.altis.com.tr/store/tr/urun/smartrac-belt-u8-rfid-etiketi/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz",
    "protocol": "ISO 18000-63 (EPC Class 1 Gen 2 V2)",
    "chip": "NXP UCode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "73 x 17 mm",
    "material": "Mid-gloss paper",
    "fixedReadRange": "Standard",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40C to 85C",
    "ipRating": "IP68",
    "applications": [
      "Industrial asset management",
      "Supply chain",
      "Warehouse management",
      "Retail inventory"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "Label",
      "Non Metal",
      "NXP UCode 8",
      "Industrial asset management",
      "Supply chain"
    ]
  },
  {
    "slug": "smartrac-dogbone-u8",
    "title": "Smartrac Dogbone u8 RFID Paper Tag",
    "brand": "Smartrac",
    "model": "Dogbone u8",
    "sku": "Dogbone u8",
    "subtitle": "Label RFID Tag",
    "shortDesc": "Paper-based RFID tag for supply chain, industrial, RTI and sports timing applications",
    "description": "Model: Dogbone u8. Brand: Smartrac. Frequency: 860-960 MHz. Surface: non_metal. Form factor: Label. Paper-based RFID tag for supply chain, industrial, RTI and sports timing applications",
    "customerSummary": "Label RFID Tag | UHF | Applications: Supply chain management, Industrial tracking, RTI, Sports timing",
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/smartrac-dogbone-rfid-etiketi-600x400.webp",
    "datasheet": "https://www.altis.com.tr/store/wp-content/uploads/2022/02/smartrac-dogbone-rfid-etiketi-datasheet.pdf",
    "productUrl": "https://www.altis.com.tr/store/tr/urun/smartrac-dogbone-u8-rfid-etiketi/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz",
    "protocol": "ISO 18000-63, EPC Class 1 Gen 2",
    "chip": "NXP UCode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "97 x 27 mm",
    "material": "Opaque Matt Paper 79",
    "fixedReadRange": "Standard",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40C to 85C",
    "ipRating": "IP68",
    "applications": [
      "Supply chain management",
      "Industrial tracking",
      "RTI",
      "Sports timing"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "Label",
      "Non Metal",
      "NXP UCode 8",
      "Supply chain management",
      "Industrial tracking"
    ]
  },
  {
    "slug": "smartrac-miniweb-u8",
    "title": "Smartrac Miniweb u8 RFID Paper Tag",
    "brand": "Smartrac",
    "model": "Miniweb u8",
    "sku": "Miniweb u8",
    "subtitle": "Label RFID Tag",
    "shortDesc": "Compact RFID label for retail, industrial and supply chain with self-tuning capability",
    "description": "Model: Miniweb u8. Brand: Smartrac. Frequency: 860-960 MHz. Surface: non_metal. Form factor: Label. Compact RFID label for retail, industrial and supply chain with self-tuning capability",
    "customerSummary": "Label RFID Tag | UHF | Applications: Retail, Industrial, Supply chain, Asset tracking",
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/smartrac-mini-web-rfid-etiketi-1-600x400.webp",
    "datasheet": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/smartrac-miniweb-rfid-etiketi-datasheet.pdf",
    "productUrl": "https://www.altis.com.tr/store/tr/urun/smartrac-miniweb-u8-rfid-etiketi/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz",
    "protocol": "ISO 18000-63, EPC Class 1 Gen 2",
    "chip": "NXP UCode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "45 x 18 mm",
    "material": "Mid-gloss paper",
    "fixedReadRange": "Standard",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40C to 85C",
    "ipRating": "IP68",
    "applications": [
      "Retail",
      "Industrial",
      "Supply chain",
      "Asset tracking"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "Label",
      "Non Metal",
      "NXP UCode 8",
      "Retail",
      "Industrial"
    ]
  },
  {
    "slug": "smartrac-sample-pack",
    "title": "Smartrac RFID Tag Sample Pack",
    "brand": "Smartrac",
    "model": "Sample Pack",
    "sku": "Sample Pack",
    "subtitle": "Mixed (Belt, Dogbone, Miniweb, Web) RFID Tag",
    "shortDesc": "Sample pack with 10 units each of Belt, Dogbone, Miniweb and Web Smartrac UHF RFID tags",
    "description": "Model: Sample Pack. Brand: Smartrac. Frequency: 860-960 MHz. Surface: both. Form factor: Mixed (Belt, Dogbone, Miniweb, Web). Sample pack with 10 units each of Belt, Dogbone, Miniweb and Web Smartrac UHF RFID tags",
    "customerSummary": "Mixed (Belt, Dogbone, Miniweb, Web) RFID Tag | UHF | Applications: Testing, Project evaluation, Multi-sector assessment",
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/02/smartrac-rfid-tag-sample-pack-p-600x427.webp",
    "datasheet": "",
    "productUrl": "https://www.altis.com.tr/store/tr/urun/smartrac-rfid-etiket-numune-paketi/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz",
    "protocol": "EPC Gen 2",
    "chip": "NXP UCode 8",
    "surface": "both",
    "onMetal": true,
    "formFactor": "Mixed (Belt, Dogbone, Miniweb, Web)",
    "sizeText": "Standard",
    "material": "",
    "fixedReadRange": "Standard",
    "handheldReadRange": "Standard",
    "operatingTemp": "Standard",
    "ipRating": "",
    "applications": [
      "Testing",
      "Project evaluation",
      "Multi-sector assessment"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "Mixed (Belt, Dogbone, Miniweb, Web)",
      "On Metal",
      "NXP UCode 8",
      "Testing",
      "Project evaluation"
    ]
  },
  {
    "slug": "smartrac-web-u8",
    "title": "Smartrac Web u8 RFID Paper Tag",
    "brand": "Smartrac",
    "model": "Web u8",
    "sku": "Web u8",
    "subtitle": "Label RFID Tag",
    "shortDesc": "UHF RFID label for retail and logistics with NXP UCode 8 chip",
    "description": "Model: Web u8. Brand: Smartrac. Frequency: 860-960 MHz. Surface: non_metal. Form factor: Label. UHF RFID label for retail and logistics with NXP UCode 8 chip",
    "customerSummary": "Label RFID Tag | UHF | Applications: Product-level retail, Logistics, Supply chain",
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/smartrac-web-rfid-etiketi-600x400.webp",
    "datasheet": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/smartrac-web-rfid-etiketi-datasheet-2.pdf",
    "productUrl": "https://www.altis.com.tr/store/tr/urun/smartrac-web-u8-rfid-etiketi/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz",
    "protocol": "ISO 18000-63, EPC Class 1 Gen 2",
    "chip": "NXP UCode 8",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Label",
    "sizeText": "54 x 33 mm",
    "material": "Mid-gloss paper",
    "fixedReadRange": "Standard",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40C to 85C",
    "ipRating": "IP68",
    "applications": [
      "Product-level retail",
      "Logistics",
      "Supply chain"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "Label",
      "Non Metal",
      "NXP UCode 8",
      "Product-level retail",
      "Logistics"
    ]
  },
  {
    "slug": "xerafy-cargo-trak-ii",
    "title": "Xerafy Cargo Trak II",
    "brand": "Xerafy",
    "model": "Cargo Trak II",
    "sku": "Cargo Trak II",
    "subtitle": "Rigid polymer enclosure RFID Tag",
    "shortDesc": "Industrial-grade RFID tag for outdoor and harsh environments with 10-year lifespan potential",
    "description": "Model: Cargo Trak II. Brand: Xerafy. Frequency: 902-928 MHz (US) / 866-868 MHz (EU). Surface: on_metal. Form factor: Rigid polymer enclosure. Industrial-grade RFID tag for outdoor and harsh environments with 10-year lifespan potential",
    "customerSummary": "Rigid polymer enclosure RFID Tag | UHF | Applications: Cargo tracking, Container management, Outdoor asset tracking, Industrial logistics",
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/xerafy-cargo-trak-2-600x400.webp",
    "datasheet": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/xerafy-conteiner-trak-datasheet.pdf",
    "productUrl": "https://www.altis.com.tr/store/tr/urun/xerafy-cargo-trak-ii/",
    "frequency": "UHF",
    "frequencyBand": "902-928 MHz (US) / 866-868 MHz (EU)",
    "protocol": "EPC global Class 1 Gen2",
    "chip": "Alien Higgs-3",
    "surface": "on_metal",
    "onMetal": true,
    "formFactor": "Rigid polymer enclosure",
    "sizeText": "100 x 26 x 8.9 mm",
    "material": "Anti-UV industrial grade polymer",
    "fixedReadRange": "up to 12m on metal",
    "handheldReadRange": "up to 6m off metal",
    "operatingTemp": "-40C to 85C",
    "ipRating": "IP68",
    "applications": [
      "Cargo tracking",
      "Container management",
      "Outdoor asset tracking",
      "Industrial logistics"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "Rigid polymer enclosure",
      "On Metal",
      "Alien Higgs-3",
      "Cargo tracking",
      "Container management"
    ]
  },
  {
    "slug": "xerafy-cargo-outdoor",
    "title": "Xerafy CARGO-OUTDOOR",
    "brand": "Xerafy",
    "model": "CARGO-OUTDOOR",
    "sku": "CARGO-OUTDOOR",
    "subtitle": "RFID TAG/LABEL VARIATION",
    "shortDesc": "Industrial tracking",
    "description": "SKU: CARGO-OUTDOOR. Supplier: Xerafy. Category: RFID TAG/LABEL VARIATION. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Standard. Description: Variation of Xerafy CARGO series.",
    "customerSummary": "RFID TAG/LABEL VARIATION | Standard | Applications: Industrial",
    "image": "https://xerafy.com/wp-content/uploads/2024/06/Multi-Surface-Outdoor-RFID-Tag-Xerafy-Cargo-OUTDOOR.png",
    "datasheet": "",
    "productUrl": "https://xerafy.com/rfid-tags-and-labels/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Alien Higgs-3",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Standard",
    "sizeText": "Standard",
    "material": "Standard",
    "fixedReadRange": "Up to 12m",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "Standard",
      "On Metal",
      "Alien Higgs-3",
      "Industrial"
    ]
  },
  {
    "slug": "xerafy-container-outdoor",
    "title": "Xerafy CONTAINER-OUTDOOR",
    "brand": "Xerafy",
    "model": "CONTAINER-OUTDOOR",
    "sku": "CONTAINER-OUTDOOR",
    "subtitle": "LONG-RANGE OUTDOOR RFID TAG",
    "shortDesc": "Yard management, last-mile logistics",
    "description": "SKU: CONTAINER-OUTDOOR. Supplier: Xerafy. Category: LONG-RANGE OUTDOOR RFID TAG. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Rugged Tag. Description: Extreme long-range tag for yard management and containers.",
    "customerSummary": "LONG-RANGE OUTDOOR RFID TAG | Rugged Tag | Applications: Yard Management, Logistics",
    "image": "https://xerafy.com/wp-content/uploads/2025/06/Container-OUTDOOR-M830-logo-2.png",
    "datasheet": "",
    "productUrl": "https://xerafy.com/rfid-tags-and-labels/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Alien Higgs-3",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Rugged Tag",
    "sizeText": "Large form factor",
    "material": "Industry grade polymer",
    "fixedReadRange": "Up to 40m",
    "handheldReadRange": "Up to 25m",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP68",
    "applications": [
      "Yard Management",
      "Logistics"
    ],
    "industries": [
      "Yard Management",
      "Logistics"
    ],
    "tags": [
      "UHF",
      "Rugged Tag",
      "On Metal",
      "Alien Higgs-3",
      "Yard Management",
      "Logistics"
    ]
  },
  {
    "slug": "xerafy-container-trak",
    "title": "Xerafy Container Trak",
    "brand": "Xerafy",
    "model": "Container Trak",
    "sku": "Container Trak",
    "subtitle": "Rectangular ruggedized tag with rivet holes RFID Tag",
    "shortDesc": "Rugged RFID tag for container tracking with IP68 rating and up to 20m read range",
    "description": "Model: Container Trak. Brand: Xerafy. Frequency: 902-928 MHz (US) / 866-868 MHz (EU). Surface: on_metal. Form factor: Rectangular ruggedized tag with rivet holes. Rugged RFID tag for container tracking with IP68 rating and up to 20m read range",
    "customerSummary": "Rectangular ruggedized tag with rivet holes RFID Tag | UHF | Applications: Container tracking, Asset tracking, Outdoor inventory management",
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/xerafy-container-trak-600x400.webp",
    "datasheet": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/xerafy-conteiner-trak-datasheet.pdf",
    "productUrl": "https://www.altis.com.tr/store/tr/urun/xerafy-container-trak/",
    "frequency": "UHF",
    "frequencyBand": "902-928 MHz (US) / 866-868 MHz (EU)",
    "protocol": "EPC global Class 1 Gen2",
    "chip": "Impinj Monza R6-P",
    "surface": "on_metal",
    "onMetal": true,
    "formFactor": "Rectangular ruggedized tag with rivet holes",
    "sizeText": "138.8 x 42 x 12 mm",
    "material": "Anti-UV industrial grade polymer",
    "fixedReadRange": "up to 20m on metal",
    "handheldReadRange": "up to 15m off metal",
    "operatingTemp": "-40C to 70C",
    "ipRating": "IP68",
    "applications": [
      "Container tracking",
      "Asset tracking",
      "Outdoor inventory management"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "Rectangular ruggedized tag with rivet holes",
      "On Metal",
      "Impinj Monza R6-P",
      "Container tracking",
      "Asset tracking"
    ]
  },
  {
    "slug": "xerafy-data-trak-ii",
    "title": "Xerafy DATA-TRAK-II",
    "brand": "Xerafy",
    "model": "DATA-TRAK-II",
    "sku": "DATA-TRAK-II",
    "subtitle": "RFID TAG/LABEL VARIATION",
    "shortDesc": "Industrial tracking",
    "description": "SKU: DATA-TRAK-II. Supplier: Xerafy. Category: RFID TAG/LABEL VARIATION. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Standard. Description: Variation of Xerafy DATA series.",
    "customerSummary": "RFID TAG/LABEL VARIATION | Standard | Applications: Industrial",
    "image": "https://xerafy.com/wp-content/uploads/2023/01/Xerafy-Logo.png",
    "datasheet": "",
    "productUrl": "https://xerafy.com/rfid-tags-and-labels/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Alien Higgs-3",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Standard",
    "sizeText": "115 x 26 x 12 mm",
    "material": "Standard",
    "fixedReadRange": "Up to 2.5m",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "Standard",
      "On Metal",
      "Alien Higgs-3",
      "Industrial"
    ]
  },
  {
    "slug": "xerafy-global-trak",
    "title": "Xerafy GLOBAL-TRAK",
    "brand": "Xerafy",
    "model": "GLOBAL-TRAK",
    "sku": "GLOBAL-TRAK",
    "subtitle": "LOGISTICS RFID TAG",
    "shortDesc": "Global supply chain, logistics, e-commerce",
    "description": "SKU: GLOBAL-TRAK. Supplier: Xerafy. Category: LOGISTICS RFID TAG. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Rugged Tag. Description: Optimized for global supply chain and logistics.",
    "customerSummary": "LOGISTICS RFID TAG | Rugged Tag | Applications: Logistics, Supply Chain",
    "image": "https://xerafy.com/wp-content/uploads/2024/06/Xerafy-Global-TRAK-RFID-Tag-For-Global-Visibility.png",
    "datasheet": "",
    "productUrl": "https://xerafy.com/trak-series/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Alien Higgs-3",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Rugged Tag",
    "sizeText": "115 x 26 x 12 mm",
    "material": "Industry grade polymer",
    "fixedReadRange": "Up to 2.5m",
    "handheldReadRange": "Up to 1.8m",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP68",
    "applications": [
      "Logistics",
      "Supply Chain"
    ],
    "industries": [
      "Logistics",
      "Supply Chain"
    ],
    "tags": [
      "UHF",
      "Rugged Tag",
      "On Metal",
      "Alien Higgs-3",
      "Logistics",
      "Supply Chain"
    ]
  },
  {
    "slug": "xerafy-metal-skin-delta",
    "title": "Xerafy METAL-SKIN-DELTA",
    "brand": "Xerafy",
    "model": "METAL-SKIN-DELTA",
    "sku": "METAL-SKIN-DELTA",
    "subtitle": "DURABLE ON-METAL RFID LABEL",
    "shortDesc": "IT asset tracking, curved surfaces",
    "description": "SKU: METAL-SKIN-DELTA. Supplier: Xerafy. Category: DURABLE ON-METAL RFID LABEL. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: Thin, flexible label for on-metal applications.",
    "customerSummary": "DURABLE ON-METAL RFID LABEL | Flexible Label | Applications: IT Assets, Curved Surfaces",
    "image": "https://xerafy.com/wp-content/uploads/2025/06/Metal-Skin-Delta-M830-640x360-S.png",
    "datasheet": "",
    "productUrl": "https://xerafy.com/metal-skin-series/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Impinj M830",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "70 x 30 x 0.4 mm",
    "material": "High-performance polymer",
    "fixedReadRange": "Up to 4.5m",
    "handheldReadRange": "Up to 2.5m",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP68",
    "applications": [
      "IT Assets",
      "Curved Surfaces"
    ],
    "industries": [
      "IT Assets",
      "Curved Surfaces"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "Impinj M830",
      "IT Assets",
      "Curved Surfaces"
    ]
  },
  {
    "slug": "xerafy-metal-skin-delta-u8",
    "title": "Xerafy METAL-SKIN-DELTA-U8",
    "brand": "Xerafy",
    "model": "METAL-SKIN-DELTA-U8",
    "sku": "METAL-SKIN-DELTA-U8",
    "subtitle": "RFID TAG/LABEL VARIATION",
    "shortDesc": "Industrial tracking",
    "description": "SKU: METAL-SKIN-DELTA-U8. Supplier: Xerafy. Category: RFID TAG/LABEL VARIATION. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Standard. Description: Variation of Xerafy METAL series.",
    "customerSummary": "RFID TAG/LABEL VARIATION | Standard | Applications: Industrial",
    "image": "https://cdn11.bigcommerce.com/s-ka7ofex/images/stencil/960w/products/4995/20759/Metal_Skin_Delta_NXP__88233.1727711979.png?c=2",
    "datasheet": "",
    "productUrl": "https://xerafy.com/rfid-tags-and-labels/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Alien Higgs-3",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Standard",
    "sizeText": "80 x 40 x 1 mm",
    "material": "Standard",
    "fixedReadRange": "Up to 11m",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "Standard",
      "On Metal",
      "Alien Higgs-3",
      "Industrial"
    ]
  },
  {
    "slug": "xerafy-metal-skin-mercury",
    "title": "Xerafy METAL-SKIN-MERCURY",
    "brand": "Xerafy",
    "model": "METAL-SKIN-MERCURY",
    "sku": "METAL-SKIN-MERCURY",
    "subtitle": "LONG-RANGE ON-METAL RFID LABEL",
    "shortDesc": "Supply chain, logistics, datacenter servers",
    "description": "SKU: METAL-SKIN-MERCURY. Supplier: Xerafy. Category: LONG-RANGE ON-METAL RFID LABEL. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Flexible Label. Description: High-performance label for warehouse and logistics.",
    "customerSummary": "LONG-RANGE ON-METAL RFID LABEL | Flexible Label | Applications: Logistics, Datacenters",
    "image": "ImageData/mercury metal skin.png",
    "datasheet": "",
    "productUrl": "https://xerafy.com/metal-skin-series/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "NXP UCODE 9",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Flexible Label",
    "sizeText": "101.6 x 38 x 1 mm",
    "material": "Thermal transfer face stock",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Up to 6m",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP68",
    "applications": [
      "Logistics",
      "Datacenters"
    ],
    "industries": [
      "Logistics",
      "Datacenters"
    ],
    "tags": [
      "UHF",
      "Flexible Label",
      "On Metal",
      "NXP UCODE 9",
      "Logistics",
      "Datacenters"
    ]
  },
  {
    "slug": "xerafy-metal-skin-mercury-86-max",
    "title": "Xerafy METAL-SKIN-MERCURY-86-MAX",
    "brand": "Xerafy",
    "model": "METAL-SKIN-MERCURY-86-MAX",
    "sku": "METAL-SKIN-MERCURY-86-MAX",
    "subtitle": "RFID TAG/LABEL VARIATION",
    "shortDesc": "Industrial tracking",
    "description": "SKU: METAL-SKIN-MERCURY-86-MAX. Supplier: Xerafy. Category: RFID TAG/LABEL VARIATION. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Standard. Description: Variation of Xerafy METAL series.",
    "customerSummary": "RFID TAG/LABEL VARIATION | Standard | Applications: Industrial",
    "image": "https://xerafy.com/wp-content/uploads/2024/07/Mercury-86-Max-B.png",
    "datasheet": "",
    "productUrl": "https://xerafy.com/rfid-tags-and-labels/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Alien Higgs-3",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Standard",
    "sizeText": "86 x 54 x 1.25 mm",
    "material": "Standard",
    "fixedReadRange": "Up to 19m",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "Standard",
      "On Metal",
      "Alien Higgs-3",
      "Industrial"
    ]
  },
  {
    "slug": "xerafy-metal-skin-mercury-95-max",
    "title": "Xerafy METAL-SKIN-MERCURY-95-MAX",
    "brand": "Xerafy",
    "model": "METAL-SKIN-MERCURY-95-MAX",
    "sku": "METAL-SKIN-MERCURY-95-MAX",
    "subtitle": "RFID TAG/LABEL VARIATION",
    "shortDesc": "Industrial tracking",
    "description": "SKU: METAL-SKIN-MERCURY-95-MAX. Supplier: Xerafy. Category: RFID TAG/LABEL VARIATION. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Standard. Description: Variation of Xerafy METAL series.",
    "customerSummary": "RFID TAG/LABEL VARIATION | Standard | Applications: Industrial",
    "image": "https://xerafy.com/wp-content/uploads/2024/07/Mercury-95-Max-B.png",
    "datasheet": "",
    "productUrl": "https://xerafy.com/rfid-tags-and-labels/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Alien Higgs-3",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Standard",
    "sizeText": "95 x 22 x 1.25 mm",
    "material": "Standard",
    "fixedReadRange": "Up to 16m",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "Standard",
      "On Metal",
      "Alien Higgs-3",
      "Industrial"
    ]
  },
  {
    "slug": "xerafy-metal-skin-platinum-60-max",
    "title": "Xerafy METAL-SKIN-PLATINUM-60-MAX",
    "brand": "Xerafy",
    "model": "METAL-SKIN-PLATINUM-60-MAX",
    "sku": "METAL-SKIN-PLATINUM-60-MAX",
    "subtitle": "RFID TAG/LABEL VARIATION",
    "shortDesc": "Industrial tracking",
    "description": "SKU: METAL-SKIN-PLATINUM-60-MAX. Supplier: Xerafy. Category: RFID TAG/LABEL VARIATION. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Standard. Description: Variation of Xerafy METAL series.",
    "customerSummary": "RFID TAG/LABEL VARIATION | Standard | Applications: Industrial",
    "image": "https://xerafy.com/wp-content/uploads/2026/03/Platinum-60-Max-2603.png",
    "datasheet": "",
    "productUrl": "https://xerafy.com/rfid-tags-and-labels/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Alien Higgs-3",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Standard",
    "sizeText": "60 x 25 x 1 mm",
    "material": "Standard",
    "fixedReadRange": "Up to 9.5m",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "Standard",
      "On Metal",
      "Alien Higgs-3",
      "Industrial"
    ]
  },
  {
    "slug": "xerafy-metal-skin-titanium-25-hf",
    "title": "Xerafy METAL-SKIN-TITANIUM-25-HF",
    "brand": "Xerafy",
    "model": "METAL-SKIN-TITANIUM-25-HF",
    "sku": "METAL-SKIN-TITANIUM-25-HF",
    "subtitle": "RFID TAG/LABEL VARIATION",
    "shortDesc": "Industrial tracking",
    "description": "SKU: METAL-SKIN-TITANIUM-25-HF. Supplier: Xerafy. Category: RFID TAG/LABEL VARIATION. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Standard. Description: Variation of Xerafy METAL series.",
    "customerSummary": "RFID TAG/LABEL VARIATION | Standard | Applications: Industrial",
    "image": "https://xerafy.com/wp-content/uploads/2024/07/Titanium-25-HF-1.png",
    "datasheet": "",
    "productUrl": "https://xerafy.com/rfid-tags-and-labels/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Alien Higgs-3",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Standard",
    "sizeText": "25 mm (round)",
    "material": "Standard",
    "fixedReadRange": "Up to 0.05m",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "Standard",
      "On Metal",
      "Alien Higgs-3",
      "Industrial"
    ]
  },
  {
    "slug": "xerafy-metal-skin-titanium-25-lasso",
    "title": "Xerafy METAL-SKIN-TITANIUM-25-LASSO",
    "brand": "Xerafy",
    "model": "METAL-SKIN-TITANIUM-25-LASSO",
    "sku": "METAL-SKIN-TITANIUM-25-LASSO",
    "subtitle": "RFID TAG/LABEL VARIATION",
    "shortDesc": "Industrial tracking",
    "description": "SKU: METAL-SKIN-TITANIUM-25-LASSO. Supplier: Xerafy. Category: RFID TAG/LABEL VARIATION. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Standard. Description: Variation of Xerafy METAL series.",
    "customerSummary": "RFID TAG/LABEL VARIATION | Standard | Applications: Industrial",
    "image": "https://cdn11.bigcommerce.com/s-ka7ofex/images/stencil/960w/products/4992/20747/Titanium_25_Lasso__01550.1730382191.png?c=2",
    "datasheet": "",
    "productUrl": "https://xerafy.com/rfid-tags-and-labels/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Alien Higgs-3",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Standard",
    "sizeText": "68 x 13 x 1 mm",
    "material": "Standard",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "Standard",
      "On Metal",
      "Alien Higgs-3",
      "Industrial"
    ]
  },
  {
    "slug": "xerafy-micro-autoclavable",
    "title": "Xerafy MICRO-AUTOCLAVABLE",
    "brand": "Xerafy",
    "model": "MICRO-AUTOCLAVABLE",
    "sku": "MICRO-AUTOCLAVABLE",
    "subtitle": "RFID TAG/LABEL VARIATION",
    "shortDesc": "Industrial tracking",
    "description": "SKU: MICRO-AUTOCLAVABLE. Supplier: Xerafy. Category: RFID TAG/LABEL VARIATION. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Standard. Description: Variation of Xerafy MICRO series.",
    "customerSummary": "RFID TAG/LABEL VARIATION | Standard | Applications: Industrial",
    "image": "https://xerafy.com/wp-content/uploads/2024/02/MICRO-Autoclavable-1.webp",
    "datasheet": "",
    "productUrl": "https://xerafy.com/rfid-tags-and-labels/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Alien Higgs-3",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Standard",
    "sizeText": "55 x 14 x 7.5 mm",
    "material": "Standard",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "Standard",
      "On Metal",
      "Alien Higgs-3",
      "Industrial"
    ]
  },
  {
    "slug": "xerafy-micro-industrial",
    "title": "Xerafy MICRO-INDUSTRIAL",
    "brand": "Xerafy",
    "model": "MICRO-INDUSTRIAL",
    "sku": "MICRO-INDUSTRIAL",
    "subtitle": "INDUSTRIAL ON-METAL RFID TAG",
    "shortDesc": "Pallets, containers, manufacturing equipment",
    "description": "SKU: MICRO-INDUSTRIAL. Supplier: Xerafy. Category: INDUSTRIAL ON-METAL RFID TAG. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Rugged Tag. Description: High-performance tag for industrial asset management.",
    "customerSummary": "INDUSTRIAL ON-METAL RFID TAG | Rugged Tag | Applications: Pallets, Containers",
    "image": "https://xerafy.com/wp-content/uploads/2024/02/xerafy-MICRO-Industrial-1.webp",
    "datasheet": "",
    "productUrl": "https://xerafy.com/rfid-tags-and-labels/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Alien Higgs-3",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Rugged Tag",
    "sizeText": "55 x 14 x 7.5 mm",
    "material": "Engineering Plastic",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 7m",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP68",
    "applications": [
      "Pallets",
      "Containers"
    ],
    "industries": [
      "Pallets",
      "Containers"
    ],
    "tags": [
      "UHF",
      "Rugged Tag",
      "On Metal",
      "Alien Higgs-3",
      "Pallets",
      "Containers"
    ]
  },
  {
    "slug": "xerafy-micro-paint-shop",
    "title": "Xerafy MICRO-PAINT-SHOP",
    "brand": "Xerafy",
    "model": "MICRO-PAINT-SHOP",
    "sku": "MICRO-PAINT-SHOP",
    "subtitle": "HIGH-TEMP ON-METAL RFID TAG",
    "shortDesc": "Automotive paint shops, high-temp industrial",
    "description": "SKU: MICRO-PAINT-SHOP. Supplier: Xerafy. Category: HIGH-TEMP ON-METAL RFID TAG. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Rugged Tag. Description: Designed to withstand high-temperature paint shop processes.",
    "customerSummary": "HIGH-TEMP ON-METAL RFID TAG | Rugged Tag | Applications: Automotive, High-Temp",
    "image": "https://xerafy.com/wp-content/uploads/2024/02/MICRO-Paint-Shop-1.webp",
    "datasheet": "",
    "productUrl": "https://xerafy.com/rfid-tags-and-labels/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Alien Higgs-3",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Rugged Tag",
    "sizeText": "55 x 14 x 7.5 mm",
    "material": "High-temp polymer",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Up to 7m",
    "operatingTemp": "-40°C to +250°C",
    "ipRating": "IP68",
    "applications": [
      "Automotive",
      "High-Temp"
    ],
    "industries": [
      "Automotive",
      "High-Temp"
    ],
    "tags": [
      "UHF",
      "Rugged Tag",
      "On Metal",
      "Alien Higgs-3",
      "Automotive",
      "High-Temp"
    ]
  },
  {
    "slug": "xerafy-micro-power",
    "title": "Xerafy MICRO-POWER",
    "brand": "Xerafy",
    "model": "MICRO-POWER",
    "sku": "MICRO-POWER",
    "subtitle": "RFID TAG/LABEL VARIATION",
    "shortDesc": "Industrial tracking",
    "description": "SKU: MICRO-POWER. Supplier: Xerafy. Category: RFID TAG/LABEL VARIATION. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Standard. Description: Variation of Xerafy MICRO series.",
    "customerSummary": "RFID TAG/LABEL VARIATION | Standard | Applications: Industrial",
    "image": "https://xerafy.com/wp-content/uploads/2024/02/Xerafy-MICRO-Power-1.webp",
    "datasheet": "",
    "productUrl": "https://xerafy.com/rfid-tags-and-labels/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Alien Higgs-3",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Standard",
    "sizeText": "31.7 x 12.8 x 4.8 mm",
    "material": "Standard",
    "fixedReadRange": "Up to 6m",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "Standard",
      "On Metal",
      "Alien Higgs-3",
      "Industrial"
    ]
  },
  {
    "slug": "xerafy-nano-x-ii",
    "title": "Xerafy Nano X II",
    "brand": "Xerafy",
    "model": "Nano X II",
    "sku": "Nano X II",
    "subtitle": "Adhesive tag RFID Tag",
    "shortDesc": "One of the world's smallest and most rugged metal-mount UHF RFID tags for industrial asset identification",
    "description": "Model: Nano X II. Brand: Xerafy. Frequency: 902-928 MHz (US) / 866-868 MHz (EU). Surface: on_metal. Form factor: Adhesive tag. One of the world's smallest and most rugged metal-mount UHF RFID tags for industrial asset identification",
    "customerSummary": "Adhesive tag RFID Tag | UHF | Applications: Industrial asset identification, Small metal objects, Harsh environments",
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/xerafy-nano-x-ii-2-600x400.webp",
    "datasheet": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/xerafy-nano-x-ii-datasheet.pdf",
    "productUrl": "https://www.altis.com.tr/store/tr/urun/xerafy-nano-x-ii/",
    "frequency": "UHF",
    "frequencyBand": "902-928 MHz (US) / 866-868 MHz (EU)",
    "protocol": "EPC global Class 1 Gen2",
    "chip": "NXP UCODE8",
    "surface": "on_metal",
    "onMetal": true,
    "formFactor": "Adhesive tag",
    "sizeText": "31.7 x 12.8 x 4.8 mm",
    "material": "Engineering Grade Nylon Polymer",
    "fixedReadRange": "up to 6m on metal",
    "handheldReadRange": "Standard",
    "operatingTemp": "-30C to 85C",
    "ipRating": "IP68",
    "applications": [
      "Industrial asset identification",
      "Small metal objects",
      "Harsh environments"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "Adhesive tag",
      "On Metal",
      "NXP UCODE8",
      "Industrial asset identification",
      "Small metal objects"
    ]
  },
  {
    "slug": "xerafy-nano-x-ii-ht",
    "title": "Xerafy Nano X-II HT",
    "brand": "Xerafy",
    "model": "Nano X-II HT",
    "sku": "Nano X-II HT",
    "subtitle": "Rigid rectangular tag RFID Tag",
    "shortDesc": "High-performance metal-mountable RFID tag with exceptional read ranges up to 7m on metal",
    "description": "Model: Nano X-II HT. Brand: Xerafy. Frequency: 902-928 MHz (US) / 866-868 MHz (EU). Surface: on_metal. Form factor: Rigid rectangular tag. High-performance metal-mountable RFID tag with exceptional read ranges up to 7m on metal",
    "customerSummary": "Rigid rectangular tag RFID Tag | UHF | Applications: Asset tracking, Equipment identification, High-temperature industrial asset management",
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/xerafy-nano-x-ii-ht-600x400.webp",
    "datasheet": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/xerafy-nano-x-ii-datasheet.pdf",
    "productUrl": "https://www.altis.com.tr/store/tr/urun/xerafy-nano-x-ii-ht/",
    "frequency": "UHF",
    "frequencyBand": "902-928 MHz (US) / 866-868 MHz (EU)",
    "protocol": "EPC global Class 1 Gen2",
    "chip": "Alien Higgs-4",
    "surface": "on_metal",
    "onMetal": true,
    "formFactor": "Rigid rectangular tag",
    "sizeText": "42 x 15 x 2.1 mm",
    "material": "PTFE",
    "fixedReadRange": "up to 7m on metal",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40C to 150C",
    "ipRating": "IP68",
    "applications": [
      "Asset tracking",
      "Equipment identification",
      "High-temperature industrial asset management"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "Rigid rectangular tag",
      "On Metal",
      "Alien Higgs-4",
      "Asset tracking",
      "Equipment identification"
    ]
  },
  {
    "slug": "xerafy-nfc-rti-outdoor",
    "title": "Xerafy NFC-RTI-OUTDOOR",
    "brand": "Xerafy",
    "model": "NFC-RTI-OUTDOOR",
    "sku": "NFC-RTI-OUTDOOR",
    "subtitle": "RFID TAG/LABEL VARIATION",
    "shortDesc": "Industrial tracking",
    "description": "SKU: NFC-RTI-OUTDOOR. Supplier: Xerafy. Category: RFID TAG/LABEL VARIATION. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Standard. Description: Variation of Xerafy NFC series.",
    "customerSummary": "RFID TAG/LABEL VARIATION | Standard | Applications: Industrial",
    "image": "https://xerafy.com/wp-content/uploads/2024/07/NFC-RTI-OUTDOOR.png",
    "datasheet": "",
    "productUrl": "https://xerafy.com/rfid-tags-and-labels/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Alien Higgs-3",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Standard",
    "sizeText": "73.3 x 22.8 x 8.65 mm",
    "material": "Standard",
    "fixedReadRange": "Up to 8m",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "Standard",
      "On Metal",
      "Alien Higgs-3",
      "Industrial"
    ]
  },
  {
    "slug": "xerafy-pico-in",
    "title": "Xerafy PICO-IN",
    "brand": "Xerafy",
    "model": "PICO-IN",
    "sku": "PICO-IN",
    "subtitle": "RFID TAG/LABEL VARIATION",
    "shortDesc": "Industrial tracking",
    "description": "SKU: PICO-IN. Supplier: Xerafy. Category: RFID TAG/LABEL VARIATION. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Standard. Description: Variation of Xerafy PICO series.",
    "customerSummary": "RFID TAG/LABEL VARIATION | Standard | Applications: Industrial",
    "image": "https://xerafy.com/wp-content/uploads/2022/08/pico-in-plus-1-01-jpg.jpg",
    "datasheet": "",
    "productUrl": "https://xerafy.com/rfid-tags-and-labels/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Alien Higgs-3",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Standard",
    "sizeText": "12.8 x 7.08 x 3.08 mm",
    "material": "Standard",
    "fixedReadRange": "Up to 2m",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "Standard",
      "On Metal",
      "Alien Higgs-3",
      "Industrial"
    ]
  },
  {
    "slug": "xerafy-pico-mini-100",
    "title": "Xerafy PICO-MINI-100",
    "brand": "Xerafy",
    "model": "PICO-MINI-100",
    "sku": "PICO-MINI-100",
    "subtitle": "ULTRA-THIN ON-METAL RFID TAG",
    "shortDesc": "Small hand tools, aerospace, nuclear",
    "description": "SKU: PICO-MINI-100. Supplier: Xerafy. Category: ULTRA-THIN ON-METAL RFID TAG. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: PCB Tag. Description: Ultra-thin profile of just 1mm, designed specifically for metal tools.",
    "customerSummary": "ULTRA-THIN ON-METAL RFID TAG | PCB Tag | Applications: Small Tools, Aerospace",
    "image": "https://xerafy.com/wp-content/uploads/2024/05/PICO-Mini-X.png",
    "datasheet": "",
    "productUrl": "https://xerafy.com/pico-series/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Alien Higgs-3",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "PCB Tag",
    "sizeText": "10 x 3 x 1 mm",
    "material": "FR4 (PCB)",
    "fixedReadRange": "Up to 0.5m",
    "handheldReadRange": "Up to 0.3m",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP68",
    "applications": [
      "Small Tools",
      "Aerospace"
    ],
    "industries": [
      "Small Tools",
      "Aerospace"
    ],
    "tags": [
      "UHF",
      "PCB Tag",
      "On Metal",
      "Alien Higgs-3",
      "Small Tools",
      "Aerospace"
    ]
  },
  {
    "slug": "xerafy-pico-mini-150",
    "title": "Xerafy PICO-MINI-150",
    "brand": "Xerafy",
    "model": "PICO-MINI-150",
    "sku": "PICO-MINI-150",
    "subtitle": "RFID TAG/LABEL VARIATION",
    "shortDesc": "Industrial tracking",
    "description": "SKU: PICO-MINI-150. Supplier: Xerafy. Category: RFID TAG/LABEL VARIATION. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Standard. Description: Variation of Xerafy PICO series.",
    "customerSummary": "RFID TAG/LABEL VARIATION | Standard | Applications: Industrial",
    "image": "https://xerafy.com/wp-content/uploads/2024/05/PICO-Mini-X.png",
    "datasheet": "",
    "productUrl": "https://xerafy.com/rfid-tags-and-labels/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Alien Higgs-3",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Standard",
    "sizeText": "12 x 3 x 1 mm",
    "material": "Standard",
    "fixedReadRange": "Up to 1.5m",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "Standard",
      "On Metal",
      "Alien Higgs-3",
      "Industrial"
    ]
  },
  {
    "slug": "xerafy-pico-mini-300",
    "title": "Xerafy PICO-MINI-300",
    "brand": "Xerafy",
    "model": "PICO-MINI-300",
    "sku": "PICO-MINI-300",
    "subtitle": "RFID TAG/LABEL VARIATION",
    "shortDesc": "Industrial tracking",
    "description": "SKU: PICO-MINI-300. Supplier: Xerafy. Category: RFID TAG/LABEL VARIATION. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Standard. Description: Variation of Xerafy PICO series.",
    "customerSummary": "RFID TAG/LABEL VARIATION | Standard | Applications: Industrial",
    "image": "https://xerafy.com/wp-content/uploads/2024/05/PICO-Mini-X.png",
    "datasheet": "",
    "productUrl": "https://xerafy.com/rfid-tags-and-labels/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Alien Higgs-3",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Standard",
    "sizeText": "17.7 x 13 x 1 mm",
    "material": "Standard",
    "fixedReadRange": "Up to 3m",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "Standard",
      "On Metal",
      "Alien Higgs-3",
      "Industrial"
    ]
  },
  {
    "slug": "xerafy-pico-off",
    "title": "Xerafy PICO-OFF",
    "brand": "Xerafy",
    "model": "PICO-OFF",
    "sku": "PICO-OFF",
    "subtitle": "RUGGED OFF-METAL RFID TAG",
    "shortDesc": "Hand tools tracking, IT asset management",
    "description": "SKU: PICO-OFF. Supplier: Xerafy. Category: RUGGED OFF-METAL RFID TAG. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Ceramic Tag. Description: PICO Off is designed for small plastic tools and devices in tough industrial environments.",
    "customerSummary": "RUGGED OFF-METAL RFID TAG | Ceramic Tag | Applications: Tool Tracking, IT Assets",
    "image": "https://xerafy.com/wp-content/uploads/2024/08/Tracking-small-non-metal-tools-and-devices-Xerafy-PICO-Off.png",
    "datasheet": "",
    "productUrl": "https://xerafy.com/pico-series/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Alien Higgs-9",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Ceramic Tag",
    "sizeText": "12.8 x 7.08 x 3.08 mm",
    "material": "Ceramic",
    "fixedReadRange": "Limited",
    "handheldReadRange": "Up to 2m",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP68",
    "applications": [
      "Tool Tracking",
      "IT Assets"
    ],
    "industries": [
      "Tool Tracking",
      "IT Assets"
    ],
    "tags": [
      "UHF",
      "Ceramic Tag",
      "Non Metal",
      "Alien Higgs-9",
      "Tool Tracking",
      "IT Assets"
    ]
  },
  {
    "slug": "xerafy-pico-on",
    "title": "Xerafy PICO-ON",
    "brand": "Xerafy",
    "model": "PICO-ON",
    "sku": "PICO-ON",
    "subtitle": "RUGGED ON-METAL RFID TAG",
    "shortDesc": "Hand tools for manufacturing, aerospace, military",
    "description": "SKU: PICO-ON. Supplier: Xerafy. Category: RUGGED ON-METAL RFID TAG. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Ceramic Tag. Description: PICO On is a rugged RFID tag designed for tool tracking and equipment management in harsh environments.",
    "customerSummary": "RUGGED ON-METAL RFID TAG | Ceramic Tag | Applications: Tool Tracking, Aerospace, Military",
    "image": "https://xerafy.com/wp-content/uploads/2024/08/Tracking-On-Metal-Small-Tools-and-Weapons-Xerafy-PICO-On.png",
    "datasheet": "",
    "productUrl": "https://xerafy.com/pico-series/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Alien Higgs-9",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Ceramic Tag",
    "sizeText": "12.8 x 7.08 x 3.08 mm",
    "material": "Ceramic",
    "fixedReadRange": "Up to 3m",
    "handheldReadRange": "Up to 2m",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP68",
    "applications": [
      "Tool Tracking",
      "Aerospace",
      "Military"
    ],
    "industries": [
      "Tool Tracking",
      "Aerospace",
      "Military"
    ],
    "tags": [
      "UHF",
      "Ceramic Tag",
      "On Metal",
      "Alien Higgs-9",
      "Tool Tracking",
      "Aerospace"
    ]
  },
  {
    "slug": "xerafy-pico-plus",
    "title": "Xerafy PICO-PLUS",
    "brand": "Xerafy",
    "model": "PICO-PLUS",
    "sku": "PICO-PLUS",
    "subtitle": "PACKAGED RUGGED ON-METAL RFID TAG",
    "shortDesc": "Manufacturing tools, medical devices",
    "description": "SKU: PICO-PLUS. Supplier: Xerafy. Category: PACKAGED RUGGED ON-METAL RFID TAG. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Polymer Tag. Description: Small and most rugged RFID on-metal tag for production applications.",
    "customerSummary": "PACKAGED RUGGED ON-METAL RFID TAG | Polymer Tag | Applications: Manufacturing, Medical Devices",
    "image": "https://xerafy.com/wp-content/uploads/2022/08/Pico-Plus-1.png",
    "datasheet": "",
    "productUrl": "https://xerafy.com/pico-series/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Alien Higgs-3",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Polymer Tag",
    "sizeText": "17.7 x 13 x 5 mm",
    "material": "Industry grade polymer",
    "fixedReadRange": "Up to 3m",
    "handheldReadRange": "Up to 2m",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP68",
    "applications": [
      "Manufacturing",
      "Medical Devices"
    ],
    "industries": [
      "Manufacturing",
      "Medical Devices"
    ],
    "tags": [
      "UHF",
      "Polymer Tag",
      "On Metal",
      "Alien Higgs-3",
      "Manufacturing",
      "Medical Devices"
    ]
  },
  {
    "slug": "xerafy-pico-on-plus",
    "title": "Xerafy Pico On Plus",
    "brand": "Xerafy",
    "model": "Pico On Plus",
    "sku": "Pico On Plus",
    "subtitle": "Small adhesive tag RFID Tag",
    "shortDesc": "UHF RFID metal tag offering 10 ft read range in compact 12x7x3mm size",
    "description": "Model: Pico On Plus. Brand: Xerafy. Frequency: 902-928 MHz (US) / 866-868 MHz (EU). Surface: on_metal. Form factor: Small adhesive tag. UHF RFID metal tag offering 10 ft read range in compact 12x7x3mm size",
    "customerSummary": "Small adhesive tag RFID Tag | UHF | Applications: Asset tracking, IT asset management, Blade server tracking, Small metallic objects",
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/xerafy-pico-on-plus.webp",
    "datasheet": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/xerafy-pico-on-plus-datasheet.pdf",
    "productUrl": "https://www.altis.com.tr/store/tr/urun/xerafy-pico-on-plus/",
    "frequency": "UHF",
    "frequencyBand": "902-928 MHz (US) / 866-868 MHz (EU)",
    "protocol": "EPC global Class 1 Gen2",
    "chip": "Alien Higgs-3",
    "surface": "on_metal",
    "onMetal": true,
    "formFactor": "Small adhesive tag",
    "sizeText": "12.8 x 7.08 x 3.08 mm",
    "material": "Engineering Grade Nylon Polymer / Ceramic",
    "fixedReadRange": "up to 3m on metal",
    "handheldReadRange": "Standard",
    "operatingTemp": "-30C to 85C",
    "ipRating": "IP68",
    "applications": [
      "Asset tracking",
      "IT asset management",
      "Blade server tracking",
      "Small metallic objects"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "Small adhesive tag",
      "On Metal",
      "Alien Higgs-3",
      "Asset tracking",
      "IT asset management"
    ]
  },
  {
    "slug": "xerafy-pico-x-ii-plus",
    "title": "Xerafy Pico X-II Plus",
    "brand": "Xerafy",
    "model": "Pico X-II Plus",
    "sku": "Pico X-II Plus",
    "subtitle": "Rigid tag RFID Tag",
    "shortDesc": "Compact UHF RFID metal-mount tag offering read range performance twice its size",
    "description": "Model: Pico X-II Plus. Brand: Xerafy. Frequency: 902-928 MHz (US) / 866-868 MHz (EU). Surface: on_metal. Form factor: Rigid tag. Compact UHF RFID metal-mount tag offering read range performance twice its size",
    "customerSummary": "Rigid tag RFID Tag | UHF | Applications: Asset tracking, Small metal objects, Industrial identification",
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/xerafy-pico-x-2-600x400.webp",
    "datasheet": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/xerafy-pico-x-ii-plus-datasheet.pdf",
    "productUrl": "https://www.altis.com.tr/store/tr/urun/xerafy-pico-x-ii-plus/",
    "frequency": "UHF",
    "frequencyBand": "902-928 MHz (US) / 866-868 MHz (EU)",
    "protocol": "EPC global Class 1 Gen2",
    "chip": "Alien Higgs-3",
    "surface": "on_metal",
    "onMetal": true,
    "formFactor": "Rigid tag",
    "sizeText": "17.7 x 10.9 x 5 mm",
    "material": "Engineering Grade Nylon Polymer / Ceramic",
    "fixedReadRange": "Standard",
    "handheldReadRange": "Standard",
    "operatingTemp": "-30C to 85C",
    "ipRating": "IP68",
    "applications": [
      "Asset tracking",
      "Small metal objects",
      "Industrial identification"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "Rigid tag",
      "On Metal",
      "Alien Higgs-3",
      "Asset tracking",
      "Small metal objects"
    ]
  },
  {
    "slug": "xerafy-pico-in-plus",
    "title": "Xerafy Pico-iN Plus",
    "brand": "Xerafy",
    "model": "Pico-iN Plus",
    "sku": "Pico-iN Plus",
    "subtitle": "Ultra-compact embedded tag RFID Tag",
    "shortDesc": "Ultra-compact UHF RFID metal tag for embedding in small metallic assets",
    "description": "Model: Pico-iN Plus. Brand: Xerafy. Frequency: 902-928 MHz (US) / 866-868 MHz (EU). Surface: on_metal. Form factor: Ultra-compact embedded tag. Ultra-compact UHF RFID metal tag for embedding in small metallic assets",
    "customerSummary": "Ultra-compact embedded tag RFID Tag | UHF | Applications: Aircraft components, Automotive parts, Firearms, Medical devices, Blade servers",
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/xerafy-pico-in-plus.webp",
    "datasheet": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/xerafy-pico-in-plus-datasheet.pdf",
    "productUrl": "https://www.altis.com.tr/store/tr/urun/xerafy-pico-in-plus/",
    "frequency": "UHF",
    "frequencyBand": "902-928 MHz (US) / 866-868 MHz (EU)",
    "protocol": "EPC global Class 1 Gen2",
    "chip": "Alien Higgs-3",
    "surface": "on_metal",
    "onMetal": true,
    "formFactor": "Ultra-compact embedded tag",
    "sizeText": "12.8 x 7.08 x 3.08 mm",
    "material": "Ceramic",
    "fixedReadRange": "up to 2m when embedded",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40C to 150C",
    "ipRating": "IP68",
    "applications": [
      "Aircraft components",
      "Automotive parts",
      "Firearms",
      "Medical devices",
      "Blade servers"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "Ultra-compact embedded tag",
      "On Metal",
      "Alien Higgs-3",
      "Aircraft components",
      "Automotive parts"
    ]
  },
  {
    "slug": "xerafy-roswell",
    "title": "Xerafy ROSWELL",
    "brand": "Xerafy",
    "model": "ROSWELL",
    "sku": "ROSWELL",
    "subtitle": "ULTRA-RUGGED ON-METAL RFID TAG",
    "shortDesc": "Oil & Gas, heavy industry, food processing",
    "description": "SKU: ROSWELL. Supplier: Xerafy. Category: ULTRA-RUGGED ON-METAL RFID TAG. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Heavy Duty Tag. Description: Stainless steel housing for extreme industrial environments.",
    "customerSummary": "ULTRA-RUGGED ON-METAL RFID TAG | Heavy Duty Tag | Applications: Oil & Gas, Heavy Industry",
    "image": "https://xerafy.com/wp-content/uploads/2024/06/Durable-Metal-RFID-Tag-Xerafy-ROSWELL-Autoclavable.png",
    "datasheet": "",
    "productUrl": "https://xerafy.com/roswell-series/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Alien Higgs-3",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Heavy Duty Tag",
    "sizeText": "48 x 48 x 16.3 mm",
    "material": "Stainless Steel",
    "fixedReadRange": "Up to 5m",
    "handheldReadRange": "Up to 3m",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP69K",
    "applications": [
      "Oil & Gas",
      "Heavy Industry"
    ],
    "industries": [
      "Oil & Gas",
      "Heavy Industry"
    ],
    "tags": [
      "UHF",
      "Heavy Duty Tag",
      "On Metal",
      "Alien Higgs-3",
      "Oil & Gas",
      "Heavy Industry"
    ]
  },
  {
    "slug": "xerafy-roswell-autoclavable",
    "title": "Xerafy Roswell – Autoclavable",
    "brand": "Xerafy",
    "model": "Roswell Autoclavable",
    "sku": "Roswell Autoclavable",
    "subtitle": "Cylindrical metal enclosure RFID Tag",
    "shortDesc": "Patent-pending fully metal antenna RFID tag for high-temperature sterilization environments",
    "description": "Model: Roswell Autoclavable. Brand: Xerafy. Frequency: 902-928 MHz (US) / 865-868 MHz (EU). Surface: on_metal. Form factor: Cylindrical metal enclosure. Patent-pending fully metal antenna RFID tag for high-temperature sterilization environments",
    "customerSummary": "Cylindrical metal enclosure RFID Tag | UHF | Applications: Asset tracking, High-temperature environments, Autoclavable sterilization, Heavy-duty industrial",
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/xerafy-autoclavable-roswell-600x400.webp",
    "datasheet": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/xerafy-autoclavable-roswell.pdf",
    "productUrl": "https://www.altis.com.tr/store/tr/urun/xerafy-roswell-autoclavable/",
    "frequency": "UHF",
    "frequencyBand": "902-928 MHz (US) / 865-868 MHz (EU)",
    "protocol": "EPC global Class 1 Gen2",
    "chip": "Alien Higgs-3",
    "surface": "on_metal",
    "onMetal": true,
    "formFactor": "Cylindrical metal enclosure",
    "sizeText": "48 x 28 x 13.5 mm",
    "material": "Stainless steel / Aluminum 6061-T6",
    "fixedReadRange": "up to 5m on metal",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40C to 250C",
    "ipRating": "IP68",
    "applications": [
      "Asset tracking",
      "High-temperature environments",
      "Autoclavable sterilization",
      "Heavy-duty industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "Cylindrical metal enclosure",
      "On Metal",
      "Alien Higgs-3",
      "Asset tracking",
      "High-temperature environments"
    ]
  },
  {
    "slug": "xerafy-rti-trak",
    "title": "Xerafy RTI Trak",
    "brand": "Xerafy",
    "model": "RTI Trak",
    "sku": "RTI Trak",
    "subtitle": "Rectangular tag RFID Tag",
    "shortDesc": "Linearly polarized RFID tag with Alien Higgs-3 chip, withstands 200 drop cycles at 3ft",
    "description": "Model: RTI Trak. Brand: Xerafy. Frequency: 902-928 MHz (US) / 866-868 MHz (EU). Surface: on_metal. Form factor: Rectangular tag. Linearly polarized RFID tag with Alien Higgs-3 chip, withstands 200 drop cycles at 3ft",
    "customerSummary": "Rectangular tag RFID Tag | UHF | Applications: Asset tracking, Real-time item identification, Durable environment deployments",
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/xerafy-rti-trak.webp",
    "datasheet": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/xerafy-rti-trak-datasheet.pdf",
    "productUrl": "https://www.altis.com.tr/store/tr/urun/xerafy-rti-trak/",
    "frequency": "UHF",
    "frequencyBand": "902-928 MHz (US) / 866-868 MHz (EU)",
    "protocol": "EPC global Class 1 Gen2",
    "chip": "Alien Higgs-3",
    "surface": "on_metal",
    "onMetal": true,
    "formFactor": "Rectangular tag",
    "sizeText": "73.3 x 22.8 x 8.3 mm",
    "material": "Industrial polymer",
    "fixedReadRange": "up to 8m on metal",
    "handheldReadRange": "up to 4m off metal",
    "operatingTemp": "-40C to 85C",
    "ipRating": "IP68",
    "applications": [
      "Asset tracking",
      "Real-time item identification",
      "Durable environment deployments"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "Rectangular tag",
      "On Metal",
      "Alien Higgs-3",
      "Asset tracking",
      "Real-time item identification"
    ]
  },
  {
    "slug": "xerafy-rti-outdoor",
    "title": "Xerafy RTI-OUTDOOR",
    "brand": "Xerafy",
    "model": "RTI-OUTDOOR",
    "sku": "RTI-OUTDOOR",
    "subtitle": "RFID TAG/LABEL VARIATION",
    "shortDesc": "Industrial tracking",
    "description": "SKU: RTI-OUTDOOR. Supplier: Xerafy. Category: RFID TAG/LABEL VARIATION. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Standard. Description: Variation of Xerafy RTI series.",
    "customerSummary": "RFID TAG/LABEL VARIATION | Standard | Applications: Industrial",
    "image": "https://xerafy.com/wp-content/uploads/2025/03/RTI-OUTDOOR-U9xe-for-RTI-Visibility1.png",
    "datasheet": "",
    "productUrl": "https://xerafy.com/rfid-tags-and-labels/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Alien Higgs-3",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Standard",
    "sizeText": "Standard",
    "material": "Standard",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "Standard",
      "On Metal",
      "Alien Higgs-3",
      "Industrial"
    ]
  },
  {
    "slug": "xerafy-slim-trak",
    "title": "Xerafy SLIM-TRAK",
    "brand": "Xerafy",
    "model": "SLIM-TRAK",
    "sku": "SLIM-TRAK",
    "subtitle": "SLIM PROFILE RFID TAG",
    "shortDesc": "IT asset management, weapon tracking",
    "description": "SKU: SLIM-TRAK. Supplier: Xerafy. Category: SLIM PROFILE RFID TAG. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Slim Tag. Description: Slim profile for IT assets and military equipment.",
    "customerSummary": "SLIM PROFILE RFID TAG | Slim Tag | Applications: IT Assets, Military",
    "image": "https://xerafy.com/wp-content/uploads/2023/02/Slim-Trak-H9-b.png",
    "datasheet": "",
    "productUrl": "https://xerafy.com/trak-series/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Alien Higgs-3",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Slim Tag",
    "sizeText": "56.5 x 13 x 5 mm",
    "material": "High-temp polymer",
    "fixedReadRange": "Up to 2m",
    "handheldReadRange": "Up to 1.5m",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP68",
    "applications": [
      "IT Assets",
      "Military"
    ],
    "industries": [
      "IT Assets",
      "Military"
    ],
    "tags": [
      "UHF",
      "Slim Tag",
      "On Metal",
      "Alien Higgs-3",
      "IT Assets",
      "Military"
    ]
  },
  {
    "slug": "xerafy-tex-50x12",
    "title": "Xerafy TEX-50X12",
    "brand": "Xerafy",
    "model": "TEX-50X12",
    "sku": "TEX-50X12",
    "subtitle": "RFID TAG/LABEL VARIATION",
    "shortDesc": "Industrial tracking",
    "description": "SKU: TEX-50X12. Supplier: Xerafy. Category: RFID TAG/LABEL VARIATION. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Standard. Description: Variation of Xerafy TEX series.",
    "customerSummary": "RFID TAG/LABEL VARIATION | Standard | Applications: Industrial",
    "image": "https://xerafy.com/wp-content/uploads/2026/03/TEX-50x12-EECC-logo-2603.png",
    "datasheet": "",
    "productUrl": "https://xerafy.com/rfid-tags-and-labels/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Alien Higgs-3",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Standard",
    "sizeText": "50 x 12 x 0.66 mm",
    "material": "Standard",
    "fixedReadRange": "Up to 6m",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "Standard",
      "On Metal",
      "Alien Higgs-3",
      "Industrial"
    ]
  },
  {
    "slug": "xerafy-tex-55x12-silicone",
    "title": "Xerafy TEX-55X12-SILICONE",
    "brand": "Xerafy",
    "model": "TEX-55X12-SILICONE",
    "sku": "TEX-55X12-SILICONE",
    "subtitle": "RFID TAG/LABEL VARIATION",
    "shortDesc": "Industrial tracking",
    "description": "SKU: TEX-55X12-SILICONE. Supplier: Xerafy. Category: RFID TAG/LABEL VARIATION. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Standard. Description: Variation of Xerafy TEX series.",
    "customerSummary": "RFID TAG/LABEL VARIATION | Standard | Applications: Industrial",
    "image": "https://xerafy.com/wp-content/uploads/2023/12/Silicone-laundry-logo-2.png",
    "datasheet": "",
    "productUrl": "https://xerafy.com/rfid-tags-and-labels/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Alien Higgs-3",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Standard",
    "sizeText": "55 x 12 x 2.5 mm",
    "material": "Standard",
    "fixedReadRange": "Up to 6m",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "Standard",
      "On Metal",
      "Alien Higgs-3",
      "Industrial"
    ]
  },
  {
    "slug": "xerafy-tex-70x15",
    "title": "Xerafy TEX-70X15",
    "brand": "Xerafy",
    "model": "TEX-70X15",
    "sku": "TEX-70X15",
    "subtitle": "LAUNDRY RFID TAG",
    "shortDesc": "Medical scrubs, hospital linens, uniforms",
    "description": "SKU: TEX-70X15. Supplier: Xerafy. Category: LAUNDRY RFID TAG. Frequency: UHF 860-960 MHz (Global). Non-metal surface application. Form factor: Textile Tag. Description: Textile tag for medical scrubs and linens.",
    "customerSummary": "LAUNDRY RFID TAG | Textile Tag | Applications: Laundry, Healthcare",
    "image": "https://xerafy.com/wp-content/uploads/2026/03/TEX-70x15-EECC-logo-2603.png",
    "datasheet": "",
    "productUrl": "https://xerafy.com/rfid-tags-and-labels/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Impinj M830",
    "surface": "non_metal",
    "onMetal": false,
    "formFactor": "Textile Tag",
    "sizeText": "70 x 15 x 0.7 mm",
    "material": "Textile",
    "fixedReadRange": "Limited",
    "handheldReadRange": "Up to 10m",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP68",
    "applications": [
      "Laundry",
      "Healthcare"
    ],
    "industries": [
      "Laundry",
      "Healthcare"
    ],
    "tags": [
      "UHF",
      "Textile Tag",
      "Non Metal",
      "Impinj M830",
      "Laundry",
      "Healthcare"
    ]
  },
  {
    "slug": "xerafy-tex-70x22-roll",
    "title": "Xerafy TEX-70X22-ROLL",
    "brand": "Xerafy",
    "model": "TEX-70X22-ROLL",
    "sku": "TEX-70X22-ROLL",
    "subtitle": "RFID TAG/LABEL VARIATION",
    "shortDesc": "Industrial tracking",
    "description": "SKU: TEX-70X22-ROLL. Supplier: Xerafy. Category: RFID TAG/LABEL VARIATION. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Standard. Description: Variation of Xerafy TEX series.",
    "customerSummary": "RFID TAG/LABEL VARIATION | Standard | Applications: Industrial",
    "image": "https://xerafy.com/wp-content/uploads/2026/03/70x22-Roll-EECC-logo-2603.png",
    "datasheet": "",
    "productUrl": "https://xerafy.com/rfid-tags-and-labels/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Alien Higgs-3",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Standard",
    "sizeText": "70 x 22 x 0.65 mm",
    "material": "Standard",
    "fixedReadRange": "Up to 6m",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "Standard",
      "On Metal",
      "Alien Higgs-3",
      "Industrial"
    ]
  },
  {
    "slug": "xerafy-versa-trak",
    "title": "Xerafy VERSA-TRAK",
    "brand": "Xerafy",
    "model": "VERSA-TRAK",
    "sku": "VERSA-TRAK",
    "subtitle": "RFID TAG/LABEL VARIATION",
    "shortDesc": "Industrial tracking",
    "description": "SKU: VERSA-TRAK. Supplier: Xerafy. Category: RFID TAG/LABEL VARIATION. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Standard. Description: Variation of Xerafy VERSA series.",
    "customerSummary": "RFID TAG/LABEL VARIATION | Standard | Applications: Industrial",
    "image": "https://xerafy.com/wp-content/uploads/2024/06/Xerafy-Versa-TRAK-RFID-Tag-for-Versatile-Options-Tracking.png",
    "datasheet": "",
    "productUrl": "https://xerafy.com/rfid-tags-and-labels/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Alien Higgs-3",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Standard",
    "sizeText": "Standard",
    "material": "Standard",
    "fixedReadRange": "Up to 9m",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "Standard",
      "On Metal",
      "Alien Higgs-3",
      "Industrial"
    ]
  },
  {
    "slug": "xerafy-xense-strain",
    "title": "Xerafy XENSE-STRAIN",
    "brand": "Xerafy",
    "model": "XENSE-STRAIN",
    "sku": "XENSE-STRAIN",
    "subtitle": "RFID TAG/LABEL VARIATION",
    "shortDesc": "Industrial tracking",
    "description": "SKU: XENSE-STRAIN. Supplier: Xerafy. Category: RFID TAG/LABEL VARIATION. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Standard. Description: Variation of Xerafy XENSE series.",
    "customerSummary": "RFID TAG/LABEL VARIATION | Standard | Applications: Industrial",
    "image": "https://xerafy.com/wp-content/uploads/2023/12/XENSE-Strain-Xerafy.png",
    "datasheet": "",
    "productUrl": "https://xerafy.com/rfid-tags-and-labels/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Alien Higgs-3",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Standard",
    "sizeText": "131.6 x 30.8 x 7.5 mm",
    "material": "Standard",
    "fixedReadRange": "Up to 1.5m",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "Standard",
      "On Metal",
      "Alien Higgs-3",
      "Industrial"
    ]
  },
  {
    "slug": "xerafy-xense-temp",
    "title": "Xerafy XENSE-TEMP",
    "brand": "Xerafy",
    "model": "XENSE-TEMP",
    "sku": "XENSE-TEMP",
    "subtitle": "PASSIVE TEMPERATURE SENSOR TAG",
    "shortDesc": "Concrete curing, infrastructure monitoring",
    "description": "SKU: XENSE-TEMP. Supplier: Xerafy. Category: PASSIVE TEMPERATURE SENSOR TAG. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Sensor Tag. Description: Battery-free temperature monitoring for industrial assets.",
    "customerSummary": "PASSIVE TEMPERATURE SENSOR TAG | Sensor Tag | Applications: Sensors, Infrastructure",
    "image": "https://xerafy.com/wp-content/uploads/2022/08/Temp-Concrete-2.png",
    "datasheet": "",
    "productUrl": "https://xerafy.com/xense-series/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Asygn AS3211",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Sensor Tag",
    "sizeText": "100 x 26 x 8.9 mm",
    "material": "Industry grade polymer",
    "fixedReadRange": "Up to 2m",
    "handheldReadRange": "Up to 1.5m",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP68",
    "applications": [
      "Sensors",
      "Infrastructure"
    ],
    "industries": [
      "Sensors",
      "Infrastructure"
    ],
    "tags": [
      "UHF",
      "Sensor Tag",
      "On Metal",
      "Asygn AS3211",
      "Sensors",
      "Infrastructure"
    ]
  },
  {
    "slug": "xerafy-xplate",
    "title": "Xerafy XPLATE",
    "brand": "Xerafy",
    "model": "XPLATE",
    "sku": "XPLATE",
    "subtitle": "RFID TAG/LABEL VARIATION",
    "shortDesc": "Industrial tracking",
    "description": "SKU: XPLATE. Supplier: Xerafy. Category: RFID TAG/LABEL VARIATION. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Standard. Description: Variation of Xerafy XPLATE series.",
    "customerSummary": "RFID TAG/LABEL VARIATION | Standard | Applications: Industrial",
    "image": "https://xerafy.com/wp-content/uploads/2024/06/Smart-RFID-Nameplate-Xerafy-XPLATE.png",
    "datasheet": "",
    "productUrl": "https://xerafy.com/rfid-tags-and-labels/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Alien Higgs-3",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Standard",
    "sizeText": "Standard",
    "material": "Standard",
    "fixedReadRange": "Up to 10m",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "Standard",
      "On Metal",
      "Alien Higgs-3",
      "Industrial"
    ]
  },
  {
    "slug": "xerafy-xplorer-downhole",
    "title": "Xerafy Xplorer Downhole",
    "brand": "Xerafy",
    "model": "Xplorer Downhole",
    "sku": "Xplorer Downhole",
    "subtitle": "Metal enclosure RFID Tag",
    "shortDesc": "RFID tag designed for downhole operations in oil and gas wells, withstanding extreme conditions",
    "description": "Model: Xplorer Downhole. Brand: Xerafy. Frequency: 902-928 MHz (US) / 865-868 MHz (EU). Surface: on_metal. Form factor: Metal enclosure. RFID tag designed for downhole operations in oil and gas wells, withstanding extreme conditions",
    "customerSummary": "Metal enclosure RFID Tag | UHF | Applications: Downhole operations, Oil and gas well tracking, High-pressure environments",
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/xerafy-xplorer-downhole-600x400.webp",
    "datasheet": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/xerafy-xplorer-downhole-datasheet.pdf",
    "productUrl": "https://www.altis.com.tr/store/tr/urun/xerafy-xplorer-downhole/",
    "frequency": "UHF",
    "frequencyBand": "902-928 MHz (US) / 865-868 MHz (EU)",
    "protocol": "EPC global Class 1 Gen2",
    "chip": "Alien Higgs-3",
    "surface": "on_metal",
    "onMetal": true,
    "formFactor": "Metal enclosure",
    "sizeText": "28.3 x 8.5 mm",
    "material": "Stainless steel",
    "fixedReadRange": "up to 1.5m on metal",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40C to 250C",
    "ipRating": "IP69K",
    "applications": [
      "Downhole operations",
      "Oil and gas well tracking",
      "High-pressure environments"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "Metal enclosure",
      "On Metal",
      "Alien Higgs-3",
      "Downhole operations",
      "Oil and gas well tracking"
    ]
  },
  {
    "slug": "xerafy-xplorer-screw",
    "title": "Xerafy XPLORER-SCREW",
    "brand": "Xerafy",
    "model": "XPLORER-SCREW",
    "sku": "XPLORER-SCREW",
    "subtitle": "RFID TAG/LABEL VARIATION",
    "shortDesc": "Industrial tracking",
    "description": "SKU: XPLORER-SCREW. Supplier: Xerafy. Category: RFID TAG/LABEL VARIATION. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Standard. Description: Variation of Xerafy XPLORER series.",
    "customerSummary": "RFID TAG/LABEL VARIATION | Standard | Applications: Industrial",
    "image": "https://xerafy.com/wp-content/uploads/2025/08/XPLORER-Screw-600x600-1.png",
    "datasheet": "",
    "productUrl": "https://xerafy.com/rfid-tags-and-labels/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Alien Higgs-3",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Standard",
    "sizeText": "17 mm (round)",
    "material": "Standard",
    "fixedReadRange": "Up to 5m",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "Standard",
      "On Metal",
      "Alien Higgs-3",
      "Industrial"
    ]
  },
  {
    "slug": "xerafy-xplorer-surface",
    "title": "Xerafy XPLORER-SURFACE",
    "brand": "Xerafy",
    "model": "XPLORER-SURFACE",
    "sku": "XPLORER-SURFACE",
    "subtitle": "EMBEDDABLE DOWNHOLE RFID TAG",
    "shortDesc": "Oil & Gas pipes, heavy equipment",
    "description": "SKU: XPLORER-SURFACE. Supplier: Xerafy. Category: EMBEDDABLE DOWNHOLE RFID TAG. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Embeddable Tag. Description: Designed for oil and gas pipe management.",
    "customerSummary": "EMBEDDABLE DOWNHOLE RFID TAG | Embeddable Tag | Applications: Oil & Gas, Mining",
    "image": "https://xerafy.com/wp-content/uploads/2024/08/Rugged-Embeddable-RFID-Tag-Xerafy-XPLORER-Surface.png",
    "datasheet": "",
    "productUrl": "https://xerafy.com/rfid-tags-and-labels/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Alien Higgs-3",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Embeddable Tag",
    "sizeText": "28.3 mm (round)",
    "material": "Stainless steel 316L",
    "fixedReadRange": "Up to 1.5m",
    "handheldReadRange": "Up to 1m",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP68",
    "applications": [
      "Oil & Gas",
      "Mining"
    ],
    "industries": [
      "Oil & Gas",
      "Mining"
    ],
    "tags": [
      "UHF",
      "Embeddable Tag",
      "On Metal",
      "Alien Higgs-3",
      "Oil & Gas",
      "Mining"
    ]
  },
  {
    "slug": "xerafy-xs-dash-on",
    "title": "Xerafy XS Dash On",
    "brand": "Xerafy",
    "model": "XS Dash On",
    "sku": "XS Dash On",
    "subtitle": "Tag RFID Tag",
    "shortDesc": "High-performance RFID metal tag for medical device tracking and FDA UDI compliance with ATEX certification",
    "description": "Model: XS Dash On. Brand: Xerafy. Frequency: 902-928 MHz (US) / 866-868 MHz (EU). Surface: on_metal. Form factor: Tag. High-performance RFID metal tag for medical device tracking and FDA UDI compliance with ATEX certification",
    "customerSummary": "Tag RFID Tag | UHF | Applications: Medical device tracking, FDA UDI compliance, Foreign object detection, Infection management",
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/xerafy-dash-on-xs-3-600x400.webp",
    "datasheet": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/xerafy-xs-dash-on-datasheet.pdf",
    "productUrl": "https://www.altis.com.tr/store/tr/urun/xerafy-xs-dash-on/",
    "frequency": "UHF",
    "frequencyBand": "902-928 MHz (US) / 866-868 MHz (EU)",
    "protocol": "EPC global Class 1 Gen 2",
    "chip": "Alien Higgs-3",
    "surface": "on_metal",
    "onMetal": true,
    "formFactor": "Tag",
    "sizeText": "12.3 x 3 x 2.2 mm",
    "material": "Ceramic",
    "fixedReadRange": "up to 2m on metal",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40C to 150C",
    "ipRating": "IP68",
    "applications": [
      "Medical device tracking",
      "FDA UDI compliance",
      "Foreign object detection",
      "Infection management"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "Tag",
      "On Metal",
      "Alien Higgs-3",
      "Medical device tracking",
      "FDA UDI compliance"
    ]
  },
  {
    "slug": "xerafy-xs-dot-on",
    "title": "Xerafy XS Dot On",
    "brand": "Xerafy",
    "model": "XS Dot On",
    "sku": "XS Dot On",
    "subtitle": "Circular disc RFID Tag",
    "shortDesc": "World's smallest form factor RFID tag for critical industrial applications, ATEX certified and FDA approved",
    "description": "Model: XS Dot On. Brand: Xerafy. Frequency: 902-928 MHz (US) / 866-868 MHz (EU). Surface: on_metal. Form factor: Circular disc. World's smallest form factor RFID tag for critical industrial applications, ATEX certified and FDA approved",
    "customerSummary": "Circular disc RFID Tag | UHF | Applications: Small metallic device tracking, High-temperature environments, Industrial applications",
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/xerafy-xs-dot-on-1-600x400.webp",
    "datasheet": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/xerafy-xs-dot-on-datasheet.pdf",
    "productUrl": "https://www.altis.com.tr/store/tr/urun/xerafy-xs-dot-on/",
    "frequency": "UHF",
    "frequencyBand": "902-928 MHz (US) / 866-868 MHz (EU)",
    "protocol": "EPC global Class 1 Gen2",
    "chip": "Alien Higgs-3",
    "surface": "on_metal",
    "onMetal": true,
    "formFactor": "Circular disc",
    "sizeText": "6 x 2.5 mm",
    "material": "Ceramic",
    "fixedReadRange": "up to 1.5m on metal",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40C to 150C",
    "ipRating": "IP68",
    "applications": [
      "Small metallic device tracking",
      "High-temperature environments",
      "Industrial applications"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "Circular disc",
      "On Metal",
      "Alien Higgs-3",
      "Small metallic device tracking",
      "High-temperature environments"
    ]
  },
  {
    "slug": "xerafy-xs-dot-wedge",
    "title": "Xerafy XS Dot Wedge",
    "brand": "Xerafy",
    "model": "XS Dot Wedge",
    "sku": "XS Dot Wedge",
    "subtitle": "Wedge RFID Tag",
    "shortDesc": "High-performance polymer RFID tag for extreme environments with exceptional chemical and UV resistance",
    "description": "Model: XS Dot Wedge. Brand: Xerafy. Frequency: 902-928 MHz (US) / 865-868 MHz (EU). Surface: on_metal. Form factor: Wedge. High-performance polymer RFID tag for extreme environments with exceptional chemical and UV resistance",
    "customerSummary": "Wedge RFID Tag | UHF | Applications: Asset tracking, Industrial environments, High-temperature applications",
    "image": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/xerafy-dot-on-wedge-600x400.webp",
    "datasheet": "https://www.altis.com.tr/store/wp-content/uploads/2022/01/xerafy-xs-dot-wedge.pdf",
    "productUrl": "https://www.altis.com.tr/store/tr/urun/xerafy-xs-dot-wedge/",
    "frequency": "UHF",
    "frequencyBand": "902-928 MHz (US) / 865-868 MHz (EU)",
    "protocol": "EPC global Class 1 Gen2",
    "chip": "Alien Higgs-3",
    "surface": "on_metal",
    "onMetal": true,
    "formFactor": "Wedge",
    "sizeText": "10.3 x 4.6 mm",
    "material": "High Performance Engineering Polymer",
    "fixedReadRange": "up to 1m on metal",
    "handheldReadRange": "Standard",
    "operatingTemp": "-50C to 220C",
    "ipRating": "IP68",
    "applications": [
      "Asset tracking",
      "Industrial environments",
      "High-temperature applications"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "Wedge",
      "On Metal",
      "Alien Higgs-3",
      "Asset tracking",
      "Industrial environments"
    ]
  },
  {
    "slug": "xerafy-xs-dash",
    "title": "Xerafy XS-DASH",
    "brand": "Xerafy",
    "model": "XS-DASH",
    "sku": "XS-DASH",
    "subtitle": "WORLD SMALLEST ON-METAL RFID TAG",
    "shortDesc": "Hand tools, weapon management",
    "description": "SKU: XS-DASH. Supplier: Xerafy. Category: WORLD SMALLEST ON-METAL RFID TAG. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Ceramic Tag. Description: One of the world's smallest rugged RFID tags for small metal assets.",
    "customerSummary": "WORLD SMALLEST ON-METAL RFID TAG | Ceramic Tag | Applications: Hand Tools, Weapon Management",
    "image": "https://xerafy.com/wp-content/uploads/2024/08/Smaller-Rugged-RFID-Tag-For-Critical-Tools-Xerafy-XS-Dash.png",
    "datasheet": "",
    "productUrl": "https://xerafy.com/xs-series/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Alien Higgs-3",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Ceramic Tag",
    "sizeText": "12.3 x 3 x 2.2 mm",
    "material": "Ceramic",
    "fixedReadRange": "Up to 2m",
    "handheldReadRange": "Up to 1.5m",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP68",
    "applications": [
      "Hand Tools",
      "Weapon Management"
    ],
    "industries": [
      "Hand Tools",
      "Weapon Management"
    ],
    "tags": [
      "UHF",
      "Ceramic Tag",
      "On Metal",
      "Alien Higgs-3",
      "Hand Tools",
      "Weapon Management"
    ]
  },
  {
    "slug": "xerafy-xs-dot",
    "title": "Xerafy XS-DOT",
    "brand": "Xerafy",
    "model": "XS-DOT",
    "sku": "XS-DOT",
    "subtitle": "SMALLEST ROUND ON-METAL RFID TAG",
    "shortDesc": "Small tools, MRO tool control",
    "description": "SKU: XS-DOT. Supplier: Xerafy. Category: SMALLEST ROUND ON-METAL RFID TAG. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Ceramic Tag. Description: Round form factor for discreet placement on small tools.",
    "customerSummary": "SMALLEST ROUND ON-METAL RFID TAG | Ceramic Tag | Applications: Small Tools, MRO",
    "image": "https://xerafy.com/wp-content/uploads/2022/08/XS-Dot.png",
    "datasheet": "",
    "productUrl": "https://xerafy.com/xs-series/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Alien Higgs-3",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Ceramic Tag",
    "sizeText": "6 x 6 x 4 mm",
    "material": "Ceramic",
    "fixedReadRange": "Up to 1.5m",
    "handheldReadRange": "Up to 1m",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP68",
    "applications": [
      "Small Tools",
      "MRO"
    ],
    "industries": [
      "Small Tools",
      "MRO"
    ],
    "tags": [
      "UHF",
      "Ceramic Tag",
      "On Metal",
      "Alien Higgs-3",
      "Small Tools",
      "MRO"
    ]
  },
  {
    "slug": "xerafy-xs-wedge",
    "title": "Xerafy XS-WEDGE",
    "brand": "Xerafy",
    "model": "XS-WEDGE",
    "sku": "XS-WEDGE",
    "subtitle": "RFID TAG/LABEL VARIATION",
    "shortDesc": "Industrial tracking",
    "description": "SKU: XS-WEDGE. Supplier: Xerafy. Category: RFID TAG/LABEL VARIATION. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Standard. Description: Variation of Xerafy XS series.",
    "customerSummary": "RFID TAG/LABEL VARIATION | Standard | Applications: Industrial",
    "image": "https://xerafy.com/wp-content/uploads/2022/08/XS-Wedge.png",
    "datasheet": "",
    "productUrl": "https://xerafy.com/rfid-tags-and-labels/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Alien Higgs-3",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Standard",
    "sizeText": "10.3 mm (round)",
    "material": "Standard",
    "fixedReadRange": "Up to 1m",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "Standard",
      "On Metal",
      "Alien Higgs-3",
      "Industrial"
    ]
  },
  {
    "slug": "xerafy-xskin-gamma",
    "title": "Xerafy XSKIN-GAMMA",
    "brand": "Xerafy",
    "model": "XSKIN-GAMMA",
    "sku": "XSKIN-GAMMA",
    "subtitle": "RFID TAG/LABEL VARIATION",
    "shortDesc": "Industrial tracking",
    "description": "SKU: XSKIN-GAMMA. Supplier: Xerafy. Category: RFID TAG/LABEL VARIATION. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Standard. Description: Variation of Xerafy XSKIN series.",
    "customerSummary": "RFID TAG/LABEL VARIATION | Standard | Applications: Industrial",
    "image": "https://xerafy.com/wp-content/uploads/2025/06/Xerafy-XSKIN-Gamma-RFID-Label-s.png",
    "datasheet": "",
    "productUrl": "https://xerafy.com/rfid-tags-and-labels/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Alien Higgs-3",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Standard",
    "sizeText": "73 x 20 x 0.16 mm",
    "material": "Standard",
    "fixedReadRange": "Up to 16m",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "Standard",
      "On Metal",
      "Alien Higgs-3",
      "Industrial"
    ]
  },
  {
    "slug": "xerafy-xskin-theta",
    "title": "Xerafy XSKIN-THETA",
    "brand": "Xerafy",
    "model": "XSKIN-THETA",
    "sku": "XSKIN-THETA",
    "subtitle": "RFID TAG/LABEL VARIATION",
    "shortDesc": "Industrial tracking",
    "description": "SKU: XSKIN-THETA. Supplier: Xerafy. Category: RFID TAG/LABEL VARIATION. Frequency: UHF 860-960 MHz (Global). On-metal surface application. Form factor: Standard. Description: Variation of Xerafy XSKIN series.",
    "customerSummary": "RFID TAG/LABEL VARIATION | Standard | Applications: Industrial",
    "image": "https://www.barcodefactory.com/images/product/large/xerafy-theta-inlay.png",
    "datasheet": "",
    "productUrl": "https://xerafy.com/rfid-tags-and-labels/",
    "frequency": "UHF",
    "frequencyBand": "860-960 MHz (Global)",
    "protocol": "EPC Class 1 Gen 2",
    "chip": "Alien Higgs-3",
    "surface": "metal",
    "onMetal": true,
    "formFactor": "Standard",
    "sizeText": "71 x 11 x 0.13 mm",
    "material": "Standard",
    "fixedReadRange": "Up to 9m",
    "handheldReadRange": "Standard",
    "operatingTemp": "-40°C to +85°C",
    "ipRating": "IP68",
    "applications": [
      "Industrial"
    ],
    "industries": [
      "Industrial"
    ],
    "tags": [
      "UHF",
      "Standard",
      "On Metal",
      "Alien Higgs-3",
      "Industrial"
    ]
  }
];

const localDatasheetSlugs = new Set([
  'alien-aln-9654',
  'alien-aln-9654-4x2',
  'altis-pvc-rti-label',
  'confidex-carrier-classic',
  'confidex-carrier-dual',
  'confidex-carrier-hf',
  'confidex-carrier-klt',
  'confidex-carrier-pro',
  'confidex-carrier-tough-slim',
  'confidex-casey',
  'confidex-crosswave-classic',
  'confidex-crosswave-neo',
  'confidex-crosswave-neo-4x6',
  'confidex-cruiser-headlamp',
  'confidex-cruiser-windshield',
  'confidex-cruiser-windshield-crypto',
  'confidex-ferrowave-classic',
  'confidex-ferrowave-micro',
  'confidex-heatwave-flag',
  'confidex-heatwave-tough',
  'confidex-ironside-classic',
  'confidex-ironside-flag',
  'confidex-ironside-micro',
  'confidex-ironside-micro-nfc',
  'confidex-ironside-plate',
  'confidex-ironside-slim',
  'confidex-leaf',
  'confidex-looptag',
  'confidex-steelwave-classic',
  'confidex-steelwave-micro-ii',
  'avery-ad-141-u9',
  'avery-ad-163u8',
  'avery-ad-164-u9',
  'avery-ad-183-u9',
  'avery-ad-192-m730',
  'avery-ad-229r6-p',
  'avery-dennison-ad-238u8',
  'avery-ad-239-m730',
  'avery-ad-23x-u9',
  'avery-ad-23x-u9-pure-95',
  'avery-ad-23x-u9-slim',
  'avery-dennison-ad-324u8',
  'avery-dennison-ad-385u8',
  'avery-dennison-ad-sample-pack',
  'brady-tht-nfc-pet-25x25',
  'brady-tht-uhf-pet-64x6',
  'brady-tht-df-423-33x17',
  'brady-tht-df-423-66x46',
  'brady-tht-nfc-423-50x40',
  'brady-tht-uhf-423-53x26',
  'brady-tht-uhf-423-93x26',
  'brady-tht-uhf-b481-24x16',
  'brady-tht-uhf-7425-45x30',
  'brady-tht-uhf-7425-53x26',
  'omni-id-adept-400-5-layer-gs',
  'omni-id-adept-400-5-layer-us',
  'omni-id-adept-500-gs',
  'omni-id-exo-400-ht',
  'omni-id-fit-220-ht',
  'omni-id-fit-400-ht',
  'omni-id-fit-400p',
  'omni-id-iq-400p-ht',
  'omni-id-iq-800p-ht',
  'omni-id-sense-asset-xl',
  'omni-id-sense-shield',
]);

const localImageExtensions: Record<string, string> = {
  'alien-aln-9654': 'webp',
  'alien-aln-9654-4x2': 'webp',
  'altis-pvc-rti-label': 'webp',
  'confidex-carrier-classic': 'webp',
  'confidex-carrier-dual': 'webp',
  'confidex-carrier-hf': 'webp',
  'confidex-carrier-klt': 'webp',
  'confidex-carrier-pro': 'webp',
  'confidex-carrier-tough-slim': 'webp',
  'confidex-casey': 'webp',
  'confidex-crosswave-classic': 'webp',
  'confidex-crosswave-neo': 'webp',
  'confidex-crosswave-neo-4x6': 'webp',
  'confidex-cruiser-headlamp': 'webp',
  'confidex-cruiser-windshield': 'webp',
  'confidex-cruiser-windshield-crypto': 'webp',
  'confidex-ferrowave-classic': 'webp',
  'confidex-ferrowave-micro': 'webp',
  'confidex-heatwave-flag': 'webp',
  'confidex-heatwave-tough': 'webp',
  'confidex-ironside-classic': 'webp',
  'confidex-ironside-flag': 'webp',
  'confidex-ironside-micro': 'webp',
  'confidex-ironside-micro-nfc': 'webp',
  'confidex-ironside-plate': 'webp',
  'confidex-ironside-slim': 'webp',
  'confidex-leaf': 'webp',
  'confidex-looptag': 'webp',
  'confidex-steelwave-classic': 'webp',
  'confidex-steelwave-micro-ii': 'webp',
  'avery-ad-141-u9': 'png',
  'avery-ad-163u8': 'png',
  'avery-ad-164-u9': 'png',
  'avery-ad-183-u9': 'png',
  'avery-ad-192-m730': 'png',
  'avery-ad-229r6-p': 'png',
  'avery-dennison-ad-238u8': 'webp',
  'avery-ad-239-m730': 'png',
  'avery-ad-23x-u9': 'png',
  'avery-ad-23x-u9-pure-95': 'png',
  'avery-ad-23x-u9-slim': 'png',
  'avery-dennison-ad-324u8': 'webp',
  'avery-dennison-ad-385u8': 'webp',
  'avery-dennison-ad-sample-pack': 'webp',
  'brady-tht-nfc-pet-25x25': 'webp',
  'brady-tht-uhf-pet-64x6': 'webp',
  'brady-tht-df-423-33x17': 'webp',
  'brady-tht-df-423-66x46': 'webp',
  'brady-tht-nfc-423-50x40': 'webp',
  'brady-tht-uhf-423-53x26': 'webp',
  'brady-tht-uhf-423-93x26': 'webp',
  'brady-tht-uhf-b481-24x16': 'webp',
  'brady-tht-uhf-7425-45x30': 'webp',
  'brady-tht-uhf-7425-53x26': 'webp',
  'omni-id-adept-400-5-layer-gs': 'webp',
  'omni-id-adept-400-5-layer-us': 'webp',
  'omni-id-adept-500-gs': 'webp',
  'omni-id-exo-400-ht': 'webp',
  'omni-id-fit-220-ht': 'webp',
  'omni-id-fit-400-ht': 'webp',
  'omni-id-fit-400p': 'webp',
  'omni-id-iq-400p-ht': 'webp',
  'omni-id-iq-800p-ht': 'webp',
  'omni-id-sense-asset-xl': 'webp',
  'omni-id-sense-shield': 'webp',
};

const localGalleryCounts: Record<string, number> = {
  'alien-aln-9654-4x2': 3,
  'altis-pvc-rti-label': 5,
  'confidex-carrier-dual': 3,
  'confidex-cruiser-windshield': 4,
  'confidex-ironside-slim': 2,
  'brady-tht-df-423-33x17': 2,
  'brady-tht-df-423-66x46': 2,
  'brady-tht-uhf-423-53x26': 2,
  'brady-tht-uhf-7425-45x30': 2,
  'brady-tht-uhf-7425-53x26': 2,
};

const confidexTurkishCopy: Record<string, { title?: string; shortDesc: string; description?: string; applications?: string[] }> = {
  'confidex-carrier-classic': { title: 'Confidex Carrier Classic RFID Etiketi (Monza 4QT)', shortDesc: 'Confidex Carrier Classic RFID Etiketi (Monza 4QT) plastik y\u00fczeyler i\u00e7in tasarlanm\u0131\u015f, yap\u0131\u015fkanl\u0131 ve suya dayan\u0131kl\u0131 UHF RFID etiketi burada!', description: 'Confidex Carrier Classic RFID Etiketi (Monza 4QT) plastik y\u00fczeyler i\u00e7in tasarlanm\u0131\u015f, yap\u0131\u015fkanl\u0131 ve suya dayan\u0131kl\u0131 UHF RFID etiketi burada!' },
  'confidex-carrier-dual': { title: 'Confidex Carrier Dual Etiket', shortDesc: 'Tedarik zinciri y\u00f6netimi ve envanter say\u0131m\u0131 i\u00e7in uzun menzilli bir okuma imkan\u0131 sunan Confidex Carrier Dual RFID Etiket \u015fimdi stoklar\u0131m\u0131zda!', description: 'Tedarik zinciri y\u00f6netimi ve envanter say\u0131m\u0131 i\u00e7in uzun menzilli bir okuma imkan\u0131 sunan Confidex Carrier Dual RFID Etiket \u015fimdi stoklar\u0131m\u0131zda!' },
  'confidex-carrier-hf': { title: 'Confidex Carrier HF', shortDesc: 'Confidex Carrier HF y\u0131kanabilir, iade edilebilir ta\u015f\u0131ma \u00fcr\u00fcnleri i\u00e7in yaz\u0131c\u0131 uyumlu bir NFC ve HF RFID etiketidir.', description: 'Confidex Carrier HF y\u0131kanabilir, iade edilebilir ta\u015f\u0131ma \u00fcr\u00fcnleri i\u00e7in yaz\u0131c\u0131 uyumlu bir NFC ve HF RFID etiketidir.' },
  'confidex-carrier-klt': { title: 'Confidex Carrier KLT Etiket', shortDesc: 'Confidex Carrier KLT Etiket \u00e7e\u015fitli plastik kap t\u00fcrlerine \u00f6zel, otomotiv end\u00fcstrisi uygulamalar\u0131 i\u00e7in tasarlanm\u0131\u015f yap\u0131\u015ft\u0131r\u0131labilir etikettir.', description: 'Confidex Carrier KLT Etiket \u00e7e\u015fitli plastik kap t\u00fcrlerine \u00f6zel, otomotiv end\u00fcstrisi uygulamalar\u0131 i\u00e7in tasarlanm\u0131\u015f yap\u0131\u015ft\u0131r\u0131labilir etikettir.' },
  'confidex-carrier-pro': { title: 'Confidex Carrier Pro Etiket', shortDesc: 'Yiyecek sekt\u00f6r\u00fcnde ve y\u00fcksek su i\u00e7eren \u00fcr\u00fcnlerin ta\u015f\u0131nmas\u0131nda kullan\u0131labilen Carrier Pro RFID etiketi \u015fimdi stoklar\u0131m\u0131zda!', description: 'Yiyecek sekt\u00f6r\u00fcnde ve y\u00fcksek su i\u00e7eren \u00fcr\u00fcnlerin ta\u015f\u0131nmas\u0131nda kullan\u0131labilen Carrier Pro RFID etiketi \u015fimdi stoklar\u0131m\u0131zda!' },
  'confidex-carrier-tough-slim': { title: 'Confidex Carrier Tough Slim Etiket', shortDesc: 'Confidex Carrier Tough Slim etiket, esnek yap\u0131s\u0131 sayesinde t\u00fcm zorlu y\u00fczeylerde kullan\u0131m imkan\u0131 sa\u011flayan bir RFID etiketidir.', description: 'Confidex Carrier Tough Slim etiket, esnek yap\u0131s\u0131 sayesinde t\u00fcm zorlu y\u00fczeylerde kullan\u0131m imkan\u0131 sa\u011flayan bir RFID etiketidir.' },
  'confidex-casey': { title: 'Confidex Casey RFID Etiketi (Monza R6-P)', shortDesc: 'End\u00fcstriyel alanda kullan\u0131lmak \u00fczere tasarlanm\u0131\u015f olan Confidex Casey RFID Etiketi birbirinden farkl\u0131 pek \u00e7ok alanda da kullan\u0131ma uygun bir etikettir.', description: 'End\u00fcstriyel alanda kullan\u0131lmak \u00fczere tasarlanm\u0131\u015f olan Confidex Casey RFID Etiketi birbirinden farkl\u0131 pek \u00e7ok alanda da kullan\u0131ma uygun bir etikettir.' },
  'confidex-crosswave-classic': { title: 'Confidex Crosswave Classic Etiket', shortDesc: 'Plastik ve karton y\u00fczeyler i\u00e7in optimize edilen Confidex Crosswave Classic RFID Etiket,lojistik uygulamalar\u0131 i\u00e7in ideal bir \u00e7\u00f6z\u00fcm sunan bir RFID etiketidir.', description: 'Plastik ve karton y\u00fczeyler i\u00e7in optimize edilen Confidex Crosswave Classic RFID Etiket,lojistik uygulamalar\u0131 i\u00e7in ideal bir \u00e7\u00f6z\u00fcm sunan bir RFID etiketidir.' },
  'confidex-crosswave-neo': { title: 'Confidex Crosswave Neo Etiket', shortDesc: 'Lojistik uygulamalar\u0131nda kullan\u0131lmak \u00fczere tasarlanm\u0131\u015f olan Confidex Crosswave Neo RFID etiketi \u015fimdi stoklar\u0131m\u0131zda! Hemen her sekt\u00f6rde kullan\u0131ma uygundur.', description: 'Lojistik uygulamalar\u0131nda kullan\u0131lmak \u00fczere tasarlanm\u0131\u015f olan Confidex Crosswave Neo RFID etiketi \u015fimdi stoklar\u0131m\u0131zda! Hemen her sekt\u00f6rde kullan\u0131ma uygundur.' },
  'confidex-crosswave-neo-4x6': { title: 'Confidex Crosswave Neo 4x6"', shortDesc: 'Confidex Crosswave Neo (4" x 6") RFID etiketi ile linear anten ile kullan\u0131ld\u0131\u011f\u0131nda bile s\u00fcrekli y\u00fcksek okuma oranlar\u0131 elde eder. Hemen al\u0131n!', description: 'Confidex Crosswave Neo (4" x 6") RFID etiketi ile linear anten ile kullan\u0131ld\u0131\u011f\u0131nda bile s\u00fcrekli y\u00fcksek okuma oranlar\u0131 elde eder. Hemen al\u0131n!' },
  'confidex-cruiser-headlamp': { title: 'Confidex Cruiser Headlamp Etiket', shortDesc: 'Ara\u00e7 farlar\u0131 ve \u00f6n camlar\u0131nda kullanabilece\u011finiz Confidex Cruiser Headlamp RFID etiketi \u015fimdi stoklar\u0131m\u0131zda! Hemen sat\u0131n al\u0131n!', description: 'Ara\u00e7 farlar\u0131 ve \u00f6n camlar\u0131nda kullanabilece\u011finiz Confidex Cruiser Headlamp RFID etiketi \u015fimdi stoklar\u0131m\u0131zda! Hemen sat\u0131n al\u0131n!' },
  'confidex-cruiser-windshield': { title: 'Confidex Cruiser Windshield Etiket', shortDesc: 'Otomobillerin \u00f6n cam\u0131nda kullan\u0131lmak \u00fczere tasarlanm\u0131\u015f olan Confidex Cruiser Windshield RFID etiketi \u015fimdi stoklar\u0131m\u0131zda!Ara\u00e7 HGS etiketi Cruiser Windshield', description: 'Otomobillerin \u00f6n cam\u0131nda kullan\u0131lmak \u00fczere tasarlanm\u0131\u015f olan Confidex Cruiser Windshield RFID etiketi \u015fimdi stoklar\u0131m\u0131zda!Ara\u00e7 HGS etiketi Cruiser Windshield' },
  'confidex-cruiser-windshield-crypto': { title: 'Confidex Cruiser Windshield Crypto Etiket', shortDesc: 'Y\u00fcksek h\u0131zl\u0131 otomatik ara\u00e7 tan\u0131mlama, park etme ve otomatik ge\u00e7i\u015f \u00fccreti toplamak i\u00e7in Confidex Cruiser Windshield Crypto Etiketi tercih edin!', description: 'Y\u00fcksek h\u0131zl\u0131 otomatik ara\u00e7 tan\u0131mlama, park etme ve otomatik ge\u00e7i\u015f \u00fccreti toplamak i\u00e7in Confidex Cruiser Windshield Crypto Etiketi tercih edin!' },
  'confidex-ferrowave-classic': { title: 'Confidex Ferrowave Classic Etiket', shortDesc: 'Metal y\u00fczeyler i\u00e7in tasarlanm\u0131\u015f olan y\u00fcksek performansl\u0131 RFID etiketi olan Confidex Ferrowave Classic RFID etiketi \u015fimdi stoklar\u0131m\u0131zda!', description: 'Metal y\u00fczeyler i\u00e7in tasarlanm\u0131\u015f olan y\u00fcksek performansl\u0131 RFID etiketi olan Confidex Ferrowave Classic RFID etiketi \u015fimdi stoklar\u0131m\u0131zda!' },
  'confidex-ferrowave-micro': { title: 'Confidex Ferrowave Micro RFID Etiketi (Monza 730)', shortDesc: 'K\u00fc\u00e7\u00fck boyutlar\u0131na ra\u011fmen optimum okuma performans\u0131 sunan Confidex Ferrowave Micro ile mini varl\u0131klar\u0131n\u0131z\u0131n takibi art\u0131k \u00e7ok kolay! Spor malzemeleri, ki\u015fisel bak\u0131m \u00fcr\u00fcnleri, makas, b\u0131\u00e7ak gibi varl\u0131klar i\u00e7in ideal RFID etiketi!', description: 'K\u00fc\u00e7\u00fck boyutlar\u0131na ra\u011fmen optimum okuma performans\u0131 sunan Confidex Ferrowave Micro ile mini varl\u0131klar\u0131n\u0131z\u0131n takibi art\u0131k \u00e7ok kolay! Spor malzemeleri, ki\u015fisel bak\u0131m \u00fcr\u00fcnleri, makas, b\u0131\u00e7ak gibi varl\u0131klar i\u00e7in ideal RFID etiketi!' },
  'confidex-heatwave-flag': { title: 'Confidex Heatwave Flag Etiket', shortDesc: 'Confidex Heatwave Flag Etiket otomotiv boyahane s\u00fcre\u00e7leri i\u00e7in tasarlanan, y\u00fcksek s\u0131cakl\u0131kta \u00e7al\u0131\u015fma olana\u011f\u0131 tan\u0131yan metal \u00fcst\u00fc RFID etiketi', description: 'Confidex Heatwave Flag Etiket otomotiv boyahane s\u00fcre\u00e7leri i\u00e7in tasarlanan, y\u00fcksek s\u0131cakl\u0131kta \u00e7al\u0131\u015fma olana\u011f\u0131 tan\u0131yan metal \u00fcst\u00fc RFID etiketi' },
  'confidex-heatwave-tough': { title: 'Confidex Heatwave Tough RFID Etiketi', shortDesc: 'Confidex Heatwave Tough RFID etiketi, otomotiv boyahane süreçleri için tasarlanan, yüksek sıcaklıkta çalışmaya uygun metal üstü RFID etiketidir.', description: 'Confidex Heatwave Tough RFID etiketi, otomotiv boyahane süreçleri için tasarlanan, yüksek sıcaklıkta çalışmaya uygun metal üstü RFID etiketidir.' },
  'confidex-ironside-classic': { title: 'Confidex Ironside Classic\u2122 RFID Etiketi (Monza 4 QT)', shortDesc: 'Sert \u00e7evresel \u015fartlar ve kullan\u0131mda sorunsuz varl\u0131k y\u00f6netimi sa\u011flamak i\u00e7in optimize Confidex Ironside Classic RFID Etiketi Monza 4 QT stoklar\u0131m\u0131zda!', description: 'Sert \u00e7evresel \u015fartlar ve kullan\u0131mda sorunsuz varl\u0131k y\u00f6netimi sa\u011flamak i\u00e7in optimize Confidex Ironside Classic RFID Etiketi Monza 4 QT stoklar\u0131m\u0131zda!' },
  'confidex-ironside-flag': { title: 'Confidex Ironside Flag RFID Etiketi (Monza 4E)', shortDesc: 'Depozitolu metalik ta\u015f\u0131ma \u00fcnitelerinin etiketlenmesinde s\u0131k s\u0131k tercih edilen Confidex Ironside Flag RFID Etiketi \u015fimdi stoklar\u0131m\u0131zda!', description: 'Depozitolu metalik ta\u015f\u0131ma \u00fcnitelerinin etiketlenmesinde s\u0131k s\u0131k tercih edilen Confidex Ironside Flag RFID Etiketi \u015fimdi stoklar\u0131m\u0131zda!' },
  'confidex-ironside-micro': { title: 'Confidex Ironside Micro RFID Etiketi (Monza 4QT)', shortDesc: 'Minimal tasar\u0131m\u0131 sayesinde en dar alanlarda bile kullan\u0131ma uygun olan Confidex Ironside Micro UHF RFID etiketi \u015fimdi stoklar\u0131m\u0131zda!', description: 'Minimal tasar\u0131m\u0131 sayesinde en dar alanlarda bile kullan\u0131ma uygun olan Confidex Ironside Micro UHF RFID etiketi \u015fimdi stoklar\u0131m\u0131zda!' },
  'confidex-ironside-micro-nfc': { title: 'Confidex Ironside Micro NFC RFID Etiketi', shortDesc: 'K\u00fc\u00e7\u00fck boyutlu Confidex Ironside Micro NFC her metal y\u00fczeye monte edilebilir, sert ko\u015ful ve darbelere dayan\u0131kl\u0131d\u0131r. \u0130ncelemek i\u00e7in hemen t\u0131klay\u0131n!', description: 'K\u00fc\u00e7\u00fck boyutlu Confidex Ironside Micro NFC her metal y\u00fczeye monte edilebilir, sert ko\u015ful ve darbelere dayan\u0131kl\u0131d\u0131r. \u0130ncelemek i\u00e7in hemen t\u0131klay\u0131n!' },
  'confidex-ironside-plate': { title: 'Confidex Ironside Plate Etiket', shortDesc: 'Y\u00fcksek de\u011ferdeki e\u015fyalar, kamu ve in\u015faat sekt\u00f6r\u00fc gibi birbirinden farkl\u0131 alanlar i\u00e7in \u00fcretilmi\u015f Confidex Ironside Plate RFID etiketi \u015fimdi stoklar\u0131m\u0131zda!', description: 'Y\u00fcksek de\u011ferdeki e\u015fyalar, kamu ve in\u015faat sekt\u00f6r\u00fc gibi birbirinden farkl\u0131 alanlar i\u00e7in \u00fcretilmi\u015f Confidex Ironside Plate RFID etiketi \u015fimdi stoklar\u0131m\u0131zda!' },
  'confidex-ironside-slim': { title: 'Confidex Ironside Slim RFID Etiketi (M4E)', shortDesc: 'Fiziksel yap\u0131s\u0131n\u0131n dar olmas\u0131 ve darbelere kar\u015f\u0131 dayan\u0131kl\u0131l\u0131\u011f\u0131yla \u00f6n plana \u00e7\u0131kan Confidex Ironside Slim RFID Etiketi \u015fimdi stoklar\u0131m\u0131zda!', description: 'Fiziksel yap\u0131s\u0131n\u0131n dar olmas\u0131 ve darbelere kar\u015f\u0131 dayan\u0131kl\u0131l\u0131\u011f\u0131yla \u00f6n plana \u00e7\u0131kan Confidex Ironside Slim RFID Etiketi \u015fimdi stoklar\u0131m\u0131zda!' },
  'confidex-leaf': { title: 'Confidex Leaf Etiket', shortDesc: 'Confidex Leaf Etiket k\u0131sa vadeli lojistik uygulamalar i\u00e7in ka\u011f\u0131t bazl\u0131 etikettir. Plastik i\u00e7ermedi\u011fi i\u00e7in \u00e7evre dostudur.', description: 'Confidex Leaf Etiket k\u0131sa vadeli lojistik uygulamalar i\u00e7in ka\u011f\u0131t bazl\u0131 etikettir. Plastik i\u00e7ermedi\u011fi i\u00e7in \u00e7evre dostudur.' },
  'confidex-looptag': { title: 'Confidex Looptag Etiket', shortDesc: 'Yaz\u0131c\u0131 dostu Confidex Looptag etiket , farkl\u0131 \u00e7aplarla uyumludur, metalik ve plastik par\u00e7alar \u00fczerinde \u00e7al\u0131\u015fmak \u00fczere optimize edilmi\u015ftir.', description: 'Yaz\u0131c\u0131 dostu Confidex Looptag etiket , farkl\u0131 \u00e7aplarla uyumludur, metalik ve plastik par\u00e7alar \u00fczerinde \u00e7al\u0131\u015fmak \u00fczere optimize edilmi\u015ftir.' },
  'confidex-steelwave-classic': { title: 'Confidex Steelwave Classic RFID Etiketi (Monza 4 QT)', shortDesc: 'Confidex Steelwave Classic yazd\u0131r\u0131labilen, esnek ve dayan\u0131kl\u0131 metal y\u00fczey RFID etiketi! G\u00fc\u00e7l\u00fc yap\u0131\u015fkan\u0131 ile y\u0131llarca kullanabilirsiniz!', description: 'Confidex Steelwave Classic yazd\u0131r\u0131labilen, esnek ve dayan\u0131kl\u0131 metal y\u00fczey RFID etiketi! G\u00fc\u00e7l\u00fc yap\u0131\u015fkan\u0131 ile y\u0131llarca kullanabilirsiniz!' },
  'confidex-steelwave-micro-ii': { title: 'Confidex Steelwave Micro II RFID Etiketi (Monza 4 QT)', shortDesc: 'Confidex Steelwave Micro RFID Etiket BT \u2013 IT varl\u0131klar\u0131n\u0131z\u0131 izlemek, di\u011fer ofis ekipmanlar\u0131n\u0131 takip etmek i\u00e7in kullan\u0131lan bir RFID etiketidir.', description: 'Confidex Steelwave Micro RFID Etiket BT \u2013 IT varl\u0131klar\u0131n\u0131z\u0131 izlemek, di\u011fer ofis ekipmanlar\u0131n\u0131 takip etmek i\u00e7in kullan\u0131lan bir RFID etiketidir.' },
};

const tagTurkishCopy: Record<string, { title?: string; shortDesc: string; description?: string; applications?: string[] }> = {
  'alien-aln-9654': {
    shortDesc: 'Alien Higgs-3 IC ile güçlendirilmiş, cam, plastik palet ve konteyner gibi yüksek dielektrik yüzeylerde yüksek performans sunan genel amaçlı UHF RFID inlay.',
    applications: ['Cam yüzeyler', 'Plastik paletler', 'Konteyner takibi', 'Genel varlık takibi'],
  },
  'alien-aln-9654-4x2': {
    shortDesc: 'Alien Higgs-3 inlay içeren 4x2 inç termal transfer baskıya uygun UHF RFID etiket; metal dışı yüzeylerde genel varlık takibi için tasarlanmıştır.',
    applications: ['Varlık takibi', 'Stok yönetimi', 'Metal dışı yüzeyler', 'Genel etiketleme'],
  },
  'altis-pvc-rti-label': {
    shortDesc: 'RTI, KLT ve PLP gibi depozitolu taşıma birimleri için geliştirilen dayanıklı UHF RFID PVC etiket.',
    applications: ['Depozitolu taşıma birimleri', 'KLT takibi', 'PLP takibi', 'Lojistik'],
  },
  'avery-ad-141-u9': {
    shortDesc: 'NXP UCODE 9 çipli, 4 x 28 mm ölçülerinde ultra ince Gen2 UHF RFID inlay; kozmetik, kişisel bakım ve ilaç uygulamaları için uygundur.',
    applications: ['Kozmetik', 'Kişisel bakım', 'İlaç', 'Küçük ürün takibi'],
  },
  'avery-ad-163u8': {
    shortDesc: 'NXP UCODE 8 çipli, 60 x 4 mm ince Gen2 UHF RFID inlay; cam, plastik ve sıvıya yakın yüksek dielektrik materyallerde güçlü okuma performansı sunar.',
    applications: ['Kozmetik', 'Kişisel bakım', 'İlaç', 'Cam ve plastik yüzeyler'],
  },
  'avery-ad-164-u9': {
    shortDesc: 'NXP UCODE 9 çipli, 60 x 4 mm ince Gen2 UHF RFID inlay; yüksek dielektrik materyallerde gelişmiş hassasiyet ve hızlı kodlama performansı sağlar.',
    applications: ['İlaç', 'Kişisel bakım', 'Cam yüzeyler', 'Plastik yüzeyler'],
  },
  'avery-ad-183-u9': {
    shortDesc: 'NXP UCODE 9 çipli, 26 mm yuvarlak kompakt Gen2 UHF RFID inlay; giyim, kozmetik ve kişisel bakım ürünleri için idealdir.',
    applications: ['Giyim', 'Kozmetik', 'Kişisel bakım', 'Ürün bazlı takip'],
  },
  'avery-ad-192-m730': {
    shortDesc: 'Impinj M730 çipli, 22 x 12.5 mm küçük Gen2 UHF RFID inlay; mücevher, kozmetik ve küçük ürün takibi için tasarlanmıştır.',
    applications: ['Mücevher', 'Kozmetik', 'Küçük ürün takibi', 'Ürün bazlı etiketleme'],
  },
  'avery-ad-229r6-p': {
    shortDesc: 'Impinj Monza R6-P çipli, 95 x 8.15 mm yüksek performanslı Gen2 UHF RFID inlay; tedarik zinciri, RTU, giyim ve marka koruma uygulamaları için uygundur.',
    applications: ['Tedarik zinciri', 'RTU takibi', 'Giyim', 'Marka koruma'],
  },
  'avery-dennison-ad-238u8': {
    shortDesc: 'NXP UCODE 8 çipli, 70 x 14.5 mm yüksek performanslı Gen2 UHF RFID inlay; tedarik zinciri, envanter, lojistik ve giyim uygulamalarına uygundur.',
    applications: ['Tedarik zinciri', 'Envanter', 'Lojistik', 'Giyim'],
  },
  'avery-ad-239-m730': {
    shortDesc: 'Impinj M730 çipli, 70 x 14.5 mm yüksek performanslı Gen2 UHF RFID inlay; tedarik zinciri, envanter, lojistik ve giyim uygulamalarında kullanılır.',
    applications: ['Tedarik zinciri', 'Envanter', 'Lojistik', 'Giyim'],
  },
  'avery-ad-23x-u9': {
    shortDesc: 'NXP UCODE 9 çipli, 70 x 14.5 mm yüksek performanslı Gen2 UHF RFID inlay; tedarik zinciri, envanter, lojistik, giyim ve marka koruma için geliştirilmiştir.',
    applications: ['Tedarik zinciri', 'Envanter', 'Lojistik', 'Giyim', 'Marka koruma'],
  },
  'avery-ad-23x-u9-pure-95': {
    shortDesc: 'NXP UCODE 9 çipli, 70 x 14.5 mm sürdürülebilir Gen2 UHF RFID inlay; yüzde 95e kadar plastiksiz yapısı ve saf alüminyum anteniyle öne çıkar.',
    applications: ['Sürdürülebilir etiketleme', 'Tedarik zinciri', 'Giyim', 'Envanter'],
  },
  'avery-ad-23x-u9-slim': {
    shortDesc: 'NXP UCODE 9 çipli, 70 x 10.5 mm dar profilli Gen2 UHF RFID inlay; daha dar etiket alanlarında tedarik zinciri, giyim ve marka koruma için uygundur.',
    applications: ['Dar etiket alanları', 'Tedarik zinciri', 'Giyim', 'Marka koruma'],
  },
  'avery-dennison-ad-324u8': {
    shortDesc: 'NXP UCODE 8 çipli, 41.4 x 16 mm Gen2 UHF RFID inlay; FCC frekans bandı için optimize edilmiştir ve tedarik zinciri, giyim, ilaç ve sağlık uygulamalarına uygundur.',
    applications: ['Tedarik zinciri', 'Giyim', 'İlaç', 'Sağlık'],
  },
  'avery-dennison-ad-385u8': {
    shortDesc: 'NXP UCODE 8 çipli, 50 x 30 mm yüksek performanslı Gen2 UHF RFID inlay; tedarik zinciri, lojistik ve giyim uygulamalarında esnek kullanım sağlar.',
    applications: ['Tedarik zinciri', 'Lojistik', 'Giyim', 'Envanter'],
  },
  'avery-dennison-ad-sample-pack': {
    shortDesc: 'AD-238u8, AD-324u8 ve AD-385u8 Gen2 UHF RFID inlay modellerinden oluÅŸan deÄŸerlendirme numune paketi.',
    applications: ['Ürün testi', 'Proje değerlendirme', 'Numune çalışması', 'RFID performans karşılaştırması'],
  },
  'brady-tht-nfc-pet-25x25': {
    title: 'Brady Anti-Sıvı NFC RFID Etiketi 25x25 mm',
    shortDesc: '25 x 25 mm polyester NFC RFID etiket; metal üstü ve farklı yüzeylerde kullanılabilir, sıvıya dayanıklı yapıdadır ve 500 etiketlik rulo halinde sunulur.',
    applications: ['Metal üstü yüzeyler', 'Üretim', 'Sağlık', 'Genel varlık takibi'],
  },
  'brady-tht-uhf-pet-64x6': {
    title: 'Brady Anti-Sıvı UHF RFID Etiketi 64x6 mm',
    shortDesc: '64 x 6 mm ince polyester UHF RFID etiket; metal yüzeylerde sağlık, içecek ve endüstriyel malzeme takibi için geliştirilmiştir.',
    applications: ['Metal yüzeyler', 'Sağlık', 'Endüstriyel malzeme takibi', 'Veri ve telekom'],
  },
  'brady-tht-df-423-33x17': {
    title: 'Brady B-423 Çift Frekanslı RFID Etiketi 33x17 mm',
    shortDesc: '33 x 17 mm B-423 polyester çift frekanslı RFID etiket; NFC ve UHF desteğiyle perakende, tedarik zinciri ve ürün doğrulama süreçlerinde kullanılır.',
    applications: ['Perakende', 'Tedarik zinciri', 'Ürün doğrulama', 'Sağlık'],
  },
  'brady-tht-df-423-66x46': {
    title: 'Brady B-423 Çift Frekanslı RFID Etiketi 66x46 mm',
    shortDesc: '66 x 46 mm B-423 polyester çift frekanslı RFID etiket; NFC ve UHF okuma desteğiyle endüstriyel tedarik zinciri ve ürün kimliklendirme için uygundur.',
    applications: ['Endüstriyel takip', 'Tedarik zinciri', 'Ürün doğrulama', 'Lojistik'],
  },
  'brady-tht-nfc-423-50x40': {
    title: 'Brady B-423 Sıcaklık Sensörlü NFC RFID Etiketi 50x40 mm',
    shortDesc: '50 x 40 mm B-423 polyester NFC RFID etiket; sıcaklık algılama özelliğiyle zorlu ortamlarda kablosuz sıcaklık izleme için tasarlanmıştır.',
    applications: ['Sıcaklık izleme', 'Üretim', 'Zorlu ortamlar', 'NFC kimliklendirme'],
  },
  'brady-tht-uhf-423-53x26': {
    title: 'Brady B-423 Sıcaklık Sensörlü UHF RFID Etiketi 53x26 mm',
    shortDesc: '53 x 26 mm B-423 polyester UHF RFID etiket; ürün kimliği, medikal ekipman ve depo-dağıtım uygulamaları için yüksek okuma mesafesi sunar.',
    applications: ['Ürün kimliği', 'Medikal ekipman', 'Depo ve dağıtım', 'Lojistik'],
  },
  'brady-tht-uhf-423-93x26': {
    title: 'Brady B-423 Sıcaklık Sensörlü UHF RFID Etiketi 93x26 mm',
    shortDesc: '93 x 26 mm B-423 polyester UHF RFID etiket; sıcaklık algılama desteğiyle üretim ve depolama ortamlarında kullanılmak üzere geliştirilmiştir.',
    applications: ['Sıcaklık izleme', 'Üretim', 'Depolama', 'Genel takip'],
  },
  'brady-tht-uhf-b481-24x16': {
    title: 'Brady B-481 Kimyasala Dayanıklı UHF RFID Etiketi 24x16 mm',
    shortDesc: '24 x 16 mm B-481 polyester UHF RFID etiket; kimyasala dayanıklı yapısıyla laboratuvar lamları ve medikal numune takibi için uygundur.',
    applications: ['Laboratuvar', 'Medikal numune takibi', 'Kimyasala dayanıklı etiketleme', 'Kompakt ürün takibi'],
  },
  'brady-tht-uhf-7425-45x30': {
    title: 'Brady B-7425 Özel Amaçlı UHF RFID Etiketi 45x30 mm',
    shortDesc: '45 x 30 mm B-7425 polipropilen UHF RFID etiket; konik tüpler, well plate ve laboratuvar numune kimliklendirme için geliştirilmiştir.',
    applications: ['Laboratuvar numuneleri', 'Konik tüpler', 'Well plate takibi', 'Sağlık'],
  },
  'brady-tht-uhf-7425-53x26': {
    title: 'Brady B-7425 Özel Amaçlı UHF RFID Etiketi 53x26 mm',
    shortDesc: '53 x 26 mm B-7425 polipropilen UHF RFID etiket; test tüpleri, numune kapları ve farmasötik takip uygulamalarında kullanılır.',
    applications: ['Test tüpleri', 'Numune kapları', 'Farmasötik takip', 'Laboratuvar'],
  },
  'epozzy-on-metal-55x15x125': {
    shortDesc: '55 x 15 x 1.25 mm ölçülerinde ultra ince ve esnek UHF metal üstü RFID etiket; SATO ve Zebra RFID yazıcılarla yazdırılabilir, kavisli metal yüzeylerde 5.5 m\'ye kadar okuma performansı sunar.',
  },
  'epozzy-on-metal-60x25x1': {
    shortDesc: '60 x 25 x 1 mm ölçülerinde yazdırılabilir esnek UHF metal üstü RFID etiket; metal ve kavisli yüzeylerde kullanım için optimize edilmiştir, metal üzerinde 5 m\'ye kadar okuma sağlar.',
  },
  'epozzy-on-metal-64x6x1': {
    shortDesc: '64 x 6 x 1 mm ölçülerinde ultra ince UHF metal üstü RFID etiket; el aletleri, raf sistemleri ve BT ekipmanları gibi dar metal yüzeylerde kullanım için uygundur.',
  },
  'epozzy-on-metal-70x30x1': {
    shortDesc: '70 x 30 x 1 mm ölçülerinde yazdırılabilir esnek UHF metal üstü RFID etiket; BT varlıkları, sabit kıymetler ve metal ekipman takibinde 8 m\'ye kadar okuma mesafesi sunar.',
  },
  'epozzy-on-metal-80x20x1': {
    shortDesc: '80 x 20 x 1 mm ölçülerinde yazdırılabilir esnek UHF metal üstü RFID etiket; BT varlık yönetimi, konteyner takibi ve depo raf uygulamaları için geliştirilmiştir.',
  },
  'epozzy-on-metal-95x22x125': {
    shortDesc: '95 x 22 x 1.25 mm ölçülerinde yüksek performanslı esnek UHF metal üstü RFID etiket; büyük metal varlıkların takibinde metal üzerinde 12 m\'ye kadar okuma mesafesi sunar.',
  },
  'epozzy-on-metal-128x30x8': {
    shortDesc: '128 x 30 x 8.5 mm gövdeye sahip dayanıklı UHF RFID sert etiket; ağır sanayi, petrol, gaz ve madencilik uygulamalarında metal varlık takibi için tasarlanmıştır.',
  },
  'epozzy-on-metal-136x43x10': {
    shortDesc: '136 x 43 x 10 mm mühendislik plastiği gövdeye sahip yüksek korumalı UHF metal RFID etiket; zorlu endüstriyel ortamlarda 30 m\'ye kadar okuma performansı sağlar.',
  },
  'epozzy-pcb-metal-tag-36x13x27': {
    shortDesc: '36 x 13 x 2.7 mm kompakt yapıda FR-4 PCB metal üstü RFID etiket; metal üzerinde 8.5 m\'ye kadar okuma mesafesi sunar ve yapışkan ya da vida ile monte edilebilir.',
  },
  'epozzy-uhf-label-100x150': {
    shortDesc: '100 x 150 mm büyük formatlı pasif UHF RFID etiket; giyim, varlık yönetimi ve lojistik uygulamalarında standart sevkiyat etiketi boyutuna ihtiyaç duyan süreçler için uygundur.',
  },
  'epozzy-uhf-label-4x2': {
    shortDesc: '4 x 2 inç (101.6 x 50.8 mm) standart formatta pasif UHF RFID etiket; karton, plastik ve ahşap gibi metal dışı yüzeylerde güvenilir performans sunar.',
  },
  'epozzy-nfc-on-metal-30x30': {
    shortDesc: '30 x 30 mm kompakt NFC etiket; metal yüzeylerde doğrudan çalışmak üzere tasarlanmıştır ve varlık etiketleme ile endüstriyel kimliklendirme uygulamalarına uygundur.',
  },
  'epozzy-ntag213-d25': {
    shortDesc: '25 mm çapında ICODE tabanlı NFC etiket; lojistik, kütüphane, BT varlık yönetimi ve perakende uygulamalarında kullanılmak üzere geliştirilmiştir.',
  },
  'epozzy-rfid-tire-tag-patch': {
    shortDesc: 'Dayanıklı kauçuk RFID yama etiket; tamamlanmış lastiklerin yanak kısmına vulkanize edilerek otobüs, kamyon ve treyler lastiklerinde ömür boyu kimliklendirme sağlar.',
  },
  'epozzy-round-head-silicone-wristband-hf': {
    shortDesc: 'Yuvarlak başlıklı, su geçirmez NFC silikon bileklik; tema parkları, yüzme havuzları, geçiş kontrolü, etkinlikler ve sağlık uygulamaları için uygundur.',
  },
  'epozzy-round-head-silicone-wristband-uhf': {
    shortDesc: 'Yuvarlak başlıklı UHF RFID silikon bileklik; geçiş kontrolü, tema parkları, etkinlikler ve eğlence merkezlerinde kullanım için geliştirilmiş su geçirmez bileklik çözümüdür.',
  },
  'epozzy-silicone-rfid-wristband': {
    shortDesc: 'Yay mekanizmalı UHF RFID silikon bileklik; geçiş kontrolü, havuzlar, tema parkları, etkinlikler ve sağlık uygulamalarında dayanıklı kullanım sunar.',
  },
  'epozzy-silicone-rfid-wristband-classic': {
    shortDesc: 'Ayarlanabilir UHF RFID silikon bileklik; eller serbest geçiş kontrolü, tema parkları ve eğlence merkezlerinde 2 m\'ye kadar okuma mesafesi sağlar.',
  },
  'epozzy-fabric-tag': {
    shortDesc: '50 x 35 mm ölçülerinde dikilebilir UHF RFID kumaş etiket; tekstil ve giyim envanter takibi, sahteciliği önleme ve tedarik zinciri yönetimi için uygundur.',
  },
  'epozzy-jewellery-tag-standard': {
    shortDesc: '68 x 13 mm ince yapılı UHF RFID mücevher etiketi; takı, saat, gözlük ve çanta takibi için tasarlanmıştır ve perakende envanter süreçlerinde yüksek verim sağlar.',
  },
  'epozzy-pin-tag-apparel': {
    shortDesc: 'Yeniden kullanılabilir UHF RFID pin etiket; geleneksel EAS güvenlik etiketlerinin yerine geçerek giyim perakendesinde ürün takibi ve hırsızlık önleme sağlar.',
  },
  'epozzy-flag-tag': {
    shortDesc: 'UHF RFID bayrak etiket; sıvı içeren kaplar, karton kutular ve genel ürünler üzerinde takip ve ürün kimliklendirme için geliştirilmiştir.',
  },
  'epozzy-high-temp-metal-tag-48x35x7': {
    shortDesc: '225°C\'ye kadar çalışma sıcaklığına dayanıklı IP68 UHF RFID etiket; medikal sterilizasyon, cerrahi aletler ve madencilik gibi zorlu ortamlarda metal varlık takibi için uygundur.',
  },
  'epozzy-pcb-metal-tag-ht-48x35x7': {
    shortDesc: 'Yüksek sıcaklığa dayanıklı PCB UHF RFID etiket; medikal, cerrahi ve endüstriyel ortamlarda metal varlık takibi için 225°C\'ye kadar çalışma desteği sunar.',
  },
  'epozzy-tamper-proof-on-metal': {
    shortDesc: 'Metal yüzeyler için tasarlanmış UHF RFID söküldüğünde iz bırakan güvenlik etiketi; BT ve endüstriyel metal varlıkların korunmasında ek güvenlik katmanı sağlar.',
  },
  'epozzy-washable-textile-tag': {
    shortDesc: '70 x 15 mm esnek UHF RFID tekstil yıkama etiketi; 200 yıkama çevrimine dayanır ve hastane, otel ile çamaşırhane yönetiminde yüksek okuma performansı sunar.',
  },
  'omni-id-adept-400-5-layer-gs': {
    shortDesc: 'Boru ve sabit metal varlıklara montaj için geliştirilen dayanıklı 5 katmanlı paslanmaz çelik UHF RFID etiket; uzak üretim, çıkarma ve işleme tesisleri için uygundur.',
  },
  'omni-id-adept-400-5-layer-us': {
    shortDesc: 'Zorlu endüstriyel tesislerde boru ve sabit varlık takibi için geliştirilen 5 katmanlı paslanmaz çelik UHF RFID etiket; ABD frekans bandında metal yüzeyler için optimize edilmiştir.',
  },
  'omni-id-adept-500-gs': {
    shortDesc: 'Endüstriyel gaz tüpleri ve içecek fıçılarına kalıcı montaj için tasarlanmış küçük dairesel UHF RFID sert etiket; metal üzerinde yüksek okuma mesafesi sunar.',
  },
  'omni-id-exo-400-ht': {
    shortDesc: 'Küçük form faktörlü, yüksek sıcaklığa dayanıklı UHF RFID etiket; metal yüzeyler için optimize edilmiştir ve sterilizasyon, üretim ile otomotiv boyahane süreçlerinde kullanılabilir.',
  },
  'omni-id-fit-220-ht': {
    shortDesc: '235°C çevrim sıcaklığına dayanabilen en küçük bölgesel UHF RFID etiketlerden biridir; el aletleri, BT varlıkları ve medikal ekipman takibinde küçük metal parçalar için uygundur.',
  },
  'omni-id-fit-400-ht': {
    shortDesc: 'Kompakt yüksek sıcaklık UHF RFID etiket; küçük metal el aletleri, BT varlıkları ve otoklav/sterilizasyon uygulamaları için 4 metreye kadar okuma mesafesi sağlar.',
  },
  'omni-id-fit-400p': {
    shortDesc: 'Plastik ve metal dışı yüzeyler için optimize edilmiş kompakt seramik UHF RFID etiket; plastik varlıklara ve takım saplarına gizli gömme uygulamaları için uygundur.',
  },
  'omni-id-iq-400p-ht': {
    shortDesc: 'Tek kullanımlık üretim uygulamaları için geliştirilen yüksek sıcaklığa dayanıklı sentetik RFID askı etiket; otomotiv boyahane ve elektronik süreçlerinde termal barkod baskısına uygundur.',
  },
  'omni-id-iq-800p-ht': {
    shortDesc: 'Büyük boy yüksek sıcaklığa dayanıklı sentetik RFID askı etiket; üretim, otomotiv boyahane ve elektronik süreçlerinde uzun okuma mesafesi sunar.',
  },
  'omni-id-sense-asset-xl': {
    shortDesc: 'Uzun menzilli dış ortam varlık takibi için ultra dayanıklı LoRaWAN + GPS IoT cihazı; konteyner yönetimi, liman, saha operasyonları ve filo takibinde kullanılır.',
  },
  'omni-id-sense-shield': {
    shortDesc: 'Quuppa teknolojili giyilebilir BLE beacon; personel takibi, sosyal mesafe izleme ve çalışan güvenliği uyarıları için depo, hastane, liman ve şantiye ortamlarına uygundur.',
  },
};

const tagEnglishApplications: Record<string, string[]> = {
  'alien-aln-9654': ['Windshield tagging', 'Plastic pallets', 'Container tracking', 'General asset tracking'],
  'alien-aln-9654-4x2': ['Asset tracking', 'Inventory management', 'Non-metal surfaces', 'General labeling'],
  'altis-pvc-rti-label': ['Returnable transport items', 'KLT tracking', 'PLP tracking', 'Logistics'],
  'avery-ad-141-u9': ['Beauty', 'Personal care', 'Pharmaceuticals', 'Small item tracking'],
  'avery-ad-163u8': ['Beauty', 'Personal care', 'Pharmaceuticals', 'Glass and plastic surfaces'],
  'avery-ad-164-u9': ['Pharmaceuticals', 'Personal care', 'Glass surfaces', 'Plastic surfaces'],
  'avery-ad-183-u9': ['Apparel', 'Cosmetics', 'Personal care', 'Item-level tracking'],
  'avery-ad-192-m730': ['Jewelry', 'Cosmetics', 'Small item tracking', 'Item-level labeling'],
  'avery-ad-229r6-p': ['Supply chain', 'RTU tracking', 'Apparel', 'Brand protection'],
  'avery-dennison-ad-238u8': ['Supply chain', 'Inventory', 'Logistics', 'Apparel'],
  'avery-ad-239-m730': ['Supply chain', 'Inventory', 'Logistics', 'Apparel'],
  'avery-ad-23x-u9': ['Supply chain', 'Inventory', 'Logistics', 'Apparel', 'Brand protection'],
  'avery-ad-23x-u9-pure-95': ['Sustainable labeling', 'Supply chain', 'Apparel', 'Inventory'],
  'avery-ad-23x-u9-slim': ['Narrow label areas', 'Supply chain', 'Apparel', 'Brand protection'],
  'avery-dennison-ad-324u8': ['Supply chain', 'Apparel', 'Pharmaceuticals', 'Healthcare'],
  'avery-dennison-ad-385u8': ['Supply chain', 'Logistics', 'Apparel', 'Inventory'],
  'avery-dennison-ad-sample-pack': ['Product testing', 'Project evaluation', 'Sample studies', 'RFID performance comparison'],
  'brady-tht-nfc-pet-25x25': ['On-metal surfaces', 'Manufacturing', 'Healthcare', 'General asset tracking'],
  'brady-tht-uhf-pet-64x6': ['On-metal surfaces', 'Healthcare', 'Industrial materials', 'Data and telecom'],
  'brady-tht-df-423-33x17': ['Retail', 'Supply chain', 'Product authentication', 'Healthcare'],
  'brady-tht-df-423-66x46': ['Industrial tracking', 'Supply chain', 'Product authentication', 'Logistics'],
  'brady-tht-nfc-423-50x40': ['Temperature monitoring', 'Manufacturing', 'Challenging environments', 'NFC identification'],
  'brady-tht-uhf-423-53x26': ['Product ID', 'Medical equipment ID', 'Distribution and warehousing', 'Logistics'],
  'brady-tht-uhf-423-93x26': ['Temperature monitoring', 'Manufacturing', 'Warehousing', 'General tracking'],
  'brady-tht-uhf-b481-24x16': ['Laboratory', 'Medical slide labeling', 'Chemical-resistant labeling', 'Compact item tracking'],
  'brady-tht-uhf-7425-45x30': ['Laboratory samples', 'Conical tubes', 'Well plate tracking', 'Healthcare'],
  'brady-tht-uhf-7425-53x26': ['Test tubes', 'Specimen containers', 'Pharmaceutical tracking', 'Laboratory'],
};

const sectionLabelMap: Record<string, string> = {
  'RFID SPECIFICATION': 'RFID Özellikleri',
  'DRY INLAY DIMENSIONS': 'Kuru Inlay Ölçüleri',
  'WET INLAY DIMENSIONS': 'Islak Inlay Ölçüleri',
  'LABEL DIMENSIONS': 'Etiket Ölçüleri',
  'PHYSICAL SPECIFICATION': 'Fiziksel Özellikler',
  APPLICATIONS: 'Uygulamalar',
  ENVIRONMENTAL: 'Çevresel Özellikler',
  SUSTAINABILITY: 'Sürdürülebilirlik',
  'RF SPECIFICATION': 'RFID Özellikleri',
  'ENVIRONMENTAL SPECIFICATION': 'Çevresel Dayanım',
};

const specLabelMap: Record<string, string> = {
  Protocol: 'Protokol',
  'Integrated Circuit': 'Entegre Devre',
  'Operating Frequency': 'Çalışma Frekansı',
  Frequency: 'Frekans',
  'EPC Size': 'EPC Boyutu',
  'User Memory': 'Kullanıcı Hafızası',
  TID: 'TID',
  'Unique TID': 'Benzersiz TID',
  'Access Password': 'Erişim Şifresi',
  'Kill Password': 'Kill Şifresi',
  'Label Size': 'Etiket Ölçüsü',
  'Antenna Width': 'Anten GeniÅŸliÄŸi',
  'Antenna Length': 'Anten UzunluÄŸu',
  'Inlay Width': 'Inlay GeniÅŸliÄŸi',
  'Inlay Length': 'Inlay UzunluÄŸu',
  'Web Width': 'Web GeniÅŸliÄŸi',
  'Web Pitch': 'Web Aralığı',
  'Inlays per Roll': 'Rulo Başına Inlay',
  'Maximum Roll OD': 'Maksimum Rulo Dış Çapı',
  'Core ID': 'Kovan İç Çapı',
  'Core Material': 'Kovan Malzemesi',
  'Printable Surface': 'Baskı Yüzeyi',
  'Overlay Adhesive': 'Üst Yapışkan',
  'Inlay Adhesive': 'Inlay Yapışkanı',
  'Adhesive Application Temp': 'Yapışkan Uygulama Sıcaklığı',
  'Adhesive Service Temp': 'Yapışkan Kullanım Sıcaklığı',
  'Release Liner': 'Taşıyıcı Liner',
  'Shelf Life': 'Raf Ömrü',
  'Recommended Storage': 'Önerilen Saklama',
  'Storage Limits': 'Saklama Limitleri',
  'Operating Limits': 'Çalışma Limitleri',
  'Bend Diameter': 'Bükülme Çapı',
  'Write Cycles': 'Yazma Döngüsü',
  RoHS: 'RoHS',
  REACH: 'REACH',
  'ESD Limit (HBM / CDM)': 'ESD Limiti (HBM / CDM)',
  Chip: 'Çip',
  'IC Attachment Technology': 'IC Bağlantı Teknolojisi',
  Standard: 'Standart',
  'Frequency Band': 'Frekans Bandı',
  'EPC Memory': 'EPC Hafızası',
  'TID Memory': 'TID Hafızası',
  'RFID Type': 'RFID Tipi',
  'Material (Label)': 'Etiket Malzemesi',
  'Read Range': 'Okuma Mesafesi',
  'Read Range (UHF)': 'UHF Okuma Mesafesi',
  'Read Range (NFC)': 'NFC Okuma Mesafesi',
  'User Memory (UHF)': 'UHF Kullanıcı Hafızası',
  'User Memory (NFC)': 'NFC Kullanıcı Hafızası',
  'Label Reference': 'Etiket Referansı',
  'Art Number': 'Ürün Numarası',
  Dimensions: 'Ölçüler',
  'Quantity / Roll': 'Rulo Adedi',
  Markets: 'Pazarlar',
  'Special Feature': 'Özel Özellik',
  'On-Metal': 'Metal Üstü',
  'Antenna Dimensions': 'Anten Ölçüleri',
  'Die-Cut Dimension': 'Kesim Ölçüsü',
  'Wet Inlay (IL-607854)': 'Islak Inlay (IL-607854)',
  'Label (IL-612802)': 'Etiket (IL-612802)',
  'Core Size': 'Kovan Ölçüsü',
  'Operating Temperature': 'Çalışma Sıcaklığı',
  'Plastic-Free Content': 'Plastiksiz İçerik',
  'Antenna Material': 'Anten Malzemesi',
  'Carbon Footprint Savings': 'Karbon Ayak İzi Tasarrufu',
  'EU Recyclability': 'AB Geri Dönüştürülebilirlik',
  'US Recyclability': 'ABD Geri Dönüştürülebilirlik',
};

Object.assign(sectionLabelMap, {
  'ENVIRONMENTAL RESISTANCE': 'Çevresel Dayanım',
});

Object.assign(specLabelMap, {
  'Operating Frequency – ETSI': 'Çalışma Frekansı – ETSI',
  'Operating Frequency – FCC': 'Çalışma Frekansı – FCC',
  'Memory (Monza 4QT)': 'Hafıza (Monza 4QT)',
  'EPC Content': 'EPC İçeriği',
  'Read Range – on metal': 'Metal üstü okuma mesafesi',
  'Read Range – on metal (FCC)': 'Metal üstü okuma mesafesi (FCC)',
  'Read Range – on metal (ETSI)': 'Metal üstü okuma mesafesi (ETSI)',
  'Read Range – other materials': 'Diğer yüzeylerde okuma mesafesi',
  'Read Range – off metal (FCC)': 'Metal dışı okuma mesafesi (FCC)',
  'Read Range – on plastic (FCC)': 'Plastik üzerinde okuma mesafesi (FCC)',
  'Read Range – on metal pipe': 'Metal boru üzerinde okuma mesafesi',
  'Read Range – on plastic pipe': 'Plastik boru üzerinde okuma mesafesi',
  'Read Range (2W ERP FCC)': 'Okuma mesafesi (2W ERP FCC)',
  'Max Read Range (2W ERP FCC)': 'Maksimum okuma mesafesi (2W ERP FCC)',
  'Applicable Surfaces': 'Uygulanabilir Yüzeyler',
  'Tag Dimensions': 'Etiket Ölçüleri',
  'Tag Materials': 'Etiket Malzemeleri',
  Material: 'Malzeme',
  Memory: 'Hafıza',
  Installation: 'Montaj',
  'Supported Printers': 'Desteklenen Yazıcılar',
  Package: 'Paketleme',
  'IP Classification': 'IP Sınıfı',
  'Inlay Dimensions': 'Inlay Ölçüleri',
  'IC Options': 'Çip Seçenekleri',
  Humidity: 'Nem',
  Customization: 'Özelleştirme',
  'Designed Lifetime': 'Tasarım Ömrü',
  'Reading Range': 'Okuma Mesafesi',
  'Data Storage': 'Veri Saklama Süresi',
  'Color Options': 'Renk Seçenekleri',
  Options: 'Seçenekler',
  'Antenna Size': 'Anten Boyutu',
  'Wet Inlay / Label Size': 'Islak Inlay / Etiket Ölçüsü',
  'Label Material': 'Etiket Malzemesi',
  Adhesive: 'Yapışkan',
  Weight: 'Ağırlık',
  'Amount in Box': 'Kutu Adedi',
  'Amount per Reel': 'Rulo Adedi',
  'Delivery Format': 'Teslimat Formatı',
  'Storage Condition': 'Saklama KoÅŸulu',
  'Water Resistance': 'Su Dayanımı',
  'Washing Resistance': 'Yıkama Dayanımı',
  'Chemical Resistance': 'Kimyasal Dayanım',
  'Expected Lifetime': 'Beklenen Kullanım Ömrü',
  'Dimensions (150 mm)': 'Ölçüler (150 mm)',
  'Dimensions (250 mm)': 'Ölçüler (250 mm)',
  'Reel Core Inner Diameter': 'Rulo Göbeği İç Çapı',
  'Minimum Bending Diameter': 'Minimum Bükülme Çapı',
  'Read Range – FCC (2W ERP)': 'Okuma mesafesi - FCC (2W ERP)',
  'Read Range – ETSI (2W ERP)': 'Okuma mesafesi - ETSI (2W ERP)',
  'Applicable Use': 'Kullanım Alanı',
  'Primary Use': 'Temel Kullanım',
  Industries: 'Sektörler',
  Features: 'Öne Çıkan Özellikler',
  'Security Feature': 'Güvenlik Özelliği',
  'Form Factor': 'Form Faktörü',
  'Estimated Lifetime': 'Tahmini Kullanım Ömrü',
  'Water Extraction Pressure': 'Su Sıkma Basıncı',
  'Radio Protocol': 'Radyo Protokolü',
  'Frequency Range': 'Frekans Aralığı',
  'Frequency Range – EU': 'Frekans Aralığı - AB',
  'Frequency Range – US': 'Frekans Aralığı - ABD',
  'IC Type (Chip)': 'IC Tipi (Çip)',
  'Read Range – Fixed Reader': 'Okuma mesafesi - Sabit okuyucu',
  'Read Range – Handheld Reader': 'Okuma mesafesi - El terminali',
  'Optimized For': 'Optimize Edildiği Yüzey',
  'Material Compatibility': 'Malzeme UyumluluÄŸu',
  Size: 'Ölçüler',
  Layers: 'Katman Sayısı',
  Attachment: 'Montaj',
  'IP Rating': 'IP Sınıfı',
  'Shock & Vibration': 'Darbe ve TitreÅŸim',
  Certifications: 'Sertifikalar',
  'Short Term Max Temperature': 'Kısa Süreli Maksimum Sıcaklık',
  'Max Temperature Exposure': 'Maksimum Sıcaklık Maruziyeti',
  'Application Temperature': 'Uygulama Sıcaklığı',
  'Supply Format': 'Tedarik Formatı',
  'Supported Profiles': 'Desteklenen Profiller',
  Sensors: 'Sensörler',
  'Temperature Sensor Range': 'Sıcaklık Sensörü Aralığı',
  'Battery Type': 'Pil Tipi',
  'Battery Capacity': 'Pil Kapasitesi',
  'Battery Life': 'Pil Ömrü',
  'Default Beacon Rate': 'Varsayılan Beacon Aralığı',
  'Visual Indicator': 'Görsel Göstergeler',
  'Size – Lanyard/Belt Clip': 'Ölçüler - Yaka Kartı/Kemer Klipsi',
  'Size – Watch Strap': 'Ölçüler - Saat Kayışı',
});

[
  'epozzy-fabric-tag',
  'epozzy-flag-tag',
  'epozzy-high-temp-metal-tag-48x35x7',
  'epozzy-jewellery-tag-standard',
  'epozzy-nfc-on-metal-30x30',
  'epozzy-ntag213-d25',
  'epozzy-on-metal-128x30x8',
  'epozzy-on-metal-136x43x10',
  'epozzy-on-metal-55x15x125',
  'epozzy-on-metal-60x25x1',
  'epozzy-on-metal-64x6x1',
  'epozzy-on-metal-70x30x1',
  'epozzy-on-metal-80x20x1',
  'epozzy-on-metal-95x22x125',
  'epozzy-pcb-metal-tag-36x13x27',
  'epozzy-pcb-metal-tag-ht-48x35x7',
  'epozzy-pin-tag-apparel',
  'epozzy-rfid-tire-tag-patch',
  'epozzy-round-head-silicone-wristband-hf',
  'epozzy-round-head-silicone-wristband-uhf',
  'epozzy-silicone-rfid-wristband',
  'epozzy-silicone-rfid-wristband-classic',
  'epozzy-tamper-proof-on-metal',
  'epozzy-uhf-label-100x150',
  'epozzy-uhf-label-4x2',
  'epozzy-washable-textile-tag',
].forEach(slug => localDatasheetSlugs.add(slug));

Object.assign(localImageExtensions, {
  'epozzy-fabric-tag': 'webp',
  'epozzy-high-temp-metal-tag-48x35x7': 'webp',
  'epozzy-jewellery-tag-standard': 'webp',
  'epozzy-nfc-on-metal-30x30': 'webp',
  'epozzy-ntag213-d25': 'webp',
  'epozzy-on-metal-128x30x8': 'webp',
  'epozzy-on-metal-136x43x10': 'webp',
  'epozzy-on-metal-55x15x125': 'webp',
  'epozzy-on-metal-60x25x1': 'webp',
  'epozzy-on-metal-64x6x1': 'webp',
  'epozzy-on-metal-70x30x1': 'webp',
  'epozzy-on-metal-80x20x1': 'webp',
  'epozzy-on-metal-95x22x125': 'webp',
  'epozzy-pcb-metal-tag-36x13x27': 'webp',
  'epozzy-pcb-metal-tag-ht-48x35x7': 'webp',
  'epozzy-pin-tag-apparel': 'webp',
  'epozzy-rfid-tire-tag-patch': 'webp',
  'epozzy-round-head-silicone-wristband-hf': 'webp',
  'epozzy-round-head-silicone-wristband-uhf': 'webp',
  'epozzy-silicone-rfid-wristband': 'webp',
  'epozzy-silicone-rfid-wristband-classic': 'webp',
  'epozzy-tamper-proof-on-metal': 'webp',
  'epozzy-uhf-label-100x150': 'webp',
  'epozzy-uhf-label-4x2': 'webp',
  'epozzy-washable-textile-tag': 'webp',
});

const firstSectionValue = (raw: any, labels: string[]) => {
  for (const section of raw.sections || []) {
    for (const label of labels) {
      const value = section.items?.[label];
      if (value) return value;
    }
  }
  return '';
};

const fixMojibake = (input: string) => {
  if (!/[\u00c3\u00c4\u00c5\u00c2\u00e2\u20ac]/.test(input)) return input;

  try {
    const repaired = Buffer.from(input, 'latin1').toString('utf8');
    if (/[^\u0000-\u007f]/.test(repaired)) {
      return repaired;
    }
  } catch {
    // Fall through to targeted replacements below.
  }

  return input;
};

const normalizeText = (value: unknown) => fixMojibake(String(value || ''))
  .replaceAll('\u00c3\u00bc', 'ü')
  .replaceAll('\u00c3\u0153', 'Ü')
  .replaceAll('\u00c3\u00b6', 'ö')
  .replaceAll('\u00c3\u2013', 'Ö')
  .replaceAll('\u00c3\u00a7', 'ç')
  .replaceAll('\u00c3\u2021', 'Ç')
  .replaceAll('\u00c4\u00b1', 'ı')
  .replaceAll('\u00c4\u00b0', 'İ')
  .replaceAll('\u00c5\u0178', 'ş')
  .replaceAll('\u00c5\u017e', 'Ş')
  .replaceAll('\u00c4\u0178', 'ğ')
  .replaceAll('\u00c4\u017e', 'Ğ')
  .replaceAll('\u2013', '-')
  .replaceAll('\u2013', '-')
  .replaceAll('\u00c2', '')
  .replaceAll('\u00c2', '')
  .replace(/&#215;/g, 'x')
  .replace(/&#8243;/g, '"')
  .replace(/&quot;/g, '"')
  .replace(/&amp;/g, '&')
  .replace(/&nbsp;/g, ' ')
  .trim();
const rawSlug = (raw: any) => raw.slug || raw.id || '';
const localDatasheet = (slug: string) => `/assets/products/${slug}/${slug}-datasheet.pdf`;
const localImage = (slug: string) => localImageExtensions[slug] ? `/assets/products/${slug}/${slug}-1.${localImageExtensions[slug]}` : '';
const localGallery = (slug: string) => {
  const ext = localImageExtensions[slug];
  if (!ext) return [];
  const count = localGalleryCounts[slug] || 1;
  return Array.from({ length: count }, (_, index) => `/assets/products/${slug}/${slug}-${index + 1}.${ext}`);
};
const rawImage = (raw: any) => typeof raw.image === 'string' ? raw.image : raw.image?.url || '';
const rawProductUrl = (raw: any) => raw.productUrl || raw.source?.product_url || '';
const rawDatasheet = (raw: any) => raw.datasheet || raw.source?.source_url || '';
const translateSpecValue = (value: unknown) => normalizeText(value)
  .replace(/^Yes$/i, 'Evet')
  .replace(/^No$/i, 'Hayır')
  .replace(/^Yes \(both surfaces\)$/i, 'Evet (iki yüzeyde de)')
  .replace(/Up to /gi, '')
  .replace(/([+-]?\d+°C) to ([+-]?\d+°C)/g, '$1 ile $2')
  .replace(/\bbits?\b/gi, 'bit')
  .replace(/\bEurope\b/gi, 'Avrupa')
  .replace(/\bUSA\b/gi, 'ABD')
  .replace(/\bhours?\b/gi, 'saat')
  .replace(/\baccuracy\b/gi, 'hassasiyet')
  .replace(/Temperature sensing/gi, 'Sıcaklık algılama')
  .replace(/General/gi, 'Genel')
  .replace(/Manufacturing/gi, 'Üretim')
  .replace(/Healthcare/gi, 'Sağlık')
  .replace(/Laboratory/gi, 'Laboratuvar')
  .replace(/Warehousing/gi, 'Depolama')
  .replace(/Transport & Logistics/gi, 'Taşıma ve Lojistik')
  .replace(/Data\/Telecom/gi, 'Veri ve Telekom')
  .replace(/^Non metal$/i, 'Metal dışı')
  .replace(/^On metal$/i, 'Metal üstü')
  .replace(/Up to 95% plastic-free/i, 'Yüzde 95e kadar plastiksiz')
  .replace(/Pure aluminum/i, 'Saf alüminyum')
  .replace(/traditional etching methods/i, 'geleneksel aşındırma yöntemleri')
  .replace(/certified/i, 'sertifikalı');

const translateExtraSpecValue = (value: string) => value
  .replace(/^Adhesive$/i, 'Yapışkan')
  .replace(/^On-metal$/i, 'Metal üstü')
  .replace(/^Engineering plastics$/i, 'Mühendislik plastiği')
  .replace(/^Paper \/ PET$/i, 'Kağıt / PET')
  .replace(/^PET \/ Aluminum Foil \/ Foam$/i, 'PET / Alüminyum Folyo / Köpük')
  .replace(/^Silicone$/i, 'Silikon')
  .replace(/^Silicone, Spring$/i, 'Silikon, Yay')
  .replace(/^Rubber$/i, 'Kauçuk')
  .replace(/^3M adhesive or screw$/i, '3M yapışkan veya vida')
  .replace(/^3M adhesive, screw, magnet, cable$/i, '3M yapışkan, vida, mıknatıs, kablo')
  .replace(/^Vulcanizing agent \(outside tire sidewall\)$/i, 'Vulkanizasyon ajanı ile montaj (lastiğin dış yanak yüzeyi)')
  .replace(/^Logo, serial number, barcode laser printing$/i, 'Logo, seri numarası ve barkod lazer baskısı')
  .replace(/^Over 5 years in outdoor conditions$/i, 'Dış ortam koşullarında 5 yıldan fazla')
  .replace(/^Blue, yellow, red and custom$/i, 'Mavi, sarı, kırmızı ve özel renkler')
  .replace(/^Red, blue, yellow and custom$/i, 'Kırmızı, mavi, sarı ve özel renkler')
  .replace(/^Red, blue, black and custom$/i, 'Kırmızı, mavi, siyah ve özel renkler')
  .replace(/^Numbering, encoding, logo printing$/i, 'Numaralandırma, kodlama, logo baskısı')
  .replace(/^500 pcs \/ roll, 76.2 mm \/ 3" reel core$/i, '500 adet / rulo, 76.2 mm / 3" rulo göbeği')
  .replace(/^200 pcs \/ bag$/i, '200 adet / poşet')
  .replace(/^100 pcs \/ bag$/i, '100 adet / poşet')
  .replace(/^120 pcs \/ box$/i, '120 adet / kutu')
  .replace(/^Reel$/i, 'Rulo')
  .replace(/^All materials$/i, 'Tüm malzemeler')
  .replace(/^Single$/i, 'Tekli')
  .replace(/^Printable white PET; resin ribbon recommended$/i, 'Yazdırılabilir beyaz PET; resin ribon önerilir')
  .replace(/^Permanent adhesive for General purpose$/i, 'Genel kullanım için kalıcı yapışkan')
  .replace(/^Permanent adhesive for Genel purpose$/i, 'Genel kullanım için kalıcı yapışkan')
  .replace(/^High quality engineering plastics$/i, 'Yüksek kaliteli mühendislik plastiği')
  .replace(/^High performance acrylic adhesive \(metal and painted metal\)$/i, 'Yüksek performanslı akrilik yapışkan (metal ve boyalı metal)')
  .replace(/^Tolerates industrial washing with standard solvents$/i, 'Standart solventlerle endüstriyel yıkamaya dayanır')
  .replace(/^Years in normal operating conditions$/i, 'Normal çalışma koşullarında yıllarca kullanım')
  .replace(/^Unique number encoded$/i, 'Benzersiz numara kodlanmış')
  .replace(/^tested /i, 'test edildi: ')
  .replace(/^Fabric$/i, 'Kumaş')
  .replace(/^Fabric Base$/i, 'Kumaş tabanlı')
  .replace(/^Sewing$/i, 'Dikilerek montaj')
  .replace(/^Sewing or Insert$/i, 'Dikilerek veya içe yerleştirilerek montaj')
  .replace(/^Company logo, barcode, number printing & encoding$/i, 'Firma logosu, barkod, numara baskısı ve kodlama')
  .replace(/^Logo, barcode \/ QR code, number printing$/i, 'Logo, barkod / QR kod ve numara baskısı')
  .replace(/^ABS plastic with rough coating$/i, 'Pürüzlü kaplamalı ABS plastik')
  .replace(/^Metal piercing pin$/i, 'Metal delici iğne')
  .replace(/^Apparel, retail garments$/i, 'Giyim ürünleri, perakende tekstil')
  .replace(/^Retail garment tagging and anti-theft$/i, 'Perakende giyim etiketleme ve hırsızlık önleme')
  .replace(/^Apparel, retail$/i, 'Giyim, perakende')
  .replace(/^Inventory tracking, anti-shrink, brand anti-counterfeiting$/i, 'Envanter takibi, kayıp azaltma ve marka sahteciliğini önleme')
  .replace(/^Flag tag$/i, 'Bayrak etiket')
  .replace(/^Non-metal, liquid containers, cardboard$/i, 'Metal dışı yüzeyler, sıvı kapları, karton')
  .replace(/^Product tracking on liquid-filled containers and cardboard$/i, 'Sıvı dolu kaplar ve karton üzerinde ürün takibi')
  .replace(/^Logistics, supply chain, FMCG$/i, 'Lojistik, tedarik zinciri, hızlı tüketim ürünleri')
  .replace(/^Metal, plastic, cardboard, wood$/i, 'Metal, plastik, karton, ahşap')
  .replace(/^Metal surface$/i, 'Metal yüzey')
  .replace(/^Adhesive [–-] tamper-evident on removal$/i, 'Söküldüğünde iz bırakan yapışkan')
  .replace(/^IT asset security, industrial metal asset tracking$/i, 'BT varlık güvenliği, endüstriyel metal varlık takibi')
  .replace(/^Tamper detection on removal$/i, 'Sökülme algılama')
  .replace(/^Coated Paper \/ PET \/ Fragile Paper$/i, 'Kaplamalı kağıt / PET / kırılgan kağıt')
  .replace(/^IP68 \(tested 5h at 1m depth\)$/i, 'IP68 (1 m derinlikte 5 saat test edildi)')
  .replace(/^(-?\d+°C) to (\+?\d+°C)$/i, '$1 ile $2')
  .replace(/^(\d+)% non-condensing$/i, 'Yoğuşmasız %$1')
  .replace(/^> 10 years$/i, '10 yıldan fazla')
  .replace(/^200 washing cycles or 3 years$/i, '200 yıkama çevrimi veya 3 yıl')
  .replace(/^Detergent, Softener, Bleach \(Oxygen\/Chlorine\), Alkali$/i, 'Deterjan, yumuşatıcı, ağartıcı (oksijen/klor), alkali')
  .replace(/^(\d+(?:\.\d+)?) m on metal$/i, 'Metal üzerinde $1 m')
  .replace(/^Metal$/i, 'Metal')
  .replace(/^Plastic$/i, 'Plastik')
  .replace(/^Plastic and non-metallic substrates$/i, 'Plastik ve metal dışı yüzeyler')
  .replace(/^Stainless steel with ceramic core$/i, 'Seramik çekirdekli paslanmaz çelik')
  .replace(/^Steel strap or welded$/i, 'Çelik kelepçe veya kaynak')
  .replace(/^Durable thermoplastic material$/i, 'Dayanıklı termoplastik malzeme')
  .replace(/^Adhesive \(standard\)$/i, 'Yapışkan (standart)')
  .replace(/^Thermoplastic cover$/i, 'Termoplastik kaplama')
  .replace(/^Mechanical \(2 × 3mm holes, standard\)$/i, 'Mekanik montaj (2 × 3 mm delik, standart)')
  .replace(/^Painted Black$/i, 'Siyah boyalı')
  .replace(/^Film Adhesive \(included\)$/i, 'Film yapışkan (dahil)')
  .replace(/^Ceramic$/i, 'Seramik')
  .replace(/^Permanent liquid adhesive \(not included\) or film adhesive \(option\)$/i, 'Kalıcı sıvı yapışkan (dahil değil) veya film yapışkan (opsiyonel)')
  .replace(/^High Temperature Synthetic Label$/i, 'Yüksek sıcaklığa dayanıklı sentetik etiket')
  .replace(/^Holes for mechanical attachment$/i, 'Mekanik montaj için delikler')
  .replace(/^1 roll \(1,020 labels\)$/i, '1 rulo (1.020 etiket)')
  .replace(/^1,020 labels \(1 roll\)$/i, '1.020 etiket (1 rulo)')
  .replace(/^Overmoulded durable, shock resistant TPE$/i, 'Dayanıklı, darbeye dirençli overmould TPE')
  .replace(/^Mechanical \(std\), cable tie, magnet, foam adhesive$/i, 'Mekanik montaj (std), kablo bağı, mıknatıs, köpük yapışkan')
  .replace(/^GPS, Accelerometer, Temperature$/i, 'GPS, ivmeölçer, sıcaklık')
  .replace(/^Sealed prismatic battery, non-replaceable$/i, 'Mühürlü prizmatik pil, değiştirilemez')
  .replace(/^3 years \(DBR 24h, 1 movement\/day\)$/i, '3 yıl (DBR 24 saat, günde 1 hareket)')
  .replace(/^Bi-color LED$/i, 'Çift renkli LED')
  .replace(/^2-part durable plastic case$/i, '2 parçalı dayanıklı plastik gövde')
  .replace(/^3 variants: lanyard, belt clip or watch strap$/i, '3 varyant: boyun askısı, kemer klipsi veya saat kayışı')
  .replace(/^Replaceable CR2032$/i, 'Değiştirilebilir CR2032')
  .replace(/^6 months \(10h moving\/day \+ 14h stationary\/day\)$/i, '6 ay (günde 10 saat hareketli + 14 saat sabit)')
  .replace(/^Sub 1 metre$/i, '1 metrenin altında')
  .replace(/^868 MHz [–-] Europe \/ 915 MHz [–-] USA$/i, '868 MHz - Avrupa / 915 MHz - ABD')
  .replace(/^CE, RoHS; optional ATEX\/IECEx, US&Canada C1D1\/D2$/i, 'CE, RoHS; opsiyonel ATEX/IECEx, ABD & Kanada C1D1/D2')
  .replace(/^CE, RoHS, Ex; optional ATEX\/IECEx, US&Canada C1D1\/D2$/i, 'CE, RoHS, Ex; opsiyonel ATEX/IECEx, ABD & Kanada C1D1/D2')
  .replace(/^CE, RoHS; optional ATEX\/IECEx$/i, 'CE, RoHS; opsiyonel ATEX/IECEx')
  .replace(/^CE, FCC, RoHS, NFC, LoRa$/i, 'CE, FCC, RoHS, NFC, LoRa')
  .replace(/^CE, FCC, RoHS, NFC, Bluetooth$/i, 'CE, FCC, RoHS, NFC, Bluetooth')
  .replace(/^(\d+) layers$/i, '$1 katman')
  .replace(/^(\d+)-(\d+) hours$/i, '$1-$2 saat')
  .replace(/^(.+?) \((.+? accuracy)\)$/i, '$1 ($2)');
const translateApplicationText = (value: string) => normalizeText(value)
  .replace(/^Clothing$/i, 'Giyim')
  .replace(/^Asset management$/i, 'Varlık yönetimi')
  .replace(/^Logistics$/i, 'Lojistik')
  .replace(/^Asset tagging$/i, 'Varlık etiketleme')
  .replace(/^Industrial identification$/i, 'Endüstriyel kimliklendirme')
  .replace(/^Library$/i, 'Kütüphane')
  .replace(/^IT asset management$/i, 'BT varlık yönetimi')
  .replace(/^Retail$/i, 'Perakende')
  .replace(/^Theme parks$/i, 'Tema parkları')
  .replace(/^Swimming pools$/i, 'Yüzme havuzları')
  .replace(/^Access control$/i, 'Geçiş kontrolü')
  .replace(/^Events$/i, 'Etkinlikler')
  .replace(/^Healthcare$/i, 'Sağlık')
  .replace(/^Leisure centers?$/i, 'EÄŸlence merkezleri')
  .replace(/^Industrial$/i, 'Endüstriyel')
  .replace(/^Vehicle identification$/i, 'Araç tanımlama');

const translateMarketingTextToTr = (value: string) => normalizeText(value)
  .replace(/^Ultra-slim flexible UHF RFID on-metal label/i, 'Ultra ince esnek UHF metal üstü RFID etiket')
  .replace(/^Flexible printable UHF RFID on-metal label/i, 'Yazdırılabilir esnek UHF metal üstü RFID etiket')
  .replace(/^High-performance flexible UHF RFID on-metal label/i, 'Yüksek performanslı esnek UHF metal üstü RFID etiket')
  .replace(/^Rugged UHF RFID hard tag/i, 'Dayanıklı UHF RFID sert etiket')
  .replace(/^High-protection UHF RFID metal tag/i, 'Yüksek korumalı UHF metal RFID etiket')
  .replace(/^Rugged FR-4 PCB on-metal RFID tag/i, 'Dayanıklı FR-4 PCB metal üstü RFID etiket')
  .replace(/^Large-format/i, 'Büyük ebatlı')
  .replace(/^Passive UHF RFID label/i, 'Pasif UHF RFID etiket')
  .replace(/^Compact 30×30 mm NFC tag designed to work directly on metallic surfaces\./i, '30×30 mm kompakt NFC etiket, metal yüzeylerde doğrudan çalışmak üzere tasarlanmıştır.')
  .replace(/^25 mm diameter ICODE NFC dry inlay \/ label tag/i, '25 mm çaplı ICODE NFC dry inlay / etiket')
  .replace(/^Durable rubber RFID patch tag designed to be vulcanized onto the sidewall of finished tires\./i, 'Dayanıklı kauçuk RFID yama etiket, tamamlanmış lastiklerin yanak kısmına vulkanize edilmek üzere tasarlanmıştır.')
  .replace(/^Waterproof NFC silicone wristband with round head design/i, 'Yuvarlak başlıklı su geçirmez NFC silikon bileklik')
  .replace(/^UHF RFID silicone wristband with round head design/i, 'Yuvarlak başlıklı UHF RFID silikon bileklik')
  .replace(/^UHF RFID silicone wristband with spring mechanism/i, 'Yay mekanizmalı UHF RFID silikon bileklik')
  .replace(/^UHF RFID adjustable silicone wristband with extended 2 m read range/i, '2 m\'ye kadar geniÅŸletilmiÅŸ okuma mesafesine sahip ayarlanabilir UHF RFID silikon bileklik')
  .replace(/^Sewable UHF RFID fabric tag/i, 'Dikilebilir UHF RFID kumaÅŸ etiket')
  .replace(/ operating at ([^.]+?) with ([^.]+?) chip/gi, ' $1 frekansında çalışan $2 çipli')
  .replace(/ operating at ([^.]+?)\./gi, ' $1 frekansında çalışır.')
  .replace(/ with read range up to ([^.]+?) on metal/gi, ', metal üzerinde $1\'ye kadar okuma mesafesi sunar')
  .replace(/ with up to ([^.]+?) read range/gi, ', $1\'ye kadar okuma mesafesi sunar')
  .replace(/Designed for /gi, '')
  .replace(/ suitable for /gi, ' ')
  .replace(/ compliant with /gi, ' uyumlu, ')
  .replace(/ and /gi, ' ve ')
  .replace(/ theme parks/gi, ' tema parkları')
  .replace(/ swimming pools/gi, ' yüzme havuzları')
  .replace(/ access control/gi, ' geçiş kontrolü')
  .replace(/ events/gi, ' etkinlikler')
  .replace(/ healthcare/gi, ' sağlık')
  .replace(/ clothing/gi, ' giyim')
  .replace(/ asset management/gi, ' varlık yönetimi')
  .replace(/ logistics/gi, ' lojistik')
  .replace(/ industrial identification/gi, ' endüstriyel kimliklendirme')
  .replace(/ asset tagging/gi, ' varlık etiketleme')
  .replace(/ library/gi, ' kütüphane')
  .replace(/ retail applications/gi, ' perakende uygulamaları')
  .replace(/ wearable identification/gi, ' giyilebilir kimliklendirme')
  .replace(/ prevent theft and cloning/gi, ' hırsızlık ve kopyalamayı önleme')
  .replace(/ for buses, trucks and trailers/gi, ' otobüs, kamyon ve treyler uygulamaları için')
  .replace(/\s{2,}/g, ' ')
  .trim();

const translateSpecLabel = (label: string) => {
  const normalized = normalizeText(label);
  const directSection = sectionLabelMap[normalized];
  if (directSection) return directSection;
  const directSpec = specLabelMap[normalized];
  if (directSpec) return directSpec;

  return normalized
    .replace(/^ENVIRONMENTAL RESISTANCE$/i, 'Çevresel Dayanım')
    .replace(/^Operating Frequency [–-] ETSI$/i, 'Çalışma Frekansı – ETSI')
    .replace(/^Operating Frequency [–-] FCC$/i, 'Çalışma Frekansı – FCC')
    .replace(/^Memory \(Monza 4QT\)$/i, 'Hafıza (Monza 4QT)')
    .replace(/^EPC Content$/i, 'EPC İçeriği')
    .replace(/^Read Range [–-] on metal$/i, 'Metal üstü okuma mesafesi')
    .replace(/^Read Range [–-] on metal \(FCC\)$/i, 'Metal üstü okuma mesafesi (FCC)')
    .replace(/^Read Range [–-] on metal \(ETSI\)$/i, 'Metal üstü okuma mesafesi (ETSI)')
    .replace(/^Read Range [–-] other materials$/i, 'Diğer yüzeylerde okuma mesafesi')
    .replace(/^Read Range [–-] off metal \(FCC\)$/i, 'Metal dışı okuma mesafesi (FCC)')
    .replace(/^Read Range [–-] on plastic \(FCC\)$/i, 'Plastik üzerinde okuma mesafesi (FCC)')
    .replace(/^Read Range [–-] on metal pipe$/i, 'Metal boru üzerinde okuma mesafesi')
    .replace(/^Read Range [–-] on plastic pipe$/i, 'Plastik boru üzerinde okuma mesafesi')
    .replace(/^Applicable Surfaces$/i, 'Uygulanabilir Yüzeyler')
    .replace(/^Tag Dimensions$/i, 'Etiket Ölçüleri')
    .replace(/^Tag Materials$/i, 'Etiket Malzemeleri')
    .replace(/^Material$/i, 'Malzeme')
    .replace(/^Memory$/i, 'Hafıza')
    .replace(/^Installation$/i, 'Montaj')
    .replace(/^Supported Printers$/i, 'Desteklenen Yazıcılar')
    .replace(/^Package$/i, 'Paketleme')
    .replace(/^IP Classification$/i, 'IP Sınıfı')
    .replace(/^Inlay Dimensions$/i, 'Inlay Ölçüleri')
    .replace(/^IC Options$/i, 'Çip Seçenekleri')
    .replace(/^Humidity$/i, 'Nem')
    .replace(/^Customization$/i, 'Özelleştirme')
    .replace(/^Designed Lifetime$/i, 'Tasarım Ömrü')
    .replace(/^Reading Range$/i, 'Okuma Mesafesi')
    .replace(/^Data Storage$/i, 'Veri Saklama Süresi')
    .replace(/^Color Options$/i, 'Renk Seçenekleri')
    .replace(/^Options$/i, 'Seçenekler')
    .replace(/^Antenna Size$/i, 'Anten Boyutu')
    .replace(/^Wet Inlay \/ Label Size$/i, 'Islak Inlay / Etiket Ölçüsü')
    .replace(/^Label Material$/i, 'Etiket Malzemesi')
    .replace(/^Adhesive$/i, 'Yapışkan')
    .replace(/^Weight$/i, 'Ağırlık')
    .replace(/^Amount in Box$/i, 'Kutu Adedi')
    .replace(/^Amount per Reel$/i, 'Rulo Adedi')
    .replace(/^Delivery Format$/i, 'Teslimat Formatı')
    .replace(/^Storage Condition$/i, 'Saklama KoÅŸulu')
    .replace(/^Water Resistance$/i, 'Su Dayanımı')
    .replace(/^Washing Resistance$/i, 'Yıkama Dayanımı')
    .replace(/^Chemical Resistance$/i, 'Kimyasal Dayanım')
    .replace(/^Expected Lifetime$/i, 'Beklenen Kullanım Ömrü')
    .replace(/^Dimensions \(150 mm\)$/i, 'Ölçüler (150 mm)')
    .replace(/^Dimensions \(250 mm\)$/i, 'Ölçüler (250 mm)')
    .replace(/^Reel Core Inner Diameter$/i, 'Rulo Göbeği İç Çapı')
    .replace(/^Minimum Bending Diameter$/i, 'Minimum Bükülme Çapı')
    .replace(/^Frequency Range [–-] EU$/i, 'Frekans Aralığı - AB')
    .replace(/^Frequency Range [–-] US$/i, 'Frekans Aralığı - ABD')
    .replace(/^Read Range [–-] Fixed Reader$/i, 'Okuma mesafesi - Sabit okuyucu')
    .replace(/^Read Range [–-] Handheld Reader$/i, 'Okuma mesafesi - El terminali')
    .replace(/^Location Accuracy$/i, 'Konum Hassasiyeti')
    .replace(/^Size [–-] Lanyard\/Belt Clip$/i, 'Ölçüler - Yaka Kartı/Kemer Klipsi')
    .replace(/^Size [–-] Watch Strap$/i, 'Ölçüler - Saat Kayışı');
};

function normalizeSections(raw: any, lang: 'tr' | 'en') {
  if (!Array.isArray(raw.sections)) return undefined;
  return raw.sections.map((section: any) => {
    const items = Object.entries(section.items || {}).reduce<Record<string, string>>((acc, [key, value]) => {
      const label = lang === 'tr' ? translateSpecLabel(key) : key;
      acc[label] = lang === 'tr' ? translateExtraSpecValue(translateSpecValue(value)) : normalizeText(value);
      return acc;
    }, {});
    return {
      name: lang === 'tr' ? translateSpecLabel(section.name) : section.name,
      items,
    };
  });
}

function normalizeTag(raw: any, lang: 'tr' | 'en'): RfidTag {
  const slug = rawSlug(raw);
  const brand = raw.brand || raw.display_brand || '';
  const trCopy = confidexTurkishCopy[slug] || tagTurkishCopy[slug];
  const fallbackTrSummary = brand === 'Epozzy'
    ? translateMarketingTextToTr(normalizeText(raw.summary_en || raw.shortDesc_en || raw.shortDesc || raw.description_en || raw.description))
    : '';
  const fallbackTrDescription = brand === 'Epozzy'
    ? translateMarketingTextToTr(normalizeText(raw.description_en || raw.summary_en || raw.description || raw.shortDesc))
    : '';
  const title = normalizeText(lang === 'en' ? (raw.title_en || raw.title) : (trCopy?.title || raw.title_tr || raw.title || raw.title_en));
  const englishSummary = normalizeText(raw.summary_en || raw.shortDesc_en || raw.shortDesc || raw.description_en || raw.description);
  const shortDesc = lang === 'tr'
    ? (normalizeText(trCopy?.shortDesc) || normalizeText(raw.summary_tr || raw.shortDesc_tr) || fallbackTrSummary || normalizeText(raw.shortDesc || raw.summary_en))
    : englishSummary;
  const description = lang === 'tr'
    ? (normalizeText(trCopy?.description || trCopy?.shortDesc) || normalizeText(raw.description_tr || raw.summary_tr) || fallbackTrDescription || normalizeText(raw.description || raw.summary_en || raw.shortDesc))
    : normalizeText(raw.description_en || raw.summary_en || raw.description || raw.shortDesc);
  const gallery = localGallery(slug);
  const image = gallery[0] || localImage(slug) || rawImage(raw);
  const datasheet = localDatasheetSlugs.has(slug) ? localDatasheet(slug) : rawDatasheet(raw);
  const model = normalizeText(raw.model || raw.alt_code || title.replace(/^Avery Dennison |^Alien /, ''));
  const sku = normalizeText(raw.sku || raw.alt_code || model);
  const frequencyBand = normalizeText(raw.frequencyBand || firstSectionValue(raw, ['Operating Frequency', 'Frequency']));
  const protocol = normalizeText(raw.protocol || firstSectionValue(raw, ['Protocol']));
  const chip = normalizeText(raw.chip || firstSectionValue(raw, ['Integrated Circuit', 'IC', 'Chip']));
  const sizeText = normalizeText(raw.sizeText || firstSectionValue(raw, ['Label Size', 'Inlay Width', 'Antenna Width']));
  const formFactor = normalizeText(raw.formFactor || raw.product_group || raw.category || raw.subtitle || 'RFID Label / Inlay');
  const onMetal = Boolean(raw.onMetal ?? /on[-_ ]?metal|metal/i.test(raw.surface || raw.category || raw.product_group || ''));
  const applications = lang === 'tr'
    ? ((raw.applications_tr || trCopy?.applications || raw.applications || []).map((item: string) => brand === 'Epozzy' ? translateApplicationText(item) : item))
    : (raw.applications_en || tagEnglishApplications[slug] || raw.applications || []);
  const tags = [
    raw.frequency || (frequencyBand ? 'UHF' : ''),
    formFactor,
    chip,
    onMetal ? (lang === 'tr' ? 'Metal Üstü' : 'On Metal') : (lang === 'tr' ? 'Metal Dışı' : 'Non Metal'),
  ].filter(Boolean);

  return {
    slug,
    title,
    brand,
    model,
    sku,
    subtitle: normalizeText(lang === 'en' ? (raw.subtitle || raw.product_group || raw.category) : (raw.product_group || raw.category || raw.subtitle)),
    shortDesc,
    description,
    customerSummary: normalizeText(raw.customerSummary || shortDesc),
    image,
    gallery: gallery.length > 0 ? gallery : undefined,
    datasheet,
    productUrl: rawProductUrl(raw),
    frequency: normalizeText(raw.frequency || (frequencyBand.includes('13.56') ? 'HF' : 'UHF')),
    frequencyBand,
    protocol,
    chip,
    surface: raw.surface || (onMetal ? 'metal' : 'non-metal'),
    onMetal,
    formFactor,
    sizeText,
    material: lang === 'tr'
      ? translateExtraSpecValue(translateSpecValue(normalizeText(raw.material || firstSectionValue(raw, ['Printable Surface', 'Material']))))
      : normalizeText(raw.material || firstSectionValue(raw, ['Printable Surface', 'Material'])),
    fixedReadRange: normalizeText(raw.fixedReadRange || ''),
    handheldReadRange: normalizeText(raw.handheldReadRange || ''),
    operatingTemp: normalizeText(raw.operatingTemp || firstSectionValue(raw, ['Operating Limits', 'Operating Temperature'])),
    ipRating: normalizeText(raw.ipRating || ''),
    applications,
    industries: raw.industries || [],
    tags,
    sections: normalizeSections(raw, lang),
  };
}

export const rfidTags = allRfidTags
  .filter(tag => (tag.brand || tag.display_brand) !== 'RichRFID')
  .map(tag => normalizeTag(tag, 'tr'))
  .filter(tag => tag.slug);

export const rfidTagsEn = allRfidTags
  .filter(tag => (tag.brand || tag.display_brand) !== 'RichRFID')
  .map(tag => normalizeTag(tag, 'en'))
  .filter(tag => tag.slug);

export const tagBrands = [...new Set(rfidTags.map(tag => tag.brand))].sort();
export const tagBrandsEn = [...new Set(rfidTagsEn.map(tag => tag.brand))].sort();
export const tagSurfaceTypes = [...new Set(rfidTags.map(tag => tag.onMetal ? 'On Metal' : 'Non Metal'))].sort();
