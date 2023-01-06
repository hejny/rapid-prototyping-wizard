import { Inter } from '@next/font/google';
import Head from 'next/head';
import { Cave } from '../components/Cave/Cave';
import { Services } from '../components/Services/Services';

// !!! What is this - inter/Inter
const inter = Inter({ subsets: ['latin'] });

// !!! The best way to import the fonts

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

            <div
                style={{
                    width: `100%`,

                    display: 'grid',

                    // TODO: !!! On mobile strech cave from edge to edge
                    gridTemplateColumns: `2vw 1fr 3fr 1fr 2vw`,
                    gridTemplateRows: `0px auto 20vh minmax`,

                    alignItems: 'stretch',
                    justifyItems: 'stretch',
                }}
            >
                <div
                    style={{
                        zIndex: 1,
                        // outline: '1px dotted red',

                        gridColumn: `2 / span 3`,
                        gridRow: `2 / span 1`,
                    }}
                >
                    <Cave />
                </div>

                <div
                    style={{
                        zIndex: 2,
                        // outline: '1px dotted red',
                        gridColumn: `2 / span 3`,
                        gridRow: `3 / span 2`,
                        textAlign: 'center',
                        color: 'white',
                        textShadow: `#ff5500 0px 0px 10px`,
                    }}
                >
                    {/* TODO: Make as <Component/> */}
                    <h1
                        style={{
                            fontFamily: '"PassionsConflict", Helvetica Neue',
                            fontSize: '60px',

                            // TODO: DRY
                            margin: 0,
                            padding: 0,
                            marginBlockStart: 0,
                            marginBlockEnd: 0,
                            marginInlineStart: 0,
                            marginInlineEnd: 0,
                        }}
                    >
                        Wizard
                    </h1>

                    {/* TODO: Make as <Component/> */}
                    <p style={{ width: 'calc(50% + 1vw)', margin: 'auto' }}>
                        AI, Neural networks, VR/AR, WebGL, WebVR, Webassembly, WebSockets. Bitcoin, Ethereum, Cardano,
                        Crypto, Smart contracts, Web3, ...
                    </p>

                    <Services />
                </div>
            </div>
        </>
    );
}

/**
 * TODO: !!! Use somewhere <main> element
 * TODO: !!! Split into components
 * TODO: !!! Custom 404 page
 */
