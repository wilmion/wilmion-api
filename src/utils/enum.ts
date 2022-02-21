import { EnumType } from "typescript";

export function ToArray(enumme: any) {
  const StringIsNumber = (value) => isNaN(Number(value)) === false;

  return Object.keys(enumme)
    .filter(StringIsNumber)
    .map((key) => enumme[key]);
}
