const apiUrl = 'http://100.24.234.250:50000/sap/opu/odata/sap/Z_XENDL_REP_SRV'
const auth = 'Basic T0NBTVBCRUxMOnBSMmR6d0EwVzllbw=='

const fetchApi = async(method, path, params={}) => {
  let finalPath = path
  let options = {
    method: method.toUpperCase(),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic T0NBTVBCRUxMOnBSMmR6d0EwVzllbw=='
    }
  }

  if (method.toUpperCase() == 'GET') {
    // finalPath += '?' + Object.entries(params).map((v) => {
    //   if (Array.isArray(v[1])){
    //     return `${v[0]}=${v[1].join(',')}`
    //   } else {
    //     return `${v[0]}=${v[1]}`
    //   }
    // }).join('&')
  } else {
    options['body'] = JSON.stringify(params)
  }

  return await fetch (apiUrl + `${finalPath}`, options).then(res => {
    if(res.status >= 400) return false
    return res.json()
  }).then(response => {
    return response
  }).catch(err => {
    console.info("__err__", err)
  })
}

export {
  fetchApi
}