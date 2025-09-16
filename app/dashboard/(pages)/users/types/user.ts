
export type userType = {
    name: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    role_id: number;
}

export type userListType = {
    id: number;
    name: string;
    lastName: string;
    email: string;
    role: {
        id: number;
        name: string;
    };
}