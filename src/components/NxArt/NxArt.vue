<script>
export default {
    name: 'NxArt',
    render(h) {
        return h(
            'div',
            {
                class: 'nx-art'
            },
            this.$slots.default
        )
    }
}
</script>

<style lang='scss' scoped>
.nx-art {
  @for $i from 1 through 3 {
    h#{$i} {
      @if $i == 1 {
        text-align: center;
      }
      font-family: "Avenir", "Avenir Medium", sans-serif, "Helvetica Neue";
      font-weight: 300;
      color: #333;
    }
  }
  p,
  li {
    font-weight: 200;
    font-family: "Times New Roman";
    text-indent: 0;
    color: #666;
  }
  ul {
    margin-left: 0.6rem;
  }
  li {
    list-style: square;
    margin-left: 0.6rem;
  }
}

// pc
@media screen and (min-width: 1366px) {
  .nx-art {
    width: 80%;
    margin: 0 auto;
    padding: 0.5rem 0;
    @for $i from 1 through 3 {
      h#{$i} {
        font-size: 1-$i * 0.2rem;
        line-height: 1rem;
      }
    }
    p,
    li {
      font-size: 0.3rem;
      line-height: 0.5rem;
    }
    p {
      //text-indent: 0.6rem;
    }
    li > p {
      text-indent: 0;
    }
  }
}

/* pad格式 暂时不处理 业务没有pad 当作pc处理 */
@media screen and (min-width: 600px) and (max-width: 960px) {
  .nx-art {
    width: 80%;
    margin: 0 auto;
    padding: 0.5rem 0;
    @for $i from 1 through 3 {
      h#{$i} {
        font-size: 1-$i * 0.2rem;
        line-height: 1rem;
      }
    }
    p,
    li {
      font-size: 0.3rem;
      line-height: 0.5rem;
    }
    p {
      //text-indent: 0.6rem;
    }
    li > p {
      text-indent: 0;
    }
  }
}

/* 所有手机竖屏 正常 */
@media screen and (max-width: 960px) and (orientation: portrait) {
  .nx-art {
    width: 80%;
    margin: 0 auto;
    padding: 0.5rem 0;
    //	@for $i from 1 through 3 {
    //		h#{$i} {
    //			font-size: 3-$i*.6rem;
    //			line-height:3-$i*.5rem;
    //		}
    //}
    h1 {
      font-size: 1.6rem;
      line-height: 2rem;
    }
    h2 {
      font-size: 1.4rem;
      line-height: 1.8rem;
    }
    h3 {
      font-size: 1.2rem;
      line-height: 1.6rem;
    }
    p,
    li {
      font-size: 1rem;
      line-height: 1.2rem;
    }
    p {
      //text-indent: 1rem;
    }
    li > p {
      text-indent: 0;
    }
  }
}

/* 所有手机横屏 */
@media screen and (max-width: 960px) and (orientation: landscape) {
  .nx-art {
    width: 80%;
    margin: 0 auto;
    padding: 0.5rem 0;
    //	@for $i from 1 through 3 {
    //		h#{$i} {
    //			font-size: 3-$i*.6rem;
    //			line-height:3-$i*.5rem;
    //		}
    //}
    h1 {
      font-size: 1.6rem;
      line-height: 2rem;
      margin: 5px 0;
    }
    h2 {
      font-size: 1.4rem;
      line-height: 1.8rem;
      margin: 5px 0;
    }
    h3 {
      font-size: 1.2rem;
      line-height: 1.6rem;
      margin: 5px 0;
    }
    p,
    li {
      font-size: 1rem;
      line-height: 1.2rem;
    }
    p {
      //text-indent: 1rem;
    }
    li > p {
      text-indent: 0;
    }
  }
}
</style>