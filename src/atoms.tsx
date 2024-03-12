import { atom, selector } from "recoil";

export interface ITravel {
  text: string;
  id: number;
  category: "go" | "been" | "favorite";
}

export const travelState = atom<ITravel[]>({
  key: "travel",
  default: [],
});

export const travelSelector = selector({
  key: "travelSelector",
  get: ({ get }) => {
    const travels = get(travelState);
    return [
      travels.filter((travel) => travel.category === "go"),
      travels.filter((travel) => travel.category === "been"),
      travels.filter((travel) => travel.category === "favorite"),
    ];
  },
});
