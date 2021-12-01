<template>
  <q-card
    class='q-ma-md'
  >
    <q-tabs
      v-model="tab"
      dense
      class="text-grey"
      active-color="primary"
      indicator-color="primary"
      align="justify"
      narrow-indicator
    >
      <q-tab name="mails" label="流量趋势" />
      <q-tab name="alarms" label="访问量" />
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="mails">
        <VisitAnalysis />
      </q-tab-panel>

      <q-tab-panel name="alarms">
        <VisitAnalysisBar />
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import VisitAnalysis from './VisitAnalysis.vue';
  import VisitAnalysisBar from './VisitAnalysisBar.vue';

  const tab =  ref('mails')

</script>
