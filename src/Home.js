import me from "./static/images/me.JPG";
function Home() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h6 id="title">Full Stack Software Engineer</h6>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <p id="design">I design and code beautifully simple things....</p>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h6 id="title">Full Software Engineer</h6>
          </div>
          <div className="col-4">
            <div>
              <img src={me} id="image"></img>
            </div>
          </div>
          <div className="col-4">
            <h6 id="title">Full Software Engineer</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
