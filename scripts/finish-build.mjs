import {mkdirSync,copyFileSync,writeFileSync,cpSync} from 'node:fs';
mkdirSync('docs/guests',{recursive:true});
copyFileSync('docs/index.html','docs/guests/index.html');
mkdirSync('docs/ccepi',{recursive:true});
copyFileSync('ccepi/index.html','docs/ccepi/index.html');
copyFileSync('ccepi/app.js','docs/ccepi/app.js');
cpSync('ccepi/data','docs/ccepi/data',{recursive:true,force:true});
writeFileSync('docs/.nojekyll','');
