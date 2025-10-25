import WLItem from './WLItem.jsx';
const WLList = ({show}) => {

    return (
        <>
        <div className="cart-list">
             <table className="cart-table">
        {show  &&
        (show.map((wishlist) => <WLItem key={wishlist.id} showWL = {wishlist} /> )) }
        </table>
      </div>
        </>
    )
};

export default WLList;