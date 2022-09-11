<template>
  <q-card>
    <h2>Page not found</h2>
    <p>Sorry, the page you are looking for does not exist.</p>
    <q-btn @click="$router.replace({ name: RoutesName.CUSTOMERS })"></q-btn>
  </q-card>
</template>

<script lang="ts" setup>
import { RoutesName } from 'src/router/routesName'
</script>
