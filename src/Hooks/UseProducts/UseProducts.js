import { useEffect, useState } from "react";

const UseProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://whispering-tundra-74547.herokuapp.com/product')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])
    return [products, setProducts]
}
export default UseProducts