import { atom } from "recoil";

export const filterTypeState = atom<string>({
  key: "filterType",
  default: "전시/미술",
});
