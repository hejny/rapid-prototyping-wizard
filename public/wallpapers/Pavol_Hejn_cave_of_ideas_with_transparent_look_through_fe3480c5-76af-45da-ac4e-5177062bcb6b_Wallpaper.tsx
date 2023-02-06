import Link from 'next/link';
import { Vector } from 'xyzt';
import { Color } from '../../src/utils/color/Color';
import { createParalaxEffect } from '../../src/utils/Drawing/createParalaxEffect';
import { createParticlesDrawingEffect } from '../../src/utils/Drawing/createParticlesDrawingEffect';
import { effectToRef } from '../../src/utils/Drawing/effectToRef';
import { joinEffects } from '../../src/utils/Drawing/joinEffects';
import cave_of_ideas_with_transparent_look_through_fe3480c5_76af_45da_ac4e_5177062bcb6b_background from './Pavol_Hejn_cave_of_ideas_with_transparent_look_through_fe3480c5-76af-45da-ac4e-5177062bcb6b_background.png';
import cave_of_ideas_with_transparent_look_through_fe3480c5_76af_45da_ac4e_5177062bcb6b_foreground from './Pavol_Hejn_cave_of_ideas_with_transparent_look_through_fe3480c5-76af-45da-ac4e-5177062bcb6b_foreground.png';

/**
 * Image of cave of ideas with transparent look through
 *
 * @see https://www.midjourney.com/app/jobs/fe3480c5-76af-45da-ac4e-5177062bcb6b
 * @not-generated by generate-wallpapers-library
 */
export function CaveOfIdeasWithTransparentLookThrough_fe3480c5_Wallpaper() {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: '100%',
                gridTemplateRows: '100%',
            }}
        >
            <div
                style={{
                    zIndex: 3,
                    order: 3,

                    gridColumn: `1 / span 1`,
                    gridRow: `1 / span 1`,

                    display: 'flex',
                    justifyContent: 'end',
                    alignItems: 'end',

                    paddingBottom: 60,
                    paddingRight: 5,
                }}
            >
                <Link
                    href="/gallery"
                    style={{
                        zIndex: 10,
                        fontSize: 10,
                        textDecoration: 'none',
                        color: '#ccc',
                        textShadow: 'none',
                    }}
                >
                    ⬅ Created by AI
                </Link>
            </div>
            <div
                style={{
                    zIndex: 2,
                    order: 2,

                    gridColumn: `1 / span 1`,
                    gridRow: `1 / span 1`,

                    backgroundImage: `url(${cave_of_ideas_with_transparent_look_through_fe3480c5_76af_45da_ac4e_5177062bcb6b_foreground.src})` /* <- TODO: url(...) vs url('...') */,
                    backgroundSize: 'cover',
                    backgroundPosition: '50% 80%',
                }}
            />

            <div
                style={{
                    zIndex: 1,
                    order: 1,

                    gridColumn: `1 / span 1`,
                    gridRow: `1 / span 1`,

                    // TODO: !!! Move background as paralax effect

                    backgroundImage: `url(${cave_of_ideas_with_transparent_look_through_fe3480c5_76af_45da_ac4e_5177062bcb6b_background.src})` /* <- TODO: url(...) vs url('...') */,
                    backgroundSize: 'cover',
                    backgroundPosition: '50% 80%',
                    width: `100%`,
                    height: `100%`,
                }}
                ref={effectToRef(
                    // TODO: !!! Avoid scrolling - hide overflow
                    // TODO: !!! Palalax to foreground
                    joinEffects(
                        createParalaxEffect({}),
                        createParticlesDrawingEffect({
                            generatePosition(cursorPosition) {
                                const distance = Math.random() * 30;
                                const rotation = Math.random() * Math.PI * 2;
                                return cursorPosition.add(Vector.fromPolar(rotation, distance));
                            },
                            generateSize() {
                                return Math.random() * 5 + 3;
                            },
                            generateColor() {
                                return Color.fromString('#feeac4' /* <- [🎨] */);
                            },
                            generateLivetime() {
                                return Math.random() * 2000 + 100;
                            },
                            generateDistance() {
                                return Math.random() * 100 + 50;
                            },
                        }),
                    ),
                )}
            />

            <div
                style={{
                    // Image:
                    backgroundImage: `url(${cave_of_ideas_with_transparent_look_through_fe3480c5_76af_45da_ac4e_5177062bcb6b_foreground.src})` /* <- TODO: url(...) vs url('...') */,
                    backgroundSize: '100% 100%',
                    width: `100%`,
                    height: `100%`,
                }}
            />
        </div>
    );
}
