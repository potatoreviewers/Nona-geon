import { useEffect } from "react";

function CreatePage() {

  useEffect(() => {
    document.title = "Create Game";
  }, []);

  const createRoom = (e) => {
    e.preventDefault();
    console.log("Create Room");
  }

  return (
    <>
      <h1> Create Game </h1>
      <form onSubmit={createRoom}>
        <label> Room Name </label>
        <input type="text" />

        <label> Require Password </label>
        <input type="checkbox" />

        <label> Password </label>
        <input type="password" />

        <input type="submit" value="Create Room" />

      </form>
    </>
  );
}

export default CreatePage;
