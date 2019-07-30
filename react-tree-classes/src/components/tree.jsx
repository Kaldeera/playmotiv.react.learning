import React, { 
  Component
} from 'react'
import SortableTree, { 
  getTreeFromFlatData,
  getFlatDataFromTree
} from 'react-sortable-tree'
import FileExplorerTheme from 'react-sortable-tree-theme-minimal';
import 'react-sortable-tree/style.css'; // This only needs to be imported once in your app

export default class Tree extends Component {

  constructor(props) {

    super(props);

    this.state = {
      treeData: []
    };

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

      this.setState({
        treeData: treeData
      })

      this.props.flatData(flatData)
    })
  }

  flatData() {

    this.props.flatData(getFlatDataFromTree({
      treeData: this.state.treeData,
      getNodeKey: node => node.id,
      getParentKey: node => node.parent,
      rootKey: 0,
      ignoreCollapsed: false
    }))
  }

  render() {

    return <SortableTree
      treeData={this.state.treeData}
      theme={ FileExplorerTheme }
      rowHeight={ 52 }
      onChange={treeData => this.setState({ treeData })}
      getNodeKey={ node => node.node.id }
      onMoveNode={({ 
        node, 
        path 
      }) => {

        this.flatData()
      }}
      generateNodeProps={ rowInfo => ({
        subtitle: 'hola',
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
}