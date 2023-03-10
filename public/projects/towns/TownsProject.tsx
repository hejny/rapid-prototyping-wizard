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
// import { townsEffect } from '../../../src/utils/Drawing/projectsEffectsLibrary';
import pavolHejnIsometricGameAsAColoringBookBlackAndWhiteIlB1cde821101c4d3fAd5b1f345d4009c5 from './Pavol_Hejn_isometric_game_as_a_coloring_book_black_and_white_il_b1cde821-101c-4d3f-ad5b-1f345d4009c5.svg';

/**
 * Presentation of project Towns
 *
 * @see /public/projects/towns/towns.en.md
 * @see /public/projects/towns/towns.cs.md
 * @generated by generate-projects-library
 */
export function TownsProject() {
    return (
        <a href="https://towns.cz/" target="_blank" rel="noreferrer">
            <Item>
                <Item.Title>
                    <Translate locale="en">Towns</Translate>
                    <Translate locale="cs">Towns</Translate>
                </Item.Title>
                <Item.Description>
                    <Translate locale="en">
                        <p>A browser-based online game where players can build their own cities and worlds.</p>
                    </Translate>
                    <Translate locale="cs">
                        <p>Online hra v prohlížeči, ve které si hráči mohou budovat vlastní města a světy.</p>
                    </Translate>
                </Item.Description>
                <Item.Image>
                    <div
                        // ref={effectToRef(townsEffect)}
                        style={{
                            backgroundImage: `url(${pavolHejnIsometricGameAsAColoringBookBlackAndWhiteIlB1cde821101c4d3fAd5b1f345d4009c5.src})`,
                        }}
                    />
                    {/* <Image alt="Tile of online game" src={background} draggable="false" placeholder="blur" /> */}
                </Item.Image>
            </Item>
        </a>
    );
}
