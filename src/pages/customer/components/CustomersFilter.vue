<template>
  <!-- Filters -->
  <div class="customers-filter row items-center">
    <div class="col-3">
      <q-input
        class="full-width"
        :debounce="300"
        clearable
        outlined
        v-model="filterValues.contactName"
        placeholder="Search here"
        dense
        @update:model-value="emit('set-filter', filterValues)"
      />
    </div>

    <div class="col q-gutter-x-sm text-right">
      <template v-for="filter in filterOptions" :key="filter.label">
        <q-btn
          :label="filterValues[filter.key] || filter.label"
          no-caps
          :class="{
            'customers-filter__button--active bg-blue-2': !!filterValues[filter.key]
          }"
          flat
          class="customers-filter__button text-subtitle3"
          padding="xs md"
          dense
        >
          <template v-if="filter.isDropdown && filter.options">
            <q-icon name="expand_more" />
            <DropdownMenu
              v-model="filterValues[filter.key]"
              @update:model-value="$emit('set-filter', filterValues)"
              :options="filter.options"
            />
          </template>
        </q-btn>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import {
  Customer,
  CustomerFilterValues,
  CustomerFilterOption
} from 'src/types/Customer'
import DropdownMenu from 'src/components/common/DropdownMenu.vue'

const props = defineProps<{
  customers: Customer[];
}>()

const emit = defineEmits(['set-filter'])

const filterValues = ref({
  status: '',
  city: '',
  country: '',
  contactName: ''
} as CustomerFilterValues)

const customersCities = computed(() =>
  Array.from(new Set(props.customers.map((customer) => customer.city)))
)
const customerCountries = computed(() =>
  Array.from(new Set(props.customers.map((customer) => customer.country)))
)

const filterOptions = computed<CustomerFilterOption[]>(() => [
  {
    label: 'Status',
    key: 'status',
    isDropdown: true,
    options: ['Active', 'Inactive']
  },
  {
    label: 'City',
    isDropdown: true,
    key: 'city',
    options: customersCities.value
  },
  {
    label: 'Country',
    isDropdown: true,
    key: 'country',
    options: customerCountries.value
  }
])

</script>

<style lang="scss" scoped>
.customers-filter__button {
  border: solid thin rgba(0, 0, 0, 0.12);

  &--active {
    border-color: $blue-3;
  }
}
</style>
