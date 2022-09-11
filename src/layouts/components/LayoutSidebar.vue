<template>
  <q-drawer show-if-above bordered class="bg-primary">
    <div
      class="q-py-xl q-my-lg text-weight-bold text-h2 text-uppercase text-center text-white"
    >
      Logo
    </div>
    <q-list>
      <q-item
        @click="$router.push({ name: nav.routeName })"
        v-for="nav in navigationItems"
        :key="nav.routeName"
        clickable
        class="items-center justify-center text-weight-medium text-uppercase"
      >
        <q-btn
        :unelevated="nav.routeName !== $route.name"
          :class="{
              'bg-white text-primary': $route.name === nav.routeName,
              'text-grey-2': $route.name !== nav.routeName,
            }"
          :label="nav.label"
        />
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script lang="ts" setup>
import { RoutesName } from 'src/router/routesName'

const navigationItems = [
  {
    label: 'Dashboard',
    icon: 'home',
    routeName: RoutesName.DASHBOARD
  },
  {
    label: 'Customers',
    icon: 'people',
    routeName: RoutesName.CUSTOMERS
  }
]
</script>
