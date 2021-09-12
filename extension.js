// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {


	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "webboilerplate" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('webboilerplate.createTemplate', () => {
		// The code you place here will be executed every time your command is executed
		// if (!vscode.workspace) {
		// 	vscode.window.showErrorMessage('GOT HERE')
		// 	return vscode.window.showErrorMessage('Please open a project folder first');
		// 	}
		const folderPath = vscode.workspace.workspaceFolders[0].uri
		.toString()
		.split(':')[1];
		
		const htmlContent = `<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta http-equiv="X-UA-Compatible" content="ie=edge" />
			<title>Document</title>
			<link rel="stylesheet" href="style.css" />
		</head>
		<body>
			<script src="main.js"></script>
		</body>
		</html>`;
		
		fs.writeFile(path.join(folderPath, 'index.html'), htmlContent, function(err) {
			if (err) throw err;
			console.log("Created")
		})
		
		// fs.writeFile(path.join(folderPath, 'style.css'), '', function(err) {
		// 	if (err) {
		// 		return vscode.window.showErrorMessage('Error creating style.css')
		// 	}
		// })

		// fs.writeFile(path.join(folderPath, 'main.js'), '', function(err) {
		// 	if (err) {
		// 		return vscode.window.showErrorMessage('Error creating main.js')
		// 	}
		// })
		// Display a message box to the user
		vscode.window.showInformationMessage('Template Created');
	});
	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
