import {useState} from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div className="d-flex flex-column align-items-center">
            <h2>Managing counter state</h2>
            <div className="d-flex flex-row justify-content-center">
                <button className="btn btn-primary m-1"
                        onClick={() => setCounter(counter + 1)}>+
                </button>
                <input className="form-control form-control-sm" type="number" value={counter} readOnly/>
                <button className="btn btn-primary m-1"
                        onClick={() => setCounter(oldCounter => oldCounter - 1)}>-
                </button>
            </div>
        </div>
    );
}
export default Counter;