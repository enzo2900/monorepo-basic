import { Button } from "@workspace/ui/components/button";
import { FilmAPI, TitleResult, Movie } from "@workspace/movieapi";
import { use } from "react";
import MovieCard from "@/components/MovieCard";

export default function Page() {
    const titles: TitleResult = use(FilmAPI.getMoviesTitles());
    console.log(use(FilmAPI.getMovieWithName("Stranger", 10)));
    console.log(titles);
    const mapElements = titles.titles.map((movie: Movie) => (
        <MovieCard key={movie.id} movie={movie} />
    ));
    return (
        <div className="flex items-center justify-center min-h-svh">
            <ul>{mapElements}</ul>
        </div>
    );
}
