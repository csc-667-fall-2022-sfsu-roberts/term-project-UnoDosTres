const protect = (request, response, next) => {
    if(request.session.authenticated == true) {
        next();
    } else {
        response.redirect("/auth/login");
    }
}

module.exports = protect