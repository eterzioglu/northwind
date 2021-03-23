import { ResponseModel } from "./responseModel";

export interface ListresponseModel<T> extends ResponseModel{
    data:T[];
}