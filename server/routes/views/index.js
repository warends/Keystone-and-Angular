var keystone = require('keystone');

exports = module.exports = function (req, res) {

	function renderFullPage() {
			return `
			<!doctype html>
			<html>
				<head>
					<base href="/">
					<title>Keystone With Angular</title>
				</head>
				<body>
					<app-root></app-root>
				</body>
			</html>`;
    }

	res.send(renderFullPage());
};
