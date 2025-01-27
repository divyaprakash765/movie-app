import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadmovie } from "../store/actions/movieAction";
import { Link, Links, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import HorizontalCard from "./template/HorizontalCards";
import { removemovie } from "../store/reducers/movieSlice";


function Moviedetails() {
    const {pathname} = useLocation()
    const dispatch = useDispatch();
    const { id } = useParams();
    const { info} = useSelector(state => state.movie)

    useEffect(() => {
       dispatch(asyncloadmovie(id))
       return () => {
        dispatch(removemovie()); // This clears the movie details
     };
    }, [dispatch, id]);

    const navigate = useNavigate();

    return info ? (
        <div 
        style = {{
            background: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.7),rgba(0,0,0,0.9)),url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
            backgroundPosition: 'top',
            backgroundSize: 'cover',
            backgroundRepeat: "no-repeat"
            
        }}
        className="w-screen h-[180vh] px-[10%]">
        {/* part1 - nav */}
            <nav className="w-full h-[10vh] text-zinc-100 flex gap-10 items-center text-xl">
            <Link 
            onClick={() => navigate(-1)} 
            className="ri-arrow-left-line hover:text-[#6556CD] ml-4 cursor-pointer">
            </Link>
            <a target = "_blank" href={info.detail.homepage}><i class="ri-external-link-fill"></i></a>
            <a target = "_blank" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i class="ri-earth-fill"></i></a>
            <a target = "_blank" href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}>imdb</a>
            </nav>

            {/* part2 - poster and details */}
           
         <div className="w-full">
            <div className="flex">
         <img
    className="h-[55vh] object-cover rounded shadow-[8px_7px_38px_2px_rgba(0,0,0,0.5)]"
    src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path || info.detail.backdrop_path}`}
    alt=""
         />

         <div className="content ml-[5%]">
            <h1 className="text-5xl font-black text-white">{
                info.detail.name || info.detail.title || info.detail.original_name || info.detail.original_title
                }
                <small className="text-2xl cfont-bold text-zinc-400 ">({info.detail.release_date.split("-")[0]})</small>
                </h1>

                <div className="mt-1 mb-5 flex text-white items-center gap-x-5">
               <span
               className="bg-yellow-600 text-white w-[5vh] h-[5vh] text-md font-semibold rounded-full flex justify-center items-center"
                            >
                {(info.detail.vote_average * 10).toFixed()}<sup>%</sup>
               </span>
               <h1 className="font-semibold text-2xl w-[60px] leading-6">User score</h1>
               <h1 className="">{info.detail.release_date}</h1>
               <h1>{info.detail.genres.map((g)=>g.name).join(",")}</h1>
               <h1>{info.detail.runtime} min</h1>
               </div>
                
                <div className="text-sm">
               <h1 className="text-xl italic text-zinc-200">
                {info.detail.tagline}</h1>

                         <h1 className="mb-3 text-xl mt-3 font-semibold text-white">
                overview</h1>
                <p className="text-white">{info.detail.overview}</p>

                <h1 className="mb-2 text-xl mt-5 font-semibold text-white">
                Movie Translated</h1>
                <p className="text-white mb-10">{info.translations.join(", ")}</p>

                <Link className="mt-5 py-5 px-7 bg-[#6556CD] rounded-lg" to = {`${pathname}/trailer`}>
                <i className="text-xl ri-play-fill"></i>
                Play Trailer</Link>
         </div>
         </div>
        
</div>
         <div className="mt-5">

            <div className="flex flex-col gap-8">

       
       {info.watchproviders &&
         <div className="flex gap-5 items-center">
            <h1 className="text-zinc-100 font-semibold text-md">Available on Platform</h1>
            {info.watchproviders && 
            info.watchproviders.flatrate &&
            info.watchproviders.flatrate.map((w,index) => {
                return( 
                    <img
                    title = {w.provider_name}
                    className="h-[5vh] w-[5vh] bg-green-500 object-cover rounded shadow-[8px_7px_38px_2px_rgba(0,0,0,0.5)]"
                    src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                    alt=""
                    />
    )})
            }
        </div>
}

        {info.watchproviders &&
         <div className="flex gap-5 items-center">
         <h1 className="text-zinc-100 font-semibold text-md mr-7">Available on Rent</h1>
         {info.watchproviders && 
            info.watchproviders.rent &&
            info.watchproviders.rent.map((w,index) => {
                return( 
                    <img
                    title = {w.provider_name}
                    className="h-[5vh] w-[5vh] bg-green-500 object-cover rounded shadow-[8px_7px_38px_2px_rgba(0,0,0,0.5)]"
                    src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                    alt=""
                    />
    )})
            }

</div>
}

{info.watchproviders &&
<div className="flex gap-5 items-center">
<h1 className="text-zinc-100 font-semibold text-md mr-8">Available on Buy</h1>

         {info.watchproviders && 
            info.watchproviders.buy &&
            info.watchproviders.buy.map((w,index) => {
                return( 
                    <img
                    title = {w.provider_name}
                    className="h-[5vh] w-[5vh] bg-green-500 object-cover rounded shadow-[8px_7px_38px_2px_rgba(0,0,0,0.5)]"
                    src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                    alt=""
                    />
    )})
            }

</div>
}
</div>
           
         </div>
         </div>
         
            {/* Recommendation & similarity*/}

            <h1 className="text-3xl mt-10 font-bold text-white">
                <hr className="text-2xl bg-zinc-500"/>
                Recommendations & Similar stuff</h1>

            <HorizontalCard
    data={
        (info?.recommendations?.length ? info.recommendations : info?.similar) || []
    }
/>

    <Outlet/>
        </div>
    ) : <Loading/>
}

export default Moviedetails;
