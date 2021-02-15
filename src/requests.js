// const baseURL = 'http://strainapi.evanbusse.com/S1Ky432'
const baseURL = 'http://localhost:3000/api/v1'

const parseData = response => response.json()

const catchError = error => console.log(`%c${error}`, 'color: red;')

export const fetchEffects = () => fetch(baseURL + '/effects')
.then(parseData)
.catch(catchError)

export const fetchFlavors = () => fetch(baseURL + '/flavors')
.then(parseData)
.catch(catchError)

export const fetchSelectedEffect = (effectId) => fetch(baseURL + `/effects/${effectId}`)
.then(parseData)
.catch(catchError)

export const fetchSelectedFlavor = (flavorId) => fetch(baseURL + `/flavors/${flavorId}`)
.then(parseData)
.catch(catchError)

export const fetchSelectedStrainDetails = (strainId) => fetch(baseURL + `/strains/${strainId}`)
.then(parseData)
.catch(catchError)