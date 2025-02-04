import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadperson } from "../store/actions/personAction";
import { Link, Links, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import HorizontalCard from "./template/HorizontalCards";
import { removeperson } from "../store/reducers/personSlice";



function Persondetails(){

    const {pathname} = useLocation()
    const dispatch = useDispatch();
    const { id } = useParams();
    const { info} = useSelector(state => state.person)

    useEffect(() => {
       dispatch(asyncloadperson(id))
       return () => {
        dispatch(removeperson()); // This clears the person details
     };
    }, [dispatch, id]);

    const navigate = useNavigate();
    console.log(info);
    
    return info ? (
        <div className="px-[15%] w-screen bg-[#1F1E24] h-[150vh]">
            <nav className="w-full h-[10vh] text-zinc-100 flex gap-10 items-center text-xl">
            <Link 
            onClick={() => navigate(-1)} 
            className="ri-arrow-left-line hover:text-[#6556CD] ml-4 cursor-pointer">
            </Link>
              </nav>

              <div className="w-full flex flex-col">
                {/* Part 2 left poster and details */}
                <div className="w-[20%]">

                    <img
            className="h-[40vh] object-cover rounded shadow-[8px_7px_38px_2px_rgba(0,0,0,0.5)]"
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
            alt=""
             />
             <hr className="text-2xl mt-5 mb-5 bg-zinc-500"/>
             {/* Social media Links */}

            

             <div className="text-2xl text-white flex gap-x-5">
            <a target = "_blank" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i class="ri-earth-fill"></i></a>
            <a target = "_blank" href={`https://www.facebook.com/${info.externalid.facebook_id}`}><i class="ri-facebook-circle-fill"></i></a>
            <a target = "_blank" href={`https://www.instagram.com/${info.externalid.instagram_id}`}><i class="ri-instagram-fill"></i></a>
            <a target = "_blank" href={`https://www.twitter.com/${info.externalid.twitter_id}`}><i class="ri-twitter-x-fill"></i></a>
             </div>

             {/* Personal Information */}

             <h1 className="text-2xl text-zinc-400 font-semibold my-3">Person Info</h1>


             <h1 className="text-xl text-zinc-400 font-semibold">Known For</h1>
             <h1 className="text-xl text-zinc-400">{info.detail.known_for_department}</h1>

             <h1 className="text-xl text-zinc-400 font-semibold mt-3">Gender</h1>
             <h1 className="text-xl text-zinc-400">{info.detail.gender === 2 ? "Male" : "Female"}</h1>

             <h1 className="text-xl text-zinc-400 font-semibold mt-3">Birthday</h1>
             <h1 className="text-xl text-zinc-400">{info.detail.birthday}</h1>

             <h1 className="text-xl text-zinc-400 font-semibold mt-3">Place of Birth</h1>
             <h1 className="text-xl text-zinc-400">{info.detail.place_of_birth}</h1>

             <h1 className="text-xl text-zinc-400 font-semibold mt-3">Also Known As</h1>
             <h1 className="text-xl text-zinc-400">{info.detail.also_known_as.join(", ")}</h1>



             
                </div>


                {/* Part 3 right Details and Information */}

                <div className="w-[80%]">
                  
                

                </div>

              </div>

            {/* 
              */}  
        </div>
    ) : <Loading/>
}

export default Persondetails;