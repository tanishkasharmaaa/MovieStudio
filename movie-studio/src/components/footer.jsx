import mylogo from '../Assets/mylogo.png.png'
import '../components/footer.css'
function Footer(){
    return(
        <div className='footer'>
      <div><img src={mylogo} alt="" /></div>
      <div>
        <h2>THE BASICS</h2>
        <p>About TMDB </p>
        <p>Contact Us</p>
        <p>Support Foru...</p>
        <p>API</p>
        <p>System Status</p>
      </div>
      <div>
        <h2>GET INVOLVED</h2>
        <p>Contribution Bi...</p>
        <p>Add New Movies</p>
        <p>Add New Tv Show</p>
      </div>
      <div>
        <h2>COMMUNITY</h2>
        <p>Guidelines</p>
        <p>Discussion</p>
        <p>Leaderboard</p>
      </div>
     
        </div>
    )
}
export default Footer;