const User = require('../models/user')


async function handleGetAllUser (req, res) {

    try {
        const users = await User.find({});
        return res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch users" });
    }
}

async function handlegetUserById(req,res){

    try {
    const user = await User.findById(req.params.id)
    return res.json(user);

    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch users" });

    }
}

async function handleCreateNewUser (req,res) {

    console.log('user ', req.body);

    try {
        const user = await User.create(req.body)
        console.log(user);

        return res.status(201).json({
            data: user,
            message: "success"
        })

    }

    catch(err)
    {
        console.log(err);
    }


}

module.exports  = {
    handleGetAllUser,
    handlegetUserById,
    handleCreateNewUser,
}