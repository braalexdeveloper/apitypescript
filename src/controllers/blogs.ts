import { Request,Response } from "express";
import { handleHttp } from "../utils/error.handle";

const getBlog=(req:Request,res:Response)=>{
try {
    
} catch (error) {
    handleHttp(res,"Error getBlog");
}
}

const getBlogs=(req:Request,res:Response)=>{
    try {
        
    } catch (error) {
        handleHttp(res,"Error getBlogs");
    }
}

const updateBlog=(req:Request,res:Response)=>{
    try {
        
    } catch (error) {
        handleHttp(res,"Error updateBlog");
    }
}

const postBlog=(req:Request,res:Response)=>{
try {
    
} catch (error) {
    handleHttp(res,"Error postBlog");
}
}

const deleteBlog=(req:Request,res:Response)=>{
try {
    
} catch (error) {
    handleHttp(res,"Error deleteBlog")
}

    }

export { getBlog,getBlogs,updateBlog,postBlog,deleteBlog };