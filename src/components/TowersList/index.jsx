import { Tower } from "../Tower";
import { TowerListArea } from "./TowerListArea";

export const TowerList = ({
  towersDisks,
  setTowersDisks,
  selected,
  setSelected,
  setMessage,
}) => {
  return (
    <TowerListArea>
      {towersDisks.map((disks, index) => {
        return (
          <Tower
            id={index}
            towersDisks={towersDisks}
            setTowersDisks={setTowersDisks}
            selected={selected}
            setSelected={setSelected}
            setMessage={setMessage}
            key={index}
          />
        );
      })}
    </TowerListArea>
  );
};
