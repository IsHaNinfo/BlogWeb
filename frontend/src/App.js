import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <main>
        <header>
          <a href="" className="logo">
            MyBlog
          </a>
          <nav>
            <a href="">Login</a>
            <a href="">Register</a>
          </nav>
        </header>
        <div className="post">
          <div className="image">
            <img src="https://cdn-images-1.medium.com/max/1000/1*wUgo26aGsy1HMerugYrYsg.jpeg"></img>
          </div>{" "}
          <div className="texts">
            <h2>The DevOps Lifecycle</h2>
            <p className="info">
              <a className="author">Dawid paszko</a>
              <time>2023-02-08 16:45</time>
            </p>
            <p className="summary">
              DevOps is a collection of cultural philosophies, practices, and
              tools that increase an organization's ability to deliver
              applications and services at high velocity.
            </p>
          </div>
        </div>
        <div className="post">
          <div className="image">
            <img src="https://cdn-images-1.medium.com/max/1000/1*wUgo26aGsy1HMerugYrYsg.jpeg"></img>
          </div>
          <div className="texts">
            <h2>The DevOps Lifecycle</h2>
            <p className="info">
              <a className="author">Dawid paszko</a>
              <time>2023-02-08 16:45</time>
            </p>
            <p className="summary">
              DevOps is a collection of cultural philosophies, practices, and
              tools that increase an organization's ability to deliver
              applications and services at high velocity.
            </p>
          </div>
        </div>
        <div className="post">
          <div className="image">
            <img src="https://cdn-images-1.medium.com/max/1000/1*wUgo26aGsy1HMerugYrYsg.jpeg"></img>
          </div>{" "}
          <div className="texts">
            <h2>The DevOps Lifecycle</h2>
            <p className="info">
              <a className="author">Dawid paszko</a>
              <time>2023-02-08 16:45</time>
            </p>
            <p className="summary">
              DevOps is a collection of cultural philosophies, practices, and
              tools that increase an organization's ability to deliver
              applications and services at high velocity.
            </p>
          </div>
        </div>
        <div className="post">
          <div className="image">
            <img src="https://cdn-images-1.medium.com/max/1000/1*wUgo26aGsy1HMerugYrYsg.jpeg"></img>
          </div>{" "}
          <div className="texts">
            <h2>The DevOps Lifecycle</h2>
            <p className="info">
              <a className="author">Dawid paszko</a>
              <time>2023-02-08 16:45</time>
            </p>
            <p className="summary">
              DevOps is a collection of cultural philosophies, practices, and
              tools that increase an organization's ability to deliver
              applications and services at high velocity.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
