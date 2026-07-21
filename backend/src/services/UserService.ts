import { User } from "../models/User";
import { UserRepository } from "../repositories/UserRepository";
import { RepositoryFactory } from "../factories/RepositoryFactory";

export class UserService {

    private repository: UserRepository = RepositoryFactory.createUserRepository();

    getAllUsers(): User[] {
        return this.repository.getAll();
    }

    getUserById(id: number): User | undefined {
        return this.repository.getById(id);
    }

}