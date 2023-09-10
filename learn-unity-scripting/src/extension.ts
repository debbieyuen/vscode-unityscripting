// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { UnityPanel } from './UnityPanel';
import { XMLParser } from 'fast-xml-parser';

const axios = require('axios').default;
const parser = new XMLParser();

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {

	const res = await axios.get('https://rss.app/feeds/CmRSPz9oXjdA1iOb.xml');
	// const articles = parser.parse(res.data)
	const articles = parser.parse(res.data).rss.channel.item.map((article: { title: any; description: any; link: any;}) => {
		return {
			label: article.title,
			detail: article.description,
			link: article.link,
		};
	});
	console.log(articles);
	// console.log(parser.parse(res.data));

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "learn-unity-scripting" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	context.subscriptions.push(
		vscode.commands.registerCommand('learn-unity-scripting.helloWorld', async () => {
				UnityPanel.createOrShow(context.extensionUri);
				const article: any = await vscode.window.showQuickPick(articles, {
					matchOnDetail: true,
				});
				// console.log(article);
				if (article === null) {
					return;
				}
				vscode.env.openExternal(article.link);
			// The code you place here will be executed every time your command is executed
			// Display a message box to the user
			// vscode.window.showInformationMessage('Hello World from VSTodo!');
		})
	);
}

// This method is called when your extension is deactivated
export function deactivate() {}
