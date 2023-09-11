import * as vscode from "vscode";
import { getNonce } from "./getNonce";

export class SidebarProvider implements vscode.WebviewViewProvider {
    _view?: vscode.WebviewView;
    _doc?: vscode.TextDocument;

    constructor(private readonly _extensionUri: vscode.Uri) { }

    public resolveWebviewView(webviewView: vscode.WebviewView) {
        this._view = webviewView;

        webviewView.webview.options = {
            // Allow scripts in the webview
            enableScripts: true,

            localResourceRoots: [this._extensionUri],
        };

        webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);

        webviewView.webview.onDidReceiveMessage(async (data) => {
            switch (data.type) {
                case "onInfo": {
                    if (!data.value) {
                        return;
                    }
                    vscode.window.showInformationMessage(data.value);
                    break;
                }
                case "onError": {
                    if (!data.value) {
                        return;
                    }
                    vscode.window.showErrorMessage(data.value);
                    break;
                }
            }
        });
    }

    public revive(panel: vscode.WebviewView) {
        this._view = panel;
    }

    private _getHtmlForWebview(webview: vscode.Webview) {
        const styleResetUri = webview.asWebviewUri(
            vscode.Uri.joinPath(this._extensionUri, "media", "reset.css")
        );
        const scriptUri = webview.asWebviewUri(
            vscode.Uri.joinPath(this._extensionUri, "out", "compiled/sidebar.js")
        );
        const styleMainUri = webview.asWebviewUri(
            vscode.Uri.joinPath(this._extensionUri, "out", "compiled/vscode.css")
        );
        const styleVSCodeUri = webview.asWebviewUri(
            vscode.Uri.joinPath(this._extensionUri, "media", "vscode.css")
        );

        // Use a nonce to only allow a specific script to be run.
        const nonce = getNonce();

        return `<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<!--
					Use a content security policy to only allow loading images from https or from our extension directory,
					and only allow scripts that have a specific nonce.
        -->
        <meta http-equiv="Content-Security-Policy" content="img-src https: data:; style-src 'unsafe-inline' ${webview.cspSource
            }; script-src 'nonce-${nonce}';">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<link href="${styleResetUri}" rel="stylesheet">
				<link href="${styleVSCodeUri}" rel="stylesheet">
        <link href="${styleMainUri}" rel="stylesheet">
			</head>
      <body>
				<script nonce="${nonce}" src="${scriptUri}"></script>
                <h3 style="padding-top: 10px, padding-bottom: 5px">Project</h4>
                <p>The code for Unity 2D projects utilize 2D sprites and physics. Unity 3D works with 3D meshes and physics. Start with 2D, 3D, AR, or VR and swap at any time. Read Unity's Manual on 2D/3D projects <a href="https://docs.unity3d.com/Manual/2Dor3D.html">here</a>.</p>
                <div style="width:100%; padding-top: 20px">
                    <button style="width:20%">2D</button>
                    <button style="width:20%">3D</button>
                    <button style="width:20%">AR</button>
                    <button style="width:20%">VR</button>
                </div>
                <br></br>
                <h3 style="padding-top: 10px, padding-bottom: 5px">Devices</h4>
                <p>Select a platform you are developing for to generate code specific to the platform. See Unity's supported and closed platforms <a href="https://docs.unity3d.com/Manual/PlatformSpecific.html">here</a>.</p>
                <div style="padding-top: 20px">
                    <button style="width:45%">☎️  Mobile</button>
                    <button style="width:45%">🥽  XR</button>
                </div>
                <div>
                    <button style="width:45%">🖥️  WebGL</button>
                    <button style="width:45%">🎮  Console</button>
                </div>
                <br></br>
                <h3 style="padding-top: 10px, padding-bottom: 5px">Explain this code</h4>
                <p style="padding-bottom: 10px">A summary of the code in your current file will be displayed.</p>
                <input style="padding-bottom: 10px" type="text" placeholder="Reading...">
			</body>
			</html>`;
    }
}