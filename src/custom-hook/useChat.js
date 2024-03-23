import { useContext } from "react";
import {chatContext} from '../Context/ChatContext'

const useChat = () => {
    return useContext(chatContext)
}

export default useChat