import DuckForm from "./DuckForm.tsx";
import DuckList from "./DuckList.tsx";
import {useState} from "react";
import {Duck} from "./types/Duck.ts";

const DuckContainer = () => {
    const [ducks, setDucks] = useState<Duck[]>([]);
    return (
        <div className="d-flex flex-row justify-content-center">
            <DuckForm addDuck = {setDucks}/>
            <DuckList duckList={ducks} />
        </div>
    );
}

export default DuckContainer