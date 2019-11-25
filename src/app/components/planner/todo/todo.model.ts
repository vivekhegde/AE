export class Todo {
    id: number;
    title: string;
    complete: boolean;
    dueDate: Date;

    constructor(obj: object) {
        Object.assign(this, obj);
    }
}
