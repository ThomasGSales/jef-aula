export interface ICrud<T> {
    insert(object: T): Promise<void>
    selectAll(): Promise<T[]>
    select(id: string): Promise<T>
    update(object: T): Promise<void>
    delete(id: string): Promise<void>
}