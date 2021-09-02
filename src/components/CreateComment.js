import React from 'react';
import Api from '../api';

class CreateComment extends React.Component {
    
    state = {
        textComment : ''
    }


    handleComment = (e) => {
        // console.log(e.target.value);
        this.setState({ textComment : e.target.value })
    }
    
    postComment= (e) => {
        e.preventDefault()
        // console.log(this.state.textComment);
        // console.log(this.props.idPost);

        const textComment = this.state.textComment;
        const postId = this.props.idPost;
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');

        console.log(textComment);
        console.log(postId);
        console.log(token);
        console.log(userId);

        try {
            Api.createComment(postId, userId, textComment, token)
            .then((res)=> {
                console.log(res);
            })
        } catch (error) {
            console.log(error);
        }
    }
    
    render () {
        return (
            <form onSubmit={this.postComment}>
                <textarea onChange={this.handleComment}></textarea>
                <button>Ajouter un commentaire ...</button>
                <p> {this.props.idPost} </p>
            </form> 

            
        )
    }
}

export default CreateComment;