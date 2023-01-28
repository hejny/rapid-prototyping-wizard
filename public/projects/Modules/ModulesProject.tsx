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
import { modulesEffect } from '../../../utils/Drawing/projectsEffectsLibrary';
import background from './Pavol_Hejn_code_as_a_coloring_book_black_and_white_illustration_a8a23039-8249-4844-8bea-937a31d471e5.svg';

/**
 * !!!
 *
 * @see !!!
 * @generated by generate-projects-library
 */
export function ModulesProject() {
    return (
        <a href="https://github.com/collboard/modules-sdk" target="_blank" rel="noreferrer">
            <Item>
                <Item.Title>Modules</Item.Title>
                <Item.Description>
                    <p>
                        Software development kit to extend The Collboard, The virtual whiteboard. A successful design to
                        split up big application into hundreds multiple indopendent codebases.
                    </p>
                </Item.Description>
                <Item.Image>
                    <div
                        ref={effectToRef(modulesEffect)}
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
