export interface Response {
    status: boolean;
    data: any;
    message?: string;
}

export interface UrlType {
    longUrl?: string;
    shortUrl?: string;
    date?: string;
    id?: string;
    error?: string;
}