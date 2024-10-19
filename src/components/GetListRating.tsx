import {useEffect, useState} from "react";
import {Ratings} from "../utils/Utils";
import AxiosInstance from "../config/AxiosInstance";
import Rating from "./Rating";
import {FaStar} from "react-icons/fa";

const GetListRating = () => {
    const [ratings, setRatings] = useState<Ratings[]>({});
    const [error, setError] = useState("");
    //const {email,comment,currentRating} = ratings;
    useEffect(() => {
        const getRatingData = async () => {
            try {
                const response = await AxiosInstance.get<Ratings[]>("/reviews/find-all");
                setRatings(response.data);
            } catch (error) {
                setError("Error fetching ratings");
            }
        };

        getRatingData();
    }, []);
  return(
      <div className="mx-auto xl:max-w-screen-xl md:max-w-screen-md">
          <h2 className="text-black-500 font-bold text-2xl">Rating Page</h2>
          <Rating />
          {error ? (
              <p className="text-red-500 font-bold">Error: {error}</p>
          ) : ratings.length > 0 ? (
              <div className="mt-12 grid grid-cols-3 gap-3 w-full">
                  {ratings.map((rating, index) => (
                      <div key={index} className="mb-12 p-4">
                          <li style={{ listStyle: "none" }} className="text-xl font-semibold text-sky-900">{rating.email}</li>
                          <li style={{ listStyle: "none" }} className="text-xl font-semibold text-black">{rating.comment}</li>
                          <div className="flex">
                              {Array.from({ length: rating.currentRating }).map((_, i) => (
                                  <FaStar key={i} color={'#FCC82F'} size={40} />
                              ))}
                          </div>
                      </div>
                  ))}
              </div>
          ) : (
              <p>No ratings found yet.</p>
          )}
      </div>
  );
}
export default GetListRating;
