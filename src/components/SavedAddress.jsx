import AddAddress from "./AddAddress";
import ShowAddress from "./ShowAddress";
const SavedAddress = () => {
    return (
        <>
        <p className="font-bold font-size-16 pl-10"> Choose a delivery address </p> 

        <div className="address-boxes">
             <ShowAddress />
        </div>

         <div className="address-boxes dis-block">
         <AddAddress />
         </div>
        </>
    )
};

export default SavedAddress;