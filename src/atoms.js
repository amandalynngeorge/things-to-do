import { atom } from 'recoil';
import { selector } from 'recoil';

export const toDoListState = atom({
  key: "toDoList", 
  default: []
});

export const incompleteToDosSelector = selector({
  key: 'incompleteToDos',

  get: ({ get }) => {
    return get(toDoListState).filter((toDo) => toDo.status === 'incomplete');
  }
})

export const completeToDosSelector = selector({
  key: 'completeToDos',

  get: ({ get }) => {
    return get(toDoListState).filter((toDo) => toDo.status === 'complete');
  }
})