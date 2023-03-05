import { Inter } from '@next/font/google';
import Link from 'next/link';
import { Vector } from 'xyzt';
import { DebugGrid } from '../components/DebugGrid/DebugGrid';
import { Section } from '../components/Section/Section';
import { TiledBackground } from '../components/TiledBackground/TiledBackground';
import { AppHead } from '../sections/AppHead/AppHead';
import { CaveSection } from '../sections/Cave/Cave';
import { FooterSection } from '../sections/Footer/Footer';
import { WelcomeSection } from '../sections/Welcome/Welcome';
import styles from './index.module.css';

// TODO: What is this - inter/Inter
const inter = Inter({ subsets: ['latin'] });

export default function Midjourney() {
    return (
        <>
            <AppHead subtitle="Gallery" />

            <div className={styles.page}>
                <DebugGrid size={new Vector(5, 5)} />
                <header>
                    {/* TODO: Do some system for multiple pages */}
                    <CaveSection />
                </header>
                <div className={styles.background}>
                    {/* TODO: Do some system for multiple pages */}
                    <TiledBackground />
                </div>
                <main>
                    <WelcomeSection /> {/* <- TODO: Children here */}
                    <Section>
                        <h2>Nothing found here</h2>
                        {/* TODO: Some better texting <p>Sorry for that</p> */}
                        <Link href={'/'}>
                            <button>To the homepage</button>
                        </Link>
                    </Section>
                </main>
                <footer>
                    <FooterSection />
                </footer>
            </div>
        </>
    );
}

/**
 * TODO: Make some menu
 */
