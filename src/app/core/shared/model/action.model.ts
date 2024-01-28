

export abstract class Action<Payload, Result> {
    abstract execute(payload: Payload): Result;
}