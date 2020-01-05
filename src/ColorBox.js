import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {

    function opacityCheck(opacityNum) {
      if (opacityNum >= 0.2) {
        opacityNum -= 0.1
        return <ColorBox opacity={opacityNum}/>
      } else {
        return null
      }
    }

    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>   
      {/* //Note: The style attribute accepts a JavaScript object with camelCased properties rather than a CSS string */}
        {opacityCheck(this.props.opacity)}
      </div>
    )
  }

}

