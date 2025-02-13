import {Provider} from "react-redux";
import Store from "./Store.ts";
import Reduxer from "./Reduxer.tsx";

const ReduxerContainer = () => {
    return (
        <div className="d-flex flex-column align-items-center">
            <h1>Using redux</h1>
            <Provider store={Store}>
                <Reduxer/>
            </Provider>
        </div>

    )
}
export default ReduxerContainer;