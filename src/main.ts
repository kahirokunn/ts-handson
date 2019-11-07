type Person = {
  firstName: string,
  lastName: string
}

const personA: Person = {
  firstName: '太郎',
  lastName: '田中'
}

const personB: Person = {
  firstName: '太郎',
  lastName: '田中'
}

const personC: Person = {
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
