(async () => {

  const fs = require('fs/promises')

  try {

    const file = await fs.readFile('./data/afiliados-por-municio-sexo.json', 'utf-8')
    const data = JSON.parse(file)
    let afiliados = data.series[0].data;


    filterData = afiliados.filter(element => {
      return element.municipio !== "ILLES BALEARS" &&
        element.municipio !== "Sin descripción" &&
        element.municipio !== "MALLORCA" &&
        element.municipio !== "Menorca" &&
        element.municipio !== "MENORCA" &&
        element.municipio !== "EIVISSA" &&
        element.municipio !== "Eivissa" &&
        element.Sexo !== "TOTAL"
    })

    filterData = filterData.reduce((acumulador, element) => {
      let [codigoPostal, ...municipio] = element.municipio.split(' ')
      let periodo = element.Periodo
      let sexo = element.Sexo
      let cantidad = Number(element.cantidad) ? Number(element.cantidad.replaceAll('.', '')) : Number(element.cantidad);
      municipio = municipio.join(' ')

      if (municipio.includes("(")) {
        const partes = municipio.split("")
        const articuloNormalizado = partes.pop().replace(/[()]/g, '')

        municipio = `${articuloNormalizado} ${partes.join(" ")}`
      }

      if (!acumulador[codigoPostal]) acumulador[codigoPostal] = {}
      if (!acumulador[codigoPostal][sexo]) acumulador[codigoPostal][sexo] = {}
      acumulador[codigoPostal][sexo][periodo] = {
        codigoPostal,
        sexo,
        periodo,
        municipio,
        cantidad
      }
      return acumulador
    }, {})

    await fs.writeFile('./data/normalizacion-afiliados-por-municio-sexo.json', JSON.stringify(filterData, null, 2))

  } catch (error) {
    console.log(error)
  }
})()