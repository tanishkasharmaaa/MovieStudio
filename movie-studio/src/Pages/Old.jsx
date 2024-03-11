import { useEffect, useState } from "react";
import { Navbar } from '../components/Navbar';
import { debounce } from "lodash";
import Footer from '../components/footer';

export function TopRates() {
  const [movie, setMovie] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [hasMorePages, setHasMorePages] = useState(true);

  const fetchMovie = async (page, query) => {
    try {
      let url = `https://api.themoviedb.org/3/movie/top_rated?api_key=27b5d25206cf016f63ac2c007776afaf&language=en-US&page=${page}`;
      
      if (query) {
        url = `https://api.themoviedb.org/3/search/movie?api_key=27b5d25206cf016f63ac2c007776afaf&language=en-US&page=${page}&query=${query}`;
      }

      const res = await fetch(url);
      const data = await res.json();
      const final = data.results;

      if (final.length === 0) {
        setHasMorePages(false);
      } else {
        setMovie(final);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const debouncedFetchMovie = debounce(fetchMovie, 500);

  useEffect(() => {
    debouncedFetchMovie(currentPage, searchQuery);
  }, [currentPage, searchQuery, debouncedFetchMovie]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setHasMorePages(true); // Reset hasMorePages when going back
    }
  }

  const handleViewMore = () => {
    if (hasMorePages) {
      handleNextPage();
    }
  }

  const handleSearch = (e) => {
    setSearchQuery(e?.target?.value);
    setCurrentPage(1); // Reset page when starting a new search
    setHasMorePages(true); // Reset hasMorePages
  }

  return (
    <div>
      <Navbar />
      <form className="Search-holder">
        <input onChange={handleSearch} value={searchQuery} type="text" className="Search-Input" placeholder="Search movies here"/>
      </form>

      <div className="popular">
        {movie.map((ele) => (
          <div className="popular-item" key={ele.id}>
            <div className="movie_image"><img src={`https://image.tmdb.org/t/p/w500${ele.poster_path}`} alt="" /></div>
            <div>
              <p>{ele.original_title ? ele.original_title : ele.title}</p>
              <p>{ele.first_air_date ? ele.first_air_date : ele.release_date}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>View Less</button>
        <button onClick={handleViewMore} disabled={!hasMorePages}>View More</button>
      </div>
      <Footer/>
    </div>
  );
}
