<template>
<div class="bg-body h-100vh">
  <vtm-header />
  <router-view />
</div>
</template>

<script>
import VtmHeader from "@/components/Header.vue";

export default {
  components: {VtmHeader}
}
</script>
