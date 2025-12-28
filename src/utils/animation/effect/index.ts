import fade from "./fade"
import rotate, { rotateIn } from "./rotate"
import bounce from "./bounce"
import zoom from "./zoom"
import lightSpeed from "./lightSpeed"
import flip from "./flip"
import emphasis from "./emphasis"

export default {
  ...fade,
  ...rotate,
  ...bounce,
  ...zoom,
  ...lightSpeed,
  ...flip,
  ...emphasis,
}

export const hiddenEffect = {
  fadeIn: true,
  fadeInUp: true,
  fadeInDown: true,
  fadeInLeft: true,
  fadeInRight: true,
  fadeInUpBig: true,
  fadeInDownBig: true,
  fadeInLeftBig: true,
  fadeInRightBig: true,
  rotateIn: true,
  rotateInDownLeft: true,
  rotateInDownRight: true,
  rotateInUpLeft: true,
  rotateInUpRight: true,
  bounceIn: true,
  bounceInUp: true,
  bounceInDown: true,
  bounceInLeft: true,
  bounceInRight: true,
  zoomIn: true,
  zoomInUp: true,
  zoomInDown: true,
  zoomInLeft: true,
  zoomInRight: true,
  lightSpeedIn: true,
  lightSpeedInRight: true,
  lightSpeedInLeft: true,
  flipInX: true,
  flipInY: true,
} as Record<string, boolean>
