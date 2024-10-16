import { Product } from "@/components/Cards/CardArrays"
import { Message } from "@/components/Chats/ChatArrays"
import { EmailContent, TaskContent } from "@/components/Emails/EmailTaskArrays"



export const initialState = {
    chat: Message,
    tasks: TaskContent,
    email: EmailContent,
    cart: [],
    product: Product,
    discount: 25,
    tax: 1.3
}

const AppReducer = (state, action) => {
    switch (action.type) {
        case 'chat/updateChat':
            return {
                ...state,
                chat: action.payload
            };
        case 'cart/updateCart':
            return {
                ...state,
                cart: [...state.cart, action.payload]
            };
        case 'cart/removeCart':
            return {
                ...state,
                cart: action.payload
            };
        case "UPDATE_ITEM_COUNT":
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload.id
                        ? { ...item, count: action.payload.count }
                        : item
                ),
            }
        default:
            return state
    }
}

export default AppReducer