import { useEffect, useState } from "react";
import axios from "../utils/axios";
import Sidenav from "./template/sidenav";
import Topnav from "./template/Topnav";
import Header from "./template/Header";

function Home(){
   
    document.title = "Web App | Homepage";
    const [wallpaper,setWallpaper] = useState(null);

    const GetHeaderWallpaper = async () => {
        try {
          const { data } = await axios.get(`/trending/all/day`);
          let randomData = data.results[((Math.random()*data.results.length).toFixed())]
          setWallpaper(randomData);          
        } catch (error) {
          console.log(error);
        }
      };

      useEffect(()=>{
        !wallpaper && GetHeaderWallpaper()
      },[])

    return wallpaper ?(
        <>
         <Sidenav/>
         <div className="w-[78.5%] h-full">
            <Topnav/>
            <Header data = {wallpaper}/>
         </div>
        </>
    ) :
    <h1>Loading...</h1>
}

export default Home;