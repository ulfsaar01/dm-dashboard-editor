export const spriteToJsonBubble = (data, width, height) => {
  var formatted = []
  data.forEach(element => {
    const icon = element.image.substring(0, 4) === 'http' ? element.image : undefined
    //const posX = ((element.x*0.9)/width)
    //const posY = ((element.y*0.9)/height).toFixed(2)
    const posX = Math.round(((element.x * 0.9) / width) * 1e2) / 1e2
    const posY = Math.round(((element.y * 0.9) / height) * 1e2) / 1e2

    var catid = undefined
    var subcatid = undefined
    console.log(element)
    element.cat.forEach(e => {
      if (e[0]) catid = e[0]
      if (e[1]) subcatid = e[1]
    })

    const obj = {
      title: element.title,
      subcategoryId: subcatid,
      categoryId: catid,
      icon,
      position: {
        x: posX,
        y: posY
      }
    }

    /* Multi Cat/Subcat
    var catids = []
    var subcatids = []

    element.cat.forEach(e => {
      if(e[0]) catids.push(e[0])
      if(e[1]) subcatids.push(e[1])
    })

    
    const obj = {
      title: element.title,
      subcategoryId: subcatids.length > 0 ? subcatids: undefined,
      categoryId: catids.length > 0 ? catids: undefined,
      icon,
      position: {
        x: posX,
        y: posY
      }
    }
    */
    console.log(obj)

    /* OLD
    const obj = {
      title: element.title,
      subcategoryId: element.subcat ? element.subcat : "",
      categoryId: element.cat ? element.cat : "",
      icon,
      position: {
        x: posX,
        y: posY
      }
    }
    */
    formatted.push(obj)
  })
  console.log(JSON.stringify(formatted))
  return JSON.stringify(formatted)
}
