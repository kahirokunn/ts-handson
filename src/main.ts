const person = {
  firstName: '太郎',
  lastName: '田中',
  getFullName() {
    return `${this.lastName} ${this.firstName}`
  }
}

console.log(person.getFullName())
