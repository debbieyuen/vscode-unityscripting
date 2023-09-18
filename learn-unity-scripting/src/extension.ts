// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { UnityPanel } from './UnityPanel';
import { XMLParser } from 'fast-xml-parser';
import { SidebarProvider } from './SidebarProvider';

const axios = require('axios').default;
const parser = new XMLParser();

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {

	// Fetch RSS feed to populate Unity Learn documentation
	// const res = await axios.get('https://rss.app/feeds/CmRSPz9oXjdA1iOb.xml');
	const res = await axios.get('https://rss.app/feeds/CmRSPz9oXjdA1iOb.xml');
	const articles = parser.parse(res.data).rss.channel.item.map((article: { title: any; description: any; link: any;}) => {
		return {
			label: article.title,
			detail: article.description,
			link: article.link,
		};
	});
	console.log(articles);

	// Register Unity Panel to display content from Unity Learn documentation
	context.subscriptions.push(
		vscode.commands.registerCommand('learn-unity-scripting.unityLearnDocs', async () => {
				UnityPanel.createOrShow(context.extensionUri);
				const article: any = await vscode.window.showQuickPick(articles, {
					matchOnDetail: true,
				});
				// console.log(article);
				if (article === null) {
					return;
				}
				vscode.env.openExternal(article.link);
		})
	);

	// Register Unity Sidebar
	const sidebarProvider = new SidebarProvider(context.extensionUri);
	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider(
			"unity-sidebar",
			sidebarProvider
		)
	);

	// Unity Walkthrough Tutorial
	
	// Step 1: Create New Unity Project
	context.subscriptions.push(vscode.commands.registerCommand('learn-unity-scripting.runCommand', async () => {
		await new Promise(resolve => setTimeout(resolve, 1000));
		vscode.commands.executeCommand('learn-unity-scripting.runCommand', vscode.Uri.joinPath(context.extensionUri, 'sample-folder'));
	}));

	// Step 2: Install Unity Extension
	context.subscriptions.push(vscode.commands.registerCommand('learn-unity-scripting.installunityextension', () => {
		vscode.window.showInformationMessage('You installed the Unity Extension!');
	}));

	// Step 3: Install Copilot Extension
	context.subscriptions.push(vscode.commands.registerCommand('learn-unity-scripting.installcopilotextension', () => {
		vscode.window.showInformationMessage('You installed the Copilot Extension!');
	}));

	// Step 4: Create a C# Script in Unity
	context.subscriptions.push(vscode.commands.registerCommand('learn-unity-scripting.createscript', () => {
		vscode.window.showInformationMessage('Create a C# Script');
	}));

	// Step 5: Open Terminal
	context.subscriptions.push(vscode.commands.registerCommand('learn-unity-scripting.openterminalview', () => {
		return { openFolder: vscode.Uri.joinPath(context.extensionUri, 'src') };
	}));

	// Step 6: Open Unity Project in VS Code
	context.subscriptions.push(vscode.commands.registerCommand('learn-unity-scripting.viewSources', () => {
		return { openFolder: vscode.Uri.joinPath(context.extensionUri, 'src') };
	}));
}

// This method is called when your extension is deactivated
export function deactivate() {}
