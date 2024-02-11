import { Image } from "./Image";

export type Featured = {
    title?: string,
    id?: string,
    cover?: Image,
    summary?: string[],
    priority?: number,
    isFeatured?: boolean,
}