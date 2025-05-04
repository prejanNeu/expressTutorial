const express = require("express");

const {handleGetAllUser,handlegetUserById,handleCreateNewUser} = require("../controllers/user")

const router = express.Router();

router.get('/', handleGetAllUser)
// app.get('/users',(req,res) => {
//     const html = `
//     <ul>
//         ${users.map(user => `<li> ${user.first_name}</li>`).join("")}
//     </ul>
//     `

//     res.send(html);
// })

router.get('/:id',handlegetUserById);

router.post('/', handleCreateNewUser);

module.exports = router;