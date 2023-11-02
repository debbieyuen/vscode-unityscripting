# VSCode Unity Learn Extension
[Unity](https://unity.com/) is one of many game engines that has taken [cross-platform game development](https://docs.unity3d.com/Manual/CrossPlatformConsiderations.html) to the next level. The Unity Engine has expanded beyond the game development community and has opened doors of innovation in animation, spatial computing, cinematic arts, and graphics. 

To make the most out of Unity, it is essential and valuable for users to understand [C# programming](https://docs.unity3d.com/Manual/ScriptingSection.html). Even when an individual’s role doesn’t require programming, a deeper understanding of C# and Visual Studio Code will support the design process. The Visual Studio Code Extension, *Unity Learn*, strives to simplify workflows to work conveniently and efficiently. The Unity Learn extension is a teaching and learning tool to help users understand and create Unity applications. **This repository holds code for 1. The [Unity Learn extension](learn-unity-scripting), which was created in Typescript and 2. A sample [3D Unity project](RunOctocat) that works in conjunction with the Unity Learn extension.** Feel free to visit the [repository](https://github.com/debbieyuen/octocat-reactjs) for the [Octocat game ReactJS website](https://debbieyuen.github.io/octocat-reactjs/).

The depth of C# programming varies drastically depending on the user’s unique needs, projects, and tasks. Therefore, the Unity Learn extension’s primary goal is not to teach mastery of the C# language but to teach how Unity and Visual Studio Code can be adapted for their purposes. 


**Here are some lessons I hope students can think about while using this extension:**
  * **Design and code with intention:** Unity allows developers and designers to design one application that can be built for various mobile devices, desktops, websites, consoles, and headsets. Applications that support more platforms may benefit from increased sales and profits. What other reasons led you to select those platforms for your application? How does the code or design of the application change as you customize the experience to a specific platform?
  * **Workflow:** Visual Studio and Unity work seamlessly together. However, many game developers (including me) have issues working with Visual Studio Code and Unity. Can we design a new workflow between Visual Studio Code and Unity? What could that look like?
  * **Documentation:** Documentation is your toolkit and best friend. Videos and tutorials are great. Learn how to read documentation to prototype new and custom experiences.
  * **Monetization and User Experience:** The relationship between game monetization and user experience can more or less depend on each other. Will one drive the other? Does one drive the other? How does prioritizing one aspect over the other affect the gameplay designs?

**Links:**
| Name  | Description | Language | Link
| ------------- | ------------- | ---- | ---- |
| VSCode Unity Learn Extension | Visual Studio Code Extension to support Unity and VSCode workflows | Typescript | [Folder](learn-unity-scripting) |
| Unity Octocat Game Project | Interactive game created with Unity 3D | C# | [Folder](RunOctocat) |
| ReactJS Octocat Game | Responsive website created with React | Javascript | [Repository](https://github.com/debbieyuen/octocat-reactjs) |
| Octocat Game Website | Immersive website for an Octocat World game | GitHub Pages | [Website](https://debbieyuen.github.io/octocat-reactjs/) |
| Octocat Character | 3D model of the Octocat mascot created in Blender | Blend | 3D Model |

## VS Code Features

### [Walkthrough](https://code.visualstudio.com/api/ux-guidelines/walkthroughs): Get Started with Unity Development
https://github.com/debbieyuen/vscode-unityscripting/assets/31296177/0c2a43cc-faff-4257-8656-8385d7d5c3e4

### [Command Palette](https://code.visualstudio.com/api/ux-guidelines/command-palette): Unity Learn Documentation
| Symbol  | Category | Description |
| ------- | -------- | ----------- |
| 👾 | Course Content | Course website, university links, lecture slides, lab assignments |
| 📝 | Documentation  | Unity Engine, Unity C# Scripting, Microsoft C# documentation, and other readings |
| 📚 | Tutorials      | Tutorials, sample projects, and playgrounds from Unity Learn and other web links |
| 📹 | Videos         | Individual videos from various web links including YouTube |

https://github.com/debbieyuen/vscode-unityscripting/assets/31296177/87ff1f02-890c-4003-bd4f-0a3717022084


### [Snippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets): Unity Player Movement Snippets
https://github.com/debbieyuen/vscode-unityscripting/assets/31296177/f935b223-ac8a-4141-9a29-59a2501baac5

### [Activity Bar](https://code.visualstudio.com/api/ux-guidelines/activity-bar) and [Primary Sidebar](https://code.visualstudio.com/api/ux-guidelines/sidebars): C# Programming
### [Documenting Editing](https://github.com/microsoft/vscode-extension-samples/tree/main/document-editing-sample) and [Code Actions](https://github.com/microsoft/vscode-extension-samples/tree/main/code-actions-sample): C# Programming
<img width="1280" alt="specialization" src="https://github.com/debbieyuen/vscode-unityscripting/assets/31296177/5dc2618d-8705-4ccc-8e39-b778e29bffb3">

### [Unity Engine Inspector](https://docs.unity3d.com/Manual/VariablesAndTheInspector.html): Unity Inspector Component 
<img width="1280" alt="Screenshot 2023-09-17 at 10 38 53 PM" src="https://github.com/debbieyuen/vscode-unityscripting/assets/31296177/5ddeb3dd-0f93-450d-8289-a5f23f2aa0bf">

### [Run Octocat Unity Game](https://usc-ctin583.github.io/Projects/project1/): Unity Engine
<img width="1280" alt="Screenshot 2023-09-30 at 7 35 03 PM" src="https://github.com/debbieyuen/vscode-unityscripting/assets/31296177/bb99e551-8c60-4b3c-a05c-c0c287d843da">


## Requirements and Links
  * VSCode Extension:
       * [Visual Studio Code 1.82.0](https://code.visualstudio.com/)
       * [Axios](https://www.npmjs.com/package/axios)
       * [Codicon](https://microsoft.github.io/vscode-codicons/dist/codicon.html)
       * [Your First VSCode Extension](https://code.visualstudio.com/api/get-started/your-first-extension)
       * [Fast XML Parser](https://www.npmjs.com/package/fast-xml-parser)
  * Unity:
       * [Git Large File Storage](https://git-lfs.com/)
       * [Unity 2022.3.7f1](https://unity.com/releases/lts)
       * [Input System 1.6.3](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.7/manual/index.html)
       * [Unity Render Streaming](https://github.com/Unity-Technologies/UnityRenderStreaming)
       * [Unity RTC](https://github.com/Unity-Technologies/com.unity.webrtc)
  * Run Octocat Game:
       * [AI Navigation 1.1.4](https://docs.unity3d.com/Packages/com.unity.ai.navigation@2.0/manual/index.html)
       * [Cinemachine 2.9.7](https://docs.unity3d.com/Packages/com.unity.cinemachine@2.3/manual/index.html)
       * [Unity UI 1.0.0](https://docs.unity3d.com/Manual/UIElements.html)
       * [Unity Asset Store](https://assetstore.unity.com/)
       * [MudBun](https://assetstore.unity.com/packages/tools/particles-effects/mudbun-volumetric-vfx-modeling-177891)
       * [Build your own octocat](https://myoctocat.com/)
       * Model your own 3D Octocat in Blender or Unity!

## Set Up

Fork or clone the entire repo
```bash
$ git clone https://github.com/debbieyuen/vscode-unityscripting
```

Make sure you have Git and Node.js. Then, install Yeoman and VS Code Extension Generator
```bash
$ npm install -g yo generator-code
```

Install the Axios API for the VSCode Extension
```bash
$ npm install axios
```

Install Fast XML Parser for the VSCode Extension
```bash
$ npm install fast-xml-parser
```

For the Unity project, install Git LFS
```bash
$ git lfs install
```
    
## Credits and References 
This extension was designed to support me in teaching an introduction to game development course at USC. While teaching, I wanted to be able to switch between live coding in VSCode and illustrating programming concepts on my lecture slides. I was also interested in seeing how VSCode, Unity, and Documentation could connect together. Through all of this, I hoped that my students would learn data structures, object-oriented programming, and important game development affordances by creating a real Unity game. But most of all, I hoped that each student would leave class day confident and excited to learn. While this extension is not published, I’ve had fun creating and using this extension with my class. Thank you 😊

 * This extension makes use of code from [VSCode Extension Samples](https://github.com/microsoft/vscode-extension-samples/tree/main)
 * The Visual Studio Code [live streams](https://www.youtube.com/@code) on YouTube were amazing!! Credits to [Tyler Leonhardt](https://github.com/TylerLeonhardt)
 * Thank you to the creators of the many resources and tutorials I found online such as [Ben Awad](https://github.com/benawad)
 * Inspired through my teaching at [USC Games](https://usc-ctin583.github.io/), for I have learned so much from the students and faculty. 
