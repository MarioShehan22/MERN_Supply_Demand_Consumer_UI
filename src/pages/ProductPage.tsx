import React from "react";
import NavigationBar from "../components/NavigationBar";
import FooterSection from "../components/FooterSection";
import {useStore} from "../store/store";
import {useShallow} from "zustand/react/shallow";
import ChangeQtyButtons from "../components/ChangeQtyButtons";
import Cart from "./Cart";
import {useGetProduct} from "../api/ProductService";

const ProductPage:React.FC  = () => {
    const {addProduct, products } = useStore(
        useShallow((state) => ({
            addProduct: state.addProduct,
            products: state.products,
        }))
    );
    const {data} =  useGetProduct();

    return(
        <>
            <NavigationBar/>
            <div className="mx-auto mt-2 xl:max-w-screen-xl md:max-w-screen-md">
                <form className="w-1/2">
                    <label htmlFor="default-search mr-2" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search"
                               id="default-search"
                               className="block w-full py-4 ps-12 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                               placeholder="Search..."
                               required/>
                        <button type="submit"
                                className="text-white absolute end-2.5 bottom-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">Search
                        </button>
                    </div>
                </form>
                <div className="mt-12 grid grid-cols-3 gap-3">
                    {data.map((product) => (
                        product.activeState&&
                        <div key={product._id} className="w-full max-w-sm bg-white rounded-lg shadow group border border-slate-300">
                            <div className="overflow-hidden">
                                <img className="p-8 rounded-t-lg transition duration-150 group-hover:scale-110" src={`../src/assets/Product_Image/${product.imageUrl}`} alt="product image"/>
                            </div>
                            <div className="px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                                        {product.ProductName}
                                    </h5>
                                </a>
                                <h5 className="text-lg tracking-tight text-gray-900">
                                    {product.description}
                                </h5>
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">{product.showPrice}</span>
                                    {products.find((item) => item._id === product?._id as string) ? (
                                        <ChangeQtyButtons key={product?._id as string} productId={product?._id as string} />
                                    ) : (
                                        <button onClick={() => {
                                            addProduct({
                                                ["_id"]: product._id,
                                                ["name"]:product.ProductName,
                                                ["showPrice"]: product.showPrice,
                                                ["imageUrl"]:"",
                                                ["description"]:"" ,
                                                ['activeState']:true
                                            },);
                                        }}
                                                variant="default"
                                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                            Add to Cart
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Cart/>
            <FooterSection/>
        </>
    );

}
export default ProductPage;
