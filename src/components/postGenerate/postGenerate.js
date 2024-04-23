import profile01 from "../../images/logo001-pequena.png";
import "./postGenerate.css";
// https://codepen.io/luizomf/pen/YzaKqEB image preview

function PostGenerate() {
  const inputFile = document.querySelector("#input__SendImage");
  const labelImage = document.querySelector("#input__AddImage");

  function post(e) {
    e.preventDefault();
  }

  inputFile.addEventListener("change", (e) => {
    const inputTarget = e.target;
    const file = inputTarget.files[0];

    if (file) {
      const reader = new FileReader();

      reader.addEventListener("load", (e) => {
        const readerTarget = e.target;
        const image = document.createElement("img");
        image.src = readerTarget.result;

        labelImage.innerHTML = "";
        labelImage.querySelector("i.fa-images").remove();
        labelImage.appendChild(image);
      });

      reader.readAsDataURL(file);
    }
  });

  return (
    <form className="container__GeneratePost" onSubmit={post}>
      <img
        className="main__ProfileImage"
        src={profile01}
        alt="Profile Image"
      ></img>
      <textarea className="main__Input" rows="5"></textarea>
      <label
        className="main__Button"
        id="input__AddImage"
        htmlFor="input__SendImage"
      >
        <i className="fa-solid fa-images"></i>
      </label>
      <input id="input__SendImage" className="hidden" type="file"></input>
      <button className="main__Button" type="submit">
        Publicar
      </button>
    </form>
  );
}

export default PostGenerate;
