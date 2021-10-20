import React, { useContext, createContext, useState, useEffect } from "react";
import { database } from "../utils/firebase";

//create context
const BlogContext = createContext()

// useContext
export function useBlog(){
    return useContext(BlogContext)
}

function BlogContextProvider({children}) {
    const [currentBlogs, setCurrentBlogs] = useState()

    function addBlog(blogItem){
        const blogRef = database.ref("blogs");
        blogRef.push(blogItem)
    }

    // useEffect(() => {
    //     const blogRef = database.ref("blogs");
    //     blogRef.on("value", (snapshot) => {
    //       const blogs = snapshot.val();
    //       const blogL = [];
    //       for (let id in blogs) {
    //         blogL.push({ id, ...blogs[id] });
    //       }
    //       setCurrentBlogs(blogL);
    //     });
    //   }, []);

    const value={
        addBlog,
    }
    return (
        <BlogContext.Provider value= {value}>{children}</BlogContext.Provider>
    )
}


export default BlogContextProvider
