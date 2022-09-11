export default function useCustomer () {
  const tableColumns = [
    { name: 'name', align: 'left', label: 'Customer Name', field: 'contactName', sortable: true },
    // { name: 'company', align: 'left', label: 'Company Name', field: 'companyName' },
    { name: 'phone', align: 'left', label: 'Phone', field: 'phone' },
    { name: 'status', align: 'left', label: 'Status', field: 'status' },
    { name: 'address', align: 'left', label: 'Address', field: 'address' },
    { name: 'city', align: 'left', label: 'City', field: 'city', sortable: true },
    { name: 'postal-code', align: 'left', label: 'Postal Code', field: 'postalCode' }
    // { name: 'country', align: 'left', label: 'Country', field: 'country' }
  ]

  return {
    tableColumns
  }
}
