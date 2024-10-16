import AppleWatch from '../../assets/img/apple-watch.svg';
import BeatsHead from '../../assets/img/beats-headphones.svg';
import HomePod from '../../assets/img/homepod.svg';
import IpadPro from '../../assets/img/ipad-pro.svg';
import IPhone from '../../assets/img/iphone-x.svg';
import JBL from '../../assets/img/jbl-speaker.svg';
import JLAB from '../../assets/img/jlab-audio-wireless.svg';
import MacBook from '../../assets/img/macbook-pro.svg';
import Magic from '../../assets/img/magic-mouse.svg'

export const Navbar = {
    range: [
        {
            text: '$10',
            checked: false,
            id: 10
        },
        {
            text: '$10-$100',
            checked: false,
            id: 90
        },
        {
            text: '$100-$500',
            checked: false,
            id: 400
        },
        {
            text: '$500',
            checked: false,
            id: 500
        },
        {
            text: 'All',
            checked: true,
            id: 'all'
        },
    ],
    catergory: [
        {
            id: 1,
            title: 'Cell Phones',
            num: 1920,
        },
        {
            id: 2,
            title: 'Computers & Tablets',
            num: 1820,
        },
        {
            id: 3,
            title: 'Cell Phone Accessories',
            num: 462,
        },
        {
            id: 4,
            title: 'Appliances',
            num: 6556,
        },
        {
            id: 5,
            title: 'Audio',
            num: 120,
        },
        {
            id: 6,
            title: 'iPhone Accessories',
            num: 353,
        },
        {
            id: 7,
            title: 'Cameras & Camcorders',
            num: 45,
        },
        {
            id: 8,
            title: 'iPhone Cases & Clips',
            num: 456,
        },
        {
            id: 9,
            title: 'TV & Home Theater',
            num: 55,
        },
        {
            id: 10,
            title: 'Small Kitchen Appliances',
            num: 10,
        },
    ],
    brand: [
        {
            id: 1,
            title: 'Insigni',
            num: 220,
        },
        {
            id: 2,
            title: 'Samsung',
            num: 120,
        },
        {
            id: 3,
            title: 'Apple',
            num: 320,
        },
        {
            id: 4,
            title: 'HP',
            num: 32,
        },
        {
            id: 5,
            title: 'Sony',
            num: 520,
        },
        {
            id: 6,
            title: 'Metra',
            num: 55,
        },
        {
            id: 7,
            title: 'Dyne',
            num: 120,
        },
        {
            id: 8,
            title: 'LG',
            num: 98,
        },
        {
            id: 9,
            title: 'Canon',
            num: 99,
        },
        {
            id: 10,
            title: 'Speck',
            num: 575,
        },
    ],
}

export const Product = [
    {
        id: 1,
        img: AppleWatch,
        title: 'Apple Watch Series 4 GPS',
        subtitle: 'Redesigned from scratch and completely revised.',
        rating: 3.4,
        price: 399,
        by: 'Apple',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makea type specimen book.",
        list: true,
        checkout: true,
    },
    {
        id: 2,
        img: JBL,
        title: 'JBL Speaker',
        subtitle: 'Redesigned from scratch and completely revised.',
        rating: 5.0,
        price: 199,
        by: 'JBL',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makea type specimen book.",
        list: true,
        checkout: true,
    },
    {
        id: 3,
        img: IPhone,
        title: 'Apple iPhone X 128GB',
        subtitle: 'Redesigned from scratch and completely revised.',
        rating: 4.4,
        price: 899,
        by: 'Apple',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makea type specimen book.",
        list: true,
        checkout: true,
    },
    {
        id: 4,
        img: BeatsHead,
        title: 'Beats Headphones',
        subtitle: 'Redesigned from scratch and completely revised.',
        rating: 3.4,
        price: 459,
        by: 'Beats',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makea type specimen book.",
        list: true,
        checkout: false,
    },
    {
        id: 5,
        img: MacBook,
        title: 'Apple Macbook Pro 512GB SSD',
        subtitle: 'Redesigned from scratch and completely revised.',
        rating: 4.5,
        price: 2499,
        by: 'Apple',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makea type specimen book.",
        list: true,
        checkout: false,
    },
    {
        id: 6,
        img:IpadPro,
        title: 'Apple iPad Pro 64GB',
        subtitle: 'Redesigned from scratch and completely revised.',
        rating: 5.0,
        price: 899,
        by: 'Apple',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makea type specimen book.",
        list: false,
        checkout: false,
    },
    {
        id: 7,
        img: HomePod,
        title: 'Apple Homepod',
        subtitle: 'Redesigned from scratch and completely revised.',
        rating: 3.3,
        price: 399,
        by: 'Apple',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makea type specimen book.",
        list: false,
        checkout: false,
    },
    {
        id: 8,
        img: JLAB,
        title: 'JBuds Air Wireless Bluetooth…',
        subtitle: 'Redesigned from scratch and completely revised.',
        rating: 5.0,
        price: 2499,
        by: 'Apple',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makea type specimen book.",
        list: false,
        checkout: false,
    },
    {
        id: 9,
        img: Magic,
        title: 'Apple Magic Mouse ',
        subtitle: 'Redesigned from scratch and completely revised.',
        rating: 4.4,
        price: 99,
        by: 'Apple',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makea type specimen book.",
        list: false,
        checkout: false,
    },
]