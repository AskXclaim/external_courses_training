import {Duck} from "./types/Duck.ts";
import { v4 as uuidv4 } from 'uuid';

type DuckListProps = {
    duckList: Duck[]
}

const DuckList = ({duckList}: DuckListProps) => {
  debugger;
    return (
        <div className="d-flex flex-column align-items-center">
            {duckList.map((duck: Duck) => {
                    return (<div key={uuidv4()}>
                        {`${duck.name}, ${duck.age}, ${duck.color}, ${duck.habitat}`}
                    </div>)
                }
            )}
        </div>
    );
}

export default DuckList;