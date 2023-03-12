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
// import { vrArEffect } from '../../../src/utils/Drawing/projectsEffectsLibrary';
import pavolHejnColoringBookBlackAndWhiteIllustrationOutlineO850cbc2d90884113Bdbc8fbf566e170c from './Pavol_Hejn_coloring_book_black_and_white_illustration_outline_o_850cbc2d-9088-4113-bdbc-8fbf566e170c.svg';

/**
 * Presentation of project VR/AR
 *
 * @see /public/projects/vr-ar/vr-ar.en.md
 * @see /public/projects/vr-ar/vr-ar.cs.md
 * @generated by generate-projects-library
 */
export function VrArProject() {
    return (
        <a href="https://pavolhejny.com/documents/projects.html#-vr-paint" target="_blank" rel="noreferrer">
            <Item>
                <Item.Title>
                    <Translate locale="en">VR/AR</Translate>
                    <Translate locale="cs">VR/AR</Translate>
                </Item.Title>
                <Item.Description>
                    <Translate locale="en">
                        <p>
                            I&apos;m an experienced virtual and augmented reality rep, ambassador for the Association of
                            Virtual Reality, and have presented at industry conferences such as CzechVRFest, DevConf or
                            LinuxDays.
                        </p>
                    </Translate>
                    <Translate locale="cs">
                        <p>!!</p>
                    </Translate>
                </Item.Description>
                <Item.Image>
                    <div
                        // ref={effectToRef(vrArEffect)}
                        style={{
                            backgroundImage: `url(${pavolHejnColoringBookBlackAndWhiteIllustrationOutlineO850cbc2d90884113Bdbc8fbf566e170c.src})`,
                        }}
                    />
                    {/* <Image alt="Virtual reality helmet" src={background} draggable="false" placeholder="blur" /> */}
                </Item.Image>
            </Item>
        </a>
    );
}
