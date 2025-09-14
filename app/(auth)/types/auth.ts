export type FormLoginData = {
    username: string;
    password: string;
}

export type FormRegisterData = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export type FormForgotPasswordData = {
    email: string;
}

export type FormResetPasswordData = {
    newPassword: string;
    confirmNewPassword: string;
}

export type AuthResponse = {
    token: string;
    user: {
        id: string;
        username: string;
        email: string;
    };
}
