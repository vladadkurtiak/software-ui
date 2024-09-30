import { z } from 'zod';

export const startStepValidationSchema = z.object({
  email: z
    .string({ message: 'Please enter a valid email adress' })
    .min(1, { message: 'Please enter your email' })
    .email({ message: 'Please enter a valid email adress' }),
});

export type StartStepValidationPayload = {
  email: string;
};
