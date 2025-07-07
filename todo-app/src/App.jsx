import { Component } from 'react'
import './App.css'

export default class App extends Component{

  state = {
    todoData : [ //todoData라는 이름을 가진 state 생성
        {
          id: "1",
          title: "공부하기",
          completed: true,
        },
        {
          id: "2",
          title: "청소하기",
          completed: false,
        }
      ],
      value: '',
  }

  btnSyle={
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
  }

  getStyle = (completed) => {
    return{
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: completed ? 'line-through': 'none',

    }
  }

  handleClick = (id) => {
    console.log(id);
    let newTodoData = this.state.todoData.filter((data) => data.id !== id )
    console.log(newTodoData);
    this.setState({todoData: newTodoData}); //state 업데이트
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({value: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault(); //refresh 되는 기본 동작 막아줌

    let newTodo = {
      id: Date.now(),
      title: this.state.value,
      completed: false,
    }

    this.setState ({
      todoData: [...this.state.todoData, newTodo], //얕은 복사 넣어줌
      value: '',
    })
  }

  handleCompleteChange = (id) => {
    let newTodoData = this.state.todoData.map((data) => {
      if (data.id === id){
        data.completed = !data.completed;
      }
      return data;
    })

    this.setState({todoData: newTodoData});
  }

  render () {
    return (
      <div className='container'>
        <div className='todoBlock'>
          <div className='title'>
            <h1>할 일 목록</h1>
          </div>

          {
            this.state.todoData.map((data) => (
              <div key={data.id} style={this.getStyle(data.completed)}>
                <input type='checkbox'
                onChange={()=> this.handleCompleteChange(data.id)}
                checked={data.completed}/>
                {data.title}
                <button style={this.btnSyle} onClick={() => this.handleClick(data.id)}>X</button>
              </div>
            ))
          
          }

          <form style = {{display: 'flex'}} onSubmit={this.handleSubmit}>
            <input
            type='text'
            name='value'
            style={{flex:'10', padding: '5px'}}
            placeholder='할 일을 입력하세요'
            value={this.state.value}
            onChange={this.handleChange}
          
            />
            <input
            type='submit'
            value='입력'
            className='btn'
            style={{flex:'1'}}
            />
          </form>

        </div>
      </div>
    )
  }
}