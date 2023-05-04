import "./index.css";
import { Card } from "./card";

export const PessoasDizem = ({ data }) => {
  return (
    <div className="pessoas-dizemCard">
      <h2>O que as pessoas estão dizendo...</h2>
      <div className="pessoas-card">
        {data.map((item) => (
          <>
            <Card {...item} />
          </>
        ))}
      </div>
    </div>
  );
};
