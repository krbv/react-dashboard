import React, { Component } from "react";
//import { connect } from "react-redux";

export default class Pages extends Component {
  //constructor(props) {
  // super(props);
  // this.contentRef = React.createRef();
  // console.log("33", this.contentRef.current);
  // setTimeout(() => {
  //   this.contentRef.current.style.display = "none";
  //   console.log("33");
  // }, 1000);
  //console.log(, this.props);
  //this.props.onSetRef("tabContent"):
  //}

  // setContentRef = elm => {
  //   this.props.onSetRef("tabContent", elm);
  // };

  render() {
    return (
      <section className="tab-content">
        {/* ref={this.setContentRef} */}
        <div className="wrap">{this.props.pageComponent}</div>
      </section>
    );
  }
}

// export default connect(
//   state => ({}),
//   dispatch => ({
//     onSetRef: (name, element) => {
//       dispatch({
//         type: "MAIN_SET_REF",
//         payload: { name: element }
//       });
//     }
//   })
// )(Pages);
