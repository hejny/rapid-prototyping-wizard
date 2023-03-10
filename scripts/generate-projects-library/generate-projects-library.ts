#!/usr/bin/env ts-node

import chalk from 'chalk';
import commander from 'commander';
import { readFile, writeFile } from 'fs/promises';
import glob from 'glob-promise';
import { decapitalize, normalizeTo_camelCase, normalizeTo_PascalCase } from 'n12';
import { basename, dirname, join, relative } from 'path';
import { commit } from '../utils/autocommit/commit';
import { isWorkingTreeClean } from '../utils/autocommit/isWorkingTreeClean';
import { generateImport } from '../utils/generateImport';
import { isFileExisting } from '../utils/isFileExisting';
import { prettify } from '../utils/prettify';
import { parseProjectMarkdown } from './utils/parseProjectMarkdown';

const program = new commander.Command();
program.option('--commit', `Autocommit changes`);
program.parse(process.argv);
const { commit: isCommited } = program.opts();

if (process.cwd() !== join(__dirname, '../..')) {
    console.error(chalk.red(`CWD must be root of the project`));
    process.exit(1);
}

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

    const projectsComponentsDir = join(process.cwd(), 'public/projects');

    for (const projectEnglishPath of await glob(join(projectsComponentsDir, '/**/*.en.md').split('\\').join('/'))) {
        const projectCzechPath = projectEnglishPath.replace(/\.en\.md$/, '.cs.md');

        if (!(await isFileExisting(projectCzechPath))) {
            throw new Error(`Czech version of project don’t exist\n"${projectCzechPath}"`);
        }

        const projectEnglish = await readFile(projectEnglishPath, 'utf-8').then(parseProjectMarkdown);
        const projectCzech = await readFile(projectCzechPath, 'utf-8').then(parseProjectMarkdown);

        const images = [...projectEnglish.images, ...projectCzech.images];

        if (images.length === 0) {
            throw new Error(`Project ${projectEnglish.title} has no image`);
        } else if (images.length > 1) {
            console.warn(chalk.yellow(`Only first image will be used in ${projectEnglish.title} `));
        }

        const image = images[0];

        const projectDir = dirname(projectEnglishPath);
        const componentBaseName = normalizeTo_PascalCase(basename(projectDir));
        const componentName = `${componentBaseName}Project`;
        const projectFilePath = join(projectDir, componentName) + '.tsx';
        const projectFileOldContent = await readFile(projectFilePath, 'utf-8').catch(() => ``);

        // TODO: LIB n12: normalizeTo_camelCase Should make ALWAYS first letter a lowercase - create tests for this case
        const effectName = decapitalize(normalizeTo_camelCase(basename(projectDir))) + 'Effect';

        if (projectFileOldContent.includes(`@not-generated by generate-projects-library`)) {
            console.info(`⏩ ${relative(process.cwd(), projectFilePath).split('\\').join('/')}`);
            continue;
        }

        const entityName = normalizeTo_camelCase(basename(image.src).replace(/\.(svg|png|jpe?g)$/, ''));

        // TODO: Use alt in generated component
        // TODO: Put filename into this import name .replace(/\.[a-z0-9]+$/, ''

        const projectFileContent = await prettify(`

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
            // import { ${effectName} } from '../../../src/utils/Drawing/projectsEffectsLibrary';
            ${generateImport({
                isDebug: false,
                entityName,
                entityPath: join(dirname(projectEnglishPath), image.src),
                itselfPath: projectFilePath,
            })}

            /**
             * Presentation of project ${projectEnglish.title}
             * 
             * @see /${relative(process.cwd(), projectEnglishPath).split('\\').join('/')}
             * @see /${relative(process.cwd(), projectCzechPath).split('\\').join('/')}
             * @generated by generate-projects-library
             */
            export function ${componentName}() {
                return(
                    <a href="${image.href}" target="_blank" rel="noreferrer">
                        <Item>
                            <Item.Title>
                                <Translate locale="en">${projectEnglish.title}</Translate>
                                <Translate locale="cs">${projectCzech.title}</Translate>
                            </Item.Title>
                            <Item.Description>
                                <Translate locale="en">${projectEnglish.description}</Translate>
                                <Translate locale="cs">${projectCzech.description}</Translate>
                            </Item.Description>
                            <Item.Image>
                                <div
                                    // ref={effectToRef(${effectName})}
                                    style={{
                                        backgroundImage: \`url(\${${entityName}.src})\`,
                                    }}
                                />
                                {/* <Image alt="${
                                    image.alt
                                }" src={background} draggable="false" placeholder="blur" /> */}
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
}

/**
 * TODO: When the heading is changes, old file will be still in place, this can be a bit misleading
 * TODO: Maybe rename generateProjectsLibrary
 * TODO: Replace all backgroundImage ACRY by <Image
 * TODO: Explicit set priority={...} on all images
 * TODO: Explicit set quality={...} on all images
 * TODO: Explicit set placeholder={...} on all images
 * TODO: Explicit set draggable="false" on all images
 */
