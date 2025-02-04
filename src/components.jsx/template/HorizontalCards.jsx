import { Link } from "react-router-dom";
import DropDown from "./DropDown";

function HorizontalCard({ data = [] }) {
  return (
    <div className="w-[100%] h-[70vh] flex overflow-y-hidden p-5">
      {Array.isArray(data) && data.length > 0 ? (
        data.map((d, i) => (
          <Link 
            to={d.media_type && d.id ? `/${d.media_type}/details/${d.id}` : "#"}
            key={i} 
            className="min-w-[20%] mr-5 bg-zinc-900 rounded-md border border-zinc-700"
          >
            <img
              className="w-full h-[55%] object-cover rounded-md"
              src={d.backdrop_path || d.poster_path ? `https://image.tmdb.org/t/p/original${d.backdrop_path || d.poster_path}` : "/placeholder.jpg"}
              alt={d.name || d.title || "Image"}
            />
            <div className="h-[45%]">
              <h1 className="w-[100%] text-xl font-black text-white pl-[5%] pt-[5%]">
                {d.name || d.title || d.original_name || d.original_title || "Untitled"}
              </h1>
              <p className="w-[100%] text-white px-[5%]">
                {d.overview ? d.overview.slice(0, 60) : "No description available"}...
                <Link className="text-blue-500">more</Link>
              </p>
            </div>
          </Link>
        ))
      ) : (
        <h1 className="text-3xl text-white font-black text-center mt-5">Nothing to Show</h1>
      )}
    </div>
  );
}

export default HorizontalCard;
