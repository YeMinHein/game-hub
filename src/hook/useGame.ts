import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";
import useData from "./useData";

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

  
  const useGames = ()=> useData<Games>('/games')
  

export default useGames;