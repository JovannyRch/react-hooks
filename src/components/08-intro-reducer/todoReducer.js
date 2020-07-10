export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return [...state, action.payload];
        case 'delete':
            return state.filter(e => e.id !== action.payload);
        case 'reset':
            return [];
        case 'edit':
            return state.map(todo => todo.id === action.payload ? { ...todo, done: !todo.done } : todo);
        default:
            return state;
    }

};
