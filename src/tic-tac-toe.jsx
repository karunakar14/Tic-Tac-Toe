import React, { useState, useEffect } from 'react';

const Tic = () => {
  const [user1, setuser1] = useState([]);
  const [user2, setuser2] = useState([]);
  const [turn, setturn] = useState(true);
  const [status, setStatus] = useState("");
  const winerCombination = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6]
  ];
  const select = (a) => {
      if (turn==true) {
        setuser1([...user1, a]);
        setturn(false)
      } else {
        setuser2([...user2, a]);
        setturn(true)
      }
  };
  const checkWinner = (x) => {
    for (let i = 0; i < winerCombination.length; i++)
    {
      const [a, b, c] = winerCombination[i];
      if (x.includes(a) && x.includes(b) && x.includes(c)) {
        return true; 
      }
    }
    return false;
  };


  useEffect(() => {
    if (checkWinner(user1)) {
      setStatus("User 1 is the winner!");
    } else if (checkWinner(user2)) {
      setStatus("User 2 is the winner!");
    } else if (user1.length + user2.length === 9) {
      setStatus("It's a draw!");
    } else {
      setStatus(`Turn: ${turn ? "User 1" : "User 2"}`);
    }
  }, [user1, user2, turn]);
  return (
    <div>
      <h1>{status}</h1>
      <button style={{ padding: "10px" }} onClick={() => select(0)}>{user1.includes(0) ? 'X' : user2.includes(0) ? 'O' : ''}</button>
      <button style={{ padding: "10px" }} onClick={() => select(1)}>{user1.includes(1) ? 'X' : user2.includes(1) ? 'O' : ''}</button>
      <button style={{ padding: "10px" }} onClick={() => select(2)}>{user1.includes(2) ? 'X' : user2.includes(2) ? 'O' : ''}</button>
      <br />
      <button style={{ padding: "10px" }} onClick={() => select(3)}>{user1.includes(3) ? 'X' : user2.includes(3) ? 'O' : ''}</button>
      <button style={{ padding: "10px" }} onClick={() => select(4)}>{user1.includes(4) ? 'X' : user2.includes(4) ? 'O' : ''}</button>
      <button style={{ padding: "10px" }} onClick={() => select(5)}>{user1.includes(5) ? 'X' : user2.includes(5) ? 'O' : ''}</button>
      <br />
      <button style={{ padding: "10px" }} onClick={() => select(6)}>{user1.includes(6) ? 'X' : user2.includes(6) ? 'O' : ''}</button>
      <button style={{ padding: "10px" }} onClick={() => select(7)}>{user1.includes(7) ? 'X' : user2.includes(7) ? 'O' : ''}</button>
      <button style={{ padding: "10px" }} onClick={() => select(8)}>{user1.includes(8) ? 'X' : user2.includes(8) ? 'O' : ''}</button>
    </div>
  );
};

export default Tic;
