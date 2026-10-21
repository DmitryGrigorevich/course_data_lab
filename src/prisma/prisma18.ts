import { prisma } from './prisma_init'

export async function find_students_with_excellent_grades() {
    // TODO: Найти всех студентов, у которых есть хотя бы одна оценка 5
    // Использовать обработку данных в TypeScript (не фильтрацию Prisma)
    // Вернуть массив студентов с информацией о person

	const data = await prisma.student.findMany({
		include: {
			person: true,
			grades: true
		}
	})

	return data.filter(elem => elem.grades.some(item => item.grade === 5))
}