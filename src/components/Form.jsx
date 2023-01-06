import React, { useEffect, useState } from "react";
import "./Form.scss";
import Voting from "./Voting";
const MyForm = () => {
  const sumOfValues = 0;

  const [vote, setVote] = useState({});

  useEffect(() => {
    console.log(Object.keys(vote));
  }, [vote, setVote]);

  return (
    <div className='form-wrapper'>
      <div>
        <label>Get up:</label>
        <Voting
          onChange={(e) => setVote({ ...vote, getUp: e })}
        />
      </div>
      <div>
        <label>Morale:</label>
        <Voting
          onChange={(e) =>
            setVote({
              ...vote,
              morale: e,
            })
          }
        />
      </div>
      <div>
        <label>Physics:</label>

        <Voting
          onChange={(e) =>
            setVote({
              ...vote,
              physics: e,
            })
          }
        />
      </div>
      <div>
        <label>Work:</label>
        <Voting
          onChange={(e) => setVote({ ...vote, work: e })}
        />
      </div>
      <div>
        <label>Free time:</label>
        <Voting
          onChange={(e) =>
            setVote({
              ...vote,
              freeTime: e,
            })
          }
        />
      </div>
      <div>
        <label>Voluntary work:</label>
        <Voting
          onChange={(e) =>
            setVote({ ...vote, voluntaryWork: e })
          }
        />
      </div>
      <div className="resultPanel">
        {Object.keys(vote).reduce((previous, current) => {
          return vote[current] + previous;
        }, 0)}
      </div>

      <button>submit</button>
    </div>
  );
};

export default MyForm;
