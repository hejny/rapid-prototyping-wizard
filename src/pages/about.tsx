import { Inter } from '@next/font/google';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { Vector } from 'xyzt';
import { VERCEL_GIT_COMMIT_MESSAGE, VERSION } from '../../config';
import { DebugGrid } from '../components/DebugGrid/DebugGrid';
import { Section } from '../components/Section/Section';
import { TiledBackground } from '../components/TiledBackground/TiledBackground';
import { AppHead } from '../sections/00-AppHead/AppHead';
import { CaveSection } from '../sections/01-Cave/Cave';
import { WelcomeSection } from '../sections/10-Welcome/Welcome';
import { FooterSection } from '../sections/90-Footer/Footer';
import styles from '../styles/common.module.css';

// TODO: [🔠] What is this - inter/Inter
const inter = Inter({ subsets: ['latin'] });

export default function Midjourney(props: any) {
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
                    <WelcomeSection variant="SHORT" />
                    <Section>
                        <h2>About</h2>
                        <p>Technical info about the page</p>
                        <p>Version: {VERSION}</p>
                        <p>Commit message: {VERCEL_GIT_COMMIT_MESSAGE}</p>
                        <pre>{JSON.stringify(props.config, null, 4)}</pre>
                        <p>
                            Repository:
                            <Link href="https://github.com/hejny/rapid-prototyping-wizard/">
                                https://github.com/hejny/rapid-prototyping-wizard/
                            </Link>
                        </p>
                    </Section>
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
            ...(await serverSideTranslations(locale, ['common', 'footer', 'pavolhejny'])),
            config: {
                NONCE: 1,
                VERSION,
                VERCEL_GIT_COMMIT_MESSAGE: process.env.VERCEL_GIT_COMMIT_MESSAGE || null,
            },
        },
    };
}

/**
 * TODO: !!! More details
 * TODO: !!! Better formatted
 * TODO: [🪒] Can be getStaticProps shared between all pages?
 * TODO: Make some menu
 * TODO: [🧈] Best way how to share page css
 * TODO: DRY with index.tsx
 * TODO: [🔗] ACRY should we use <a ...>...</a> OR <Link ...>...</Link> for external links in Next App
 */
