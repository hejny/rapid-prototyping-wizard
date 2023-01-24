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
import { townsEffect } from '../../../utils/Drawing/projectsEffectsLibrary';
import background from '../towns.jpg';

/**
 * !!!
 *
 * @see !!!
 * @generated by generate-projects-library
 */
export function TownsProject() {
    return (
        <a href="https://towns.cz/" target="_blank" rel="noreferrer">
            <Item>
                <Item.Title>Towns</Item.Title>
                <Item.Description>
                    <p>Browser online game @@@</p>
                </Item.Description>
                <Item.Image>
                    <div
                        ref={effectToRef(townsEffect)}
                        style={{
                            backgroundImage: `url(${background.src})`,
                        }}
                    />
                    {/* <Image alt="@@@" src={background} draggable="false" /> */}
                </Item.Image>
            </Item>
        </a>
    );
}
