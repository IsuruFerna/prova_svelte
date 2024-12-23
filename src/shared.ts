import { writable, type Writable } from "svelte/store";
import type { Task } from "./types";

export const tasks: Writable<Task[]> = writable([]);

