export const initialState = [
  {
    item: "qwerwe",
    completed: true,
    id: 3892987589
  }
];

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          item: action.payload,
          completed: false,
          id: Date.now()
        }
      ];
    case "TOGGLE_COMPLETE":
      return state.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      });
    case "CLEAR_COMPLETE":
      return state.filter(todo => {
        return !todo.completed;
      });
    default:
      return state;
  }
};
