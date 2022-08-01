import { useEffect, useState } from "react";
import { getProductById } from "../../asyncMocks";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import './ItemDetailContainer.scss'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});

    const { productId } = useParams();

    useEffect(() => {
        getProductById(productId)
            .then(prod => setProduct(prod))
            .catch(err => console.error(err))
    })

    return (
        <div className="itemDetailContainer-container">
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer;