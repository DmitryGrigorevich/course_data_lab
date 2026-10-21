import { prisma } from './prisma_init'

export async function find_students_with_all_courses() {
    // TODO: Найти студентов, у которых есть оценки по всем существующим курсам
    // Использовать обработку в TypeScript
    // Вернуть массив студентов с информацией о person

	const courses = await prisma.course.findMany();
	const courseLen = courses.length;

	const data = await prisma.student.findMany({
		include: {
			person: true,
			grades: true
		}
	});

	return data.filter(elem => elem.grades.length === courseLen)

}