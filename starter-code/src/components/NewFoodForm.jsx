import React from "react";

class NewFoodForm extends React.Component {
  constructor() {
    super();
    this.state = { someKey: "someValue" };
  }
  newFood = () => {

  };

  render() {
    return (
      <h1>asjiogajwg</h1>
    );
  }

  componentDidMount() {
    this.setState({ someKey: "otherValue" });
  }
}

export default NewFoodForm;
