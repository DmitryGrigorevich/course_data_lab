import { prisma } from './prisma_init'

export async function find_courses_min_max_average() {
    // TODO: Найти курсы с минимальной и максимальной средней оценкой
    // Использовать обработку в TypeScript (не агрегацию Prisma)
    // Вернуть объект { min: курс, max: курс } с дополнительным полем averageGrade

	const data = await prisma.course.findMany({
		include: {grades: true}
	});

	const needData = data.map(elem => ({
		...elem,
		averageGrade: elem.grades.reduce(
			(count, item) => item.grade + count, 0
		) / elem.grades.length
	}));

	needData.sort((a,b) => a.averageGrade - b.averageGrade);

	return {
		min: needData[0],
		max: needData[needData.length - 1]
	};

}