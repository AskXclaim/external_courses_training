import {useReducer, useRef} from "react";
import setDataReducer from "./setDataReducer.ts";
import setDataFuncReducer from "./setDataStringReducer.ts";
import objectDataReducer from "./ObjectDataReducer.ts";
import funcDataReducer from "./FuncDataReducer.ts";
import inputDataReducer from "./InputDataReducer.ts";

const Reducer = () => {
    const [data, dispatch] = useReducer(setDataReducer, 10);
    const [funData, dateStringDispatch] = useReducer(setDataFuncReducer, 10);
    const [objData, objDataDispatch] = useReducer(objectDataReducer, 1000);
    const [funcData, funcDataDispatch] = useReducer(funcDataReducer, 1000);
    const [languages, languagesDispatch] = useReducer(inputDataReducer, []);
    const inputRef= useRef<null|HTMLInputElement>(null);
    return (
        <div className="d-flex flex-row flex-wrap">
            <div className="d-flex flex-column">
                <h2 className="m-2">Reducer example</h2>
                <h3 className="m-2">Data:{data}</h3>
                <button className="btn btn-light m-2" onClick={() => dispatch(1)}>Add</button>
                <button className="btn btn-light m-2" onClick={() => dispatch(-1)}>Subtract</button>
            </div>
            <div className="d-flex flex-column mx-1">
                <h2 className="m-2">Reducer example 2</h2>
                <h3 className="m-2">Data:{funData}</h3>
                <button className="btn btn-light m-2" onClick={() => dateStringDispatch("Increment")}>Increase</button>
                <button className="btn btn-light m-2" onClick={() => dateStringDispatch("Decrement")}>Decrease</button>
            </div>
            <div className="d-flex flex-column mx-1">
                <h2 className="m-2">Reducer example 3</h2>
                <h3 className="m-2">Data:{objData}</h3>
                <button className="btn btn-light m-2"
                        onClick={() => objDataDispatch({type: "Increment", payLoad: 1000})}>Increase
                </button>
                <button className="btn btn-light m-2"
                        onClick={() => objDataDispatch({type: "Decrement", payLoad: 100})}>Decrease
                </button>
            </div>
            <div className="d-flex flex-column mx-1">
                <h2 className="m-2">Reducer example 4</h2>
                <h3 className="m-2">Data:{funcData}</h3>
                <button className="btn btn-light m-2" onClick={() => funcDataDispatch({
                    type: "Increment", doIt: (value: number) => value + 200
                })}>Increase
                </button>
                <button className="btn btn-light m-2" onClick={() => funcDataDispatch({
                    type: "Decrement",
                    doIt: (value: number) => value - 10
                })}>Decrease
                </button>
            </div>
            <div className="d-flex flex-column mx-1">
                <h2 className="m-2">Reducer example 5</h2>
                <div className="mb-3 d-flex flex-row align-items-center">
                    <label htmlFor="languages" className="form-label p-2">language:</label>
                    <input className="form-control" type="text" ref={inputRef}/>
                    <div className="d-flex flex-ro m-3 align-self-end">
                        <button className="btn btn-primary m-1"
                                onClick={() =>languagesDispatch({type:"add", payLoad:inputRef.current?.value})}>
                            Add
                        </button>
                        <button className="m-1 btn btn-danger"
                                onClick={() =>languagesDispatch({type:"delete", payLoad:inputRef.current?.value})}>
                            Delete
                        </button>
                    </div>
                </div>
                <div>
                    {languages.map((item)=>{
                        return (<p key={item}>{item}</p>);
                    })}
                </div>
            </div>
        </div>

    )
}
export default Reducer;