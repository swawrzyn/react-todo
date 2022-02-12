import React from "react";

type Props = {
  color: string;
};
export default class SimpleButton extends React.Component {
  render() {
    return (
      <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        {this.props.children}
      </button>
    );
  }
}
