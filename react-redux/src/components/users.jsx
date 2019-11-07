import React from 'react'
import { connect } from 'react-redux';


const UserComponent = props =>  {
    console.log('refrescando componente users');
console.log(props);
    return <div className="Users">
      {
        props.users
        .map((item, index) => <div 
          key={ index }
          className="Item">
          {
            item.post_title
          }
        </div>)
      }
    </div>
  };
  
  const mapStateToProps = state => ({ users: state.data.users })
  const User = connect(mapStateToProps)(UserComponent)
  
  export default User