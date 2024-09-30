import { z } from 'zod';

export const infoStepValidationSchema = z.object({
  firstName: z
    .string()
    .min(1, 'Last name is required and cannot be empty.')
    .max(25, 'First name cannot exceed 25 characters.'),
  lastName: z
    .string()
    .min(1, 'Last name is required and cannot be empty.')
    .max(25, 'Last name cannot exceed 25 characters.'),
  password: z.string().min(6, 'Password must be at least 6 characters long.'),
});

export type InfoStepValidationPayload = {
  firstName: string;
  lastName: string;
  password: string;
};
