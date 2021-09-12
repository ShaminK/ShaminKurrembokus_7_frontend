import React from 'react';
import { withRouter } from 'react-router-dom';

import axios from 'axios';

class CreatePost extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: 'title du post',
            description: 'la description du post',
            file: null,
            token: localStorage.getItem('token'),
            userId: localStorage.getItem('userId'),
            // redirect: false
        }
    }

    fileOnChange = (e) => {
        let file = e.target.files[0]
        this.setState({ file: file })
    }


    titleOnChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    descriptionOnChange = (e) => {
        this.setState({
            description: e.target.value
        })
    }

    sendFormPost = (e) => {
        e.preventDefault();

        let title = this.state.title;
        let description = this.state.description;
        let file = this.state.file;
        let token = this.state.token;
        let userId = this.state.userId;
        console.log('(CreatePost/sendForm) contenu des variables contenant le state :' + title + ' - ' + description + ' - ' + file + ' - ' + token + ' - ' + userId);

        let formData = new FormData()

        formData.append('title', title)
        formData.append('description', description)
        formData.append('image', file)
        formData.append('userId', userId);

        console.log('(CreatePost/sendForm)');
        for (var value of formData.values()) {
            console.log(value);
        }

        
        axios.post("http://localhost:4200/api/posts/edit/", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                'Authorization': token
            }

        })
            .then(res => console.log(res))
            .catch(err => console.error(err))

            // this.setState({ redirect : true})
            this.props.history.push('/')

    }


    render() {
        return (
            
            <main className="container">
                <h1>Publier un article</h1>
                <form className="col-md-8 mx-auto" encType="multipart/form-data" onSubmit={this.sendFormPost}>
                    <div className="form-group mb-3">
                        <label htmlFor="postTitle">Titre de votre publication</label>
                        <input type="text" className="form-control" id="postTitle" name="title" onChange={this.titleOnChange} placeholder="Ajouter un titre"/>
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="postDescription">Ajouter une description</label>
                        <textarea className="form-control" id="postDescription" rows="4" name="description" placeholder="Ajouter un description" onChange={this.descriptionOnChange}></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="postFile">Selectionner un fichier: </label><br />
                        <input type="file" className="form-control-file" name="image" id="postFile" onChange={this.fileOnChange} />
                    </div>

                    <div className="form-group d-flex justify-content-center mt-3">
                        <button type="submit" className="btn btn-primary" >Publier</button>
                    </div>
                </form>
                {/* {this.state.redirect ? (<Redirect push to="/" />) : null} */}
            </main>
        )
    }

}

export default withRouter(CreatePost);