import React from 'react';
import Api from '../api';
import { withRouter } from 'react-router-dom';

class CreateComment extends React.Component {

    constructor(props) {
        super(props)
        console.log(window.location.pathname);
        const param = window.location.pathname.split('/');
        console.log(param);
        const idPost = param[2]

        console.log(idPost);
        console.log(this.props);
        
        this.state = {
            textComment: '',
            postId: idPost
        }

    }

    


    handleComment = (e) => {
        // console.log(e.target.value);
        this.setState({ textComment: e.target.value })
    }

    postComment = async (e) => {
        e.preventDefault()

        const textComment = this.state.textComment;
        const postId = this.state.postId;
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');

        try {
            Api.createComment(postId, userId, textComment, token)
                .then((comment) => {
                    console.log('1er');
                    console.log(comment);
                    console.log('2eme');
                    console.log(this.props);
                    this.props.onCreateComment(comment)
                    this.props.history.push('/comment/'+postId)
                })

                
        } catch (error) {
            console.log(error);
        }

        this.setState({textComment: ''})

    }


    render() {
        return (
            <main  className="container formCommentContainer">
                <h1>Commentaires</h1>

                
                <form className="formComment" onSubmit={this.postComment}>
                    <label><h3>Ecrire un commentaire</h3></label>
                    <textarea className="commentArea" onChange={this.handleComment} placeholder="Ajouter un commentaire"></textarea>
                    <button className="commentButton">Ajouter un commentaire ...</button>      
                </form>
                
            </main>



        )
    }
}

export default withRouter(CreateComment);