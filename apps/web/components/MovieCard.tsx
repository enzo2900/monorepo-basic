import { Movie } from "@workspace/movieapi";
import Image from "next/image";

export default function MovieCard({ movie }: { movie: Movie }) {
    return (
        <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            <img
                className=""
                src={movie.primaryImage.url}
                alt="ChitChat Logo"
                width={200}
                height={200}
            />
            <div>
                <div className="text-xl font-medium text-black dark:text-white">
                    {movie.primaryTitle}
                </div>
                <p className="text-gray-500 dark:text-gray-400">{movie.plot}</p>
            </div>
        </div>
    );
}
