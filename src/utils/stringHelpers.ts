import { camelCase } from "lodash";

export const reverseCamelCase = (str: string) =>
  camelCase(str).split("").reverse().join("");
