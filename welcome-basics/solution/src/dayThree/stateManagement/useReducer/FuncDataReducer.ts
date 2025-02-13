const funcDataReducer: any = (state: number, action: { type:string,doIt:Function }) => {
    switch (action.type) {
        case 'Increment':
            return action.doIt(state);
        case 'Decrement':
            return action.doIt(state);
        default:
            return state;
    }
}
export default funcDataReducer;