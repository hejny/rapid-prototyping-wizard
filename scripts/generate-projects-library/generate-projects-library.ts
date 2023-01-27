#!/usr/bin/env ts-node

import chalk from 'chalk';
import commander from 'commander';
import { readFile, writeFile } from 'fs/promises';
import markdownToTxt from 'markdown-to-txt';
import { decapitalize, normalizeTo_PascalCase, normalizeTo_camelCase } from 'n12';
import { dirname, join, relative } from 'path';
import { Converter } from 'showdown';
import spaceTrim from 'spacetrim';
import { commit } from '../utils/autocommit/commit';
import { isWorkingTreeClean } from '../utils/autocommit/isWorkingTreeClean';
import { prettify } from '../utils/prettify';
import { removeMarkdownComments } from './removeMarkdownComments';

const program = new commander.Command();
program.option('--commit', `Autocommit changes`);
program.parse(process.argv);
const { commit: isCommited } = program.opts();

generateProjectsLibrary({ isCommited })
    .catch((error) => {
        console.error(chalk.bgRed(error.name));
        console.error(error);
        process.exit(1);
    })
    .then(() => {
        process.exit(0);
    });

async function generateProjectsLibrary({ isCommited }: { isCommited: boolean }) {
    console.info(`🖼️  Generating project library`);

    if (isCommited && !(await isWorkingTreeClean(process.cwd()))) {
        throw new Error(`Working tree is not clean`);
    }

    // !!! Replace all "projects"

    const rootDir = join(__dirname, '../../');
    const projectsComponentsDir = join(rootDir, 'public/projects/components');
    const projectsDocumentFilePath = join(rootDir, 'public/projects/projects.md');
    const projectsDocumentFileContent = await readFile(projectsDocumentFilePath, 'utf-8').then(removeMarkdownComments);

    const matches = projectsDocumentFileContent.matchAll(/(?<titleMarkdown>^##.*?$)(?<bodyMarkdown>[^^#]+)/gms);

    // TODO: Make some util - splitMarkdownIntoHeaderSections
    const sections: Array<{ titleMarkdown: string; bodyMarkdown: string }> = [];
    for (const line of projectsDocumentFileContent.split('\n').map((line) => line.trim())) {
        if (line.startsWith('#')) {
            sections.push({ titleMarkdown: line.replace(/^#+/, ''), bodyMarkdown: `` });
        } else {
            const section = sections[sections.length - 1];
            section.bodyMarkdown += (section.bodyMarkdown.trim() ? '\n' : '') + line;
        }
    }

    sections.shift(/* To remove the first paragraph */);

    for (const { titleMarkdown, bodyMarkdown } of sections) {
        const title = markdownToTxt(titleMarkdown);

        // TODO: !!! Find also the links and replace

        let imagesMatch = bodyMarkdown.matchAll(/\[!\[(?<alt>.*?)\]\((?<src>.*?)\)\]\((?<href>.*?)\)/g);
        const images: Array<{ src: string; alt: string; href: string }> = Array.from(imagesMatch).map(
            ({ groups: { alt, src, href } }: any) => ({ alt, src, href }),
        );
        const image = images[0];

        if (!image) {
            console.info({ bodyMarkdown });
            throw new Error(`Project ${title} has no image`);
        }

        if (images.length > 1) {
            console.warn(chalk.yellow(`Only first image will be used in ${title} `));
        }

        /* 
        let tagsMatch = bodyMarkdown.matchAll(/`(?<tag>.*?)`/g);
        const tags: Array<string> = Array.from(tagsMatch).map(({ groups: { tag } }: any) => tag);
        // TODO: [🛰] Use tags
        // TODO: [🛰] Remove tags from body
        */

        let bodyMarkdownWithoutImages = bodyMarkdown;
        for (const { alt, src, href } of images) {
            bodyMarkdownWithoutImages = bodyMarkdownWithoutImages.split(`[![${alt}](${src})](${href})`).join('\n');
        }
        bodyMarkdownWithoutImages = bodyMarkdownWithoutImages.split('\n\n\n').join('\n\n');
        bodyMarkdownWithoutImages = spaceTrim(bodyMarkdownWithoutImages);

        const converter = new Converter();
        const bodyHtml = converter.makeHtml(bodyMarkdownWithoutImages);

        const componentName = normalizeTo_PascalCase(titleMarkdown) + 'Project';
        const projectFilePath = join(projectsComponentsDir, componentName) + '.tsx';
        const projectFileOldContent = await readFile(projectFilePath, 'utf-8').catch(() => ``);

        // TODO: LIB n12: normalizeTo_camelCase Should make ALWAYS first letter a lowercase - create tests for this case
        const effectName = decapitalize(normalizeTo_camelCase(titleMarkdown)) + 'Effect';

        if (projectFileOldContent.includes(`@not-generated by generate-projects-library`)) {
            console.info(`⏩ ${relative(process.cwd(), projectFilePath).split('\\').join('/')}`);
            continue;
        }

        // TODO: !!! Remove use tags in body
        // TODO: Use alt in generated component
        // TODO: Put filename into this import name .replace(/\.[a-z0-9]+$/, ''
        // TODO: !!! Text should be selectable even inside of <a>
        // TODO: !!! Antialiasing of the images

        const projectFileContent = await prettify(`

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
            import { ${effectName} } from '../../../utils/Drawing/projectsEffectsLibrary';
            import background from '${relative(
                dirname(projectFilePath),
                join(process.cwd(), image.src),
                // TODO: Here should be sth like> join(dirname(projectsDocumentFilePath), image.src),
            )
                .split('\\')
                .join('/')
                .replace(/^\.\/\.\.\//, '../')}';

            /**
             * !!!
             * 
             * @see !!!
             * @generated by generate-projects-library
             */
            export function ${componentName}() {
                return(
                    <a href="${image.href}" target="_blank" rel="noreferrer">
                        <Item>
                            <Item.Title>${title}</Item.Title>
                            <Item.Description>
                                ${bodyHtml}
                            </Item.Description>
                            <Item.Image>
                                <div
                                    ref={effectToRef(${effectName})}
                                    style={{
                                        backgroundImage: \`url(\${background.src})\`,
                                    }}
                                />
                                {/* <Image alt="${image.alt}" src={background} draggable="false" /> */}
                            </Item.Image>
                        </Item>
                    </a>
                );
            }

        `);

        await writeFile(projectFilePath, projectFileContent, 'utf-8');
        console.info(`💾 ${relative(process.cwd(), projectFilePath).split('\\').join('/')}`);
    }

    if (isCommited) {
        await commit(dirname(projectsComponentsDir), `🖼️  Generate projects library`);
    }

    // TODO: Maybe generate an index component

    console.info(`[ Done 🖼️  Generating projects library ]`);
    process.exit(0);
}

/**
 * TODO: When the heading is changes, old file will be still in place, this can be a bit misleading
 * TODO: Maybe rename generateProjectsLibrary
 */
