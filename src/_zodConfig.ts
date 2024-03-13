import { ZodTypeAny } from "zod";

type Terrors = {
  code: string;
  expected: string;
  received: string;
  path: string[];
  message: string;
};
type TgenerateSchema = {
  message: string;
  errors: Terrors[];
};

interface extendError extends Error {
  inner?: { message: string; path: string }[];
}

const generateSchema = ({ message, errors }: TgenerateSchema): Error => {
  const error: extendError = new Error(message);
  error.name = "ValidationError";
  error.inner = errors.map((err: { message: string; path: string[] }) => ({
    message: err.message,
    path: err.path.join("."),
  }));
  return error;
};

export const _ZOD = (schema: ZodTypeAny) => {
  return {
    validate: async (values: unknown) => {
      try {
        await schema.parseAsync(values);
      } catch (err) {
        throw generateSchema(err as TgenerateSchema);
      }
    },
  };
};
