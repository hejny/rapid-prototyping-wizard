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
import background from './Pavol_Hejn_isometric_game_as_a_coloring_book_black_and_white_il_b1cde821-101c-4d3f-ad5b-1f345d4009c5.svg';

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
                    <p>Browser online game. You can build your own City and your world.</p>
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
