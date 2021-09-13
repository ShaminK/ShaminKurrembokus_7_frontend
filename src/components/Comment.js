import React from 'react';
import '../App.css';
import CreateComment from './CreateComment';

class Comment extends React.Component {

    constructor(props) {
        super(props)
        // console.log(window.location.pathname);
        const param = window.location.pathname.split('/');
        // console.log(param);
        const idPost = param[2]

        // console.log(idPost);

        this.state = {
            listComments: [],
            postId: idPost
        }
    }




    async componentDidMount() {
        const token = localStorage.getItem('token');

        const response = await fetch(`http://localhost:4200/api/posts/${this.state.postId}/listComment/`, {
            headers: {
                'authorization': token
            }
        })
        let comments = await response.json()
        console.log('etape1');
        console.log(comments);
        console.log('etape2');
        this.setState({ listComments: comments })
    }

    render() {
        console.log('%c render method', "font-size: 20px;color: orange")


        if (this.state.listComments.length === 0) {
            return (

                <section className="container">
                    <CreateComment onCreateComment={(comment) => {
                        this.setState({ listComments: [...this.state.listComments, comment] })
                    }} />
                    <p>Aucun Commentaire</p>
                </section>

            )
        } else {
            return (
                <section className="container commentContainer">
                    <CreateComment onCreateComment={(comment) => {
                        this.setState({ listComments: [...this.state.listComments, comment] })
                    }} />
                    <ul className="listComment">
                        {this.state.listComments.map((item) => {
                            return (
                                <li key={item.id} className="listCommentItem">
                                    <p className="commentAuthor">{item.User.firstname} {item.User.lastname}</p>
                                    <p className="commentContent"> {item.comment} </p>
                                    <p className="commentInfo"> {item.createdAt} </p>
                                </li>
                            )
                        })}
                    </ul>
                </section>
            )
        }

    }
}



export default Comment;
