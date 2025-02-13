import {useSelector, useDispatch} from "react-redux";
import {deposit, withdraw} from "./BankSlice.ts";
import {RootState} from "./Store.ts";


const Reduxer = () => {
    const amount = useSelector((state: RootState) => state.bank.amount);
    const dispatch = useDispatch();
    return (
        <div className="d-flex flex-column">
            <span className="m-2"> Current balance:{amount}</span>
            <div>
                <button className="btn btn-info m-2" onClick={() =>
                    dispatch(deposit(100))}>Deposit
                </button>
                <button className="btn btn-warning m-2" onClick={() =>
                    dispatch(withdraw(20))}>Withdraw
                </button>
            </div>
        </div>
    );
}

export default Reduxer