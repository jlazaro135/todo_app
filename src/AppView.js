import Container from './components/Container';
import TaskContainer from './components/Task/TaskContainer';
import TodoHeader from './components/TodoHeader';
import TodoMain from './components/TodoMain';
import TodoFooter from './components/TodoFooter';



function AppView(){
    return (
      <Container className='wrapper container-fluid'>
        <TodoHeader />
        <TodoMain>
          <TaskContainer/>
        </TodoMain>
        <TodoFooter/>
      </Container>
    )};

    export default AppView;