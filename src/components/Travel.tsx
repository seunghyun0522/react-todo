import React from "react";
import { useSetRecoilState } from "recoil";
import { ITravel, travelState } from "../atoms";

function Travel({ text, category, id }: ITravel) {
  const setTravel = useSetRecoilState(travelState);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;

    if (name === "delete") {
      // If the delete button is clicked, remove the item from the list
      setTravel((oldTravels) =>
        oldTravels.filter((travel) => travel.id !== id)
      );
    } else {
      // Otherwise, toggle the category
      setTravel((oldTravels) => {
        const targetIndex = oldTravels.findIndex((travel) => travel.id === id);
        const newTravel = { text, id, category: name as any };
        return [
          ...oldTravels.slice(0, targetIndex),
          newTravel,
          ...oldTravels.slice(targetIndex + 1),
        ];
      });
    }
  };

  return (
    <li>
      <span>{text}</span>
      {category !== "favorite" && (
        <button name="favorite" onClick={onClick}>
          {category === "been" ? "👍" : "✅"}
        </button>
      )}
      {category !== "been" && category !== "go" && (
        <button name="been" onClick={onClick}>
          👎🏻
        </button>
      )}
      {category !== "go" && category !== "favorite" && (
        <button name="go" onClick={onClick}>
          ❌
        </button>
      )}
      {category === "go" && (
        <button name="delete" onClick={onClick}>
          🗑️
        </button>
      )}
    </li>
  );
}

export default Travel;
