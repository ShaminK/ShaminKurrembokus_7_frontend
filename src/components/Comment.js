import React from 'react';
import '../App.css';

class Comment extends React.Component {

    render() {
        console.log('%c render method', "font-size: 20px;color: orange")
        
        
        if (this.props.listComments.length === 0) {
            return (
                <div className="container">
                    <p>Aucun Commentaire</p>
                </div>

            )
        } else {
            return (
                <section className="container commentContainer">
                    <ul className="listComment">
                    {this.props.listComments.map((item) => {
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
