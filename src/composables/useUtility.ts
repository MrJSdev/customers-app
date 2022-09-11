export default function useUtility () {
  const setFilterData = <T extends Record<string, string>>(
    data: T[],
    filter: Record<keyof T, string>
  ) => {
    const filteredData = data.filter(search, filter)

    function search (item: T) {
      return Object.keys(filter).every((key) => {
        // Return early if the filter value for key is empty
        if (!filter[key]) return true

        // We can use regex for other search, but I believe that for only contactName is good because of the performance
        if (key === 'contactName') {
          const reg = new RegExp(filter[key], 'i')
          return reg.test(item[key])
        }
        return item[key] === filter[key]
      })
    }

    return filteredData
  }

  return {
    setFilterData
  }
}
