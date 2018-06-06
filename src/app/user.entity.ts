export class User {
    id: number;

    email: string;

    role: Role;
}

export enum Role {
    Admin = 3,
    EventPlanner = 2,
    DataEntry = 1,
    Guest = 0
}
