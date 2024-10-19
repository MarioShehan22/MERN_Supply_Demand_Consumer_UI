import AxiosInstance from "../config/AxiosInstance";
import {Ratings} from "../utils/Utils";
import {useQuery} from "react-query";

export const useGetRatings = () => {
    const getAllRatings = async () => {
        try {
            const response = await AxiosInstance.get<Ratings[]>("/reviews/find-all");
            return response.data; // Return the product data (potentially empty)
        } catch (error) {
            // Handle potential errors during API call
            console.error("Error fetching ratings:", error);
            return []; // Return an empty array on error
        }
    };

    const { ratings, error,refetch } = useQuery<Ratings[]>({
        queryKey: ["fetchAllRatings"],
        queryFn: getAllRatings,
        initialData: [],
        refetchInterval: 5000,
    });

    return { ratings, error,refetch };
};
