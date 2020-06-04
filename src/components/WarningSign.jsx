import React from "react"
import {Alert} from "react-bootstrap"

class WarningSign extends React.Component {
  render() {
    return (
      [
        
        'danger',
        
      ].map((variant, idx) => (
        <Alert key={idx} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))

    )
  }
}

export default WarningSign