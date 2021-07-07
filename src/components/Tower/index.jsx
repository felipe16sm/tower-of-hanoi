import { TowerArea } from "./TowerArea";
import { TowerBase } from "./TowerBase";
import { Stem } from "./Stem";
import { Disk1, Disk2, Disk3, Disk4 } from "../Disks";
import { useState } from "react";

export const Tower = ({
  towersDisks,
  setTowersDisks,
  selected,
  setSelected,
  setMessage,
  id,
}) => {
  const verifyVictory = (Towers) => {
    let lastTowerNumberOfDisks = Towers[Towers.length - 1].length;
    return lastTowerNumberOfDisks === 4;
  };

  const moveDisk = () => {
    let newTowerDisks = JSON.stringify(towersDisks);
    newTowerDisks = JSON.parse(newTowerDisks);

    let selectedDisk =
      towersDisks[selected][towersDisks[selected].length - 1].disk;

    newTowerDisks[id].push({ disk: selectedDisk });

    newTowerDisks[selected].pop();

    if (verifyVictory(newTowerDisks)) {
      setMessage("Você venceu!");
    }

    setTowersDisks(newTowerDisks);
  };

  return (
    <TowerArea
      onClick={() => {
        if (selected === null && towersDisks[id].length > 0) {
          setSelected(id);
        } else {
          setSelected(null);
          if (selected !== id) {
            if (towersDisks[id].length > 0) {
              let idLastTowerDisk =
                towersDisks[id][towersDisks[id].length - 1].disk;
              let selectedDisk =
                towersDisks[selected][towersDisks[selected].length - 1].disk;
              console.log();
              if (idLastTowerDisk > selectedDisk) {
                moveDisk();
              }
            } else {
              moveDisk();
            }
          }
        }
      }}
    >
      <Stem />
      <TowerBase />
      {towersDisks[id].map((diskData, index) => {
        let isLastDisk = towersDisks[id].length - 1 === index;
        if (diskData.disk === 1) {
          return <Disk1 selected={isLastDisk && selected === id} key={index} />;
        }
        if (diskData.disk === 2) {
          return <Disk2 selected={isLastDisk && selected === id} key={index} />;
        }
        if (diskData.disk === 3) {
          return <Disk3 selected={isLastDisk && selected === id} key={index} />;
        }
        return <Disk4 selected={isLastDisk && selected === id} key={index} />;
      })}
    </TowerArea>
  );
};
