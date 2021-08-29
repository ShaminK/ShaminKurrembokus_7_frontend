import React from 'react';
import { fetchPosts } from '../api';

class ListPost extends React.Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             posts : ''
        }
    }
    
    

    componentDidMount() {
        fetch('http://localhost:3000/api/posts/')
        .then((res) => {
            return res.json()
        })
        .then((result) => {
            this.setState({posts: result })
            console.log(result);
        })
        } 
    
    
    
    
    
    render() {
        
        return (
            <div className="container">
                <h1>Fil d'actualité</h1>


                {/* {   
                    let posts = this.state.post;
                    this.state.posts.map(
                        function (post) {

                            return <div>
                                <h1>Titre: {this.state.posts.titre}</h1>
                                <p>description: {this.state.posts.description}</p>
                                <img src={this.state.post.urlImage} />
                            </div>

                        }
                    )
                } */}
            </div>
        )
    }
}

export default ListPost;