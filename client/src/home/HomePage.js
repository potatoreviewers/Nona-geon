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
      <div className="Page">
        <div className="menu">
          <h1> Nona Geon </h1>
          <button class="Button" onClick={createRoom}> Create Room </button>
          <button class="Button" onClick={joinRoom}> Join Room </button>
        </div>
      </div>
    </>
  );
}

export default HomePage;
