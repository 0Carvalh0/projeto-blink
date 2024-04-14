import PostGenerate from "../postGenerate/postGenerate.js";
import PostContent from "../postContent/postContent.js"

function MainContent() {
    return (
        <main className="main__Content">
            <PostGenerate />
            <PostContent />
        </main>
    )
}

export default MainContent;
