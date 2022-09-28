let list = [
  {
    id: 1,
    titulo: 'Livro do desassossego',
    autor: 'Fernando Pessoa',
    isbn: 8535908498,
    resumo: 'O narrador principal (mas não exclusivo) das centenas de fragmentos que compõem este livro é o "semi-heterônimo" Bernardo Soares. Ajudante de guarda-livros na cidade de Lisboa...',
    ano_lancamento: 2006
  },
  {
    id: 2,
    titulo: 'A Arte da Guerra',
    autor: ' Sun Tzu',
    isbn: 6556600490,
    resumo: 'Escrito há mais de 2.500 anos, o texto ultrapassa seu contexto militar e apresenta lições fundamentais para o crescimento interior e profissional...',
    ano_lancamento: 2001
  },
  {
    id: 3,
    titulo: 'XXXX',
    autor: 'José',
    isbn: 56746,
    resumo: 'YYY',
    ano_lancamento: 2022
  },
  {
    id: 4,
    titulo: 'XXXX',
    autor: 'Maria',
    isbn: 121212,
    resumo: 'YYY',
    ano_lancamento: 2000
  }
]

module.exports.save = function save(entity) {
  list.push(entity)
}

module.exports.findById = function findById(id) {
  return list.find((book) => {
    return book.id === Number(id)
  })
}

module.exports.findAll = function findAll() {
  return list
}

module.exports.count = function count() {
  return list.length
}

module.exports.del = function del(id) {
  let x = exports.findById(id)
  list.splice(list.indexOf(x), 1)
}

module.exports.existsBy = function existsBy(id) {
  return list.some((book) => {
    return book.id === id
  })
}
