export type Answer = {
  id: string;
  label: string;
  description?: string;
  icon?: string;
  nextId?: string; // ID of the next question
  resultId?: string; // Or ID of the final result if this is a leaf node
};

export type Question = {
  id: string;
  title: string;
  subtitle?: string;
  answers: Answer[];
};

export type NavigatorResult = {
  id: string;
  serviceSlug: string; // Matches a service in services.ts
  title: string;
  description: string;
  suggestedSteps: string[];
  resources: { label: string; url: string }[];
};

export const navigatorResults: Record<string, NavigatorResult> = {
  'res_family_divorce': {
    id: 'res_family_divorce',
    serviceSlug: 'divorce-law',
    title: 'Divorce & Separation',
    description: 'We understand that divorce is a highly sensitive and challenging process. Our specialized divorce attorneys will protect your financial interests and prioritize the well-being of any children involved.',
    suggestedSteps: [
      'Gather financial documents, including bank statements and property deeds.',
      'Refrain from making large financial transfers or creating new joint debts.',
      'Schedule a confidential consultation to discuss your specific rights and obligations.'
    ],
    resources: [
      { label: 'Understanding Grounds for Divorce', url: '/insights' }
    ]
  },
  'res_family_general': {
    id: 'res_family_general',
    serviceSlug: 'family-law',
    title: 'Family Law Matters',
    description: 'Whether you are navigating child custody, guardianship, or domestic mediation, our family law practice offers discreet, compassionate, and highly effective legal representation.',
    suggestedSteps: [
      'Document any relevant communications or incidents.',
      'Keep the best interests of your children as the primary focus.',
      'Speak with our family law experts to explore amicable mediation or litigation strategies.'
    ],
    resources: [
      { label: 'Child Custody and Maintenance Guide', url: '/insights' }
    ]
  },
  'res_property_dispute': {
    id: 'res_property_dispute',
    serviceSlug: 'property-law',
    title: 'Property & Land Disputes',
    description: 'Property disputes in Nigeria require swift and decisive legal action to protect your investment. We have extensive experience in resolving land ownership conflicts, tenancy issues, and boundary disputes.',
    suggestedSteps: [
      'Locate your original title documents, survey plans, and purchase receipts.',
      'Do not engage in physical altercations over the disputed property.',
      'Contact our property litigators immediately to file a caveat or seek an injunction.'
    ],
    resources: [
      { label: 'Protecting Your Land from Grabbers', url: '/insights' }
    ]
  },
  'res_property_transaction': {
    id: 'res_property_transaction',
    serviceSlug: 'real-estate-law',
    title: 'Real Estate Transactions & Development',
    description: 'Protect your real estate investments with our rigorous due diligence and contract structuring services, tailored for high-value acquisitions and property development.',
    suggestedSteps: [
      'Do not make any payments before comprehensive legal due diligence is conducted.',
      'Request copies of the seller\'s title documents for our review.',
      'Schedule a consultation to structure the transaction safely.'
    ],
    resources: [
      { label: 'The Importance of Governor\'s Consent', url: '/insights' }
    ]
  },
  'res_corporate_general': {
    id: 'res_corporate_general',
    serviceSlug: 'corporate-law',
    title: 'Corporate Advisory & Governance',
    description: 'We provide strategic corporate legal services, ensuring your organization is optimally structured, fully compliant, and protected against regulatory risks.',
    suggestedSteps: [
      'Compile your current incorporation documents (CAC) and shareholder agreements.',
      'Identify any immediate regulatory compliance deadlines.',
      'Consult with our corporate partners for a comprehensive legal audit.'
    ],
    resources: [
      { label: 'Corporate Governance Best Practices', url: '/insights' }
    ]
  },
  'res_business_startup': {
    id: 'res_business_startup',
    serviceSlug: 'business-law',
    title: 'Startup & SME Business Law',
    description: 'We act as strategic legal partners for entrepreneurs, providing the foundational legal support necessary for your business to scale safely and attract investment.',
    suggestedSteps: [
      'Ensure all co-founders have signed formal vesting and partnership agreements.',
      'Identify any intellectual property (trademarks, software) that requires immediate protection.',
      'Engage our SME legal team to draft robust employment and vendor contracts.'
    ],
    resources: [
      { label: 'Essential Contracts Every Startup Needs', url: '/insights' }
    ]
  },
  'res_criminal_urgent': {
    id: 'res_criminal_urgent',
    serviceSlug: 'criminal-law',
    title: 'Criminal Defense & Investigations',
    description: 'If you are facing a criminal investigation or arrest, your liberty is on the line. You need immediate, aggressive legal intervention to protect your constitutional rights.',
    suggestedSteps: [
      'Exercise your right to remain silent. Do not make statements to law enforcement without our attorneys present.',
      'Do not consent to searches without a valid warrant.',
      'Call our 24/7 crisis line immediately.'
    ],
    resources: [
      { label: 'Your Fundamental Rights During Arrest', url: '/insights' }
    ]
  },
  'res_taxation': {
    id: 'res_taxation',
    serviceSlug: 'taxation',
    title: 'Tax Compliance & Disputes',
    description: 'Navigating Nigeria\'s complex tax landscape requires specialized legal expertise. We can help you manage audits, resolve disputes with tax authorities, and optimize your tax structuring.',
    suggestedSteps: [
      'Gather all recent correspondence from the FIRS or LIRS.',
      'Do not ignore tax assessment notices, as they become final if not formally objected to in time.',
      'Contact our tax attorneys to file an immediate objection or unfreeze accounts.'
    ],
    resources: [
      { label: 'Handling FIRS Audits', url: '/insights' }
    ]
  },
  'res_wills_estates': {
    id: 'res_wills_estates',
    serviceSlug: 'wills-estate-planning',
    title: 'Wills, Trusts & Estate Planning',
    description: 'Secure your legacy and prevent future family disputes through our comprehensive estate planning services, including wills, living trusts, and probate administration.',
    suggestedSteps: [
      'Make an inventory of your significant assets and liabilities.',
      'Consider who you would trust to act as executors or trustees.',
      'Schedule a confidential estate planning session with our specialists.'
    ],
    resources: [
      { label: 'Why You Need a Will in Nigeria', url: '/insights' }
    ]
  },
  'res_litigation': {
    id: 'res_litigation',
    serviceSlug: 'litigation-dispute-resolution',
    title: 'Litigation & Dispute Resolution',
    description: 'When commercial or civil disputes arise, our formidable litigators provide practical, result-oriented representation in Nigerian courts and arbitration tribunals.',
    suggestedSteps: [
      'Preserve all evidence, emails, and contracts related to the dispute.',
      'Do not communicate directly with the opposing party without legal counsel.',
      'Consult our litigation team to evaluate the merits of your case and outline a strategy.'
    ],
    resources: [
      { label: 'Litigation vs. Arbitration', url: '/insights' }
    ]
  },
  'res_general': {
    id: 'res_general',
    serviceSlug: 'corporate-law', // Fallback
    title: 'General Legal Consultation',
    description: 'Your legal needs are unique. Let our expert attorneys evaluate your situation and provide targeted advice to protect your interests.',
    suggestedSteps: [
      'Write down a timeline of the events related to your issue.',
      'Gather any relevant documentation or contracts.',
      'Schedule an initial consultation to discuss your matter in detail.'
    ],
    resources: []
  }
};

export const navigatorQuestions: Record<string, Question> = {
  'q_start': {
    id: 'q_start',
    title: 'What type of legal issue are you dealing with?',
    subtitle: 'Select the category that best describes your situation.',
    answers: [
      { id: 'a_family', label: 'Family & Domestic', description: 'Divorce, child custody, adoption, spousal support and more.', icon: 'Users', nextId: 'q_family' },
      { id: 'a_divorce', label: 'Divorce & Separation', description: 'Separation agreements, divorce proceedings, asset division.', icon: 'HeartCrack', resultId: 'res_family_divorce' },
      { id: 'a_property', label: 'Property & Real Estate', description: 'Property transactions, leasing, disputes, title issues.', icon: 'Home', nextId: 'q_property' },
      { id: 'a_business', label: 'Business & Startups', description: 'Business formation, compliance, contracts, and startup support.', icon: 'Briefcase', resultId: 'res_business_startup' },
      { id: 'a_corporate', label: 'Corporate & Commercial', description: 'Corporate governance, mergers, contracts, and commercial matters.', icon: 'Building2', nextId: 'q_corporate' },
      { id: 'a_criminal', label: 'Criminal Defense & Investigations', description: 'Criminal charges, investigations, and legal representation.', icon: 'Shield', resultId: 'res_criminal_urgent' },
      { id: 'a_tax', label: 'Taxation Matters', description: 'Tax advisory, disputes, planning, and compliance.', icon: 'Calculator', resultId: 'res_taxation' },
      { id: 'a_wills', label: 'Wills & Estate Planning', description: 'Wills, trusts, probate, and estate administration.', icon: 'FileText', resultId: 'res_wills_estates' },
      { id: 'a_litigation', label: 'Litigation & Dispute Resolution', description: 'Civil litigation, arbitration, mediation, and dispute settlement.', icon: 'Scale', nextId: 'q_litigation' },
      { id: 'a_other', label: 'Other / I\'m not sure', description: 'Not sure where to start? We\'ll help you find the right solution.', icon: 'HelpCircle', resultId: 'res_general' }
    ]
  },
  'q_family': {
    id: 'q_family',
    title: 'What specific family matter do you need assistance with?',
    answers: [
      { id: 'a_fam_custody', label: 'Child Custody or Maintenance', resultId: 'res_family_general' },
      { id: 'a_fam_divorce', label: 'Divorce Proceedings', resultId: 'res_family_divorce' },
      { id: 'a_fam_domestic', label: 'Domestic Violence / Protection Orders', resultId: 'res_family_general' },
      { id: 'a_fam_other', label: 'Other Family Matters', resultId: 'res_family_general' }
    ]
  },
  'q_property': {
    id: 'q_property',
    title: 'Is this regarding a transaction or a dispute?',
    answers: [
      { id: 'a_prop_buy', label: 'Buying, Selling, or Leasing Property', resultId: 'res_property_transaction' },
      { id: 'a_prop_dev', label: 'Real Estate Development', resultId: 'res_property_transaction' },
      { id: 'a_prop_dispute', label: 'Land Dispute or Trespassing', resultId: 'res_property_dispute' },
      { id: 'a_prop_tenant', label: 'Landlord & Tenant Issues', resultId: 'res_property_dispute' }
    ]
  },
  'q_corporate': {
    id: 'q_corporate',
    title: 'What is the nature of your corporate requirement?',
    answers: [
      { id: 'a_corp_incorporation', label: 'Company Formation & Structuring', resultId: 'res_business_startup' },
      { id: 'a_corp_gov', label: 'Regulatory Compliance & Governance', resultId: 'res_corporate_general' },
      { id: 'a_corp_merger', label: 'Mergers & Acquisitions', resultId: 'res_corporate_general' },
      { id: 'a_corp_contract', label: 'Commercial Contracts', resultId: 'res_corporate_general' }
    ]
  },
  'q_litigation': {
    id: 'q_litigation',
    title: 'What type of dispute are you involved in?',
    answers: [
      { id: 'a_lit_commercial', label: 'Commercial or Contract Breach', resultId: 'res_litigation' },
      { id: 'a_lit_debt', label: 'Debt Recovery', resultId: 'res_litigation' },
      { id: 'a_lit_employment', label: 'Employment Dispute', resultId: 'res_litigation' },
      { id: 'a_lit_other', label: 'Civil Litigation', resultId: 'res_litigation' }
    ]
  }
};
