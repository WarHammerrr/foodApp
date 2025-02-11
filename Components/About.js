import ProfileClass from "./ProfileClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>about page</h1>
        <ProfileClass name="First Child " />
      </div>
    );
  }
}
export default About;
