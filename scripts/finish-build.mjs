import {mkdirSync,copyFileSync,writeFileSync} from 'node:fs';
mkdirSync('docs/guests',{recursive:true});
copyFileSync('docs/index.html','docs/guests/index.html');
writeFileSync('docs/.nojekyll','');
