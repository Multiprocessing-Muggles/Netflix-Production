import Image from "next/image"
import { useEffect, useState } from 'react';
import { baseUrl } from "../constants/movie";
import { Movie } from "../typings"
import { FaPlay } from "react-icons/fa"
import { InformationCircleIcon } from "@heroicons/react/solid";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modalAtom";


interface Props {
    netflixOriginals : Movie[]
}

function Banner( { netflixOriginals }: Props) {

    const [movie, setMovie] = useState<Movie | null>(null)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
  const [showModal, setShowModal] = useRecoilState(modalState)

    useEffect(() => {
        //Bug Fixed
        
        let k = Math.floor(Math.random() * netflixOriginals.length)
        while(
               netflixOriginals[k].original_name == "Pil's Adventures" || netflixOriginals[k].title == "Pil's Adventures" || netflixOriginals[k].name == "Pil's Adventures"
            || netflixOriginals[k].original_name == "Gold" || netflixOriginals[k].title == "Gold" || netflixOriginals[k].name == "Gold"
            || netflixOriginals[k].original_name == "Encanto" || netflixOriginals[k].title == "Encanto" || netflixOriginals[k].name == "Encanto"
            || netflixOriginals[k].original_name == "My Hero Academia: World Heroes' Mission" || netflixOriginals[k].title == "My Hero Academia: World Heroes' Mission" || netflixOriginals[k].name == "My Hero Academia: World Heroes' Mission"
        )
        {
            k = Math.floor(Math.random() * netflixOriginals.length)
        }
        console.log(k)
        setMovie(netflixOriginals[k])
    },[netflixOriginals])

    return (
        <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">

            <div className="absolute top-0 left-0 h-[95vh] w-screen -z-10 pt-10">
                <Image src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} 
                layout="fill"
                objectFit="cover"
                />
            </div>

            <h1 className="text-2xl font-bold md:txet-4xl lg:text-5xl">{movie?.title || movie?.name || movie?.original_name}</h1>

            <p className="max-w-xs text-shadow-md text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">{movie?.overview}</p>

            <div className="flex space-x-3">
                <button className="bannerButton bg-white text-black" onClick={() => {
            setCurrentMovie(movie)
            setShowModal(true)
          }}>
                    <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7"/>
                    Play</button>
                <button className="bannerButton bg-[gray]/70" onClick={() => {
            setCurrentMovie(movie)
            setShowModal(true)
          }}>More Info <InformationCircleIcon 
                className="h-5 w-5 md:h-8 md:w-8" /></button>
            </div>
            
        </div>
    )
}

export default Banner