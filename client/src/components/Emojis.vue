<template>
  <div class="container" id="emoji-list">
    <div v-for="(emoji, index) in emojis">
      <p
        v-html="emoji.hex"
        class="emoji"
        v-bind:id="'emoji-' + index"
        v-on:click="copy(emoji.hex, index)"
      ></p>
      <div class="copied">
        <span v-bind:id="index + '-copied'"></span>
      </div>
    </div>
  </div>
</template>

<script>
import Api from "../services/EmojiService";

export default {
  name: "Emojis",
  data() {
    return {
      emojis: []
    };
  },
  async created() {
    let emojis = await Api.getEmojis();
    this.emojis = emojis.data;

    // Scrolling the emoji-list
    // After the scrolling has started, wait 300ms and fire the scroll() -function
    let scrolling = false;
    $("#emojis").scroll(() => {
      if (!scrolling) {
        scrolling = true;

        setTimeout(() => {
          this.scroll();
          scrolling = false;
        }, 300);
      }
    });
  },
  mounted() {
    setTimeout(() => {
      this.scroll();
      this.hoverEmoji();

      let emojiArr = this.emojis;
      let dis = this;
      $("input").on("keyup", function() {
        let value = $(this)
          .val()
          .toLowerCase();

        if (value == "") $("#side-panel-clear").css("color", "white");

        value == ""
          ? $("#search input").css(
              "border-bottom",
              "1px solid rgba(90, 90, 90, 0.4)"
            )
          : $("#search input").css(
              "border-bottom",
              "2px solid rgb(0, 135, 189)"
            );

        $("#emoji-list div:not(.copied)").filter(function() {
          $(this).toggle(
            emojiArr[
              $(this)
                .children()
                .attr("id")
                .split("-")[1]
            ].title
              .toLowerCase()
              .indexOf(value) > -1
          );
        });
        dis.scroll();
      });
    }, 1000);
  },
  methods: {
    hoverEmoji() {
      let emojiArr = this.emojis;

      $(".emoji").mouseover(function() {
        let id = $(this)
          .attr("id")
          .split("-")[1];
        $("#preview-emoji").html(emojiArr[id].hex);

        let title =
          emojiArr[id].title.charAt(0).toUpperCase() +
          emojiArr[id].title.slice(1);
        $("#preview span").text(title);
      });
      $(".emoji").mouseleave(function() {
        $("#preview-emoji").html("");
        $("#preview span").text("");
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

      let i = 0;

      while (first == -1) {
        if (i <= this.emojis.length - 1) {
          let id = "#emoji-" + i;
          if (this.isScrolledIntoView($(id))) {
            first = i;
            break;
          }
        } else break;
        i++;
      }

      i = emojiAmount - 1;

      while (last == -1) {
        if (i >= 0) {
          let id = "#emoji-" + i;
          if (this.isScrolledIntoView($(id))) {
            last = i;
            break;
          }
        } else break;
        i--;
      }

      this.changeGroups(first, last);
    },

    changeGroups(first, last) {
      if (first == -1 || last == -1) {
        $("#groupH2").text("No emojis found");
        $("#subGroupH2").text("");
      } else {
        $("#groupH2").text(this.emojis[first].group);

        let subgroupF = this.emojis[first].subgroup;
        subgroupF = subgroupF[0].toUpperCase() + subgroupF.slice(1);

        let subgroupL = this.emojis[last].subgroup;
        subgroupL = subgroupL[0].toUpperCase() + subgroupL.slice(1);
        $("#subGroupH2").text(subgroupF);

        if (this.emojis[first].group != this.emojis[last].group)
          $("#groupH2").text(
            this.emojis[first].group + " - " + this.emojis[last].group
          );

        if (this.emojis[first].subgroup != this.emojis[last].subgroup)
          $("#subGroupH2").text(subgroupF + " - " + subgroupL);
      }
    },

    copy(e, id) {
      let input = document.createElement("input");
      document.body.appendChild(input);

      let s = document.createElement("span");
      document.body.appendChild(s);
      s.innerHTML = e;

      input.value = s.innerHTML;
      input.select();
      document.execCommand("copy", false);
      input.remove();
      s.remove();

      $(`#${id}-copied`).text("Copied!");
      $(`#${id}-copied`)
        .fadeIn(1000)
        .fadeOut(1000);
    }
  }
};
</script>

<style scoped lang='scss'>
.container {
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  .copied {
    height: 20px;
  }

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
