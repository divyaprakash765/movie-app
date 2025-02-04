import { Link } from "react-router-dom"


function Header({data}){

    return(
        
        <div
        style = {{
            background: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.7),rgba(0,0,0,0.9)),url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`,
            backgroundPosition: 'top',
            backgroundSize: 'cover',
            backgroundRepeat: "no-repeat"
            
        }}
        className="w-full h-[60vh] flex flex-col justify-end px-[5%] py-[5%] items-start">
           <h1 className="w-[70%] text-5xl font-black text-white">
            {data.name || data.title || data.original_name || data.original_title}
           </h1>
          <p className="w-[70%] mb-3 mt-3 text-white">{data.overview.slice(0,200)}...<Link to = {`${data.media_type}/details/${data.id}`} className="text-blue-500">more</Link></p>
          <p className="text-white">
          <i className="text-yellow-500 ri-megaphone-fill"></i> {(data.release_date) ? data.release_date : "No Information"}
          <i className="text-yellow-500 ml-5 ri-album-fill"></i> {data.media_type.toUpperCase()}
          </p>
          <Link to={`/${data.media_type}/details/${data.id}/trailer`} className="p-4 bg-[#6556CD] rounded text-white font-semibold">
          Watch Trailer
          </Link>
        </div>
    )
}

export default Header