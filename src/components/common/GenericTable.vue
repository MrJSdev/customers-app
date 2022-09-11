<template>
  <q-table
    :rows="tableData"
    :columns="tableColumns"
    :rows-per-page-options="[Infinity]"
    :grid="$q.screen.lt.md"
    table-header-class="text-left"
    class="generic-table"
    hide-pagination
    v-bind="$attrs"
  >
    <template
      v-for="(_, name) in $slots"
      #[name]="slotData"
    >
      <slot
        :name="name"
        v-bind="slotData"
      />
    </template>
  </q-table>
</template>

<script lang="ts" setup>
import { QTableProps } from 'quasar'

withDefaults(defineProps<{
  tableData: QTableProps['rows'];
  tableColumns: QTableProps['columns'];
  height?: string;
}>(), {
  height: '400px'
})

</script>

<style lang="scss" scoped>
.generic-table {
  max-height: v-bind(height);
  :deep() {
    .q-table{
      thead{
        background-color: #f4f6fb;
      }
    }
  }
}
</style>
