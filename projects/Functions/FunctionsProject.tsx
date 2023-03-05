/**
 * 🏭 GENERATED WITH 🖼️ Generate projects library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import { Item } from '../../../src/components/Items/Item';
import { effectToRef } from '../../../src/utils/Drawing/effectToRef';
import { functionsEffect } from '../../../src/utils/Drawing/projectsEffectsLibrary';
import background from './graph-plot.svg';

/**
 * Presentation of project Functions
 *
 * @see /public/projects/projects.md
 * @generated by generate-projects-library
 */
export function FunctionsProject() {
    return (
        <a href="https://github.com/collboard/function-builder" target="_blank" rel="noreferrer">
            <Item>
                <Item.Title>Functions</Item.Title>

                <Item.Image>
                    <div
                        ref={effectToRef(functionsEffect)}
                        style={{
                            backgroundImage: `url(${background.src})`,
                        }}
                    />
                    {/* <Image alt="Axis of the graph" src={background} draggable="false" /> */}
                </Item.Image>
            </Item>
        </a>
    );
}
