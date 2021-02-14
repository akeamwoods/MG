import { v4 as uuidv4 } from "uuid";

export const generateCards = () => {
  const cards = [1,2,3,4,5,6,7,8, 9];

  return cards.map(
    (cv) => ({ value: cv.toString(), flipped: false })
  );;
};

export const generateEasyModeCards = (n:number) => {
    const cards = generateCards();
    const shuffled = cards.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, n);
    const duplicated = selected.flatMap(i => [i,i]);
    const complete = duplicated.map(
        (cv) => ({...cv, id:uuidv4()})
      );
      console.log(complete)
    return complete.sort(() => 0.5 - Math.random());
}