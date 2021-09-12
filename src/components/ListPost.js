import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css'


class ListPost extends React.Component {

    state = {
        listPosts: [],
    };

    async componentDidMount() {
        console.log('%c component did mount method du listPost', "font-size: 20px;color: violet");
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:4200/api/posts/', { headers: { 'authorization': token } });
            const posts = await response.json()
            console.log(posts);
            this.setState({ listPosts: posts })
        } catch (err) {
            console.log(err);
        }

    }

    render() {
        console.log('%c render method', "font-size: 20px;color: orange");
        console.log(this.state.listPosts);
       

        return (
            <main className="container postContainer">
                <h1>Fil d'actualité</h1>
                <section className="listPost">
                    {this.state.listPosts.map((item) => {
                        return (
                            <article key={item.id} className="listPostItem">
                                <h2>Titre: {item.title} </h2>
                                <p>Decription : {item.description} </p>
                                
                                <img className="postImage" src={item.urlPost} alt="Publication" />
                                <p>Publié par {item.User.firstname} {item.User.lastname}</p>
                                
                                <Link className="postLink" to={"/comment/"+item.id} params={{params: item.id}}>Commentaires</Link>
                            </article>)
                    })}
                </section>


            </main>
        )
    }
}

export default ListPost;