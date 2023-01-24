import { get, post } from "../config/apiAxios";
import { URL } from "../config/endpoints";
import { Response, UrlType } from "../models/urlModel";

export const createShortUrl = async (
    data: UrlType
): Promise<Response> => {
    const res = await post(
        URL.CREATE_SHORT_URL,
        data,

    );
    return res;
};

export const getAllUrls = async (
): Promise<Response> => {
    const res = await get(
        URL.GET_ALL_URLS
    );
    return res;
};