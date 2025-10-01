export type FormLoginData = {
  email: string;
  password: string;
};

export type FormRegisterData = {
  name: string;
  last_name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

export type FormForgotPasswordData = {
  email: string;
};

export type FormResetPasswordData = {
  newPassword: string;
  confirmNewPassword: string;
};

export type ResetPasswordData = {
  email: string;
  token: string;
  password: string;
  password_confirmation: string;
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
