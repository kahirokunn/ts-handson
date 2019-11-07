const personA = {
  firstName: '太郎',
  lastName: '田中'
}

const personB = {
  firstName: 123,
  lastName: '田中'
}

const personC = {
  firssName: '太郎',
  lastName: '田中'
}

const personList = [
  personA,
  personB,
  personC
]

function getFullName(person) {
  if ('firstName' in person && 'lastName' in person &&
    typeof person.firstName === 'string' && typeof person.lastName === 'string'
  ) {
    return `${person.lastName} ${person.firstName}`
  }
  throw Error('invalid person type.')
}

personList.forEach(person => console.log(getFullName(person)))
