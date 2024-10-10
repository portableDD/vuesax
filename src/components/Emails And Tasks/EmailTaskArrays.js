import { MdOutlineEmail } from "react-icons/md"
import { FiSend } from "react-icons/fi";
import { FiEdit2 } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineInfo } from "react-icons/md";
import { FiTrash } from "react-icons/fi";
import { FaCheck } from "react-icons/fa6";

export const EmailTask = [
    {
        id: 1,
        Icon: MdOutlineEmail,
        text: 'All'
    },
    {
        id: 2,
        email: [
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
        ]
    },
    {
        id: 3,
        tasks: [
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
    },
    {
        id: 4,
        label: [
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
    }
]