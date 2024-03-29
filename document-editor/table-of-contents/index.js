ej.base.enableRipple(window.ripple)


    //Documenteditor control rendering starts
    var hostUrl = 'http://localhost:62728/';
    var container = new ej.documenteditor.DocumentEditorContainer();
    ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar);
    container.serviceUrl = hostUrl + 'api/documenteditor/';
    container.appendTo('#container');
    container.height = '590px';
    var defaultDocument = {
        "sections": [
            {
                "blocks": [
                    {
                        "paragraphFormat": {
                            "styleName": "Title"
                        },
                        "inlines": [
                            {
                                "text": "ASP.NET Core Succinctly"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": []
                    },
                    {
                        "characterFormat": {
                            "fontSize": 16.0,
                            "fontColor": "#4472C4FF"
                        },
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Table of Contents",
                                "characterFormat": {
                                    "fontSize": 16.0,
                                    "fontColor": "#4472C4FF"
                                }
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "TOC 1",
                            "tabs": [
                                {
                                    "tabJustification": "Right",
                                    "position": 467.5,
                                    "tabLeader": "Dot",
                                    "deletePosition": 0.0
                                }
                            ]
                        },
                        "inlines": [
                            {
                                "hasFieldEnd": true,
                                "fieldType": 0
                            },
                            {
                                "text": " TOC \\o \"1-3\" \\h \\z "
                            },
                            {
                                "fieldType": 2
                            },
                            {
                                "hasFieldEnd": true,
                                "fieldType": 0
                            },
                            {
                                "text": "HYPERLINK \\l \"_Toc523388455\""
                            },
                            {
                                "fieldType": 2
                            },
                            {
                                "text": "Chapter 1 Introduction to ASP.NET Core",
                                "characterFormat": {}
                            },
                            {
                                "text": "\t"
                            },
                            {
                                "hasFieldEnd": true,
                                "fieldType": 0
                            },
                            {
                                "text": " PAGEREF _Toc523388455 \\h "
                            },
                            {
                                "fieldType": 2
                            },
                            {
                                "text": "1"
                            },
                            {
                                "fieldType": 1
                            },
                            {
                                "fieldType": 1
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "TOC 1",
                            "tabs": [
                                {
                                    "tabJustification": "Right",
                                    "position": 467.5,
                                    "tabLeader": "Dot",
                                    "deletePosition": 0.0
                                }
                            ]
                        },
                        "inlines": [
                            {
                                "hasFieldEnd": true,
                                "fieldType": 0
                            },
                            {
                                "text": "HYPERLINK \\l \"_Toc523388456\""
                            },
                            {
                                "fieldType": 2
                            },
                            {
                                "text": "Chapter 2 What are .NET Core and ASP.NET Core?",
                                "characterFormat": {}
                            },
                            {
                                "text": "\t"
                            },
                            {
                                "hasFieldEnd": true,
                                "fieldType": 0
                            },
                            {
                                "text": " PAGEREF _Toc523388456 \\h "
                            },
                            {
                                "fieldType": 2
                            },
                            {
                                "text": "1"
                            },
                            {
                                "fieldType": 1
                            },
                            {
                                "fieldType": 1
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "TOC 2",
                            "tabs": [
                                {
                                    "tabJustification": "Right",
                                    "position": 467.5,
                                    "tabLeader": "Dot",
                                    "deletePosition": 0.0
                                }
                            ]
                        },
                        "inlines": [
                            {
                                "hasFieldEnd": true,
                                "fieldType": 0
                            },
                            {
                                "text": "HYPERLINK \\l \"_Toc523388457\""
                            },
                            {
                                "fieldType": 2
                            },
                            {
                                "text": ".NET Core",
                                "characterFormat": {}
                            },
                            {
                                "text": "\t"
                            },
                            {
                                "hasFieldEnd": true,
                                "fieldType": 0
                            },
                            {
                                "text": " PAGEREF _Toc523388457 \\h "
                            },
                            {
                                "fieldType": 2
                            },
                            {
                                "text": "1"
                            },
                            {
                                "fieldType": 1
                            },
                            {
                                "fieldType": 1
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "TOC 2",
                            "tabs": [
                                {
                                    "tabJustification": "Right",
                                    "position": 467.5,
                                    "tabLeader": "Dot",
                                    "deletePosition": 0.0
                                }
                            ]
                        },
                        "inlines": [
                            {
                                "hasFieldEnd": true,
                                "fieldType": 0
                            },
                            {
                                "text": "HYPERLINK \\l \"_Toc523388458\""
                            },
                            {
                                "fieldType": 2
                            },
                            {
                                "text": "ASP.NET Core",
                                "characterFormat": {}
                            },
                            {
                                "text": "\t"
                            },
                            {
                                "hasFieldEnd": true,
                                "fieldType": 0
                            },
                            {
                                "text": " PAGEREF _Toc523388458 \\h "
                            },
                            {
                                "fieldType": 2
                            },
                            {
                                "text": "1"
                            },
                            {
                                "fieldType": 1
                            },
                            {
                                "fieldType": 1
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "TOC 1",
                            "tabs": [
                                {
                                    "tabJustification": "Right",
                                    "position": 467.5,
                                    "tabLeader": "Dot",
                                    "deletePosition": 0.0
                                }
                            ]
                        },
                        "inlines": [
                            {
                                "hasFieldEnd": true,
                                "fieldType": 0
                            },
                            {
                                "text": "HYPERLINK \\l \"_Toc523388459\""
                            },
                            {
                                "fieldType": 2
                            },
                            {
                                "text": "Chapter 3 Getting Started with .NET Core",
                                "characterFormat": {}
                            },
                            {
                                "text": "\t"
                            },
                            {
                                "hasFieldEnd": true,
                                "fieldType": 0
                            },
                            {
                                "text": " PAGEREF _Toc523388459 \\h "
                            },
                            {
                                "fieldType": 2
                            },
                            {
                                "text": "2"
                            },
                            {
                                "fieldType": 1
                            },
                            {
                                "fieldType": 1
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "TOC 2",
                            "tabs": [
                                {
                                    "tabJustification": "Right",
                                    "position": 467.5,
                                    "tabLeader": "Dot",
                                    "deletePosition": 0.0
                                }
                            ]
                        },
                        "inlines": [
                            {
                                "hasFieldEnd": true,
                                "fieldType": 0
                            },
                            {
                                "text": "HYPERLINK \\l \"_Toc523388460\""
                            },
                            {
                                "fieldType": 2
                            },
                            {
                                "text": "Installing .NET Core on Windows",
                                "characterFormat": {}
                            },
                            {
                                "text": "\t"
                            },
                            {
                                "hasFieldEnd": true,
                                "fieldType": 0
                            },
                            {
                                "text": " PAGEREF _Toc523388460 \\h "
                            },
                            {
                                "fieldType": 2
                            },
                            {
                                "text": "2"
                            },
                            {
                                "fieldType": 1
                            },
                            {
                                "fieldType": 1
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "TOC 2",
                            "tabs": [
                                {
                                    "tabJustification": "Right",
                                    "position": 467.5,
                                    "tabLeader": "Dot",
                                    "deletePosition": 0.0
                                }
                            ]
                        },
                        "inlines": [
                            {
                                "hasFieldEnd": true,
                                "fieldType": 0
                            },
                            {
                                "text": "HYPERLINK \\l \"_Toc523388461\""
                            },
                            {
                                "fieldType": 2
                            },
                            {
                                "text": "Installing .NET Core on a Mac (or Linux)",
                                "characterFormat": {}
                            },
                            {
                                "text": "\t"
                            },
                            {
                                "hasFieldEnd": true,
                                "fieldType": 0
                            },
                            {
                                "text": " PAGEREF _Toc523388461 \\h "
                            },
                            {
                                "fieldType": 2
                            },
                            {
                                "text": "2"
                            },
                            {
                                "fieldType": 1
                            },
                            {
                                "fieldType": 1
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "TOC 1",
                            "tabs": [
                                {
                                    "tabJustification": "Right",
                                    "position": 467.5,
                                    "tabLeader": "Dot",
                                    "deletePosition": 0.0
                                }
                            ]
                        },
                        "inlines": [
                            {
                                "hasFieldEnd": true,
                                "fieldType": 0
                            },
                            {
                                "text": "HYPERLINK \\l \"_Toc523388462\""
                            },
                            {
                                "fieldType": 2
                            },
                            {
                                "text": "A Look at the Future",
                                "characterFormat": {}
                            },
                            {
                                "text": "\t"
                            },
                            {
                                "hasFieldEnd": true,
                                "fieldType": 0
                            },
                            {
                                "text": " PAGEREF _Toc523388462 \\h "
                            },
                            {
                                "fieldType": 2
                            },
                            {
                                "text": "2"
                            },
                            {
                                "fieldType": 1
                            },
                            {
                                "fieldType": 1
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "fieldType": 1
                            },
                            {
                                "name": "_GoBack",
                                "bookmarkType": 0
                            },
                            {
                                "name": "_GoBack",
                                "bookmarkType": 1
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Heading 1"
                        },
                        "inlines": [
                            {
                                "name": "_Toc523387945",
                                "bookmarkType": 0
                            },
                            {
                                "name": "_Toc523388455",
                                "bookmarkType": 0
                            },
                            {
                                "text": "Chapter 1 Introduction to ASP.NET Core"
                            },
                            {
                                "name": "_Toc523387945",
                                "bookmarkType": 1
                            },
                            {
                                "name": "_Toc523388455",
                                "bookmarkType": 1
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "ASP.NET Core is the web development framework that comes together with the new .NET Core and, besides all the new features, also adopts a significantly new approach to web development. The first chapter starts by going through the history of Microsoft's web stack to show the motivations that led to this framework. Later, it moves to more practical matters, like showing you how to get started with .NET Core and describing the foundations of the framework."
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Heading 1"
                        },
                        "inlines": [
                            {
                                "name": "_Toc523387946",
                                "bookmarkType": 0
                            },
                            {
                                "name": "_Toc523388456",
                                "bookmarkType": 0
                            },
                            {
                                "text": "Chapter 2 What are .NET Core and ASP.NET Core?"
                            },
                            {
                                "name": "_Toc523387946",
                                "bookmarkType": 1
                            },
                            {
                                "name": "_Toc523388456",
                                "bookmarkType": 1
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Before trying to understand the reason for its existence, let's first try to define what .NET Core and ASP.NET Core are."
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Heading 2"
                        },
                        "inlines": [
                            {
                                "name": "_Toc523387947",
                                "bookmarkType": 0
                            },
                            {
                                "name": "_Toc523388457",
                                "bookmarkType": 0
                            },
                            {
                                "text": ".NET Core"
                            },
                            {
                                "name": "_Toc523387947",
                                "bookmarkType": 1
                            },
                            {
                                "name": "_Toc523388457",
                                "bookmarkType": 1
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "The framework .NET Core 1.1 a is modular, cross-platform, cloud-optimized version of the .NET Framework, consisting of the CoreCLR and the implementation of the .NET Standard Library 1.6. One of the main features of this library is the ability to install only the features that are needed for the application you are building, reducing its footprint and the possibility of installing the library itself within the application. This makes it possible for applications built with different versions to co-exist on the same machine without the compatibility problems typical of the full .NET Framework."
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Heading 2"
                        },
                        "inlines": [
                            {
                                "name": "_Toc523387948",
                                "bookmarkType": 0
                            },
                            {
                                "name": "_Toc523388458",
                                "bookmarkType": 0
                            },
                            {
                                "text": "ASP.NET Core"
                            },
                            {
                                "name": "_Toc523387948",
                                "bookmarkType": 1
                            },
                            {
                                "name": "_Toc523388458",
                                "bookmarkType": 1
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "ASP.NET Core is a complete rewrite of ASP.NET, built with the goal of being cross-platform, completely open-source, and without the limitations of backward compatibility. Like .NET Core, ASP.NET Core is also built with a modular approach. This means the application you build can include only the needed features without taking on additional burdens. This is made possible by the new startup and execution environment, based on the Open Web Interface for .NET (OWIN) standard. In addition, ASP.NET Core comes with many interesting features that we are going to see throughout the book, like an integrated "
                            },
                            {
                                "text": "dependency injection system and a new application framework that unifies the programming models of ASP.NET MVC and Web API."
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Heading 1"
                        },
                        "inlines": [
                            {
                                "name": "_Toc523387949",
                                "bookmarkType": 0
                            },
                            {
                                "name": "_Toc523388459",
                                "bookmarkType": 0
                            },
                            {
                                "text": "Chapter 3 "
                            },
                            {
                                "text": "Getting Started with .NET Core"
                            },
                            {
                                "name": "_Toc523387949",
                                "bookmarkType": 1
                            },
                            {
                                "name": "_Toc523388459",
                                "bookmarkType": 1
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Now that it is clear what ASP.NET Core and .NET Core are, and why they were created, it's time to look at how to install them and how to build a simple application with them."
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Heading 2"
                        },
                        "inlines": [
                            {
                                "name": "_Toc523387950",
                                "bookmarkType": 0
                            },
                            {
                                "name": "_Toc523388460",
                                "bookmarkType": 0
                            },
                            {
                                "text": "Installing .NET Core on Windows"
                            },
                            {
                                "name": "_Toc523387950",
                                "bookmarkType": 1
                            },
                            {
                                "name": "_Toc523388460",
                                "bookmarkType": 1
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Installing on Windows is pretty easy. With Visual Studio 2017, chances are you already installed it. If not, go back to the Visual Studio Installer and make sure you have the .NET Core workload selected."
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Heading 2"
                        },
                        "inlines": [
                            {
                                "name": "_Toc523387951",
                                "bookmarkType": 0
                            },
                            {
                                "name": "_Toc523388461",
                                "bookmarkType": 0
                            },
                            {
                                "text": "Installing .NET Core on a Mac (or Linux)"
                            },
                            {
                                "name": "_Toc523387951",
                                "bookmarkType": 1
                            },
                            {
                                "name": "_Toc523388461",
                                "bookmarkType": 1
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "The beauty of .NET Core is that it can also be installed on a Mac (or Linux, for that matter) without relying on third-party frameworks, as was needed before with Mono."
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Each distribution of Linux has its own individual way of installing, but in the end, the process boils down to the same principles:"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "List Paragraph",
                            "listFormat": {
                                "listLevelNumber": 0,
                                "listId": 0
                            }
                        },
                        "inlines": [
                            {
                                "text": "Install prerequisites and configure the package manager of your distribution."
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "List Paragraph",
                            "listFormat": {
                                "listLevelNumber": 0,
                                "listId": 0
                            }
                        },
                        "inlines": [
                            {
                                "text": "Invoke the package manager to download and install .NET Core and its tools."
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "You can read instructions specific to your distribution on the official .NET Core website. As an example, we’ll show you how to install on a Mac."
                            }
                        ]
                    },
                    {
                        "characterFormat": {
                            "italic": true
                        },
                        "paragraphFormat": {
                            "textAlignment": "Center",
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Code Listing 3-1",
                                "characterFormat": {
                                    "italic": true
                                }
                            }
                        ]
                    },
                    {
                        "rows": [
                            {
                                "rowFormat": {
                                    "allowBreakAcrossPages": true,
                                    "isHeader": false,
                                    "height": 0.0,
                                    "heightType": "AtLeast",
                                    "borders": {
                                        "left": {
                                            "lineStyle": "None",
                                            "lineWidth": 0.0,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false
                                        },
                                        "right": {
                                            "lineStyle": "None",
                                            "lineWidth": 0.0,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false
                                        },
                                        "top": {
                                            "lineStyle": "None",
                                            "lineWidth": 0.0,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false
                                        },
                                        "bottom": {
                                            "lineStyle": "None",
                                            "lineWidth": 0.0,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false
                                        },
                                        "vertical": {
                                            "lineStyle": "None",
                                            "lineWidth": 0.0,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false
                                        },
                                        "horizontal": {
                                            "lineStyle": "None",
                                            "lineWidth": 0.0,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false
                                        },
                                        "diagonalDown": {
                                            "lineStyle": "None",
                                            "lineWidth": 0.0,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false
                                        },
                                        "diagonalUp": {
                                            "lineStyle": "None",
                                            "lineWidth": 0.0,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false
                                        }
                                    }
                                },
                                "cells": [
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": ">brew update"
                                                    }
                                                ]
                                            },
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": ">brew install openssl"
                                                    }
                                                ]
                                            },
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": ">ln -s /usr/local/opt/openssl/lib/libcrypto.1.0.0.dylib /usr/local/lib/"
                                                    }
                                                ]
                                            },
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": ">ln -s /usr/local/opt/openssl/lib/libssl.1.0.0.dylib /usr/local/lib/"
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 467.5,
                                            "preferredWidthType": "Point",
                                            "verticalAlignment": "Top",
                                            "isSamePaddingAsTable": true,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "right": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "top": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "bottom": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "vertical": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "horizontal": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "diagonalDown": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                },
                                                "diagonalUp": {
                                                    "lineStyle": "None",
                                                    "lineWidth": 0.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false
                                                }
                                            }
                                        }
                                    }
                                ]
                            }
                        ],
                        "title": null,
                        "description": null,
                        "tableFormat": {
                            "allowAutoFit": true,
                            "leftIndent": 0.0,
                            "tableAlignment": "Left",
                            "preferredWidthType": "Auto",
                            "borders": {
                                "left": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false
                                },
                                "right": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false
                                },
                                "top": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false
                                },
                                "bottom": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false
                                },
                                "vertical": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false
                                },
                                "horizontal": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false
                                },
                                "diagonalDown": {
                                    "lineStyle": "None",
                                    "lineWidth": 0.0,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false
                                },
                                "diagonalUp": {
                                    "lineStyle": "None",
                                    "lineWidth": 0.0,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false
                                }
                            }
                        }
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": []
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Once all these prerequisites have been installed, you can download and install the official SDK for macOS by downloading it from the "
                            },
                            {
                                "hasFieldEnd": true,
                                "fieldType": 0
                            },
                            {
                                "text": "HYPERLINK \"https://www.microsoft.com/net/core\" "
                            },
                            {
                                "fieldType": 2
                            },
                            {
                                "text": "official .NET Core website",
                                "characterFormat": {
                                    "styleName": "Hyperlink"
                                }
                            },
                            {
                                "fieldType": 1
                            },
                            {
                                "text": "."
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "On Linux and Mac, you do not have Visual Studio to develop apps, but you can use the .NET Core SDK or Visual Studio Code, which is a lightweight, extensible, cross-platform text editor built by Microsoft and the community. The last chapter of this book covers in detail each of the tools with which you can build .NET Core apps."
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Heading 1"
                        },
                        "inlines": [
                            {
                                "name": "_Toc523387952",
                                "bookmarkType": 0
                            },
                            {
                                "name": "_Toc523388462",
                                "bookmarkType": 0
                            },
                            {
                                "text": "A Look at the Future"
                            },
                            {
                                "name": "_Toc523387952",
                                "bookmarkType": 1
                            },
                            {
                                "name": "_Toc523388462",
                                "bookmarkType": 1
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "The release of .NET Core has been a very difficult one, with many delays and changes in direction. While the framework is stable, with .NET Core 1.1 released in November 2016, the tooling is still in development."
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "When we wrote this book, we relied on previews that were made available at the Connect(); event of November 2016, so some of the screenshots or procedures in the examples might be different from what is currently available."
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "What can we expect for the future of .NET Core?"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "First, unlike previous frameworks, we have to expect a continuous release of enhanced tools, both for the CLI and for the tooling inside Visual Studio. Second, on the framework side, there will be the second big release of .NET Core 2.0, implementing .NET Standard 2.0."
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "But rest assured that Microsoft sees .NET Core as the future of .NET for the next 10 years, so this is the right time to jump in and start learning this new technology."
                            }
                        ]
                    }
                ],
                "headersFooters": {},
                "sectionFormat": {
                    "headerDistance": 36.0,
                    "footerDistance": 36.0,
                    "pageWidth": 612.0,
                    "pageHeight": 792.0,
                    "leftMargin": 72.0,
                    "rightMargin": 72.0,
                    "topMargin": 72.0,
                    "bottomMargin": 72.0,
                    "differentFirstPage": false,
                    "differentOddAndEvenPages": false
                }
            }
        ],
        "characterFormat": {
            "fontSize": 11.0,
            "fontFamily": "Calibri"
        },
        "paragraphFormat": {
            "afterSpacing": 8.0,
            "lineSpacing": 1.0791666507720947,
            "lineSpacingType": "Multiple"
        },
        "lists": [
            {
                "listId": 0,
                "abstractListId": 0
            }
        ],
        "abstractLists": [
            {
                "abstractListId": 0,
                "levels": [
                    {
                        "listLevelPattern": "Bullet",
                        "followCharacter": "Tab",
                        "numberFormat": "",
                        "characterFormat": {
                            "fontFamily": "Symbol"
                        },
                        "paragraphFormat": {
                            "leftIndent": 36.0,
                            "firstLineIndent": -18.0
                        }
                    },
                    {
                        "listLevelPattern": "Bullet",
                        "followCharacter": "Tab",
                        "numberFormat": "o",
                        "characterFormat": {
                            "fontFamily": "Courier New"
                        },
                        "paragraphFormat": {
                            "leftIndent": 72.0,
                            "firstLineIndent": -18.0
                        }
                    },
                    {
                        "listLevelPattern": "Bullet",
                        "followCharacter": "Tab",
                        "numberFormat": "",
                        "characterFormat": {
                            "fontFamily": "Wingdings"
                        },
                        "paragraphFormat": {
                            "leftIndent": 108.0,
                            "firstLineIndent": -18.0
                        }
                    },
                    {
                        "listLevelPattern": "Bullet",
                        "followCharacter": "Tab",
                        "numberFormat": "",
                        "characterFormat": {
                            "fontFamily": "Symbol"
                        },
                        "paragraphFormat": {
                            "leftIndent": 144.0,
                            "firstLineIndent": -18.0
                        }
                    },
                    {
                        "listLevelPattern": "Bullet",
                        "followCharacter": "Tab",
                        "numberFormat": "o",
                        "characterFormat": {
                            "fontFamily": "Courier New"
                        },
                        "paragraphFormat": {
                            "leftIndent": 180.0,
                            "firstLineIndent": -18.0
                        }
                    },
                    {
                        "listLevelPattern": "Bullet",
                        "followCharacter": "Tab",
                        "numberFormat": "",
                        "characterFormat": {
                            "fontFamily": "Wingdings"
                        },
                        "paragraphFormat": {
                            "leftIndent": 216.0,
                            "firstLineIndent": -18.0
                        }
                    },
                    {
                        "listLevelPattern": "Bullet",
                        "followCharacter": "Tab",
                        "numberFormat": "",
                        "characterFormat": {
                            "fontFamily": "Symbol"
                        },
                        "paragraphFormat": {
                            "leftIndent": 252.0,
                            "firstLineIndent": -18.0
                        }
                    },
                    {
                        "listLevelPattern": "Bullet",
                        "followCharacter": "Tab",
                        "numberFormat": "o",
                        "characterFormat": {
                            "fontFamily": "Courier New"
                        },
                        "paragraphFormat": {
                            "leftIndent": 288.0,
                            "firstLineIndent": -18.0
                        }
                    },
                    {
                        "listLevelPattern": "Bullet",
                        "followCharacter": "Tab",
                        "numberFormat": "",
                        "characterFormat": {
                            "fontFamily": "Wingdings"
                        },
                        "paragraphFormat": {
                            "leftIndent": 324.0,
                            "firstLineIndent": -18.0
                        }
                    }
                ]
            }
        ],
        "background": {
            "color": "#FFFFFFFF"
        },
        "styles": [
            {
                "type": "Paragraph",
                "name": "Normal",
                "next": "Normal"
            },
            {
                "type": "Paragraph",
                "name": "Heading 1",
                "basedOn": "Normal",
                "next": "Normal",
                "link": "Heading 1 Char",
                "characterFormat": {
                    "fontSize": 16.0,
                    "fontFamily": "Calibri Light",
                    "fontColor": "#2F5496FF"
                },
                "paragraphFormat": {
                    "beforeSpacing": 12.0,
                    "afterSpacing": 0.0,
                    "outlineLevel": "Level1"
                }
            },
            {
                "type": "Paragraph",
                "name": "Heading 2",
                "basedOn": "Normal",
                "next": "Normal",
                "link": "Heading 2 Char",
                "characterFormat": {
                    "fontSize": 13.0,
                    "fontFamily": "Calibri Light",
                    "fontColor": "#2F5496FF"
                },
                "paragraphFormat": {
                    "beforeSpacing": 2.0,
                    "afterSpacing": 0.0,
                    "outlineLevel": "Level2"
                }
            },
            {
                "type": "Character",
                "name": "Default Paragraph Font"
            },
            {
                "type": "Paragraph",
                "name": "Notes",
                "basedOn": "Normal",
                "next": "Normal",
                "characterFormat": {
                    "bold": true
                },
                "paragraphFormat": {
                    "afterSpacing": 6.0,
                    "lineSpacing": 1.0,
                    "lineSpacingType": "Multiple"
                }
            },
            {
                "type": "Character",
                "name": "Heading 1 Char",
                "basedOn": "Default Paragraph Font",
                "characterFormat": {
                    "fontSize": 16.0,
                    "fontFamily": "Calibri Light",
                    "fontColor": "#2F5496FF"
                }
            },
            {
                "type": "Character",
                "name": "Heading 2 Char",
                "basedOn": "Default Paragraph Font",
                "characterFormat": {
                    "fontSize": 13.0,
                    "fontFamily": "Calibri Light",
                    "fontColor": "#2F5496FF"
                }
            },
            {
                "type": "Paragraph",
                "name": "List Paragraph",
                "basedOn": "Normal",
                "next": "List Paragraph",
                "paragraphFormat": {
                    "leftIndent": 36.0
                }
            },
            {
                "type": "Character",
                "name": "Hyperlink",
                "basedOn": "Default Paragraph Font",
                "characterFormat": {
                    "underline": "Single",
                    "fontColor": "#0563C1FF"
                }
            },
            {
                "type": "Character",
                "name": "Unresolved Mention",
                "basedOn": "Default Paragraph Font",
                "characterFormat": {
                    "fontColor": "#808080FF"
                }
            },
            {
                "type": "Paragraph",
                "name": "Title",
                "basedOn": "Normal",
                "next": "Normal",
                "link": "Title Char",
                "characterFormat": {
                    "fontSize": 28.0,
                    "fontFamily": "Calibri Light"
                },
                "paragraphFormat": {
                    "afterSpacing": 0.0,
                    "lineSpacing": 1.0,
                    "lineSpacingType": "Multiple"
                }
            },
            {
                "type": "Character",
                "name": "Title Char",
                "basedOn": "Default Paragraph Font",
                "characterFormat": {
                    "fontSize": 28.0,
                    "fontFamily": "Calibri Light"
                }
            },
            {
                "type": "Paragraph",
                "name": "TOC Heading",
                "basedOn": "Heading 1",
                "next": "Normal",
                "paragraphFormat": {
                    "outlineLevel": "BodyText"
                }
            },
            {
                "type": "Paragraph",
                "name": "TOC 1",
                "basedOn": "Normal",
                "next": "Normal",
                "paragraphFormat": {
                    "afterSpacing": 5.0
                }
            },
            {
                "type": "Paragraph",
                "name": "TOC 2",
                "basedOn": "Normal",
                "next": "Normal",
                "paragraphFormat": {
                    "leftIndent": 11.0,
                    "afterSpacing": 5.0
                }
            }
        ]
    };
    var waitingPopUp = document.getElementById('waiting-popup');
    container.documentEditor.open(JSON.stringify(defaultDocument));    
    container.documentEditor.documentName = 'Table of Contents';    
    // TitleBar sample starts
    titleBarDiv = document.getElementById('documenteditor_titlebar');
    initializeTitleBar(true); 
    updateDocumentTitle();
    wireEventsInTitleBar();
    container.documentChange = function () {
        updateDocumentTitle();
    };
     var documentTitle;
     var documentTitleContentEditor;
     var titleBarDiv;
     var print;
     var openBtn;
     var download;
     var isPropertiesPaneEnabled;
     function initializeTitleBar(isShareNeeded) {
         documentTitle = ej.base.createElement('label', { id: 'documenteditor_title_name', styles: 'text-transform:capitalize;font-weight:400;text-overflow:ellipsis;white-space:pre;overflow:hidden;user-select:none;cursor:text' });
         documentTitleContentEditor = ej.base.createElement('div', { id: 'documenteditor_title_contentEditor', className: 'single-line' });
         documentTitleContentEditor.appendChild(documentTitle);
         titleBarDiv.appendChild(documentTitleContentEditor);
         documentTitleContentEditor.setAttribute('title', 'Document Name. Click or tap to rename this document.');
         var btnStyles = 'float:right;background: transparent;box-shadow:none; font-family: inherit;border-color: transparent;' +
             'border-radius: 2px;color:inherit;font-size:12px;text-transform:capitalize;margin-top:4px;height:28px;font-weight:400';
         print = addButton('e-de-icon-Print e-de-padding-right', 'Print', btnStyles, 'de-print', 'Print this document (Ctrl+P).', false);
         openBtn = addButton('e-de-icon-Open e-de-padding-right', 'open', btnStyles, 'de-open', 'Open', false);
         var items = [
             { text: 'Microsoft Word (.docx)', id: 'word' },
             { text: 'Syncfusion Document Text (.sfdt)', id: 'sfdt' },
         ];
         download = addButton('e-de-icon-Download e-de-padding-right', 'Download', btnStyles, 'documenteditor-share', 'Download this document.', true, items);
         if (!isShareNeeded) {
             download.element.style.display = 'none';
         }
         else {
             openBtn.element.style.display = 'none';
         }
     }
     function wireEventsInTitleBar() {
         print.element.addEventListener('click', onPrint);
         openBtn.element.addEventListener('click', function (e) {
             if (e.target.id === 'de-open') {
                 var fileUpload = document.getElementById('uploadfileButton');
                 fileUpload.value = '';
                 fileUpload.click();
             }
         });
         documentTitleContentEditor.addEventListener('keydown', function (e) {
             if (e.keyCode === 13) {
                 e.preventDefault();
                 documentTitleContentEditor.contentEditable = 'false';
                 if (documentTitleContentEditor.textContent === '') {
                     documentTitleContentEditor.textContent = 'Document1';
                 }
             }
         });
         documentTitleContentEditor.addEventListener('blur', function () {
             if (documentTitleContentEditor.textContent === '') {
                 documentTitleContentEditor.textContent = 'Document1';
             }
             documentTitleContentEditor.contentEditable = 'false';
             container.documentEditor.documentName = documentTitle.textContent;
         });
         documentTitleContentEditor.addEventListener('click', function () {
             updateDocumentEditorTitle();
         });
     }
     function updateDocumentEditorTitle() {
         documentTitleContentEditor.contentEditable = 'true';
         documentTitleContentEditor.focus();
         window.getSelection().selectAllChildren(documentTitleContentEditor);
     }
     function updateDocumentTitle() {
         if (container.documentEditor.documentName === '') {
             container.documentEditor.documentName = 'Untitled';
         }
         documentTitle.textContent = container.documentEditor.documentName;
     }
     function onPrint() {
         container.documentEditor.print();
     }
     function onExportClick(args) {
         var value = args.item.id;
         switch (value) {
             case 'word':
                 save('Docx');
                 break;
             case 'sfdt':
                 save('Sfdt');
                 break;
         }
     }
     function save(format) {
         container.documentEditor.save(container.documentEditor.documentName === '' ? 'sample' : container.documentEditor.documentName, format);
     }
     function setTooltipForPopup() {
         document.getElementById('documenteditor-share-popup').querySelectorAll('li')[0].setAttribute('title', 'Download a copy of this document to your computer as a DOCX file.');
         document.getElementById('documenteditor-share-popup').querySelectorAll('li')[1].setAttribute('title', 'Download a copy of this document to your computer as an SFDT file.');
     }
     function addButton(iconClass, btnText, styles, id, tooltipText, isDropDown, items) {
         var button = ej.base.createElement('button', { id: id, styles: styles });
         titleBarDiv.appendChild(button);
         button.setAttribute('title', tooltipText);
         if (isDropDown) {
             var dropButton = new ej.splitbuttons.DropDownButton({ select: onExportClick, items: items, iconCss: iconClass, cssClass: 'e-caret-hide', content: btnText, open: function () { setTooltipForPopup(); } }, button);
             return dropButton;
         }
         else {
             var ejButton = new ej.buttons.Button({ iconCss: iconClass, content: btnText }, button);
             return ejButton;
         }
     } 
