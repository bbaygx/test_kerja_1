import { z } from "zod";

const envVariables = z.object({
  VITE_API_BASE_URL: z.string(),
});

export const myEnvironment = envVariables.parse(import.meta.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {
      VITE_API_BASE_URL: string;
    }
  }
}
