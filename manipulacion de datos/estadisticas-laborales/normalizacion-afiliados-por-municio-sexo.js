(async () => {

  const fs = require('fs/promises')

  try {
    
    const file = await fs.readFile('./data/afiliados-por-municio-sexo.json', 'utf-8')
    const data = JSON.parse(file)

    

    await fs.writeFile('./data/normalizacion-afiliados-por-municio-sexo.json', JSON.stringify(filterData, null, 2))

  } catch (error) {
    console.log(error)
  }
})()