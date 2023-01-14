#!/usr/bin/env ts-node

import chalk from 'chalk';
import commander from 'commander';
import { readFile, writeFile } from 'fs/promises';
import { normalizeTo_camelCase, normalizeTo_snake_case } from 'n12';
import { capitalize } from 'n12/dist/capitalize';
import { basename, dirname, join, relative } from 'path';
import { commit } from '../utils/autocommit/commit';
import { isWorkingTreeClean } from '../utils/autocommit/isWorkingTreeClean';
import { prettify } from '../utils/prettify';

const program = new commander.Command();
program.option('--commit', `Autocommit changes`);
program.parse(process.argv);
const { commit: isCommited } = program.opts();

generateHackingLibrary({ isCommited })
    .catch((error) => {
        console.error(chalk.bgRed(error.name));
        console.error(error);
        process.exit(1);
    })
    .then(() => {
        process.exit(0);
    });

async function generateHackingLibrary({ isCommited }: { isCommited: boolean }) {
    console.info(`🖼️  Generating hacking library`);

    if (isCommited && !(await isWorkingTreeClean(process.cwd()))) {
        throw new Error(`Working tree is not clean`);
    }

    // !!! Replace all "wallpapers"
    // !!! Generate index Component

    const rootDirectory = join(__dirname, '../../');
    const hackingDirectory = join(rootDirectory, 'pages-sections/Hacking/hacking');
    const hackingFilePath = join(hackingDirectory, 'hacking.txt');

    for (const wallpaperPath of wallpapersPaths) {
        const name = basename(wallpaperPath);

        const jobUuidMatch = name.match(/_(?<jobUuid>[^_]*?)(\.png)?$/);
        const jobUuid = jobUuidMatch?.groups?.jobUuid;
        const componentId = jobUuid?.split('-')[0]!;

        if (!jobUuid) {
            throw new Error(`Can not find jobUuid in "${name}"`);
        }

        const jobUrl = new URL(`https://www.midjourney.com/app/jobs/${jobUuid}`);

        const nameWithoutExtension = name.replace(/\.png$/, '');

        const wallpaperFilePath = join(wallpapersDirectoryPath, nameWithoutExtension) + '.tsx';

        const wallpaperFileOldContent = await readFile(wallpaperFilePath, 'utf-8');

        if (wallpaperFileOldContent.includes(`@not-generated by generate-wallpapers-library`)) {
            console.info(`⏩ ${relative(process.cwd(), wallpaperFilePath).split('\\').join('/')}`);
            continue;
        }
        const nameWithoutBoilerplate = nameWithoutExtension.replace(/^Pavol_Hejn_/, '').replace('_' + jobUuid, '');

        const componentName =
            capitalize(normalizeTo_camelCase(nameWithoutBoilerplate)) +
            'ImageX' +
            componentId; /* <- TODO: Make some nicer naming of components */
        const entityName = normalizeTo_snake_case(nameWithoutBoilerplate) + '_' + componentId;
        const importPath = ('./' + relative(dirname(wallpaperFilePath), wallpaperPath).split('\\').join('/')).replace(
            /^\.\/\.\.\//,
            '../',
        );
        const title = nameWithoutBoilerplate.split('_').join(' ');

        const wallpaperFileContent = await prettify(`

            /**
             * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
             * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
             *    If you want to edit this file:
             *      - Change @generated to @not-generated
             *      - And remove this warning
             *    Then the file will not be re-generated automatically
             */
        
            import Image from 'next/image';
            import ${entityName} from '${importPath}';

            /**
             * Image of ${title}
             * 
             * @see ${jobUrl.href}
             * @generated by generate-wallpapers-library
             */
            export function ${componentName}() {
                return <Image alt="${title}" src={${entityName}} draggable="false" />;
            }
        `);

        await writeFile(wallpaperFilePath, wallpaperFileContent, 'utf-8');
        console.info(`💾 ${relative(process.cwd(), wallpaperFilePath).split('\\').join('/')}`);
    }

    if (isCommited) {
        await commit(dirname(wallpapersDirectoryPath), `🖼️  Generate wallpapers library`);
    }

    console.info(`[ Done 🖼️  Generating wallpapers library ]`);
    process.exit(0);
}

/**
 * TODO: !!!  [😁]
 * TODO: !!! Persistency and uniqueness of the names
 */
