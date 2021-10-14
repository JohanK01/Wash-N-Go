exports.app = (req, res) => {

    res.sendfile('public/html/app.html');

};

exports.login = (req, res) => {

    res.sendfile('public/html/login.html');

};

exports.admin = (req, res) => {

    res.sendfile('public/html/admin.html');
}