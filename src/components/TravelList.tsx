import { useRecoilValue } from "recoil";
import { travelSelector, travelState } from "../atoms";
import Travel from "./Travel";
import CreateTravel from "./CreateTravel";
function TravelList() {
  const [go, been, favorite] = useRecoilValue(travelSelector);
  return (
    <div>
      <h2>내가 가고 싶은 나라들</h2>
      <CreateTravel />
      <ul>
        {go.map((travel) => (
          <Travel key={travel.id} {...travel} />
        ))}
      </ul>
      <h2>내가 가본 나라들</h2>
      <ul>
        {" "}
        {been.map((travel) => (
          <Travel key={travel.id} {...travel} />
        ))}
      </ul>
      <h2>내가 좋아하는 나라들</h2>
      {favorite.map((travel) => (
        <Travel key={travel.id} {...travel} />
      ))}
    </div>
  );
}
export default TravelList;
