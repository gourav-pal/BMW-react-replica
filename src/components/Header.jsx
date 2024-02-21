import logo from '../assets/logo.svg'

const Header= () =>{
    return(
        <header>
            <nav>
                <div className="nav-container">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Career</li>
                </ul>
                </div>
                
            </nav>
        </header>
    )
}
export default Header;