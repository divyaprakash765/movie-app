
import { Link } from "react-router-dom";

function Sidenav(){


    return(
        <div className="w-[21.5%] h-full border-r border-zinc-200 p-10">
            <h1 className="text-2xl text-white font-bold">
            <i className="ri-tv-fill text-[#6556CD] mr-1"></i>
                <span >Database</span>
            </h1>
            <nav className="flex flex-col text-zinc-400 text-xl gap-3">
            <h1 className="text-white font-semibold text-xl mt-5 mb-5">New Feeds</h1>
            
            <Link className="hover:bg-[#6556CD] p-1 hover:text-white rounded-lg duration-300">
            <i className="ri-fire-fill mr-1"></i>
            Trending
            </Link>
            <Link className="hover:bg-[#6556CD] p-1 hover:text-white rounded-lg duration-300">
            <i className="ri-bard-fill mr-2"></i>
            Popular
            </Link>
            <Link className="hover:bg-[#6556CD] p-1 hover:text-white rounded-lg duration-300">
            <i className="ri-movie-2-fill mr-2"></i>
            Movies
            </Link>
            <Link className="hover:bg-[#6556CD] p-1 hover:text-white rounded-lg duration-300">
            <i className="ri-tv-2-fill mr-2"></i>
            Tv shows
            </Link>
            <Link className="hover:bg-[#6556CD] p-1 hover:text-white rounded-lg duration-300 mb-5">
            <i className="ri-team-fill mr-2"></i>
            People
            </Link>
            </nav>

            <hr />

            <nav className="flex flex-col text-zinc-400 text-xl gap-3">
            <h1 className="text-white font-semibold text-xl mt-5 mb-5">
                Website Information
            </h1>
            
            <Link className="hover:bg-[#6556CD] p-1 hover:text-white rounded-lg duration-300">
            <i className="ri-information-fill mr-2"></i>
            About
            </Link>
            <Link className="hover:bg-[#6556CD] p-1 hover:text-white rounded-lg duration-300">
            <i className="ri-phone-fill mr-2" ></i>
            Contact Us 
            </Link>
           
            </nav>
         </div>
    )
}

export default Sidenav;