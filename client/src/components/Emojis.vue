<template>
  <div class="container">
    <div v-for="emoji in emojis">
      <p v-html="emoji.hex" class="emoji"></p>
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
    console.log(this.emojis[2].hex);
  },
  mounted() {}
};
</script>

<style scoped lang='scss'>
.container {
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  .emoji {
    margin: 15px;
    //padding: 10px;

    font-size: 40px;
    border: 1px solid rgb(206, 206, 206);
    border-radius: 5px;
  }
}
</style>
