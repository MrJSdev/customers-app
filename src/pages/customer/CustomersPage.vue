<template>
  <q-page class="q-pa-lg bg-blue-1">
    <div class="text-h6 q-mb-md text-uppercase">Customers</div>

    <q-card class="q-mb-md rounded-borders shadow-1">
      <div class="q-px-md q-py-sm">
        <CustomersFilter @set-filter="onSetFilter" :customers="customersList" />
      </div>

      <GenericTable
        :table-data="filteredCustomersList"
        row-key="customerID"
        :table-columns="tableColumns"
      >
        <template #body-cell-status="{ row }">
          <q-td>
            <span
              :class="[
                'text-subtitle3 q-py-xs q-px-sm rounded-borders',
                { 'text-positive bg-green-1': row.status == 'Active' },
                { 'text-negative bg-red-1': row.status == 'Inactive' },
              ]"
              >{{ row.status }}</span
            >
          </q-td>
        </template>
      </GenericTable>
    </q-card>
  </q-page>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { Customer, CustomerFilterValues } from 'src/types/Customer'
import { api } from 'src/boot/axios'
import useCustomer from 'src/composables/useCustomer'
import GenericTable from 'src/components/common/GenericTable.vue'
import CustomersFilter from 'src/pages/customer/components/CustomersFilter.vue'
import useUtility from 'src/composables/useUtility'

const { setFilterData } = useUtility()
const { tableColumns } = useCustomer()

const customersList = ref<Customer[]>([])
const filteredCustomersList = ref<Customer[]>([])
const isLoading = ref(false)

const onSetFilter = (filter: CustomerFilterValues) => {
  filteredCustomersList.value = setFilterData<Customer>(customersList.value, filter)
}

// Fetch customers from mock data, it could be from API
const fetchCustomers = () => {
  isLoading.value = true

  api
    .get('src/mock-data/customers.json')
    .then((response) => {
      customersList.value = response.data
      filteredCustomersList.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
    .finally(() => {
      isLoading.value = false
    })
}

// Fetch customers on component load
fetchCustomers()
</script>