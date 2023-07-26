import { Request,Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { insertCar, getCars, getCar, updateCar, deleteCar } from "../services/item.service";

const getItem=async(req:Request,res:Response)=>{
try {
    const response=await getCar(req.params.id);
    res.send(response);
} catch (error) {
    handleHttp(res,"Error getItem");
}
}

const getItems=async(req:Request,res:Response)=>{
    try {
        const responseCars=await getCars();
        res.send(responseCars)
    } catch (error) {
        handleHttp(res,"Error getItems");
    }
}

const updateItem=async(req:Request,res:Response)=>{
    try {
        const response=await updateCar(req.params.id,req.body);
        res.send(response);
    } catch (error) {
        handleHttp(res,"Error updateItem");
    }
}

const postItem=async(req:Request,res:Response)=>{
try {
    const responseItem=await insertCar(req.body);
    res.send(responseItem);
} catch (error) {
    handleHttp(res,"Error postItem",error);
}
}

const deleteItem=async(req:Request,res:Response)=>{
try {
    const response=await deleteCar(req.params.id);
        res.send(response);
} catch (error) {
    handleHttp(res,"Error deleteItem")
}

    }

export { getItem,getItems,updateItem,postItem,deleteItem };