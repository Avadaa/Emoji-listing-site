<template>
  <div class="container" id="emoji-list">
    <div v-for="(emoji, index) in emojis">
      <p v-html="emoji.hex" class="emoji" v-bind:id="'emoji-' + index"></p>
      <!--<p class="emoji-name" style="color: white;" v-bind:id="'name' + index">{{emoji.title}}</p>-->
      <p class="emoji-name" style="color: black;" v-bind:id="' ' + index">{{index}}</p>
    </div>
  </div>
</template>

<script>
import service from "../services/EmojiService";

export default {
  name: "Emojis",
  data() {
    return {
      emojis: []
    };
  },
  async created() {
    let emojis = await service.getEmojis();
    this.emojis = emojis.data;

    // Scrolling the emoji-list
    // After the scrolling has started, wait 500ms and fire the scroll() -function
    let scrolling = false;
    $("#emojis").scroll(() => {
      if (!scrolling) {
        scrolling = true;

        setTimeout(() => {
          this.scroll();
          scrolling = false;
        }, 500);
      }
    });
  },
  mounted() {
    setTimeout(() => {
      this.hoverEmoji();

      //console.log(this.isScrolledIntoView($("#name50")));
      //console.log(this.isScrolledIntoView($(".emoji")[49]));
    }, 1000);
  },
  methods: {
    hoverEmoji() {
      $(".emoji").mouseover(function() {
        let id = "#" + "name" + $(this).attr("id");
        $(id).css({ color: "#2c3e50" });
      });
      $(".emoji").mouseleave(function() {
        let id = "#" + "name" + $(this).attr("id");
        $(id).css({ color: "white" });
      });
    },

    // Checks whether or not the 'elem' is visible
    isScrolledIntoView(elem) {
      var docViewTop = $(document).scrollTop();
      var docViewBottom = docViewTop + $(document).height();

      var elemTop = $(elem).offset().top - 160;
      var elemBottom = elemTop + $(elem).height() + 200;

      return elemBottom <= docViewBottom && elemTop >= docViewTop;
    },

    // Finds which groups and subgroups are visible after scrolling or searching
    scroll() {
      // Find which emoji id is the first and last visible
      var a = document.getElementById("emojis").scrollTop;
      var b =
        document.getElementById("emojis").scrollHeight -
        document.getElementById("emojis").clientHeight;
      let percentScrolled = a / b;
      let emojiAmount = this.emojis.length;

      let first = -1;
      let last = -1;

      let i =
        emojiAmount * percentScrolled - 70 >= 0
          ? Math.floor(emojiAmount * percentScrolled - 70)
          : 0;

      while (!(first != -1 && last != -1)) {
        let id = "#emoji-" + i;
        if (first == -1 && this.isScrolledIntoView($(id))) first = i;
        if (
          first != -1 &&
          (i == emojiAmount || !this.isScrolledIntoView($(id)))
        )
          last = i - 1;
        i++;
      }

      console.log("first: " + first + "   last: " + last);
    }
  }
};
</script>

<style scoped lang='scss'>
.container {
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  .emoji {
    margin: 15px;
    padding: 5px;

    font-size: 50px;
    border: 2px solid white;
    border-radius: 5px;

    &:hover {
      border: 2px solid rgb(207, 207, 207);
      cursor: default;
    }
  }
  .emoji-name {
    margin: 0;
    margin-top: -10px;
    user-select: none;
  }
}
</style>
