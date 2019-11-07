const person = {
  firstName: '太郎',
  lastName: '田中',
  getFullName() {
    setInterval(function() {
      console.log(`${this.lastName} ${this.firstName}`)
    })
    return `${this.lastName} ${this.firstName}`
  }
}

console.log(person.getFullName())
