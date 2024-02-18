import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "./Main";
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="container flex">
          <Main />
        </div>
      </>
    );
  }
}
export default App;
