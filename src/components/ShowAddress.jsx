import ShowEachAddress from "./ShowEachAddress";
import { useSelector } from "react-redux";
const ShowAddress = () => {
    const multipleAddress = useSelector((store)=> store?.savedAddress?.address);
    return (
        <>
          
          {multipleAddress.map((multiple)=> <ShowEachAddress address={multiple} />)}
        </>
    )
};

export default ShowAddress;