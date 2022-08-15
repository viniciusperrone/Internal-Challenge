import { IToDo, IToDoSearch } from "@hooks/context";

export function todoFiltered(search: IToDoSearch, todo: IToDo[]) {
  todo.filter(item => {
    if(search.title && !search.fromDate && !search.deadlineDate && !search.status) {
      return item.title === search.title;
    }
    if(!search.title && search.fromDate && !search.deadlineDate && !search.status) {
      return item.fromDate === search.fromDate;
    }
    if(!search.title && !search.fromDate && search.deadlineDate && !search.status) {
      return item.deadlineDate === search.deadlineDate;
    }
    if(!search.title && !search.fromDate && !search.deadlineDate && search.status) {
      return item.status === search.status;
    }
    return []
  })
}