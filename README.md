# VSCode Unity Learn Extension
Unity is one of many game engines that has taken cross-platform game development to the next level. The Unity Engine has expanded beyond the game development community and has opened doors of innovation in animation, spatial computing, cinematic arts, and many other fields. 

To make the most out of Unity, it is essential and valuable to understand C# programming. Even when a project doesn’t require much programming, a deeper understanding of C# and Visual Studio Code will support design processes. The Visual Studio Code Extension, **Unity Learn**, strives to support Unity users in simplifying workflows and working conveniently and efficiently. The **Unity Learn** extension serves as both a teaching and learning tool to support users in understanding and creating a Unity application in real time. This repository holds code for 1. The Unity Learn extension, which was created in Typescript and 2. A sample 3D Unity project that works in conjunction with the Unity Learn extension. 

The depth of C# programming varies drastically depending on the designer/developer’s unique needs, projects, and tasks. Animators, creative coders, programmers, UI/UX designers, and 3D artists may all utilize Unity in their professional work but need to fulfill different goals within the engine. Therefore, the Unity Learn extension’s main goal is not to necessarily teach mastery of the C# language but to teach how Unity and Visual Studio Code can be adapted for their purposes. 

Here are some lessons I hope students can think about while using this extension:
  * **Design and code with intention:** Unity allows developers and designers to design one application that can be built for various mobile devices, desktops, websites, consoles, and headsets. Applications that support more platforms may benefit from increased sales and profits. However, what are the other reasons that led you to select those platforms for your application? How does the code or design of the application change as you customize the experience to a specific platform?
  * **Workflow:** Visual Studio and Unity work seamlessly together. However, many game developers (including me) have issues working with Visual Studio Code and Unity. Can we design a new workflow between Visual Studio Code and Unity? What could that look like? 

## VS Code Features

### Walkthrough: Get Started with Unity Development
https://github.com/debbieyuen/vscode-unityscripting/assets/31296177/9850b80c-3c08-4f40-a82a-d19db9467f39

### Unity Learn Documentation
https://github.com/debbieyuen/vscode-unityscripting/assets/31296177/7d999fd3-18e5-49b1-b079-510f5f08d1cf

### Snippets: Unity Player Movement Snippets
https://github.com/debbieyuen/vscode-unityscripting/assets/31296177/f935b223-ac8a-4141-9a29-59a2501baac5

### VSCode Actionbar and Sidebar: 
<img width="1280" alt="specialization" src="https://github.com/debbieyuen/vscode-unityscripting/assets/31296177/5dc2618d-8705-4ccc-8e39-b778e29bffb3">

## Requirements and Links
  * [Visual Studio Code 1.82.0](https://code.visualstudio.com/)
  * [Your First VSCode Extension](https://code.visualstudio.com/api/get-started/your-first-extension)
  * [Git Large File Storage](https://git-lfs.com/)
  * [Fast XML Parser](https://www.npmjs.com/package/fast-xml-parser)
  * [Unity 2022](https://unity.com/releases/lts)
  * [Axios](https://www.npmjs.com/package/axios)
  * [Codicon](https://microsoft.github.io/vscode-codicons/dist/codicon.html)

## Set Up

Fork or clone the entire repo
```bash
$ git clone https://github.com/debbieyuen/vscode-unityscripting
```

Only clone the VSCode Extension
```bash
$ git clone https://github.com/debbieyuen/vscode-unityscripting
```

Only clone the Unity Project
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
 * This extension makes use of code from [VSCode Extension Samples](https://github.com/microsoft/vscode-extension-samples/tree/main)
 * Thank you to the creators of the many resources and tutorials I found online such as [Ben Awad](https://github.com/benawad)
 * Inspired through my teaching at [USC Games](https://usc-ctin583.github.io/), for I have learned so much from the students and faculty. 
