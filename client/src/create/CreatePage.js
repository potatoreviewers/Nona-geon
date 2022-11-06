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
      <div className="Page">
        <div className="menu">
          <h1> Create Game </h1>
          <form onSubmit={createRoom}>
            <label> Room Name </label>
            <input type="text" />

            <input class="Button" type="submit" value="Create Room" />
          </form>
        </div>
      </div>
    </>
  );
}

export default CreatePage;
