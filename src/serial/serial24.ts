/* 	
	Найти все элементы с атрибутом data-type="user" И классом online.
*/

import { select } from "xpath";

export function findOnlineUsers(doc: Document): Node[] {
  const query = "//*[@data-type='user' and (contains(@class,'online ') or @class='online') or contains(@class,' online')]"; // Тут нужно написать XPath запрос
  return select(query, doc) as Node[];
}
