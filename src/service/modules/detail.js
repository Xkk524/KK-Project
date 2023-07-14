import { httpRequest } from "../request/httpRequest";
export function getDetailData (houseId) {
    return httpRequest.get("detail/infos",{
        params:{
            houseId
        }
    })
}