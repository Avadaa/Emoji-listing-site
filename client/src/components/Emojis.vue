<template>
  <div class="container">
    <div v-for="emoji in emojis">
      <p v-html="emoji.hex" class="emoji" v-bind:id="emoji.id"></p>
      <p class="emoji-name" style="color: white;" v-bind:id="'name' + emoji.id">{{emoji.title}}</p>
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
    }
  },
  mounted() {
    setTimeout(() => {
      this.hoverEmoji();
    }, 1000);
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
  }
}
</style>
