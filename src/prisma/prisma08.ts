import { prisma } from './prisma_init'

export interface CourseWithStudentCount {
    id: number
    title: string
    description: string | null
    studentCount: number
}

export async function find_courses_with_student_count(): Promise<CourseWithStudentCount[]> {
    // TODO: Найти все курсы с количеством уникальных студентов, имеющих оценки по этому курсу
    // Вернуть массив курсов с дополнительным полем studentCount
	const tmp = await prisma.course.findMany({
		include: {
			_count: {
				select: {grades: true}
			}
		}
	})

	return tmp.map(elem => ({
		id: elem.id,
		title: elem.title,
		description: elem.description,
		studentCount: elem._count.grades
	}))
}