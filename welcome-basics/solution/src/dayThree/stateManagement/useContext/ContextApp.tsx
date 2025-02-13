import trainerContext, {TrainerContextType} from "./TrainerContext.ts";
import {useState} from "react";
import {TrainerType} from "./TrainerType.ts";

const ContextApp = () => {

    const [trainers, setTrainers] = useState<TrainerType[]>([]);
    const contextValue: TrainerContextType = {
        trainers: trainers,
        setContextTrainers: setTrainers,
    }
    return (
        <trainerContext.Provider value={contextValue}>
            <div>

            </div>
        </trainerContext.Provider>

    );
}
export default ContextApp;