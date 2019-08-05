
import React, {
  useState
} from 'react'
import Timeline from 'react-calendar-timeline'
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment'

const groups = [
  {
    id: 1,
    title: 'group 1',
    stackItems: false, // se mantienen todos en la misma linea, perfecto para tener las etapas ordenadas
    height: 100 
  }
]

const initItems = [
  {
    id: 1,
    group: 1,
    title: 'item 1',
    start_time: moment().startOf("day").toDate(),
    end_time: moment().startOf("day").add(1, "hour").toDate(),
    canMove: true,
    canResize: true,
  },  
  {
    id: 2,
    group: 1,
    title: 'item 2',
    start_time: moment().startOf("day").add(2, "hour").toDate(),
    end_time: moment().startOf("day").add(3, "hour").toDate(),
    canMove: true,
    canResize: true,
  }
]

const itemRenderer = ({ 
  item, 
  timelineContext, 
  itemContext, 
  getItemProps, 
  getResizeProps 
}) => {

  const { 
    left: leftResizeProps, 
    right: rightResizeProps 
  } = getResizeProps();
  const backgroundColor = itemContext.selected ? 
                            (itemContext.dragging ? "red" 
                            : 
                              item.selectedBgColor) 
                              : 
                              item.bgColor;
  const borderColor = itemContext.resizing ? "red" : item.color;

  return (
    <div
      {...getItemProps({
        style: {
          backgroundColor,
          color: item.color,
          borderColor,
          borderStyle: "solid",
          borderWidth: 1,
          borderRadius: 4,
          borderLeftWidth: itemContext.selected ? 3 : 1,
          borderRightWidth: itemContext.selected ? 3 : 1
        }
      })}
    >
      { itemContext.useResizeHandle ? <div {...leftResizeProps} /> : null }

      <div
        style={{
          height: itemContext.dimensions.height,
          overflow: "hidden",
          paddingLeft: 3,
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        }}
      >
        {itemContext.title}
      </div>

      {itemContext.useResizeHandle ? <div {...rightResizeProps} /> : null}
    </div>
  );
};

const App = () => {

  const [items, setItems] = useState(initItems)

  const handleItemMove = (itemId, dragTime, newGroupOrder) => {

    const itemIndex = items.findIndex(item => item.id == itemId)
    let newItems = [...items]
    newItems[itemIndex] = {
      ...newItems[itemIndex],
      start_time: dragTime,
      end_time: dragTime + (
        newItems[itemIndex].end_time - 
        newItems[itemIndex].start_time
      )
    } 

    // recalculate rest of items

    setItems(newItems)
  }

  const handleItemResize = (itemId, time, edge) => {

    const itemIndex = items.findIndex(item => item.id == itemId)
    let newItems = [...items]
    newItems[itemIndex] = {
      ...newItems[itemIndex],
      start_time: edge === "left" ? time : newItems[itemIndex].start_time,
      end_time: edge === "left" ? newItems[itemIndex].end_time : time
    } 

    // recalculate rest of items

    setItems(newItems)
  }

  return (
    <>
      <Timeline
        groups={ groups }
        items={ items}
        defaultTimeStart={ moment() .startOf("day").toDate() }
        defaultTimeEnd={ moment().startOf("day").add(1, "day")}
        /* 
          estos atributos nos permiten hacer los items tan altos como queramos
          para alojar diseños elaborados
          para tener diferentes configuraciones de grupos/items
          puede haber multiples timelines sincronizados
          ver https://codesandbox.io/s/6j04z5rjjr
        */
        lineHeight={ 100 }
        itemHeightRatio={ 0.9 }
        /* 
          estos dos eventos nos permiten hacer ajustes complicados 
          como mover todas las etapas cuando se mueve o reajusta una de ellas,
          mover a la vez los retos relacionados, mensajes etc
          ver también el evento moveResizeValidator para los constrains
        */
        onItemMove={ handleItemMove }
        onItemResize={ handleItemResize }
        /* items totalmente customizables */
        // itemRenderer={ itemRenderer }
      />
      <pre>
        { JSON.stringify(items, null, 4) }
      </pre>
    </>
  )
}

export default App

