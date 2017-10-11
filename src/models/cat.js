const cats = []

function getAll (limit) {
  return limit ? cats.slice(0, limit) : cats
}

function create (body) {
  const errors = []
  const name = body.name

  let response
  if (!name) {
    errors.push('name is required')
    response = { errors }
  } else {
    const cat = { id: cats.length, name }
    cats.push(cat)
    response = cat
  }

  return response
}

module.exports = { getAll, create }
