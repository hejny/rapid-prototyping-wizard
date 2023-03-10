import { Inter } from '@next/font/google';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Vector } from 'xyzt';
import { DebugGrid } from '../components/DebugGrid/DebugGrid';
import { TiledBackground } from '../components/TiledBackground/TiledBackground';
import { AppHead } from '../sections/00-AppHead/AppHead';
import { CaveSection } from '../sections/01-Cave/Cave';
import { WelcomeSection } from '../sections/10-Welcome/Welcome';
import { FooterSection } from '../sections/90-Footer/Footer';
import { TechnicalInfo } from '../sections/TechnicalInfo/TechnicalInfo';
import styles from '../styles/common.module.css';

// TODO: [🔠] What is this - inter/Inter
const inter = Inter({ subsets: ['latin'] });

export default function AboutPage(props: any) {
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
                    <WelcomeSection variant="SIDEPAGE" />
                    <TechnicalInfo />
                </main>
                <footer>
                    <FooterSection />
                </footer>
            </div>
        </>
    );
}

export async function getStaticProps({ locale }: { locale: string }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common',
                'welcome',
                'pavolhejny',
                'services',
                'references',
                'projects',
                'hacking',
                'contact',
                'footer',
                'technical-info' /* <- TODO: [🗃] Filter only needed for this page */,
            ])),
        },
    };
}

/**
 * TODO: [🪒] Can be getStaticProps shared between all pages?
 * TODO: Make some menu
 * TODO: [🧈] Best way how to share page css
 * TODO: DRY with index.tsx
 * TODO: [🔗] ACRY should we use <a ...>...</a> OR <Link ...>...</Link> for external links in Next App
 */
