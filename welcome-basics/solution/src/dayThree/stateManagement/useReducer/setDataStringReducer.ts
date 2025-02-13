const setDataStringReducer: any = (state: number, action: string) => {
    switch (action) {
        case 'Increment':
            return state + 1;
        case 'Decrement':
            return state - 1;
        default:
            return state;
    }
}
export default setDataStringReducer;