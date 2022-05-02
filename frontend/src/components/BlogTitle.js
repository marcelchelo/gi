import React from 'react'; 


const BlogTitle = (props) => {

    return(
        <div>
            <h1> {props.title}   <span> {props.date}</span></h1>
        </div>
    )

}

export default BlogTitle