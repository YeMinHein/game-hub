import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

export interface platform{
    id : number,
    name: string,
    slug :string,
}
export interface Games {
    id: number;
    name: string;
    background_image:string;
    parent_platforms: {platform:platform}[];
    metacritic :number
  }
  interface FetchGamesReponse {
    count: number;
    results: Games[];
  }const useGames = ()=>{
    const [games, setGames] = useState<Games[]>([]);
    const [error, setError] = useState("");
    const [loding,Setloding] = useState(false);
    useEffect(() => {
        Setloding(true);
        const controller = new AbortController;
      apiClient
        .get<FetchGamesReponse>("/games",{signal:controller.signal})
        .then((res) =>{ setGames(res.data.results);
        Setloding(false)})
        .catch((err) => {
            if(err instanceof CanceledError) return;
            setError(err.message)
        Setloding(false)
        });
        
        return()=> controller.abort();
    },[]);

    return {games,error,loding}
} 

export default useGames;