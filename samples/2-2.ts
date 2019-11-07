{
  // other pattern
  const personA = {
    firstName: '太郎',
    lastName: '田中'
  }

  type Person = typeof personA

  const personB: Person = {
    firstName: '太郎',
    lastName: '田中'
  }

  const personC: Person = {
    firstName: '太郎',
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
}
