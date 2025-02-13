import {TrainerType} from "./TrainerType.ts";

export class TrainerModel implements TrainerType {
    constructor(public id: string, public name: string, public course: string[]) {
    }
}