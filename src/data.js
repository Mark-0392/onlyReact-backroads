import tibetImg from './images/tour-1.jpeg'
import indonesiaImg from './images/tour-2.jpeg'
import hongKongImg from './images/tour-3.jpeg'

export const internalPageLinks = [
  {
    id: 1,
    href: '#home',
    text: 'home',
  },
  {
    id: 2,
    href: '#about',
    text: 'about',
  },
  {
    id: 3,
    href: '#services',
    text: 'services',
  },
  {
    id: 4,
    href: '#tours',
    text: 'tours',
  },
]

export const socialLinks = [
  {
    id: 1,
    href: 'https://www.facebook.com/',
    icon: 'fab fa-facebook',
  },
  {
    id: 2,
    href: 'https://twitter.com/',
    icon: 'fab fa-twitter',
  },
  {
    id: 3,
    href: 'https://www.squarespace.com/',
    icon: 'fab fa-squarespace',
  },
]

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    serviceTitle: 'saving money',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.`,
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    serviceTitle: 'endless hiking',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.`,
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    serviceTitle: 'amazing comfort',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.`,
  },
]

export const tourCards = [
  {
    id: 1,
    img: tibetImg,
    alt: 'tibet tour image',
    date: `august 26th, 2020`,
    tourTitle: 'Tibet Adventure',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    mapIcon: 'fas fa-map',
    place: 'Tibet',
    days: '6 days',
    price: 'from $2100',
  },
  {
    id: 2,
    img: indonesiaImg,
    alt: 'indonesia tour image',
    date: `october 1th, 2020`,
    tourTitle: 'Best of Java',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    mapIcon: 'fas fa-map',
    place: 'Indonesia',
    days: '11 days',
    price: 'from $1400',
  },
  {
    id: 3,
    img: hongKongImg,
    alt: 'hong kong tour image',
    date: `september 15th, 2020`,
    tourTitle: 'Explore Hong Kong',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    mapIcon: 'fas fa-map',
    place: 'hong kong',
    days: '8 days',
    price: 'from $5000',
  },
]
