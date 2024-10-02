import PostGenerate from "./PostGenerate/PostGenerate";

function MainContent() {
  document.addEventListener("DOMContentLoaded", () => {
    const formGeneratePost = document.querySelector(".app__GeneratePost");
    formGeneratePost.addEventListener("submit", (event) => {
      event.preventDefault();
      console.log(document.querySelector(".generatePost__TextArea").value);
    });
  });

  return (
    <main className="mainContent__Container">
      <PostGenerate />
      <section id="posts__Container"></section>
    </main>
  );
}

export default MainContent;
