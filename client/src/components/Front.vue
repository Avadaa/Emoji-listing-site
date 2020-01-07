<template>
  <div class="container">
    <div id="upper">
      <div id="title-div">
        <h1 id="title-normal">🖱️📲Click to copy📝</h1>
        <h1 id="title-mobile">Click to copy</h1>
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

        <Emojis :child="child" ref="form" />
      </div>
      <div id="side-panel">
        <div v-for="(emoji, index) in sidebar">
          <div v-html="emoji[2]" v-on:click="scroll(index)"></div>
        </div>
        <div id="side-panel-clear" v-on:click="scroll(sidebarLastIndex)">Clear</div>
      </div>
    </div>
  </div>
</template>

<script>
import Emojis from "./Emojis";
import Api from "../services/EmojiService";

export default {
  name: "Front",
  components: { Emojis },
  data() {
    return {
      sidebar: [],
      sidebarLastIndex: 0,
      child: {}
    };
  },
  async created() {
    let sidebar = await Api.getSidebar();
    this.sidebar = sidebar.data;
    this.sidebarLastIndex = sidebar.data.length - 1;
  },
  methods: {
    scroll(index) {
      $("input").val("");
      $("#search input").css(
        "border-bottom",
        "1px solid rgba(90, 90, 90, 0.4)"
      );

      let sidebar = this.sidebar;
      let EmojiChild = this.$refs.form;

      $("#emoji-list div:not(.copied)").filter(function() {
        $(this).toggle(
          $(this)
            .children()
            .attr("id")
            .split("-")[1] >= sidebar[index][0] &&
            $(this)
              .children()
              .attr("id")
              .split("-")[1] <= sidebar[index][1]
        );
      });
      $("#emojis").scrollTop(0);
      EmojiChild.scroll();

      if (index != this.sidebarLastIndex)
        $("#side-panel-clear").css("color", "#2c3e50");
      else $("#side-panel-clear").css("color", "#cdf1ff");
    }
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
    //color: rgb(90, 90, 90);
    color: white;
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

        &:first-child {
          border-right: none;
        }
      }
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
        user-select: none;
      }
      #title-mobile {
        display: none;
      }
    }
    #preview {
      width: 400px;
      height: 200px;
      margin-top: -30px;

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
    border-left: 1px dashed rgb(133, 200, 209);

    user-select: none;

    font-size: 2em;

    #side-panel-clear {
      font-size: 0.55em;
      margin-top: 15px;
      color: #cdf1ff;
    }
  }
}

@media screen and (max-width: 1260px) {
  #upper {
    height: 250px;
    justify-content: center !important;

    #preview {
      position: relative;
      top: 60px;
    }

    #title-div {
      top: 0 !important;
    }
  }

  h2:first-child {
    border-right: none;
  }
}

@media screen and (max-width: 600px) {
  #upper {
    height: 60px;
    justify-content: center !important;

    #preview {
      display: none;
    }
  }

  h2:first-child {
    border-right: 3px solid rgb(166, 230, 255) !important;
  }

  #title-normal {
    display: none;
  }
  #title-mobile {
    display: inline !important;
    position: relative;
    top: 35px;
  }
}
</style>
