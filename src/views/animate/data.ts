const animateList = [
  {
    label: "进入",
    children: [
      { label: "渐显", value: "fadeIn" },
      { label: "向左进入", value: "fadeInLeft" },
      { label: "向右进入", value: "fadeInRight" },
      { label: "向上进入", value: "fadeInUp" },
      { label: "向下进入", value: "fadeInDown" },
      { label: "向左长距进入", value: "fadeInLeftBig" },
      { label: "向右长距进入", value: "fadeInRightBig" },
      { label: "向上长距进入", value: "fadeInUpBig" },
      { label: "向下长距进入", value: "fadeInDownBig" },

      { label: "旋转进入", value: "rotateIn" },
      { label: "左顺时针旋转", value: "rotateInDownLeft" },
      { label: "右顺时针旋转", value: "rotateInUpRight" },
      { label: "左逆时针旋转", value: "rotateInUpLeft" },
      { label: "右逆时针旋转", value: "rotateInDownRight" },

      { label: "弹入", value: "bounceIn" },
      { label: "向左弹入", value: "bounceInLeft" },
      { label: "向右弹入", value: "bounceInRight" },
      { label: "向上弹入", value: "bounceInUp" },
      { label: "向下弹入", value: "bounceInDown" },

      { label: "由小变大进入", value: "zoomIn" },
      { label: "左变大进入", value: "zoomInLeft" },
      { label: "右变大进入", value: "zoomInRight" },
      { label: "由上变大进入", value: "zoomInUp" },
      { label: "由下变大进入", value: "zoomInDown" },

      { label: "左光速进入", value: "lightSpeedInLeft" },
      { label: "右光速进入", value: "lightSpeedInRight" },

      { label: "X轴旋转进入", value: "flipInX" },
      { label: "Y轴旋转进入", value: "flipInY" },
    ],
  },

  {
    label: "退出",
    children: [
      { label: "渐隐", value: "fadeOut" },
      { label: "向左退出", value: "fadeOutLeft" },
      { label: "向右退出", value: "fadeOutRight" },
      { label: "向上退出", value: "fadeOutUp" },
      { label: "向下退出", value: "fadeOutDown" },
      { label: "向左长距退出", value: "fadeOutLeftBig" },
      { label: "向右长距退出", value: "fadeOutRightBig" },
      { label: "向上长距退出", value: "fadeOutUpBig" },
      { label: "向下长距退出", value: "fadeOutDownBig" },

      { label: "旋转退出", value: "rotateOut" },
      { label: "左顺时针旋转", value: "rotateOutDownLeft" },
      { label: "右顺时针旋转", value: "rotateOutUpRight" },
      { label: "左逆时针旋转", value: "rotateOutUpLeft" },
      { label: "右逆时针旋转", value: "rotateOutDownRight" },

      { label: "弹出", value: "bounceOut" },
      { label: "向左弹出", value: "bounceOutLeft" },
      { label: "向右弹出", value: "bounceOutRight" },
      { label: "向上弹出", value: "bounceOutUp" },
      { label: "向下弹出", value: "bounceOutDown" },

      { label: "由大变小退出", value: "zoomOut" },
      { label: "左变小退出", value: "zoomOutLeft" },
      { label: "右变小退出", value: "zoomOutRight" },
      { label: "向上变小退出", value: "zoomOutUp" },
      { label: "向下变小退出", value: "zoomOutDown" },

      { label: "左光速退出", value: "lightSpeedOutLeft" },
      { label: "右光速退出", value: "lightSpeedOutRight" },

      { label: "X轴旋转退出", value: "flipOutX" },
      { label: "Y轴旋转退出", value: "flipOutY" },
    ],
  },
  {
    label: "强调",
    children: [
      { label: "弹跳", value: "bounce" },
      { label: "闪烁", value: "flash" },
      { label: "放大缩小弹簧", value: "rubberBand" },
      { label: "左右晃动", value: "shakeX" },
      { label: "上下晃动", value: "shakeY" },
      { label: "左右小幅晃动", value: "headShake" },
      { label: "左右扇形摇摆", value: "swing" },
      { label: "放大晃动缩小", value: "tada" },
      { label: "左右上下晃动", value: "jello" },
    ],
  },
]

export default animateList
