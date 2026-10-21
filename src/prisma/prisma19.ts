import { prisma } from './prisma_init'

export async function find_most_popular_course() {
    // TODO: Найти курс с максимальным количеством уникальных студентов
    // Использовать агрегацию средствами Prisma (groupBy)
    // Вернуть объект курса с дополнительным полем studentCount

	const data = await prisma.grade.groupBy({
		by: ["courseId"],
		_count: {studentId: true},
		orderBy: {
			_count: {studentId: "desc"}
		},
		take: 1
	});

	const corse = await prisma.course.findUnique({
		where: {id: data[0].courseId}
	});

	return {
		...corse,
		studentCount: data[0]._count.studentId
	}
}