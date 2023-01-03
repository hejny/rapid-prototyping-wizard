import Head from 'next/head';

import { Inter } from '@next/font/google';
import caveOfIdeasImage from '../public/wallpapers/Pavol_Hejn_cave_of_ideas_with_transparent_look_through_fe3480c5-76af-45da-ac4e-5177062bcb6b.png';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        // TODO: !!! Change from boilerplate
        <>
            <Head>
                <title>🧙‍♂️ Rapid prototyping wizard</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* TODO: !!! Use somewhere <main> element */}
            <div
                style={{
                    backgroundImage: `url('${caveOfIdeasImage.src}')`,
                    backgroundSize: `90% auto`,
                    backgroundPosition: `46% 50%`,
                    backgroundRepeat: `no-repeat`,
                    width: `100vw`,
                    minHeight: `100vh`,
                    //padding: '5vh',

                    display: 'grid',
                    gridTemplateRows: `repeat(5,1fr)`,
                    gridTemplateColumns: `repeat(5,1fr)`,
                    placeItems: 'center',
                }}
            >
                <h1
                    style={{
                        // !!! Should be font in "

                        gridRowStart: 1,
                        gridRowEnd: 1,
                        gridColumnStart: 1,
                        gridColumnEnd: 6,

                        textAlign: 'center',

                        fontFamily: '"PassionsConflict", Helvetica Neue',
                        fontSize: '70px',
                        bottom: 0,
                        color: 'white',
                        textShadow: `#ff5500 0px 0px 10px`,
                        // width: 100,
                    }}
                >
                    Rapid Prototyping Wizard
                    {/*🧙‍♂️*/}
                </h1>

                <main
                    style={{
                        // !!! Should be font in "

                        gridRowStart: 2,
                        gridRowEnd: 4,
                        gridColumnStart: 4,
                        gridColumnEnd: 6,

                        textAlign: 'center',

                        fontSize: '20px',
                        bottom: 0,
                        color: 'white',
                        textShadow: `#ff5500 0px 0px 10px`,

                        padding: 5,
                        borderRadius: 5,
                        backgroundColor: 'rgba(0,0,0,0.3)',
                        // width: 100,
                    }}
                >
                    AI, VR/AR,...
                </main>

                {/*<Image alt="Cave of ideas" src={caveOfIdeasImage} />*/}
            </div>
        </>
    );
}

/**
 * TODO: !!! Custom 404 page
 */
