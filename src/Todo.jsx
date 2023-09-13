
const Todo = ({name,done}) => {
   return <li> {name}: {done ? 'good' :'bad'} </li>

    
};

export default Todo;