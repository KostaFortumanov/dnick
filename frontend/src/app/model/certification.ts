import {Problem} from "./problem";

export interface Certification {
    id: number,
    title: string,
    problems: Problem[],
    timeLeft: number,
    finished: boolean,
}
