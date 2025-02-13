import {Duck} from "./types/Duck.ts";
import {useState} from "react";

type DuckFormProps = {
    addDuck: React.Dispatch<React.SetStateAction<Duck[]>>
}

const DuckForm = ({addDuck}: DuckFormProps) => {
    const aDuck: Duck = {
        id: "",
        name: "",
        age: 0,
        color: "",
        habitat: "",
    }
    const [duck, setDuck] = useState<Duck>(aDuck);
    const submitDuck =
        (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.preventDefault();
            addDuck(oldDucks => [...oldDucks, duck]);
            setDuck(aDuck);
        }
    const changeHandler =
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setDuck(oldDuck => ({...oldDuck, [e.target.name]: e.target.value}));
        }
    return (
        <div className="d-flex flex-column align-items-center p-2 me-2">
            <div className="mb-3 d-flex flex-row align-items-center">
                <label htmlFor="duckName" className="form-label">Name</label>
                <input className="form-control align-self-end" type="text"
                       value={duck.name} id="duckName" name="name"
                       onChange={changeHandler}/>
            </div>
            <div className="mb-3 d-flex flex-row align-items-center">
                <label htmlFor="duckAge" className="form-label">Age</label>
                <input className="form-control" type="number"
                       value={duck.age} id="duckAge" name="age"
                       onChange={changeHandler}/>
            </div>
            <div className="mb-3 d-flex flex-row align-items-center">
                <label htmlFor="duckColor" className="form-label">Color</label>
                <input className="form-control" type="text"
                       value={duck.color} id="duckColor" name="color"
                       onChange={changeHandler}/>
            </div>
            <div className="mb-3 d-flex flex-row align-items-center">
                <label htmlFor="duckHabitat" className="form-label">habitat</label>
                <input className="form-control" type="text"
                       value={duck.habitat} id="duckHabitat" name="habitat"
                       onChange={changeHandler}/>
            </div>
            <div className="mb-3 d-flex flex-row align-self-end">
                <button className="btn btn-primary"
                        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => submitDuck(e)}>
                    Submit
                </button>
            </div>
        </div>
    );
}
export default DuckForm;