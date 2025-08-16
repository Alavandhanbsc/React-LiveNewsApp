//import useState and useEffect
import { useState,useEffect } from "react";

 import 'bootstrap/dist/css/bootstrap.min.css';

//import axios
import axios from "axios";

function Newscomponent2 (){

    const [final,setFinal]=useState([])

    //Api key
    const apikey = "61e534cb81c04dd0874c9c76f65db709"
    const URL = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apikey}`

    useEffect(()=>{

        const getfunction = async()=>{
            const getnews = await axios.get(URL) 
            setFinal(getnews.data.articles)
        }
        getfunction()
    },[])

    console.log(final)
    return(
        <>
        <div>
        <h1 className="p-4 border-bottom border-primary bg-info text-center">News Page Designed By Bootstrap</h1>

            {final.map((value,index)=>(

                

                <div  key={index} style={{width:"20%"}} className="card p-4 m-4 border border-primary bg-light d-inline-block">
                    <img src={value.urlToImage} alt="" style={{width:"100%"}}/>
                    <h4>Title</h4>
                    <h5>{value.title}</h5>
                    <br />
                    <h3>description</h3>
                    <h5>{value.description}</h5>     
                </div>
                    
            
        ))}

        </div>
        </>

    )
}

export default Newscomponent2