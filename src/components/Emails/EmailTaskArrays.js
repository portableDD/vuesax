import { MdOutlineEmail } from "react-icons/md"
import { FiSend } from "react-icons/fi";
import { FiEdit2 } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineInfo } from "react-icons/md";
import { FiTrash } from "react-icons/fi";
import { FaCheck } from "react-icons/fa6";
import Email1 from '../../assets/img/emailDp1.svg'
import Email2 from '../../assets/img/emailDp2.svg'
import Email3 from '../../assets/img/emailDp3.svg'
import Email4 from '../../assets/img/emailDp4.svg'
import Email5 from '../../assets/img/emailDp5.svg'
import Email6 from '../../assets/img/emailDp6.svg'
import Email7 from '../../assets/img/emailDp7.svg'
import Email8 from '../../assets/img/emailDp8.svg'


//navbar arrays 

export const Email = [
    {
        Icon: MdOutlineEmail,
        text: 'Inbox',
    },
    {
        Icon: FiSend,
        text: 'Sent',
    },
    {
        Icon: FiEdit2,
        text: 'Draft',
    },
    {
        Icon: FaRegStar,
        text: 'Starred',
    },
    {
        Icon: MdOutlineInfo,
        text: 'Spam',
    },
    {
        Icon: FiTrash,
        text: 'Trash',
    },
];

export const Tasks = [
    {
        Icon: FaRegStar,
        text: 'Starred',
    },
    {
        Icon: MdOutlineInfo,
        text: 'Important',
    },
    {
        Icon: FaCheck,
        text: 'Done',
    },
    {
        Icon: FiTrash,
        text: 'Trashed',
    },
]

export const Label = [
    {
        text: 'Personal',
        color: '#2DCD7A'
    },
    {
        text: 'Company',
        color: '#7E72F2'
    },
    {
        text: 'Important',
        color: '#FFA84C'
    },
    {
        text: 'Private',
        color: '#ED5F5F'
    }
]

// contents arrays

export const EmailContent = [
    {
        id: 1,
        img: Email1,
        name: 'Ardis Balderson',
        subject: 'Focused impactful open system',
        message: 'bah kivu decrete epanorthotic unnotched Argyroneta nonius veratrine preimaginary saunders demidolmen Chaldaic allusiveness lorriker unworshipping ribaldish tableman hendiadys ',
        color: '#7E72F2',
        date: '13 Jan'
    },
    {
        id: 2,
        img: Email2,
        name: 'Modestine Spat',
        subject: 'Focused impactful open system',
        message: 'bah kivu decrete epanorthotic unnotched Argyroneta nonius veratrine preimaginary saunders demidolmen Chaldaic allusiveness lorriker unworshipping ribaldish tableman hendiadys ',
        color: '#7E72F2',
        date: '07 Jan'
    },
    {
        id: 3,
        img: Email3,
        name: 'Eb Begg',
        subject: 'Focused impactful open system',
        message: 'bah kivu decrete epanorthotic unnotched Argyroneta nonius veratrine preimaginary saunders demidolmen Chaldaic allusiveness lorriker unworshipping ribaldish tableman hendiadys ',
        color: '#7E72F2',
        date: '01 Jan'
    },
    {
        id: 4,
        img: Email4,
        name: 'Waldemar Mannering',
        subject: 'Focused impactful open system',
        message: 'bah kivu decrete epanorthotic unnotched Argyroneta nonius veratrine preimaginary saunders demidolmen Chaldaic allusiveness lorriker unworshipping ribaldish tableman hendiadys ',
        color: '#2DCD7A',
        date: '15 Dec'
    },
    {
        id: 5,
        img: Email5,
        name: 'Louetta Esses',
        subject: 'Focused impactful open system',
        message: 'bah kivu decrete epanorthotic unnotched Argyroneta nonius veratrine preimaginary saunders demidolmen Chaldaic allusiveness lorriker unworshipping ribaldish tableman hendiadys ',
        color: '#ED5F5F',
        date: '11 Dec'
    },
    {
        id: 6,
        img: Email6,
        name: 'Tressa Gass',
        subject: 'Focused impactful open system',
        message: 'bah kivu decrete epanorthotic unnotched Argyroneta nonius veratrine preimaginary saunders demidolmen Chaldaic allusiveness lorriker unworshipping ribaldish tableman hendiadys ',
        color: '#7E72F2',
        date: '10 Dec'
    },
    {
        id: 7,
        img: Email7,
        name: 'Ardis Balderson',
        subject: 'Focused impactful open system',
        message: 'bah kivu decrete epanorthotic unnotched Argyroneta nonius veratrine preimaginary saunders demidolmen Chaldaic allusiveness lorriker unworshipping ribaldish tableman hendiadys ',
        color: '#7E72F2',
        date: '05 Dec'
    },
    {
        id: 8,
        img: Email8,
        name: 'Ardis Balderson',
        subject: 'Focused impactful open system',
        message: 'bah kivu decrete epanorthotic unnotched Argyroneta nonius veratrine preimaginary saunders demidolmen Chaldaic allusiveness lorriker unworshipping ribaldish tableman hendiadys ',
        color: '#FFA84C',
        date: '03 Dec'
    },
]

export const TaskContent = [
    {
        id: 1,
        subject: 'Fix Responsiveness',
        message: 'Jelly topping toffee bear claw. Sesame snaps lollipop macaroon croissant cheesecake pastry cupcake.',
        color: '#7E72F2',
        isChecked: false,
        isSpan: true,
        spanText: 'Frontend'
    },
    {
        id: 2,
        subject: 'Meet Jane',
        message: 'Toffee sugar plum oat cake tiramisu tart bonbon gingerbread cheesecake cake. ',
        color: '#FFA84C',
        isChecked: false,
        isSpan: true,
        spanText: 'Backend'
    },
    {
        id: 3,
        subject: 'Pick up Natasha',
        message: 'Sweet roll toffee dragée cotton candy jelly beans halvah gingerbread jelly-o. Ice cream bear claw sugar plum powder.',
        isChecked: true,
        isSpan: false,
    },
    {
        id: 4,
        subject: 'Skype Tommy',
        message: 'Tart oat cake sesame snaps lollipop croissant cake biscuit.',
        isChecked: false,
        isSpan: false,
    },
    {
        id: 5,
        subject: 'Send PPT',
        message: 'Dragée gummi bears tiramisu brownie cookie. Jelly beans pudding marzipan fruitcake muffin. Wafer gummi bears lollipop pudding lollipop biscuit.',
        isChecked: false,
        isSpan: false,

    },
    {
        id: 6,
        subject: 'Submit Report',
        message: 'Donut tart toffee cake cookie gingerbread. Sesame snaps brownie sugar plum candy canes muffin cotton candy.',
        isChecked: false,
        isSpan: false,
    },
    {
        id: 7,
        subject: 'Refactor Code',
        message: 'Pie liquorice wafer cotton candy danish. Icing topping jelly-o halvah pastry lollipop.',
        isChecked: false,
        isSpan: false,
    },
]