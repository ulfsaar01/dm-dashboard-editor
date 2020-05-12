const baseUrl = env => {
  if(env === 'prod') return "https://decormatters-prod.herokuapp.com/parse/functions/"

  return "https://decormatters-dev.herokuapp.com/parse/functions/"
}

const getHeaders = env => {
  const id = env === 'dev' ? 1 : 3

  const headers = {
    'Content-Type': 'application/json',
    'X-Parse-Application-Id': id
  }

  return headers
}

export const fetchChallenge = (env, id)  => async dispatch => {
  const appendant = {
    method: 'POST',
    mode: 'cors',
    headers: getHeaders(env),
    body: JSON.stringify({ objectId: id })
  }

  const fullUrl = `${baseUrl(env)}getDesignContests3`

  try {
    const response = await fetch(fullUrl, appendant)
    const responseJson = await response.json()
    if(responseJson.error) return responseJson
    return responseJson.result.designContests[0]
  } catch (error) {
    throw error
  }
}
