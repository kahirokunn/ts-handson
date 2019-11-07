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

const personList = [
  personA,
  personB,
  personC
]

function getFullName(person: Person) {
  return `${person.lastName} ${person.firstName}`
}

personList.forEach(person => console.log(getFullName(person)))
