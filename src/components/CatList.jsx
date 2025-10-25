
const CatList = ({onClick, listItem, listImg}) => {
    return(
        <>
        <div className="category-item" onClick={onClick}>
           <img src={listImg} />
           <p> {listItem} </p>
        </div>
        
        </>
    )
};

export default CatList;