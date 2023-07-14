import { httpRequest } from "../request/httpRequest";

export function getHomeHotSuggest(){
    return httpRequest.get("home/hotSuggests")
}
export function getHomeCategories(){
    return httpRequest.get("home/categories")
}
export function getHomeHotHouse(currentPage){
    return httpRequest.get("home/houselist",{
        params:{
            page: currentPage,
        }
    })
}