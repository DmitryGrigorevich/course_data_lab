import { prisma } from './prisma_init'

export async function update_students_email_domain(oldDomain: string, newDomain: string) {
    // TODO: Обновить email у всех студентов, у которых email заканчивается на oldDomain
    // Заменить домен на newDomain
    // Вернуть количество обновленных записей
	// Допускается обновление email с помощью простого цикла с запросами в теле цикла

	const students = await prisma.student.findMany({
		where: {
			person: {email: {endsWith: oldDomain}}
		},
		include: {person:true}
	})

	for (let stud of students) {
		const email = stud.person.email;
		const newEmail = email.slice(0, email.length - oldDomain.length) + newDomain;

		await prisma.person.update({
			where: {id: stud.personId},
			data: {email: newEmail}
		})
	}

	return students.length
}