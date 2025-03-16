import { z } from "zod";

export const SigninSchema = z.object({
    email: z.string().email("Invalid email format"),
    password: z.string().min(8, "Password must be at least 8 characters"),
});

export type SigninFormData = z.infer<typeof SigninSchema>;