import axios from "axios";
import env from "../env";

const { useState } = require("react")

const base_url = env.API_URL
const useItem = () => {
    
    const [items, setItem] = useState([]);

    const fetchItems = () => {
        axios.get(base_url+'items').then(res => {
            setItem(res.data);
        });
    }

    return {items, fetchItems}

}

export default useItem;