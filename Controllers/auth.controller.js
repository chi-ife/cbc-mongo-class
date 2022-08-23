exports.signupController = (req, res) => {
    const {name} = req.body;
    if(!name){
        res.status(400).json({msg: `Fields are missing! Try again later`})
        return
    }
    res.status(200).json({msg: `Welcome, ${name}`})
}