import { Inter } from '@next/font/google';
import { Vector } from 'xyzt';
import { DebugGrid } from '../components/DebugGrid/DebugGrid';
import { TiledBackground } from '../components/TiledBackground/TiledBackground';
import { AppHead } from '../sections/00-AppHead/AppHead';
import { CaveSection } from '../sections/01-Cave/Cave';
import { WelcomeSection } from '../sections/10-Welcome/Welcome';
import { PavolHejnySection } from '../sections/20-PavolHejny/PavolHejny';
import { ServicesSection } from '../sections/30-Services/Services';
import { ReferencesSection } from '../sections/40-References/References';
import { MyProjectsSection } from '../sections/50-MyProjects/MyProjects';
import { ContactSection } from '../sections/70-Contact/Contact';
import { FooterSection } from '../sections/90-Footer/Footer';
import styles from './index.module.css';

// TODO: What is this - inter/Inter
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <>
            <AppHead />

            <div className={styles.page}>
                <DebugGrid size={new Vector(3, 5)} />

                <header>
                    <CaveSection />
                </header>

                <div className={styles.background}>
                    <TiledBackground />
                </div>

                <main>
                    <WelcomeSection  variant="FULL" />
                    <PavolHejnySection variant="SHORT" />
                    <ServicesSection />
                    {/* TODO: <PresentationSection /> */}
                    {/* TODO: <PrototypingSection /> */}
                    {/* TODO: <TechnologiesSection /> */}
                    <ReferencesSection />
                    <MyProjectsSection />
                    {/* TODO: Finish or remove <HackingSection /> */}
                    <ContactSection variant="SHORT" />
                </main>

                <footer>
                    <FooterSection />
                </footer>
            </div>
        </>
    );
}

/**
 * TODO: !! CS/EN switch
 */
