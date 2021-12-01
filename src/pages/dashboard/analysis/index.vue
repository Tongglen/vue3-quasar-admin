<template>
  <div class='q-ma-md'>
    <GrowCard  :loading="loading"/>
    <SiteAnalysis :loading="loading"/>
    <div class='q-ma-md flex card'>
      <VisitRadar class='col q-my-md' :loading="loading" />
      <VisitSource  class='q-ma-md col source' :loading="loading" />
      <SalesProductPie  class='col q-my-md' :loading="loading" />
    </div>
    <div style='height: 20px;width: 100%'></div>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import GrowCard from './components/GrowCard.vue';
  import SiteAnalysis from './components/SiteAnalysis.vue';
  import VisitSource from './components/VisitSource.vue';
  import VisitRadar from './components/VisitRadar.vue';
  import SalesProductPie from './components/SalesProductPie.vue';
  const loading = ref(true);

  setTimeout(() => {
    loading.value = false;
  }, 1500);
</script>

<style scoped lang='scss'>
@media (max-width: 800px ) {
  .card {
    display: block;
    .source {
      margin: 16px 0;
    }
  }
}

</style>
