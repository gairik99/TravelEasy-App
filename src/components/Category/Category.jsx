import axios from "axios"
import { useEffect } from "react"


export const Category = () => {

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('https://travellapp-b9k7.onrender.com/api/category');
                console.log(data);
            }
            catch (err) {
                console.log(err);
            }
        })()
    }, [])



    return (
        <div>Category</div>
    )
}
