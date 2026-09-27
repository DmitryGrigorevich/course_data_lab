/* 	Напишите функцию findMostPopularTag, 
которая находит самый часто встречающийся тег в массиве постов и количество его повторений. 
Функция не должна использовать циклы.
*/

type Post = { tags: string[] };

export function findMostPopularTag(posts: Post[]): Record<string, number> {
	const needTags = posts.map(post => post.tags).flat();
	
	return needTags.reduce((acc: Record <string, number>, tag) => {
		if (tag in acc) acc[tag] += 1;
		else acc[tag] = 1
		
		return acc;
	}, {});
}
