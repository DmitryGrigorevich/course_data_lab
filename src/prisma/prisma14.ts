import { prisma } from './prisma_init'

export async function find_students_above_course_average(courseTitle: string) {
    // TODO: Найти студентов, у которых есть оценки по указанному курсу выше среднего балла по этому курсу
    // Вернуть массив студентов с информацией о person и их оценкой
    // Использовать два отдельных запроса: первый для нахождения среднего балла, второй для поиска студентов
	
	const data = await prisma.grade.aggregate({
		where: {course: {title: courseTitle}},
		_avg: {grade: true}
	});

	const aver = data._avg.grade;
	
	if (aver === null) return [];

	const needStudent = await prisma.student.findMany({
		where: {
			grades: {
				some: {
					course: {title: courseTitle},
					grade: {gt: aver}
				}
			}
		},
		include: {
			person: true,
			grades: {
				where: {
					course: {title: courseTitle},
					grade: {gt: aver}
				}
			}

		}
	});

	return needStudent.map(elem => ({
		...elem,
		grade: elem.grades[0].grade
	}));
}