import axios from "../utils/axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import Cards from "./template/Cards";
import Loading from "./Loading";
import DropDown from "./template/DropDown";
import Topnav from "./template/Topnav";

function Movie(){

    const navigate = useNavigate();
    const [category, setCategory] = useState("now_playing");
    const [movie, setMovie] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    document.title = "Movies";

    const GetMovie = async () => {
        try {
            const { data } = await axios.get(`/movie/${category}?page=${page}`);
            if (data.results.length > 0) {
                setMovie((prevState) => [...prevState, ...data.results]);
                setPage((prevPage) => prevPage + 1);
            } else {
                setHasMore(false);
            }
        } catch (error) {
            console.error(error);
        }
    };
    
    useEffect(() => {
        setPage(1);
        setMovie([]);
        setHasMore(true);
        GetMovie();
    }, [category]);

    return movie.length > 0 ? (
        <div className="py-3 w-[100%] h-screen">
            <div className="w-full flex items-center justify-between">
                <h1 className="text-zinc-400 text-2xl font-semibold">
                    <i onClick={() => navigate(-1)} className="ri-arrow-left-line hover:text-[#6556CD] ml-4 cursor-pointer"></i>
                    Movie (<small className="ml-2 text-sm text-zinc-600">{category}</small>)
                </h1>
                <div className="flex items-center w-[80%]">
                    <Topnav />
                    <div className="mr-5">
                    <DropDown
                        title="Category"
                        options={["popular", "top_rated","upcoming","now_playing"]}
                        func={(e) => setCategory(e.target.value)}
                        selectedValue={category}
                    />
                    </div>
                    
                </div>
            </div>

            <InfiniteScroll
                dataLength={movie.length}
                next={GetMovie}
                hasMore={hasMore}
                loader={<h1>Loading...</h1>}
                className="w-[100%]"
            >
                <Cards data={movie} title="movie"/>
            </InfiniteScroll>
        </div>
    ) : (
        <Loading />
    );
}

export default Movie;