import React, {
  useState,
  useEffect
} from 'react'
import { Tree } from 'antd'
const { TreeNode } = Tree
import 'antd/dist/antd.css'

const x = 3
const y = 2
const z = 1
const gData = []

const generateData = (_level, _preKey, _tns) => {

  const preKey = _preKey || '0'
  const tns = _tns || gData

  const children = []
  for (let i = 0; i < x; i++) {
    const key = `${preKey}-${i}`
    tns.push({ title: key, key })
    if (i < y) {
      children.push(key)
    }
  }
  if (_level < 0) {
    return tns
  }
  const level = _level - 1
  children.forEach((key, index) => {
    tns[index].children = []
    return generateData(level, key, tns[index].children)
  })
}

generateData(z)

const TreeComponent = () => {

  const [treeData, setTreeData] = useState(gData)

  useEffect(() => {
    setTreeData(gData)

    console.log(gData)

  }, [])

  const loop = data =>
    data.map(item => {
      if (item.children && item.children.length) {
        return (
          <TreeNode key={item.key} title={item.title}>
            {loop(item.children)}
          </TreeNode>
        )
      }
      return <TreeNode key={item.key} title={item.title} />
    }) 

    const onDragEnter = info => {
      
      console.log(info);
      // expandedKeys 需要受控时设置
      // this.setState({
      //   expandedKeys: info.expandedKeys,
      // });
    };   

    const onDrop = info => {

      console.log(info)

      const dropKey = info.node.props.eventKey
      const dragKey = info.dragNode.props.eventKey
      const dropPos = info.node.props.pos.split('-')
      const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1])

      let data = [...treeData]

      const loop = (data, key, callback) => {

        data.forEach((item, index, arr) => {

          if (item.key === key) {
            return callback(item, index, arr)
          }

          if (item.children) {
            return loop(item.children, key, callback)
          }
        })
      }

      let dragObj

      loop(data, dragKey, (item, index, arr) => {

        arr.splice(index, 1)
        dragObj = item
      })

      if (!info.dropToGap) {
        
        loop(data, dropKey, item => {

          item.children = item.children || []          
          item.children.push(dragObj)
        })

      } else if (        
        (info.node.props.children || []).length > 0 && // Has children
        info.node.props.expanded && // Is expanded
        dropPosition === 1 // On the bottom gap
      ) {

        loop(data, dropKey, item => {

          item.children = item.children || []
          item.children.unshift(dragObj)
        })
      } else {

        let ar
        let i
        loop(data, dropKey, (item, index, arr) => {
          ar = arr
          i = index
        })

        if (dropPosition === -1) {
          ar.splice(i, 0, dragObj)
        } else {
          ar.splice(i + 1, 0, dragObj)
        }
      }

      setTreeData(data)
  }

  return (
    <Tree
      className="draggable-tree"
      draggable
      blockNode
      onDrop={ onDrop }
    >
      {
        treeData.map(item => {
            if (item.children && item.children.length) {
              return (
                <TreeNode key={item.key} title={item.title}>
                  {loop(item.children)}
                </TreeNode>
              )
            }
            return <TreeNode key={item.key} title={item.title} />
          }
        )
    }
    </Tree>
  )
}

export default TreeComponent