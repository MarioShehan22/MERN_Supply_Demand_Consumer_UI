import React, {useEffect, useState} from "react";
import AxiosInstance from "../config/AxiosInstance";
import {useStore} from "../store/store";
interface Order {
    _id:string|'';
    cartItem: [];
    totalPrice: number|0;
    activeState: boolean|false;
    date: string|'';
}

const OrderDetails = () => {
    const [data, setData] = useState<Order[]>([]);
    const{name}=useStore();
    useEffect(()=>{
        console.log(name);
        loadOrder();
    },[])

    const loadOrder = async ()=>{
        const response= await AxiosInstance.get<Order[]>(`/orders/find-By-email/${name}`);
        setData(response.data);
    }
  return(
      <>
          <div className="mx-auto mt-2 xl:max-w-screen-xl md:max-w-screen-md">
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
                                  Date
                              </th>
                              <th scope="col" className="px-6 py-3">
                                  Products
                              </th>
                              <th scope="col" className="px-6 py-3">
                                  Total Price
                              </th>
                          </tr>
                          </thead>
                          <tbody className="border">
                          {data?.length > 0 ? (
                              data?.map((order) => (
                                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 text-lg" key={order._id}>
                                      <th scope="row" className="px-6 py-4 text-base text-gray-900 whitespace-nowrap dark:text-white ">
                                          {order._id}
                                      </th>
                                      <td className="px-6 py-4">
                                          {order.date.substring(0, 10)}
                                      </td>
                                      <td className="px-6 py-4">
                                          {order.cartItem.length > 0 ? (
                                              order.cartItem.map((product,i) => (
                                                  <ul key={i}>
                                                      <li>
                                                          {product.quantity} : {product.name}
                                                      </li>
                                                  </ul>
                                          ))):(
                                              <tr>
                                                  <td colSpan="4" className="text-center py-4">
                                                      Loading Product...
                                                  </td>
                                              </tr>
                                          )}
                                      </td>
                                      <td className="px-6 py-4">
                                          {order.totalPrice}
                                      </td>
                                  </tr>
                              ))
                          ) : (
                              <tr>
                                  <td colSpan="4" className="text-center py-4">
                                      Loading orders...
                                  </td>
                              </tr>
                          )}
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
      </>
  );
}
export default OrderDetails;
