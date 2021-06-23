// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "cleanally" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('cleanally.cleanally', () => {
		// CLEAN ALLY CODE HERE
		const textEditor = vscode.window.activeTextEditor;
		if (!textEditor) {
			vscode.window.showErrorMessage('No text editor open');
			return;
		}

		// Select the first and last line of document
		let firstLine = textEditor.document.lineAt(0);
		let lastLine = textEditor.document.lineAt(textEditor.document.lineCount - 1);

		// Select the range as the whole doc and get the text
		let textRange = new vscode.Range(firstLine.range.start, lastLine.range.end);
		let text =  textEditor.document.getText(textRange);


		// The constant replacing regex things
		const searchFigure = /<figure>(.|\s)*?<\/figure>/g;
		const replaceFigure = "[IMAGE]";

		const searchCSS = /<style( |.)*?>(.|\s)*?<\/style>/g;
		const replaceCSS = "<style></style>";

		const searchLang = /.lang="....."/g;
		const replaceLang = "";

		const searchDir = /.dir="..."/g;
		const replaceDir = "";

		const searchListone = /.start="1"/g;
		const replaceListone = "";

		const searchListtype = /.type="1"/g;
		const replaceListtype = "";

		const searchDiv = /<div>/g;
		const replaceDiv = "";

		const searchSpan = /<span( |.)*?>/g;
		const replaceSpan = "";

		const searchSpanend = /<\/span>/g;
		const replaceSpanend = "";

		const searchDivend = /<\/div>/g;
		const replaceDivend = "";

		// Using the regex replacement consts, replace the text string with clean replace consts
		text = text.replace(searchCSS, replaceCSS);
		text = text.replace(searchFigure, replaceFigure);
		text = text.replace(searchLang, replaceLang);
		text = text.replace(searchDir, replaceDir);
		text = text.replace(searchSpanend, replaceSpanend);
		text = text.replace(searchSpan, replaceSpan);
		text = text.replace(searchListone, replaceListone);
		text = text.replace(searchListtype, replaceListtype);
		text = text.replace(searchDiv, replaceDiv);
		text = text.replace(searchDivend, replaceDivend);

		textEditor.edit((editBuilder) => {
			editBuilder.replace(textRange, text);
		});
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
