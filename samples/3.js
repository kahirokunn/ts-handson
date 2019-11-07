function save(like) {
  if (like < 1 || like > 5) {
    throw Error(`Expected value 1 ~ 5, got ${like}.`)
  }
}

save(1)
save(2)
save(3)
save(4)
save(5)
save(6)
