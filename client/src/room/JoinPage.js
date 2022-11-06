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
      <div className="Page">
        <div className="menu">
          <h1> Join Game </h1>
          <form onSubmit={joinGame}>
            <label> Room id or url</label>
            <input type="text" />
            <input class="Button" type="submit" value="Join Room" />
          </form>
        </div>
      </div>
    </>
  );
}

export default JoinPage;
