import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { GREY } from "../../../constants/colors"

function SvgStars(props) {
  return (
    <Svg
      width={39}
      height={38}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M18.549.927c.3-.921 1.603-.921 1.902 0l3.876 11.93a1 1 0 00.951.69h12.543c.969 0 1.372 1.24.588 1.81L28.26 22.728a1 1 0 00-.363 1.118l3.876 11.929c.3.921-.755 1.687-1.539 1.118L20.088 29.52a1 1 0 00-1.176 0L8.765 36.894c-.784.57-1.838-.197-1.54-1.118l3.877-11.93a1 1 0 00-.363-1.117L.59 15.356c-.784-.57-.38-1.809.588-1.809h12.543a1 1 0 00.95-.69L18.55.926z"
        fill={props.color ? props.color : GREY}
      />
    </Svg>
  )
}

export default SvgStars
