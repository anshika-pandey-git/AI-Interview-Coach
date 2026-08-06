import"./Navbar.css";
function Navbar(){
    return(
        <nav className="navbar">
            <div className='logo'>
         <h2> AI Interview Coach</h2>
            </div>

            <div className="nav-links"> 
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">About</a>
        <a href="#">Login</a>

            </div>
           
        </nav>
    );
}
export default Navbar;
