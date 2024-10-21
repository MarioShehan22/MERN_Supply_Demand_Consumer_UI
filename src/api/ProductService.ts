import {Product} from "../utils/Utils";
import {useQuery} from "react-query";
import AxiosInstance from "../config/AxiosInstance";

export const useGetProduct = () => {
    const getAllProduct = async () => {
        try {
            const response = await AxiosInstance.get<Product[]>("/products/find-all");
            return response.data; // Return the product data (potentially empty)
        } catch (error) {
            // Handle potential errors during API call
            console.error("Error fetching products:", error);
            return []; // Return an empty array on error
        }
    };

    const { data, error,refetch } = useQuery<Product[]>({
        queryKey: ["fetchAllProduct"],
        queryFn: getAllProduct,
        initialData: [],
        refetchInterval: 5000
    });

    return { data, error,refetch };
};
