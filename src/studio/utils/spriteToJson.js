export const spriteToJsonBubble = (data, width, height) => {
  var formatted = []
  data.forEach(element => {
    const icon = (element.image.substring(0, 4) === 'http') ? element.image : undefined
    const posX = ((element.x*0.9)/width).toFixed(2)
    const posY = ((element.y*0.9)/height).toFixed(2)
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
    formatted.push(obj)
  })
  return JSON.stringify(formatted)
}
