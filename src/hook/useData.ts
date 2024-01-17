import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { AxiosRequestConfig, CanceledError } from "axios";


interface FetchReponse<T>{
    count: number,
    results : T[]
}
const useData =<T> (endpoint: string,requestConfig?: AxiosRequestConfig,deps?: any[])=>{
    const [data, setGenres] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [loding,Setloding] = useState(false);
    useEffect(() => {
        Setloding(true);
        const controller = new AbortController;
      apiClient
        .get<FetchReponse<T>>(endpoint,{signal:controller.signal,...requestConfig})
        .then((res) =>{ setGenres(res.data.results);
        Setloding(false)})
        .catch((err) => {
             if(err instanceof CanceledError) return; 
            setError(err.message)
        Setloding(false)
        });
        
        return()=> controller.abort();
    },deps?[...deps]: []);

    return {data,error,loding}
}

export default useData;
