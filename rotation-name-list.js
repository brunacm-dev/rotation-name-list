const names = ["Bruna", "Felipe", "Jean Felipe", "Lucio", "Paulo", "Pedro", "Rita"]
const days = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"]

function nextNames(names, firstName, sizeList = 5) {
  const orderedNames = [...names].sort()
  const firstIndex = orderedNames.indexOf(firstName)

  const result = []
  for (let i = 0; i < sizeList; i++) {
    const index = (firstIndex + i) % orderedNames.length
    result.push(orderedNames[index])
  }
  return result
}

// // Test the rotation list
const firstName = "Bruna"
const nextNamesList = nextNames(names, firstName)

const mapWeek = days.map((day, index) => [day, nextNamesList[index]])
console.log(`Primeiro nome da lista: "${firstName}"`)
console.log("Lista de nomes para a semana:")
mapWeek.forEach(([day, name]) => {
  console.log(`${day} -> ${name}`)
})