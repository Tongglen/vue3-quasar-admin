<template>
  <q-layout view="hHh LpR fff">

    <q-header bordered class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>

          <q-toggle
            :label="pinkModel"
            color="black"
            @update:model-value="change"
            false-value="Disagreed"
            true-value="Agreed"
            :model-value='pinkModel'/>
        </q-toolbar-title>
      </q-toolbar>

    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { Dark } from 'quasar'
import { ref } from 'vue'

const leftDrawerOpen = ref(false)
const pinkModel = ref("Agreed")
function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
function change() {
  Dark.toggle()
}

// console.log(this.$q.dark.isActive)
// console.log(this.$q.dark.mode)


</script>
