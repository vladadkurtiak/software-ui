export type OtpInputPayload = {
  inputNumber: number;
  value: string;
  onChange: (otp: string) => void;
};
