import Header from "./Header";
import { useSelector } from "react-redux";
import OrderData from "./OrderData.jsx";
const Orders = () => {
    const orderResult = useSelector((store) => store?.orders);
    const userRole = useSelector((store)=> store?.user?.role);
    return (
        <>
        <Header context="order" />
        <div className="order-history">
        <p className="order-history-text"> Order History</p>

          <div className="order-table">

                <div className="order-details">
                <span className="font-color-primary font-weight-bold"> Image </span>
                <span className="font-color-primary font-weight-bold">  Title</span>
                <span className="font-color-primary font-weight-bold"> Price</span>
                <span className="font-color-primary font-weight-bold"> Quantity </span>
                <span className="font-color-primary font-weight-bold"> Status </span>
                {userRole === "admin" ? (
                    <>
                    <span className="font-color-primary font-weight-bold"> Edit </span>
                    <span className="font-color-primary font-weight-bold"> Update </span>
                    </>
                ) : (null)}
                </div>

               { orderResult.map((orderItem) => <OrderData data={orderItem}/>) }
          </div>
          </div>
        </>
    )
};

export default Orders;