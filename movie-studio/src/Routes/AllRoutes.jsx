import {Routes,Route} from 'react-router-dom'
import { Home } from '../Pages/Home'
import { TopRates } from '../Pages/Old'
import { Popular } from '../Pages/Popular'
import { Upcoming } from '../Pages/Upcoming';
import { SearchList } from '../Pages/SearchList';
export function AllRoutes(){
    return(
        <Routes >
          
           <Route  path='/' element={<Home/>}/>
           <Route  path='/toprated' element={<TopRates/>}/>
           <Route  path='/popular' element={<Popular/>}/>
           <Route  path='/upcoming' element={<Upcoming/>}/>
           <Route path='/results' element={<SearchList/>}/>
           <Route/>
        </Routes>
    )
}
