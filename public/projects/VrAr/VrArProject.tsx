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
import { vrArEffect } from '../../../utils/Drawing/projectsEffectsLibrary';
import background from './Pavol_Hejn_coloring_book_black_and_white_illustration_outline_o_850cbc2d-9088-4113-bdbc-8fbf566e170c.svg';

/**
 * Presentation of project VR/AR
 *
 * @see /public/projects/projects.md
 * @generated by generate-projects-library
 */
export function VrArProject() {
    return (
        <a href="https://pavolhejny.com/documents/projects.html#-vr-paint" target="_blank" rel="noreferrer">
            <Item>
                <Item.Title>VR/AR</Item.Title>
                <Item.Description>
                    <p>
                        I have worked on multiple projects for virtuen augmented reality imosu Ambassador of association
                        of virtual
                    </p>
                    <p>I have presented this DevConf, CzechVRFest, Hackuj Stát</p>
                </Item.Description>
                <Item.Image>
                    <div
                        ref={effectToRef(vrArEffect)}
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
