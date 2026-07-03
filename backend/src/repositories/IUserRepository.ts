import { User } from "../models/User";

export interface IUserRepository {

    getAll(): User[];

    getById(id: number): User | undefined;

}