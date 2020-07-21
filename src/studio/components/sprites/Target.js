import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Text, Image, Group, Rect, Circle } from 'react-konva'
import { updateSprite, deleteSprite } from '../../store/actions/artboardActions'
import useImage from 'use-image'

const Target = props => {
  const { id, image, title, x, y, isSelected, onSelect, titleEditable } = props
  //const { x, y } = attrs
  const dispatch = useDispatch()
  const nodeRef = useRef()
  const txtRef = useRef()
  const imgRef = useRef()
  const rectRef = useRef()
  const pointRef = useRef()
  const [img] = useImage(image)
  const [editText] = useState(titleEditable)

  useEffect(() => {
    const node = imgRef.current
    const imgName = image.split('/').pop().split('.')[0]
    //67x96_
    //198x240

    //if (node.width() > 0) {
      if (imgName === 'add') {
        const stupidOffset = 0 // 3.5
        node.width(37)
        node.height(37)
        node.offsetX((37 / 2) - stupidOffset)
        node.offsetY((37 / 2) - stupidOffset)
        txtRef.current.offsetX(txtRef.current.offsetX() - stupidOffset)
        txtRef.current.offsetY(-18 - stupidOffset)
        //pointRef.current.offsetY(-3.5)
        //pointRef.current.offsetX(-3.5)
      } else {
        const freakenOffset = 0
        node.width(67)
        node.height(81.2)
        node.offsetX(67 / 2)
        node.offsetY((81.2 / 2) - freakenOffset)
        txtRef.current.offsetY(-42 - freakenOffset)
      }
    //}
  }, [img])

  useEffect(() => {
    const attrs = nodeRef.current.getClientRect()
    attrs.x = -attrs.width / 2
    attrs.y = -attrs.height / 2 + 10
    attrs.height = attrs.height + 10
    rectRef.current.setAttrs(attrs)
    rectRef.current.visible(isSelected)
    rectRef.current.getLayer().batchDraw()
  }, [isSelected])

  const handleDragEnd = () => {
    if (!nodeRef.current) {
      return
    }

    dispatch(
      updateSprite(id, {
        x: nodeRef.current.x(),
        y: nodeRef.current.y()
      })
    )
  }

  const handleImgDblClick = () => {
    nodeRef.current.to({
      scaleX: 0.1,
      scaleY: 0.1,
      duration: 0.15
    })

    setTimeout(() => {
      dispatch(deleteSprite(id))
    }, 150)
  }

  const handleTxtDblClick = () => {
    if(editText === false) return
    const layer = nodeRef.current.parent
    const txtNode = txtRef.current
    const textPosition = txtNode.getAbsolutePosition()
    var stageBox = nodeRef.current.parent.parent
      .container()
      .getBoundingClientRect()
    var areaPosition = {
      x: stageBox.left + textPosition.x,
      y: stageBox.top + textPosition.y
    }

    txtNode.hide()
    layer.draw()

    var textarea = document.createElement('textarea')
    document.body.appendChild(textarea)
    textarea.value = txtNode.text()
    textarea.style.position = 'absolute'
    textarea.style.top = areaPosition.y - txtNode.offsetY() + 'px'
    textarea.style.left = areaPosition.x - txtNode.offsetX() + 'px'
    textarea.style.width = txtNode.width() - txtNode.padding() * 2 + 'px'
    textarea.style.height = txtNode.height() - txtNode.padding() * 2 + 'px'
    textarea.style.fontSize = txtNode.fontSize() + 'px'
    textarea.style.fontWeight = 'bold'
    textarea.style.textAlign = 'center'
    textarea.style.border = 'none'
    textarea.style.padding = '0px'
    textarea.style.margin = '0px'
    textarea.style.overflow = 'hidden'
    textarea.style.background = 'none'
    textarea.style.outline = 'none'
    textarea.style.resize = 'none'
    textarea.style.lineHeight = txtNode.lineHeight()
    textarea.style.fontFamily = txtNode.fontFamily()
    textarea.style.transformOrigin = 'left top'
    textarea.style.textAlign = txtNode.align()
    textarea.style.color = txtNode.fill()
    textarea.focus()

    const endEdit = () => {
      document.body.removeChild(textarea)
      window.removeEventListener('mousedown', handleOutsideClick)
      txtNode.show()
      layer.draw()

      dispatch(
        updateSprite(id, {
          title: textarea.value
        })
      )
    }

    const handleOutsideClick = e => {
      if (e.target !== textarea) {
        txtNode.text(textarea.value)
        endEdit()
      }
    }

    textarea.addEventListener('keydown', function (e) {
      if (e.keyCode === 13) {
        txtNode.text(textarea.value)
        endEdit()
      }

      if (e.keyCode === 27) {
        endEdit()
      }
    })

    setTimeout(() => {
      window.addEventListener('mousedown', handleOutsideClick)
    })
  }
  /*
width={67}
        height={96}

        */
  return (
    <Group
      id={id}
      x={x}
      y={y}
      draggable
      onDragEnd={handleDragEnd}
      ref={nodeRef}
    >
      <Image
        image={img}
        onDblClick={handleImgDblClick}
        onClick={onSelect}
        onTap={onSelect}
        ref={imgRef}
      />
      <Text
        text={title}
        fontSize="12"
        fontStyle="bold"
        fill="#888"
        align="center"
        width={100}
        offsetX="50"
        onDblClick={handleTxtDblClick}
        ref={txtRef}
      />
      <Rect
        stroke="#E5E5E5"
        strokeWidth={2}
        listening={false}
        visible={false}
        shadowColor="black"
        shadowBlur={4}
        shadowOpacity={0.25}
        ref={rectRef}
      />
      <Circle
        fill='yellowgreen'
        width='5'
        height='5'
        ref={pointRef}
        listening={false}
      />
    </Group>
  )
}

export default Target
/*
        scaleX="0.38"
        scaleY="0.38"
                offsetX={img ? img.width / 2 : 0}
        offsetY={img ? img.height / 2 : 0}
        */
