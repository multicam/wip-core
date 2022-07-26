const {log} = console, {stringify} = JSON

export const extractEmailAddress = data => data?.value.shift()?.address || data.text
export const extractDate = date => {
  const d = new Date(date)
  return d.toLocaleDateString()+' '+d.toLocaleTimeString()
}

export const range = (start, end) =>
  Array(end - start + 1).fill().map((_, idx) => start + idx)

export const fetcher = async uri => {
  const res = await fetch(uri, {headers: {'Accept': 'application/json'}})
  log(uri, res.status, res.ok)
  return res.ok && res.json()
}

export const whoami = () => {
  log('me')
}
