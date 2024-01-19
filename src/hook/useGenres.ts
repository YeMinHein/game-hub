import genres from "../data/genres";
export interface Genre{
    id :number,
    name:string,
    image_background :string
}

const useGenres = ()=>({data: genres , loding:false, error : null})

//useData<Genre>("/genres")

export default useGenres;
