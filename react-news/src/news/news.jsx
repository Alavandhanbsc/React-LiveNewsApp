
 

//import useEffect 7 use state
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
//import default images
//import defaultimage from 'react-news\src\news\altImage.jpg'


//create a component
function NewsComponent (){

    


    const[data,setData]=useState([])
    
    //create a variable for store api link
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apikey=61e534cb81c04dd0874c9c76f65db709`

    useEffect(()=>{

        const getnews = async()=>{
        const news = await axios.get(url)
        setData(news.data.articles)
        }

        getnews()
    },[])

    
    
    
    console.log(data)

    return (
        <>
    <div className='news' >
            
            <h1>Live News </h1>
        
        

        <div>{data.map((value,index)=>(
           
           <div key={index} className="newscontent">
                <h2>News Title</h2>
                <h5>{value.title}</h5>

                
                <img src={value.urlToImage} />

                <h2>News Description</h2>
                <h5>{value.description}</h5>
                <a href={value.url}>Click to Know More</a>

            </div>
            ))}
        </div>

     </div>
        </>
    )
        
}



export default NewsComponent