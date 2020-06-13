import { IUser } from "@anvlop/api-interfaces";

export class User implements IUser {
    name: string;
    email: string;
    password: string;
    role: string;
    resetToken: string;
}