import { prisma } from './prisma_init'

export async function update_student_names_pattern(oldPattern: string, newPattern: string) {
    // TODO: Обновить имена студентов, заменяя oldPattern на newPattern
    // Использовать обработку в TypeScript с отдельными запросами update
    // Вернуть количество обновленных студентов

	const data = await prisma.student.findMany({
		include: {person: true}
	});

	let count = 0;

	for (let elem of data) {
		if (elem.person.name.includes(oldPattern)) {
			await prisma.person.update({
				where: {id: elem.personId},
				data: {name: elem.person.name.replace(oldPattern, newPattern)	}
			})
			count++;
		}
	}

	return count;
}