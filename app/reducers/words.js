const words = (state = [], action) => {
  switch (action.type) {
    case 'ADD_WORD':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
        }
      ]
    default:
      return state
  }
}

export default words