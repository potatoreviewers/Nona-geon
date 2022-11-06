import { useEffect } from "react";

function JoinPage() {

  useEffect(() => {
    document.title = "Join Game";
  }, []);

  const joinGame = (e) => {
    e.preventDefault();
    console.log("Join Game");
  }

  return (
    <>
      <h1> Join Game </h1>
      <form onSubmit={joinGame}>
        <label> Room id or url</label>
        <input type="text" />

        <label> Password </label>
        <input type="password" />

        <input type="submit" value="Join Room" />

      </form>
    </>
  );
}

export default JoinPage;
