import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"
import {FADED_RED, GREY} from "./../../constants/colors"

function SvgUpdatePills(props) {
  return (
    <Svg
      width={130}
      height={130}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M67.16 40.916c0 15.479-12.6 28.04-28.16 28.04s-28.16-12.561-28.16-28.04c0-15.478 12.6-28.04 28.16-28.04s28.16 12.562 28.16 28.04zM10 41h58"
        stroke={FADED_RED}
        strokeWidth={4}
      />
      <Circle
        r={13}
        transform="rotate(-19.927 279.734 -16.497) skewX(.147)"
        stroke={GREY}
        strokeWidth={4}
      />
      <Path
        transform="rotate(-19.927 291.176 21.809) skewX(.147)"
        stroke={GREY}
        strokeWidth={4}
        d="M0-2h28"
      />
      <Circle
        r={13}
        transform="rotate(19.927 -21.194 277.921) skewX(-.147)"
        stroke={GREY}
        strokeWidth={4}
      />
      <Path
        transform="matrix(.94013 .34082 -.34323 .93925 79 21)"
        stroke={GREY}
        strokeWidth={4}
        d="M0-2h29"
      />
      <Path
        transform="scale(1.002 .998) rotate(45 -50.894 117.756)"
        stroke={FADED_RED}
        strokeWidth={4}
        d="M0-2h37.633"
      />
      <Path
        d="M112.474 79.87L78.11 114.098c-7.252 7.224-19.011 7.224-26.264 0-7.253-7.223-7.253-18.935 0-26.16L86.21 53.712c7.252-7.224 19.011-7.224 26.264 0 7.252 7.224 7.252 18.936 0 26.16z"
        stroke={FADED_RED}
        strokeWidth={4}
      />
    </Svg>
  )
}

export default SvgUpdatePills
