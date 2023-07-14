import { httpRequest } from "../request/httpRequest";
export function getAllCity () {
    return httpRequest.get('city/all')
}