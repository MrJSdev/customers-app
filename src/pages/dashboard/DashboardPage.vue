<template>
  <q-page class="q-pa-lg bg-blue-1">
    <div class="text-h6 q-mb-md text-uppercase">Dashboard</div>
    <q-card class="q-mb-md q-pa-lg justify-center rounded-borders shadow-1 text-center">
      <img src="public/images/welcome.svg" class="dashboard-page__welcome-image inline-block q-mb-lg" />
      <div class="text-h6 q-mb-sm text-weight-bold">Welcome to Customers App</div>
      <p>Please check our customers list page as there is nothing on this dashboard page. Thank you🙂</p>
      <q-btn label="Customers" color="secondary" @click="$router.replace({ name: RoutesName.CUSTOMERS })"></q-btn>
    </q-card>
  </q-page>
</template>

<script lang="ts" setup>
import { RoutesName } from 'src/router/routesName'
</script>

<style lang="scss" scoped>
  .dashboard-page__welcome-image{
    width: 30rem;
  }
</style>
