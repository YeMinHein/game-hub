import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useGenres";

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

  
  const useGames = (selectGenre: Genre | 
    null,selectorPlatform:platform|null)=>
     useData<Games>('/games',{params:{genres:selectGenre?.id,platforms: selectorPlatform?.id}},
   [selectGenre?.id,selectorPlatform?.id])
  

export default useGames;