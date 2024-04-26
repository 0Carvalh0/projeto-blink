import { useState, useEffect, useRef } from "react";
import profile01 from "../../../../assets/logo001-pequena.png";
import "./PostGenerate.css";

function PostGenerate() {
  const [imagePreview, setImagePreview] = useState(null);
  const inputFileRef = useRef(null);

  useEffect(() => {
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };

    const currentInputFile = inputFileRef.current;
    currentInputFile.addEventListener("change", handleFileChange);

    return () => {
      currentInputFile.removeEventListener("change", handleFileChange);
    };
  }, []);

  return (
    <form
      className="app__GeneratePost"
      onSubmit={(event) => event.preventDefault()}
    >
      <img
        className="generatePost__ProfileImage"
        src={profile01}
        alt="Profile Image"
      />
      <textarea className="generatePost__TextArea" rows="5"></textarea>
      <label
        className="generatePost__Button"
        id="generatePost__LabelAddImage"
        htmlFor="generatePost__InputSendImage"
      >
        {imagePreview ? (
          <img src={imagePreview} alt="Preview" className="picture__img" />
        ) : (
          <i className="fa-solid fa-images"></i>
        )}
      </label>
      <input
        id="generatePost__InputSendImage"
        className="hidden"
        type="file"
        ref={inputFileRef}
      />
      <button className="generatePost__Button" type="submit">
        Publicar
      </button>
    </form>
  );
}

export default PostGenerate;
