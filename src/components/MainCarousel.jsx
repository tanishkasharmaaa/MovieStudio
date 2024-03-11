import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../components/main.css';
import { useEffect, useState } from 'react';

function MainCarousel() {
  const [movie, setMovie] = useState([]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 1200, min: 700 },
      items: 4,
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
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=27b5d25206cf016f63ac2c007776afaf`
      );
      const data = await res.json();
      const final = data.results;
      console.log(final);
      setMovie(final);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='main'>
      <h1>Trending Shows Of The Week</h1>
      <br />
      <Carousel responsive={responsive} className='carousel-holder'>
        {movie.map((ele) => (
          <div className='poster' key={ele.id}>
            <img src={`https://image.tmdb.org/t/p/w500${ele.poster_path}`} alt="" />
            <p style={{ color: "white", fontWeight: "600" }}>{ele.title}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default MainCarousel;
