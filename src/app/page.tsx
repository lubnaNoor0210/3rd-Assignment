import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import about from './About/page';
import Contact from './contact/page';
const Home = () => {
    return (
        <div>
            <Navbar />
            <h2>Welcome to My Next.js App!</h2>
            <p>This is the home page.</p>
        
            <Footer />
        </div>
    );
};

export default Home;