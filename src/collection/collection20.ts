/* 	
	Напишите функцию groupUnfinishedHighPriorityTasks, 
	которая группирует задачи по категориям, фильтруя только незавершенные высокоприоритетные задачи.
*/

export type Task = { category: string; priority: string; completed: boolean };

export function groupUnfinishedHighPriorityTasks(tasks: Task[]): Map<string, Task[]> {
	const filterTask: Task[] = tasks.filter(elem => elem.priority === 'high' && !elem.completed);
	const resMap = new Map<string, Task[]>();

	filterTask.forEach(elem => {
		if (!resMap.has(elem.category)) resMap.set(elem.category, [elem])
		else resMap.get(elem.category)?.push(elem)
	})
	return resMap;

}


