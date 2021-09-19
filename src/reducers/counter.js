const initialState1 = { initialState: 0, toggle: true };

const changeTheNumber = (state = initialState1, action) => {

    switch (action.type) {
        case "INCREMENTBY5": return {
            initialState: state.initialState + action.payload,
            toggle: state.toggle
        };
        case "INCREMENT": return {
            initialState: state.initialState + 1,
            toggle: state.toggle
        };
        case "DECREMENT": return {
            initialState: state.initialState - 1,
            toggle: state.toggle
        };
        case "toggle": return {
            initialState: state.initialState,
            toggle: !state.toggle
        };
        default: return state;
    };
}
export default changeTheNumber;