import Image from "next/image"
import { useRecoilState } from "recoil"
import { modalState, movieState } from "../atoms/modalAtom"
import { Movie } from "../typings"

interface Props {
    movie: Movie
}

function Thumbnail({movie} : Props) {
    
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)

  const [showModal, setShowModal] = useRecoilState(modalState)
    const links = ["esGtYJE3uoRuwA7o4ST2kGDhmeO.jpg", "vkojfC1xykW9XBCyDDCMYeHqLEf.jpg", "39EQTf94Lckdo8yzS1CdWQSgmen.jpg", "sqLNgWTMBhLBRY26SwwfWcSI5qq.jpg", "4rsomWxlqnHt3muGYK06auhOib6.jpg", "rk860hTM0kpu8oNhQkpnDv320rH.jpg", "mMtUybQ6hL24FXo0F3Z4j2KG7kZ.jpg"]
    let p = Math.floor(Math.random() * links.length)

    if (movie.backdrop_path == null && movie.poster_path == null){
        return (
            <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
                    < Image
                        src={`https://image.tmdb.org/t/p/w500/${links[p]}`}
                        className="rounded-sm object-cover md:rounded"
                        layout="fill"
                    />
            </div>
        ) 
    }

    else{
        return (
            <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
                
                    <Image 
                        onClick={() => {
            setCurrentMovie(movie)
            setShowModal(true)
          }}
                        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path
                            }`}
                        className="rounded-sm object-cover md:rounded"
                        
                        layout="fill"
                    />



            </div>
        )
    }
}

export default Thumbnail