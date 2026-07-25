export interface TeamMember {
  id: string;
  slug: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  education: string[];
  practices: string[];
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export const team: TeamMember[] = [
  {
    id: 'emmanuel-u-duruigbo',
    slug: 'emmanuel-u-duruigbo',
    name: 'Emmanuel U. Duruigbo',
    role: 'Senior Associate',
    bio: 'Emmanuel Uzoma Duruigbo is a distinguished legal luminary with a remarkable career spanning human rights advocacy, litigation, dispute resolution, and extensive expertise in community engagement. His unwavering commitment to justice, coupled with his exceptional legal acumen, has earned him recognition as a true champion of human rights in Nigeria.\n\nHe serves as a key legal advisor to the promoter of Nigeria\'s first private deep seaport, located in a free zone within the country. His responsibilities encompass conducting rigorous legal due diligence for the project, offering expert advice on public-private partnerships (PPP) options, and crafting and reviewing pivotal documents such as the Concession Agreement and Turnkey Construction Contract. In the realm of regulatory advisory, Barrister Duruigbo has been instrumental in providing legal support to a technical advisory facility funded by the UK Department for International Development (DFID).',
    image: '/images/team/Barr Emma Duruigbo.png',
    education: [
      'Master\'s in Laws (LL.M), Obafemi Awolowo University, Ile Ife, Nigeria (2019)',
      'Post-graduate diploma in International Humanitarian Law and Human Rights, Graduate Institute of International and Development Studies, Geneva, Switzerland (2009)',
      'B.L., Nigerian Law School, Victoria Island, Lagos (2006)',
      'LL.B (Hons), University of Benin, Benin City, Nigeria (1999-2005)'
    ],
    practices: [
      'Human Rights',
      'Litigation',
      'Dispute Resolution'
    ],
    social: {
      linkedin: '#',
      email: 'emmanuel@ducexsolicitors.com'
    }
  },
  {
    id: 'perpetua-duruigbo',
    slug: 'perpetua-duruigbo',
    name: 'Perpetua Duruigbo',
    role: 'Associate',
    bio: 'Perpetua Duruigbo is a skilled lawyer at Ducex Solicitors in Lagos, Nigeria, specializing in corporate, business, and real estate law. With her strong education and expertise, Barrister Duruigbo is a valuable resource to her clients and the legal fraternity. Her track record has made her influential in the legal community.',
    image: '/images/team/Barr Perpetua Duruigbo.png',
    education: [
      'B.L., Nigerian Law School',
      'LL.B (Hons), Nigerian University'
    ],
    practices: [
      'Corporate Law',
      'Business Law',
      'Real Estate Law'
    ],
    social: {
      linkedin: '#',
      email: 'perpetua@ducexsolicitors.com'
    }
  },
  {
    id: 'adaobi-m-okoye',
    slug: 'adaobi-m-okoye',
    name: 'Adaobi M. Okoye',
    role: 'Associate',
    bio: 'Adaobi Okoye is a skilled Nigerian lawyer, specializing in Family Law, Corporate Litigation, Legal Consulting, Intellectual Property Litigation, Corporate Finance, Dispute Resolution, Property Services, Transaction Management, and more. Her dedication to our success is evident, making her an indispensable partner in our business endeavors.',
    image: '/images/team/Barr Adaobi Miriam Okoli (Nee Okoye).png',
    education: [
      'B.L., Nigerian Law School',
      'LL.B (Hons), Nigerian University'
    ],
    practices: [
      'Family Law',
      'Wills and Estate',
      'Corporate Litigation'
    ],
    social: {
      linkedin: '#',
      email: 'adaobi@ducexsolicitors.com'
    }
  },
  {
    id: 'chinwe-duruigbo',
    slug: 'chinwe-duruigbo',
    name: 'Barr. Chinwe Duruigbo',
    role: 'Associate',
    bio: 'Barrister Chinwe Duruigbo is a dedicated legal professional providing strategic counsel and robust representation to clients at Ducex Solicitors.',
    image: '/images/team/Barr Chinwe Duruigbo.png',
    education: [
      'B.L., Nigerian Law School',
      'LL.B (Hons), Nigerian University'
    ],
    practices: [
      'Corporate Law',
      'Dispute Resolution',
      'Family Law'
    ],
    social: {
      linkedin: '#',
      email: 'chinwe@ducexsolicitors.com'
    }
  }
];
