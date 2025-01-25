import axios from "../utils/axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import Cards from "./template/Cards";
import Loading from "./Loading";
import DropDown from "./template/DropDown";
import Topnav from "./template/Topnav";


function People() {
    const navigate = useNavigate();
    const [category, setCategory] = useState("popular");
    const [person, setPerson] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    document.title = "person";

    const GetPerson = async () => {
        try {
            const { data } = await axios.get(`/person/${category}?page=${page}`);
            if (data.results.length > 0) {
                setPerson((prevState) => [...prevState, ...data.results]);
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
        setPerson([]);
        setHasMore(true);
        GetPerson();
    }, [category]);

    return person.length > 0 ? (
        <div className="py-3 w-[100%] h-screen">
            <div className="w-full flex items-center justify-between">
                <h1 className="text-zinc-400 text-2xl font-semibold">
                    <i
                        onClick={() => navigate(-1)}
                        className="ri-arrow-left-line hover:text-[#6556CD] ml-4 cursor-pointer"
                    ></i>People
                </h1>
                <div className="flex items-center w-[80%]">
                    <Topnav />
                    <div className="mr-5"></div>
                </div>
            </div>

            <InfiniteScroll
                dataLength={person.length}
                next={GetPerson}
                hasMore={hasMore}
                loader={<h1>Loading...</h1>}
                className="w-[100%]"
            >
                <Cards data={person} title="person" />
            </InfiniteScroll>
        </div>
    ) : (
        <Loading />
    );
}

export default People;
