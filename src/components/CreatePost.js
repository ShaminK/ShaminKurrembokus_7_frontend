import React from 'react';

import axios from 'axios';

class CreatePost extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: 'title du post',
            description: 'la description du post',
            file: null,
            token: localStorage.getItem('token'),
            userId: localStorage.getItem('userId')
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


    }


    render() {
        return (
            <div className="container">
                <h1>Publier un article</h1>
                <form className="col-md-8 mx-auto" encType="multipart/form-data" onSubmit={this.sendFormPost}>
                    <div className="form-group mb-3">
                        <label htmlFor="postTitle">Titre de votre publication</label>
                        <input type="text" className="form-control" id="postTitle" name="title" value={this.state.title} onChange={this.titleOnChange} />
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="postDescription">Ajouter une description</label>
                        <textarea className="form-control" id="postDescription" rows="4" name="description" value={this.state.description} onChange={this.descriptionOnChange}></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="postFile">Selectionner un fichier: </label><br />
                        <input type="file" className="form-control-file" name="image" id="postFile" onChange={this.fileOnChange} />
                    </div>

                    <div className="form-group d-flex justify-content-center mt-3">
                        <button type="submit" className="btn btn-primary" >Publier</button>
                    </div>
                </form>
                <p> {this.state.title} </p>
                <p> {this.state.description} </p>
                <p> {this.state.token} </p>
                {/* <p> {this.state.urlPost} </p> */}
            </div>
        )
    }

}

export default CreatePost;