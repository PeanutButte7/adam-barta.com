<template>
  <div class="home mt-5 ml-5 mr-5">
    <b-container>
      <b-row>
        <b-col><SmallCard headline="GPFC" img-source="../assets/SmallCard_GPFC.png"></SmallCard></b-col>
        <b-col><SmallCard headline="GPFC" img-source="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F78.media.tumblr.com%2F10776e624890ff1b69653e6a0b649b1e%2Ftumblr_inline_ortrrhjE1f1qzf6t4_540.png&f=1&nofb=1"></SmallCard></b-col>
        <b-col><SmallCard headline="GPFC" img-source="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F78.media.tumblr.com%2F10776e624890ff1b69653e6a0b649b1e%2Ftumblr_inline_ortrrhjE1f1qzf6t4_540.png&f=1&nofb=1"></SmallCard></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import SmallCard from "../components/SmallCard";

export default {
  name: 'home',
  components: {
    SmallCard
  }
}
</script>


