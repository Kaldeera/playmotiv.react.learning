import React from 'react'
import { connect } from 'react-redux';


const UserComponent = props =>  {

    console.log('refrescando componente users');
    console.log(props);

    return <div className="Users">
      <div className="Count">{ props.users.count }</div>
      <div className="List">
        {
          props.users.data
          .map((item, index) => <div 
            key={ index }
            className="Item">
            {
              item.user_login
            }
          </div>)
        }
      </div>
    </div>
  };
  
  const mapStateToProps = state => ({ users: state.users })
  const User = connect(mapStateToProps)(UserComponent)
  
  export default User