import { Link } from "react-router-dom"


function Header({data}){

    return(
        
        <div
        style = {{
            background: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.7),rgba(0,0,0,0.9)),url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            
        }}
        className="w-[100%] h-[50vh] flex flex-col justify-end p-[10%]">
           <h1 className="w-[70%] text-5xl font-black text-white">
            {data.name || data.title || data.original_name || data.original_title}
           </h1>
          <p className="w-[70%] mt-3 text-white">{data.overview.slice(0,200)}...<Link className="text-blue-500">more</Link></p>
          <p>
          <i class="ri-megaphone-fill"></i> {}

          </p>
        </div>
    )
}

export default Header