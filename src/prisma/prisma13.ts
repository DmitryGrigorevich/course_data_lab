import { prisma } from './prisma_init'


export async function find_top_courses(limit: number) {
    // TODO: Найти топ N курсов по средней оценке
    // Для каждого курса вычислить среднюю оценку из всех его оценок
    // Вернуть массив с id курса, названием и средней оценкой
    // Отсортировать по убыванию средней оценки
    // Использовать вычисление средней оценки в TypeScript коде (не через агрегацию Prisma)

	const data = await prisma.course.findMany({
		include: {grades: true}
	});

	const res = data
		.map(elem => ({
			id: elem.id,
			title: elem.title,
			averageGrade: elem.grades.reduce(
				(count, item) => count + item.grade, 0
			) / elem.grades.length
		}))
		.sort((a, b) => b.averageGrade - a.averageGrade)
		.slice(0, limit);
	return res;

	
}