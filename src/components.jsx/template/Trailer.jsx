import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NotFound from "../Notfound";


function Trailer(){
   const {pathname} = useLocation()
   const category = pathname.includes("movie") ? "movie" : "tv";
   const ytvideo = useSelector((state)=> state[category].info.videos);
   const navigate = useNavigate();

    return (
        <div className="absolute top-0 left-0 z-100 bg-[rgba(0,0,0,.9)] w-screen h-[95vh] flex items-center justify-center">

           
             <Link 
            onClick={() => navigate(-1)} 
            className="absolute ri-close-fill hover:text-[#6556CD] ml-4 cursor-pointer text-3xl text-white right-[50%] border rounded-lg border-2 top-[5%]">
            </Link>
            {ytvideo ? <ReactPlayer
            controls
            height = {600}
            width = {1500}
            url = {`https://www.youtube.com/watch?v=${ytvideo.key}`}/>: <NotFound/>}
            
        </div>
    )
}


export default Trailer;