/**
 * 🏭 GENERATED WITH 🖼️ Generate projects library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import Image from 'next/image';
import { Item } from '../../../components/Items/Item';
import { effectToRef } from '../../../utils/Drawing/effectToRef';
import { collboardEffect } from '../../../utils/Drawing/projectsEffectsLibrary';
import background from './outline.svg';

/**
 * Presentation of project Collboard
 *
 * @see /public/projects/projects.md
 * @generated by generate-projects-library
 */
export function CollboardProject() {
    return (
        <a href="#" target="_blank" rel="noreferrer">
            <Item>
                <Item.Title>Collboard</Item.Title>
                <Item.Description>
                    <p>Collboard is a modular online virtual whiteboard for education.</p>
                </Item.Description>
                <Item.Image>
                    <div
                        ref={effectToRef(collboardEffect)}
                        style={{
                            backgroundImage: `url(${background.src})`,
                        }}
                    />
                    {/* <Image alt="Tablet with drawing" src={background} draggable="false" /> */}
                </Item.Image>
            </Item>
        </a>
    );
}
