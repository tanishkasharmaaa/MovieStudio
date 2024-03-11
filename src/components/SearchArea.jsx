import { useState } from "react";
import useHistory from 'use-history'
export function SearchArea(){


    return(
        <form className="search">
            
            <h1>Welcome.</h1>
            <h1>Millions of movies,TV shows and  people to discover. Explore now.</h1><br/>
            <div><input 
            type="text" 
            placeholder="Search for a movie , tv show,person" 
           
           
            />
            <input  type="submit" /></div>
            
        </form>
    )
}