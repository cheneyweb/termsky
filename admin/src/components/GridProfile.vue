<template>
  <a-row :gutter="gutters" style="margin-left: 10px; margin-right: 10px">
    <a-col :key="i" v-for="i in 10" :span="6">
      <a-card size="small" hoverable>
        <p>Label</p>
        <p>username@host</p>
      </a-card>
    </a-col>
  </a-row>
</template>

<script>
export default {
  name: "GridProfile",
  components: {},
  data() {
    return {
      gutters: [16, 16],
    };
  },
  computed: {},
  methods: {},
};
</script>

<style scoped>
</style>
