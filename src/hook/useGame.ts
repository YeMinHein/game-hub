import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useGenres";
import { GameQuery } from "../App";

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

  
  const useGames = (gameQuery: GameQuery )=>
     useData<Games>('/games',{
      params:{genres:gameQuery?.genre?.id,
        platforms: gameQuery?.platform?.id,
        ordering : gameQuery.sortOrder,
        search : gameQuery.searchText
      }},
   [gameQuery])
  

export default useGames;