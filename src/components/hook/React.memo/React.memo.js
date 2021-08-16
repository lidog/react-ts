import React from "react";

function memo(OldComponent) {
  return class extends React.PureComponent {
    render() {
      return <OldComponent {...this.props} />;
    }
  };
}
