const personA = {
  firstName: '太郎',
  lastName: '田中'
}

const personB = {
  firstName: '太郎',
  lastName: '田中'
}

const personC = {
  firssName: '太郎',
  lastName: '田中'
}

function getFullName(person) {
  return `${person.lastName} ${person.firstName}`
}

console.log(
  getFullName(personA),
  getFullName(personB),
  getFullName(personC),
)
