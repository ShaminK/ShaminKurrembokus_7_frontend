import React from 'react';
import Api from '../api';
import Comment from './Comment';

class CreateComment extends React.Component {

    constructor(props) {
        super(props)
        console.log(window.location.pathname);
        const param = window.location.pathname.split('/');
        console.log(param);
        const idPost = param[2]

        console.log(idPost);
        
        this.state = {
            textComment: '',
            postId: idPost,
            listComments : []
        }

    }

    async componentDidMount() {
        console.log('%c component did mount method', "font-size: 20px;color: violet")

        try {
            const token = localStorage.getItem('token')

            const response = await fetch(`http://localhost:4200/api/posts/${this.state.postId}/listComment/`, {
                headers: {
                    'authorization': token
                }
            })
            let comments = await response.json()

            this.setState({ listComments: comments })
        } catch (error) {
            console.log(error);
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
                .then((res) => {
                    console.log(res);
                })

                

                const response = await fetch(`http://localhost:4200/api/posts/${this.state.postId}/listComment/`, {
                    headers: {
                        'authorization': token
                    }
                })
                let comments = await response.json()
                
                this.setState({ listComments: comments})
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

                < Comment listComments={this.state.listComments} />
                
            </main>



        )
    }
}

export default CreateComment;