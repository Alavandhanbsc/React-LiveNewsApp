
 

//import useEffect 7 use state
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import defaultimg from "../news/altImage.jpg"



//create a component
function NewsComponent (){

    


    const[data,setData]=useState([])
    const [catogory,setCatogory]=useState("business")

    //business  entertainment   general      science    sports   technology

    
    //create a variable for store api link
    
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${catogory}&apikey=61e534cb81c04dd0874c9c76f65db709`

    useEffect(()=>{

        const getnews = async()=>{
        const news = await axios.get(url)
        setData(news.data.articles)
        }

        getnews()
    },[catogory])

    
    
    
    console.log(data)

    return (
        <>
    <div className='news' >
            
            <h1>Live News 
                <select name="catogory" id="catogory" onClick={(e)=>{setCatogory(e.target.value)}}>
                    <option value=""disabled></option>
                    <option value="business" >Business</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="general">General</option>
                    <option value="science">Science</option>
                    <option value="sports">Sports</option>
                    <option value="technology">Technology</option>
                </select>
            </h1>

            <h2 className="newscatogoryheading">News From <span style={{color:"blue"}}>{catogory}</span> Catogory...</h2>
        
        

        <div>{data.map((value,index)=>(
           
           
           <div key={index} className="newscontent">
                <h2>News Title</h2>
                <p>{value.title}</p>

                {value.urlToImage?(
                    <>
                    <img src={value.urlToImage} />
                    </>
                ):(
                    <>
                     <img src={defaultimg} alt="" />
                    </>
                )}
                

                <h2>News Description</h2>
                <p>{value.description}</p>
                <a href={value.url}>Click to Know More</a>

            </div>
            ))}
        </div>

     </div>
        </>
    )
        
}



export default NewsComponent