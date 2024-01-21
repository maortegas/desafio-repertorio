router.get("/", (req, res)=> {
    res.send("hello");
})

router.post(`/registrer`, (req, res)=>{
    res.send("Register a new user");
})

router.put(`/update`, (req,res)=>{
    res.send("Update user");
})

router.delete(`/delete`, (req, res)=>{
    res.send("Delete user")
})

module.exports = router;