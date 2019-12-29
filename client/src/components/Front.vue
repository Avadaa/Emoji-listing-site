<template>
  <div class="container">
    <div id="upper">
      <h1>Click to copy</h1>
      <div id="search">
        <input type="text" name="search" autocomplete="off" />
      </div>
    </div>

    <div id="emojis">
      <div id="preview">
        <div id="preview-emoji"></div>
        <span></span>
      </div>

      <div id="groups">
        <h2 id="groupH2"></h2>
        <h2 id="subGroupH2"></h2>
      </div>

      <Emojis />
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

  #emojis {
    margin-top: 80px;

    width: 80vw;
    height: 70vh;
    border: 2px solid grey;

    overflow-y: auto;

    #groups {
      display: flex;
      justify-content: space-around;

      position: sticky;
      top: 0;
      h2 {
        margin: 0px;

        width: 40vw;
      }
      background: white;
    }

    #preview {
      position: absolute;

      width: 400px;
      height: 200px;

      top: 20px;

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
}
</style>
