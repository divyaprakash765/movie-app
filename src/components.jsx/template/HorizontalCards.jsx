import { Link } from "react-router-dom"
import DropDown from "./DropDown"


function HorizontalCard({data}){
    return(
        

         <div className="w-[100%] h-[70vh] flex overflow-y-hidden p-5">
            
            {data.map((d,i)=>(
              <Link to = {`/${d.media_type}/details/${d.id}`} key = {i} className="min-w-[20%] mr-5 bg-zinc-900 rounded-md border border-zinc-700 mr-5">
                <img
                className="w-full h-[55%] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original${d.backdrop_path || d.poster_path}`} 
                alt="" /> 
                <div className="h-[45%]">
              <h1 className="w-[100%] text-xl font-black text-white pl-[5%] pt-[5%]">
            {d.name || d.title || d.original_name || d.original_title}
           </h1>
          <p className="w-[100%] text-white px-[5%]">{d.overview.slice(0,60)}...<Link className="text-blue-500">more</Link></p>
          </div>
              </Link>
            ))}
        
         </div>
    )
}
export default HorizontalCard