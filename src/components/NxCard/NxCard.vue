<template>
  <div
    class="nx-card"
    :style="{
      height: cardHeight,
      width: cardWidth,
      backgroundColor: backgroundColor,
    }"
    @click="handleClickCard"
  >
    <div class="left">
      <template v-if="data.icon">
        <i
          :class="`iconfont icon-${data.icon} left-icon`"
          :style="{ fontSize: iconSize, color: iconColor }"
        />
      </template>
      <template v-else-if="data.svg">
        <nx-icon class="right-svg" :name="data.svg" height="70%" width="70%" />
      </template>
    </div>
    <div class="right">
      <!-- safari渐变存在bug -->
      <div
        class="title"
        :style="{
          color: `${titleFontBg}`,
        }"
      >
        {{ data.title }}
      </div>
      <div class="body" :style="{ color: `${bodyFontBg}` }">
        {{ data.body }}
      </div>
    </div>
  </div>
</template>

<script>
import NxIcon from '../NxIcon/NxIcon.vue'
import adaptation from '@/helpers/mixins/adaptation'
import { downloadFile } from '@/helpers/utils'
export default {
    name: 'NxCard',
    components: {
        NxIcon
    },
    mixins: [adaptation],
    props: {
        data: {
            type: Object,
            default: () => {}
        },
        /* 以下props抽空整理出来成为Object */
        phoneVerticalHeight: {
            type: String,
            default: ''
        },
        phoneHorizaontalHeight: {
            type: String,
            default: ''
        },
        pcHeight: {
            type: String,
            default: ''
        },
        padHeight: {
            type: String,
            default: ''
        },
        phoneVerticalWidth: {
            type: String,
            default: ''
        },
        phoneHorizaontalWidth: {
            type: String,
            default: ''
        },
        pcWidth: {
            type: String,
            default: ''
        },
        padWidth: {
            type: String,
            default: ''
        },
        /* icon大小 */
        phoneVertIconSize: {
            type: String,
            default: ''
        },
        phoneHoriIconSize: {
            type: String,
            default: ''
        },
        pcIconSize: {
            type: String,
            default: ''
        },
        padIconSIze: {
            type: String,
            default: ''
        },
        /* title字体颜色 */
        titleFontBg: {
            type: String,
            default: 'to right, rgb(223, 233, 243) 0%, rgb(255, 255, 255) 100%'
        },
        bodyFontBg: {
            type: String,
            default: 'to right, #00dbde 0%, #fc00ff 100%'
        },
        backgroundColor: {
            type: String,
            default: ''
        },
        iconColor: {
            type: String,
            default: ''
        }
    },
    computed: {
        cardHeight() {
            const heightMap = {
                'phone-vertical': this.phoneVerticalHeight,
                'phone-horizontal': this.phoneHorizaontalHeight,
                pc: this.pcHeight,
                pad: this.padHeight
            }
            return heightMap[this.currentDev]
        },
        cardWidth() {
            const widthMap = {
                'phone-vertical': this.phoneVerticalWidth,
                'phone-horizontal': this.phoneHorizaontalWidth,
                pc: this.pcWidth,
                pad: this.padWidth
            }
            return widthMap[this.currentDev]
        },
        iconSize() {
            const iconSizeMap = {
                'phone-vertical': this.phoneVertIconSize,
                'phone-horizontal': this.phoneHoriIconSize,
                pc: this.pcIconSize,
                pad: this.padIconSIze
            }
            return iconSizeMap[this.currentDev]
        },
        isSafari() {
            return (
                /Safari/.test(navigator.userAgent) &&
        !/Chrome/.test(navigator.userAgent)
            )
        }
    },
    created() {
        console.log(this.isSafari, 'isSafari')
    },
    methods: {
        handleClickCard() {
            if (this.data?.link) {
                downloadFile(this.data.link)
            }
            this.$emit('click', this.data)
        }
    }
}
</script>

<style lang='scss'>
.nx-card {
  display: flex;
  cursor: pointer;
  background: black;
  color: #fff;
  div:focus {
    outline: none;
    user-select: none;
  }
  .left {
    width: 36%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    font-family: "Times New Roman", "Courier New", Helvetica, "Hiragino Sans GB",
      "Microsoft Yahei", 微软雅黑, Arial, sans-serif;
    .title {
      flex: 1;
      text-align: left;
			font-style: italic;
      transform: translateY(40%);
      font-family: "Times New Roman", "Courier New", Helvetica,
        "Hiragino Sans GB", "Microsoft Yahei", 微软雅黑, Arial, sans-serif;
    }
    .title-gradient {
      //background-clip: text;
      //font-style: italic;
      //color: transparent;
    }
    .body {
      flex: 1;
      text-align: left;
      font-weight: 600;
    }
    .body-gradient {
      //background-clip: text;
      //color: transparent;
    }
  }
}

@media screen and (min-width: 1366px) {
  .nx-card {
    width: 3.5rem;
    height: 1rem;
    border-radius: 0.2rem;
    &:hover {
      // 只在PC端存在 否则所有扩大1.2倍 手机 真机测试会有问题 focus后背景色变大 出现边框
      transform: scale(1.02);
    }
    .left {
      .left-icon {
        font-size: 0.67rem;
      }
    }
    .right {
      .title {
        font-size: 0.25rem;
      }
      .body {
        font-size: 0.25rem;
      }
    }
  }
}
// pad格式 暂时不处理 业务没有pad 当作PC处理
@media screen and (min-width: 769px) and (max-width: 1366px) {
  .nx-card {
    border-radius: 0.2rem;
    height: 1.2rem;
    width: 4.2rem;
    .left {
      .left-icon {
        font-size: 0.8rem;
      }
    }
    .title {
      font-size: 0.2rem;
    }
    .body {
      font-size: 0.4rem;
    }
  }
}

/* 所有手机竖屏 正常 */
@media screen and (max-width: 769px) and (orientation: portrait) {
  .nx-card {
    border-radius: 0.5rem;
    height: 3rem;
    width: 12rem;
    background-color: black;
    .left {
      .left-icon {
        font-size: 2.6rem;
      }
    }
  }
}

/* 所有手机横屏 */
@media screen and (max-width: 769px) and (orientation: landscape) {
  .nx-card {
    border-radius: 0.2rem;
    height: 1.8rem;
    width: 6.4rem;
    .left {
      .left-icon {
        font-size: 1.4rem;
      }
    }
    .title {
      font-size: 0.4rem;
    }
    .body {
      font-size: 0.6rem;
    }
  }
}
</style>