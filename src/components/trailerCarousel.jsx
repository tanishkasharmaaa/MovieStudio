import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../components/main.css';
import { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function TrailerCarousel() {
  const [movie, setMovie] = useState([]);
  const [newMovie,setNewMovie]=useState([])
  const [option, setOption] = useState("airing_today"); // Set a default value
const[newOption,setNewOption]=useState("tv")
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 1300, min: 700 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 700, min: 500 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 500, min: 300 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 300, min: 0 },
      items: 1,
    },
  };

  const fetchData = async () => {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/tv/${option}?api_key=27b5d25206cf016f63ac2c007776afaf`);
      const data = await res.json();
      const final = data.results;
      console.log(final)
      setMovie(final)
    } catch (error) {
      console.log(error)
    }
  }

const fetchNewData=async()=>{
try {
  const res =await fetch(`https://api.themoviedb.org/3/discover/${newOption}?api_key=27b5d25206cf016f63ac2c007776afaf`);
  const data=await res.json();
  const final=data.results;
  console.log(final)
  setNewMovie(final)
} catch (error) {
  console.log(error)
}
}

  useEffect(() => {
    fetchData()
    fetchNewData()
  }, [option,newOption]); // Add option to the dependency array

  function handleChange(e) {
    const { value } = e.target;
    setOption(value);
  }

function handleNewChange(e){
  const {value}=e.target;
  setNewOption(value)
}

  return (
    <div className='main'>
    <div>
      <div style={{ display: "block", gap: "1%" }}>
        <h1 >What's Popular </h1>
        <select value={option} onChange={handleChange}>
          <option value="airing_today">Airing Today</option>
          <option value="on_the_air">On The Air</option>
          <option value="popular">Popular</option>
          <option value="top_rated">Top Rated</option>
        </select>
      </div>

      <br />
      
      <Carousel responsive={responsive} className='carousel-holder'>
        {movie.map((ele) => (
          <div className='poster' key={ele.id}>
            <img src={`https://image.tmdb.org/t/p/w500${ele.poster_path}`} alt="" /><br /><br />
            <p style={{ color: "white", fontWeight: "600" }}>{ele.original_name}</p>
          </div>
        ))}
      </Carousel></div>
<br/><br/>

<div>
      <div style={{ display: "block", gap: "1%" }}>
        <h1 >Free To Watch</h1>
        <select value={newOption} onChange={handleNewChange}>
          <option value="tv">Tv Shows</option>
          <option value="movie">Movies</option>
        </select>
      </div>

      <br />
      
      <Carousel responsive={responsive} className='carousel-holder'>
        {newMovie.map((ele) => (
          <div className='poster' key={ele.id}>
            <img src={`https://image.tmdb.org/t/p/w500${ele.poster_path}`} alt="" /><br /><br />
            <p style={{ color: "white", fontWeight: "600" }}>{ele.original_name}</p>
          </div>
        ))}
      </Carousel></div>





    </div>
  )
}

export default TrailerCarousel;
