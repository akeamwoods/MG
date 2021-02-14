export type Card = {
    id: string;
    value: string;
    flipped: boolean;
}

export type DifficultyType = "Easy" | "Medium" | "Hard";

export type Score = {
    id:string;
    username:string;
    time:number;
    date: string;
    mode: DifficultyType;
}