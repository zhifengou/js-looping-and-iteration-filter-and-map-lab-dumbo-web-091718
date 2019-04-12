// Code your solution here:
function driversWithRevenueOver(collection, revenue) {
  return collection.filter(item => item.revenue > revenue)
}

function driverNamesWithRevenueOver(collection, revenue) {
  const filtered = collection.filter(item => item.revenue > revenue)
  return filtered.map(item => item.name)
}

function exactMatch(collection, keyword) {
  // console.log(keyword["name"])
  const keys = []
  for(const item of collection) {
    itemKeys = Object.keys(item)
    // console.log(item_keys)
    for(const key of itemKeys) {
      keys.push(key)
    }
  }

  newKeys = [...new Set(keys)]

  return collection.filter(item => {
    for(const key of newKeys) {
      if(key === Object.keys(keyword)[0]) {
        // console.log(item[key], keyword[key])
        return keyword[key] === item[key]
      }
    }
  })
}

function exactMatchToList(collection, keyword) {
  const keys = []
  for(const item of collection) {
    itemKeys = Object.keys(item)
    // console.log(item_keys)
    for(const key of itemKeys) {
      keys.push(key)
    }
  }

  newKeys = [...new Set(keys)]

  const results = collection.filter(item => {
    for(const key of newKeys) {
      if(key === Object.keys(keyword)[0]) {
        // console.log(item[key], keyword[key])
        return keyword[key] === item[key]
      }
    }
  })

  return results.map(result => result.name)
}