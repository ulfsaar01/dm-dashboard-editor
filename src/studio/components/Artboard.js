import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from '../styles/ds.module.css'
import { Stage, Layer, Image } from 'react-konva'
import useImage from 'use-image'
import Target from '../components/sprites/Target'
import { ReactReduxContext, Provider } from 'react-redux'
import { selectSprite, deselectSprite, dragEndProxy } from '../store/actions/artboardActions'
/*
const BackgroundImage = ({ image }) => {
  const [img] = useImage(image)



  return <Image image={img} ref />
}
*/
const Artboard = () => {
  const dispatch = useDispatch()
  const { width, height, image, sprites } = useSelector(state => state.artboard)
  const [selected, setSelected] = useState(null)
  const stageRef = useRef()
  const dragRef = useRef()
  const staticRef = useRef()
  const imgRef = useRef()
  const [img] = useImage(image)

  useEffect(() => {
    const node = imgRef.current

    node.width(stageRef.current.width())
    node.height(stageRef.current.height())
  }, [img])

  const handleDeselect = evt => {
    const clickedOnEmpty = evt.target === evt.target.getStage();
    if (clickedOnEmpty) {
      setSelected(null);
      dispatch(deselectSprite())
    }
  }

  const handleDragStart = evt => {
    if (!stageRef) return
    if (!dragRef.current) return

    const target = evt.target
    target.moveTo(dragRef.current)
    stageRef.current.draw()
  }

  const handleDragEnd = evt => {
    if (!stageRef) return
    if (!staticRef.current) return

    const target = evt.target
    target.moveTo(staticRef.current)
    stageRef.current.draw()
  }

  return (
    <ReactReduxContext.Consumer>
      {({ store }) => (
        <div
          onDrop={e => {
            stageRef.current.setPointersPositions(e)
            dispatch(dragEndProxy(stageRef.current.getPointerPosition()))
          }}
          onDragOver={e => e.preventDefault()}
        >
          <Stage
            width={width}
            height={height}
            className={styles.abs}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onMouseDown={handleDeselect}
            onTouchStart={handleDeselect}
            ref={stageRef}
          >
            <Provider store={store}>
              <Layer listening={false}>
                <Image image={img} listening={false} ref={imgRef}/>
              </Layer>
              <Layer ref={staticRef}>
                {sprites.map(t => (
                  <Target 
                  key={t.id} 
                  isSelected={t.id === selected}
                  onSelect={() => {
                    setSelected(t.id);
                    dispatch(selectSprite(t.id))
                  }}
                  {...t} />
                ))}
              </Layer>
              <Layer ref={dragRef} />
            </Provider>
          </Stage>
        </div>
      )}
    </ReactReduxContext.Consumer>
  )
}
export default Artboard
