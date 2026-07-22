import { User } from "../models/User";
import { IUserRepository } from "./IUserRepository";

export class UserRepository implements IUserRepository {

    private users: User[] = [
        {
            id: 1,
            name: "Alice",
            email: "alice@example.com"
        },
        {
            id: 2,
            name: "Bob",
            email: "bob@example.com"
        }
    ];

    getAll(): User[] {
        return this.users;
    }

    getById(id: number): User | undefined {
        return this.users.find(user => user.id === id);
    }

}