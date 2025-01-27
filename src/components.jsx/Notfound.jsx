import { Link, useNavigate } from "react-router-dom"
import Notfound from "/404.gif"

function NotFound(){
    const navigate = useNavigate()

      return(
        <div className="w-screen h-screen flex justify-center items-center bg-black">
          
        <img src={Notfound} alt="" className="h-[50%] object-cover"/>
        </div>
      )
}

export default NotFound