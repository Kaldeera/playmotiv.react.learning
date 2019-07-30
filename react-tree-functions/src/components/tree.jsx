import React, { 
  useState,
  useEffect
} from 'react'
import SortableTree, { 
  getTreeFromFlatData,
  getFlatDataFromTree
} from 'react-sortable-tree'
import FileExplorerTheme from 'react-sortable-tree-theme-minimal';
import 'react-sortable-tree/style.css'; // This only needs to be imported once in your app

const Tree = (props) => {  

  const [treeData, setTreeData] = useState([])

  useEffect(() => {
    
    fetch(`https://dev.playmotiv.cloud/wp-json/wp/v2/group`)
    .then(res => res.json())
    .then(data => {

      const flatData = data.map(group => {

        return {
          id: group.id,
          title: group.title.rendered,
          parent: group.parent
        }
      })

      const treeData =  getTreeFromFlatData({
        flatData: flatData,
        getKey: node => node.id,
        getParentKey: node => node.parent,
        rootKey: 0
      })

      setTreeData(treeData)
    })
  }, [])

  return <SortableTree
    treeData={ treeData }
    theme={ FileExplorerTheme }
    rowHeight={ 52 }
    onChange={ treeData => setTreeData(treeData) }
    getNodeKey={ node => node.node.id }
    generateNodeProps={ rowInfo => ({
      buttons: [
        <button
          className="btn btn-danger"
          key={rowInfo.node._id}
          onClick={() => console.log('clicked', rowInfo.node)}
        >
          Remove
        </button>
      ]
    }) }
  />
}

export default Tree