import { signal } from "@angular/core";

export class Store<State> {
    readonly $state = signal<State>({} as State);
}