import React from 'react';
import {connect} from 'react-redux'
import {createPost} from "../redux/actions"


class PostForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
    }

    submitHandler = event => {
        event.preventDefault()
        const {title} = this.state
        const newPost = {
            title, id: Date.now().toString()
        }
        console.log(newPost)
        this.props.createPost(newPost)
        this.setState({title: ''})
    }

    changeInputHandler = event => {
        event.persist()
        this.setState(prev => ({...prev, ...{
            [event.target.name]: event.target.value
        }}))
    }

    render() {
     return (
        <form onSubmit={this.submitHandler}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Заголовок поста</label>
              <input 
                type="text" 
                id="title" 
                name="title"
                value={this.state.title}
                onChange={this.changeInputHandler}
                className="form-control" 
                placeholder="Введите название поста" 
              >
              </input>
            </div>
            <button className="btn btn-success" type="submit">Создать</button>
        </form>
     )   
    }
}

const mapDispatchToProps = {
    createPost
}

export default connect(null, mapDispatchToProps)(PostForm)
