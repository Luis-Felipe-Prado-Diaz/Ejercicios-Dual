(async () => {

  const fs = require('fs/promises')

  try {

    const file1 = await fs.readFile('./data/normalizacion-parados-por-municipio-sexo.json', 'utf-8')
    const file2 = await fs.readFile('./data/normalizacion-afiliados-por-municio-sexo.json', 'utf-8')
    const data1 = JSON.parse(file1)
    const data2 = JSON.parse(file2)

    let filterData = data1.reduce((acumulador, elemento) => {
      if (elemento.cantidad === null || elemento.cantidad === undefined) {
        return acumulador
      }
      const data2afiliados = data2[elemento.codigoPostal]?.[elemento.sexo]?.[elemento.periodo]?.cantidad
      if (data2afiliados === null || data2afiliados === undefined) {
        return acumulador
      }

      const porcentaje = parseFloat(elemento.cantidad / data2afiliados * 100).toFixed(5)

      acumulador.push({
        codigoPostal: elemento.codigoPostal,
        municipio: elemento.municipio,
        sexo: elemento.sexo,
        periodo: elemento.periodo,
        parados: elemento.cantidad,
        afiliados: data2afiliados,
        porcentaje: Number(porcentaje)
      })

      return acumulador
    }, [])


    filterData.sort((a, b) => b.porcentaje - a.porcentaje)



    await fs.writeFile('./data/resultado.json', JSON.stringify(filterData, null, 2))

  } catch (error) {
    console.log(error)
  }
})()