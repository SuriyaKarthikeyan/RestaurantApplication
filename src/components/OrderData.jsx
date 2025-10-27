import { useSelector } from "react-redux";
import { useState,useRef } from "react";
import { useDispatch } from "react-redux";
import { updateOrderStatus } from "../utils/orderSlice";

const OrderData = ({data}) => {
    const dispatch = useDispatch();
    const userRole = useSelector((store)=> store?.user?.role);
    const [makeEditable, setMakeEditable] = useState(false);
    const inputData = useRef(null);
    const handleEditStatus = () => {
        setMakeEditable(true);
    }
    const handleUpdateStatus = () => {
        if(inputData.current.value!=="" || inputData.current.value!==null) {
           dispatch(updateOrderStatus({id: data.id, status: inputData.current.value}));
           setMakeEditable(false);
        }
    }
    return (
        <>
        
            <div className="order-details">
                <span className="order-img"><img src={data.image} /> </span>
                <span>{data.title}</span>
                <span>{data.price}</span>
                <span> {data.quantity}</span>
                { makeEditable ?  (
                    <span><input type="text" className="edit-status" ref={inputData} /></span>
                ) : (<span className="order-status"> {data.status}</span>) 
                }

                  {userRole === "admin" ? (
                    <>
                     <span> <button onClick={handleEditStatus} className="edit-btn"> Edit Status</button></span>
                     <span> <button onClick={handleUpdateStatus} className="update-btn"> Update Status</button></span>
                     </>
                  ) :
                  (null)
                  }
            </div>
        
        </>
    )
};

export default OrderData;