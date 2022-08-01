import Counter from '../Counter/Counter'
import './ItemCard.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { StoreContext } from '../../store/storeProvider';
import { types } from '../../store/storeReducer';

const ItemCard = ({ product }) => {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    })

    const [store, dispatch] = useContext(StoreContext);

    return (
        <div className="itemCard-container">
            <div className="card">
                <div className="image-box">
                    <img src={`${product.img}${product.id}`} alt={product.name} />
                </div>
                <div className="details">
                    <h3>{product.name}</h3>
                    <h4>Descripción</h4>
                    <p>{product.description}</p>
                    <div className="group">
                        <h2>{formatter.format(product.price)}</h2>
                        <Counter stock={product.stock} />
                    </div>
                    <div className="see-more">
                        <Link onClick={() => { dispatch({ type: types.changeNavbar, payload: 'sticky' }) }} to={`/detail/${product.id}`} >Ver más</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCard;