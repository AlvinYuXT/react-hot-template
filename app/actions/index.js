let nextTodoId = 0
export const addWord = text => {
  return {
    type: 'ADD_WORD',
    id: nextTodoId++,
    text
  }
}
