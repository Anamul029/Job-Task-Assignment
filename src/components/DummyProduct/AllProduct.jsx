import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useLoaderData } from "react-router-dom";

const AllProduct = () => {
    const [datas, setData] = useState([]);
    const [asc, setAssending] = useState(true)
    // console.log(asc);
    const { count } = useLoaderData();
    const itemPerPage = 10;
    const totalPage = Math.ceil(count / itemPerPage)
    console.log(totalPage);
    console.log(count);
    useEffect(() => {
        fetch(`http://localhost:5000/services?sort=${asc?'asc':'des'}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div>
            <div className="mx-auto my-16 flex justify-center">
                <button onClick={() => setAssending(!asc)} className="btn bg-green-500">
                    {asc ? 'Price: High to Low' : 'Price: Low to High'}
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    datas.map(data => <ProductCard key={data._id} data={data}></ProductCard>)
                }
            </div>

            {/* pagination */}
            <div className="join mx-auto mb-16 mt-6">
                <button className="join-item btn bg-blue-500">Previous</button>
                <button className="join-item btn bg-blue-300">Page 22</button>
                <button className="join-item btn bg-blue-500">Next</button>
            </div>

        </div>
    );
};

export default AllProduct;