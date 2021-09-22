import * as React from "react"
import Svg, { Path } from "react-native-svg"
import {BLACK} from "./../../constants/colors"


function SvgBackCross(props) {
  return (
    <Svg
      width={22}
      height={21}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        transform="scale(.99118 1.00874) rotate(45 -.517 2.137)"
        stroke={BLACK}
        d="M0-.5h28.039"
      />
      <Path
        transform="matrix(.70087 -.71329 .70087 .71329 1 21)"
        stroke={BLACK}
        d="M0-.5h28.039"
      />
    </Svg>
  )
}

export default SvgBackCross