const BASE_URL = "https://api.imdbapi.dev";

export type Movie = {
    id: string;
    primaryTitle: string;
    originalTitle: string;
    primaryImage: { url: string };
    startYear: number;
    endYear: number;
    plot: string;
    type: string;
};

export type NamedAPIResource = { name: string; url: string };

export type Paginated<T> = {
    count: number; // Nombre total d'éléments
    next: string | null; // URL de la page suivante (null si dernière page)
    previous: string | null; // URL de la page précédente (null si première page)
    results: T[]; // Liste des éléments de la page actuelle
};

export type TitleResult = {
    titles: Movie[];
};
async function get<T>(path: string): Promise<T> {
    // Simulation d'un délai réseau pour les démonstrations pédagogiques
    await new Promise((resolve) => setTimeout(resolve, 300));

    const res = await fetch(`${BASE_URL}${path}`);
    // Vérification du statut HTTP
    if (!res.ok) {
        console.log(`${BASE_URL}${path}`);
        throw new Error(`MovieAPI error ${res.status}: ${res.statusText}`);
    }
    // Parsing et typage de la réponse JSON
    return res.json() as Promise<T>;
}

export const FilmAPI = {
    async getMoviesTitles() {
        return await get<TitleResult>("/titles");
    },
    async getMovieWithName(name: string, limit: number = 50) {
        return await get<TitleResult>(
            "/search/titles?query=" + name + "&limit=" + limit
        );
    },
};

export type FilmAPIClient = typeof FilmAPI;
