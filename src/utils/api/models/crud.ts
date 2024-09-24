import { ICrud } from "../../../@types/ICrud";

export class Crud<T> implements ICrud<T> {
    async insert(object: T): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async selectAll(): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    async select(id: string): Promise<T> {
        throw new Error("Method not implemented.");
    }
    async update(object: T): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
}