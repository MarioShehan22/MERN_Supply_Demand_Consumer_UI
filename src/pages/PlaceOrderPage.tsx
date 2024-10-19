import UserDetailsForm from "../components/UserDetailsForm";
import React, {useEffect} from "react";
import {Trash2} from "lucide-react";
import ChangeQtyButtons from "../components/ChangeQtyButtons";
import {useStore} from "../store/store";
import {useShallow} from "zustand/react/shallow";
import axios from "axios";
import {useGetSelectedUsers} from "../api/UserService";
import {useGetSelectedAddress} from "../api/AddresServce";

const PlaceOrderPage = () => {
    const { reset, products, removeProduct, total } = useStore(
        useShallow((state) => ({
            reset: state.reset,
            products: state.products,
            removeProduct: state.removeProduct,
            total: state.total,
        }))
    );
    const{name}=useStore();

    const{user} = useGetSelectedUsers(name);

    const{address} = useGetSelectedAddress(user._id);

    useEffect(()=>{
        console.log(user._id);
    },[])

  return(
      <>
          <div className="mx-auto mt-2 xl:max-w-screen-xl md:max-w-screen-md">
              <UserDetailsForm
                  data={user}
                  addressData={address}
              />
              <div className="mt-2">
                  <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          <thead
                              className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                              <th scope="col" className="px-6 py-3">
                                  Id
                              </th>
                              <th scope="col" className="px-6 py-3">
                                  Product Name
                              </th>
                              <th scope="col" className="px-6 py-3">
                                  Price
                              </th>
                              <th scope="col" className="px-6 py-3">
                                  Qty
                              </th>
                              <th scope="col" className="px-6 py-3">
                                  Total Price
                              </th>
                              <th scope="col" className="px-6 py-3 flex justify-center items-center">
                                  Action
                              </th>
                          </tr>
                          </thead>
                          <tbody className="border">
                          {products.map((product) => (
                              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b" key={product._id}>
                                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                      {product._id}
                                  </th>
                                  <td className="px-6 py-4">
                                      {product.name}
                                  </td>
                                  <td className="px-6 py-4">
                                      {product.showPrice}
                                  </td>
                                  <td className="px-6 py-4">
                                      <ChangeQtyButtons productId={product._id} />
                                  </td>
                                  <td className="px-6 py-4">
                                      {product.quantity * product.showPrice}
                                  </td>
                                  <td
                                      onClick={() => removeProduct(product._id)}
                                  >
                                      <div className="flex justify-center items-center">
                                          <Trash2 className="cursor-pointer hover:bg-gray-400"/>
                                      </div>
                                  </td>
                              </tr>
                          ))}
                          </tbody>
                      </table>
                  </div>
                  <p className="my-3 text-2xl font-bold">Total: {total}$</p>
                  <button
                      onClick={
                          ()=>{axios.post(
                              'http://localhost:3000/api/v1/orders/create',{
                                  cartItem:products,
                                  customerDetail:user._id,
                                  totalPrice:total,
                                  activeState: true
                              }).then(reset);}
                      }
                      className="rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                      Place Order
                  </button>
              </div>
          </div>
      </>
  );
}
export default PlaceOrderPage;
