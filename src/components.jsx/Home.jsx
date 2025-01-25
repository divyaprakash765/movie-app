import { useEffect, useState } from "react";
import axios from "../utils/axios";
import Sidenav from "./template/sidenav";
import Topnav from "./template/Topnav";
import Header from "./template/Header";
import HorizontalCard from "./template/HorizontalCards";
import DropDown from "./template/DropDown";
import Loading from "./Loading";
function Home(){
   
    document.title = "Web App | Homepage";
    const [wallpaper,setWallpaper] = useState(null);
    const [trending,setTrending] = useState(null);
    const [category,setCategory] = useState("all");

    const GetHeaderWallpaper = async () => {
        try {
          const { data } = await axios.get(`/trending/all/day`);
          let randomData = data.results[((Math.random()*data.results.length).toFixed())]
          setWallpaper(randomData);          
        } catch (error) {
          console.log(error);
        }
      };

      const GetTrending = async () => {
        try {
          const { data } = await axios.get(`/trending/${category}/day`);
          
          setTrending(data.results);          
        } catch (error) {
          console.log(error);
        }
      };

      useEffect(()=>{
        GetTrending();
        !wallpaper && GetHeaderWallpaper()
        !trending && GetTrending();
      },[category])
      

    return wallpaper && trending ?(
        <>
         <Sidenav/>
         <div className="w-[78.5%] h-full overflow-auto overflow-x-hidden">
            <Topnav/>
            <Header data = {wallpaper}/>
            <div className="p-8 flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-zinc-400">Trending</h1>
        <DropDown title = "filter" options = {['tv',"movie","all"]} func = {(e)=>setCategory(e.target.value)}/>
        </div>

          <HorizontalCard data = {trending} func = {setCategory}/>
         </div>
        </>
    ) :
    <Loading/>
}

export default Home;