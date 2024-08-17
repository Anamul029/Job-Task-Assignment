
const ProductCard = ({data}) => {
    const {name,brand,category,price,image}=data;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Name:{name}</h2>
                <h2 className="card-title">Brand:{brand}</h2>
                <h2 className="card-title">Category:{category}</h2>
                <h2 className="card-title">Price:${price}</h2>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;