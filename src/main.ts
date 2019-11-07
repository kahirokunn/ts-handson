type SomeOptionalType = {
  b?: {
    c?: {
      d: number
    }
  }
}

const a: SomeOptionalType = {
  b: {
    c: {
      d: 1234
    }
  }
}

const tmp = a?.['b']?.c?.d ?? 5678

console.log(tmp)
