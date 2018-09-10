export function add(...params) {
  return params.reduce((acc, curr) => {
    return acc + curr
  })
}

export function multiply(...params) {
  return params.reduce((acc, curr) => {
    return acc * curr
  })
}
