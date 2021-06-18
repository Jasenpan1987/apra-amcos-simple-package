import { camelCase, snakeCase, padEnd } from "lodash";

export const reverseCamelCase = (str: string) =>
  camelCase(str).split("").reverse().join("").concat("------");

export const reverseSnakeCase = (str: string) =>
  snakeCase(str).split("").reverse().join("").concat("------");

export const addChar = (str: string) => padEnd(str, 10, "*");
