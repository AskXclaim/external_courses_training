import {createContext} from "react";
import {TrainerType} from "./TrainerType.ts";

export type TrainerContextType = {
    trainers: TrainerType[],
    setContextTrainers:  React.Dispatch<React.SetStateAction<TrainerType[]>>
}

const trainerContext = createContext<TrainerContextType|null>(null);
export default trainerContext;
