import { MovieResult, TvResult, PersonResult } from "../types/request-types";


export const isMovie = (item: MovieResult | TvResult | PersonResult): item is MovieResult => {
    return (item as MovieResult).title !== undefined;
}

export const isTv = (item: MovieResult | TvResult | PersonResult): item is TvResult => {
    return (item as TvResult).name !== undefined;
}

export const isPerson = (item: MovieResult | TvResult | PersonResult): item is PersonResult => {
    return (item as PersonResult).known_for !== undefined;
}