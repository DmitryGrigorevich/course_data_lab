/* 
	Найдите книгу с ID=2 и верните её название.
	Пример XML в файле saxXML.ts
*/

import { SAXParser, type QualifiedAttribute } from "sax";


export function findBookById(xml: string, targetId: string): string | null {
  const parser = new SAXParser(true);
  let currentId:string | QualifiedAttribute = '';
  let currentTitle = '';
  let foundBook = false;
  let isTitleTag = false;
  
// TODO: Реализуйте логику поиска книги по ID и извлечения её названия
  parser.onopentag = (node) => {
	if (node.name === "book") {
		currentId = String(node.attributes['id'] ?? '');
	}

	if (node.name === 'title' && currentId === targetId && !foundBook) {
		isTitleTag = true;
  };

  parser.ontext = (text) => {
	isTitleTag && (currentTitle += text);
  };

  parser.onclosetag = (text) => {
	text === 'title' && (isTitleTag = false);

	if (text === 'book') {
		if (currentId === targetId) {
			foundBook = true;
		}
	}
  };

  }


  
  parser.write(xml).close();
  return foundBook ? currentTitle.trim() : null;
}