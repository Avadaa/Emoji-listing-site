<template>
  <div class="container">
    <div id="emojis">
      <div id="upper">
        <div id="preview">
          <div id="preview-emoji"></div>
          <span></span>
        </div>
        <div id="search">
          <input type="text" name="search" autocomplete="off" placeholder="Search" />
        </div>
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
    margin-top: 165px;

    width: 80vw;
    height: 70vh;

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

    #upper {
      position: absolute;
      top: 20px;
      width: 80vw;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      #search {
        position: relative;
        top: 150px;
        height: 40px;

        font-size: 2em;
        color: rgb(90, 90, 90);
        input {
          border: 0;
          width: 250px;
          font-size: 30px;
          color: rgb(90, 90, 90);

          &:focus {
            outline: 0;
          }

          &::-webkit-input-placeholder {
            padding-left: 150px;
          }
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
  }
}
</style>
