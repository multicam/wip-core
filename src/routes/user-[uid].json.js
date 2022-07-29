const {stringify,parse} = JSON, {log} = console

export function GET({params,url}) {
  let res = {}

  let body = stringify(res);
  return { body }
}
