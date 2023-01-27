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
import { allMyProjectsEffect } from '../../../utils/Drawing/projectsEffectsLibrary';
import background from './all-projects.png';

/**
 * !!!
 *
 * @see !!!
 * @generated by generate-projects-library
 */
export function AllMyProjectsProject() {
    return (
        <a href="https://pavolhejny.com/documents/projects.html" target="_blank" rel="noreferrer">
            <Item>
                <Item.Title>All my projects</Item.Title>
                <Item.Description>
                    <p>I am program from my 13 and now I am 29 so I have worked on looooooooot of projects.</p>
                </Item.Description>
                <Item.Image>
                    <div
                        ref={effectToRef(allMyProjectsEffect)}
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
