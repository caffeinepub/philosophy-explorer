import { useQuery } from "@tanstack/react-query";
import { useActor } from "./useActor";

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

export function useAllPhilosophers() {
  const { actor, isFetching } = useActor();
  return useQuery<Philosopher[]>({
    queryKey: ["philosophers"],
    queryFn: async () => {
      if (!actor) return [];
      return (actor as any).getAllPhilosophers();
    },
    enabled: !!actor && !isFetching,
  });
}

export function usePhilosopher(id: bigint) {
  const { actor, isFetching } = useActor();
  return useQuery<Philosopher | null>({
    queryKey: ["philosopher", id.toString()],
    queryFn: async () => {
      if (!actor) return null;
      const result = await (actor as any).getPhilosopher(id);
      if (result.__kind__ === "Some") return result.value as Philosopher;
      return null;
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAllQuotes() {
  const { actor, isFetching } = useActor();
  return useQuery<Quote[]>({
    queryKey: ["quotes"],
    queryFn: async () => {
      if (!actor) return [];
      return (actor as any).getAllQuotes();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useQuotesByBranch(branch: string) {
  const { actor, isFetching } = useActor();
  return useQuery<Quote[]>({
    queryKey: ["quotes", "branch", branch],
    queryFn: async () => {
      if (!actor) return [];
      return (actor as any).getQuotesByBranch(branch);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useQuoteOfTheDay() {
  const { actor, isFetching } = useActor();
  return useQuery<Quote | null>({
    queryKey: ["quoteOfTheDay"],
    queryFn: async () => {
      if (!actor) return null;
      return (actor as any).getQuoteOfTheDay();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAllBranches() {
  const { actor, isFetching } = useActor();
  return useQuery<Branch[]>({
    queryKey: ["branches"],
    queryFn: async () => {
      if (!actor) return [];
      return (actor as any).getAllBranches();
    },
    enabled: !!actor && !isFetching,
  });
}
