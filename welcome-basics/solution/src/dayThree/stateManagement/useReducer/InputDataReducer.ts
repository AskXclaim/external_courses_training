const inputDataReducer: any = (state: string[], action: { type: string, payLoad: string }) => {
    switch (action.type) {
        case 'add':
            return [...state, action.payLoad];
        case 'delete':
            return state.filter((payload) => payload !== action.payLoad);
        default:
            return state;
    }
}
export default inputDataReducer;