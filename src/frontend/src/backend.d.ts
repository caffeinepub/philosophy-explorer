import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;

export interface Philosopher {
    id: bigint;
    name: string;
    era: string;
    school: string;
    bio: string;
    keyIdeas: string[];
}

export interface Quote {
    id: bigint;
    text: string;
    author: string;
    branch: string;
}

export interface Branch {
    name: string;
    description: string;
    keyQuestion: string;
}

export interface backendInterface {
    getAllPhilosophers: () => Promise<Philosopher[]>;
    getPhilosopher: (id: bigint) => Promise<Option<Philosopher>>;
    getAllQuotes: () => Promise<Quote[]>;
    getQuotesByBranch: (branch: string) => Promise<Quote[]>;
    getQuoteOfTheDay: () => Promise<Quote>;
    getAllBranches: () => Promise<Branch[]>;
}
