export interface Testimonial {
  id: string;
  name: string;
  title: string;
  company?: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ejice Anene Robert',
    title: 'CEO',
    company: 'Como Integrated Limited',
    quote: 'Ducex Solicitors has consistently provided exceptional legal services to Como Integrated Ltd. Their expertise, responsiveness, and commitment to our legal needs have been invaluable. We appreciate their professionalism and dedication, making them our trusted legal partner for years. Highly recommended for any business seeking top-tier legal support.'
  },
  {
    id: '2',
    name: 'Gideon Umunnakme',
    title: 'CEO',
    company: 'Blessed Chukwudi Limited',
    quote: 'Ducex Solicitors has demonstrated unparalleled expertise in handling legal matters for Blessed Chukwudi Ltd. Their team\'s astute guidance and proactive approach have been invaluable. Their dedication to our success is evident, making them an indispensable partner in our business endeavors. Highly recommended.'
  },
  {
    id: '3',
    name: 'Kenneth Akwaeke',
    title: 'Principal / Proprietor',
    company: 'Belafield Int\'l School',
    quote: 'I am very impressed with the legal services provided by Ducex Solicitors. They have been handling the legal affairs of Belafield Int\'l School for many years, and I have always been satisfied with their work. They are knowledgeable, efficient, and responsive to our needs. I would highly recommend Ducex Solicitors to anyone looking for a reliable and professional law firm.'
  },
  {
    id: '4',
    name: 'Amaechi Cyril',
    title: 'Director',
    company: 'Divine Tulip Homes Limited',
    quote: 'Bar. Perpetua and Ducex Solicitors worked really hard assisting me with a legitimate issue recently. Their hardworking attitude, proactive correspondence, and meticulousness make them incredible attorneys. I enthusiastically suggest Ducex Solicitors Law Firm.'
  },
  {
    id: '5',
    name: 'Kenneth Ogbu',
    title: 'CEO',
    company: 'Decan\'s Event Center',
    quote: 'We have worked closely with the attorneys from Ducex Solicitors Law Firm in Ojo, Lagos for years. They are extremely professional, responsive, and do great work for our clients. I would recommend Ducex Solicitors Law Firm in Nigeria without hesitation.'
  }
];
