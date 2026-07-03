import { User } from "../models/User";
import { UserRepository } from "../repositories/UserRepository";

export class UserService {

    private repository = new UserRepository();

    getAllUsers(): User[] {
        return this.repository.getAll();
    }

    getUserById(id: number): User | undefined {
        return this.repository.getById(id);
    }

}