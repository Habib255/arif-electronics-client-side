import { useEffect, useState } from "react";

const UseProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('fakedata.json')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])
    return [products, setProducts]
}
export default UseProducts