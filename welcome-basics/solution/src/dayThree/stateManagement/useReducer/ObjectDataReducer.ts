const objectDataReducer: any = (state: number, action: { type:string,payLoad:number }) => {
    switch (action.type) {
        case 'Increment':
            return state + action.payLoad;
        case 'Decrement':
            return state - action.payLoad;
        default:
            return state;
    }
}
export default objectDataReducer;