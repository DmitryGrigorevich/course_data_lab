import { prisma } from './prisma_init'


export async function find_top_students(limit: number) {
    // TODO: Найти топ N студентов по среднему баллу
    // Учитывать только студентов, у которых есть хотя бы одна оценка
    // Вернуть массив с id студента, именем, средним баллом и количеством оценок
    // Отсортировать по убыванию среднего балла

	const result = [];
	const data = await prisma.grade.groupBy({
		by: ["studentId"],
		_avg: {grade: true},
		_count: {grade: true},
		orderBy: {
			_avg: {grade: "desc"}
		},
		take: limit
	})

	for (let elem of data) {

		const student = await prisma.student.findUnique({
			where: {id: elem.studentId},
			include: {person: true}
		})

		if (student) {
			result.push({
				id: student.id,
				studentName: student.person.name,
				averageGrade: elem._avg.grade,
				gradeCount: elem._count.grade
			})
		}
	}

	return result;



}