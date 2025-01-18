import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";
import noImage from "/noImage.jpeg";

function Topnav() {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);

  const GetSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results); // Replace the previous searches with the new results
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (query.length > 0) {
      GetSearches();
    } else {
      setSearches([]); // Clear the results when the query is empty
    }
  }, [query]);

  return (
    <div className="w-full h-[10vh] relative flex justify-start ml-[20%] items-center">
      <i className="text-zinc-400 text-2xl ri-search-line"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[50%] mx-10 p-2 outline-none border-none bg-transparent text-zinc-200 text-xl"
        type="text"
        placeholder="search anything"
      />

      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="text-zinc-400 text-3xl ri-close-fill cursor-pointer"
        ></i>
      )}

      <div className="w-[50%] max-h-[50vh] bg-zinc-200 absolute top-[90%] overflow-auto rounded">
        {searches.map((s, idx) => (
          <Link
            key={idx}
            className="text-zinc-600 font-semibold hover:text-black hover:bg-zinc-300 duration-300 inline-block w-[100%] p-10 flex justify-start items-center border-b border-zinc-100"
          >
            <img src={s.backdrop_path || s.profile_path ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}` : noImage} alt="" className="w-[10vh] h-[10vh] mr-5 object-cover rounded shadow-lg" />
            <span>{s.name || s.title || s.original_name || s.original_title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Topnav;
