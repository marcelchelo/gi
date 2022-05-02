import React from 'react'; 
import BlogTitle from '../components/BlogTitle.js'
import BlogPost from "../components/BlogPost.js"
const Blog = () =>{
    return(
       <div>
           <div>
                 <BlogTitle title="Dragon Boat" date="05/01/2022"/>
                 <BlogPost/>

           </div>
            <div>
                 <BlogTitle title="Running" date="5/2/2022"/>   
                 <BlogPost/>


            </div>

           
        </div>
    )

}

export default Blog