const OrderData = ({data}) => {
    return (
        <>
        
            <div className="order-details">
                <span className="order-img"><img src={data.image} /> </span>
                <span>{data.title}</span>
                <span>{data.price}</span>
                <span> {data.quantity}</span>
                <span> {data.status}</span>
            </div>
        
        </>
    )
};

export default OrderData;