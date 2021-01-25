<template>
  <a-row :gutter="gutters" :style="{ margin: '0px 10px 0px 10px' }">
    <a-col :key="i" v-for="i in 100" :span="8">
      <a-card
        size="small"
        hoverable
        :loading="loading"
        style="background-color: #292b3c"
        :bordered="false"
      >
        <a-card-meta title="Label" description="username@host">
          <template #avatar>
            <a-avatar size="large" :style="{ backgroundColor: '#1f4774' }">
              <template #icon>
                <DatabaseFilled :style="{ fontSize: '18px' }" />
              </template>
            </a-avatar>
          </template>
        </a-card-meta>
      </a-card>
    </a-col>
  </a-row>
</template>

<script>
import { DatabaseFilled } from "@ant-design/icons-vue";
export default {
  name: "GridHost",
  components: {
    DatabaseFilled,
  },
  props: {
    group: String,
  },
  data() {
    return {
      loading: false,
      gutters: [16, 16],
    };
  },
  created() {
    console.log("内部1")
    console.log(this.group);
    console.log("内部2")
  },
  computed: {},
  methods: {},
};
</script>

<style>
.ant-card-meta-title {
  color: white !important;
}
.ant-card-meta-description {
  color: white !important;
}
</style>
