export interface ArticleAuthor {
  name: string;
  role: string;
  image: string;
  slug: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: ArticleAuthor;
  category: string;
  categorySlug: string;
  status: 'draft' | 'published' | 'archived';
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  featuredImage: string;
  relatedServiceIds: string[];
  relatedArticleIds: string[];
  seo: {
    title: string;
    description: string;
    ogImage: string;
  };
  featured: boolean;
}

export const CATEGORIES = [
  { label: 'All Articles', slug: 'all' },
  { label: 'Family Law', slug: 'family-law' },
  { label: 'Property Law', slug: 'property-law' },
  { label: 'Corporate Law', slug: 'corporate-law' },
  { label: 'Business Law', slug: 'business-law' },
  { label: 'Criminal Law', slug: 'criminal-law' },
  { label: 'Litigation', slug: 'litigation' },
  { label: 'Estate Planning', slug: 'estate-planning' },
  { label: 'Taxation', slug: 'taxation' },
];

const emmaAuthor: ArticleAuthor = {
  name: 'Emmanuel U. Duruigbo',
  role: 'Senior Associate',
  image: '/images/team/Barr Emma Duruigbo.png',
  slug: 'emmanuel-u-duruigbo',
};

const perpetuaAuthor: ArticleAuthor = {
  name: 'Perpetua Duruigbo',
  role: 'Associate',
  image: '/images/team/Barr Perpetua Duruigbo.png',
  slug: 'perpetua-duruigbo',
};

const adaobiAuthor: ArticleAuthor = {
  name: 'Adaobi M. Okoye',
  role: 'Associate',
  image: '/images/team/Barr Adaobi Miriam Okoli (Nee Okoye).png',
  slug: 'adaobi-m-okoye',
};

export const articles: Article[] = [
  {
    id: '1',
    title: 'Navigating the New Nigerian Corporate Governance Code',
    slug: 'navigating-nigerian-corporate-governance-code',
    excerpt: 'A comprehensive breakdown of the latest regulatory requirements for publicly traded companies and how compliance protects board directors from personal liability.',
    content: `<p>The Nigerian Code of Corporate Governance 2018 (NCCG 2018), issued by the Financial Reporting Council of Nigeria (FRCN), represents the most comprehensive reform of corporate governance standards in Nigeria's history. For directors, executives, and company secretaries, understanding this code is not optional — it is a fundamental requirement of professional and fiduciary duty.</p>

<h2>What Is Corporate Governance?</h2>
<p>Corporate governance refers to the system of rules, practices, and processes by which a company is directed and controlled. It essentially involves balancing the interests of a company's many stakeholders — shareholders, management, customers, suppliers, financiers, government, and the community. Good governance creates a transparent, accountable structure that builds investor confidence and drives sustainable growth.</p>

<blockquote>Good governance is not merely a regulatory obligation; it is the foundation upon which sustainable business success is built.</blockquote>

<h2>Key Requirements of the NCCG 2018</h2>
<p>The code applies to all public companies and regulated private companies in Nigeria. Its primary requirements include:</p>
<ul>
  <li><strong>Board Composition:</strong> A minimum of one-third of the board must be independent non-executive directors. This ensures that board decisions are not dominated by executive management or majority shareholders.</li>
  <li><strong>Separation of Roles:</strong> The roles of Chairman and Chief Executive Officer must be held by different individuals. This prevents undue concentration of power and ensures robust board oversight of management.</li>
  <li><strong>Board Committees:</strong> Companies must establish a minimum of three board committees — an Audit Committee, a Remuneration Committee, and a Risk Management Committee — each with clearly defined Terms of Reference.</li>
  <li><strong>Annual Evaluation:</strong> The board and its committees must undergo a formal annual performance evaluation to ensure they are functioning effectively.</li>
</ul>

<h2>Director Liability and Protection</h2>
<p>One of the most critical aspects of the NCCG 2018 for directors is its implications for personal liability. Under Nigerian company law and the code, directors who participate in decisions that harm the company or its stakeholders can be held personally liable. However, directors who can demonstrate that they acted in good faith, exercised reasonable diligence, and complied with governance best practices are significantly better protected from personal claims.</p>
<p>Best practice for director protection includes maintaining comprehensive board minutes that accurately record deliberations and decisions, declaring conflicts of interest promptly and recusing yourself from relevant decisions, and seeking independent legal and financial advice before major board decisions.</p>

<h2>Consequences of Non-Compliance</h2>
<p>Companies that fail to comply with the NCCG 2018 face a range of consequences, from regulatory censure and financial penalties by the FRCN to reputational damage that can affect share price and investor confidence. For listed companies, the Securities and Exchange Commission (SEC) and the Nigerian Exchange Group (NGX) have their own parallel governance requirements that must be satisfied.</p>

<h2>Practical Steps for Compliance</h2>
<p>At Ducex Solicitors, we guide our corporate clients through a structured compliance review that begins with a comprehensive gap analysis of existing governance structures against the NCCG 2018 requirements. We then assist with drafting revised board charters, committee Terms of Reference, conflict of interest policies, and all other foundational governance documents required to achieve and maintain full compliance.</p>

<p style="background:#FFF8E7; border-left: 4px solid #D4AF37; padding: 1rem 1.5rem; margin: 2rem 0; border-radius: 4px;"><strong>⚠️ Disclaimer:</strong> This article provides general legal information only and does not constitute legal advice. Corporate governance requirements are complex and fact-specific. You should consult a qualified legal professional for advice specific to your company's circumstances.</p>`,
    author: emmaAuthor,
    category: 'Corporate Law',
    categorySlug: 'corporate-law',
    status: 'published',
    publishedAt: '2026-08-12',
    updatedAt: '2026-08-12',
    readingTime: '5 min read',
    featuredImage: '/images/hero/hero1.png',
    relatedServiceIds: ['corporate-law', 'business-law'],
    relatedArticleIds: ['2', '3'],
    seo: {
      title: 'Navigating the Nigerian Corporate Governance Code | Ducex Solicitors',
      description: 'A comprehensive breakdown of the NCCG 2018 requirements for publicly traded companies and how compliance protects board directors from personal liability.',
      ogImage: '/images/hero/hero1.png',
    },
    featured: true,
  },
  {
    id: '2',
    title: 'Understanding Force Majeure in Commercial Contracts',
    slug: 'understanding-force-majeure-commercial-contracts',
    excerpt: 'How recent global supply chain disruptions have reshaped the drafting of force majeure clauses in Nigerian and international commercial agreements.',
    content: `<p>The phrase "force majeure" — French for "superior force" — has never been more relevant to Nigerian businesses than in the aftermath of global supply chain shocks. Yet most standard commercial contracts in Nigeria continue to treat force majeure as a boilerplate afterthought rather than a critically negotiated clause. This is a dangerous oversight.</p>

<h2>What Is a Force Majeure Clause?</h2>
<p>A force majeure clause excuses a party from performing its contractual obligations when an extraordinary event beyond its reasonable control prevents or delays performance. The specific events covered depend entirely on how the clause is drafted. Common examples include natural disasters, acts of war or terrorism, government actions, and — as recent events have demonstrated — pandemics and major supply chain disruptions.</p>
<p>Crucially, under Nigerian contract law, there is no implied force majeure doctrine. If your contract does not contain an express force majeure clause, a party seeking relief from performance will need to rely on the doctrine of frustration, which sets a far higher and more difficult legal bar to meet.</p>

<h2>What Makes a Force Majeure Clause Effective?</h2>
<p>A well-drafted force majeure clause must address three core questions:</p>
<ol>
  <li><strong>What events are covered?</strong> The clause must specifically define the triggering events. Broad definitions ("events beyond the parties' control") may be too vague to be enforceable, while overly narrow lists may fail to cover your real risks. Modern clauses should now explicitly include pandemics, government-mandated shutdowns, and import/export restrictions.</li>
  <li><strong>What are the consequences?</strong> Does the clause merely suspend the obligation, or does it allow termination? Is there a notice requirement? How long can the event persist before termination rights arise?</li>
  <li><strong>What obligations remain?</strong> Most courts require the affected party to take reasonable steps to mitigate the impact of the force majeure event and to resume performance as soon as the event ceases.</li>
</ol>

<h2>Force Majeure vs. Economic Hardship</h2>
<p>A critical and frequently misunderstood distinction is that force majeure covers inability to perform, not merely commercial inconvenience. If performance simply becomes more expensive due to inflation or currency depreciation, this is generally NOT a force majeure event — it is economic hardship, which is typically not protected unless the contract contains a separate hardship or material adverse change clause.</p>

<h2>Lessons for Nigerian Businesses</h2>
<p>The lesson for Nigerian businesses is clear: your standard commercial contracts must be reviewed and updated by qualified legal counsel. Specific recommendations include ensuring force majeure clauses are specifically tailored to the unique risks of your industry, including explicit notice requirements and timelines for invoking force majeure protection, and negotiating hardship clauses for long-term supply agreements that may be affected by significant economic shifts.</p>

<p style="background:#FFF8E7; border-left: 4px solid #D4AF37; padding: 1rem 1.5rem; margin: 2rem 0; border-radius: 4px;"><strong>⚠️ Disclaimer:</strong> This article provides general legal information only and does not constitute personalized legal advice. Contract law is highly fact-specific. Please consult a qualified legal professional before making any contractual decisions.</p>`,
    author: emmaAuthor,
    category: 'Corporate Law',
    categorySlug: 'corporate-law',
    status: 'published',
    publishedAt: '2026-07-28',
    updatedAt: '2026-07-28',
    readingTime: '7 min read',
    featuredImage: '/images/hero/hero1.png',
    relatedServiceIds: ['corporate-law', 'litigation'],
    relatedArticleIds: ['1', '4'],
    seo: {
      title: 'Understanding Force Majeure in Commercial Contracts | Ducex Solicitors',
      description: 'How recent global supply chain disruptions have reshaped force majeure clauses in Nigerian and international commercial agreements.',
      ogImage: '/images/hero/hero1.png',
    },
    featured: true,
  },
  {
    id: '3',
    title: 'Your Rights During a Police Search in Nigeria',
    slug: 'your-rights-during-police-search-nigeria',
    excerpt: 'What every Nigerian citizen must know about their constitutional rights when stopped, searched, or arrested by law enforcement officers.',
    content: `<p>Understanding your constitutional rights during a police encounter is not merely academic knowledge — it can be the difference between a brief inconvenience and an unlawful detention that disrupts your life and livelihood. The 1999 Constitution of the Federal Republic of Nigeria (as amended) and the Administration of Criminal Justice Act 2015 (ACJA) provide robust protections that every citizen and resident must know.</p>

<h2>The Right to Know Why You Are Being Stopped</h2>
<p>Section 35(3) of the 1999 Constitution provides that any person who is arrested or detained must be informed promptly, in a language he or she understands, of the reasons for the arrest or detention. This is not a courtesy — it is a constitutional right. If an officer cannot clearly state why you are being stopped, you have the right to politely but firmly ask.</p>

<h2>The Right Against Unlawful Search</h2>
<p>Section 37 of the Constitution protects your right to privacy, including your person, home, and correspondence. For a police search to be lawful, one of the following must be true: the officer has a valid search warrant issued by a magistrate or judge, you have given your explicit consent, or the officer has reasonable grounds to believe you are in possession of stolen goods or other evidence of a crime. "Reasonable grounds" cannot be based solely on your race, appearance, or being in a particular neighbourhood.</p>

<h2>The Right to Remain Silent</h2>
<p>Section 35(2) of the Constitution guarantees your right to remain silent. You are not obligated to answer any questions beyond providing your name and address. Do not feel pressured to make any statement without your lawyer present. Anything you say can and will be used against you in subsequent proceedings. The exercise of this right cannot be used as evidence of guilt.</p>

<h2>Your Rights Upon Arrest</h2>
<p>If you are arrested, the ACJA 2015 provides the following crucial protections: You must be charged and arraigned in court within 24 hours (or 48 hours if there is no court within a 40km radius). You have the right to immediately contact your lawyer and a family member. You must be taken before a magistrate within the prescribed time or released on bail. You must be informed of the specific offence you are being charged with.</p>

<h2>If Your Rights Are Violated: What to Do</h2>
<p>If your constitutional rights are violated during a police encounter, you have several remedies available. You can file a complaint with the Police Service Commission, apply to the High Court for enforcement of your fundamental rights under the Fundamental Rights (Enforcement Procedure) Rules 2009, or report to the National Human Rights Commission. Document everything — officer names, badge numbers, vehicle registration numbers, and witnesses — as soon as it is safe to do so.</p>

<p style="background:#FFF8E7; border-left: 4px solid #D4AF37; padding: 1rem 1.5rem; margin: 2rem 0; border-radius: 4px;"><strong>⚠️ Disclaimer:</strong> This article provides general legal information only. It does not constitute legal advice for any specific situation. If you or someone you know has been arrested or detained, please contact a qualified criminal defence lawyer immediately.</p>`,
    author: adaobiAuthor,
    category: 'Criminal Law',
    categorySlug: 'criminal-law',
    status: 'published',
    publishedAt: '2026-07-15',
    updatedAt: '2026-07-15',
    readingTime: '6 min read',
    featuredImage: '/images/services/litigation-hero.png',
    relatedServiceIds: ['criminal-law', 'litigation'],
    relatedArticleIds: ['4', '5'],
    seo: {
      title: 'Your Rights During a Police Search in Nigeria | Ducex Solicitors',
      description: 'What every Nigerian must know about their constitutional rights when stopped, searched, or arrested by law enforcement under the 1999 Constitution and ACJA 2015.',
      ogImage: '/images/services/litigation-hero.png',
    },
    featured: false,
  },
  {
    id: '4',
    title: 'How to Write a Valid Will in Nigeria: A Step-by-Step Guide',
    slug: 'how-to-write-valid-will-nigeria',
    excerpt: 'The strict legal requirements for a valid Will under Nigerian law, why DIY wills often fail, and how to ensure your estate is properly protected for your beneficiaries.',
    content: `<p>The majority of Nigerians do not have a Will. For many, death feels too distant or the process too complex to confront. But dying "intestate" — without a valid Will — has serious and often devastating consequences for the families left behind. Understanding the legal requirements for a valid Will is the first and most important step toward protecting your legacy.</p>

<h2>The Legal Framework</h2>
<p>In Nigeria, the law governing Wills is primarily derived from English common law and statute, specifically the Wills Act 1837 (still applicable in many states), and more recently state-specific legislation such as the Wills Law of Lagos State 1990. Different states may have slightly different requirements, which is why it is essential to consult a lawyer familiar with the specific law of your state of domicile.</p>

<h2>Requirements for a Valid Will</h2>
<p>For a Will to be legally valid in most Nigerian states, the following strict requirements must be met:</p>
<ul>
  <li><strong>Testamentary Capacity:</strong> The testator (person making the Will) must be of legal age (usually 18 or older) and must be of "sound mind." This means they must understand the nature of making a Will, the extent of their property, and who their natural beneficiaries are.</li>
  <li><strong>Written:</strong> The Will must be in writing. An oral (nuncupative) Will is only recognized in extremely limited circumstances under some Nigerian laws.</li>
  <li><strong>Signed:</strong> The Will must be signed by the testator at the foot or end of the document. The signature must acknowledge the document as the testator's Will.</li>
  <li><strong>Witnessed:</strong> The signature must be made or acknowledged in the presence of at least two witnesses who are both present at the same time. Critically, the witnesses must sign in the presence of the testator. Any beneficiary named in the Will, or the spouse of a beneficiary, must NOT be a witness — doing so renders the gift to that beneficiary void.</li>
  <li><strong>Intention:</strong> The document must be intended to operate as a Will — it must demonstrate testamentary intent.</li>
</ul>

<h2>Why DIY Wills Fail</h2>
<p>The most common reasons DIY Wills are declared invalid in Nigerian courts include: defective witnessing (witnesses not both present at the time of signing), ambiguous or contradictory language that creates disputes among beneficiaries, failure to account for property acquired after the Will is made, and failure to properly revoke a previous Will.</p>

<h2>Customary Law Considerations</h2>
<p>An important complexity in Nigerian estate planning is the potential application of customary law. In some circumstances, particularly for individuals from communities where customary law governs inheritance, certain property may not be freely disposed of by Will. The intersection of statutory law and customary law in succession matters is one of the most complex areas of Nigerian legal practice. Expert legal advice is absolutely essential.</p>

<h2>Probate: After the Will</h2>
<p>Having a valid Will does not automatically transfer assets to your beneficiaries. Your executors must apply to the Probate Registry of the relevant state High Court for a Grant of Probate — a court order that authorises them to administer the estate. This process must be carefully managed to ensure the timely and correct distribution of your assets.</p>

<p style="background:#FFF8E7; border-left: 4px solid #D4AF37; padding: 1rem 1.5rem; margin: 2rem 0; border-radius: 4px;"><strong>⚠️ Disclaimer:</strong> This article provides general legal information only and does not constitute legal advice. Will preparation requirements are jurisdiction-specific and highly fact-dependent. Please consult a qualified estate planning lawyer to ensure your Will is properly drafted and executed.</p>`,
    author: perpetuaAuthor,
    category: 'Estate Planning',
    categorySlug: 'estate-planning',
    status: 'published',
    publishedAt: '2026-06-30',
    updatedAt: '2026-07-01',
    readingTime: '7 min read',
    featuredImage: '/images/about/ducex-about.png',
    relatedServiceIds: ['wills-estates', 'family-law'],
    relatedArticleIds: ['3', '5'],
    seo: {
      title: 'How to Write a Valid Will in Nigeria | Ducex Solicitors',
      description: 'The strict legal requirements for a valid Will under Nigerian law, why DIY wills often fail, and how to ensure your estate is protected for your beneficiaries.',
      ogImage: '/images/about/ducex-about.png',
    },
    featured: false,
  },
  {
    id: '5',
    title: 'Property Due Diligence in Nigeria: 10 Checks Before You Buy',
    slug: 'property-due-diligence-nigeria-10-checks',
    excerpt: 'Before signing any property agreement in Nigeria, these are the 10 essential legal and physical checks every buyer must undertake to avoid fraud, defective titles, and costly disputes.',
    content: `<p>Property fraud and defective title disputes are among the most common and most costly legal problems facing Nigerians today. The Nigerian property market, particularly in commercial hubs like Lagos, Abuja, and Port Harcourt, is unfortunately susceptible to fraudulent vendors, double sales, and properties subject to government acquisition. Comprehensive due diligence is not optional — it is your primary financial protection.</p>

<h2>The 10 Essential Due Diligence Checks</h2>

<h3>1. Verify Title at the Land Registry</h3>
<p>The first and most critical check is a search at the relevant state Land Registry. This search will reveal the current registered owner, whether the title is clean (no outstanding mortgages, caveats, or encumbrances), and whether the property is subject to any legal proceedings or Government acquisition notices. Never skip this step.</p>

<h3>2. Verify Governor's Consent (Where Applicable)</h3>
<p>Under the Land Use Act 1978, all land in Nigeria is vested in the state governor. Any assignment or transfer of an interest in land requires the Governor's Consent to be valid. Verify that all prior transactions on the property were properly consented to. A chain of title without Governor's Consent at each stage is seriously defective.</p>

<h3>3. Check for Government Acquisition</h3>
<p>Conduct a search at the Ministry of Lands and Housing to confirm the property is not within a government-acquired area. Purchasing land that has been acquired by the government — even unknowingly — means you have no valid title.</p>

<h3>4. Survey Plan Verification</h3>
<p>Engage a licensed surveyor to verify the survey plan covering the property. Confirm that the coordinates match the physical land, that there are no boundary disputes with adjacent properties, and that the survey plan is properly registered.</p>

<h3>5. Physical Inspection</h3>
<p>Physically inspect the property and ensure the actual land matches the description in the title documents. Check for squatters, other claimants in occupation, or third parties with possessory rights. Engage a structural engineer for building inspections on developed properties.</p>

<h3>6. Probate/Family Consent (For Family Land)</h3>
<p>If you are purchasing from a family or estate, ensure all necessary consents have been obtained from the relevant family members, trustees, or personal representatives. A purchase from one family member without the consent of others can be invalidated.</p>

<h3>7. FIRS and Tax Clearance</h3>
<p>Ensure the vendor has obtained the relevant tax clearance certificates and that any applicable Capital Gains Tax has been accounted for in the transaction structure.</p>

<h3>8. Planning and Development Permits</h3>
<p>For developed property, verify that all construction has been carried out with the appropriate planning approvals from the relevant state or local government authority. Unpermitted structures can be subject to demolition orders.</p>

<h3>9. Review All Existing Agreements</h3>
<p>Carefully review any existing tenancy agreements, lease agreements, or third-party rights that may affect the property. Ensure you understand any tenant-in-occupation situations and the relevant legal processes for obtaining vacant possession.</p>

<h3>10. Engage Qualified Legal Counsel</h3>
<p>Finally, and most importantly — engage qualified property lawyers to conduct and manage the entire due diligence process, draft or review all transactional documents, oversee execution, and handle the perfection of title. The cost of professional legal advice is always a fraction of the cost of a failed transaction.</p>

<p style="background:#FFF8E7; border-left: 4px solid #D4AF37; padding: 1rem 1.5rem; margin: 2rem 0; border-radius: 4px;"><strong>⚠️ Disclaimer:</strong> This article provides general legal information only and does not constitute legal advice specific to any transaction. Property law in Nigeria is jurisdiction-specific and complex. Please engage a qualified property lawyer before entering into any property transaction.</p>`,
    author: emmaAuthor,
    category: 'Property Law',
    categorySlug: 'property-law',
    status: 'published',
    publishedAt: '2026-06-10',
    updatedAt: '2026-06-10',
    readingTime: '8 min read',
    featuredImage: '/images/services/real-estate-hero.png',
    relatedServiceIds: ['property-law', 'real-estate'],
    relatedArticleIds: ['1', '2'],
    seo: {
      title: 'Property Due Diligence in Nigeria: 10 Checks Before You Buy | Ducex Solicitors',
      description: '10 essential legal and physical checks every property buyer in Nigeria must undertake to avoid fraud, defective titles, and costly disputes.',
      ogImage: '/images/services/real-estate-hero.png',
    },
    featured: false,
  },
  {
    id: '6',
    title: 'Divorce in Nigeria: Grounds, Process and What to Expect',
    slug: 'divorce-nigeria-grounds-process',
    excerpt: 'A clear, empathetic guide to the legal grounds for divorce under the Matrimonial Causes Act, the court process, and how financial and custody matters are resolved.',
    content: `<p>Divorce is among the most emotionally and legally complex processes a person can face. Understanding the legal framework in Nigeria can help you make informed decisions and prepare yourself for what lies ahead. This guide provides a general overview of the divorce process under Nigerian statutory law.</p>

<h2>The Legal Framework: Matrimonial Causes Act 1970</h2>
<p>The primary statute governing divorce in Nigeria for statutory marriages is the Matrimonial Causes Act 1970 (MCA). It is important to note that the MCA applies to marriages contracted under the Marriage Act — i.e., court or church/registry marriages. Customary law marriages are governed differently, and the applicable rules depend on the specific custom of the parties' community.</p>

<h2>The Sole Ground for Divorce</h2>
<p>Under the MCA, there is only one ground for divorce: that the marriage has broken down irretrievably. However, the court will only be satisfied that a marriage has irretrievably broken down if the petitioner (the person filing for divorce) proves one or more specific "facts," which include:</p>
<ul>
  <li>Adultery by the respondent, making it intolerable for the petitioner to live with the respondent.</li>
  <li>Unreasonable behaviour by the respondent.</li>
  <li>Desertion by the respondent for a continuous period of at least one year immediately before the petition.</li>
  <li>Separation of the parties for at least two years (if the respondent consents to the divorce) or three years (even if the respondent does not consent).</li>
</ul>

<h2>The Divorce Process</h2>
<p>The divorce process in Nigeria typically involves the following stages: filing a Petition for Dissolution of Marriage at the relevant High Court, service of the petition on the respondent, the respondent filing an answer (within 30 days), if the matter is contested, a full hearing with evidence, and finally the court pronouncing a Decree Nisi followed by a Decree Absolute (which finalises the divorce).</p>

<h2>Financial and Property Matters</h2>
<p>The court has wide powers to make ancillary orders relating to property and finances, including orders for maintenance (alimony), property settlement orders, and orders relating to the matrimonial home. Nigerian courts apply a principle of fairness, considering the financial contributions and non-financial contributions (such as homemaking and childcare) of both parties.</p>

<h2>Child Custody</h2>
<p>The paramount consideration in all custody disputes in Nigerian courts is the best interests of the child. There is no presumption in favour of either the mother or the father. Courts consider factors including the age of the child (younger children are often placed with mothers), the stability and financial situation of each parent, the existing bond between child and parent, and the child's own expressed preference (for older children).</p>

<p style="background:#FFF8E7; border-left: 4px solid #D4AF37; padding: 1rem 1.5rem; margin: 2rem 0; border-radius: 4px;"><strong>⚠️ Disclaimer:</strong> This article provides general legal information only and is not legal advice for your specific situation. Family law matters are deeply fact-specific. Please consult a qualified family lawyer for confidential advice tailored to your circumstances.</p>`,
    author: perpetuaAuthor,
    category: 'Family Law',
    categorySlug: 'family-law',
    status: 'published',
    publishedAt: '2026-05-20',
    updatedAt: '2026-05-20',
    readingTime: '7 min read',
    featuredImage: '/images/hero/hero1.png',
    relatedServiceIds: ['family-law', 'divorce'],
    relatedArticleIds: ['4', '3'],
    seo: {
      title: 'Divorce in Nigeria: Grounds, Process and What to Expect | Ducex Solicitors',
      description: 'A clear guide to the legal grounds for divorce under the Matrimonial Causes Act, the court process, and how financial and custody matters are resolved in Nigeria.',
      ogImage: '/images/hero/hero1.png',
    },
    featured: false,
  },
];

// Utility functions for the data service
export function getPublishedArticles(): Article[] {
  return articles.filter(a => a.status === 'published');
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug && a.status === 'published');
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  if (categorySlug === 'all') return getPublishedArticles();
  return articles.filter(a => a.categorySlug === categorySlug && a.status === 'published');
}

export function getRelatedArticles(ids: string[]): Article[] {
  return articles.filter(a => ids.includes(a.id) && a.status === 'published');
}

export function getAllArticles(): Article[] {
  return articles;
}
