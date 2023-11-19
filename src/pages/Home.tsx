import { useEffect } from 'react';
// import CTA from "../components/home/CTA";
import Hero from '../components/home/Hero';
import Projects from '../components/home/Projects';
import Skills from '../components/home/Skils';
import Contact from './Contact';

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Hero />
            <div className="mt-20 space-y-32">
                <Projects />
                <Skills />
            </div>

            {/* <CTA /> */}

            <div className="md:overflow-hidden w-full mt-48 flex md:justify-end mb-[-80px]">
                <h2
                    className="landingSectionTitle2"
                    style={{ fontSize: '2.5rem' }}
                >
                    Would you like to chat?
                </h2>
            </div>
            <div className="w-full mt-20 mb-12 relative">
                <Contact />
            </div>
        </div>
    );
}

export default Home;
