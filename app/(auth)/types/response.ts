export interface LoginResponseAuth {
  // access_token: string;
  type: string;
  attributes: {
    access_token: string;
    token_type: string;
  };
}
