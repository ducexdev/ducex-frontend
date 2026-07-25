export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  heroImage: string;
  clientProblem: string;
  howWeHelp: string;
  specificServices: string[];
  process: { step: string; description: string }[];
  faqs: { question: string; answer: string }[];
  relevantLawyerSlugs: string[];
  isUrgent?: boolean;
  trustMarkers: { label: string; description: string; icon: string }[];
}

export const services: Service[] = [
  {
    id: 'family-law',
    slug: 'family-law',
    title: 'Family Law',
    shortDescription: 'Compassionate, discreet, and highly effective legal representation for sensitive domestic matters.',
    heroImage: '/images/services/family-law-hero.jpg',
    clientProblem: 'Family disputes are inherently stressful and emotionally taxing. Navigating issues like divorce, custody, or financial separation without experienced legal counsel can lead to unfair settlements, protracted conflicts, and lasting negative impacts on children and personal wealth.',
    howWeHelp: 'Ducex Solicitors provides a steady, objective hand during domestic crises. We prioritize negotiated, amicable settlements to minimize emotional collateral damage, but we remain fiercely prepared to litigate to protect your rights, your assets, and your family\'s best interests.',
    specificServices: [
      'Family disputes',
      'Child custody',
      'Child maintenance',
      'Guardianship',
      'Matrimonial matters',
      'Family mediation',
      'Domestic-relations issues',
      'Adoption-related assistance'
    ],
    process: [
      { step: 'Initial Consultation', description: 'A confidential, empathetic discussion to understand your unique family dynamics and legal objectives.' },
      { step: 'Strategy Formulation', description: 'Developing a tailored legal strategy focused on protecting your assets and achieving a fair resolution.' },
      { step: 'Mediation & Negotiation', description: 'Engaging opposing counsel or parties to reach an out-of-court settlement where possible.' },
      { step: 'Court Representation', description: 'Vigorous advocacy in family courts if negotiations fail to yield a satisfactory result.' }
    ],
    faqs: [
      { question: 'Do all family law cases go to court?', answer: 'No. The vast majority of our family law cases are resolved through mediation and negotiated settlements out of court, saving you time, money, and emotional stress.' },
      { question: 'How is child custody determined?', answer: 'Custody is determined strictly based on the "best interests of the child," factoring in parental stability, financial capability, and the child\'s current routine.' }
    ],
    relevantLawyerSlugs: ['perpetua-duruigbo', 'adaobi-m-okoye'],
    trustMarkers: [
      { label: 'Confidential', description: 'Your privacy is always protected.', icon: 'ShieldCheck' },
      { label: 'Compassionate', description: 'Your clients, we care, we support.', icon: 'Heart' },
      { label: 'Results Driven', description: 'Effective legal solutions that protect you.', icon: 'TrendingUp' },
    ]
  },
  {
    id: 'property-law',
    slug: 'property-law',
    title: 'Property Law',
    shortDescription: 'Comprehensive management of the entire property lifecycle, from acquisition to development and dispute resolution.',
    heroImage: '/images/services/property-law-hero.jpg',
    clientProblem: 'The Nigerian property market is fraught with risks, including defective titles, fraudulent vendors, and complex regulatory bottlenecks. Engaging in property transactions without rigorous legal oversight often results in costly litigation and loss of investment.',
    howWeHelp: 'We mitigate risk by conducting exhaustive due diligence before any transaction. From drafting airtight lease agreements to resolving complex land disputes, our property law experts ensure your real estate investments are legally secure and commercially viable.',
    specificServices: [
      'Property acquisition',
      'Property sales',
      'Documentation',
      'Title review',
      'Due diligence',
      'Land disputes',
      'Lease agreements',
      'Tenancy matters',
      'Landlord and tenant disputes'
    ],
    process: [
      { step: 'Due Diligence', description: 'Rigorous investigation of property titles at the relevant registries to verify ownership and uncover encumbrances.' },
      { step: 'Drafting & Review', description: 'Preparation of precise legal documentation, including Deeds of Assignment, Leases, and Contracts of Sale.' },
      { step: 'Execution & Perfection', description: 'Overseeing the signing process and securing Governor\'s Consent and registration.' },
      { step: 'Post-Transaction Support', description: 'Ongoing management of tenancy agreements and swift resolution of any emerging disputes.' }
    ],
    faqs: [
      { question: 'Why is due diligence necessary?', answer: 'Due diligence confirms that the seller actually owns the property, identifies any hidden mortgages or liens, and ensures the land is not subject to government acquisition.' },
      { question: 'What is Governor\'s Consent?', answer: 'Under the Land Use Act, all land belongs to the state government. Any transfer of interest in land requires the consent of the State Governor to be legally valid.' }
    ],
    relevantLawyerSlugs: ['emmanuel-u-duruigbo', 'perpetua-duruigbo'],
    trustMarkers: [
      { label: 'Strategic Advice', description: 'Smart legal guidance for your property goals.', icon: 'Lightbulb' },
      { label: 'Risk Protection', description: 'Minimise risks and safeguard your investments.', icon: 'ShieldCheck' },
      { label: 'Results Driven', description: 'Effective solutions that deliver real value.', icon: 'TrendingUp' },
    ]
  },
  {
    id: 'corporate-law',
    slug: 'corporate-law',
    title: 'Corporate Law',
    shortDescription: 'Strategic corporate governance and commercial legal services tailored for modern businesses.',
    heroImage: '/images/services/com-law.png',
    clientProblem: 'Businesses operating in Nigeria face a labyrinth of regulatory requirements, complex corporate governance standards, and high-stakes commercial negotiations. Non-compliance or poorly structured agreements can lead to severe penalties, shareholder disputes, and corporate collapse.',
    howWeHelp: 'Ducex Solicitors acts as your strategic legal partner. We structure your corporate entities for optimal efficiency, draft ironclad commercial agreements, and navigate the regulatory landscape, allowing your executive team to focus entirely on growth and profitability.',
    specificServices: [
      'Company incorporation',
      'Corporate governance',
      'Shareholder agreements',
      'Board advisory',
      'Corporate restructuring',
      'Mergers and acquisitions',
      'Regulatory compliance',
      'Commercial advisory'
    ],
    process: [
      { step: 'Corporate Audit', description: 'Assessing your current corporate structure and compliance status to identify vulnerabilities.' },
      { step: 'Strategic Structuring', description: 'Designing governance frameworks and drafting foundational documents like Shareholder Agreements.' },
      { step: 'Transaction Advisory', description: 'Providing end-to-end legal support for M&A, restructuring, and major commercial deals.' },
      { step: 'Ongoing Compliance', description: 'Acting as Company Secretary and ensuring continuous adherence to CAC and sector-specific regulations.' }
    ],
    faqs: [
      { question: 'Do I need a Shareholder Agreement if I am in business with friends?', answer: 'Absolutely. A Shareholder Agreement prevents future disputes by clearly defining roles, profit distribution, and exit strategies before conflicts arise.' },
      { question: 'What does corporate governance entail?', answer: 'It involves the rules, practices, and processes by which a company is directed and controlled, balancing the interests of stakeholders, management, and the board.' }
    ],
    relevantLawyerSlugs: ['emmanuel-u-duruigbo'],
    trustMarkers: [
      { label: 'Strategic Counsel', description: 'Expert governance and compliance guidance.', icon: 'Briefcase' },
      { label: 'Risk Mitigation', description: 'Proactively protecting your business interests.', icon: 'ShieldCheck' },
      { label: 'Results Driven', description: 'Commercially focused legal solutions.', icon: 'TrendingUp' },
    ]
  },
  {
    id: 'litigation',
    slug: 'litigation-dispute-resolution',
    title: 'Litigation & Dispute Resolution',
    shortDescription: 'Result-oriented representation for complex commercial and civil disputes.',
    heroImage: '/images/services/litigation-hero.png',
    clientProblem: 'When commercial relationships break down or rights are infringed, the resulting disputes can drain financial resources and distract from core business objectives. Choosing the wrong dispute resolution strategy can result in total loss.',
    howWeHelp: 'Our litigators are formidable advocates with a track record of success in Nigerian courts. We approach every dispute commercially, utilizing mediation and arbitration to save time and money, while remaining fully prepared to fiercely litigate high-stakes matters to secure a definitive victory.',
    specificServices: [
      'Commercial disputes',
      'Contract disputes',
      'Property disputes',
      'Debt recovery',
      'Employment disputes',
      'Negotiation',
      'Mediation',
      'Arbitration',
      'Court representation',
      'Appeals'
    ],
    process: [
      { step: 'Case Evaluation', description: 'A rigorous analysis of the facts, evidence, and relevant law to determine the probability of success.' },
      { step: 'Pre-Action Protocols', description: 'Issuing formal demands and attempting alternative dispute resolution before initiating court proceedings.' },
      { step: 'Pleadings & Discovery', description: 'Filing court processes and conducting thorough evidence gathering to build an airtight case.' },
      { step: 'Trial & Enforcement', description: 'Aggressive courtroom representation followed by the swift enforcement of favorable judgments.' }
    ],
    faqs: [
      { question: 'Is arbitration better than litigation?', answer: 'Arbitration is often faster, more flexible, and confidential compared to public court litigation, making it highly preferable for complex commercial disputes.' },
      { question: 'How long does debt recovery take?', answer: 'Timelines vary based on the debtor\'s response. We often recover debts quickly through aggressive pre-action demands, avoiding lengthy court trials.' }
    ],
    relevantLawyerSlugs: ['emmanuel-u-duruigbo', 'adaobi-m-okoye'],
    trustMarkers: [
      { label: 'Aggressive Advocacy', description: 'Formidable representation in courts and tribunals.', icon: 'Scale' },
      { label: 'Commercial Focus', description: 'Dispute strategy aligned with your business goals.', icon: 'TrendingUp' },
      { label: 'Swift Resolution', description: 'Minimising time, cost, and disruption.', icon: 'Clock' },
    ]
  },
  {
    id: 'wills-estates',
    slug: 'wills-estate-planning',
    title: 'Wills & Estate Planning',
    shortDescription: 'Comprehensive estate planning to secure your legacy and minimize tax liabilities.',
    heroImage: '/images/about/ducex-about.png',
    clientProblem: 'Dying intestate (without a will) in Nigeria leaves your estate vulnerable to complex customary laws, heavy taxation, and bitter family disputes. Your hard-earned wealth may not end up with the intended beneficiaries.',
    howWeHelp: 'We provide sophisticated estate planning services that go beyond drafting simple wills. We utilize trusts, deeds of gift, and careful tax planning to ensure a seamless, private, and tax-efficient transfer of generational wealth.',
    specificServices: [
      'Will preparation',
      'Estate planning',
      'Probate assistance',
      'Estate administration',
      'Succession planning',
      'Trust-related advice',
      'Family wealth planning'
    ],
    process: [
      { step: 'Wealth Assessment', description: 'Cataloging your assets, liabilities, and understanding your specific wishes for succession.' },
      { step: 'Drafting & Structuring', description: 'Drafting robust Wills and establishing Living Trusts tailored to your family\'s unique needs.' },
      { step: 'Execution & Lodgment', description: 'Ensuring the Will is properly witnessed, executed, and safely lodged at the Probate Registry.' },
      { step: 'Probate Administration', description: 'Assisting executors in obtaining the Grant of Probate and distributing assets upon passing.' }
    ],
    faqs: [
      { question: 'Can I write my own Will?', answer: 'While possible, DIY wills often fail due to strict legal requirements regarding execution and witnessing, rendering them invalid in court.' },
      { question: 'What is the difference between a Will and a Trust?', answer: 'A Will takes effect upon death and goes through public probate. A Trust takes effect immediately, allows for complex control of assets, and bypasses the probate process.' }
    ],
    relevantLawyerSlugs: ['perpetua-duruigbo'],
    trustMarkers: [
      { label: 'Legacy Secured', description: 'Protect your wealth for future generations.', icon: 'FileText' },
      { label: 'Tax Efficient', description: 'Structured to minimise estate tax liabilities.', icon: 'Calculator' },
      { label: 'Fully Confidential', description: 'Private, discreet estate planning.', icon: 'ShieldCheck' },
    ]
  },
  {
    id: 'real-estate',
    slug: 'real-estate-law',
    title: 'Real Estate Law',
    shortDescription: 'Specialized legal counsel for high-value real estate development and complex property transactions.',
    heroImage: '/images/services/real-estate-hero.png',
    clientProblem: 'Real estate development involves massive capital outlay and complex interactions with contractors, financiers, and government agencies. Any legal misstep can halt a project entirely or severely impact its profitability.',
    howWeHelp: 'We provide end-to-end legal support for real estate developers and investors. From structuring joint ventures and securing project finance to navigating zoning laws and resolving contractor disputes, we protect your bottom line.',
    specificServices: [
      'Property transactions',
      'Land acquisition',
      'Landlord and tenant',
      'Property disputes',
      'Real estate development'
    ],
    process: [
      { step: 'Project Structuring', description: 'Advising on the optimal legal structures for development, including Joint Ventures and SPVs.' },
      { step: 'Regulatory Approvals', description: 'Navigating government agencies to secure necessary building permits and environmental approvals.' },
      { step: 'Contract Management', description: 'Drafting and negotiating FIDIC contracts, financing agreements, and off-plan sales contracts.' },
      { step: 'Dispute Management', description: 'Swiftly resolving contractor or buyer disputes to ensure project timelines are maintained.' }
    ],
    faqs: [
      { question: 'How do you handle off-plan sales?', answer: 'We draft robust off-plan contracts that protect the developer\'s cash flow while providing sufficient legal guarantees to satisfy sophisticated buyers.' },
      { question: 'What is a Joint Venture in real estate?', answer: 'A JV typically involves a landowner and a developer partnering to build a project, with profits shared according to a legally binding agreement we structure.' }
    ],
    relevantLawyerSlugs: ['emmanuel-u-duruigbo'],
    trustMarkers: [
      { label: 'Expert Due Diligence', description: 'Rigorous title and legal checks on every deal.', icon: 'ShieldCheck' },
      { label: 'Deal Structuring', description: 'Optimal legal frameworks for your project.', icon: 'Building2' },
      { label: 'Results Driven', description: 'Protecting your investment at every stage.', icon: 'TrendingUp' },
    ]
  },
  {
    id: 'divorce',
    slug: 'divorce-law',
    title: 'Divorce Law',
    shortDescription: 'Strategic and discreet legal counsel for the dissolution of marriage and related matters.',
    heroImage: '/images/about/duce1.png',
    clientProblem: 'Divorce is a highly traumatic experience that threatens your financial security and your relationship with your children. Navigating the Matrimonial Causes Act without an expert attorney often results in devastatingly unfair financial and custody outcomes.',
    howWeHelp: 'We provide fierce, strategic advocacy coupled with deep empathy. Our goal is to secure your financial future and protect your parental rights. We push for efficient, private settlements, but possess the litigation firepower to fight aggressively in court if your spouse is unreasonable.',
    specificServices: [
      'Divorce guidance',
      'Separation',
      'Child custody',
      'Financial matters',
      'Property matters',
      'Negotiated settlements',
      'Court representation',
      'Post-divorce matters'
    ],
    process: [
      { step: 'Confidential Assessment', description: 'Evaluating the grounds for divorce and identifying critical financial and custody priorities.' },
      { step: 'Petition Filing', description: 'Drafting and filing the Petition for the dissolution of marriage at the High Court.' },
      { step: 'Negotiation & Settlement', description: 'Aggressively negotiating alimony, asset division, and custody arrangements to avoid trial.' },
      { step: 'Trial Advocacy', description: 'Presenting a compelling case before the judge if a negotiated settlement proves impossible.' }
    ],
    faqs: [
      { question: 'What are the grounds for divorce in Nigeria?', answer: 'The sole ground is that the marriage has "broken down irresponsibly," which must be proven by specific facts such as adultery, unreasonable behavior, or separation for a specific period.' },
      { question: 'How are assets divided?', answer: 'Nigerian courts apply the principle of fairness, considering the contributions of both parties (both direct financial and indirect homemaking contributions).' }
    ],
    relevantLawyerSlugs: ['perpetua-duruigbo', 'adaobi-m-okoye'],
    trustMarkers: [
      { label: 'Confidential', description: 'Your privacy is always protected.', icon: 'ShieldCheck' },
      { label: 'Compassionate', description: 'Empathetic support throughout the process.', icon: 'Heart' },
      { label: 'Results Driven', description: 'Protecting your financial future and parental rights.', icon: 'TrendingUp' },
    ]
  },
  {
    id: 'criminal-law',
    slug: 'criminal-law',
    title: 'Criminal Law',
    shortDescription: 'Robust, strategic, and urgent representation for individuals facing serious criminal charges.',
    heroImage: '/images/services/litigation.png',
    clientProblem: 'Facing a criminal investigation or arrest is terrifying. Your liberty, reputation, and livelihood are on the line. Police procedure is often flawed, and without immediate, aggressive legal intervention, you risk unlawful detention or wrongful conviction.',
    howWeHelp: 'We provide immediate, 24/7 crisis response. Our defense attorneys aggressively intervene at the police station to protect your constitutional rights, secure bail, and meticulously dismantle the prosecution\'s case before it reaches trial.',
    specificServices: [
      'Criminal defence',
      'Bail applications',
      'Police-station representation',
      'Criminal investigations',
      'Trial representation',
      'Appeals',
      'White-collar crime',
      'Regulatory offences'
    ],
    process: [
      { step: 'Immediate Intervention', description: 'Deploying attorneys to police stations or anti-graft agencies (EFCC/ICPC) to prevent rights violations.' },
      { step: 'Bail Securitization', description: 'Filing urgent applications at the High Court to secure your release pending trial.' },
      { step: 'Evidence Deconstruction', description: 'Conducting independent investigations and utilizing expert witnesses to dismantle the prosecution\'s claims.' },
      { step: 'Trial Defense', description: 'Mounting an aggressive, highly strategic defense in court to secure an acquittal or case dismissal.' }
    ],
    faqs: [
      { question: 'Do I have the right to remain silent?', answer: 'Yes. You have a constitutional right to remain silent. Do not make any statements to law enforcement without our attorneys present.' },
      { question: 'Can you represent me in EFCC matters?', answer: 'Yes, we have extensive experience defending clients against white-collar crime charges brought by the EFCC and ICPC.' }
    ],
    relevantLawyerSlugs: ['emmanuel-c-egbo', 'adaobi-f-nweke'],
    isUrgent: true,
    trustMarkers: [
      { label: 'Immediate Response', description: '24/7 crisis intervention available now.', icon: 'Phone' },
      { label: 'Rights Protected', description: 'Your constitutional rights aggressively defended.', icon: 'ShieldCheck' },
      { label: 'Proven Defense', description: 'Track record of acquittals and dismissals.', icon: 'Scale' },
    ]
  },
  {
    id: 'business-law',
    slug: 'business-law',
    title: 'Business Law',
    shortDescription: 'Targeted, scalable legal solutions for entrepreneurs, SMEs, and startups.',
    heroImage: '/images/services/com-law-1.png',
    clientProblem: 'Startups and SMEs often operate fast and lean, neglecting foundational legal structures. Handshake agreements, poorly drafted contracts, and ignored regulatory compliance eventually lead to catastrophic co-founder disputes or crippling lawsuits that destroy the business.',
    howWeHelp: 'We act as your outsourced General Counsel. We provide startups and SMEs with affordable, highly effective legal frameworks—from employment contracts to vendor agreements—ensuring your business scales safely without legal friction.',
    specificServices: [
      'Business contracts',
      'Partnership agreements',
      'Employment agreements',
      'Supplier agreements',
      'Customer agreements',
      'Terms and conditions',
      'Debt recovery',
      'Business disputes'
    ],
    process: [
      { step: 'Legal Audit', description: 'Reviewing your current operations to identify compliance gaps and unprotected IP.' },
      { step: 'Contract Standardization', description: 'Drafting bespoke, reusable templates for employment, vendors, and clients.' },
      { step: 'Partnership Structuring', description: 'Creating airtight partnership or founder agreements with clear vesting and exit clauses.' },
      { step: 'Ongoing Advisory', description: 'Providing rapid, on-demand legal advice as your business encounters daily challenges.' }
    ],
    faqs: [
      { question: 'Why do I need custom Terms and Conditions?', answer: 'Copy-pasting T&Cs from another website leaves you legally exposed. Custom T&Cs limit your specific liability, protect your IP, and dictate how disputes must be resolved.' },
      { question: 'How can I protect my startup from a co-founder leaving?', answer: 'We draft Founder Agreements with "vesting schedules," meaning co-founders only earn their equity over time, protecting the company if they exit early.' }
    ],
    relevantLawyerSlugs: ['emmanuel-c-egbo'],
    trustMarkers: [
      { label: 'Startup Friendly', description: 'Affordable, scalable legal frameworks.', icon: 'Briefcase' },
      { label: 'Risk Reduction', description: 'Protect your business before disputes arise.', icon: 'ShieldCheck' },
      { label: 'Growth Focused', description: 'Legal solutions built for scaling businesses.', icon: 'TrendingUp' },
    ]
  },
  {
    id: 'taxation',
    slug: 'taxation',
    title: 'Taxation Law',
    shortDescription: 'Specialized legal expertise for tax compliance, corporate structuring, and FIRS dispute resolution.',
    heroImage: '/images/services/com-law.png',
    clientProblem: 'Nigeria\'s tax laws are notoriously complex and constantly evolving. Aggressive audits by the FIRS or LIRS can result in devastating back-taxes, crippling penalties, and the freezing of corporate bank accounts.',
    howWeHelp: 'We provide sophisticated tax structuring to legally minimize your liabilities. When disputes with tax authorities arise, we offer fierce administrative and courtroom advocacy to protect your assets, unfreeze accounts, and negotiate favorable settlements.',
    specificServices: [
      'Tax advisory',
      'Tax compliance',
      'Tax disputes',
      'Tax investigations',
      'Corporate taxation',
      'Personal tax matters',
      'Transactional tax matters',
      'Tax planning'
    ],
    process: [
      { step: 'Tax Structuring', description: 'Designing corporate transactions and investments to legally minimize tax exposure.' },
      { step: 'Audit Defense', description: 'Representing your company during FIRS/LIRS audits to prevent arbitrary assessments.' },
      { step: 'Administrative Objections', description: 'Filing formal legal objections to incorrect tax assessments within statutory timeframes.' },
      { step: 'Tax Appeal Tribunal', description: 'Litigating complex tax disputes at the Tax Appeal Tribunal and Federal High Court.' }
    ],
    faqs: [
      { question: 'What should I do if my corporate account is frozen by the FIRS?', answer: 'Contact us immediately. We can file an urgent application to unfreeze the account while concurrently engaging the FIRS to resolve the underlying assessment.' },
      { question: 'Can you help with foreign investment tax incentives?', answer: 'Yes, we assist foreign and local investors in securing Pioneer Status Incentives and navigating double taxation treaties.' }
    ],
    relevantLawyerSlugs: ['emmanuel-c-egbo'],
    trustMarkers: [
      { label: 'Tax Optimised', description: 'Legally minimise your tax exposure.', icon: 'Calculator' },
      { label: 'FIRS Expertise', description: 'Aggressive audit and dispute representation.', icon: 'ShieldCheck' },
      { label: 'Results Driven', description: 'Protecting your assets from tax authorities.', icon: 'TrendingUp' },
    ]
  }
];
