import { Link } from "react-router-dom";

function Cards({ data, title }) {
    console.log(data);
    return (
        <div className="w-full h-full p-[2%] flex flex-wrap justify-center bg-[#1F1E24] gap-[5%]">
            {data.map((c, i) => {
                // Determine the media type without duplication
                const mediaType = c.mediatype || title;

                return (
                    <Link
                        to={`/${mediaType}/details/${c.id}`}
                        className="relative w-[25vh] mb-[5%] flex flex-col items-center"
                        key={i}
                    >
                        <img
                            className="h-[40vh] object-cover rounded shadow-[8px_7px_38px_2px_rgba(0,0,0,0.5)]"
                            src={`https://image.tmdb.org/t/p/original/${c.poster_path || c.backdrop_path || c.profile_path}`}
                            alt=""
                        />
                        <h1 className="text-2xl text-zinc-200 mt-3 font-semibold">
                            {c.name || c.title || c.original_name || c.original_title}
                        </h1>
                        {c.vote_average && (
                            <div
                                className="bg-yellow-600 text-white w-[5vh] h-[5vh] text-md absolute right-[-10%] bottom-[20%] font-semibold rounded-full flex justify-center items-center"
                            >
                                {(c.vote_average * 10).toFixed()}<sup>%</sup>
                            </div>
                        )}
                    </Link>
                );
            })}
        </div>
    );
}

export default Cards;
