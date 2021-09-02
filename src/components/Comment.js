import React from 'react';
import '../App.css';
import CreateComment from './CreateComment';

class Comment extends React.Component {

    constructor(props) {
        super(props);

        

        this.state = {
            idPost: this.props.idPost,
            idUser: localStorage.getItem('userId'),
            listComments: []
        }
        

    }


    async componentDidMount() {
        console.log('%c component did mount method', "font-size: 20px;color: violet")

        try {
            const token = localStorage.getItem('token')
            console.log(token);
            console.log(this.state.idPost);
            const response = await fetch(`http://localhost:4200/api/posts/${this.state.idPost}/listComment/`, {
                headers: {
                    'authorization': token
                }
            })
            let comments = await response.json()
            console.log(comments.length);


            this.setState({ listComments: comments })
        } catch (error) {
            console.log(error);
        }

    }

    render() {
        console.log('%c render method', "font-size: 20px;color: orange")
        console.log(this.state.listComments);
        
        
        if (this.state.listComments.length === 0) {
            return (
                <div className="container">
                    
                    <h1>Commentaires</h1>
                   
                    <p>Aucun Commentaire</p>
                </div>

            )
        } else {
            return (
                <div className="container commentContainer">
                    <h1>Commentaires</h1>
                    <ul className="listComment">
                    {this.state.listComments.map((item) => {
                        return (
                                <li key={item.id} className="listCommentItem">
                                    <p className="commentContent"> {item.comment} </p>
                                    <p className="commentInfo"> {item.createdAt} </p>
                                </li>   
                        )
                    })}
                    </ul>
                </div>
            )
        }

    }
}



export default Comment;
