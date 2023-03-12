/**
 * 🏭 GENERATED WITH 🖼️ Generate projects library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import { Item } from '../../../src/components/Items/Item';
import { Translate } from '../../../src/components/Translate/Translate';
// import { effectToRef } from '../../../src/utils/Drawing/effectToRef';
// import { visualMathematicsEffect } from '../../../src/utils/Drawing/projectsEffectsLibrary';
import background from './graph-plot.svg';

/**
 * Presentation of project Visual mathematics
 *
 * @see /public/projects/VisualMathematics/visual-mathematics.en.md !!! Is this OK path
 * @see /public/projects/VisualMathematics/visual-mathematics.cs.md !!! Is this OK path
 * @generated by generate-projects-library
 */
export function VisualMathematicsProject() {
    return (
        <a href="https://github.com/collboard/function-builder" target="_blank" rel="noreferrer">
            <Item>
                <Item.Title>
                    <Translate locale="en">Visual mathematics</Translate>
                    <Translate locale="cs">Vizuální matematika</Translate>
                </Item.Title>
                <Item.Description>
                    <Translate locale="en">
                        <p>
                            Collboard&apos;s function visualization module lets you graph functions like sin, cos, and
                            tan in a visually appealing way. No more intimidating formulas—just connect simple boxes for
                            a fun and easy math experience.
                        </p>
                    </Translate>
                    <Translate locale="cs">
                        <p>
                            Vizualizace grafů funkcí umožňuje netradičním způsobem zobrazit vztah mezi funkcemi jako
                            jsou sin, cos a tan.
                        </p>
                    </Translate>
                </Item.Description>
                <Item.Image>
                    <div
                        // ref={effectToRef(visualMathematicsEffect)}
                        style={{
                            backgroundImage: `url(${background.src})`,
                        }}
                    />
                    {/* <Image alt="Axis of the graph" src={background} draggable="false" placeholder="blur" /> */}
                </Item.Image>
            </Item>
        </a>
    );
}
