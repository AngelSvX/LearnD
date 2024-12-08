type setVoid = () => void;

export interface GameType{
  data : Carrousel[]
}

interface Carrousel{
  id: string,
  title: string,
  color: string,
  isFinished: boolean
}