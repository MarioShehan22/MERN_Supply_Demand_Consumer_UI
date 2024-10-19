import { FaStar } from "react-icons/fa";
import {useState} from "react";
import AxiosInstance from "../config/AxiosInstance";
import {useGetRatings} from "../api/RatingsService";

const Rating = ({readOnly = false }) => {
    const[hover, setHover] = useState(0);
    const[data,setData] = useState({
        email: '',
        comment: '',
        currentRating:0
    });
    const {refetch}=useGetRatings();
    const handleChange = (e) => {
        setData({...data,[e.target.name]:e.target.value});
    }
    const handleSubmit = async () => {
        const response =await AxiosInstance.post("/reviews/create",data);
        if(response.status==201){
            refetch;
            setData({email: '', comment: '', currentRating:0});
        }
    }
    return (
        <form className="mt-5 w-full flex justify-center">
            <div className="w-1/3">
                <div className="flex">
                    {[...Array(5)].map((star, index) => {
                        const currentRating = index + 1;
                        return (
                            <label key={index}>
                                <input
                                    type="radio"
                                    name="currentRating"
                                    value={data.currentRating}
                                    onChange={() => setData({...data,currentRating})}
                                    onClick={()=>{console.log(currentRating)}}
                                    hidden
                                />
                                <FaStar
                                    style={{ cursor: readOnly ? 'default' : 'pointer' }}
                                    color={currentRating <= (data.currentRating||hover) ? '#FCC82F' : '#838383'}
                                    onMouseEnter={() => setHover(currentRating)}
                                    onMouseLeave={() => setHover(0)}
                                    size={40}
                                />
                            </label>
                        );
                    })}
                </div>
                <div>
                    <label className="block my-2 text-sm font-medium text-gray-900" htmlFor="Email">Email</label>
                    <input
                        type="text"
                        name="email"
                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-4 p-2 my-3"
                        defaultValue={data.email}
                        onChange={handleChange}
                        placeholder="Email"
                    />
                </div>
                <div>
                    <label className="block my-2 text-sm font-medium text-gray-900" htmlFor="comment">Comment</label>
                    <textarea
                        name="comment"
                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-4 p-2 mt-3"
                        defaultValue={data.comment}
                        onChange={handleChange}
                        placeholder="Comment"
                    />
                </div>
                <div className="my-3 min-h-[50px] w-full flex justify-center">
                    <button
                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        type="button"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </form>

    );
};

export default Rating;
