const adminValidate = (req, res, next) => {
    const role = req.user.role;
    if(rol === 'admin') {
        return next()
    } else {
        return res.status(401).json({message:'Access Denied!'})
    }
};

module.exports = adminValidate