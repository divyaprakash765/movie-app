import { useNavigate } from "react-router-dom";
import Topnav from "./template/Topnav";
import DropDown from "./template/DropDown";
import { useEffect, useState } from "react";
import axios from "../utils/axios";
import Cards from "./template/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

function Trending() {
    const navigate = useNavigate();
    const [category, setCategory] = useState("all");
    const [duration, setDuration] = useState("day");
    const [trending, setTrending] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    document.title = "Trending | " + category.toLocaleUpperCase();

    const GetTrending = async () => {
        try {
            const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);
            if (data.results.length > 0) {
                setTrending((prevState) => [...prevState, ...data.results]);
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
        setTrending([]);
        setHasMore(true);
        GetTrending();
    }, [category, duration]);

    return trending.length > 0 ? (
        <div className="py-3 w-[100%] h-screen">
            <div className="w-full flex items-center justify-between">
                <h1 className="text-zinc-400 text-2xl font-semibold">
                    <i onClick={() => navigate(-1)} className="ri-arrow-left-line hover:text-[#6556CD] ml-4 cursor-pointer"></i>
                    Trending
                </h1>
                <div className="flex items-center w-[80%]">
                    <Topnav />
                    <div className="mr-5 flex gap-2">
                    <DropDown
                        title="Category"
                        options={["movie", "tv", "all"]}
                        func={(e) => setCategory(e.target.value)}
                        selectedValue={category}
                    />
                    <div className="w-[2%]"></div>
                    <DropDown
                        title="Duration"
                        options={["week", "day"]}
                        func={(e) => setDuration(e.target.value)}
                        selectedValue={duration}
                    />
                    </div>
                </div>
            </div>

            <InfiniteScroll
                dataLength={trending.length}
                next={GetTrending}
                hasMore={hasMore}
                loader={<h1>Loading...</h1>}
                className="w-[100%]"
            >
                <Cards data={trending} title={category} />
            </InfiniteScroll>
        </div>
    ) : (
        <Loading />
    );
}

export default Trending;
/* ╔═╦╗╔╦╗╔═╦═╦╦╦╦╗╔═╗
   ║╚╣║║║╚╣╚╣╔╣╔╣║╚╣═╣
   ╠╗║╚╝║║╠╗║╚╣║║║║║═╣
   ╚═╩══╩═╩═╩═╩╝╚╩═╩═╝ */

   