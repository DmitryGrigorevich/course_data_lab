import { prisma } from './prisma_init'

export async function find_students_with_most_courses() {
    // TODO: Найти студентов с максимальным количеством уникальных курсов
    // Использовать обработку данных в TypeScript (не агрегацию Prisma)
    // Вернуть массив студентов с информацией о person и количеством курсов

    const data = await prisma.student.findMany({
        include: {
            person: true,
            grades: true
        }
    });

	const res = data.map(elem => ({
		...elem,
		courseCount: elem.grades.length
	}))

	const maxCourse = Math.max(...res.map(elem => elem.courseCount));
	return res.filter(elem => elem.courseCount === maxCourse)
}