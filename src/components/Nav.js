import { Link } from 'react-router-dom'
const Nav = () => {
    return (
        <nav>
            {/* <div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/services/service1">Service1</a></li>
                    <li><a href="/services/service2">Service2</a></li>
                </ul>
            </div> */}
            <div>
                <ul>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/about">about</Link></li>
                    <li><Link to="/contact">contact</Link></li>
                    <li><Link to="/services">services</Link></li>
                    <li><Link to="/services/service1">service1</Link></li>
                    <li><Link to="/services/service2">Service2</Link></li>
                    <li><Link to="/cars">All Cars</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;