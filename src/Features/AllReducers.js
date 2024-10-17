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
        // chat
        case 'chat/updateChat':
            return {
                ...state,
                chat: action.payload
            };
        // cart
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
        // tasks
        case 'task/removeTask':
            return {
                ...state,
                tasks: action.payload
            };
        case "task/updateTasks":
            return {
                ...state,
                tasks: action.payload, // Updating tasks with the new task list
            };
        case "task/searchTasks":
            return {
                ...state,
                tasks: action.payload,
            };
        case "task/resetTasks":
            return {
                ...state,
                tasks: initialState.tasks // Reset tasks to the original list
            };
        // email
        case "email/searchEmail":
            return {
                ...state,
                email: action.payload,
            };
        case "email/resetEmail":
            return {
                ...state,
                email: initialState.email // Reset email to the original list
            };
        case 'email/updateEmails':
            return {
                ...state,
                email: action.payload,  // Update when it is checked email list with the new array
            };
        case 'email/removeCheckedEmails':
            return {
                ...state,
                email: action.payload,  // The payload contains only the unchecked emails after deleteing
            };
        default:
            return state
    }
}

export default AppReducer