import Link from 'next/link';

const Navbar = () => {
    return (
        <nav style={{ padding: '1rem', backgroundColor: '#338', color: '#fff' }}>
            <h1>My App</h1>
            <Link href="/" style={{ marginRight: '1rem', color: '#fff' }}>Home</Link>
            <Link href="/contact" style={{ color: '#fff' }}>Contact</Link>
            <br></br>
            <Link href="/About">About</Link>
            
        </nav>
    );
};

export default Navbar;