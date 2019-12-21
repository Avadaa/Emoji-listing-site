<template>
  <div class="container"></div>
</template>

<script>
import service from "../services/EmojiService";

export default {
  name: "Emojis",
  data() {
    return {};
  },
  async created() {
    let asd = await service.getEmojis({ dd: "asd" });
    console.log(asd);
  }
};
</script>

<style scoped lang='scss'>
</style>
