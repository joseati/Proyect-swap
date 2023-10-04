export const saveLocalStora = ( name, item ) => {
  localStorage.setItem(name, item ) 
}
export const delLocalStore = ( name ) => {
  localStorage.removeItem(name)
}
 
export const getLocalStore = ( name ) => {
 return localStorage.getItem( name )
}