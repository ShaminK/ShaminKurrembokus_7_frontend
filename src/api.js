
// -------------------------------------------//
//              Users
// -------------------------------------------//

async function postUser(mail, password, lastname, firstname) {
    let res = await fetch('http://localhost:4200/api/auth/signup', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            'mail': mail,
            'password': password,
            'lastname': lastname,
            'firstname': firstname

        })
    })
    return res.json()
}

async function connectUser(mail, password) {
    let res = await fetch('http://localhost:4200/api/auth/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            'mail': mail,
            'password': password
        })
    })


    return res.json()
}


export default { postUser, connectUser};

