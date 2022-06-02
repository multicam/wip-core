// import { writable } from 'svelte/store'
// import {fetcher} from "../utils.js";
//
// export function personsStore(init = {}) {
//   const store = writable(init)
//   const load = async (id) => {
//     store.update(old => ({ ...old, loading: true }))
//     try {
//       const data = await fetcher('http://jmbox.local:5050/v1/crm/persons')
//       store.update(old => ({ ...old, data, loading: false }))
//     } catch (error) {
//       store.update(old => ({ ...old, error, loading: false }))
//     }
//   }
//   return { ...store, load }
// }
