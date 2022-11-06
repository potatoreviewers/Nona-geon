import { useNavigate } from "react-router";

function HomePage() {

  const navigate = useNavigate();

  const createRoom = (e) => {
    e.preventDefault();
    navigate("/create");
  }

  const joinRoom = (e) => {
    e.preventDefault();
    navigate("/join");
  }

  return (
    <>
      <main className="home">
        <h1> Nona Geon </h1>
        <div className="home-menu">
          <button onClick={createRoom}> Create Room </button>
          <button onClick={joinRoom}> Join Room </button>
        </div>
      </main>
    </>
  );
}

export default HomePage;
