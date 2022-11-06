import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function RoomPage() {
  const { room_id } = useParams();

  useEffect(() => {
    document.title = "Nona Geon";
  }, []);

  return (
    <>
      <h1> Room {room_id} </h1>
    </>
  );
}

export default RoomPage;
