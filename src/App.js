import { useState, useEffect } from "react";
import { TowerList } from "./components/TowersList";
import { MainScreen } from "./components/MainScreen";
import { MainTitle } from "./components/MainTitle";
import { Message } from "./components/Message";
import { Restart } from "./components/Restart";

function App() {
  const [towersDisks, setTowersDisks] = useState([
    [{ disk: 4 }, { disk: 3 }, { disk: 2 }, { disk: 1 }],
    [],
    [],
  ]);

  const [message, setMessage] = useState("");

  const [selected, setSelected] = useState(null);

  useEffect(() => {
    console.log(towersDisks);
  }, [towersDisks]);

  return (
    <MainScreen>
      <MainTitle>Torre de Hanoi</MainTitle>
      <TowerList
        towersDisks={towersDisks}
        setTowersDisks={setTowersDisks}
        selected={selected}
        setSelected={setSelected}
        setMessage={setMessage}
      />
      <Message message={message} />
      <Restart setMessage={setMessage} setTowersDisks={setTowersDisks} />
    </MainScreen>
  );
}

export default App;
