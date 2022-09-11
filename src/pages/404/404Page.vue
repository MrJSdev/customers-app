<template>
  <q-page class="q-pa-lg bg-blue-1">
    <div class="text-h6 q-mb-md text-uppercase">404</div>
    <q-card class="q-mb-md q-pa-lg rounded-borders shadow-1">
      <div class="text-h6 q-mb-sm text-weight-bold">Page not found</div>

      <p>Sorry, the page you are looking for does not exist.</p>
      <p>Please check our customers list page</p>

      <q-btn
        label="Customers"
        color="secondary"
        @click="$router.replace({ name: RoutesName.CUSTOMERS })"
      ></q-btn>
    </q-card>
  </q-page>
</template>

<script lang="ts" setup>
import { RoutesName } from 'src/router/routesName'
</script>
