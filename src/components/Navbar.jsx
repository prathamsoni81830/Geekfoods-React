function Navbar (){
  return(
    <>
    <div className="navbar">
    <div className="nav1">
    <img src="https://flowbite.com/docs/images/logo.svg"></img>
    <h2 style={{marginLeft:"5px"}}>GeekFoods</h2>
    </div>
    <div className="nav2">
      <p style={{color:"blue"}}>Home</p>
      <p>Quote</p>
      <p>Resturants</p>
      <p>Foods</p>
      <p>Contact</p>
    </div>
    <div className="nav3">
      <button className="nav3">
        Get Started
      </button>
    </div>
    </div>
    </>
  )
}
export default Navbar;
