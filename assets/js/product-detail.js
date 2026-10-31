/**
 * SUPREME WASTEBINS & DUSTBINS - Product Detail Page JavaScript
 * Handles dynamic product loading from URL slug,
 * gallery thumbnail image switching underneath main image,
 * technical specs rendering from Supreme Dustbins Catalogue,
 * WhatsApp pre-filled chat, and RFQ / Inquiry form.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Comprehensive Supreme Dustbins Database from Catalogue
  const productDatabase = {
    'silpack-h-line': {
      title: 'Supreme Silpack® "H" Line Polypropylene Corrugated Sheets',
      category: 'Silpack Industrial Sheets',
      categorySlug: 'silpack',
      subtitle: 'Extruded Polypropylene Flute Board for Industrial Packaging & Component Protection',
      mainImg: 'assets/images/silpack/h_line_main.jpg',
      relatedImgs: [
        { src: 'assets/images/silpack/h_line_main.jpg', title: 'Silpack H-Line Front View' },
        { src: 'assets/images/silpack/h_line_2.jpg', title: 'Silpack H-Line Fabricated Box' },
        { src: 'assets/images/silpack/h_line_3.jpg', title: 'Silpack H-Line Profile' }
      ],
      specs: [
        { label: 'Flute Architecture', val: 'H-Flute vertical connecting ribs' },
        { label: 'Thickness Range', val: '2.0 mm to 10.0 mm' },
        { label: 'GSM Range', val: '250 to 3500 GSM' },
        { label: 'Max Width', val: '1500 mm (Custom Lengths)' },
        { label: 'Available Grades', val: 'Common, Corona, Anti-Static, Conductive, UV' },
        { label: 'Recyclability', val: '100% Virgin Recyclable Polypropylene' }
      ],
      desc: "Supreme Silpack H-Line is an extruded polypropylene sheet in H flute board construction, specifically formulated for heavy-duty industrial transit packaging, construction floor protection, false ceilings, and cleanroom partitions.",
      features: [
        'Twin walls with vertical connecting rib for high compression strength',
        '100% waterproof, washable, and chemical resistant',
        'Available in Anti-Static (ESD) and Conductive grades for electronics',
        'Certified food-grade suitable and 100% recyclable virgin polymer'
      ]
    },
    'silpack-s-line': {
      title: 'Supreme Silpack® "S" Line Polypropylene Print & Display Sheets',
      category: 'Silpack Print & Display Sheets',
      categorySlug: 'silpack',
      subtitle: 'Extruded Polypropylene Flute Board for Advertising, Signboards & POS Displays',
      mainImg: 'assets/images/silpack/s_line_main.jpg',
      relatedImgs: [
        { src: 'assets/images/silpack/s_line_main.jpg', title: 'Silpack S-Line Front View' },
        { src: 'assets/images/silpack/s_line_2.jpg', title: 'Silpack S-Line Display Packaging' },
        { src: 'assets/images/silpack/s_line_3.jpg', title: 'Silpack S-Line Utility Container' }
      ],
      specs: [
        { label: 'Flute Architecture', val: 'S-Flute uniform surface profile' },
        { label: 'Thickness Range', val: '2.0 mm to 10.0 mm' },
        { label: 'Surface Dyne Level', val: '≥ 40 dynes/cm (Corona Treated)' },
        { label: 'Max Width', val: '1500 mm (Custom Lengths & Sheets)' },
        { label: 'Printing Fitment', val: 'Flatbed UV Digital, Screen Printing, Vinyl' },
        { label: 'Recyclability', val: '100% Virgin Recyclable Polypropylene' }
      ],
      desc: "Supreme Silpack S-Line is a polypropylene sheet in S flute board construction, engineered specifically for commercial printing, signage boards, and retail point-of-sale displays.",
      features: [
        'Corona-treated outer surface ensures superior ink adhesion',
        'Smooth surface profile prevents flute shadowing on graphic prints',
        'Waterproof, weather-resistant and UV-stabilized for outdoor signage',
        'Lightweight, easy to score, crease, die-cut, and fold into POS stands'
      ]
    },
    'household-wastebin': {
      title: 'Supreme Household Wastebins (10L & 20L)',
      category: 'Household Dustbins',
      categorySlug: 'dustbins',
      subtitle: 'Durable Virgin Polymer Wastebins with Handle & Odor-Tight Lid',
      mainImg: 'assets/images/dustbins/household_wastebin.png',
      relatedImgs: [
        { src: 'assets/images/dustbins/household_wastebin.png', title: '10L & 20L Buckets' },
        { src: 'assets/images/dustbins/swing_lid_wastebin.png', title: 'Swing Lid Option' },
        { src: 'assets/images/dustbins/collection_buckets.png', title: 'Collection Bucket' },
        { src: 'assets/images/dustbins/full_page_1.png', title: 'Supreme Range' }
      ],
      desc: 'Supreme Household Wastebins are engineered from 100% virgin, food-grade polypropylene for indoor domestic, office, and institutional waste collection. Features an ergonomic heavy-gauge bail handle and snug-fitting lid to trap unpleasant odors, prevent insect infestation, and ensure effortless cleaning.',
      specs: [
        { label: '10L Height (With Lid)', val: '312 mm' },
        { label: '10L Height (Without Lid)', val: '280 mm' },
        { label: '10L Top Out / Inner Dia', val: '264 mm / 245 mm' },
        { label: '10L Bottom Out Dia', val: '201 mm' },
        { label: '20L Height (With Lid)', val: '410 mm' },
        { label: '20L Height (Without Lid)', val: '380 mm' },
        { label: '20L Top Out / Inner Dia', val: '340 mm / 305 mm' },
        { label: '20L Bottom Out Dia', val: '256 mm' },
        { label: 'Material Grade', val: '100% Virgin High-Impact Polypropylene (PP)' },
        { label: 'Lid & Handle', val: 'Tight-Fitting Odor Lid + Metal / Polymer Handle' }
      ],
      features: [
        '100% virgin polymer ensures crack-resistance and long service life.',
        'Leak-proof seamless molded body prevents liquid seepage.',
        'Airtight lid locks in bad odors and maintains hygienic indoor environments.',
        'Smooth glossy inner finish prevents waste adhesion and cleans easily.'
      ]
    },

    'swing-lid-wastebin': {
      title: 'Supreme Swing Lid Wastebins (20L & 40L)',
      category: 'Household & Commercial Bins',
      categorySlug: 'dustbins',
      subtitle: 'Touchless Hands-Free Counter-Balanced Swing Dome Dustbins',
      mainImg: 'assets/images/dustbins/swing_lid_wastebin.png',
      relatedImgs: [
        { src: 'assets/images/dustbins/swing_lid_wastebin.png', title: '20L & 40L Swing Bins' },
        { src: 'assets/images/dustbins/household_wastebin.png', title: 'Bucket Option' },
        { src: 'assets/images/dustbins/freestanding_sflb.png', title: 'Commercial SFLB' },
        { src: 'assets/images/dustbins/full_page_2.png', title: 'Catalogue Specs' }
      ],
      desc: 'Supreme Swing Lid Wastebins are equipped with a counter-balanced center flap that swings open effortlessly on gentle push and automatically swings shut, keeping garbage concealed and odors trapped without requiring hand contact. Perfect for busy office corridors, food courts, healthcare clinics, and modern homes.',
      specs: [
        { label: '20L Height (With Lid)', val: '512 mm' },
        { label: '20L Height (Without Lid)', val: '380 mm' },
        { label: '20L Top Out / Inner Dia', val: '340 mm / 305 mm' },
        { label: '20L Bottom Out Dia', val: '256 mm' },
        { label: '40L Height (With Lid)', val: '603 mm' },
        { label: '40L Height (Without Lid)', val: '448 mm' },
        { label: '40L Top Out / Inner Dia', val: '415 mm / 378 mm' },
        { label: '40L Bottom Out Dia', val: '409 mm' },
        { label: 'Flap Operation', val: 'Counter-Balanced 360° Touchless Swing' },
        { label: 'Molding Process', val: 'High-Precision Injection Molded' }
      ],
      features: [
        'Hands-free swing flap eliminates touching of bin surface for superior hygiene.',
        'Counter-balanced self-closing flap traps odors instantly.',
        'Scratch-resistant textured exterior with stain-resistant glossy interior.',
        'Broad stable base prevents accidental toppling over in high-footfall areas.'
      ]
    },

    'wheeled-wastebins': {
      title: 'Supreme Wheeled Mobile Wastebins (90L, 120L, 240L)',
      category: 'Wheeled Mobile Dustbins',
      categorySlug: 'dustbins',
      subtitle: 'Heavy-Duty 2-Wheeled Outdoor & Municipal Waste Containers',
      mainImg: 'assets/images/dustbins/wheeled_bins.png',
      relatedImgs: [
        { src: 'assets/images/dustbins/wheeled_bins.png', title: '90L, 120L & 240L Range' },
        { src: 'assets/images/dustbins/compactor_4wheel_bins.png', title: '660L & 1100L 4-Wheeled' },
        { src: 'assets/images/dustbins/freestanding_sflb.png', title: 'SFLB Series' },
        { src: 'assets/images/dustbins/full_page_4.png', title: 'Catalogue Specs' }
      ],
      desc: 'Supreme Wheeled Wastebins are the industry benchmark for municipal solid waste management, residential societies, corporate IT parks, and industrial factory floors. Manufactured from high-density, UV-stabilized polymer in both Injection and Rotational molded versions. Features heavy-duty solid rubber wheels mounted on solid steel axles for smooth rolling over steps, curbs, and rough roads.',
      specs: [
        { label: 'Available Capacities', val: '90 Litres, 120 Litres, 240 Litres' },
        { label: '90L Dimensions (LxWxH)', val: '445 x 445 x 775 mm (Bottom: 310 x 310 mm)' },
        { label: '90L Lid Dimensions', val: '410 x 410 x 70 mm' },
        { label: '120L Dimensions (LxWxH)', val: '495 x 495 x 825 mm (Bottom: 355 x 355 mm)' },
        { label: '120L Lid Dimensions', val: '460 x 460 x 60 mm' },
        { label: '240L Dimensions (LxWxH)', val: '580 x 660 x 1000 mm (Bottom: 490 x 420 mm)' },
        { label: '240L Lid Dimensions', val: '640 x 570 x 65 mm' },
        { label: 'Wheel Specification', val: '200 mm Solid Rubber Wheels + High-Tensile Steel Axle' },
        { label: 'Molding Variant', val: 'Injection Molded & Roto Molded Options' },
        { label: 'UV Resistance', val: '100% UV-Stabilized for Intense Outdoor Sunlight' }
      ],
      features: [
        'High chemical resistance to acids, alkalis, and decaying organic waste.',
        'Curved domed lid repels rainwater collection and prevents animals from opening.',
        'Heavy-duty steel axle withstands heavy municipal loads without bending.',
        'Compatible with standard municipal bin-lifter mechanisms.'
      ]
    },

    'compactor-4wheel-bins': {
      title: 'Supreme 4-Wheeled Garbage Compactor Bins (660L & 1100L)',
      category: 'Commercial Compactor Bins',
      categorySlug: 'dustbins',
      subtitle: 'DIN EN 840 Standard Bulk Containers for Hydraulic Compactor Trucks',
      mainImg: 'assets/images/dustbins/compactor_4wheel_bins.png',
      relatedImgs: [
        { src: 'assets/images/dustbins/compactor_4wheel_bins.png', title: '660L & 1100L Heavy Duty' },
        { src: 'assets/images/dustbins/wheeled_bins.png', title: '2-Wheeled Range' },
        { src: 'assets/images/dustbins/collection_rickshaw.png', title: 'Rickshaw System' },
        { src: 'assets/images/dustbins/full_page_4.png', title: 'Catalogue Specs' }
      ],
      desc: 'Supreme 4-Wheeled Waste Containers provide mega-capacity refuse storage for commercial complexes, manufacturing plants, hospitals, residential townships, and smart city waste collection points. Precision injection-molded from UV-stabilized virgin HDPE with honeycomb reinforcement grids. Fully compatible with municipal hydraulic compactor lifting lifters.',
      specs: [
        { label: '660 Litre Dimensions', val: '1375 (L) x 710 (W) x 1210 (H) mm' },
        { label: '1100 Litre Dimensions', val: '1350 (L) x 1035 (W) x 1295 (H) mm' },
        { label: 'Manufacturing Process', val: 'High-Pressure Injection Molded (HDPE)' },
        { label: 'Caster Wheel System', val: 'Four 360° Swivel Heavy-Duty Rubber Casters with Foot Brakes' },
        { label: 'Compactor Compatibility', val: 'DIN EN 840 Standard Lifting Trunnions & Comb Lifts' },
        { label: 'Lid Design', val: 'Curved Easy-Lift Domed Lid with Rain Runoff Channels' },
        { label: 'Drainage Plug', val: 'Threaded Base Drain Plug for Pressure Washout' },
        { label: 'Operating Temperature', val: '-20°C to +80°C Chemical & Frost Proof' }
      ],
      features: [
        'Certified DIN EN 840 compatibility for mechanized rear & side compactor trucks.',
        'Dual foot-operated caster brakes ensure total stability on slopes.',
        'Deep ergonomic grip handles around body perimeter for multi-angle maneuvering.',
        'Smooth internal cavity allows clean, residue-free waste dumping.'
      ]
    },

    'freestanding-sflb': {
      title: 'Supreme Free Standing Wastebins - SFLB (50L – 150L)',
      category: 'Free Standing Commercial Bins',
      categorySlug: 'dustbins',
      subtitle: 'Weatherproof Hooded Public Bins for Parks, Campuses & High-Traffic Arenas',
      mainImg: 'assets/images/dustbins/freestanding_sflb.png',
      relatedImgs: [
        { src: 'assets/images/dustbins/freestanding_sflb.png', title: 'Full SFLB Series' },
        { src: 'assets/images/dustbins/sflb_injection.png', title: '80L & 100L Injection Molded' },
        { src: 'assets/images/dustbins/spdlb_dual_bin.png', title: 'Dual Segregation Bins' },
        { src: 'assets/images/dustbins/full_page_3.png', title: 'Catalogue Specs' }
      ],
      desc: 'The Supreme SFLB series is crafted for outdoor parks, corporate promenades, bus terminals, and shopping arcades. Features an engineered protective hood canopy that keeps rainwater out while presenting wide dual apertures for convenient litter deposit. Available in heavy-duty roto-molded and injection-molded models.',
      specs: [
        { label: 'SFLB - 50L Dimensions', val: 'Top: 350x300 mm | Bottom: 290x255 mm | Height: 775 mm' },
        { label: 'SFLB - 60L Dimensions', val: 'Top: 415x415 mm | Bottom: 295x295 mm | Height: 810 mm' },
        { label: 'SFLB - 80L Dimensions', val: 'Top: 410x410 mm | Bottom: 305x305 mm | Height: 930 mm' },
        { label: 'SFLB - 100L Dimensions', val: 'Top: 505x505 mm | Bottom: 350x350 mm | Height: 915 mm' },
        { label: 'SFLB - 150L Dimensions', val: 'Top: 525x575 mm | Bottom: 425x475 mm | Height: 1025 mm' },
        { label: '80L Injection Molded', val: 'Top: 430x430 mm | Bottom: 310x310 mm | Height: 891 mm' },
        { label: '100L Injection Molded', val: 'Top: 490x490 mm | Bottom: 370x370 mm | Height: 940 mm' },
        { label: 'Mounting Base', val: 'Freestanding or Bolt-Down Anchoring Plate' }
      ],
      features: [
        'Hooded rain canopy prevents waterlogging during heavy downpours.',
        'Dual wide access openings permit litter throw from both directions.',
        'Corrosion-proof polymer impervious to rusting, dog bites, and weather decay.',
        'Smooth surfaces support custom client branding, municipal logos, and messages.'
      ]
    },

    'pole-mounted-splb': {
      title: 'Supreme Pole-Mounted Litter Bins (SPLB & SPDLB)',
      category: 'Municipal Pole & Street Bins',
      categorySlug: 'dustbins',
      subtitle: 'Single (SPLB) & Dual Segregation (SPDLB 50L x 2) Bins with MS Stand',
      mainImg: 'assets/images/dustbins/spdlb_dual_bin.png',
      relatedImgs: [
        { src: 'assets/images/dustbins/spdlb_dual_bin.png', title: 'Dual Wet/Dry Bin' },
        { src: 'assets/images/dustbins/splb_pole_mounted.png', title: 'SPLB 50L/100L Single' },
        { src: 'assets/images/dustbins/splb_swing_pole.png', title: 'SPLB Swing Pole Stand' },
        { src: 'assets/images/dustbins/freestanding_sflb.png', title: 'Free Standing Series' }
      ],
      desc: 'Designed for Swachh Bharat municipal street sanitation, metro stations, smart cities, and public walkways. Supreme Pole-Mounted Bins mount securely to steel posts or freestanding swing frames. The SPDLB dual-bin system provides color-coded Green (Wet Waste) and Blue (Dry Waste) segregation, with quick-dump pivot swing for rapid cleaning by sanitation crews.',
      specs: [
        { label: 'SPLB Single Capacities', val: '50 Litres, 60 Litres, 80 Litres, 100 Litres' },
        { label: 'SPDLB Dual Capacity', val: '50L x 2 Bins (Total 100 Litres Segregated Capacity)' },
        { label: 'Stand Structure', val: 'Heavy-Duty Powder-Coated Mild Steel (MS) Pipe Structure' },
        { label: 'Emptying Mechanism', val: '180° Swivel / Tilt Pivot for Instant Emptying' },
        { label: 'Segregation Colors', val: 'Green for Wet Waste, Blue for Dry Waste (Swachh Bharat Norms)' },
        { label: 'Weather Protection', val: '100% Anti-Corrosive Coating & UV-Protected Heavy Polymer' }
      ],
      features: [
        'Elevated off the ground to prevent street animal interference and flood damage.',
        '180° tilt pivot mechanism enables sanitary workers to empty bins in seconds.',
        'Promotes source segregation in public zones in line with municipal hygiene goals.',
        'Durable powder-coated MS frame resists vandalism and corrosive outdoor air.'
      ]
    },

    'biomedical-foot-bins': {
      title: 'Supreme Biomedical Foot-Operated Wastebins (45L)',
      category: 'Biomedical & Hospital Bins',
      categorySlug: 'dustbins',
      subtitle: 'Color-Coded Hands-Free Clinical Receptacles with & without MS Stand',
      mainImg: 'assets/images/dustbins/biomedical_foot_bins.png',
      relatedImgs: [
        { src: 'assets/images/dustbins/biomedical_foot_bins.png', title: 'Biomedical Range' },
        { src: 'assets/images/dustbins/swing_lid_wastebin.png', title: 'Swing Lid Bins' },
        { src: 'assets/images/dustbins/wheeled_bins.png', title: 'Wheeled Mobile Bins' },
        { src: 'assets/images/dustbins/full_page_4.png', title: 'Catalogue Specs' }
      ],
      desc: 'Specially engineered to meet National Biomedical Waste Management guidelines for hospitals, pathology labs, operation theatres, and dental clinics. Features a rugged foot-pedal system that enables 100% hands-free lid opening to stop hospital-acquired infections (HAI). Available in mandatory regulatory colors: Yellow, Red, Blue, and Black.',
      specs: [
        { label: 'Capacity', val: '45 Litres' },
        { label: 'Top Dimension', val: '408 x 460 x 523 mm' },
        { label: 'Bottom Dimension', val: '304 x 360 x 523 mm' },
        { label: 'Pedal Mechanism', val: 'Heavy-Duty Foot Pedal with Reinforced Linkage Rod' },
        { label: 'Regulatory Colors', val: 'Yellow (Infectious), Red (Plastics), Blue (Glass), Black (General)' },
        { label: 'Stand Option', val: 'Available with or without Heavy-Duty MS Floor Stand' },
        { label: 'Compliance', val: 'Bio-Medical Waste Management Rules Certified' }
      ],
      features: [
        'Hands-free foot pedal completely prevents cross-contamination and viral spread.',
        'Heavy-gauge pedal linkage cycle-tested for high-traffic hospital departments.',
        'Airtight lid rim seals hazardous bio-waste vapors and offensive odors inside.',
        'Conforms to Ministry of Environment & Climate Change Biomedical Rules.'
      ]
    },

    'collection-hand-bucket': {
      title: 'Supreme Waste Collection Hand Buckets (30L & 40L) & Rickshaw',
      category: 'Municipal Collection Equipment',
      categorySlug: 'dustbins',
      subtitle: 'Square Rickshaw Buckets with Galvanized Handle for Door-to-Door Municipal Tipping',
      mainImg: 'assets/images/dustbins/collection_buckets.png',
      relatedImgs: [
        { src: 'assets/images/dustbins/collection_buckets.png', title: '30L & 40L Hand Buckets' },
        { src: 'assets/images/dustbins/collection_rickshaw.png', title: 'Municipal Rickshaw Carrier' },
        { src: 'assets/images/dustbins/wheel_barrow.png', title: 'Wheel Barrow' },
        { src: 'assets/images/dustbins/full_page_2.png', title: 'Catalogue Specs' }
      ],
      desc: 'Designed for primary door-to-door municipal solid waste collection in urban wards, village panchayats, and large housing societies. Tapered square design fits securely into waste collection tricycles and hand barrows. Equipped with heavy-gauge galvanized metal bail handles for carrying heavy wet and dry waste.',
      specs: [
        { label: '30L Injection Molded', val: 'Top: 325 x 325 x 325 mm | Bottom: 290 x 290 mm' },
        { label: '40L Roto Molded', val: 'Top: 355 x 345 x 460 mm | Bottom: 285 x 285 mm' },
        { label: 'Handle Type', val: 'Heavy-Gauge Galvanized Zinc-Plated Metal Bail Handle' },
        { label: 'Carriage Compatibility', val: 'Fits Standard 6-8 Bucket Tricycle Carriage Frames' },
        { label: 'Material', val: 'Tough Virgin Impact-Resistant Polymer' },
        { label: 'Segregation Colors', val: 'Green for Wet Waste, Blue for Dry Waste' }
      ],
      features: [
        'Square footprint maximizes loading density on collection tricycles.',
        'Sturdy steel handle allows workers to lift and dump high-density waste effortlessly.',
        'Impact-resistant walls withstand rough dumping on municipal transfer trucks.',
        'Seamless one-piece molding prevents leakage of pungent liquid leachate.'
      ]
    },

    'wheel-barrow-ghamela': {
      title: 'Supreme Wheel Barrow & ROTO Ghamela',
      category: 'Municipal & Construction Handling',
      categorySlug: 'dustbins',
      subtitle: 'Unbreakable Heavy-Duty Rotomolded Barrows (110L/150L) & Ghamelas (18"/24")',
      mainImg: 'assets/images/dustbins/wheel_barrow.png',
      relatedImgs: [
        { src: 'assets/images/dustbins/wheel_barrow.png', title: '110L / 150L Wheel Barrow' },
        { src: 'assets/images/dustbins/roto_ghamela.png', title: '18" & 24" Supreme ROTO Ghamela' },
        { src: 'assets/images/dustbins/collection_buckets.png', title: 'Collection Buckets' },
        { src: 'assets/images/dustbins/full_page_3.png', title: 'Catalogue Specs' }
      ],
      desc: 'Supreme Rotational Molded Wheel Barrows and Ghamelas replace outdated metal and rubber gear in construction, agriculture, garden maintenance, and municipal sweepers. Unlike iron ghamelas and steel wheel barrows, Supreme polymer pans never rust, dent, crack, or corrode from wet cement, chemical fertilizers, or animal waste.',
      specs: [
        { label: 'Wheel Barrow 110L Dimensions', val: 'Top: 735 x 600 mm | Bottom: 450 x 500 mm | Height: 410 mm' },
        { label: 'Wheel Barrow 150L Dimensions', val: 'Top: 820 x 630 mm | Bottom: 500 x 550 mm | Height: 480 mm' },
        { label: 'ROTO Ghamela 18 Inch (SRG)', val: 'Top: 465 mm | Bottom: 253 mm | Height: 110 mm' },
        { label: 'ROTO Ghamela 24 Inch (SRG)', val: 'Top: 650 mm | Bottom: 723 mm | Height: 220 mm' },
        { label: 'Chassis Frame', val: 'Heavy Tubular MS Powder-Coated Structure' },
        { label: 'Wheel Specification', val: 'Pneumatic / Solid Heavy Rubber Wheel with High-Load Bearings' }
      ],
      features: [
        'Non-stick polymer surface ensures wet mortar, soil, and waste slide off cleanly.',
        'Unbreakable rotational molded structure withstands extreme drops and impact.',
        'Lightweight design reduces worker fatigue and increases daily productivity.',
        '100% rustproof and corrosion resistant even when used in coastal & acidic environments.'
      ]
    },

        // =========================================================================
    // SUPREME ROTO MOULDED PALLETS (From Brochure: Roto Moulded Pallets Brochure New Layout 28.08.pdf)
    // =========================================================================

    'roto-1200-1200-150-cheker-rack': {
      title: 'Supreme Roto Pallet 1200x1200x150 mm (Cheker Top & Rack Lock)',
      category: 'Heavy Duty & Racking Pallets',
      categorySlug: 'pallets',
      subtitle: 'Heavy-Duty 3 Runner Pallet with Anti-Skid Cheker Top & Rack Lock (1200 x 1200 x 150 mm)',
      mainImg: 'assets/images/roto_pallets/roto-1200-1200-150-cheker-rack.png',
      relatedImgs: [
        { src: 'assets/images/roto_pallets/roto-1200-1200-150-cheker-rack.png', title: 'Cheker Top & Runners' },
        { src: 'assets/images/roto_pallets/roto-1200-1200-150-plain-edge.png', title: 'Plain Top with Edges' },
        { src: 'assets/images/roto_pallets/roto-1200-1200-160-plain.png', title: '160mm Height Model' },
        { src: 'assets/images/roto_pallets/roto-hero-cover.png', title: 'Roto Range Overview' }
      ],
      desc: 'Supreme Roto Pallet 1200x1200x150 mm is a seamless rotational moulded plastic pallet engineered for heavy-load industrial storage and selective high-bay racking. Features a durable diamond cheker non-slip top deck, heavy-duty 3 bottom runners, and integrated Rack Lock indentations that lock securely onto warehouse beam racks. Available with internal PU foam or Structural Steel Frame for extreme load capacities.',
      specs: [
        { label: 'Series / Model', val: '1200 x 1200 x 150 Series (Roto Moulded)' },
        { label: 'External Dimensions', val: '1200 x 1200 x 150 mm' },
        { label: 'Deck Design', val: 'Anti-Skid Diamond Cheker Top Surface' },
        { label: 'Base Configuration', val: '3 Heavy Runners (2-Way Entry, 1200mm Main Side)' },
        { label: 'Special Features', val: 'Integrated Rack Lock for Beam Racks' },
        { label: 'Static Load (PU/Steel)', val: '2000 kg / 3000 kg / 4000 kg' },
        { label: 'Racking Load (PU/Steel)', val: '1000 kg / 1500 kg / 2000 kg' },
        { label: 'Dynamic Load', val: '500 kg / 1000 kg / 1500 kg' },
        { label: 'Reinforcement Options', val: 'Available in Polyurethane (PU) & Structural Steel Frame' },
        { label: 'Material Grade', val: '100% Virgin Food-Grade Rotational LLDPE' }
      ],
      features: [
        'One-piece seamless rotational molding eliminates joints, welds, and stress cracks.',
        'Anti-slip cheker surface prevents pallets and boxes from shifting during transit.',
        'Integrated Rack Lock provides maximum slip-off safety on open pallet racking beams.',
        'Internally reinforceable with PU foam or solid steel pipes for up to 4000 kg static load.'
      ]
    },

    'roto-1200-1200-150-plain-edge': {
      title: 'Supreme Roto Pallet 1200x1200x150 mm (Plain Top & Safety Edges)',
      category: 'Heavy Duty & Racking Pallets',
      categorySlug: 'pallets',
      subtitle: 'Clean Smooth Top with 25mm Safety Perimeter Edges & Rack Lock (1200 x 1200 x 150 mm)',
      mainImg: 'assets/images/roto_pallets/roto-1200-1200-150-plain-edge.png',
      relatedImgs: [
        { src: 'assets/images/roto_pallets/roto-1200-1200-150-plain-edge.png', title: 'Plain Top with Edges' },
        { src: 'assets/images/roto_pallets/roto-1200-1200-150-cheker-rack.png', title: 'Cheker Surface' },
        { src: 'assets/images/roto_pallets/roto-1200-1200-160-plain.png', title: '160mm Height Model' },
        { src: 'assets/images/roto_pallets/roto-hero-cover.png', title: 'Roto Range' }
      ],
      desc: 'Engineered with a totally smooth plain surface and 25mm raised safety perimeter edges (lips) to prevent cartons, boxes, or sacks from sliding off during material movement. Features 3 heavy bottom runners with 2-way entry and Rack Lock.',
      specs: [
        { label: 'Series / Model', val: '1200 x 1200 x 150 Series' },
        { label: 'Dimensions', val: '1200 x 1200 x 150 mm' },
        { label: 'Deck Type', val: 'Plain Flat Top with 25 mm Safety Raised Edges' },
        { label: 'Entry & Base', val: '3 Runner Pallet, 2-Way Entry (1200 mm Side)' },
        { label: 'Safety Feature', val: 'Safety Edge Lip + Rack Lock' },
        { label: 'Static Load', val: '2000 kg / 3000 kg / 4000 kg' },
        { label: 'Racking Load', val: '1000 kg / 1500 kg / 2000 kg' },
        { label: 'Dynamic Load', val: '500 kg / 1000 kg / 1500 kg' },
        { label: 'Material', val: 'Virgin Roto Polymer (Food & Chemical Grade)' }
      ],
      features: [
        '25mm perimeter safety edge holds cartons and boxes securely in place.',
        'Ultra-smooth plain top allows easy sanitary wipe-down and steam wash.',
        'Rack Lock system prevents displacement when lifted onto high-bay warehouse racks.',
        'High impact rotational molded construction withstands rough industrial handling.'
      ]
    },

    'roto-1200-1200-160-plain': {
      title: 'Supreme Roto Pallet 1200x1200x160 mm (Heavy 160mm Height)',
      category: 'Heavy Duty & Racking Pallets',
      categorySlug: 'pallets',
      subtitle: 'Extra-Clearance 160mm Height Heavy Industrial Roto Pallet (1200 x 1200 x 160 mm)',
      mainImg: 'assets/images/roto_pallets/roto-1200-1200-160-plain.png',
      relatedImgs: [
        { src: 'assets/images/roto_pallets/roto-1200-1200-160-plain.png', title: '160mm Height Plain' },
        { src: 'assets/images/roto_pallets/roto-1200-1200-160-plain-rack.png', title: 'With Rack Lock' },
        { src: 'assets/images/roto_pallets/roto-1200-1200-150-cheker-rack.png', title: '150mm Cheker' }
      ],
      desc: 'Supreme 1200 x 1200 x 160 mm heavy industrial roto pallet offers 160 mm ground clearance, accommodating all heavy forklift tines effortlessly. Built with 3 continuous bottom runners for high static and racking stability.',
      specs: [
        { label: 'Series', val: '1200 x 1200 x 160 Series' },
        { label: 'Dimensions', val: '1200 x 1200 x 160 mm' },
        { label: 'Deck Type', val: 'Solid Plain Flat Top' },
        { label: 'Base', val: '3 Runner Base, 2-Way Entry' },
        { label: 'Static Load', val: '2000 kg / 3000 kg / 4000 kg' },
        { label: 'Racking Load', val: '1000 kg / 1500 kg / 2000 kg' },
        { label: 'Dynamic Load', val: '500 kg / 1000 kg / 1500 kg' },
        { label: 'Reinforcement', val: 'Available in PU & Steel Frame' }
      ],
      features: [
        '160 mm extra height provides ample clearance for rough floor surfaces.',
        'Continuous runners distribute heavy industrial loads evenly.',
        'Seamless structure resistant to rot, moisture, and corrosion.',
        'Ideal for chemical plants, paper mills, and textile warehouses.'
      ]
    },

    'roto-1200-1000-150-4way-runner': {
      title: 'Supreme Roto Pallet 1200x1000x150 mm (3 Runner, 4-Way Entry)',
      category: 'Euro & Standard Industrial',
      categorySlug: 'pallets',
      subtitle: 'Standard Industrial Size with 4-Way Entry Notches & 3 Full Runners (1200 x 1000 x 150 mm)',
      mainImg: 'assets/images/roto_pallets/roto-1200-1000-150-4way-runner.png',
      relatedImgs: [
        { src: 'assets/images/roto_pallets/roto-1200-1000-150-4way-runner.png', title: '4-Way 3-Runner' },
        { src: 'assets/images/roto_pallets/roto-1200-1000-150-9leg.png', title: '9-Leg Variant' },
        { src: 'assets/images/roto_pallets/roto-1200-800-150-4way-euro.png', title: 'Euro 1200x800' }
      ],
      desc: 'Combines the superior racking support of continuous 3 runners with 4-way access notches. Allows both forklifts and hand pallet trucks to operate from all sides, making it the most versatile pallet for modern FMCG and manufacturing warehouses.',
      specs: [
        { label: 'Series', val: '1200 x 1000 x 150 Series' },
        { label: 'Dimensions', val: '1200 x 1000 x 150 mm' },
        { label: 'Base Construction', val: '3 Continuous Runners with 4-Way Notches' },
        { label: 'Forklift & Truck Entry', val: '4-Way Entry (1000 mm Main Entry)' },
        { label: 'Deck Type', val: 'Smooth Plain Flat Surface' },
        { label: 'Static Load', val: '2000 kg / 3000 kg / 4000 kg' },
        { label: 'Racking Load', val: '1000 kg / 1500 kg / 2000 kg' },
        { label: 'Dynamic Load', val: '500 kg / 1000 kg / 1500 kg' }
      ],
      features: [
        '4-way entry allows rapid pallet handling in narrow warehouse aisles.',
        '3-runner base provides conveyor and pallet rack compatibility.',
        'High load ratings supported by optional steel or PU core.',
        'Completely splinter-free and safe for automated packaging lines.'
      ]
    },

    'roto-1200-1000-150-9leg': {
      title: 'Supreme Roto Pallet 1200x1000x150 mm (9-Leg 4-Way Pallet)',
      category: '9-Leg Full 4-Way Entry',
      categorySlug: 'pallets',
      subtitle: 'Universal 9-Leg Floor Stacking & Hand Pallet Truck Pallet (1200 x 1000 x 150 mm)',
      mainImg: 'assets/images/roto_pallets/roto-1200-1000-150-9leg.png',
      relatedImgs: [
        { src: 'assets/images/roto_pallets/roto-1200-1000-150-9leg.png', title: '9-Leg Plain' },
        { src: 'assets/images/roto_pallets/roto-1200-1000-150-9leg-slotted.png', title: 'Slotted Top' },
        { src: 'assets/images/roto_pallets/roto-1200-1000-150-4way-runner.png', title: '3-Runner' }
      ],
      desc: 'Full 4-way entry 9-leg design engineered for effortless maneuverability with manual hand pallet trucks, electric stackers, and forklifts from any direction. Smooth plain top protects goods from marking or indentation.',
      specs: [
        { label: 'Series', val: '1200 x 1000 x 150 Series' },
        { label: 'Dimensions', val: '1200 x 1000 x 150 mm' },
        { label: 'Leg Design', val: '9 Heavy-Duty Hollow Molded Legs' },
        { label: 'Entry', val: 'Universal 4-Way Pallet Truck & Forklift Entry' },
        { label: 'Static Load', val: '2000 kg / 3000 kg / 4000 kg' },
        { label: 'Dynamic Load', val: '500 kg / 1000 kg / 1500 kg' },
        { label: 'Racking Load', val: '1000 kg / 1500 kg / 2000 kg (with PU/Steel)' }
      ],
      features: [
        'Universal 4-way access works seamlessly with all hand pallet trucks.',
        '9-leg layout distributes loads evenly on flat warehouse floors.',
        'Smooth plain deck prevents carton puncture and damage.',
        '100% moisture-proof and easy to sanitize.'
      ]
    },

    'roto-1200-1000-150-9leg-slotted': {
      title: 'Supreme Roto Pallet 1200x1000x150 mm (Hygienic Slotted Deck 9-Leg)',
      category: '9-Leg Full 4-Way Entry',
      categorySlug: 'pallets',
      subtitle: 'Ventilated Slotted Deck 4-Way 9-Leg Pallet for Cold Storage & Pharma (1200 x 1000 x 150 mm)',
      mainImg: 'assets/images/roto_pallets/roto-1200-1000-150-9leg-slotted.png',
      relatedImgs: [
        { src: 'assets/images/roto_pallets/roto-1200-1000-150-9leg-slotted.png', title: 'Slotted 9-Leg' },
        { src: 'assets/images/roto_pallets/roto-1200-1000-150-9leg.png', title: 'Plain 9-Leg' },
        { src: 'assets/images/roto_pallets/roto-1200-800-150-9leg-kissoff.png', title: 'Euro 9-Leg' }
      ],
      desc: 'Features ventilated top slots for constant air circulation and rapid liquid drainage. Manufactured in hygienic cleanroom off-white/light grey color, making it the top choice for pharmaceutical packaging, cold storage blast freezing, and food processing.',
      specs: [
        { label: 'Series', val: '1200 x 1000 x 150 Series' },
        { label: 'Dimensions', val: '1200 x 1000 x 150 mm' },
        { label: 'Deck Type', val: 'Ventilated Slotted Hygienic Deck' },
        { label: 'Base', val: '9 Legs, Full 4-Way Entry' },
        { label: 'Static Load', val: '2000 kg / 3000 kg / 4000 kg' },
        { label: 'Dynamic Load', val: '500 kg / 1000 kg / 1500 kg' },
        { label: 'Racking Load', val: '1000 kg / 1500 kg / 2000 kg' },
        { label: 'Color', val: 'Hygienic Cleanroom Off-White / Grey' }
      ],
      features: [
        'Ventilated slotted surface accelerates freezing cycles in cold storage.',
        'Prevents condensation buildup under packed pharmaceuticals and food cartons.',
        'Full 4-way entry for both forklifts and manual hand trucks.',
        'Resistant to sub-zero temperatures down to -30Â°C.'
      ]
    },

    'roto-1200-800-150-4way-euro': {
      title: 'Supreme Roto Euro Pallet 1200x800x150 mm (3 Runner, 4-Way Entry)',
      category: 'Euro & Standard Industrial',
      categorySlug: 'pallets',
      subtitle: 'European Standard Dimension 1200x800mm with 4-Way Notched Runners (1200 x 800 x 150 mm)',
      mainImg: 'assets/images/roto_pallets/roto-1200-800-150-4way-euro.png',
      relatedImgs: [
        { src: 'assets/images/roto_pallets/roto-1200-800-150-4way-euro.png', title: 'Euro 3-Runner 4-Way' },
        { src: 'assets/images/roto_pallets/roto-1200-800-150-9leg-kissoff.png', title: 'Euro 9-Leg' },
        { src: 'assets/images/roto_pallets/roto-1200-800-150-3runner-safety.png', title: 'With Safety Edges' }
      ],
      desc: 'Official European standard format (1200 x 800 mm). Ideal for pharmaceutical distribution, automated high-bay racking, and container truck loading. Features 3 bottom runners with 4-way entry notches.',
      specs: [
        { label: 'Format', val: 'European Standard Euro Pallet' },
        { label: 'Dimensions', val: '1200 x 800 x 150 mm' },
        { label: 'Base', val: '3 Continuous Runners with 4-Way Cutouts' },
        { label: 'Static Load', val: '2000 kg / 3000 kg / 4000 kg' },
        { label: 'Racking Load', val: '1000 kg / 1500 kg / 2000 kg' },
        { label: 'Dynamic Load', val: '500 kg / 1000 kg / 1500 kg' }
      ],
      features: [
        'Euro standard dimensions fit European freight trucks and automated racks.',
        '4-way entry gives maximum warehouse maneuverability.',
        'Unbreakable rotational molded structure withstands high fork impacts.',
        'Available in multiple colors (Blue, Green, Red, Yellow).'
      ]
    },

    'roto-1200-800-150-9leg-kissoff': {
      title: 'Supreme Roto Euro Pallet 1200x800x150 mm (9-Leg Kiss-Off Plain Top)',
      category: '9-Leg Full 4-Way Entry',
      categorySlug: 'pallets',
      subtitle: 'Cleanroom Euro 9-Leg Pallet with Structural Internal Kiss-Off Columns (1200 x 800 x 150 mm)',
      mainImg: 'assets/images/roto_pallets/roto-1200-800-150-9leg-kissoff.png',
      relatedImgs: [
        { src: 'assets/images/roto_pallets/roto-1200-800-150-9leg-kissoff.png', title: 'Euro 9-Leg Kiss-Off' },
        { src: 'assets/images/roto_pallets/roto-1200-800-150-4way-euro.png', title: 'Euro 3-Runner' },
        { src: 'assets/images/roto_pallets/roto-1200-1000-150-9leg.png', title: '1200x1000 9-Leg' }
      ],
      desc: 'Features internal molded kiss-off structural support pillars that fuse the upper deck to the base, providing extreme rigidity without extra weight. Designed for cleanrooms, laboratories, and floor storage.',
      specs: [
        { label: 'Series', val: '1200 x 800 x 150 Series' },
        { label: 'Dimensions', val: '1200 x 800 x 150 mm (Euro Standard)' },
        { label: 'Structure', val: 'Internal Kiss-Off Pillars for Extreme Rigidity' },
        { label: 'Base', val: '9 Legs, Full 4-Way Entry' },
        { label: 'Static Load', val: '1000 kg unified load' },
        { label: 'Dynamic Load', val: '500 kg unified load' }
      ],
      features: [
        'Kiss-off structural columns prevent top deck sagging and oil-canning.',
        'Flat seamless surface leaves no indentations on sensitive pharmaceutical cartons.',
        'Full 4-way access for manual hand pallet trucks.',
        'Steam-cleanable and impervious to cleaning agents.'
      ]
    },

    'roto-1000-1200-150-cheker-rack': {
      title: 'Supreme Roto Pallet 1000x1200x150 mm (Cheker Top & Rack Lock)',
      category: 'Heavy Duty & Racking Pallets',
      categorySlug: 'pallets',
      subtitle: 'High Load Capacity Pallet with Anti-Skid Cheker & Up to 5000 kg Static (1000 x 1200 x 150 mm)',
      mainImg: 'assets/images/roto_pallets/roto-1000-1200-150-cheker-rack.png',
      relatedImgs: [
        { src: 'assets/images/roto_pallets/roto-1000-1200-150-cheker-rack.png', title: 'Cheker Rack Lock' },
        { src: 'assets/images/roto_pallets/roto-1000-1200-150-plain-rack-safety.png', title: 'Safety Edges Model' },
        { src: 'assets/images/roto_pallets/roto-1200-1200-150-cheker-rack.png', title: '1200x1200 Model' }
      ],
      desc: 'Heavy-duty 1000 x 1200 mm pallet capable of up to 5000 kg static and 2000 kg racking load with steel or PU frame reinforcement. Equipped with a diamond cheker pattern and Rack Lock system.',
      specs: [
        { label: 'Series', val: '1000 x 1200 x 150 Series' },
        { label: 'Dimensions', val: '1000 x 1200 x 150 mm' },
        { label: 'Deck Type', val: 'Anti-Skid Cheker Pattern' },
        { label: 'Base', val: '3 Runner, 2-Way Entry (1200 mm Main Entry)' },
        { label: 'Static Load', val: '2000 kg / 3000 kg / 4000 kg / 5000 kg' },
        { label: 'Racking Load', val: '1000 kg / 1500 kg / 2000 kg' },
        { label: 'Dynamic Load', val: '500 kg / 1000 kg / 1500 kg / 2000 kg' }
      ],
      features: [
        'Immense load capacity up to 5000 kg static for heavy metal and chemical warehousing.',
        'Anti-skid diamond cheker profile holds heavy stacks without shifting.',
        'Rack Lock features ensure precise beam alignment in selective racks.',
        'Unbreakable rotational molded build lasts 10+ years.'
      ]
    },

    'roto-1000-1200-150-plain-rack-safety': {
      title: 'Supreme Roto Pallet 1000x1200x150 mm (Plain Top, Rack Lock & Safety Edges)',
      category: 'Heavy Duty & Racking Pallets',
      categorySlug: 'pallets',
      subtitle: 'Heavy-Duty 5000 kg Static Pallet with 10mm Perimeter Safety Edges (1000 x 1200 x 150 mm)',
      mainImg: 'assets/images/roto_pallets/roto-1000-1200-150-plain-rack-safety.png',
      relatedImgs: [
        { src: 'assets/images/roto_pallets/roto-1000-1200-150-plain-rack-safety.png', title: 'Safety Edges Plain' },
        { src: 'assets/images/roto_pallets/roto-1000-1200-150-cheker-rack.png', title: 'Cheker Model' },
        { src: 'assets/images/roto_pallets/roto-1500-1200-160-jumbo.png', title: '1500mm Jumbo' }
      ],
      desc: 'Features a 10mm high raised perimeter edge around all four sides of the top deck, ensuring boxes, plastic crates, and containers cannot slide off during sharp forklift turns. Fully rack lock enabled.',
      specs: [
        { label: 'Series', val: '1000 x 1200 x 150 Series' },
        { label: 'Dimensions', val: '1000 x 1200 x 150 mm' },
        { label: 'Perimeter Safety Edge', val: 'Width 10mm x Height 10mm Raised Lip' },
        { label: 'Static Load', val: '2000 kg / 3000 kg / 4000 kg / 5000 kg' },
        { label: 'Racking Load', val: '1000 kg / 1500 kg / 2000 kg' },
        { label: 'Dynamic Load', val: '500 kg / 1000 kg / 1500 kg / 2000 kg' }
      ],
      features: [
        '10mm perimeter edge prevents carton sliding during transport.',
        'Smooth flat deck allows effortless surface cleaning.',
        'Internal steel pipe frame option guarantees zero beam sag in racking.',
        'Resistant to sub-zero freezing and outdoor UV exposure.'
      ]
    },

    'roto-1000-1000-160-square': {
      title: 'Supreme Roto Pallet 1000x1000x160 mm (Square 1-Meter Pallet)',
      category: 'Compact & Square Pallets',
      categorySlug: 'pallets',
      subtitle: 'Symmetrical 1m x 1m Heavy-Duty Warehousing Pallet with Rack Lock (1000 x 1000 x 160 mm)',
      mainImg: 'assets/images/roto_pallets/roto-1000-1000-160-square.png',
      relatedImgs: [
        { src: 'assets/images/roto_pallets/roto-1000-1000-160-square.png', title: '1000x1000 Square' },
        { src: 'assets/images/roto_pallets/roto-1000-800-160-compact.png', title: '1000x800 Compact' },
        { src: 'assets/images/roto_pallets/roto-1100-1100-160-9leg.png', title: '1100x1100' }
      ],
      desc: 'Square 1000 x 1000 mm footprint designed for square bulk storage, polymer granule bags, and compact industrial storage areas. High 160 mm profile provides extra ground clearance.',
      specs: [
        { label: 'Dimensions', val: '1000 x 1000 x 160 mm' },
        { label: 'Format', val: 'Symmetrical 1m x 1m Square' },
        { label: 'Base', val: '3 Runner, 2-Way Entry, Rack Lock' },
        { label: 'Static Load', val: '2000 kg / 3000 kg / 4000 kg / 5000 kg' },
        { label: 'Racking Load', val: '1000 kg / 1500 kg / 2000 kg' }
      ],
      features: [
        'Symmetrical square dimensions fit tight warehouse layouts.',
        'Capable of handling up to 5000 kg static load with reinforcement.',
        'Smooth flat surface protects bag cargo from puncture.',
        'Heavy-duty runners withstand repeated forklift impacts.'
      ]
    },

    'roto-1000-800-160-compact': {
      title: 'Supreme Roto Pallet 1000x800x160 mm (Compact Warehousing Pallet)',
      category: 'Compact & Square Pallets',
      categorySlug: 'pallets',
      subtitle: 'Space-Saving 1000x800mm Pallet for Narrow Aisle Racks (1000 x 800 x 160 mm)',
      mainImg: 'assets/images/roto_pallets/roto-1000-800-160-compact.png',
      relatedImgs: [
        { src: 'assets/images/roto_pallets/roto-1000-800-160-compact.png', title: '1000x800 Compact' },
        { src: 'assets/images/roto_pallets/roto-750-750-160-mini.png', title: '750x750 Mini' },
        { src: 'assets/images/roto_pallets/roto-1200-800-150-4way-euro.png', title: 'Euro 1200x800' }
      ],
      desc: 'Compact 1000 x 800 mm pallet engineered for narrow-aisle warehousing, light freight transit, and medium industrial parts storage.',
      specs: [
        { label: 'Dimensions', val: '1000 x 800 x 160 mm' },
        { label: 'Base', val: '3 Runner, 2-Way Entry, Rack Lock' },
        { label: 'Static Load', val: '2000 kg / 3000 kg / 4000 kg' },
        { label: 'Racking Load', val: '1000 kg / 1500 kg / 2000 kg' }
      ],
      features: [
        'Compact footprint maximizes aisle space in crowded warehouses.',
        'Rack Lock system keeps pallet securely in place on high beams.',
        '100% moisture-proof, washable, and termite-proof.',
        'High impact rotational polymer build.'
      ]
    },

    'roto-750-750-160-mini': {
      title: 'Supreme Roto Pallet 750x750x160 mm (Mini Heavy-Duty Floor Pallet)',
      category: 'Compact & Square Pallets',
      categorySlug: 'pallets',
      subtitle: 'Compact 750mm Stacking Pallet for Retail, Basements & Small Goods (750 x 750 x 160 mm)',
      mainImg: 'assets/images/roto_pallets/roto-750-750-160-mini.png',
      relatedImgs: [
        { src: 'assets/images/roto_pallets/roto-750-750-160-mini.png', title: '750x750 Mini Blue' },
        { src: 'assets/images/roto_pallets/roto-750-750-150-white.png', title: '750x750 Cleanroom White' },
        { src: 'assets/images/roto_pallets/roto-1000-1000-160-square.png', title: '1000x1000 Square' }
      ],
      desc: 'Small footprint 750 x 750 mm square pallet designed for basement retail storage, mezzanine levels, and small industrial component handling.',
      specs: [
        { label: 'Dimensions', val: '750 x 750 x 160 mm' },
        { label: 'Format', val: 'Mini Square Stacking Pallet' },
        { label: 'Base', val: '3 Runner, 2-Way Entry, Rack Lock' },
        { label: 'Static Load', val: '1000 kg / 1500 kg' },
        { label: 'Dynamic Load', val: '500 kg / 750 kg' }
      ],
      features: [
        'Mini footprint fits into elevators, narrow doorways, and storage cages.',
        'High 160mm clearance allows easy lifting with pallet trucks.',
        'Available in standard blue and hygienic cleanroom white.',
        'Corrosion-free polymer surface protects delicate goods.'
      ]
    },

    'roto-1100-1100-160-9leg': {
      title: 'Supreme Roto Pallet 1100x1100x160 mm (Container Size 9-Leg Pallet)',
      category: '9-Leg Full 4-Way Entry',
      categorySlug: 'pallets',
      subtitle: '4-Way Entry Square Pallet Optimized for ISO Sea Freight Containers (1100 x 1100 x 160 mm)',
      mainImg: 'assets/images/roto_pallets/roto-1100-1100-160-9leg.png',
      relatedImgs: [
        { src: 'assets/images/roto_pallets/roto-1100-1100-160-9leg.png', title: '1100x1100 9-Leg' },
        { src: 'assets/images/roto_pallets/roto-1120-1120-160-cheker.png', title: '1120x1120 Cheker' },
        { src: 'assets/images/roto_pallets/roto-1200-1000-150-9leg.png', title: '1200x1000 9-Leg' }
      ],
      desc: 'Square 1100 x 1100 mm pallet dimensioned specifically to load side-by-side in 20ft and 40ft standard ISO shipping containers without wasted space.',
      specs: [
        { label: 'Dimensions', val: '1100 x 1100 x 160 mm' },
        { label: 'Base', val: '9 Heavy Legs, 4-Way Entry, Kiss-Off Structure' },
        { label: 'Static Load', val: '3000 kg / 4000 kg' },
        { label: 'Dynamic Load', val: '1500 kg' }
      ],
      features: [
        'Square 1100mm dimensions maximize cube efficiency in shipping containers.',
        'Full 4-way entry for both forklifts and manual pallet trucks.',
        'Kiss-off structural columns guarantee flat non-sagging deck.',
        'ISPM-15 exempt for global export shipments without fumigation.'
      ]
    },

    'roto-1500-1200-160-jumbo': {
      title: 'Supreme Roto Pallet 1500x1200x160 mm (Extra-Long 1.5M Jumbo Pallet)',
      category: 'Heavy Duty & Racking Pallets',
      categorySlug: 'pallets',
      subtitle: 'Extra-Long 1500mm Footprint for Large Machinery & Sheet Bundles (1500 x 1200 x 160 mm)',
      mainImg: 'assets/images/roto_pallets/roto-1500-1200-160-jumbo.png',
      relatedImgs: [
        { src: 'assets/images/roto_pallets/roto-1500-1200-160-jumbo.png', title: '1500mm Jumbo Pallet' },
        { src: 'assets/images/roto_pallets/roto-1200-1200-150-cheker-rack.png', title: '1200x1200 Square' },
        { src: 'assets/images/roto_pallets/roto-hero-cover.png', title: 'Roto Range' }
      ],
      desc: 'Oversized 1.5-meter long industrial pallet engineered to carry large industrial machinery parts, sheet bundles, solar panels, and oversized industrial products up to 4000 kg static load.',
      specs: [
        { label: 'Dimensions', val: '1500 x 1200 x 160 mm (Extra Long)' },
        { label: 'Base', val: '3 Runner, 2-Way Entry, Plain Top, Rack Lock' },
        { label: 'Static Load', val: '3000 kg / 4000 kg' },
        { label: 'Dynamic Load', val: '1500 kg' }
      ],
      features: [
        '1500 mm extra-long deck accommodates oversized equipment safely.',
        'Heavy-duty runners provide high bending rigidity under distributed loads.',
        'Internal steel frame prevents deflection when placed on racking beams.',
        '100% rustproof, weatherproof, and non-splintering.'
      ]
    },

    'roto-drum-1200-800-160': {
      title: 'Supreme Drum & Roll Cradle Pallet 1200x800x160 mm',
      category: 'Drum & Roll Cradle Pallets',
      categorySlug: 'pallets',
      subtitle: 'Curved Anti-Roll Concave Cradle Pallet for 600mm Drums & Industrial Rolls (1200 x 800 x 160 mm)',
      mainImg: 'assets/images/roto_pallets/roto-drum-1200-800-160.png',
      relatedImgs: [
        { src: 'assets/images/roto_pallets/roto-drum-1200-800-160.png', title: 'Curved Drum Bed' },
        { src: 'assets/images/roto_pallets/roto-drum-1200-1000-160.png', title: '1200x1000 Drum Pallet' },
        { src: 'assets/images/roto_pallets/roto-1200-800-150-4way-euro.png', title: 'Euro Flat Pallet' }
      ],
      desc: 'Specially engineered curved cradle profile for safely storing, handling, and transporting chemical barrels, paint drums, paper rolls, and textile fabric rolls up to 600 mm in diameter. The concave surface and 12mm safety edges lock the cylindrical drum firmly in place, completely eliminating accidental rolling off during forklift transport and warehouse storage.',
      specs: [
        { label: 'Series / Function', val: 'Drum & Cylindrical Roll Cradle Pallet' },
        { label: 'Dimensions (LxWxH)', val: '1200 x 800 x 160 mm' },
        { label: 'Cradle Capacity', val: 'Suitable for carrying drums / rolls up to 600 mm diameter' },
        { label: 'Safety Feature', val: 'Curved Bed + Safety Edge (12mm Width x 12mm Height)' },
        { label: 'Base & Entry', val: '3 Runner Pallet, 2-Way Entry (Main Entry from 1200 mm Side)' },
        { label: 'Static Load', val: '1000 kg - 2000 kg' },
        { label: 'Dynamic Load', val: '500 kg - 1000 kg' },
        { label: 'Material', val: 'High Chemical-Resistant Virgin Rotational LLDPE' }
      ],
      features: [
        'Curved concave profile locks drums and cylindrical rolls securely in place.',
        'Prevents dangerous roll-off accidents during transport of hazardous chemicals.',
        'Resistant to aggressive chemical leaks, battery acids, oils, and industrial solvents.',
        'High ground clearance of 100mm ensures smooth fork entry.'
      ]
    },

    'roto-drum-1200-1000-160': {
      title: 'Supreme Drum & Roll Cradle Pallet 1200x1000x160 mm',
      category: 'Drum & Roll Cradle Pallets',
      categorySlug: 'pallets',
      subtitle: 'Standard 1200x1000mm Anti-Roll Cradle Pallet for Heavy Barrels & Rolls (1200 x 1000 x 160 mm)',
      mainImg: 'assets/images/roto_pallets/roto-drum-1200-1000-160.png',
      relatedImgs: [
        { src: 'assets/images/roto_pallets/roto-drum-1200-1000-160.png', title: 'Double Cradle View' },
        { src: 'assets/images/roto_pallets/roto-drum-1200-800-160.png', title: '1200x800 Model' },
        { src: 'assets/images/roto_pallets/roto-1200-1000-150-4way-runner.png', title: 'Standard Flat Pallet' }
      ],
      desc: 'Wide 1200 x 1000 mm cradle pallet specifically molded to transport and rack 600 mm chemical drums and cylindrical goods safely. Features reinforced 3 runners and perimeter retention lips.',
      specs: [
        { label: 'Series / Function', val: 'Heavy Drum & Roll Cradle Pallet' },
        { label: 'Dimensions (LxWxH)', val: '1200 x 1000 x 160 mm' },
        { label: 'Drum Max Diameter', val: 'Up to 600 mm Diameter' },
        { label: 'Safety Feature', val: 'Safety Edge (12mm Width x 12mm Height)' },
        { label: 'Base & Entry', val: '3 Runner Pallet, 2-Way Entry (1200 mm Side)' },
        { label: 'Static Load', val: '1000 kg - 2000 kg' },
        { label: 'Dynamic Load', val: '500 kg - 1000 kg' },
        { label: 'Material', val: 'Virgin Polymer with UV Protection' }
      ],
      features: [
        'Ergonomic concave bed keeps heavy cylindrical rolls stationary without strapping.',
        'Seamless rotational molded body withstands extreme point impacts from metal drums.',
        '100% rustproof, washable, and resistant to oil, gasoline, and acids.',
        'Main entry from 1200mm side accommodates standard forklift forks.'
      ]
    },// =========================================================================
    // SUPREME INJECTION MOULDED PLASTIC PALLETS (From Catalogue DOC-20231009-WA0012)
    // =========================================================================

    'pallet-sim121016-pdss-hw': {
      title: 'Supreme SIM121016 PDSS HW (Heavy Weight Perforated Pallet)',
      category: 'Heavy Duty & Racking Pallets',
      categorySlug: 'pallets',
      subtitle: 'Heavy Weight Perforated Deck Single Side Pallet (1200 x 1000 x 160 mm)',
      mainImg: 'assets/images/pallets/pallet-sim121016-pdss-hw.png',
      relatedImgs: [
        { src: 'assets/images/pallets/pallet-sim121016-pdss-hw.png', title: 'Top & Bottom 3D View' },
        { src: 'assets/images/pallets/pallet-sim121016-pdss-mw.png', title: 'Medium Weight Variant' },
        { src: 'assets/images/pallets/pallet-sim121016-pdss-sr.png', title: 'Steel Reinforced Variant' },
        { src: 'assets/images/pallets/pallets-hero.png', title: 'Supreme Pallet Application' },
      ],
      desc: 'Supreme SIM121016 PDSS HW is an injection moulded heavy-weight perforated single-sided pallet engineered for intense industrial warehousing and heavy-duty load handling. Built with reinforced perimeter blocks and robust cross ribs, it offers an outstanding 6000 kg static load capacity and 1000-1200 kg racking load capacity.',
      specs: [
        { label: 'Model Code', val: 'SIM121016 PDSS HW' },
        { label: 'Type', val: 'Perforated Deck Single Side (Heavy Weight)' },
        { label: 'External Dimensions (LxWxH)', val: '1200 x 1000 x 160 mm' },
        { label: 'Static Load Capacity', val: '6000 kg unified load' },
        { label: 'Dynamic Load Capacity', val: 'upto 1000 - 1200 kg unified load' },
        { label: 'Racking Load Capacity', val: 'upto 1000 - 1200 kg unified load' },
        { label: 'Forklift Entry', val: '4-Way Entry (All Sides)' },
        { label: 'Hand Pallet Truck Entry', val: '2-Way Entry' },
        { label: 'Stacker Entry', val: '2-Way Entry' },
        { label: 'Raw Material', val: 'Virgin HDPE / PP (Food & Pharma Grade)' },
        { label: 'Standard Colours', val: 'Blue / Grey / Green' }
      ],
      features: [
        'Massive 6000 kg static load rating engineered for heavy industrial goods.',
        'High-strength ventilated perforated deck allows drainage and air circulation.',
        '4-way forklift and 2-way pallet truck compatibility for versatile warehouse logistics.',
        '100% termite-proof, fungus-resistant, and impervious to moisture, acids, and alkalis.'
      ]
    },

    'pallet-sim121016-pdss-mw': {
      title: 'Supreme SIM121016 PDSS MW (Medium Weight Perforated Pallet)',
      category: 'Heavy Duty & Racking Pallets',
      categorySlug: 'pallets',
      subtitle: 'Medium Weight Perforated Deck Single Side Pallet (1200 x 1000 x 160 mm)',
      mainImg: 'assets/images/pallets/pallet-sim121016-pdss-mw.png',
      relatedImgs: [
        { src: 'assets/images/pallets/pallet-sim121016-pdss-mw.png', title: 'Top & Bottom View' },
        { src: 'assets/images/pallets/pallet-sim121016-pdss-hw.png', title: 'Heavy Weight Variant' },
        { src: 'assets/images/pallets/pallet-sim121016-pdss-sr.png', title: 'Steel Reinforced' },
        { src: 'assets/images/pallets/full_page_2.png', title: 'Catalogue Specs' }
      ],
      desc: 'Supreme SIM121016 PDSS MW is an injection moulded medium-weight plastic pallet offering the optimal balance between high strength, operational weight, and cost efficiency. Suitable for standard rack storage, conveyor automation, and cross-docking operations.',
      specs: [
        { label: 'Model Code', val: 'SIM121016 PDSS MW' },
        { label: 'Type', val: 'Perforated Deck Single Side (Medium Weight)' },
        { label: 'External Dimensions (LxWxH)', val: '1200 x 1000 x 160 mm' },
        { label: 'Static Load Capacity', val: '5000 kg unified load' },
        { label: 'Dynamic Load Capacity', val: 'upto 1000 kg unified load' },
        { label: 'Racking Load Capacity', val: 'upto 1000 kg unified load' },
        { label: 'Forklift Entry', val: '4-Way Entry' },
        { label: 'Hand Pallet Truck Entry', val: '2-Way Entry' },
        { label: 'Material', val: 'HDPE / PP' },
        { label: 'Standard Colours', val: 'Blue / Grey / Green' }
      ],
      features: [
        '5000 kg static capacity handles heavy palletized industrial batches.',
        'Cost-effective medium weight structure reduces handling fatigue.',
        'Smooth rounded entry chamfers protect pallet truck rollers from wear.',
        'Consistent dimensions and tare weight ensure hassle-free automated conveyor flow.'
      ]
    },

    'pallet-sim121016-pdss-sr': {
      title: 'Supreme SIM121016 PDSS SR (Steel Reinforced Perforated Pallet)',
      category: 'Heavy Duty & Racking Pallets',
      categorySlug: 'pallets',
      subtitle: 'Single Side Perforated Pallet with Embedded High-Tensile Steel Tubes (1200 x 1000 x 160 mm)',
      mainImg: 'assets/images/pallets/pallet-sim121016-pdss-sr.png',
      relatedImgs: [
        { src: 'assets/images/pallets/pallet-sim121016-pdss-sr.png', title: 'Steel Rod Detail' },
        { src: 'assets/images/pallets/pallet-sim121016-ar-pdss-8sr.png', title: '8 Steel Reinforced' },
        { src: 'assets/images/pallets/pallet-sim121016-pdss-hw.png', title: 'Heavy Weight Variant' },
        { src: 'assets/images/pallets/full_page_2.png', title: 'Catalogue Specs' }
      ],
      desc: 'Supreme SIM121016 PDSS SR features internally molded steel reinforcement tubes that dramatically increase beam rigidity and eliminate deflection when placed on high-bay selective pallet racks. Tested to support 6000 kg static and 1000 kg in unsupported racking.',
      specs: [
        { label: 'Model Code', val: 'SIM121016 PDSS SR' },
        { label: 'Reinforcement', val: 'Internal High-Tensile Steel Tubes' },
        { label: 'External Dimensions (LxWxH)', val: '1200 x 1000 x 160 mm' },
        { label: 'Static Load Capacity', val: '6000 kg unified load' },
        { label: 'Dynamic Load Capacity', val: 'upto 1000 kg unified load' },
        { label: 'Racking Load Capacity', val: 'upto 1000 kg unified load' },
        { label: 'Forklift Entry', val: '4-Way Entry' },
        { label: 'Hand Pallet Truck Entry', val: '2-Way Entry' },
        { label: 'Material', val: 'High-Impact HDPE / PP + Galvanized Steel' },
        { label: 'Standard Colours', val: 'Blue / Grey / Green' }
      ],
      features: [
        'Internal steel reinforcement tubes eliminate sagging on high-bay pallet racks.',
        'Enclosed steel channels prevent rust, contamination, and exposure to liquids.',
        'Outstanding 6000 kg static capacity ensures long-term non-deforming storage.',
        'Superior safety compliance for automated high-density rack storage systems.'
      ]
    },

    'pallet-sim121016-ar-pdss-8sr': {
      title: 'Supreme SIM121016 AR PDSS 8 SR (8 Steel Reinforced Arrow Pallet)',
      category: 'Heavy Duty & Racking Pallets',
      categorySlug: 'pallets',
      subtitle: 'Heavy-Duty Arrow Design Pallet with 8 Full-Length Steel Reinforcement Bars',
      mainImg: 'assets/images/pallets/pallet-sim121016-ar-pdss-8sr.png',
      relatedImgs: [
        { src: 'assets/images/pallets/pallet-sim121016-ar-pdss-8sr.png', title: '8 Steel Bars View' },
        { src: 'assets/images/pallets/pallet-sim121016-pdss-sr.png', title: 'Steel Reinforced' },
        { src: 'assets/images/pallets/pallet-sim121015-pdr-sr.png', title: 'Reversible Steel' },
        { src: 'assets/images/pallets/full_page_3.png', title: 'Catalogue Specs' }
      ],
      desc: 'The pinnacle of racking strength, Supreme SIM121016 AR PDSS 8 SR is equipped with 8 heavy-duty steel reinforcement bars across both length and width dimensions. Features the proprietary Supreme Arrow perforation grid for maximum grip, ventilation, and load equalization.',
      specs: [
        { label: 'Model Code', val: 'SIM121016 AR PDSS 8 SR' },
        { label: 'Reinforcement Type', val: '8 Full-Length Embedded Steel Reinforcement Bars' },
        { label: 'External Dimensions (LxWxH)', val: '1200 x 1000 x 160 mm' },
        { label: 'Static Load Capacity', val: '6000 kg unified load' },
        { label: 'Dynamic Load Capacity', val: '1500 kg unified load' },
        { label: 'Racking Load Capacity', val: '1200 kg unified load' },
        { label: 'Forklift Entry', val: '4-Way Entry' },
        { label: 'Hand Pallet Truck Entry', val: '2-Way Entry' },
        { label: 'Material', val: 'Virgin HDPE / PP + Structural Steel' },
        { label: 'Standard Colours', val: 'Blue / Grey / Green' }
      ],
      features: [
        '8 embedded structural steel bars provide supreme resistance to deflection.',
        'High 1500 kg dynamic and 1200 kg racking load rating for heavy industrial loads.',
        'Arrow perforation surface prevents cargo slipping during transit.',
        'Ideal for FMCG high-density drives, pharmaceuticals, cold storage, and chemical manufacturing.'
      ]
    },

    'pallet-sim121015-pdr': {
      title: 'Supreme SIM121015 PDR (Reversible Perforated Pallet)',
      category: 'Reversible & Double Deck Pallets',
      categorySlug: 'pallets',
      subtitle: 'Double-Sided Reversible Perforated Pallet (1200 x 1000 x 150 mm)',
      mainImg: 'assets/images/pallets/pallet-sim121015-pdr.png',
      relatedImgs: [
        { src: 'assets/images/pallets/pallet-sim121015-pdr.png', title: 'Reversible Deck View' },
        { src: 'assets/images/pallets/pallet-sim121015-pdr-sr.png', title: 'Steel Reinforced Variant' },
        { src: 'assets/images/pallets/pallet-sim121015-pdd-mw.png', title: 'Double Deck MW' },
        { src: 'assets/images/pallets/full_page_4.png', title: 'Catalogue Specs' }
      ],
      desc: 'Supreme SIM121015 PDR is a true reversible plastic pallet with identical top and bottom perforated decks. Reversible pallets distribute stacked loads evenly across bagged cargo (such as cement, polymer granules, sugar, chemicals) without damaging the lower bags.',
      specs: [
        { label: 'Model Code', val: 'SIM121015 PDR' },
        { label: 'Design Type', val: 'Perforated Deck Reversible (Both Sides Identical)' },
        { label: 'External Dimensions (LxWxH)', val: '1200 x 1000 x 150 mm' },
        { label: 'Static Load Capacity', val: '4000 kg unified load' },
        { label: 'Dynamic Load Capacity', val: '1000 kg unified load' },
        { label: 'Racking Load Capacity', val: '800 kg unified load' },
        { label: 'Forklift Entry', val: '4-Way Entry (Forklift Only)' },
        { label: 'Material', val: 'Virgin HDPE / PP' },
        { label: 'Standard Colours', val: 'Blue / Grey / Green' }
      ],
      features: [
        'Dual-sided reversible construction allows either side to be used as load deck.',
        'Flat perforated bottom prevents puncturing and crushing of stacked bags and cartons.',
        'Engineered specifically for heavy multi-tier floor stacking in warehouses.',
        'Seamless one-piece injection molded construction ensures unbreakable durability.'
      ]
    },

    'pallet-sim121015-pdr-sr': {
      title: 'Supreme SIM121015 PDR SR (Steel Reinforced Reversible Pallet)',
      category: 'Reversible & Double Deck Pallets',
      categorySlug: 'pallets',
      subtitle: 'Heavy-Duty Reversible Pallet with Internal Steel Reinforcement (1200 x 1000 x 150 mm)',
      mainImg: 'assets/images/pallets/pallet-sim121015-pdr-sr.png',
      relatedImgs: [
        { src: 'assets/images/pallets/pallet-sim121015-pdr-sr.png', title: 'Steel Reinforced Reversible' },
        { src: 'assets/images/pallets/pallet-sim121015-pdr.png', title: 'Standard Reversible' },
        { src: 'assets/images/pallets/pallet-sim131115-pdd.png', title: '1300x1100 Double Deck' },
        { src: 'assets/images/pallets/full_page_4.png', title: 'Catalogue Specs' }
      ],
      desc: 'Supreme SIM121015 PDR SR combines the multi-tier stacking advantage of a reversible pallet with embedded high-tensile steel tubes. Capable of supporting 6000 kg static, 1500 kg dynamic, and 1200 kg in open drive-in and selective racking systems.',
      specs: [
        { label: 'Model Code', val: 'SIM121015 PDR SR' },
        { label: 'Reinforcement', val: 'Internal Heavy Steel Tubes' },
        { label: 'External Dimensions (LxWxH)', val: '1200 x 1000 x 150 mm' },
        { label: 'Static Load Capacity', val: '6000 kg unified load' },
        { label: 'Dynamic Load Capacity', val: '1500 kg unified load' },
        { label: 'Racking Load Capacity', val: '1200 kg unified load' },
        { label: 'Forklift Entry', val: '4-Way Entry (Forklift Only)' },
        { label: 'Material', val: 'HDPE / PP + High-Tensile Steel' },
        { label: 'Standard Colours', val: 'Blue / Grey / Green' }
      ],
      features: [
        'Internal steel tubes provide ultimate bending resistance under heavy racking loads.',
        'Symmetrical top and bottom decks maximize operational lifespan.',
        'Superior 1500 kg dynamic capacity safely handles heavy chemical drums and metal components.',
        'UV stabilized and weatherproof for tough indoor and outdoor storage yards.'
      ]
    },

    'pallet-sim121015-pdd-mw': {
      title: 'Supreme SIM121015 PDD MW (Double Deck Medium Weight Pallet)',
      category: 'Reversible & Double Deck Pallets',
      categorySlug: 'pallets',
      subtitle: 'Injection Moulded Perforated Double Deck Pallet (1200 x 1000 x 150 mm)',
      mainImg: 'assets/images/pallets/pallet-sim121015-pdd-mw.png',
      relatedImgs: [
        { src: 'assets/images/pallets/pallet-sim121015-pdd-mw.png', title: 'Double Deck MW View' },
        { src: 'assets/images/pallets/pallet-sim121015-pdr.png', title: 'Reversible Pallet' },
        { src: 'assets/images/pallets/full_page_4.png', title: 'Catalogue Specs' }
      ],
      desc: 'Supreme SIM121015 PDD MW is an injection moulded double-deck pallet designed for bulk warehouse stacking and racking. Offers 4000 kg static and 700 kg racking capacity while maintaining a cost-effective tare weight.',
      specs: [
        { label: 'Model Code', val: 'SIM121015 PDD MW' },
        { label: 'Type', val: 'Perforated Double Deck (Medium Weight)' },
        { label: 'External Dimensions (LxWxH)', val: '1200 x 1000 x 150 mm' },
        { label: 'Static Load Capacity', val: '4000 kg unified load' },
        { label: 'Dynamic Load Capacity', val: '800 kg unified load' },
        { label: 'Racking Load Capacity', val: '700 kg unified load' },
        { label: 'Forklift Entry', val: '4-Way Forklift Entry' },
        { label: 'Material', val: 'High-Grade HDPE / PP' },
        { label: 'Standard Colours', val: 'Blue / Grey / Green' }
      ],
      features: [
        'Double deck structure prevents load indentation on underlying goods.',
        'Optimized medium-weight design maximizes payload capacity in transport.',
        'Ventilated grid accelerates cold-room freezing and prevents condensation.',
        'Smooth snag-free surfaces prevent tear in stretch-film wrapping.'
      ]
    },

    'pallet-sim131115-pdd': {
      title: 'Supreme SIM131115 PDD Reversible (1300 x 1100 mm Extra Large)',
      category: 'Reversible & Double Deck Pallets',
      categorySlug: 'pallets',
      subtitle: 'Jumbo Size Perforated Double Deck Pallet for Chemical Drums & FIBC Bulk Bags',
      mainImg: 'assets/images/pallets/pallet-sim131115-pdd.png',
      relatedImgs: [
        { src: 'assets/images/pallets/pallet-sim131115-pdd.png', title: '1300x1100 Jumbo View' },
        { src: 'assets/images/pallets/pallet-sim121015-pdr-sr.png', title: 'Steel Reversible' },
        { src: 'assets/images/pallets/full_page_7.png', title: 'Catalogue Specs' }
      ],
      desc: 'Supreme SIM131115 PDD is an oversized 1300 x 1100 mm double-deck reversible pallet specially developed for heavy chemical drums (4 x 200L barrels), jumbo FIBC bags, and wide industrial machinery. Supports an immense 6000 kg static load and 1500 kg dynamic load.',
      specs: [
        { label: 'Model Code', val: 'SIM131115 PDD (Reversible)' },
        { label: 'External Dimensions (LxWxH)', val: '1300 x 1100 x 150 mm' },
        { label: 'Static Load Capacity', val: '6000 kg unified load' },
        { label: 'Dynamic Load Capacity', val: '1500 kg unified load' },
        { label: 'Racking Load Capacity', val: 'upto 1000 kg unified load' },
        { label: 'Forklift Entry', val: '4-Way Entry' },
        { label: 'Hand Pallet Truck Entry', val: '2-Way Entry' },
        { label: 'Material', val: 'Virgin Heavy-Duty HDPE / PP' },
        { label: 'Standard Colours', val: 'Blue / Grey / Green' }
      ],
      features: [
        'Extra large 1300 x 1100 mm footprint accommodates four standard 200L barrels securely.',
        'Immense 6000 kg static capacity handles heavy bulk raw material bags.',
        'Reversible double-deck distribution prevents tipping during multi-tier stacking.',
        'Resistant to aggressive chemical spills, diesel oils, and industrial solvents.'
      ]
    },

    'pallet-sim1280125-cdss-9l': {
      title: 'Supreme SIM1280125 CDSS 9L (Hygienic Close Deck Euro Pallet)',
      category: 'Hygienic Close Deck Pallets',
      categorySlug: 'pallets',
      subtitle: 'Cleanroom & Pharma Grade Flat Close Deck 9-Leg Euro Pallet (1200 x 800 x 125 mm)',
      mainImg: 'assets/images/pallets/pallet-sim1280125-cdss-9l.png',
      relatedImgs: [
        { src: 'assets/images/pallets/pallet-sim1280125-cdss-9l.png', title: 'Close Deck Euro View' },
        { src: 'assets/images/pallets/pallet-sim1210125-cdss-9l.png', title: '1200x1000 Close Deck' },
        { src: 'assets/images/pallets/pallet-sim1280145-pdss-sr.png', title: '3-Runner Base' },
        { src: 'assets/images/pallets/full_page_4.png', title: 'Catalogue Specs' }
      ],
      desc: 'Supreme SIM1280125 CDSS 9L is an ultra-clean, totally smooth close-deck Euro pallet (1200 x 800 mm). With no open ribs, pockets, or cavities, it prevents the accumulation of dust, bacterial spores, and liquids. Highly recommended for Pharmaceuticals, Cleanrooms, Food Processing, Dairy, and Hospitals.',
      specs: [
        { label: 'Model Code', val: 'SIM1280125 CDSS 9L' },
        { label: 'Deck Design', val: 'Completely Closed Smooth Top (Hygienic Cleanroom Grade)' },
        { label: 'External Dimensions (LxWxH)', val: '1200 x 800 x 125 mm (Euro Standard)' },
        { label: 'Static Load Capacity', val: '2500 kg unified load' },
        { label: 'Dynamic Load Capacity', val: '500 kg unified load' },
        { label: 'Racking Load Capacity', val: 'Floor Storage / Stacking' },
        { label: 'Forklift Entry', val: '4-Way Entry' },
        { label: 'Hand Pallet Truck Entry', val: '4-Way Entry' },
        { label: 'Stacker Entry', val: '4-Way Entry' },
        { label: 'Material', val: '100% Virgin Food-Grade HDPE / PP' },
        { label: 'Standard Colours', val: 'Blue / Grey / Green' }
      ],
      features: [
        'Completely closed flat deck eliminates dust traps and allows high-pressure washdowns.',
        'Full 4-way accessibility for both forklifts and hand pallet trucks on all 4 sides.',
        'Euro standard 1200 x 800 mm dimensions fit perfectly into European truck and freight formats.',
        'Certified non-toxic, odorless, and FDA-compliant for direct food & pharma packaging contact.'
      ]
    },

    'pallet-sim1210125-cdss-9l': {
      title: 'Supreme SIM1210125 CDSS 9L (Hygienic Close Deck Standard Pallet)',
      category: 'Hygienic Close Deck Pallets',
      categorySlug: 'pallets',
      subtitle: 'Seamless Flat Close Deck Single Side 9-Leg Pallet (1200 x 1000 x 125 mm)',
      mainImg: 'assets/images/pallets/pallet-sim1210125-cdss-9l.png',
      relatedImgs: [
        { src: 'assets/images/pallets/pallet-sim1210125-cdss-9l.png', title: 'Close Deck 1200x1000' },
        { src: 'assets/images/pallets/pallet-sim1280125-cdss-9l.png', title: 'Euro Size Close Deck' },
        { src: 'assets/images/pallets/pallet-sim1280165-cdss-3s.png', title: 'Close Deck with Skids' },
        { src: 'assets/images/pallets/full_page_5.png', title: 'Catalogue Specs' }
      ],
      desc: 'Supreme SIM1210125 CDSS 9L offers a 1200 x 1000 mm full flat top close deck engineered for sensitive healthcare, beverage, and electronic component manufacturing where perforation marks or dust ingress cannot be tolerated.',
      specs: [
        { label: 'Model Code', val: 'SIM1210125 CDSS 9L' },
        { label: 'Deck Design', val: 'Full Close Flat Top (Hygienic Single Side 9 Legs)' },
        { label: 'External Dimensions (LxWxH)', val: '1200 x 1000 x 125 mm' },
        { label: 'Static Load Capacity', val: '3000 kg unified load' },
        { label: 'Dynamic Load Capacity', val: '750 kg unified load' },
        { label: 'Racking Load Capacity', val: 'Floor Storage / Stacking' },
        { label: 'Forklift Entry', val: '4-Way Entry' },
        { label: 'Hand Pallet Truck Entry', val: '4-Way Entry' },
        { label: 'Material', val: '100% Virgin HDPE / PP' },
        { label: 'Standard Colours', val: 'Blue / Grey / Green' }
      ],
      features: [
        'Smooth seamless upper deck prevents carton indentation and product damage.',
        '4-way hand pallet truck and forklift entry provides maximum warehouse agility.',
        'Steam-cleanable and resistant to all standard sanitizers and disinfectants.',
        'Robust 9-leg base provides stable load distribution across level surfaces.'
      ]
    },

    'pallet-sim1280145-pdss-sr': {
      title: 'Supreme SIM1280145 PDSS SR (3-Runner Steel Reinforced Pallet)',
      category: 'Detachable Runner Skids Pallets',
      categorySlug: 'pallets',
      subtitle: 'Euro Size 3-Runner Base Pallet with Embedded Steel Reinforcement (1200 x 800 x 145 mm)',
      mainImg: 'assets/images/pallets/pallet-sim1280145-pdss-sr.png',
      relatedImgs: [
        { src: 'assets/images/pallets/pallet-sim1280145-pdss-sr.png', title: '3-Runner Steel Base' },
        { src: 'assets/images/pallets/pallet-sim1280165-pdss-3s.png', title: 'Detachable Skids' },
        { src: 'assets/images/pallets/pallet-sim1280125-cdss-9l.png', title: '9-Leg Euro' },
        { src: 'assets/images/pallets/full_page_6.png', title: 'Catalogue Specs' }
      ],
      desc: 'Supreme SIM1280145 PDSS SR is engineered with 3 bottom runners reinforced with structural steel bars. Specially designed for seamless movement over roller conveyors, chain conveyors, and pallet racking beams.',
      specs: [
        { label: 'Model Code', val: 'SIM1280145 PDSS SR' },
        { label: 'Base Construction', val: '3 Full-Length Runners with Embedded Steel Bars' },
        { label: 'External Dimensions (LxWxH)', val: '1200 x 800 x 145 mm' },
        { label: 'Static Load Capacity', val: '2000 kg unified load' },
        { label: 'Dynamic Load Capacity', val: '500 kg unified load' },
        { label: 'Racking Load Capacity', val: '500 kg unified load' },
        { label: 'Forklift Entry', val: '4-Way Entry' },
        { label: 'Hand Pallet Truck Entry', val: '2-Way Entry' },
        { label: 'Material', val: 'HDPE / PP + High-Tensile Steel' },
        { label: 'Standard Colours', val: 'Blue / Grey / Green' }
      ],
      features: [
        '3-runner perimeter base glides smoothly across motorized roller and chain conveyors.',
        'Embedded steel reinforcement bars withstand racking deflection.',
        'Euro size (1200 x 800 mm) optimized for space-efficient truck loading.',
        'High impact resistance against forklift tines and warehouse collisions.'
      ]
    },

    'pallet-sim1280165-pdss-3s': {
      title: 'Supreme SIM1280165 PDSS 3S (Perforated Deck with 3 Detachable Skids)',
      category: 'Detachable Runner Skids Pallets',
      categorySlug: 'pallets',
      subtitle: 'Versatile Euro Pallet Featuring 3 Quick-Lock Detachable Runner Skids (1200 x 800 x 165 mm)',
      mainImg: 'assets/images/pallets/pallet-sim1280165-pdss-3s.png',
      relatedImgs: [
        { src: 'assets/images/pallets/pallet-sim1280165-pdss-3s.png', title: 'Detachable 3-Skids View' },
        { src: 'assets/images/pallets/pallet-sim1280165-cdss-3s.png', title: 'Close Deck with Skids' },
        { src: 'assets/images/pallets/pallet-sim1280145-pdss-sr.png', title: '3-Runner Fixed' },
        { src: 'assets/images/pallets/full_page_6.png', title: 'Catalogue Specs' }
      ],
      desc: 'Supreme SIM1280165 PDSS 3S introduces an ingenious modular innovation: 3 detachable click-fit runner skids. Users can use the pallet as a 9-leg pallet (for 4-way pallet truck entry) or attach the 3 skids (for automated conveyor handling and racking stability).',
      specs: [
        { label: 'Model Code', val: 'SIM1280165 PDSS 3S' },
        { label: 'Modular Feature', val: '3 Quick-Lock Detachable Runner Skids' },
        { label: 'External Dimensions (LxWxH)', val: '1200 x 800 x 165 mm' },
        { label: 'Static Load Capacity', val: '2500 kg unified load' },
        { label: 'Dynamic Load Capacity', val: 'upto 750 kg unified load' },
        { label: 'Racking Load Capacity', val: 'upto 500 kg unified load' },
        { label: 'Forklift Entry', val: '4-Way Entry' },
        { label: 'Hand Pallet Truck Entry', val: '2-Way Entry (with skids) / 4-Way (without skids)' },
        { label: 'Material', val: 'Virgin HDPE / PP' },
        { label: 'Standard Colours', val: 'Blue / Grey / Green' }
      ],
      features: [
        'Modular 2-in-1 functionality: Converts between 9-leg and 3-runner pallet in seconds.',
        'Detachable skids can be replaced individually if damaged, saving replacement costs.',
        'Supports up to 2500 kg static and 750 kg dynamic load.',
        'Perforated deck ensures rapid drainage and excellent ventilation.'
      ]
    },

    'pallet-sim1280165-cdss-3s': {
      title: 'Supreme SIM1280165 CDSS 3S (Close Deck with 3 Detachable Skids)',
      category: 'Detachable Runner Skids Pallets',
      categorySlug: 'pallets',
      subtitle: 'Hygienic Flat Close Deck Pallet with 3 Detachable Runner Skids (1200 x 800 x 165 mm)',
      mainImg: 'assets/images/pallets/pallet-sim1280165-cdss-3s.png',
      relatedImgs: [
        { src: 'assets/images/pallets/pallet-sim1280165-cdss-3s.png', title: 'Close Deck with 3 Skids' },
        { src: 'assets/images/pallets/pallet-sim1280165-pdss-3s.png', title: 'Perforated 3-Skids' },
        { src: 'assets/images/pallets/pallet-sim1280125-cdss-9l.png', title: '9-Leg Close Deck' },
        { src: 'assets/images/pallets/full_page_6.png', title: 'Catalogue Specs' }
      ],
      desc: 'Supreme SIM1280165 CDSS 3S combines a completely smooth, hygienic close deck with 3 detachable runner skids. Ideal for pharmaceutical packaging plants, bottling lines, and food manufacturing where conveyor transit and hygiene are both essential.',
      specs: [
        { label: 'Model Code', val: 'SIM1280165 CDSS 3S' },
        { label: 'Deck Type', val: 'Seamless Smooth Close Deck' },
        { label: 'Base Feature', val: '3 Detachable Click-Lock Runner Skids' },
        { label: 'External Dimensions (LxWxH)', val: '1200 x 800 x 165 mm' },
        { label: 'Static Load Capacity', val: '2500 kg unified load' },
        { label: 'Dynamic Load Capacity', val: 'upto 700 kg unified load' },
        { label: 'Racking Load Capacity', val: 'upto 500 kg unified load' },
        { label: 'Forklift Entry', val: '4-Way Entry' },
        { label: 'Hand Pallet Truck Entry', val: '2-Way Entry' },
        { label: 'Material', val: 'Virgin Food-Grade HDPE / PP' },
        { label: 'Standard Colours', val: 'Blue / Grey / Green' }
      ],
      features: [
        'Hygienic flat top prevents contamination, carton puncturing, and spill leakage.',
        'Detachable skids ensure smooth roller conveyor movement without jamming.',
        'High static strength of 2500 kg for dense packaged pharmaceutical cartons.',
        'Easily disinfected using steam, hot water, or sanitizing agents.'
      ]
    },

    'pallet-sim121013-pdn-9l-exp': {
      title: 'Supreme SIM121013 PDN 9L EXP (Nestable Export Pallet)',
      category: 'Export & One-Time Use Pallets',
      categorySlug: 'pallets',
      subtitle: 'Space-Saving Nestable Lightweight Export Shipping Pallet (1200 x 1000 x 130 mm)',
      mainImg: 'assets/images/pallets/pallet-sim121013-pdn-9l-exp.png',
      relatedImgs: [
        { src: 'assets/images/pallets/pallet-sim121013-pdn-9l-exp.png', title: 'Nestable Export Pallet' },
        { src: 'assets/images/pallets/pallet-sim111112-pdd-exp.png', title: '1100x1100 Square Export' },
        { src: 'assets/images/pallets/pallet-sim121016-pdss-hw.png', title: 'Heavy Duty Range' },
        { src: 'assets/images/pallets/full_page_7.png', title: 'Catalogue Specs' }
      ],
      desc: 'Supreme SIM121013 PDN 9L EXP is an injection moulded nestable export pallet designed for one-way shipping and export consignments. Features hollow conical legs that nest into one another when empty, saving over 65% freight volume and warehouse storage space.',
      specs: [
        { label: 'Model Code', val: 'SIM121013 PDN 9L EXP' },
        { label: 'Design Type', val: 'Nestable 9-Leg Export Pallet' },
        { label: 'External Dimensions (LxWxH)', val: '1200 x 1000 x 130 mm' },
        { label: 'Static Load Capacity', val: '2000 kg unified load' },
        { label: 'Dynamic Load Capacity', val: '1000 kg unified load' },
        { label: 'Racking Load Capacity', val: 'One-Time Export Use (Stackable & Nestable)' },
        { label: 'Forklift Entry', val: '4-Way Entry' },
        { label: 'Hand Pallet Truck Entry', val: '4-Way Entry' },
        { label: 'Export Compliance', val: 'ISPM-15 Exempt (No Fumigation or Heat Treatment Required)' },
        { label: 'Standard Colours', val: 'Black / Dark Grey / Blue' }
      ],
      features: [
        'Nestable space-saving design stacks up to 45 pallets in the height of 15 standard pallets.',
        'ISPM-15 exempt: eliminates phytosanitary inspection delays and fumigation costs at customs.',
        'Lightweight design lowers air and sea container freight costs.',
        'High dynamic load of 1000 kg ensures safe container shipping overseas.'
      ]
    },

    'pallet-sim111112-pdd-exp': {
      title: 'Supreme SIM111112 PDD EXP (Square 1100x1100 Export Pallet)',
      category: 'Export & One-Time Use Pallets',
      categorySlug: 'pallets',
      subtitle: 'Square Shipping Pallet Optimized for ISO Sea Containers (1100 x 1100 x 120 mm)',
      mainImg: 'assets/images/pallets/pallet-sim111112-pdd-exp.png',
      relatedImgs: [
        { src: 'assets/images/pallets/pallet-sim111112-pdd-exp.png', title: 'Square 1100x1100 Export' },
        { src: 'assets/images/pallets/pallet-sim121013-pdn-9l-exp.png', title: 'Nestable Export' },
        { src: 'assets/images/pallets/pallet-sim131115-pdd.png', title: 'Jumbo Double Deck' },
        { src: 'assets/images/pallets/full_page_8.png', title: 'Catalogue Specs' }
      ],
      desc: 'Supreme SIM111112 PDD EXP is an injection moulded square export pallet specifically dimensioned (1100 x 1100 mm) to maximize space inside standard 20-foot and 40-foot sea shipping containers without lateral void spaces.',
      specs: [
        { label: 'Model Code', val: 'SIM111112 PDD EXP' },
        { label: 'Dimensions (LxWxH)', val: '1100 x 1100 x 120 mm (Square Footprint)' },
        { label: 'Static Load Capacity', val: '2000 kg unified load' },
        { label: 'Dynamic Load Capacity', val: '1000 kg unified load' },
        { label: 'Racking Load Capacity', val: 'Export Floor & Container Stacking' },
        { label: 'Forklift Entry', val: '4-Way Entry' },
        { label: 'Hand Pallet Truck Entry', val: 'N/A (Optimized for Forklift Loading)' },
        { label: 'Export Compliance', val: 'ISPM-15 Exempt for Global Export' },
        { label: 'Standard Colours', val: 'Black / Dark Grey / Blue' }
      ],
      features: [
        '1100 x 1100 mm square format packs two pallets side-by-side perfectly in ISO shipping containers.',
        'Zero wood quarantine hassles: 100% compliant with USA, EU, Australia, and Asia customs.',
        'Perforated deck design saves tare weight while maintaining high structural strength.',
        'Consistent weight and dimensions eliminate manual strapping irregularities.'
      ]
    },
    'roto-crate-rm-4030150': {
      title: "Supreme Roto Moulded Crate RM 4030150",
      category: "Standard Industrial Crates",
      categorySlug: "crates",
      subtitle: "400 \u00d7 300 \u00d7 150 mm Compact Heavy-Duty Seamless Roto Crate",
      mainImg: "assets/images/roto_crates/roto-crate-rm-4030150.png",
      relatedImgs: [
        {
                "src": "assets/images/roto_crates/roto-crate-rm-4030150.png",
                "title": "RM 4030150 Isometric View"
        },
        {
                "src": "assets/images/roto_crates/roto-crate-rm-4030220.png",
                "title": "RM 4030220 Deep Variant"
        },
        {
                "src": "assets/images/roto_crates/roto-crates-hero-cluster.png",
                "title": "Supreme Crate Range"
        },
        {
                "src": "assets/images/roto_crates/full_page_2.png",
                "title": "Catalogue Page 2"
        }
],
      desc: "Supreme RM 4030150 is a precision rotationally moulded industrial plastic crate engineered from 100% virgin food-grade polymer. Designed with external vertical load-bearing ribs and built-in ergonomic recessed hand-grips for safe handling, component storage, and automated assembly line transit.",
      specs: [
        {
                "label": "Model Code",
                "val": "RM 4030150"
        },
        {
                "label": "External Dimensions (L \u00d7 B \u00d7 H)",
                "val": "400 mm \u00d7 300 mm \u00d7 150 mm"
        },
        {
                "label": "Moulding Technology",
                "val": "Single-Piece Bi-Axial Rotational Moulding"
        },
        {
                "label": "Material",
                "val": "100% Virgin High-Impact Food-Grade Polymer"
        },
        {
                "label": "Side Wall Construction",
                "val": "External Structural Ribs for Superior Rigidity"
        },
        {
                "label": "Handling",
                "val": "Moulded-In Ergonomic Built-in Recessed Grips"
        },
        {
                "label": "Chemical Resistance",
                "val": "Impervious to Acids, Alkalis, Oils & Solvents"
        },
        {
                "label": "Cleaning",
                "val": "Smooth Seamless Interior, Steam Washable"
        }
],
      features: [
        "Seamless stress-free bi-axial rotational moulding prevents cracking under impact",
        "Heavy vertical wall ribs resist lateral deformation when stacked fully loaded",
        "Non-toxic virgin polymer compliant with food, bakery, and pharmaceutical standards",
        "Built-in ergonomic hand-holds facilitate comfortable manual lifting and conveying"
],
      applications: [
        "Small engineering components, fasteners, and hardware storage",
        "Automotive assembly line component feeding",
        "Pharmaceutical and cleanroom product transfer",
        "Bakery, confectionery, and food processing lines"
]
    },
    'roto-crate-rm-4030220': {
      title: "Supreme Roto Moulded Crate RM 4030220",
      category: "Standard Industrial Crates",
      categorySlug: "crates",
      subtitle: "400 \u00d7 300 \u00d7 220 mm Deep Wall Multi-Utility Seamless Roto Crate",
      mainImg: "assets/images/roto_crates/roto-crate-rm-4030220.png",
      relatedImgs: [
        {
                "src": "assets/images/roto_crates/roto-crate-rm-4030220.png",
                "title": "RM 4030220 Front-Side View"
        },
        {
                "src": "assets/images/roto_crates/roto-crate-rm-4030150.png",
                "title": "RM 4030150 Low-Profile"
        },
        {
                "src": "assets/images/roto_crates/roto-crates-hero-cluster.png",
                "title": "Supreme Crate Lineup"
        },
        {
                "src": "assets/images/roto_crates/full_page_2.png",
                "title": "Catalogue Page 2"
        }
],
      desc: "Supreme RM 4030220 offers extra volumetric depth with its 220 mm height on a compact 400 \u00d7 300 mm footprint. Built using heavy-gauge rotational moulding for high impact absorption in rigorous industrial environments, warehousing, and logistics handling.",
      specs: [
        {
                "label": "Model Code",
                "val": "RM 4030220"
        },
        {
                "label": "External Dimensions (L \u00d7 B \u00d7 H)",
                "val": "400 mm \u00d7 300 mm \u00d7 220 mm"
        },
        {
                "label": "Moulding Technology",
                "val": "Stress-Free Rotational Moulding"
        },
        {
                "label": "Material",
                "val": "High Density Virgin Polymer"
        },
        {
                "label": "Design Feature",
                "val": "Deep-wall container with reinforced corner pillars"
        },
        {
                "label": "Handling Mechanism",
                "val": "Integral Built-in Grip Handles"
        },
        {
                "label": "Stackability",
                "val": "Secure Positive Interlocking Top Rim"
        },
        {
                "label": "Thermal Stability",
                "val": "-20\u00b0C to +70\u00b0C Working Temperature Range"
        }
],
      features: [
        "Deep cavity design allows maximum storage per square meter of floor space",
        "Extra wall thickness eliminates wall bulging during high-density parts loading",
        "Smooth rounded inside corners prevent dirt entrapment and facilitate sanitizing",
        "UV-stabilized resin resists degradation in outdoor yards or open transit"
],
      applications: [
        "Heavy hardware, tooling parts, and mechanical spares",
        "Chemical reagent bottle transport and lab storage",
        "Textile bobbin and cone movement between processing sections",
        "Cold storage and refrigerated logistics"
]
    },
    'roto-crate-rm-6040325': {
      title: "Supreme Roto Moulded Crate RM 6040325",
      category: "Standard Industrial Crates",
      categorySlug: "crates",
      subtitle: "600 \u00d7 400 \u00d7 325 mm Euro Footprint Heavy Industrial Deep Crate",
      mainImg: "assets/images/roto_crates/roto-crate-rm-6040325.png",
      relatedImgs: [
        {
                "src": "assets/images/roto_crates/roto-crate-rm-6040325.png",
                "title": "RM 6040325 Deep Profile"
        },
        {
                "src": "assets/images/roto_crates/roto-crate-rm-6666312.png",
                "title": "RM 6666312 Square"
        },
        {
                "src": "assets/images/roto_crates/roto-crates-hero-cluster.png",
                "title": "Roto Crates Lineup"
        },
        {
                "src": "assets/images/roto_crates/full_page_2.png",
                "title": "Catalogue Page 2"
        }
],
      desc: "Supreme RM 6040325 adheres to the international 600 \u00d7 400 mm Euro logistics module, featuring a generous 325 mm depth. It stacks flawlessly on 1200 \u00d7 800 mm and 1200 \u00d7 1000 mm pallets without overhang, making it the premier choice for inter-factory logistics and supply chains.",
      specs: [
        {
                "label": "Model Code",
                "val": "RM 6040325"
        },
        {
                "label": "External Dimensions (L \u00d7 B \u00d7 H)",
                "val": "600 mm \u00d7 400 mm \u00d7 325 mm"
        },
        {
                "label": "Logistics Compatibility",
                "val": "Standard Euro-Modular Dimension (600 \u00d7 400 mm)"
        },
        {
                "label": "Material",
                "val": "Virgin High-Impact Rotomoulding Polymer"
        },
        {
                "label": "Structural Design",
                "val": "Heavy Vertical Stiffeners on all 4 Walls"
        },
        {
                "label": "Load Bearing",
                "val": "Heavy Industrial Dynamic & Static Stack Rating"
        },
        {
                "label": "Handling",
                "val": "Ergonomic Moulded-In Grip Handles"
        },
        {
                "label": "Corrosion Resistance",
                "val": "100% Rust-Proof and Weather-Resistant"
        }
],
      features: [
        "Perfect Euro-pallet stacking footprint (5 crates per pallet layer on 1200\u00d71000 mm pallets)",
        "Exceptional wall strength withstands repeated drop impacts and rough forklift interaction",
        "Hygienic one-piece rotomoulded body suitable for direct contact with food produce",
        "Ribbed base prevents slippage on roller tracks, gravity conveyors, and pallet decks"
],
      applications: [
        "Automotive parts dispatch and tier-1 vendor supply loops",
        "Fruit, vegetable, and horticulture harvesting and packing",
        "Dairy, poultry, and meat processing plants",
        "Heavy engineering assembly lines and warehouse racking"
]
    },
    'roto-crate-rm-6666312': {
      title: "Supreme Square Roto Crate RM 6666312",
      category: "Standard Industrial Crates",
      categorySlug: "crates",
      subtitle: "660 \u00d7 660 \u00d7 312 mm Heavy-Duty Square Geometry Rotationally Moulded Crate",
      mainImg: "assets/images/roto_crates/roto-crate-rm-6666312.png",
      relatedImgs: [
        {
                "src": "assets/images/roto_crates/roto-crate-rm-6666312.png",
                "title": "RM 6666312 Square Crate"
        },
        {
                "src": "assets/images/roto_crates/roto-crate-rm-6040325.png",
                "title": "RM 6040325 Rectangular"
        },
        {
                "src": "assets/images/roto_crates/roto-crates-hero-cluster.png",
                "title": "Supreme Range"
        },
        {
                "src": "assets/images/roto_crates/full_page_2.png",
                "title": "Catalogue Page 2"
        }
],
      desc: "Supreme RM 6666312 is a unique square-format roto crate measuring 660 \u00d7 660 \u00d7 312 mm. Designed specifically for circular parts, wire coils, bulk dry components, and textile reels that cannot be stored efficiently in elongated rectangular containers.",
      specs: [
        {
                "label": "Model Code",
                "val": "RM 6666312 (Square Roto Crate)"
        },
        {
                "label": "External Dimensions (L \u00d7 B \u00d7 H)",
                "val": "660 mm \u00d7 660 mm \u00d7 312 mm"
        },
        {
                "label": "Geometry",
                "val": "Symmetric Square Design with Reinforced Base"
        },
        {
                "label": "Material",
                "val": "High Environmental Stress Crack Resistant Polymer"
        },
        {
                "label": "Wall Thickness",
                "val": "Heavy Rotomoulded Wall Construction"
        },
        {
                "label": "Grip Type",
                "val": "Dual Ergonomic Recessed Hand-Holds"
        },
        {
                "label": "Impact Strength",
                "val": "High Izod Impact Resistance at Sub-Zero Temperatures"
        }
],
      features: [
        "Equilateral square format optimizes radial component storage and nested stacking",
        "Reinforced multi-rib perimeter resists outward bulging under heavy loose bulk load",
        "Seamless rotomoulded structure guarantees zero water or liquid leakage",
        "High strength-to-weight ratio ensures effortless handling despite heavy payloads"
],
      applications: [
        "Coiled cables, wires, hoses, and circular auto components",
        "Foundry casting and forging component handling",
        "Textile spinning yarn and cone buffer storage",
        "Chemical and dye processing workshops"
]
    },
    'roto-crate-rm-104531': {
      title: "Supreme Long Roto Crate RM 104531",
      category: "Standard Industrial Crates",
      categorySlug: "crates",
      subtitle: "1000 \u00d7 450 \u00d7 315 mm Elongated Heavy-Duty Storage Crate",
      mainImg: "assets/images/roto_crates/roto-crate-rm-104531.png",
      relatedImgs: [
        {
                "src": "assets/images/roto_crates/roto-crate-rm-104531.png",
                "title": "RM 104531 Long Format"
        },
        {
                "src": "assets/images/roto_crates/roto-crate-650-ltr.png",
                "title": "650 Litre Bulk Crate"
        },
        {
                "src": "assets/images/roto_crates/roto-crates-hero-cluster.png",
                "title": "Supreme Crate Showcase"
        },
        {
                "src": "assets/images/roto_crates/full_page_2.png",
                "title": "Catalogue Page 2"
        }
],
      desc: "Supreme RM 104531 is an elongated industrial crate measuring 1000 mm in length with 450 mm width and 315 mm height. Perfect for storing and transporting long components, pipes, rods, fluorescent tubes, shafts, and extended industrial mechanisms without bending or damage.",
      specs: [
        {
                "label": "Model Code",
                "val": "RM 104531"
        },
        {
                "label": "External Dimensions (L \u00d7 B \u00d7 H)",
                "val": "1000 mm \u00d7 450 mm \u00d7 315 mm"
        },
        {
                "label": "Configuration",
                "val": "Extended Length Rectangular Format"
        },
        {
                "label": "Material",
                "val": "Virgin Chemical-Grade Polyethylene"
        },
        {
                "label": "Longitudinal Reinforcement",
                "val": "Continuous Vertical Stiffening Ribs on Long Walls"
        },
        {
                "label": "Handling",
                "val": "Recessed End Handles for Two-Man or Single-Operator Lift"
        },
        {
                "label": "Cleaning",
                "val": "Fully Washable with High-Pressure Jet Spray"
        }
],
      features: [
        "1-meter length accommodates extended components that standard crates cannot fit",
        "High-strength structural ribs along both length and width eliminate deflection",
        "One-piece seamless rotationally moulded construction prevents joint fatigue",
        "Resistant to lubricants, cutting fluids, hydraulic oils, and harsh cleaning agents"
],
      applications: [
        "Long shafts, automotive axles, hydraulic cylinders, and drive rods",
        "Fluorescent lighting fittings, fixtures, and electrical conduit sections",
        "Hardware tools, torque wrenches, and maintenance gear",
        "Textile reeds, heald frames, and loom accessory storage"
]
    },
    'roto-crate-650-ltr': {
      title: "Supreme Heavy Duty Roto Crate 650 Litres",
      category: "Jumbo & Bulk Storage Crates",
      categorySlug: "crates",
      subtitle: "1150 \u00d7 751 \u00d7 760 mm Industrial High-Capacity Bulk Storage Container",
      mainImg: "assets/images/roto_crates/roto-crate-650-ltr.png",
      relatedImgs: [
        {
                "src": "assets/images/roto_crates/roto-crate-650-ltr.png",
                "title": "650 Ltr Bulk Container"
        },
        {
                "src": "assets/images/roto_crates/roto-crate-src-1200l.png",
                "title": "SRC 1200L Giant Tub"
        },
        {
                "src": "assets/images/roto_crates/roto-crate-rm-10075700.png",
                "title": "RM 10075700 Crate"
        },
        {
                "src": "assets/images/roto_crates/full_page_2.png",
                "title": "Catalogue Page 2"
        }
],
      desc: "Supreme 650 Litre Roto Crate is a heavy-duty industrial bulk container engineered to hold large volumes of liquid, chemicals, bulk raw materials, or granulated goods. Features an extra-wide top lip and flanged rim for supreme torsional strength and crane or forklift turnover handling.",
      specs: [
        {
                "label": "Model Code",
                "val": "CRATE 650 Ltr."
        },
        {
                "label": "External Dimensions (L \u00d7 B \u00d7 H)",
                "val": "1150 mm \u00d7 751 mm \u00d7 760 mm"
        },
        {
                "label": "Volumetric Capacity",
                "val": "650 Litres (approx.)"
        },
        {
                "label": "Moulding Technology",
                "val": "Heavy-Wall Bi-Axial Rotational Moulding"
        },
        {
                "label": "Material",
                "val": "100% Virgin High-Density Chemical-Grade Polymer"
        },
        {
                "label": "Rim Construction",
                "val": "Reinforced Overhanging Flanged Lip"
        },
        {
                "label": "Drainage Option",
                "val": "Provision for Threaded Drainage Valve / Plug"
        },
        {
                "label": "Compatibility",
                "val": "Pallet Jack, Forklift & In-Plant Trolleys"
        }
],
      features: [
        "Massive 650-litre volumetric capacity handles bulky factory output efficiently",
        "Thick wall design provides exceptional hydrostatic strength against liquid bulge",
        "Seamless sanitary construction guarantees zero leakage and easy drainage",
        "UV and weather resistant for continuous heavy outdoor and yard storage"
],
      applications: [
        "Chemical processing, textile wet processing, and dyeing solutions",
        "Food, seafood, fish holding, and brine curing applications",
        "Bulk granular chemicals, resins, masterbatches, and compounding pellets",
        "Waste collection, recycling scrap, and factory swarf management"
]
    },
    'roto-crate-rm-10075700': {
      title: "Supreme Bulk Storage Roto Crate RM 10075700",
      category: "Jumbo & Bulk Storage Crates",
      categorySlug: "crates",
      subtitle: "1000 \u00d7 750 \u00d7 700 mm High-Depth Industrial Bulk Crate",
      mainImg: "assets/images/roto_crates/roto-crate-rm-10075700.png",
      relatedImgs: [
        {
                "src": "assets/images/roto_crates/roto-crate-rm-10075700.png",
                "title": "RM 10075700 Bulk Crate"
        },
        {
                "src": "assets/images/roto_crates/roto-crate-650-ltr.png",
                "title": "650 Ltr Bulk Container"
        },
        {
                "src": "assets/images/roto_crates/roto-crate-src-1200l.png",
                "title": "SRC 1200L"
        },
        {
                "src": "assets/images/roto_crates/full_page_3.png",
                "title": "Catalogue Page 3"
        }
],
      desc: "Supreme RM 10075700 is an upright heavy-volume container with 1000 \u00d7 750 mm footprint and 700 mm vertical wall height. Engineered with deep-corrugation vertical ribs and top perimeter corner cutouts for robust stacking and multi-tier warehousing.",
      specs: [
        {
                "label": "Model Code",
                "val": "RM 10075700"
        },
        {
                "label": "External Dimensions (L \u00d7 B \u00d7 H)",
                "val": "1000 mm \u00d7 750 mm \u00d7 700 mm"
        },
        {
                "label": "Wall Height",
                "val": "700 mm Deep Storage Chamber"
        },
        {
                "label": "Material",
                "val": "Heavy-Duty Impact-Modified Virgin Polyethylene"
        },
        {
                "label": "Ribbing Pattern",
                "val": "High-Aspect Ratio Vertical Ribs on All Sides"
        },
        {
                "label": "Handling Handholds",
                "val": "Integrated Recessed Lifting Pockets"
        },
        {
                "label": "Hygiene Rating",
                "val": "Food Grade, Non-Toxic & Fungus Resistant"
        }
],
      features: [
        "700 mm deep internal well maximizes warehouse storage volume per unit footprint",
        "Structural rib cage absorbs heavy internal hydrostatic and bulk granular pressure",
        "Recessed lifting pockets allow safe handling and ergonomic operator repositioning",
        "Non-reactive food grade material ensures zero contamination of stored products"
],
      applications: [
        "Pharmaceutical granules, API intermediates, and bulk powders",
        "Yarn, fabric cuts, garment bundles, and laundries in textile units",
        "Agricultural produce collection, grading, and bulk transit",
        "In-plant storage of heavy industrial parts, castings, and subassemblies"
]
    },
    'roto-crate-src-1200l': {
      title: "Supreme Industrial Large Tub SRC 1200L",
      category: "Jumbo & Bulk Storage Crates",
      categorySlug: "crates",
      subtitle: "1630 \u00d7 1200 \u00d7 790 mm Super Heavy-Duty 1200-Litre Industrial Processing Tub",
      mainImg: "assets/images/roto_crates/roto-crate-src-1200l.png",
      relatedImgs: [
        {
                "src": "assets/images/roto_crates/roto-crate-src-1200l.png",
                "title": "SRC 1200L Giant Tub"
        },
        {
                "src": "assets/images/roto_crates/roto-crate-1450.png",
                "title": "Crate 1450"
        },
        {
                "src": "assets/images/roto_crates/roto-crate-1550.png",
                "title": "Crate 1550"
        },
        {
                "src": "assets/images/roto_crates/full_page_3.png",
                "title": "Catalogue Page 3"
        }
],
      desc: "Supreme SRC 1200L is an ultra-heavy-duty 1200-litre capacity industrial tub with dimensions of 1630 \u00d7 1200 \u00d7 790 mm. Built specifically for chemical immersion, textile bleaching, dye baths, food salting/brining, and large-scale bulk materials handling.",
      specs: [
        {
                "label": "Model Code",
                "val": "SRC 1200L"
        },
        {
                "label": "External Dimensions (L \u00d7 B \u00d7 H)",
                "val": "1630 mm \u00d7 1200 mm \u00d7 790 mm"
        },
        {
                "label": "Volumetric Capacity",
                "val": "1200 Litres (approx.)"
        },
        {
                "label": "Moulding Method",
                "val": "Heavy-Section Computerized Bi-Axial Rotomoulding"
        },
        {
                "label": "Polymer Grade",
                "val": "Special High-ESCR Chemical Resistant Polyethylene"
        },
        {
                "label": "Side Wall Structure",
                "val": "Wide Vertical Stiffener Columns around Perimeter"
        },
        {
                "label": "Top Perimeter",
                "val": "Heavy Flanged Edge for In-Plant Hoist / Fork Lift"
        },
        {
                "label": "Cleaning",
                "val": "Coved Corners for Zero Residue Wash-Down"
        }
],
      features: [
        "Mammoth 1200-litre capacity replaces fragile stainless steel or fiberglass vats",
        "Impervious to corrosive acids, alkalis, brine, detergent solutions, and solvents",
        "Seamless construction guarantees complete liquid containment without leaks",
        "Thick walls absorb heavy shock loads and resist dents, gouging, and puncture"
],
      applications: [
        "Textile processing: bleaching, washing, desizing, and dye vat immersion",
        "Fisheries & aquaculture: fish washing, brining, and iced storage",
        "Chemical pickling, metal surface treatment, and degreasing tanks",
        "Bulk waste holding, food sludge, and industrial liquid processing"
]
    },
    'roto-crate-1450': {
      title: "Supreme Jumbo Heavy Crate 1450",
      category: "Jumbo & Bulk Storage Crates",
      categorySlug: "crates",
      subtitle: "1940 \u00d7 1230 \u00d7 800 mm Nearly 2-Meter Long Jumbo Industrial Container",
      mainImg: "assets/images/roto_crates/roto-crate-1450.png",
      relatedImgs: [
        {
                "src": "assets/images/roto_crates/roto-crate-1450.png",
                "title": "Crate 1450 Profile"
        },
        {
                "src": "assets/images/roto_crates/roto-crate-1550.png",
                "title": "Crate 1550 Extra Deep"
        },
        {
                "src": "assets/images/roto_crates/roto-crate-src-1200l.png",
                "title": "SRC 1200L"
        },
        {
                "src": "assets/images/roto_crates/full_page_3.png",
                "title": "Catalogue Page 3"
        }
],
      desc: "Supreme Crate 1450 is one of the largest rotational moulded containers produced in India, stretching 1940 mm (almost 2 meters) in length with 1230 mm width and 800 mm height. Designed for heavy industrial manufacturing, fabric roll handling, and high-volume factory automation.",
      specs: [
        {
                "label": "Model Code",
                "val": "CRATE 1450"
        },
        {
                "label": "External Dimensions (L \u00d7 B \u00d7 H)",
                "val": "1940 mm \u00d7 1230 mm \u00d7 800 mm"
        },
        {
                "label": "Overall Length",
                "val": "1.94 Meters (Jumbo Class)"
        },
        {
                "label": "Capacity Class",
                "val": "1450 Litre Range (approx.)"
        },
        {
                "label": "Polymer",
                "val": "Virgin High-Impact Polyethylene"
        },
        {
                "label": "Reinforcement",
                "val": "Engineered Perimeter Column Ribs"
        },
        {
                "label": "Edge Lip",
                "val": "Heavy Structural Outward Flange for Hoist Grab"
        }
],
      features: [
        "Gigantic 1940 mm length enables storage of full fabric bolts, rolls, and extended parts",
        "Monolithic rotational mould prevents structural failure under extreme load stresses",
        "Smooth interior surface prevents snagging of delicate fabrics and luxury textiles",
        "100% rustproof and resistant to harsh industrial environments and high humidity"
],
      applications: [
        "Textile mills: fabric bolt, folded grey cloth, and denim roll movement",
        "Automotive stamping plant sheet metal component collection",
        "Agricultural bulk harvest receiving, washing, and cold storage",
        "Heavy recycling, paper scrap, and bulk waste management"
]
    },
    'roto-crate-1550': {
      title: "Supreme Extra Deep Jumbo Crate 1550",
      category: "Jumbo & Bulk Storage Crates",
      categorySlug: "crates",
      subtitle: "1730 \u00d7 1275 \u00d7 1000 mm 1-Meter Full Height Heavy Duty Industrial Vat",
      mainImg: "assets/images/roto_crates/roto-crate-1550.png",
      relatedImgs: [
        {
                "src": "assets/images/roto_crates/roto-crate-1550.png",
                "title": "Crate 1550 White Vat"
        },
        {
                "src": "assets/images/roto_crates/roto-crate-1450.png",
                "title": "Crate 1450"
        },
        {
                "src": "assets/images/roto_crates/roto-crate-src-1200l.png",
                "title": "SRC 1200L"
        },
        {
                "src": "assets/images/roto_crates/full_page_3.png",
                "title": "Catalogue Page 3"
        }
],
      desc: "Supreme Crate 1550 features a full 1000 mm (1-meter) vertical wall height on an expansive 1730 \u00d7 1275 mm base. Molded in pristine virgin white/natural polymer, it is the pinnacle of bulk holding capacity for food hygiene, pharma vats, and chemical processing.",
      specs: [
        {
                "label": "Model Code",
                "val": "CRATE 1550"
        },
        {
                "label": "External Dimensions (L \u00d7 B \u00d7 H)",
                "val": "1730 mm \u00d7 1275 mm \u00d7 1000 mm"
        },
        {
                "label": "Depth / Height",
                "val": "1000 mm (1.0 Meter Vertical Depth)"
        },
        {
                "label": "Capacity Class",
                "val": "1550 Litre Range (approx.)"
        },
        {
                "label": "Color / Finish",
                "val": "Sanitary White / Milky Translucent (Food Grade)"
        },
        {
                "label": "Moulding",
                "val": "Super-Heavy Bi-Axial Rotational Moulding"
        },
        {
                "label": "Wall Stiffening",
                "val": "Full-Height Engineered Corrugation Ribs"
        }
],
      features: [
        "Full 1000 mm depth maximizes volume density in cleanroom and factory layouts",
        "Pristine sanitary finish allows immediate visual inspection of purity and hygiene",
        "Chemically inert to acids, oxidizers, brine, alkalis, and pharmaceutical excipients",
        "One-piece seamless construction ensures zero leakage and lifetime reliability"
],
      applications: [
        "Pharmaceutical and food ingredient bulk blending and holding vats",
        "Chemical processing, electroplating immersion, and passivation baths",
        "Textile processing, washing, and softening stages",
        "Aquaculture, seafood processing, and cold-brine preservation"
]
    },
    'roto-crate-dish-crate': {
      title: "Supreme Multi-Utility Dish Crate",
      category: "Specialty & Processing Crates",
      categorySlug: "crates",
      subtitle: "450 \u00d7 400 \u00d7 390 mm Catering, Warewashing & Multi-Utility Crate",
      mainImg: "assets/images/roto_crates/roto-crate-dish-crate.png",
      relatedImgs: [
        {
                "src": "assets/images/roto_crates/roto-crate-dish-crate.png",
                "title": "Dish Crate Isometric"
        },
        {
                "src": "assets/images/roto_crates/roto-crate-spitting-crate.png",
                "title": "Spitting Crate"
        },
        {
                "src": "assets/images/roto_crates/roto-crates-hero-cluster.png",
                "title": "Supreme Crate Range"
        },
        {
                "src": "assets/images/roto_crates/full_page_3.png",
                "title": "Catalogue Page 3"
        }
],
      desc: "Supreme Dish Crate measures 450 \u00d7 400 \u00d7 390 mm and is specifically engineered for catering institutions, hotels, banquets, and industrial canteens. Provides safe handling, washing, and storage of dinner plates, chinaware, cutlery, and kitchen utensils.",
      specs: [
        {
                "label": "Model Code",
                "val": "DISH CRATE"
        },
        {
                "label": "External Dimensions (L \u00d7 B \u00d7 H)",
                "val": "450 mm \u00d7 400 mm \u00d7 390 mm"
        },
        {
                "label": "Application Focus",
                "val": "Catering, Hospitality & Commercial Warewashing"
        },
        {
                "label": "Material",
                "val": "100% Food-Grade Virgin High-Impact Polymer"
        },
        {
                "label": "Design Feature",
                "val": "Deep walls with molded side recessed grips"
        },
        {
                "label": "Thermal Tolerance",
                "val": "Withstands Commercial Dishwasher Hot Rinse Cycles"
        },
        {
                "label": "Hygiene",
                "val": "Stain Resistant, Odor-Free & Non-Absorbent"
        }
],
      features: [
        "Compact footprint with high 390 mm sidewalls prevents plate and glassware chipping",
        "Deep ergonomic hand-recesses ensure secure grip by kitchen and banquet staff",
        "Heat-resistant polymer handles hot water washing and detergent sanitization",
        "Stackable design saves valuable back-of-house kitchen storage space"
],
      applications: [
        "Hotels, banquet halls, catering companies, and cloud kitchens",
        "Industrial staff cafeterias, institutional mess, and hospital catering",
        "Crockery and glassware rental and event logistics",
        "Small industrial parts washing and dipping"
]
    },
    'roto-crate-spitting-crate': {
      title: "Supreme Tapered Spitting Crate",
      category: "Specialty & Processing Crates",
      categorySlug: "crates",
      subtitle: "520 \u00d7 520 \u00d7 300 mm Conical Tapered Drainage & Dyeing Crate",
      mainImg: "assets/images/roto_crates/roto-crate-spitting-crate.png",
      relatedImgs: [
        {
                "src": "assets/images/roto_crates/roto-crate-spitting-crate.png",
                "title": "Spitting Crate Red"
        },
        {
                "src": "assets/images/roto_crates/roto-crate-dish-crate.png",
                "title": "Dish Crate"
        },
        {
                "src": "assets/images/roto_crates/roto-crates-hero-cluster.png",
                "title": "Supreme Crate Lineup"
        },
        {
                "src": "assets/images/roto_crates/full_page_3.png",
                "title": "Catalogue Page 3"
        }
],
      desc: "Supreme Spitting Crate is a specialized conical tapered crate measuring 520 \u00d7 520 \u00d7 300 mm. Finished in high-visibility bright red with flanged rim and sloping walls, it is designed for textile spinning, cone spitting, liquid runoff, and gravity-fed drainage processes.",
      specs: [
        {
                "label": "Model Code",
                "val": "SPITTING CRATE"
        },
        {
                "label": "External Dimensions (L \u00d7 B \u00d7 H)",
                "val": "520 mm \u00d7 520 mm \u00d7 300 mm"
        },
        {
                "label": "Profile Geometry",
                "val": "Square Tapered Conical Vessel with Sloping Walls"
        },
        {
                "label": "Color",
                "val": "Safety High-Visibility Red"
        },
        {
                "label": "Material",
                "val": "Virgin Polymer with Chemical & Dye Resistance"
        },
        {
                "label": "Top Rim",
                "val": "Wide Heavy Flanged Collar for Stand Mounting"
        },
        {
                "label": "Cleanability",
                "val": "Mirror Smooth Inner Wall for Rapid Liquid Run-Off"
        }
],
      features: [
        "Tapered conical geometry guides fluids and falling items directly towards center",
        "Wide flanged collar allows seamless drop-in mounting into steel processing frames",
        "Resistant to aggressive textile dyes, boiling hot water, and sizing chemicals",
        "Nestable design when empty minimizes return freight and warehouse footprint"
],
      applications: [
        "Textile spinning mills: yarn steaming, cone spitting, and bobbin collection",
        "Chemical and pigment slurry collection and decanting",
        "Foundry casting parts catching and cooling bath staging",
        "Agricultural sorting, funneling, and liquid drainage"
]
    },
    'roto-crate-bearing-metal-handle': {
      title: "Supreme Bearing Crate with Sturdy Metal Handle",
      category: "Specialty & Processing Crates",
      categorySlug: "crates",
      subtitle: "530 \u00d7 275 \u00d7 230 mm Heavy-Duty Perforated Crate with Galvanized Steel Bail Handle",
      mainImg: "assets/images/roto_crates/roto-crate-bearing-metal-handle.png",
      relatedImgs: [
        {
                "src": "assets/images/roto_crates/roto-crate-bearing-metal-handle.png",
                "title": "Bearing Crate with Metal Handle"
        },
        {
                "src": "assets/images/roto_crates/roto-crate-gear-shifter.png",
                "title": "Gear Shifter Crate"
        },
        {
                "src": "assets/images/roto_crates/roto-crate-rm-4030220.png",
                "title": "RM 4030220"
        },
        {
                "src": "assets/images/roto_crates/full_page_4.png",
                "title": "Catalogue Page 4"
        }
],
      desc: "Supreme Bearing Crate is an automotive-grade specialized container measuring 530 \u00d7 275 \u00d7 230 mm, outfitted with perforated sidewalls for oil drainage and an ultra-sturdy galvanized metal drop handle. Built for heavy ball bearings, machined components, and degreasing operations.",
      specs: [
        {
                "label": "Model Code",
                "val": "BEARING CRATE WITH METAL HANDLE"
        },
        {
                "label": "External Dimensions (L \u00d7 B \u00d7 H)",
                "val": "530 mm \u00d7 275 mm \u00d7 230 mm"
        },
        {
                "label": "Handle Construction",
                "val": "Heavy-Gauge Galvanized Steel Drop Bail Handle"
        },
        {
                "label": "Wall Design",
                "val": "Perforated Matrix for Free Air & Fluid Circulation"
        },
        {
                "label": "Polymer",
                "val": "High-Impact Resistant Polyethylene"
        },
        {
                "label": "Oil Resistance",
                "val": "Impervious to Cutting Fluids, Lubricants & Solvents"
        },
        {
                "label": "Load Capacity",
                "val": "High Density Weight Capacity for Steel Components"
        }
],
      features: [
        "Heavy-gauge metal bail handle rotates smoothly and handles concentrated steel weight",
        "Precision side perforations allow excess oil and cutting coolant to drain instantly",
        "Thick rotomoulded body protects machined bearing races from nicks, scratches, and burrs",
        "Stackable with handle folded flat for organized parts staging along assembly lines"
],
      applications: [
        "Automotive ball, needle, and taper roller bearing production",
        "Precision CNC turned and milled components dispatch",
        "Parts washing, degreasing, and ultrasonic cleaning dips",
        "Heavy hardware tool kits and mobile mechanic service crates"
]
    },
    'roto-crate-gear-shifter': {
      title: "Supreme Roto Gear Shifter Crate",
      category: "Specialty & Processing Crates",
      categorySlug: "crates",
      subtitle: "385 \u00d7 255 \u00d7 255 mm Slotted Partition Automotive Assembly Line Crate",
      mainImg: "assets/images/roto_crates/roto-crate-gear-shifter.png",
      relatedImgs: [
        {
                "src": "assets/images/roto_crates/roto-crate-gear-shifter.png",
                "title": "Gear Shifter Crate"
        },
        {
                "src": "assets/images/roto_crates/roto-crate-bearing-metal-handle.png",
                "title": "Bearing Crate"
        },
        {
                "src": "assets/images/roto_crates/roto-crate-wings-school-desk.png",
                "title": "School Desk"
        },
        {
                "src": "assets/images/roto_crates/full_page_4.png",
                "title": "Catalogue Page 4"
        }
],
      desc: "Supreme Roto Gear Shifter Crate is custom-designed for automotive transmission and gear assembly lines. Measuring 385 \u00d7 255 \u00d7 255 mm, it features contoured internal partition slots and cut-away access to keep gear shafts separated and protected from metal-on-metal collision.",
      specs: [
        {
                "label": "Model Code",
                "val": "ROTO GEAR SHIFTER"
        },
        {
                "label": "External Dimensions (L \u00d7 B \u00d7 H)",
                "val": "385 mm \u00d7 255 mm \u00d7 255 mm"
        },
        {
                "label": "Internal Profile",
                "val": "Integrated Multi-Slot Cradles for Shaft Holding"
        },
        {
                "label": "End Profile",
                "val": "Ergonomic U-Cutout for Rapid Operator Parts Pick"
        },
        {
                "label": "Material",
                "val": "Impact-Resistant Virgin Industrial Polymer"
        },
        {
                "label": "Color",
                "val": "High-Visibility Assembly Red / Magenta"
        }
],
      features: [
        "Contoured divider slots hold sensitive gear teeth without touching each other",
        "Front/rear cutouts allow fast, ergonomic pick-and-place by assembly line technicians",
        "Rotomoulded seamless polymer cushions metal components from transit vibration",
        "Compact size fits conveyor lines and lean manufacturing workstation trolleys"
],
      applications: [
        "Automobile gear shifter, gear rack, and transmission assembly lines",
        "Motorcycle and tractor gearbox manufacturing units",
        "Precision camshaft, crankshaft, and splined shaft transit",
        "Lean 5S manufacturing and kitting trays"
]
    },
    'roto-crate-wings-school-desk': {
      title: "Supreme Roto Wings School Desk / Study Station",
      category: "Airport Tubs & Utility Products",
      categorySlug: "crates",
      subtitle: "Ergonomic Heavy-Duty One-Piece Rotomoulded Educational Desk",
      mainImg: "assets/images/roto_crates/roto-crate-wings-school-desk.png",
      relatedImgs: [
        {
                "src": "assets/images/roto_crates/roto-crate-wings-school-desk.png",
                "title": "Roto Wings School Desk"
        },
        {
                "src": "assets/images/roto_crates/roto-crate-baggage-tub-small.png",
                "title": "Baggage Tub Small"
        },
        {
                "src": "assets/images/roto_crates/roto-crates-hero-cluster.png",
                "title": "Supreme Lineup"
        },
        {
                "src": "assets/images/roto_crates/full_page_4.png",
                "title": "Catalogue Page 4"
        }
],
      desc: "Supreme Roto Wings School Desk is an indestructible one-piece rotational moulded classroom study table. Engineered with smooth rounded kid-safe edges, integrated pencil grooves, and sturdy monobloc legs, it is 100% waterproof, rustproof, and virtually unbreakable.",
      specs: [
        {
                "label": "Model Code",
                "val": "ROTO WINGS SCHOOL DESK"
        },
        {
                "label": "Construction",
                "val": "Monolithic Single-Piece Rotational Moulding"
        },
        {
                "label": "Safety Features",
                "val": "Rounded Bullnose Safety Edges (Zero Sharp Corners)"
        },
        {
                "label": "Tabletop Features",
                "val": "Molded Pencil & Stationary Retention Groove"
        },
        {
                "label": "Material",
                "val": "Non-Toxic Food-Grade UV-Stabilized Polyethylene"
        },
        {
                "label": "Weather Resistance",
                "val": "100% Waterproof, Washable & Termite-Proof"
        },
        {
                "label": "Durability",
                "val": "Zero Welds, No Screws to Loosen, Shatterproof"
        }
],
      features: [
        "Single-piece hollow roto construction provides incredible strength and zero maintenance",
        "Kid-friendly design with 100% smooth curves eliminates any hazard of cuts or pinches",
        "Easily washed with water and soap; impervious to spilled ink, paint, juices, or food",
        "Vibrant fade-resistant color stays brilliant under sunlight and heavy daily usage"
],
      applications: [
        "Primary schools, kindergartens, playgroups, and creches",
        "Government education missions, smart schools, and Anganwadis",
        "Tuition classes, coaching centers, and educational daycare libraries",
        "Home study tables and activity centers"
]
    },
    'roto-crate-baggage-tub-small': {
      title: "Supreme Airport & Security Baggage Tub (Small)",
      category: "Airport Tubs & Utility Products",
      categorySlug: "crates",
      subtitle: "795 \u00d7 560 \u00d7 235 mm Airport X-Ray & Security Baggage Tray",
      mainImg: "assets/images/roto_crates/roto-crate-baggage-tub-small.png",
      relatedImgs: [
        {
                "src": "assets/images/roto_crates/roto-crate-baggage-tub-small.png",
                "title": "Baggage Tub Small"
        },
        {
                "src": "assets/images/roto_crates/roto-crate-baggage-tub-big.png",
                "title": "Baggage Tub Big"
        },
        {
                "src": "assets/images/roto_crates/roto-crates-hero-cluster.png",
                "title": "Supreme Roto Showcase"
        },
        {
                "src": "assets/images/roto_crates/full_page_4.png",
                "title": "Catalogue Page 4"
        }
],
      desc: "Supreme Small Baggage Tub measures 795 \u00d7 560 \u00d7 235 mm with an ergonomic scooped side profile for airport security check-in, passenger handbag screening, and conveyor belt automation. Built from impact-resistant polymer that slides smoothly along roller tracks.",
      specs: [
        {
                "label": "Model Code",
                "val": "BAGGAGE TUB SMALL"
        },
        {
                "label": "External Dimensions (L \u00d7 B \u00d7 H)",
                "val": "795 mm \u00d7 560 mm \u00d7 235 mm"
        },
        {
                "label": "Sidewall Design",
                "val": "Ergonomic Low-Cut Scooped Front/Back for Easy Access"
        },
        {
                "label": "Base Features",
                "val": "Smooth Low-Friction Underside for Roller Conveyors"
        },
        {
                "label": "Material",
                "val": "Anti-Static High-Impact Rotomoulded Polymer"
        },
        {
                "label": "X-Ray Translucent",
                "val": "100% Non-Metallic, Non-Interfering for Security Scanners"
        },
        {
                "label": "Stacking / Nesting",
                "val": "Tapered Nestable Design for Fast Return Handling"
        }
],
      features: [
        "Scooped side contours allow passengers and security officers to inspect contents rapidly",
        "Low-friction bottom slides effortlessly across roller beds and powered conveyor belts",
        "Non-metallic construction guarantees crystal clear X-ray imagery without ghost shadows",
        "High-impact durability survives millions of conveyor drops, stackings, and rough handling"
],
      applications: [
        "International and domestic airport security screening checkpoints",
        "Metro stations, railway passenger bag scanning, and high-security building lobbies",
        "Courier sorting hubs and parcel conveyor sorting systems",
        "Hotel baggage handling and concierge logistics"
]
    },
    'roto-crate-baggage-tub-big': {
      title: "Supreme Airport & Cargo Baggage Tub (Big)",
      category: "Airport Tubs & Utility Products",
      categorySlug: "crates",
      subtitle: "920 \u00d7 570 \u00d7 185 mm High-Capacity Wide Baggage & Cargo Tray",
      mainImg: "assets/images/roto_crates/roto-crate-baggage-tub-big.png",
      relatedImgs: [
        {
                "src": "assets/images/roto_crates/roto-crate-baggage-tub-big.png",
                "title": "Baggage Tub Big"
        },
        {
                "src": "assets/images/roto_crates/roto-crate-baggage-tub-small.png",
                "title": "Baggage Tub Small"
        },
        {
                "src": "assets/images/roto_crates/roto-crates-hero-cluster.png",
                "title": "Supreme Lineup"
        },
        {
                "src": "assets/images/roto_crates/full_page_4.png",
                "title": "Catalogue Page 4"
        }
],
      desc: "Supreme Big Baggage Tub offers an extended 920 \u00d7 570 mm footprint with 185 mm low-profile lip, specifically engineered for large suitcases, out-of-gauge luggage, airline cargo, and express package handling on automated tray tracking conveyor systems.",
      specs: [
        {
                "label": "Model Code",
                "val": "BAGGAGE TUB BIG"
        },
        {
                "label": "External Dimensions (L \u00d7 B \u00d7 H)",
                "val": "920 mm \u00d7 570 mm \u00d7 185 mm"
        },
        {
                "label": "Footprint",
                "val": "Wide 920 \u00d7 570 mm Large Luggage Bay"
        },
        {
                "label": "Height Profile",
                "val": "185 mm Low-Lip Rim for Oversized Baggage Loading"
        },
        {
                "label": "Material",
                "val": "High Environmental Crack Resistant Polymer"
        },
        {
                "label": "Base Construction",
                "val": "Heavy-Ribbed Flat Base for Belt & Roller Conveyors"
        },
        {
                "label": "Stacking",
                "val": "Nests Tightly to Save Gate & Check-in Space"
        }
],
      features: [
        "Expansive 920 mm tray width accommodates full-size 28-32 inch international travel bags",
        "Low perimeter lip facilitates effortless sliding of heavy luggage in and out of the tray",
        "Heavy-duty polymer will not crack or warp under extreme baggage weight or continuous usage",
        "Nestable design allows 50+ tubs to be stacked compactly in retrieval carts"
],
      applications: [
        "Airport oversized baggage check-in and transfer conveyor loops",
        "Airline cargo sorting, baggage claim carousel delivery, and ground handling",
        "E-commerce distribution fulfillment centers and large parcel sorting",
        "Hotel and cruise liner passenger baggage staging"
]
    }
  };

  // 1. Resolve URL Slug with friendly aliases
  const urlParams = new URLSearchParams(window.location.search);
  let slug = urlParams.get('product') || 'household-wastebin';
  slug = slug.toLowerCase().trim();

  // Legacy textile roller aliases mapping to modern dustbin & pallet products
  const slugAliases = {
    'supreme-products': 'wheeled-wastebins',
    'toyota': 'compactor-4wheel-bins',
    'picanol': 'household-wastebin',
    'itema': 'swing-lid-wastebin',
    'waterjet': 'freestanding-sflb',
    'sulzer': 'pole-mounted-splb',
    'sulzar': 'pole-mounted-splb',
    'somet': 'biomedical-foot-bins',
    'crates': 'roto-crate-rm-4030150',
    'crate': 'roto-crate-rm-4030150',
    'pallets': 'roto-1200-1200-150-cheker-rack',
    'pallet': 'roto-1200-1200-150-cheker-rack',
    'dustbins': 'wheeled-wastebins',
    'silpack': 'silpack-h-line',
    'silpack-h': 'silpack-h-line',
    'silpack-s': 'silpack-s-line',
    'h-line': 'silpack-h-line',
    's-line': 'silpack-s-line',
    'customized': 'compactor-4wheel-bins',
    'wheel-barrow': 'wheel-barrow-ghamela',
    'collection-buckets': 'collection-hand-bucket'
  };

  if (slugAliases[slug]) {
    slug = slugAliases[slug];
  }

  // If slug has partial title or space, match to key
  if (!productDatabase[slug]) {
    for (const key in productDatabase) {
      if (slug.includes(key) || productDatabase[key].title.toLowerCase().includes(slug)) {
        slug = key;
        break;
      }
    }
  }

  // Fallback to household-wastebin if still not found
  const product = productDatabase[slug] || productDatabase['household-wastebin'];

  // 1. Update Page Title & Metadata
  document.title = `${product.title} | Supreme Official Products | Abhinandan Plastopack`;

  // 2. Update Breadcrumbs
  const breadCat = document.getElementById('breadCategory');
  const breadProd = document.getElementById('breadProduct');
  if (breadCat) {
    if (product.categorySlug === 'crates') {
      breadCat.innerHTML = '<a href="crates.html" style="color: inherit; text-decoration: none;">Crates</a>';
    } else if (product.categorySlug === 'pallets') {
      breadCat.innerHTML = '<a href="pallets.html" style="color: inherit; text-decoration: none;">Pallets</a>';
    } else {
      breadCat.innerHTML = '<a href="dustbins.html" style="color: inherit; text-decoration: none;">Dustbins</a>';
    }
  }
  if (breadProd) breadProd.innerText = product.title;

  // 3. Update Gallery Main Image & Badges
  const detailMainImg = document.getElementById('detailMainImg');
  const detailBadge = document.getElementById('detailBadge');
  const detailCatTag = document.getElementById('detailCatTag');
  const detailTitle = document.getElementById('detailTitle');
  const detailSubtitle = document.getElementById('detailSubtitle');
  const detailFullDesc = document.getElementById('detailFullDesc');
  const rfqProductTitle = document.getElementById('rfqProductTitle');
  const rfqHiddenProduct = document.getElementById('rfqHiddenProduct');

  if (detailMainImg) {
    detailMainImg.src = product.mainImg;
    detailMainImg.alt = product.title;
  }
  const stageFooter = document.querySelector('.detail-stage-footer');
  if (stageFooter) {
    if (product.categorySlug === 'crates') {
      stageFooter.innerHTML = `
        <span><i class="fa-solid fa-shield-halved" style="color: var(--brand-red);"></i> 100% Virgin Polymer / Single-Piece Roto</span>
        <span><i class="fa-solid fa-check-double" style="color: #10b981;"></i> Seamless Stress-Free &amp; Heavy Wall Ribs</span>
      `;
    } else if (product.categorySlug === 'pallets') {
      stageFooter.innerHTML = `
        <span><i class="fa-solid fa-shield-halved" style="color: var(--brand-red);"></i> 100% Virgin Polymer / Steel SR</span>
        <span><i class="fa-solid fa-check-double" style="color: #10b981;"></i> ISPM-15 Exempt &amp; Heavy Racking Standards</span>
      `;
    }
  }
  if (detailBadge) detailBadge.innerText = product.category;
  if (detailCatTag) detailCatTag.innerText = product.category;
  if (detailTitle) detailTitle.innerText = product.title;
  if (detailSubtitle) detailSubtitle.innerText = product.subtitle;
  if (detailFullDesc) detailFullDesc.innerText = product.desc;
  if (rfqProductTitle) rfqProductTitle.innerText = product.title;
  if (rfqHiddenProduct) rfqHiddenProduct.value = product.title;

  const rfqQuantity = document.getElementById('rfqQuantity');
  const rfqNotes = document.getElementById('rfqNotes');
  if (rfqQuantity) {
    if (product.categorySlug === 'crates') {
      rfqQuantity.placeholder = 'e.g. 50 units / Crate Model or Dimensions';
    } else if (product.categorySlug === 'pallets') {
      rfqQuantity.placeholder = 'e.g. 100 units / Racking or Floor Stacking';
    }
  }
  if (rfqNotes) {
    if (product.categorySlug === 'crates') {
      rfqNotes.placeholder = 'Specify material handling requirements (temperature, bulk material, chemical immersion, or custom color)...';
    } else if (product.categorySlug === 'pallets') {
      rfqNotes.placeholder = 'Specify load requirements (Static/Racking), forklift/pallet truck type, or custom color...';
    }
  }

  // 4. Render Proper Related Thumbnail Images Underneath Main Image
  const thumbsContainer = document.getElementById('detailThumbsRow');
  if (thumbsContainer && product.relatedImgs) {
    thumbsContainer.innerHTML = '';
    product.relatedImgs.forEach((imgObj, idx) => {
      const thumbBtn = document.createElement('button');
      thumbBtn.type = 'button';
      thumbBtn.className = `detail-thumb-item ${idx === 0 ? 'active' : ''}`;
      thumbBtn.setAttribute('aria-label', imgObj.title || `View ${idx + 1}`);

      thumbBtn.innerHTML = `
        <img src="${imgObj.src}" alt="${imgObj.title || product.title}">
        <span class="thumb-caption">${imgObj.title || `View ${idx + 1}`}</span>
      `;

      // Click to switch main image with smooth transition
      thumbBtn.addEventListener('click', () => {
        const allThumbs = thumbsContainer.querySelectorAll('.detail-thumb-item');
        allThumbs.forEach(t => t.classList.remove('active'));
        thumbBtn.classList.add('active');

        if (detailMainImg) {
          detailMainImg.style.opacity = '0.3';
          detailMainImg.style.transform = 'scale(0.96)';
          setTimeout(() => {
            detailMainImg.src = imgObj.src;
            detailMainImg.style.opacity = '1';
            detailMainImg.style.transform = 'scale(1)';
          }, 150);
        }
      });

      thumbsContainer.appendChild(thumbBtn);
    });
  }

  // 5. Render Technical Specifications Grid
  const specsGrid = document.getElementById('detailSpecsGrid');
  if (specsGrid && product.specs) {
    specsGrid.innerHTML = '';
    product.specs.forEach(s => {
      const row = document.createElement('div');
      row.className = 'spec-card-item';
      row.innerHTML = `
        <span class="spec-prop-label">${s.label}</span>
        <span class="spec-prop-val">${s.val}</span>
      `;
      specsGrid.appendChild(row);
    });
  }

  // 6. Render Dynamic Features List
  const featuresList = document.getElementById('detailFeaturesList');
  if (featuresList && product.features) {
    featuresList.innerHTML = '';
    product.features.forEach(f => {
      const bullet = document.createElement('div');
      bullet.className = 'feature-bullet';
      bullet.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${f}`;
      featuresList.appendChild(bullet);
    });
  }

  // 7. Update WhatsApp Direct Button with pre-filled product query
  const detailWaBtn = document.getElementById('detailWaBtn');
  if (detailWaBtn) {
    const waText = encodeURIComponent(
      `Hello Abhinandan Plastopack, I visited your website and I am interested in ${product.title} (${product.category}). Please share official wholesale quotation, catalogue, and delivery timeline.`
    );
    detailWaBtn.href = `https://api.whatsapp.com/send?phone=918511879428&text=${waText}`;
  }

  // 8. Render 3 Related Products in Spotlight Below
  const relatedGrid = document.getElementById('relatedCardsGrid');
  if (relatedGrid) {
    // Show related products from same category (Pallets with Pallets, Dustbins with Dustbins)
    const sameCatKeys = Object.keys(productDatabase).filter(k => k !== slug && productDatabase[k].categorySlug === product.categorySlug);
    const fallbackKeys = Object.keys(productDatabase).filter(k => k !== slug);
    const otherKeys = (sameCatKeys.length >= 3 ? sameCatKeys : fallbackKeys).slice(0, 3);
    relatedGrid.innerHTML = '';
    otherKeys.forEach(k => {
      const p = productDatabase[k];
      const card = document.createElement('article');
      card.className = 'product-card';
      card.innerHTML = `
        <div class="product-thumb">
          <span class="product-badge-cat">${p.category}</span>
          <img src="${p.mainImg}" alt="${p.title}">
        </div>
        <div class="product-body">
          <h3 class="product-title">${p.title}</h3>
          <p class="product-desc">${p.subtitle}</p>
          <div class="product-actions">
            <a href="product-detail.html?product=${k}" class="btn btn-primary">
              <i class="fa-solid fa-eye"></i> View Details
            </a>
            <a href="https://api.whatsapp.com/send?phone=918511879428&text=Hello%20Abhinandan%20Plastopack,%20I%20am%20interested%20in%20${encodeURIComponent(p.title)}" class="btn btn-outline" target="_blank">
              <i class="fa-brands fa-whatsapp"></i> Chat
            </a>
          </div>
        </div>
      `;
      relatedGrid.appendChild(card);
    });
  }

  // 9. Handle RFQ Form Submission
  const rfqForm = document.getElementById('detailRfqForm');
  if (rfqForm) {
    rfqForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('rfqName')?.value || 'Valued Customer';
      const company = document.getElementById('rfqCompany')?.value || '';
      const phone = document.getElementById('rfqPhone')?.value || '';

      const submitBtn = rfqForm.querySelector('button[type="submit"]');
      const origText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Submitting Technical RFQ...`;

      setTimeout(() => {
        submitBtn.innerHTML = `<i class="fa-solid fa-check"></i> Quotation Request Received!`;
        submitBtn.style.background = '#10b981';

        setTimeout(() => {
          alert(`Thank you, ${name} (${company})!\nYour inquiry for "${product.title}" has been successfully submitted.\nOur team at Abhinandan Plastopack will contact you at ${phone} with quotation and specifications.`);
          rfqForm.reset();
          submitBtn.disabled = false;
          submitBtn.innerHTML = origText;
          submitBtn.style.background = '';
        }, 600);
      }, 1000);
    });
  }
});
