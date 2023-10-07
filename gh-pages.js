import { publish } from 'gh-pages';
import * as fs from 'fs';

if (!fs.existsSync('./build/.nojekyll')) {
	fs.writeFileSync('./build/.nojekyll', '', 'utf-8');
}

try {
	const cname = fs.readFileSync('./build/CNAME', 'utf-8');
	if (cname !== 'www.tusong.band') {
		throw 'Rewrite CNAME';
	}
} catch (e) {
	fs.writeFileSync('./build/CNAME', 'www.tusong.band', 'utf-8');
}

publish('build', { branch: 'gh-pages', dotfiles: true, history: false });
