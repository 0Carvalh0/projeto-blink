import profile01 from "../../images/logo001-pequena.png";
import "./postGenerate.css";

function PostGenerate() {
  function post(e) {
    e.preventDefault();
  }

  return (
    <form className="container__GeneratePost" onSubmit={post}>
      <img className="main__profileImage" src={profile01}></img>
      <textarea className="main__Input" rows="5"></textarea>
      <label
        className="main__Button"
        id="input__AddImage"
        for="input__SendImage"
      >
        <i class="fa-solid fa-images"></i>
      </label>
      <input id="input__SendImage" className="hidden" type="file"></input>
      <button className="main__Button" type="submit">
        Publicar
      </button>
    </form>
  );
}

export default PostGenerate;
