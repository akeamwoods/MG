import { DifficultyType, Score } from "../../store/types";
import { Table } from "./style";

export const Highscores: React.FC<{
  filter: DifficultyType;
  scores: Score[];
}> = ({ filter, scores }) => {
  const headers = ["Place", "Username", "Score", "Date"];
  return (
    <Table>
      <tr>
        {headers.map((header) => (
          <th>{header}</th>
        ))}
      </tr>
      {scores
        .filter((score) => score.mode === filter)
        .sort((a, b) => (a.time > b.time ? 1 : -1))
        .slice(0, 10)
        .map((s, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{s.username}</td>
            <td>{s.time}</td>
            <td>{new Date(s.date).toISOString().substring(0, 10)}</td>
          </tr>
        ))}
    </Table>
  );
};
