import { GameType } from "@/Types/ContextTypes/GameType";
import { createContext, ReactNode, useContext } from "react";

const GameContext = createContext<GameType | undefined>(undefined)

export const GameProvider: React.FC<{children: ReactNode}> = ({
  children,
}) => {

  const data = [
    { id: "1", title: '1', color: '#ff6f61', isFinished: true},
    { id: "2", title: '2', color: '#ffcc00', isFinished: true},
    { id: "3", title: '3', color: '#6b5b95', isFinished: false},
    { id: "4", title: '4', color: '#88b04b', isFinished: false},
    { id: "5", title: '5', color: '#88b04b', isFinished: false},
    { id: "6", title: '6', color: '#88b04b', isFinished: false},
  ];

  return(
    <GameContext.Provider value={{data}}>
      {children}
    </GameContext.Provider>
  )
}

export const useGame = () => {
  const context = useContext(GameContext);
  if(!context){
    throw new Error("Error to use GameContext");
  }
  return context
}