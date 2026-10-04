/**
 * ====================================================================
 * بناة مصر للإنشاءات والمقاولات (Egypt Builders – EB)
 * ملف البيانات الرئيسي (js/data.js)
 * --------------------------------------------------------------------
 * يحتوي هذا الملف على جميع النصوص، مسارات الصور، بيانات المشروعات،
 * الخدمات، الأخبار، وقاموس الترجمة (عربي / إنجليزي).
 * يمكن تعديل أي نص أو رقم أو مسار هنا وسينعكس فوراً في الموقع كاملاً.
 * ====================================================================
 */

// 1) كائن الصور الموحد (Relative Paths)
const IMAGES = {
  logo: './images/logo-icon.png',
  hero1: './images/hero-1.jpg',
  hero2: './images/hero-2.jpg',
  hero3: './images/hero-3.jpg',
  vision: './images/vision.jpg',
  banner: './images/banner.jpg',
  ctaBg: './images/cta-bg.jpg',
  services: './images/services.jpg',
  aboutStory: './images/about-story.jpg',
  aboutTeam: './images/about-team.jpg',
  project01: './images/project-01.jpg',
  project02: './images/project-02.jpg',
  project03: './images/project-03.jpg',
  project04: './images/project-04.jpg',
  project05: './images/project-05.jpg',
  project06: './images/project-06.jpg'
};

// 2) بيانات الشركة الأساسية وروابط التواصل
const SITE_CONFIG = {
  companyNameAr: 'بناة مصر للإنشاءات والمقاولات',
  companyNameEn: 'Egypt Builders for Construction & Contracting',
  shortNameAr: 'بناة مصر',
  shortNameEn: 'Egypt Builders',
  taglineAr: 'حيث تلتقي العراقة بالإبداع في بناء المستقبل',
  taglineEn: 'Where Heritage Meets Innovation in Building the Future',
  phone: '+20 2 2795 8800',
  mobile: '+20 100 234 5678',
  whatsappNumber: '201002345678', // بدون علامة + للواتساب
  email: 'info@egyptbuilders.com',
  addressAr: 'قطعة 48، مجمع البنوك والشركات، التجمع الخامس، القاهرة الجديدة، مصر',
  addressEn: 'Plot 48, Banking & Corporate Sector, 5th Settlement, New Cairo, Egypt',
  workingHoursAr: 'السبت - الخميس: 8:30 ص - 5:30 م (الجمعة عطلة رسمية)',
  workingHoursEn: 'Sat - Thu: 8:30 AM - 5:30 PM (Friday Closed)',
  formspreeEndpoint: 'https://formspree.io/f/xvgzqgky', // استبدل بهذا رابط فورم سبري الخاص بك
  socialLinks: {
    facebook: 'https://facebook.com',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com',
    twitter: 'https://twitter.com'
  }
};

// 3) إحصائيات الشركة (عدادات متحركة)
const STATS = [
  { id: 'projects', count: 185, suffix: '+', titleAr: 'مشروع منجز', titleEn: 'Completed Projects' },
  { id: 'experience', count: 26, suffix: ' عاماً', titleAr: 'خبرة هندسية', titleEn: 'Years of Experience' },
  { id: 'engineers', count: 420, suffix: '+', titleAr: 'مهندس وخبير فني', titleEn: 'Engineers & Experts' },
  { id: 'safety', count: 99, suffix: '%', titleAr: 'معدل التزام السلامة', titleEn: 'Safety Compliance' }
];

// 4) خدمات الشركة (Services)
const SERVICES_DATA = [
  {
    id: 'general-contracting',
    titleAr: 'المقاولات العامة والإنشاءات',
    titleEn: 'General Contracting & Construction',
    shortDescAr: 'تنفيذ المشروعات الكبرى والخرسانات المسلحة والهياكل الإنشائية الضخمة وفق أعلى الكودات العالمية.',
    shortDescEn: 'Execution of mega projects, reinforced concrete, and structural works following world-class codes.',
    fullDescAr: 'نقدم خدمات متكاملة في إدارة وتنفيذ أعمال المقاولات العامة للأبراج الشاهقة والمجمعات السكنية والتجارية، بدءاً من الحفر والإحلال وأعمال الأساسات العميقة حتى اكتمال الهيكل الإنشائي بكفاءة زمنية وهندسية استثنائية.',
    fullDescEn: 'We provide integrated services in general contracting management and execution for high-rises and mixed-use complexes.',
    featuresAr: ['تنفيذ خرسانات عالية المقاومة', 'إشراف هندسي مستمر على مدار الساعة', 'استخدام أحدث تقنيات القوالب ونظم الشدات المعدنية', 'التزام صارم بالجدول الزمني والموازنة المعتمدة'],
    featuresEn: ['High-strength concrete execution', '24/7 continuous engineering supervision', 'State-of-the-art formwork systems', 'Strict adherence to timeline and budget'],
    icon: 'building'
  },
  {
    id: 'infrastructure',
    titleAr: 'مشروعات البنية التحتية والمرافق',
    titleEn: 'Infrastructure & Utilities',
    shortDescAr: 'مد شبكات المياه، الصرف الصحي، محطات المعالجة، وشبكات الري والطرق الحيوية لخدمة المدن الجديدة.',
    shortDescEn: 'Water networks, wastewater, treatment plants, irrigation, and vital highway systems.',
    fullDescAr: 'نمتلك سجلاً حافلاً في تأسيس البنى التحتية للمدن الذكية والمناطق الصناعية، بما يشمل محطات الرفع، خطوط الانحدار، شبكات تصريف الأمطار، وشبكات الجهد المتوسط والمنخفض باحترافية تضمن استدامة المرافق لأجيال.',
    fullDescEn: 'Proven track record in developing smart city utilities, industrial zones, pumping stations, and stormwater systems.',
    featuresAr: ['محطات معالجة مياه ثلاثية متطورة', 'حفر أفقي موجه ومعدات هيدروليكية عملاقة', 'شبكات كهروميكانيكية متطورة', 'اختبارات ضغط هيدروستاتيكي معتمدة'],
    featuresEn: ['Advanced tertiary wastewater treatment', 'Trenchless directional drilling', 'Advanced MEP infrastructure networks', 'Certified hydrostatic pressure testing'],
    icon: 'network'
  },
  {
    id: 'commercial-towers',
    titleAr: 'الأبراج والمراكز التجارية',
    titleEn: 'Commercial & Corporate Towers',
    shortDescAr: 'تشييد المباني الذكية، المولات التجارية الكبرى، ومقار البنوك والشركات العالمية بمواصفات تقنية رفيعة.',
    shortDescEn: 'Constructing smart headquarters, corporate towers, and regional shopping malls.',
    fullDescAr: 'خبراتنا المتراكمة في بناء الأبراج الإدارية والمراكز التجارية تمنح شركاءنا تصاميم معمارية أيقونية، حلول عزل صوتي وحراري رائدة، ومساحات إدارية مرنة تلبي أعلى اشتراطات كفاءة الطاقة ومعايير LEED العالمية.',
    fullDescEn: 'Our extensive experience in corporate towers delivers iconic architecture, acoustic/thermal solutions, and LEED certification.',
    featuresAr: ['واجهات زجاجية مزدوجة Curtain Wall', 'أنظمة تحكم ذكية في المباني (BMS)', 'مواقف سيارات كهروميكانيكية متعددة الطوابق', 'أنظمة مكافحة حريق متقدمة بمعايير NFPA'],
    featuresEn: ['Double-glazed curtain wall systems', 'Building Management Systems (BMS)', 'Multi-level smart parking', 'NFPA-compliant fire safety systems'],
    icon: 'skyscraper'
  },
  {
    id: 'residential-compounds',
    titleAr: 'المجمعات السكنية والفيلات الفاخرة',
    titleEn: 'Luxury Residential Compounds',
    shortDescAr: 'تطوير كمبوندات سكنية متكاملة الخدمات مع تنسيق حدائق متفرد ومجتمعات عمرانية مستدامة راقية.',
    shortDescEn: 'Developing fully serviced residential compounds with bespoke landscape and sustainable communities.',
    fullDescAr: 'نحول المخططات الطموحة إلى مجتمعات تنبض بالحياة، عبر بناء فيلات فاخرة وعمارات سكنية ذات طابع معماري فريد، مع توفير كافة عناصر الرفاهية من كلوب هاوس، حمامات سباحة، وبحيرات صناعية متناغمة مع الطبيعة.',
    fullDescEn: 'Transforming blueprints into vibrant communities with luxury villas, clubhouses, swimming pools, and scenic water features.',
    featuresAr: ['تشطيبات خارجية حجرية ورخامية فاخرة', 'حلول عزل مائي وحراري فائقة الأداء', 'شوارع وممرات مشاة صديقة للبيئة', 'أنظمة أمن وحراسة وبوابات إلكترونية'],
    featuresEn: ['Natural stone & marble exterior finishes', 'Superior waterproof & thermal insulation', 'Eco-friendly pedestrian greenways', 'Smart gated security systems'],
    icon: 'home'
  },
  {
    id: 'industrial-engineering',
    titleAr: 'المنشآت الصناعية والمستودعات',
    titleEn: 'Industrial Facilities & Warehouses',
    shortDescAr: 'تصميم وتنفيذ المصانع الكبرى، الهياكل المعدنية الجاهزة (Steel Structures)، ومخازن التوزيع اللوجستية.',
    shortDescEn: 'Design and construction of large industrial plants, pre-engineered steel buildings, and logistics hubs.',
    fullDescAr: 'نقدم حلولاً هندسية سريعة ودقيقة للقطاع الصناعي، تشمل أرضيات الخرسانة المصقولة المقاومة للأحمال العالية، الجسور المعدنية ذات البحور الواسعة، وأنظمة التهوية الصناعية والتبريد المتخصصة.',
    fullDescEn: 'Fast and precise engineering solutions for the industrial sector, high-load industrial flooring, and heavy steel structures.',
    featuresAr: ['هياكل معدنية ذات بحور تتجاوز 45 متراً', 'أرضيات إيبوكسي وخرسانة ليزرية فائقة الاستواء', 'عوازل أسطح مضادة للتآكل والحرائق', 'أرصفة شحن وتفريغ هيدروليكية متطورة'],
    featuresEn: ['Clear-span steel frames exceeding 45m', 'Super-flat laser screed epoxy flooring', 'Corrosion and fire-resistant roofing', 'Advanced hydraulic loading docks'],
    icon: 'factory'
  },
  {
    id: 'finishing-mep',
    titleAr: 'التشطيبات المعمارية والأعمال الكهروميكانيكية',
    titleEn: 'Architectural Finishing & MEP',
    shortDescAr: 'أعمال الديكور الداخلي فائق الجودة، شبكات التكييف المركزي، الإنارة الذكية، وشبكات الجهد الفائق.',
    shortDescEn: 'Turnkey interior architecture, central HVAC systems, smart automation, and specialized electro-mechanical works.',
    fullDescAr: 'نضمن لمسة الإتقان النهائية عبر مهندسي ديكور وفنيي كهروميكانيك محترفين، مستخدمين أجود خامات الرخام والأخشاب والدهانات، مع تنسيق متقن لمجاري التكييف ووحدات الإنارة الذكية لبيئات مريحة ومبهرة.',
    fullDescEn: 'Delivering exceptional turnkey interiors, finest marble, woodwork, centralized HVAC, and smart architectural lighting.',
    featuresAr: ['توريد وتركيب رخام وجرانيت مستورد', 'أنظمة صوتيات وشاشات عرض للمؤتمرات', 'تكييف مركزي موفر للطاقة VRV/Chillers', 'لوحات تحكم كهروميكانيكية معتمدة'],
    featuresEn: ['Premium imported marble and granite', 'Conference audio-visual systems', 'Energy-efficient VRV/Chiller HVAC', 'Certified electrical distribution panels'],
    icon: 'tool'
  }
];

// 5) مشروعات الشركة (Projects)
const PROJECTS_DATA = [
  {
    id: 'capital-residence',
    category: 'residential',
    categoryNameAr: 'سكني',
    categoryNameEn: 'Residential',
    titleAr: 'كمبوند كابيتال ريزيدنس الفاخر',
    titleEn: 'Capital Residence Luxury Compound',
    locationAr: 'القاهرة الجديدة، التجمع السادس',
    locationEn: 'New Cairo, 6th Settlement',
    clientAr: 'شركة مصر للاستثمار العقاري',
    clientEn: 'Misr Real Estate Investment',
    areaAr: '185,000 م²',
    areaEn: '185,000 m²',
    year: '2024',
    statusAr: 'مكتمل بنسبة 100%',
    statusEn: '100% Completed',
    image: IMAGES.project01,
    summaryAr: 'مجمع سكني راقٍ يضم 240 فيلا مستقلة وتوين هاوس مع مبنى اجتماعي وكلوب هاوس ومسطحات مائية خلابة.',
    summaryEn: 'High-end residential compound featuring 240 standalone villas, club house, and artificial lagoons.',
    fullDescriptionAr: 'يعد مشروع كابيتال ريزيدنس نموذجاً رائداً في التطوير السكني الحديث، حيث تولت شركة بناة مصر أعمال المقاولات العامة المتكاملة، بدءاً من البنية التحتية وتسوية الموقع العام حتى التسليم على المفتاح مع تنسيق كامل للحدائق والمسطحات الخضراء وشبكات الري الآلية.',
    fullDescriptionEn: 'Capital Residence stands as a benchmark in modern residential living. Egypt Builders delivered comprehensive EPC contracting from earthworks to turnkey delivery.',
    specsAr: [
      { label: 'عدد الوحدات', value: '240 فيلا سكنية فاخرة' },
      { label: 'المساحة الإجمالية للمباني', value: '110,000 م²' },
      { label: 'المسطحات الخضراء والمائية', value: '62% من إجمالي المساحة' },
      { label: 'مدة التنفيذ القياسية', value: '28 شهراً قبل الموعد التعاقدي' }
    ],
    specsEn: [
      { label: 'Total Units', value: '240 Luxury Villas' },
      { label: 'Built-up Area', value: '110,000 m²' },
      { label: 'Green & Water Areas', value: '62% of Masterplan' },
      { label: 'Execution Period', value: '28 Months (Ahead of Schedule)' }
    ]
  },
  {
    id: 'nile-business-tower',
    category: 'commercial',
    categoryNameAr: 'تجاري وإداري',
    categoryNameEn: 'Commercial',
    titleAr: 'برج النيل للأعمال والمال',
    titleEn: 'Nile Business & Financial Tower',
    locationAr: 'العاصمة الإدارية الجديدة، حي المال والأعمال',
    locationEn: 'New Administrative Capital, CBD',
    clientAr: 'تحالف البنوك الدولية للاستثمار',
    clientEn: 'International Investment Banking Consortium',
    areaAr: '46,000 م²',
    areaEn: '46,000 m²',
    year: '2025',
    statusAr: 'قيد التسليم النهائي',
    statusEn: 'Final Handover Phase',
    image: IMAGES.project02,
    summaryAr: 'برج أيقوني بارتفاع 34 طابقاً مجهز بأحدث النظم الذكية ومقرات للبنوك ومراكز أعمال بمواصفات عالمية.',
    summaryEn: 'An iconic 34-story corporate tower equipped with smart building management and global banking specs.',
    fullDescriptionAr: 'صُمم ونُفّذ ليكون علامة معمارية فارقة، شملت الأعمال صب خوازيق خرسانية عميقة بعمق 32 متراً، وهيكل إنشائي خرساني مقاوم للزلازل والرياح الشديدة، وواجهات زجاجية موفرة للطاقة مع شهادة استدامة ذهبية.',
    fullDescriptionEn: 'Designed and constructed as an architectural landmark. Works included 32m deep piling, seismic-resistant concrete frame, and energy-saving double curtain wall.',
    specsAr: [
      { label: 'عدد الطوابق', value: '34 طابقاً + 4 طوابق جراجات ذكية' },
      { label: 'الارتفاع الإنشائي', value: '142 متراً' },
      { label: 'الشهادات البيئية', value: 'LEED Gold Certified' },
      { label: 'سعة المواقف السفلية', value: '850 سيارة بنظام التوجيه الآلي' }
    ],
    specsEn: [
      { label: 'Floors', value: '34 Floors + 4 Smart Basements' },
      { label: 'Height', value: '142 Meters' },
      { label: 'Green Certification', value: 'LEED Gold Certified' },
      { label: 'Parking Capacity', value: '850 Automated Guided Spaces' }
    ]
  },
  {
    id: 'delta-industrial-complex',
    category: 'industrial',
    categoryNameAr: 'صناعي',
    categoryNameEn: 'Industrial',
    titleAr: 'مجمع الدلتا للصناعات الهندسية',
    titleEn: 'Delta Industrial Engineering Complex',
    locationAr: 'مدينة العاشر من رمضان الصناعية',
    locationEn: '10th of Ramadan Industrial City',
    clientAr: 'مجموعة الدلتا للصناعات الثقيلة',
    clientEn: 'Delta Heavy Industries Group',
    areaAr: '95,000 م²',
    areaEn: '95,000 m²',
    year: '2023',
    statusAr: 'مكتمل ويعمل بكامل الطاقة',
    statusEn: 'Completed & Operational',
    image: IMAGES.project03,
    summaryAr: 'مصنع متطور يضم 4 عنابر عملاقة بهياكل معدنية ومباني إدارية ومحطة محولات كهربائية خاصة.',
    summaryEn: 'High-tech industrial plant with 4 massive steel structure bays, corporate offices, and power substation.',
    fullDescriptionAr: 'أنجزت بناة مصر أعمال الهياكل الإنشائية المعدنية سابقة التجهيز ببحور واسعة بدون أعمدة وسطية، مع تنفيذ أرضيات صناعية تتحمل أوزاناً تتجاوز 12 طناً لكل متر مربع وتجهيز شبكات الغاز والهواء المضغوط الصناعي.',
    fullDescriptionEn: 'Egypt Builders completed pre-engineered clear-span steel halls, heavy-duty industrial floors bearing over 12 tons/m², along with industrial piping.',
    specsAr: [
      { label: 'وزن الهياكل المعدنية', value: '4,200 طن من الصلب عالي المقاومة' },
      { label: 'سماكة الأرضيات الصناعية', value: '25 سم مسلحة بألياف البوليمر' },
      { label: 'قدرة محطة الكهرباء', value: '15 ميجا فولت أمبير' },
      { label: 'معدات مناولة ورافعات', value: '8 روافع جسرية بحمولة 25 طناً' }
    ],
    specsEn: [
      { label: 'Steel Weight', value: '4,200 Tons High-Tensile Steel' },
      { label: 'Flooring Thickness', value: '25 cm Polymer Reinforced' },
      { label: 'Substation Capacity', value: '15 MVA' },
      { label: 'Overhead Cranes', value: '8 Gantry Cranes (25T capacity)' }
    ]
  },
  {
    id: 'suez-bridge-axis',
    category: 'infrastructure',
    categoryNameAr: 'بنية تحتية',
    categoryNameEn: 'Infrastructure',
    titleAr: 'محور وكباري تنمية السويس الجديدة',
    titleEn: 'New Suez Development Axis & Overpass Bridges',
    locationAr: 'طريق السويس - العين السخنة',
    locationEn: 'Suez - Ain Sokhna Corridor',
    clientAr: 'الهيئة العامة للطرق والكباري',
    clientEn: 'General Authority for Roads & Bridges',
    areaAr: '18 كم طولي',
    areaEn: '18 Linear Kilometers',
    year: '2024',
    statusAr: 'مكتمل ومفتوح لحركة المرور',
    statusEn: 'Completed & Open for Traffic',
    image: IMAGES.project04,
    summaryAr: 'إنشاء كوبريين علويين بطول إجمالي 2.4 كم وتوسعة المحور الرئيسي لخدمة المشروعات اللوجستية.',
    summaryEn: 'Construction of 2 elevated flyovers spanning 2.4 km and expansion of the logistics trade artery.',
    fullDescriptionAr: 'شمل المشروع صب الكمرات سابقة الإجهاد بأطوال تصل إلى 35 متراً للكمرة الواحدة، وأعمال الرصف الإسفلتي متعدد الطبقات، وشبكات الإنارة بالطاقة الشمسية وتصريف السيول بحرفية عالية تغلبت على التحديات الجغرافية.',
    fullDescriptionEn: 'The project comprised casting pre-stressed concrete girders up to 35m, multi-layer asphalt paving, solar highway illumination, and comprehensive stormwater drainage.',
    specsAr: [
      { label: 'طول الكباري العلوية', value: '2,400 متر طولي مزدوج' },
      { label: 'كمية الخرسانة المصبوبة', value: '68,000 م³ خرسانة مسبقة الإجهاد' },
      { label: 'عدد الحارات المرورية', value: '5 حارات في كل اتجاه' },
      { label: 'ساعات العمل دون إصابات', value: '1.8 مليون ساعة عمل آمنة' }
    ],
    specsEn: [
      { label: 'Flyover Length', value: '2,400 Linear Meters Dual' },
      { label: 'Concrete Poured', value: '68,000 m³ Pre-stressed Concrete' },
      { label: 'Traffic Lanes', value: '5 Lanes in each direction' },
      { label: 'Safe Work Hours', value: '1.8 Million Hours Without LTI' }
    ]
  },
  {
    id: 'zayed-dunes-villas',
    category: 'residential',
    categoryNameAr: 'سكني',
    categoryNameEn: 'Residential',
    titleAr: 'فيلات زايد ديونز الفندقية',
    titleEn: 'Zayed Dunes Boutique Villas',
    locationAr: 'مدينة الشيخ زايد، الجيزة',
    locationEn: 'Sheikh Zayed City, Giza',
    clientAr: 'مجموعة الأفق للتطوير العمراني',
    clientEn: 'Horizon Urban Development Group',
    areaAr: '72,000 م²',
    areaEn: '72,000 m²',
    year: '2023',
    statusAr: 'مكتمل ومسلّم للملاك',
    statusEn: 'Completed & Handed Over',
    image: IMAGES.project05,
    summaryAr: 'حي فيلات فندقية ذات طابع معماري نيو كلاسيكي مع تشطيبات رخامية إيطالية وتجهيزات ذكية بالكامل.',
    summaryEn: 'Exclusive boutique villas community in neoclassical architectural style with Italian marble finishes.',
    fullDescriptionAr: 'تم تشييد 85 فيلا معزولة بأحدث تقنيات المنازل الذكية والتحكم في الإضاءة والمناخ، مع أسوار حجرية مزخرفة وبوابات إلكترونية وممرات مشاة من البازلت الطبيعي ومحطات شحن للسيارات الكهربائية.',
    fullDescriptionEn: 'Constructed 85 ultra-luxury villas equipped with cutting-edge smart automation, natural stone enclosures, basalt pavements, and EV charging stations.',
    specsAr: [
      { label: 'عدد الفيلات', value: '85 فيلا فاخرة بتصاميم متباينة' },
      { label: 'متوسط مساحة الفيلا', value: '650 م² مباني + حديقة خاصة' },
      { label: 'التشطيبات الخارجية', value: 'حجر هاشمي مستورد وحليات تراكوتا' },
      { label: 'أنظمة الأتمتة', value: 'Full Smart Home Integration KNX' }
    ],
    specsEn: [
      { label: 'Number of Villas', value: '85 Bespoke Luxury Villas' },
      { label: 'Average Built Area', value: '650 m² + Private Garden' },
      { label: 'Exterior Finishes', value: 'Imported Natural Stone & Terracotta' },
      { label: 'Automation', value: 'Full Smart Home KNX System' }
    ]
  },
  {
    id: 'cairo-financial-center',
    category: 'commercial',
    categoryNameAr: 'تجاري وإداري',
    categoryNameEn: 'Commercial',
    titleAr: 'مركز القاهرة المالي ومول البلازا',
    titleEn: 'Cairo Financial Plaza & Mall',
    locationAr: 'التجمع الخامس، شارع التسعين الجنوبي',
    locationEn: '5th Settlement, South 90th Street',
    clientAr: 'الشركة المصرية الدولية للتجارة والاستثمار',
    clientEn: 'Egyptian International Trade & Investment',
    areaAr: '62,000 م²',
    areaEn: '62,000 m²',
    year: '2024',
    statusAr: 'مكتمل ويعمل بنجاح',
    statusEn: 'Completed & Operational',
    image: IMAGES.project06,
    summaryAr: 'مجمع تجاري وإداري متكامل يجمع بين المحال التجارية الفاخرة، ومطاعم البلازا المفتوحة، ومكاتب كبرى الشركات.',
    summaryEn: 'An integrated commercial hub combining luxury retail, open-air plaza dining, and premier office spaces.',
    fullDescriptionAr: 'تضمن المشروع تنفيذ قبة زجاجية سماوية عملاقة (Skylight) بطول 60 متراً، وتشييد 3 طوابق سفلية لحركة البضائع والسيارات، مع أنظمة تكييف متطورة وأنظمة أمن وإدارة منشآت متكاملة على مدار الساعة.',
    fullDescriptionEn: 'The development featured a spectacular 60-meter glass skylight atrium, 3 service basements, state-of-the-art chiller systems, and 24/7 facility management.',
    specsAr: [
      { label: 'المساحة التجارية القابلة للتأجير', value: '28,000 م²' },
      { label: 'المساحة الإدارية للأبراج', value: '22,000 م²' },
      { label: 'القبة السماوية المركزية', value: '60م زجاج معالج حرارياً' },
      { label: 'معدل التردد اليومي المتوقع', value: '25,000 زائر يومياً' }
    ],
    specsEn: [
      { label: 'Gross Leasable Area', value: '28,000 m² Retail' },
      { label: 'Corporate Office Space', value: '22,000 m²' },
      { label: 'Central Skylight Atrium', value: '60m Thermally Treated Glass' },
      { label: 'Daily Expected Footfall', value: '25,000 Visitors / Day' }
    ]
  }
];

// 6) أخبار الشركة (News)
const NEWS_DATA = [
  {
    id: 'news-01',
    titleAr: 'بناة مصر تحصد جائزة التميز الهندسي لعام 2024 في مشروعات الأبراج',
    titleEn: 'Egypt Builders Wins 2024 Engineering Excellence Award for High-Rise Towers',
    dateAr: '18 سبتمبر 2024',
    dateEn: 'September 18, 2024',
    categoryAr: 'جوائز وتكريمات',
    categoryEn: 'Awards & Honors',
    image: IMAGES.project02,
    excerptAr: 'تتويجاً لتنفيذها برج النيل للأعمال وفق أحدث معايير الأمان والاستدامة، نالت الشركة الجائزة الكبرى لاتحاد المقاولين العرب.',
    excerptEn: 'In recognition of executing the Nile Business Tower to global sustainability standards, EB was honored with the Arab Contractors Union Grand Prize.',
    contentAr: 'أعرب مجلس إدارة شركة بناة مصر للإنشاءات والمقاولات عن فخره الكبير بالحصول على درع التميز الإنشائي لعام 2024. وأكد رئيس قطاع المشروعات أن هذا الإنجاز يعكس التزام كوادرنا الهندسية بأدق تفاصيل الجودة العالمية، وتطبيق نماذج إدارة التشييد الرقمية BIM في كل مراحل العمل.'
  },
  {
    id: 'news-02',
    titleAr: 'توقيع بروتوكول تنفيذ المرحلة الثانية من محاور البنية التحتية المتطورة',
    titleEn: 'Signing Protocol for Phase 2 Execution of Advanced Regional Infrastructure',
    dateAr: '05 أغسطس 2024',
    dateEn: 'August 05, 2024',
    categoryAr: 'مشروعات جديدة',
    categoryEn: 'New Projects',
    image: IMAGES.project04,
    excerptAr: 'فوز الشركة بمناقصة إنشاء شبكات مرافق ذكية وطرق سريعة لربط المدن الصناعية الجديدة بموانئ البحر الأحمر.',
    excerptEn: 'EB secures the tender for developing smart utilities and express corridors connecting industrial zones to Red Sea ports.',
    contentAr: 'وقعت شركة بناة مصر عقداً استراتيجياً لتنفيذ 45 كيلومتراً من شبكات المرافق الرئيسية ومحطات التوزيع الكهربائي. يأتي هذا المشروع ضمن خطة التوسع القومية لتعزيز القدرة اللوجستية ودعم الاستثمارات الصناعية في إقليم القناة والدلتا.'
  },
  {
    id: 'news-03',
    titleAr: 'اكتمال تسليم وحدات كمبوند كابيتال ريزيدنس قبل الموعد التعاقدي بشهرين',
    titleEn: 'Capital Residence Handover Completed 2 Months Ahead of Schedule',
    dateAr: '12 يونيو 2024',
    dateEn: 'June 12, 2024',
    categoryAr: 'تسليم مشروعات',
    categoryEn: 'Project Handover',
    image: IMAGES.project01,
    excerptAr: 'تسليم 240 فيلا سكنية فاخرة لعملاء الشركة مع إشادة واسعة بدقة التشطيبات وجودة المسطحات الخضراء والبحيرات.',
    excerptEn: '240 luxury villas handed over with glowing acclaim for flawless finishing and landscape execution.',
    contentAr: 'في احتفالية هندسية متميزة بحضور الملاك وممثلي شركة التطوير العقاري، تم تسليم المرحلة النهائية من كمبوند كابيتال ريزيدنس. أشاد المطور بسرعة الإنجاز القياسية التي حققتها بناة مصر مع الحفاظ على أعلى معايير الجودة المعتمدة.'
  },
  {
    id: 'news-04',
    titleAr: 'بناة مصر تطلق مبادرة "المواقع الخضراء" لتخفيض الانبعاثات الكربونية بنسبة 30%',
    titleEn: 'Egypt Builders Launches "Green Sites" Initiative to Cut Carbon by 30%',
    dateAr: '24 أبريل 2024',
    dateEn: 'April 24, 2024',
    categoryAr: 'استدامة وبيئة',
    categoryEn: 'Sustainability',
    image: IMAGES.project03,
    excerptAr: 'اعتماد خرسانات صديقة للبيئة وأنظمة طاقة شمسية مؤقتة للمعدات ومواقع العمل الإنشائية في كافة فروع الشركة.',
    excerptEn: 'Adopting eco-friendly concrete and solar power installations across all active construction sites.',
    contentAr: 'التزاماً بأهداف التنمية المستدامة، أعلنت بناة مصر عن خطتها الشاملة لعام 2025 لتشغيل مواقع المشروعات بمصادر طاقة نظيفة، وإعادة تدوير 90% من المخلفات الإنشائية الصلبة بالتعاون مع مراكز البحوث الهندسية المتخصصة.'
  }
];

// 7) آراء العملاء (Testimonials)
const TESTIMONIALS_DATA = [
  {
    nameAr: 'م. خالد المنشاوي',
    nameEn: 'Eng. Khaled El-Menshawy',
    roleAr: 'العضو المنتدب - شركة مصر للاستثمار العقاري',
    roleEn: 'Managing Director - Misr Real Estate Inv.',
    commentAr: 'التعامل مع شركة بناة مصر كان نقلة نوعية لمشروعاتنا. التزام حديدي بالمواعيد، وحرفية لا تضاهى في معالجة التفاصيل المعمارية الصعبة. نعتبرهم شريك النجاح الأول.',
    commentEn: 'Working with Egypt Builders was a transformative experience. Ironclad timeline commitment and unmatched finesse in structural finishing.',
    rating: 5,
    initials: 'KM'
  },
  {
    nameAr: 'د. طارق السعدني',
    nameEn: 'Dr. Tarek El-Saadany',
    roleAr: 'رئيس مجلس إدارة - مجموعة الدلتا للصناعات',
    roleEn: 'Chairman - Delta Heavy Industries Group',
    commentAr: 'شيدت لنا بناة مصر مجمعاً صناعياً بمواصفات أوروبية دقيقة. تحمّل الأرضيات وجودة الهياكل الفولاذية يعكسان خبرة عريقة في الهندسة الإنشائية الثقيلة.',
    commentEn: 'Egypt Builders constructed our industrial complex to stringent European standards. The structural integrity has surpassed all our benchmarks.',
    rating: 5,
    initials: 'TS'
  },
  {
    nameAr: 'أ. محمود الشريف',
    nameEn: 'Mr. Mahmoud El-Sherif',
    roleAr: 'مدير قطاع الأصول - تحالف البنوك الدولية',
    roleEn: 'Head of Asset Management - Banking Consortium',
    commentAr: 'تنفيذ برج إداري بهذا الارتفاع والتعقيد الهندسي في العاصمة الإدارية تطلب شريكاً على مستوى عالمي. بناة مصر تفوقت على توقعات الاستشاريين الدوليين.',
    commentEn: 'Executing a corporate tower of this scale required a world-class partner. Egypt Builders exceeded the expectations of our international consultants.',
    rating: 5,
    initials: 'MS'
  }
];

// 8) شركاء النجاح والمؤسسات (Partners)
const PARTNERS_DATA = [
  { name: 'وزارة الإسكان والمرافق', acronym: 'MHUUC' },
  { name: 'الهيئة العامة للطرق والكباري', acronym: 'GARB' },
  { name: 'شركة مصر للاستثمار والتطوير', acronym: 'MREI' },
  { name: 'اتحاد البنوك الدولية', acronym: 'IBCG' },
  { name: 'مجموعة الدلتا للصناعات', acronym: 'DHIG' },
  { name: 'الأفق للتنمية العمرانية', acronym: 'HUDG' }
];

// 9) مميزات الشركة (Why Us)
const WHY_US_DATA = [
  {
    titleAr: 'سجل حافل وخبرة تمتد لأكثر من 26 عاماً',
    titleEn: '26+ Years of Proven Construction Excellence',
    descAr: 'نفذنا أكثر من 185 مشروعاً رائداً في مختلف ربوع مصر، محققين معادلة الدقة الإنشائية وسرعة الإنجاز.',
    descEn: 'Successfully delivered 185+ landmark projects across Egypt with unmatched precision.',
    icon: 'shield-check'
  },
  {
    titleAr: 'أحدث التجهيزات والمعدات الثقيلة المملوكة بالكامل',
    titleEn: 'Wholly-Owned Modern Heavy Machinery Fleet',
    descAr: 'أسطول متكامل من محطات خلط الخرسانة، مضخات الضغط العالي، الأوناش البرجية والحفارات العملاقة.',
    descEn: 'Fully owned batching plants, high-pressure pumps, tower cranes, and heavy excavation fleet.',
    icon: 'truck'
  },
  {
    titleAr: 'منظومة سلامة وصحة مهنية صارمة (HSE)',
    titleEn: 'Zero-Harm Occupational Health & Safety (HSE)',
    descAr: 'نطبق معايير ISO 45001 العالمية مع ملايين ساعات العمل الآمنة في أصعب البيئات الإنشائية.',
    descEn: 'Strict adherence to ISO 45001 standards with millions of safe work hours recorded.',
    icon: 'heart-pulse'
  },
  {
    titleAr: 'إدارة رقمية للمشروعات بنظام BIM والنمذجة',
    titleEn: 'Advanced BIM & Digital Construction Management',
    descAr: 'نستخدم تقنيات النمذجة ثلاثية الأبعاد لتفادي التعارضات وحساب التكاليف والكميات بدقة متناهية.',
    descEn: 'Leveraging 3D BIM modeling to eliminate site clashes and optimize time & material costs.',
    icon: 'cpu'
  }
];

// 10) قاموس الترجمة الكامل (عربي / إنجليزي)
const I18N = {
  ar: {
    // Navigation
    navHome: 'الرئيسية',
    navAbout: 'من نحن',
    navServices: 'خدماتنا',
    navProjects: 'مشروعاتنا',
    navNews: 'الأخبار',
    navContact: 'اتصل بنا',
    langToggle: 'EN',

    // Hero
    heroTitlePrefix: 'بناة مصر:',
    heroTitleMiddle: 'حيث تلتقي العراقة',
    heroTitleHighlight: 'بالإبداع',
    heroTitleSuffix: 'في بناء المستقبل',
    heroSubtitle: 'ريادة هندسية وطنية، مقاولات عامة كبرى، بنية تحتية مستدامة، وأبراج أيقونية ترسم ملامح النهضة العمرانية المصرية.',
    btnContactUs: 'تواصل معنا',
    btnOurProjects: 'شاهد مشروعاتنا',
    btnExploreServices: 'استكشف خدماتنا',
    btnLearnMore: 'تعرف على الشركة',
    btnSubmitQuotation: 'طلب عرض سعر',
    btnSendWhatsApp: 'إرسال عبر واتساب',
    btnSendDirect: 'إرسال الرسالة',
    btnBackHome: 'العودة للرئيسية',
    btnViewProject: 'تفاصيل المشروع',
    btnViewAllProjects: 'عرض جميع المشروعات',

    // Section Titles
    secVisionSubtitle: 'رؤيتنا المعمارية',
    secVisionTitle: 'نبني صروحاً تلهم الأجيال وتحقق الاستدامة',
    secVisionP1: 'في "بناة مصر"، نؤمن بأن الهندسة ليست مجرد خرسانات وحديد، بل هي تجسيد لحضارة تمتد لآلاف السنين في البناء والإعمار. نجمع بين أصالة الحرفة المصرية والحلول التكنولوجية الأكثر تطوراً في العالم لنبني مشروعات تليق بطموح مصر الحديثة.',
    secVisionP2: 'من خلال شبكة من أكفأ المهندسين والخبراء واستخدام أحدث أساليب النمذجة (BIM)، نضمن تسليم كل مشروع بأعلى درجات السلامة، الكفاءة الطاقية، والجمال البصري المتقن.',
    
    secServicesSubtitle: 'مجالات التميز الهندسي',
    secServicesTitle: 'حلول إنشائية متكاملة من الأساسات حتى التسليم',
    
    secProjectsSubtitle: 'سابقة أعمالنا الفاخرة',
    secProjectsTitle: 'مشروعات رائدة تشهد على تميزنا في كافة القطاعات',
    
    secWhySubtitle: 'لماذا يختارنا الشركاء؟',
    secWhyTitle: 'الريادة، الالتزام، والحلول الهندسية المبتكرة',

    secTestimonialsSubtitle: 'شهادات نعتز بها',
    secTestimonialsTitle: 'ماذا يقول كبار المستثمرين والمطورين عنا؟',

    secCtaTitle: 'هل تخطط لبناء مشروعك القادم؟',
    secCtaDesc: 'فريقنا الهندسي مستعد لمساعدتك في دراسة المخططات وتقديم عروض أسعار متكاملة وجداول تنفيذية دقيقة.',
    secCtaBtn: 'احصل على استشارة هندسية مجانية',

    // Filters
    filterAll: 'الكل',
    filterResidential: 'سكني',
    filterCommercial: 'تجاري وإداري',
    filterIndustrial: 'صناعي',
    filterInfrastructure: 'بنية تحتية',

    // Details page
    detailLocation: 'الموقع:',
    detailClient: 'العميل:',
    detailArea: 'المساحة الإجمالية:',
    detailYear: 'سنة التسليم:',
    detailStatus: 'حالة المشروع:',
    detailSpecsTitle: 'المواصفات الفنية والهندسية',
    detailRelatedTitle: 'مشروعات مشابهة قد تهمك',
    detailNotFoundTitle: 'المشروع غير موجود',
    detailNotFoundDesc: 'عذراً، لم نتمكن من العثور على المشروع المطلوب. يرجى تصفح معرض مشروعاتنا.',

    // About page
    aboutStoryTitle: 'قصتنا: ربع قرن من العطاء والإعمار',
    aboutMissionTitle: 'رسالتنا',
    aboutMissionText: 'تقديم خدمات مقاولات متكاملة فائقة الجودة تفوق توقعات شركائنا، عبر دمج الكفاءات الوطنية بأحدث التكنولوجيات الإنشائية مع الالتزام المطلق بالاستدامة والسلامة المهنية.',
    aboutVisionTitle: 'رؤيتنا',
    aboutVisionText: 'أن نكون الشريك الإنشائي الأكثر موثوقية وتميزاً في مصر والمنطقة العربية، مساهمين بفاعلية في بناء البنية التحتية والمدن الذكية للأجيال القادمة.',
    aboutValuesTitle: 'قيمنا الراسخة',
    aboutValue1Title: 'النزاهة والشفافية',
    aboutValue1Text: 'الوضوح الكامل مع شركائنا والمصداقية في كل عهد وميزانية.',
    aboutValue2Title: 'الجودة غير القابلة للمساومة',
    aboutValue2Text: 'معايير فنية صارمة واختبارات دقيقة لكل مرحلة من مراحل البناء.',
    aboutValue3Title: 'السلامة أولاً وأخيراً',
    aboutValue3Text: 'حماية كوادرنا البشرية وبيئة العمل هي أولويتنا الإنسانية والمهنية.',
    aboutValue4Title: 'الابتكار والتطوير المستمر',
    aboutValue4Text: 'مواكبة أحدث تقنيات البناء الحديث وحلول التشييد الخضراء.',

    // Contact Page
    contactPageTitle: 'تواصل مع فريق بناة مصر',
    contactPageSubtitle: 'نسعد باستقبال استفساراتكم ومناقشة مشروعاتكم الهندسية على مدار الأسبوع.',
    formName: 'الاسم بالكامل',
    formPhone: 'رقم الهاتف / الواتساب',
    formEmail: 'البريد الإلكتروني',
    formProjectType: 'نوع المشروع',
    formSelectType: 'اختر نوع المشروع...',
    formTypeRes: 'مجمع سكني أو فيلا خاصة',
    formTypeCom: 'برج تجاري أو مبنى إداري',
    formTypeInd: 'منشأة صناعية أو مستودع',
    formTypeInfra: 'مشروع بنية تحتية أو طرق',
    formTypeFinish: 'تشطيبات وتصميم داخلي',
    formTypeOther: 'أخرى',
    formMessage: 'تفاصيل واستفسارات المشروع',
    formMessagePlaceholder: 'صف طبيعة مشروعك، المساحة المقدرة، الموقع، وأي متطلبات خاصة...',
    formSubmitSuccess: 'تم إرسال رسالتكم بنجاح! سيتواصل معكم أحد مهندسينا خلال 24 ساعة.',
    formSubmitError: 'حدث خطأ أثناء الإرسال. يرجى المحاولة لاحقاً أو مراسلتنا مباشرة عبر واتساب.',
    formRequiredField: 'هذا الحقل مطلوب',

    // Footer
    footerAboutText: 'شركة بناة مصر للإنشاءات والمقاولات (EB) - شركة مساهمة مصرية رائدة في مجالات المقاولات العامة، البنية التحتية، الأبراج التجارية، والمجمعات السكنية الحديثة منذ عام 1998.',
    footerQuickLinks: 'روابط سريعة',
    footerServicesList: 'مجالات الاختصاص',
    footerContactInfo: 'بيانات الاتصال',
    footerCopyright: '© 2025 جميع الحقوق محفوظة لشركة بناة مصر للإنشاءات والمقاولات (Egypt Builders - EB).'
  },

  en: {
    // Navigation
    navHome: 'Home',
    navAbout: 'About Us',
    navServices: 'Services',
    navProjects: 'Projects',
    navNews: 'News',
    navContact: 'Contact Us',
    langToggle: 'عربي',

    // Hero
    heroTitlePrefix: 'Egypt Builders:',
    heroTitleMiddle: 'Where Heritage Meets',
    heroTitleHighlight: 'Innovation',
    heroTitleSuffix: 'in Building the Future',
    heroSubtitle: 'National engineering excellence, mega contracting, sustainable infrastructure, and iconic towers shaping Egypt’s modern urban renaissance.',
    btnContactUs: 'Contact Us',
    btnOurProjects: 'View Projects',
    btnExploreServices: 'Explore Services',
    btnLearnMore: 'Learn More',
    btnSubmitQuotation: 'Request a Quote',
    btnSendWhatsApp: 'Send via WhatsApp',
    btnSendDirect: 'Submit Message',
    btnBackHome: 'Back to Home',
    btnViewProject: 'Project Details',
    btnViewAllProjects: 'View All Projects',

    // Section Titles
    secVisionSubtitle: 'Our Architectural Vision',
    secVisionTitle: 'Building Monuments that Inspire Generations & Achieve Sustainability',
    secVisionP1: 'At "Egypt Builders", we believe engineering is more than concrete and steel; it is the manifestation of thousands of years of architectural heritage. We fuse Egyptian craftsmanship with world-class construction technologies.',
    secVisionP2: 'With our network of premier engineers, BIM modeling, and cutting-edge methodology, we ensure that every structure is delivered with absolute safety, energy efficiency, and pristine visual elegance.',
    
    secServicesSubtitle: 'Fields of Engineering Excellence',
    secServicesTitle: 'Integrated Construction Solutions From Foundations to Turnkey Handover',
    
    secProjectsSubtitle: 'Our Prestigious Portfolio',
    secProjectsTitle: 'Landmark Developments Across Residential, Commercial & Industrial Sectors',
    
    secWhySubtitle: 'Why Partners Choose Us',
    secWhyTitle: 'Leadership, Integrity & Cutting-Edge Construction Techniques',

    secTestimonialsSubtitle: 'Client Endorsements',
    secTestimonialsTitle: 'What Leading Developers Say About Egypt Builders',

    secCtaTitle: 'Planning Your Next Major Development?',
    secCtaDesc: 'Our engineering consultants are ready to review blueprints and deliver comprehensive cost and time estimates.',
    secCtaBtn: 'Get Free Engineering Consultation',

    // Filters
    filterAll: 'All',
    filterResidential: 'Residential',
    filterCommercial: 'Commercial',
    filterIndustrial: 'Industrial',
    filterInfrastructure: 'Infrastructure',

    // Details page
    detailLocation: 'Location:',
    detailClient: 'Client:',
    detailArea: 'Total Area:',
    detailYear: 'Completion Year:',
    detailStatus: 'Status:',
    detailSpecsTitle: 'Technical & Engineering Specifications',
    detailRelatedTitle: 'Related Projects',
    detailNotFoundTitle: 'Project Not Found',
    detailNotFoundDesc: 'Sorry, the requested project could not be found. Please browse our project catalog.',

    // About page
    aboutStoryTitle: 'Our Story: Over a Quarter Century of Engineering Dedication',
    aboutMissionTitle: 'Our Mission',
    aboutMissionText: 'Delivering exceptional, turnkey construction services exceeding partner expectations by empowering national talent with top-tier technology, strict sustainability, and zero-harm safety.',
    aboutVisionTitle: 'Our Vision',
    aboutVisionText: 'To be the most trusted and distinctive construction contractor in Egypt and the MENA region, building future-ready smart infrastructure for generations to come.',
    aboutValuesTitle: 'Our Core Values',
    aboutValue1Title: 'Integrity & Transparency',
    aboutValue1Text: 'Absolute clarity with partners and steadfast honesty in every covenant and budget.',
    aboutValue2Title: 'Uncompromising Quality',
    aboutValue2Text: 'Rigorous engineering standards and precision quality control across all project stages.',
    aboutValue3Title: 'Safety First & Always',
    aboutValue3Text: 'Protecting our workforce and site environment is our ultimate humanitarian priority.',
    aboutValue4Title: 'Continuous Innovation',
    aboutValue4Text: 'Adopting sustainable green construction techniques and advanced digital workflows.',

    // Contact Page
    contactPageTitle: 'Connect with Egypt Builders',
    contactPageSubtitle: 'We welcome your inquiries and look forward to discussing your engineering aspirations.',
    formName: 'Full Name',
    formPhone: 'Phone / WhatsApp',
    formEmail: 'Email Address',
    formProjectType: 'Project Category',
    formSelectType: 'Select project category...',
    formTypeRes: 'Residential Compound or Villa',
    formTypeCom: 'Commercial Tower or Corporate HQ',
    formTypeInd: 'Industrial Facility or Logistics Hub',
    formTypeInfra: 'Infrastructure or Roadways',
    formTypeFinish: 'Finishing & Interior Fit-Out',
    formTypeOther: 'Other',
    formMessage: 'Project Details & Inquiries',
    formMessagePlaceholder: 'Describe your project scale, location, estimated timeline, and custom requirements...',
    formSubmitSuccess: 'Your inquiry has been submitted! Our engineering team will contact you within 24 hours.',
    formSubmitError: 'An error occurred while submitting. Please try again or chat with us directly via WhatsApp.',
    formRequiredField: 'This field is required',

    // Footer
    footerAboutText: 'Egypt Builders for Construction & Contracting (EB) - A premier Egyptian joint-stock corporation leading mega contracting, infrastructure, and luxury developments since 1998.',
    footerQuickLinks: 'Quick Links',
    footerServicesList: 'Our Disciplines',
    footerContactInfo: 'Contact Information',
    footerCopyright: '© 2025 All rights reserved. Egypt Builders for Construction & Contracting (EB).'
  }
};
