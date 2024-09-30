import { z } from 'zod';

export const loginValidationSchema = z.object({
  email: z
    .string({ message: 'Please enter a valid email adress' })
    .min(1, { message: 'Please enter your email' })
    .email({ message: 'Please enter a valid email adress' }),
  password: z.string().min(6, 'Password must be at least 6 characters long.'),
});

export type LoginValidationPayload = {
  email: string;
  password: string;
};
