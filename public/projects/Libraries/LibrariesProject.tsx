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
import { librariesEffect } from '../../../utils/Drawing/projectsEffectsLibrary';
import background from './Pavol_Hejny_coloring_book_black_and_white_illustration_outline__b8c24f85-9ee6-4d9e-96d7-fe550fe78b9b.svg';

/**
 * !!!
 *
 * @see !!!
 * @generated by generate-projects-library
 */
export function LibrariesProject() {
    return (
        <a href="https://github.com/hejny?tab=repositories" target="_blank" rel="noreferrer">
            <Item>
                <Item.Title>Libraries</Item.Title>
                <Item.Description>
                    <p>
                        I love Open-source. Every time I work on some project I try to extract reusable parts into
                        independent library
                    </p>
                </Item.Description>
                <Item.Image>
                    <div
                        ref={effectToRef(librariesEffect)}
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
