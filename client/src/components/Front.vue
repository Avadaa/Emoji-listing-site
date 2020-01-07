<template>
  <div class="container">
    <div id="upper">
      <div id="title-div">
        <h1>🖱️📲Click to copy📝</h1>
      </div>
      <div id="preview">
        <div id="preview-emoji"></div>
        <span></span>
      </div>
    </div>
    <div id="search">
      <input type="text" name="search" autocomplete="off" placeholder="Search" />
    </div>
    <div id="emoji-panel">
      <div id="emojis">
        <div id="groups">
          <h2 id="groupH2"></h2>
          <h2 id="subGroupH2"></h2>
        </div>

        <Emojis />
      </div>
      <div id="side-panel">
        <div id="panel-smiley">😀</div>
        <div id="panel-body">👷</div>
        <div id="panel-animal">🐶</div>
        <div id="panel-flower">🌻</div>
        <div id="panel-food">🍕</div>
        <div id="panel-place">🏘️</div>
        <div id="panel-weather">☁️</div>
        <div id="panel-activity">♟️</div>
        <div id="panel-object">▶️</div>
        <div id="panel-flag">🏴</div>
      </div>
    </div>
  </div>
</template>

<script>
import Emojis from "./Emojis";

export default {
  name: "Front",
  components: { Emojis },
  data() {
    return {
      msg: "dd"
    };
  }
};
</script>

<style scoped lang='scss'>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;

  #emoji-panel {
    display: flex;
  }

  #search {
    position: relative;
    height: 40px;

    left: calc(40vw - 135px);
    bottom: 10px;

    font-size: 2em;
    color: rgb(90, 90, 90);
    input {
      border: 0;
      width: 250px;
      font-size: 30px;
      color: rgb(90, 90, 90);

      border-bottom: 1px solid rgba(90, 90, 90, 0.4);

      &:focus {
        outline: 0;
      }

      &::-webkit-input-placeholder {
        padding-left: 150px;
      }
    }
  }

  #emojis {
    width: 80vw;
    height: 70vh;
    position: relative;
    left: 15px;

    overflow-y: auto;

    #groups {
      display: flex;
      justify-content: space-around;

      position: sticky;
      top: 0;
      h2 {
        margin: 0px;

        width: 40vw;
        color: rgb(0, 135, 189);
        font-weight: 100;
      }
      background: white;
    }
  }

  #upper {
    top: 20px;
    width: 80vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    #title-div {
      position: absolute;
      width: 98vw;
      left: 0;
      h1 {
        font-size: 3em;
      }
    }
    #preview {
      width: 400px;
      height: 200px;

      span {
        font-size: 20px;
      }

      #preview-emoji {
        height: 150px;
        width: 150px;

        position: relative;
        left: 125px;
        font-size: 100px;
      }
    }
  }

  #side-panel {
    position: relative;
    left: 15px;
    height: 440px;
    width: 50px;
    border-radius: 0 10px 10px 0;
    background: rgb(221, 245, 255);

    user-select: none;

    font-size: 2em;
  }
}

@media screen and (max-width: 1400px) {
  #upper {
    height: 400px;
    justify-content: center !important;

    #preview {
      position: relative;
      top: 50px;
    }

    #title-div {
      top: 0 !important;
    }
  }

  #emojis {
    position: relative;
    top: -150px !important;
  }

  #search {
    top: -150px;
  }

  #side-panel {
    top: -150px;
  }
}
</style>
