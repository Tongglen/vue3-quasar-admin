<template>
  <div class="q-pa-md row q-gutter-md card" >
    <template v-for="(item) in growCardList" :key="item.title">
      <q-card
        class='col'
      >
        <div class='row justify-between'>
          <q-card-section class="q-py-none" style='line-height: 32px'>
            {{ item.title }}
          </q-card-section>
          <q-card-section class="q-pa-none">
            <q-chip outline square :color="item.color" text-color="item.color">
              {{ item.action }}
            </q-chip>
          </q-card-section>

        </div>
        <q-separator />
        <div class='row justify-between'>
          <q-card-section style='line-height: 32px;font-size: 20px'>
            <CountTo prefix="$" :startVal="1" :endVal="item.value" class="text-2xl" />
          </q-card-section>
          <q-card-section>
            <q-icon name="print" class="text-teal" style="font-size: 4.4em;" />
          </q-card-section>
        </div>

        <div class="row justify-between">
          <q-card-section class="q-pr-none" style='line-height: 24px;font-size: 16px'>
            <span>总{{ item.title }}</span>
          </q-card-section>
          <q-card-section class="q-pl-none" style='line-height: 24px;font-size: 16px'>
            <CountTo prefix="$" :startVal="1" :endVal="item.total" />
          </q-card-section>
        </div>
      </q-card>
    </template>
  </div>
</template>
<script lang="ts" setup>
import { CountTo } from 'components/CountTo';
import { growCardList } from '../data';

defineProps({
  loading: {
    type: Boolean,
  },
});
</script>

<style scoped lang='scss'>
@media (max-width: 800px ) {
  .card {
    display: block;
    width: 100%
  }
}
</style>

