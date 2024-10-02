export type InitialStateType = {
  success: boolean;
  error: string | null;
};

export type Response = {
  message: string;
};

export type PassStartStepPayload = {
  email: string;
};

export type PassVerificationCodeStepPayload = {
  code: string;
};

export type PassInfoStepPayload = {
  firstName: string;
  lastName: string;
  password: string;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type AuthWithGooglePayload = {
  token: string;
};

export type ApiError = {
  code: string;
  message: string;
  success: boolean;
};
