import React from 'react';
import Api from '../api';
import Comment from './Comment';

class CreateComment extends React.Component {

    constructor(props) {
        super(props)
        
        const param = props.location.pathname.split('/');
        const idPost = param[2];
        
        this.state = {
            textComment: '',
            postId: idPost
        }

        // console.log(this.state.postId);

    }



    handleComment = (e) => {
        // console.log(e.target.value);
        this.setState({ textComment: e.target.value })
    }

    postComment = (e) => {
        e.preventDefault()
        // console.log(this.state.textComment);
        // console.log(this.props.idPost);

        const textComment = this.state.textComment;
        const postId = this.state.postId;
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');

        // console.log(textComment);
        // console.log(postId);
        // console.log(token);
        // console.log(userId);

        try {
            Api.createComment(postId, userId, textComment, token)
                .then((res) => {
                    console.log(res);
                })
        } catch (error) {
            console.log(error);
        }
    }


    render() {
        return (
            <div  className="container formCommentContainer">
                <h1>Commentaires</h1>

                
                <form className="formComment" onSubmit={this.postComment}>
                    <label><h3>Ecrire un commentaire</h3></label>
                    <textarea className="commentArea" onChange={this.handleComment} placeholder="Ajouter un commentaire"></textarea>
                    <button className="commentButton">Ajouter un commentaire ...</button>      
                </form>

                < Comment idPost={this.state.postId} />
                
            </div>



        )
    }
}

export default CreateComment;