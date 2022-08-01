import './ItemDetail.scss'

const ItemDetail = ({ id, name, description, imgDetail }) => {
    return (
        <>
            <div className="itemDetail-container" style={{
                backgroundImage: `url(${imgDetail}${id})`,
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
            </div>
            <div className="details">
                <h1>{name}</h1>
                <h3>{description}</h3>
            </div>
        </>
    )
}

export default ItemDetail;