const userList = [
    {
        uid: 1,
        name: "Kiki",
    },
    {
        uid: 2,
        name: "Miftah",
    },
    {
        uid: 3,
        name: "Lisa",
    },
    {
        uid: 4,
        name: "Budi",
    },
    {
        uid: 5,
        name: "Ana",
    }];
exports.index = (req, res) => {
    //send json response
    res.json(
        {
            response: "index",
            message: "this route for response api index",
        }
    );
};
exports.users = (req, res) => {
    var list = userList;
    //send json response
    res.json(
        {
            response: "users",
            message: "this route for response api users",
            users: list
        }
    );
}
exports.usersSearch = (req, res) => {
    //get params uid
    const uid = +req.query.uid;
    var list = userList;
    var message;
    // Search users
    for (i = 0; i < list.length; i++) {
        let obj = list[i];
        if (obj.uid === uid) {
            list = [
                {
                    uid: uid,
                    name: obj.name
                }
            ];
            message = " || User Found"
        }

    }
    if (message === undefined) {
        list = [
            {
                Status: 'Not Found!!!'
            }
        ]
        message = " || User not Found"
    }
    //send json response
    res.json(
        {
            userIdquery: uid,
            response: "users",
            message: "this route for response api users" + message,
            users: list
        }
    );
};