export type Characters = {
    results: Character[]
};

export type Character = {
    id: number,
    name: string,
    species: string,
    type: string,
    gender: string,
    origin: locationOrigin,
    location: locationOrigin,
    image: string
    episode: string[],
    url: string,
    created: string
};

type locationOrigin = {
    name: string,
    url: string
}