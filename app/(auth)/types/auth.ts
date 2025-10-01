export type FormLoginData = {
  username: string;
  password: string;
};

export type FormRegisterData = {
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type FormForgotPasswordData = {
  email: string;
};

export type FormResetPasswordData = {
  newPassword: string;
  confirmNewPassword: string;
};

export type AuthResponse = {
  token: string;
};

export type UserProfile = {
  id: string;
  name: string;
  lastName: string;
  email: string;
  avatarUrl?: string;
};
