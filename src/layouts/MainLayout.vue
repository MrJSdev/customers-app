<template>
  <q-layout view="lHh Lpr lFf">

    <LayoutSidebar />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import LayoutSidebar from 'src/layouts/components/LayoutSidebar.vue'

</script>
