const baseURL = 'http://strainapi.evanbusse.com/S1Ky432'

const parseData = response => response.json()

const catchError = error => console.log(`%c${error}`, 'color: red;')

export const fetchEffects = () => fetch(baseURL + '/searchdata/effects')
.then(parseData)
.catch(catchError)

export const fetchFlavors = () => fetch(baseURL + '/searchdata/flavors')
.then(parseData)
.catch(catchError)

export const fetchSelectedEffect = (effect) => fetch(baseURL + `/strains/search/effect/${effect}`)
.then(parseData)
.catch(catchError)

export const fetchSelectedFlavor = (flavor) => fetch(baseURL + `/strains/search/flavor/${flavor}`)
.then(parseData)
.catch(catchError)