import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";
interface Genre{
    id :number,
    name:string
}

interface FetchGenresReponse{
    count: number,
    results : Genre[]
}
const useGenres = ()=>{
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [loding,Setloding] = useState(false);
    useEffect(() => {
        Setloding(true);
        const controller = new AbortController;
      apiClient
        .get<FetchGenresReponse>("/genres",{signal:controller.signal})
        .then((res) =>{ setGenres(res.data.results);
        Setloding(false)})
        .catch((err) => {
             if(err instanceof CanceledError) return; 
            setError(err.message)
        Setloding(false)
        });
        
        return()=> controller.abort();
    },[]);

    return {genres,error,loding}
}

export default useGenres;
