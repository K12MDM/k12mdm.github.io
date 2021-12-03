this.default = function () {

    //Documenteditor control rendering starts
    var hostUrl = 'http://localhost:62728/';
    var container = new ej.documenteditor.DocumentEditorContainer({
        enableToolbar: true, showPropertiesPane: false,
        height: '590px',
        userColor: '#b70f34', commentDelete: commentDelete
    });
    ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar);
    container.serviceUrl = hostUrl + 'api/documenteditor/';
    container.appendTo('#container');
    container.height = '590px';
    container.documentEditor.currentUser = 'Nancy Davolio';

    function commentDelete(args) {
        if (args.author !== container.documentEditor.currentUser) {
            args.cancel = true;
            ej.popups.DialogUtility.alert({
                title: 'Information',
                content: 'Delete restriction enabled. Only the author of the comment can delete it.',
                showCloseIcon: true,
                closeOnEscape: true,
            });
        }
    }

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
                                "text": "The Giant Panda"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "The "
                            },
                            {
                                "commentId": "Comment_e5affde3-0e01-48df-938c-071a057c6f8e",
                                "commentCharacterType": 0
                            },
                            {
                                "text": "giant panda"
                            },
                            {
                                "commentId": "Comment_e5affde3-0e01-48df-938c-071a057c6f8e",
                                "commentCharacterType": 1
                            },
                            {
                                "text": ", which only lives in China outside of captivity, has captured the hearts of people of all ages across the globe. From their furry black and white bodies to their shy and docile nature, they are considered one of the world's most loved animals."
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "imageString": "data:image/jpeg;base64,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",
                                "length": 1,
                                "width": 467.45001220703125,
                                "height": 262.75,
                                "isInlineImage": true,
                                "isMetaFile": false
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "afterSpacing": 0.0,
                            "lineSpacing": 1.0,
                            "lineSpacingType": "Multiple",
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "commentId": "Comment_b99ebea3-29b7-4d2c-8410-ce8fecb2c30d",
                                "commentCharacterType": 0
                            },
                            {
                                "commentId": "Comment_dd401ff7-c247-45e8-9d4e-fe9f3fc45603",
                                "commentCharacterType": 0
                            },
                            {
                                "commentId": "Comment_c1623cbf-5221-4da7-9158-539d7748f786",
                                "commentCharacterType": 0
                            },
                            {
                                "text": "Quick Fact",
                                "characterFormat": {
                                    "bold": true
                                }
                            },
                            {
                                "commentId": "Comment_b99ebea3-29b7-4d2c-8410-ce8fecb2c30d",
                                "commentCharacterType": 1
                            },
                            {
                                "commentId": "Comment_dd401ff7-c247-45e8-9d4e-fe9f3fc45603",
                                "commentCharacterType": 1
                            },
                            {
                                "commentId": "Comment_c1623cbf-5221-4da7-9158-539d7748f786",
                                "commentCharacterType": 1
                            },
                            {
                                "text": " The estimated number of giant pandas in the wild varies between 1,500 and 3,000."
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Heading 1"
                        },
                        "inlines": [
                            {
                                "text": "Intriguing Giant Panda Mysteries"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "afterSpacing": 6.0,
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "While most adore their fluffy fur and round heads, which help give them their cuddly bear quality, others are fascinated by the many mysteries of the giant panda. Did you know that the giant panda "
                            },
                            {
                                "commentId": "Comment_875b5153-42a7-4f48-930b-f4d4ab5df625",
                                "commentCharacterType": 0
                            },
                            {
                                "commentId": "Comment_6f94599b-64a1-4652-a3c4-a57d3e13ae88",
                                "commentCharacterType": 0
                            },
                            {
                                "text": "may "
                            },
                            {
                                "text": "actually be"
                            },
                            {
                                "text": " a"
                            },
                            {
                                "commentId": "Comment_875b5153-42a7-4f48-930b-f4d4ab5df625",
                                "commentCharacterType": 1
                            },
                            {
                                "commentId": "Comment_6f94599b-64a1-4652-a3c4-a57d3e13ae88",
                                "commentCharacterType": 1
                            },
                            {
                                "text": " raccoon, they have an opposable pseudo thumb, and that they’re technically a carnivore even though their diet is primarily vegetarian? These things and more have baffled scientists and naturalists for hundreds of years. "
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Heading 2"
                        },
                        "inlines": [
                            {
                                "text": "Opposable Pseudo Thumb"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "afterSpacing": 6.0,
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "A characteristic of the giant panda that has mystified scientists is their movable, elongated wrist bone that acts like an opposable thumb. This human-like quality that helps give them even more of a cuddly-bear appearance enables the giant panda to pick up objects and even eat sitting up. "
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "afterSpacing": 6.0,
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Quick Fact",
                                "characterFormat": {
                                    "bold": true
                                }
                            },
                            {
                                "text": " Giant pandas have five clawed toes and one pseudo thumb."
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "afterSpacing": 6.0,
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Their pseudo thumb, along with pads of skin, help the giant panda strip the more nutritious small bamboo shoots and leaves while holding the stalk in their mouth."
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Heading 2"
                        },
                        "inlines": [
                            {
                                "text": "Small Bear or Large Raccoon?"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Giant pandas are generally referred to as bears and are typically called panda bears rather than giant pandas. Though we may think they look like bears, there has been a great deal of discussion for decades about where giant pandas fit in the animal kingdom. Much of the debate has been whether they are more closely related to the red panda, once thought to be a member of the raccoon family, than the bear family."
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "While a giant panda has a body that resembles a small bear and climbs trees like a bear, it also has several characteristics in common with the red panda. For example, both giant pandas and red pandas eat bamboo and have the same pseudo thumb. The table below lists the main characteristics the giant panda shares with bears and red pandas."
                            }
                        ]
                    },
                    {
                        "rows": [
                            {
                                "rowFormat": {
                                    "allowBreakAcrossPages": true,
                                    "isHeader": false,
                                    "height": 18.0,
                                    "heightType": "AtLeast",
                                    "borders": {
                                        "left": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.75,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#A6A6A6FF"
                                        },
                                        "right": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.75,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#A6A6A6FF"
                                        },
                                        "top": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.75,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#A6A6A6FF"
                                        },
                                        "bottom": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.75,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#A6A6A6FF"
                                        },
                                        "vertical": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.75,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#A6A6A6FF"
                                        },
                                        "horizontal": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.75,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#A6A6A6FF"
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
                                    },
                                    "leftMargin": 5.75,
                                    "rightMargin": 5.75
                                },
                                "cells": [
                                    {
                                        "blocks": [
                                            {
                                                "characterFormat": {
                                                    "bold": true,
                                                    "fontColor": "#FFFFFFFF"
                                                },
                                                "paragraphFormat": {
                                                    "textAlignment": "Center",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Bear",
                                                        "characterFormat": {
                                                            "bold": true,
                                                            "fontColor": "#FFFFFFFF"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 50.0,
                                            "preferredWidthType": "Percent",
                                            "verticalAlignment": "Center",
                                            "isSamePaddingAsTable": true,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#00CC66FF"
                                                },
                                                "right": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#00CC66FF"
                                                },
                                                "top": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#00CC66FF"
                                                },
                                                "bottom": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#00CC66FF"
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
                                            },
                                            "shading": {
                                                "texture": "TextureNone",
                                                "backgroundColor": "#00CC66FF"
                                            }
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "characterFormat": {
                                                    "bold": true,
                                                    "fontColor": "#FFFFFFFF"
                                                },
                                                "paragraphFormat": {
                                                    "textAlignment": "Center",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Red Panda",
                                                        "characterFormat": {
                                                            "bold": true,
                                                            "fontColor": "#FFFFFFFF"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 50.0,
                                            "preferredWidthType": "Percent",
                                            "verticalAlignment": "Center",
                                            "isSamePaddingAsTable": true,
                                            "borders": {
                                                "left": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#00CC66FF"
                                                },
                                                "right": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#00CC66FF"
                                                },
                                                "top": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#00CC66FF"
                                                },
                                                "bottom": {
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#00CC66FF"
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
                                            },
                                            "shading": {
                                                "texture": "TextureNone",
                                                "backgroundColor": "#00CC66FF"
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                "rowFormat": {
                                    "allowBreakAcrossPages": true,
                                    "isHeader": false,
                                    "height": 18.0,
                                    "heightType": "AtLeast",
                                    "borders": {
                                        "left": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.75,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#A6A6A6FF"
                                        },
                                        "right": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.75,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#A6A6A6FF"
                                        },
                                        "top": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.75,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#A6A6A6FF"
                                        },
                                        "bottom": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.75,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#A6A6A6FF"
                                        },
                                        "vertical": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.75,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#A6A6A6FF"
                                        },
                                        "horizontal": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.75,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#A6A6A6FF"
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
                                    },
                                    "leftMargin": 5.75,
                                    "rightMargin": 5.75
                                },
                                "cells": [
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "textAlignment": "Center",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Shape"
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 50.0,
                                            "preferredWidthType": "Percent",
                                            "verticalAlignment": "Center",
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
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#00CC66FF"
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
                                            },
                                            "shading": {
                                                "texture": "TextureNone",
                                                "backgroundColor": "#FFFFFFFF"
                                            }
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "textAlignment": "Center",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Diet"
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 50.0,
                                            "preferredWidthType": "Percent",
                                            "verticalAlignment": "Center",
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
                                                    "lineStyle": "Single",
                                                    "lineWidth": 1.0,
                                                    "shadow": false,
                                                    "space": 0.0,
                                                    "hasNoneStyle": false,
                                                    "color": "#00CC66FF"
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
                                            },
                                            "shading": {
                                                "texture": "TextureNone",
                                                "backgroundColor": "#FFFFFFFF"
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                "rowFormat": {
                                    "allowBreakAcrossPages": true,
                                    "isHeader": false,
                                    "height": 18.0,
                                    "heightType": "AtLeast",
                                    "borders": {
                                        "left": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.75,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#A6A6A6FF"
                                        },
                                        "right": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.75,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#A6A6A6FF"
                                        },
                                        "top": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.75,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#A6A6A6FF"
                                        },
                                        "bottom": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.75,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#A6A6A6FF"
                                        },
                                        "vertical": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.75,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#A6A6A6FF"
                                        },
                                        "horizontal": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.75,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#A6A6A6FF"
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
                                    },
                                    "leftMargin": 5.75,
                                    "rightMargin": 5.75
                                },
                                "cells": [
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "textAlignment": "Center",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Size"
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 50.0,
                                            "preferredWidthType": "Percent",
                                            "verticalAlignment": "Center",
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
                                            },
                                            "shading": {
                                                "texture": "TextureNone",
                                                "backgroundColor": "#FFFFFFFF"
                                            }
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "textAlignment": "Center",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Paws"
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 50.0,
                                            "preferredWidthType": "Percent",
                                            "verticalAlignment": "Center",
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
                                            },
                                            "shading": {
                                                "texture": "TextureNone",
                                                "backgroundColor": "#FFFFFFFF"
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                "rowFormat": {
                                    "allowBreakAcrossPages": true,
                                    "isHeader": false,
                                    "height": 18.0,
                                    "heightType": "AtLeast",
                                    "borders": {
                                        "left": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.75,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#A6A6A6FF"
                                        },
                                        "right": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.75,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#A6A6A6FF"
                                        },
                                        "top": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.75,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#A6A6A6FF"
                                        },
                                        "bottom": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.75,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#A6A6A6FF"
                                        },
                                        "vertical": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.75,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#A6A6A6FF"
                                        },
                                        "horizontal": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.75,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#A6A6A6FF"
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
                                    },
                                    "leftMargin": 5.75,
                                    "rightMargin": 5.75
                                },
                                "cells": [
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "textAlignment": "Center",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Shaggy fur"
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 50.0,
                                            "preferredWidthType": "Percent",
                                            "verticalAlignment": "Center",
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
                                            },
                                            "shading": {
                                                "texture": "TextureNone",
                                                "backgroundColor": "#FFFFFFFF"
                                            }
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "textAlignment": "Center",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Eyes"
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 50.0,
                                            "preferredWidthType": "Percent",
                                            "verticalAlignment": "Center",
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
                                            },
                                            "shading": {
                                                "texture": "TextureNone",
                                                "backgroundColor": "#FFFFFFFF"
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                "rowFormat": {
                                    "allowBreakAcrossPages": true,
                                    "isHeader": false,
                                    "height": 18.0,
                                    "heightType": "AtLeast",
                                    "borders": {
                                        "left": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.75,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#A6A6A6FF"
                                        },
                                        "right": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.75,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#A6A6A6FF"
                                        },
                                        "top": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.75,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#A6A6A6FF"
                                        },
                                        "bottom": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.75,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#A6A6A6FF"
                                        },
                                        "vertical": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.75,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#A6A6A6FF"
                                        },
                                        "horizontal": {
                                            "lineStyle": "Single",
                                            "lineWidth": 0.75,
                                            "shadow": false,
                                            "space": 0.0,
                                            "hasNoneStyle": false,
                                            "color": "#A6A6A6FF"
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
                                    },
                                    "leftMargin": 5.75,
                                    "rightMargin": 5.75
                                },
                                "cells": [
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "textAlignment": "Center",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Gait"
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 50.0,
                                            "preferredWidthType": "Percent",
                                            "verticalAlignment": "Center",
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
                                            },
                                            "shading": {
                                                "texture": "TextureNone",
                                                "backgroundColor": "#FFFFFFFF"
                                            }
                                        }
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "textAlignment": "Center",
                                                    "styleName": "Normal"
                                                },
                                                "inlines": [
                                                    {
                                                        "text": "Nose and teeth"
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "preferredWidth": 50.0,
                                            "preferredWidthType": "Percent",
                                            "verticalAlignment": "Center",
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
                                            },
                                            "shading": {
                                                "texture": "TextureNone",
                                                "backgroundColor": "#FFFFFFFF"
                                            }
                                        }
                                    }
                                ]
                            }
                        ],
                        "title": null,
                        "description": null,
                        "tableFormat": {
                            "allowAutoFit": false,
                            "leftMargin": 5.75,
                            "rightMargin": 5.75,
                            "leftIndent": 0.0,
                            "tableAlignment": "Left",
                            "preferredWidth": 100.0,
                            "preferredWidthType": "Percent",
                            "borders": {
                                "left": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.75,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false,
                                    "color": "#A6A6A6FF"
                                },
                                "right": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.75,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false,
                                    "color": "#A6A6A6FF"
                                },
                                "top": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.75,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false,
                                    "color": "#A6A6A6FF"
                                },
                                "bottom": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.75,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false,
                                    "color": "#A6A6A6FF"
                                },
                                "vertical": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.75,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false,
                                    "color": "#A6A6A6FF"
                                },
                                "horizontal": {
                                    "lineStyle": "Single",
                                    "lineWidth": 0.75,
                                    "shadow": false,
                                    "space": 0.0,
                                    "hasNoneStyle": false,
                                    "color": "#A6A6A6FF"
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
                            },
                            "shading": {
                                "texture": "TextureNone",
                                "backgroundColor": "#FFFFFFFF"
                            },
                            "bidi": false
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
                            "styleName": "Heading 3"
                        },
                        "inlines": [
                            {
                                "text": "Cat-like features"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "While the body of a giant panda looks like that of a bear and the dark circles around its eyes resemble those of a red panda or raccoon, its pupils have vertical slits like the eyes of a cat. Because of their unusual eyes, a popular Chinese name for panda is ‘big bear cat’ "
                            },
                            {
                                "text": "or大‍熊‍貓"
                            },
                            {
                                "text": " /"
                            },
                            {
                                "text": "dà"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "xióng"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "māo"
                            },
                            {
                                "text": ", pronounced as dah-"
                            },
                            {
                                "text": "sshyong"
                            },
                            {
                                "text": "-"
                            },
                            {
                                "text": "maow"
                            },
                            {
                                "text": "."
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Heading 3"
                        },
                        "inlines": [
                            {
                                "text": "DNA results"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "DNA analysis has put one mystery to rest. It has revealed that while the red panda is a distant relation, the giant panda's closest relative is the spectacled bear from South America."
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Heading 2"
                        },
                        "inlines": [
                            {
                                "text": "Mostly Vegetarian Diet"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Giant pandas love bamboo! In fact, their diet is 99% bamboo. Along with bamboo, they eat other plants, small rodents, and occasionally fish. The mystery behind their diet is they have the digestive system of a carnivore. "
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Their ability to digest bamboo is attributed to tiny microbes that live within their digestive system. As they can only digest about 20% of what they eat, the average giant panda consumes around 14 kilograms (30 pounds) of bamboo a day. In comparison, humans eat about 2 kilograms (5 pounds) of food a day. This enormous diet means the giant panda spends more than 12 hours a day eating to stay nourished. "
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "beforeSpacing": 7.0,
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Quick Fact ",
                                "characterFormat": {
                                    "bold": true
                                }
                            },
                            {
                                "text": "As the seasons change, the giant panda prefers different species and parts of bamboo."
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Heading 2"
                        },
                        "inlines": [
                            {
                                "text": "Tiny Cubs"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "An infant giant panda cub is about the size of a croissant, weighs less than a teacup and is about 900 times smaller than its mother. An average adult mother weighs around 91 kilograms (200 pounds) while newborn weighs only 83 to 190 grams (3 to 4 ounces)."
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Heading 1"
                        },
                        "inlines": [
                            {
                                "text": "Other Fun Giant Panda Facts"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "leftIndent": 28.799999237060547,
                            "styleName": "List Paragraph",
                            "listFormat": {
                                "listLevelNumber": 0,
                                "listId": 0
                            }
                        },
                        "inlines": [
                            {
                                "text": "Researchers have recently discovered that the gene responsible for tasting savory or umami flavors, such as meat, is inactive in giant pandas."
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "leftIndent": 28.799999237060547,
                            "styleName": "List Paragraph",
                            "listFormat": {
                                "listLevelNumber": 0,
                                "listId": 0
                            }
                        },
                        "inlines": [
                            {
                                "text": "For many centuries, giant pandas were thought to be a mythical creature, like a dragon or unicorn."
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "leftIndent": 28.799999237060547,
                            "styleName": "List Paragraph",
                            "listFormat": {
                                "listLevelNumber": 0,
                                "listId": 0
                            }
                        },
                        "inlines": [
                            {
                                "text": "Unlike other bears in the region, giant pandas don’t hibernate. "
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "leftIndent": 28.799999237060547,
                            "styleName": "List Paragraph",
                            "listFormat": {
                                "listLevelNumber": 0,
                                "listId": 0
                            }
                        },
                        "inlines": [
                            {
                                "text": "Giant pandas can stand erect on their hind legs but rarely walk."
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "leftIndent": 28.799999237060547,
                            "styleName": "List Paragraph",
                            "listFormat": {
                                "listLevelNumber": 0,
                                "listId": 0
                            }
                        },
                        "inlines": [
                            {
                                "text": "The "
                            },
                            {
                                "text": "Qinling"
                            },
                            {
                                "text": " panda, another giant panda species with a dark brown and light brown coat, lives only in the mountains of Shaanxi. "
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "leftIndent": 28.799999237060547,
                            "styleName": "List Paragraph",
                            "listFormat": {
                                "listLevelNumber": 0,
                                "listId": 0
                            }
                        },
                        "inlines": [
                            {
                                "text": "Giant pandas have very sensitive hearing and smell, but they have poor eyesight."
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "leftIndent": 28.799999237060547,
                            "styleName": "List Paragraph",
                            "listFormat": {
                                "listLevelNumber": 0,
                                "listId": 0
                            }
                        },
                        "inlines": [
                            {
                                "text": "A newborn giant panda is blind and looks like a tiny, pink, hairless mouse."
                            }
                        ]
                    }
                ],
                "headersFooters": {
                    "header": {
                        "blocks": [
                            {
                                "paragraphFormat": {
                                    "styleName": "Header"
                                },
                                "inlines": []
                            }
                        ]
                    },
                    "footer": {
                        "blocks": [
                            {
                                "paragraphFormat": {
                                    "styleName": "Footer"
                                },
                                "inlines": []
                            }
                        ]
                    },
                    "evenHeader": {
                        "blocks": [
                            {
                                "paragraphFormat": {
                                    "styleName": "Header"
                                },
                                "inlines": []
                            }
                        ]
                    },
                    "evenFooter": {
                        "blocks": [
                            {
                                "paragraphFormat": {
                                    "styleName": "Footer"
                                },
                                "inlines": []
                            }
                        ]
                    },
                    "firstPageHeader": {
                        "blocks": [
                            {
                                "paragraphFormat": {
                                    "styleName": "Header"
                                },
                                "inlines": []
                            }
                        ]
                    },
                    "firstPageFooter": {
                        "blocks": [
                            {
                                "paragraphFormat": {
                                    "styleName": "Footer"
                                },
                                "inlines": []
                            }
                        ]
                    }
                },
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
                    "differentOddAndEvenPages": false,
                    "bidi": false,
                    "restartPageNumbering": false,
                    "pageStartingNumber": 0
                }
            }
        ],
        "characterFormat": {
            "fontSize": 11.0,
            "fontFamily": "Calibri",
            "fontColor": "#000000FF",
            "fontSizeBidi": 11.0,
            "fontFamilyBidi": "Calibri"
        },
        "paragraphFormat": {
            "afterSpacing": 10.0,
            "lineSpacing": 1.149999976158142,
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
                        "numberFormat": "",
                        "characterFormat": {
                            "fontFamily": "Wingdings"
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
                "next": "Normal",
                "characterFormat": {
                    "fontSize": 10.0,
                    "fontColor": "#595959FF"
                }
            },
            {
                "type": "Paragraph",
                "name": "Heading 1",
                "basedOn": "Normal",
                "next": "Normal",
                "link": "Heading 1 Char",
                "characterFormat": {
                    "fontSize": 18.0,
                    "fontFamily": "Segoe UI"
                },
                "paragraphFormat": {
                    "beforeSpacing": 24.0,
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
                    "bold": true,
                    "fontSize": 12.0,
                    "fontFamily": "Segoe UI",
                    "fontColor": "#00CC66FF"
                },
                "paragraphFormat": {
                    "beforeSpacing": 12.0,
                    "afterSpacing": 0.0,
                    "outlineLevel": "Level2"
                }
            },
            {
                "type": "Paragraph",
                "name": "Heading 3",
                "basedOn": "Normal",
                "next": "Normal",
                "link": "Heading 3 Char",
                "characterFormat": {
                    "bold": true
                },
                "paragraphFormat": {
                    "beforeSpacing": 5.0,
                    "afterSpacing": 0.0,
                    "outlineLevel": "Level3"
                }
            },
            {
                "type": "Paragraph",
                "name": "Heading 4",
                "basedOn": "Normal",
                "next": "Normal",
                "link": "Heading 4 Char",
                "characterFormat": {
                    "italic": true,
                    "fontFamily": "Calibri Light",
                    "fontColor": "#2F5496FF"
                },
                "paragraphFormat": {
                    "beforeSpacing": 2.0,
                    "afterSpacing": 0.0,
                    "lineSpacing": 1.0791666507720947,
                    "lineSpacingType": "Multiple",
                    "outlineLevel": "Level4"
                }
            },
            {
                "type": "Paragraph",
                "name": "Heading 5",
                "basedOn": "Normal",
                "next": "Normal",
                "link": "Heading 5 Char",
                "characterFormat": {
                    "fontFamily": "Calibri Light",
                    "fontColor": "#2F5496FF"
                },
                "paragraphFormat": {
                    "beforeSpacing": 2.0,
                    "afterSpacing": 0.0,
                    "lineSpacing": 1.0791666507720947,
                    "lineSpacingType": "Multiple",
                    "outlineLevel": "Level5"
                }
            },
            {
                "type": "Paragraph",
                "name": "Heading 6",
                "basedOn": "Normal",
                "next": "Normal",
                "link": "Heading 6 Char",
                "characterFormat": {
                    "fontFamily": "Calibri Light",
                    "fontColor": "#1F3763FF"
                },
                "paragraphFormat": {
                    "beforeSpacing": 2.0,
                    "afterSpacing": 0.0,
                    "lineSpacing": 1.0791666507720947,
                    "lineSpacingType": "Multiple",
                    "outlineLevel": "Level6"
                }
            },
            {
                "type": "Character",
                "name": "Default Paragraph Font"
            },
            {
                "type": "Character",
                "name": "Heading 1 Char",
                "basedOn": "Default Paragraph Font",
                "characterFormat": {
                    "fontSize": 14.0,
                    "fontFamily": "Segoe UI",
                    "fontColor": "#595959FF"
                }
            },
            {
                "type": "Character",
                "name": "Heading 2 Char",
                "basedOn": "Default Paragraph Font",
                "characterFormat": {
                    "bold": true,
                    "fontSize": 13.0,
                    "fontFamily": "Segoe UI",
                    "fontColor": "#00CC66FF"
                }
            },
            {
                "type": "Character",
                "name": "Heading 3 Char",
                "basedOn": "Default Paragraph Font",
                "characterFormat": {
                    "bold": true,
                    "fontSize": 10.0,
                    "fontColor": "#595959FF"
                }
            },
            {
                "type": "Paragraph",
                "name": "Title",
                "basedOn": "Normal",
                "next": "Normal",
                "link": "Title Char",
                "characterFormat": {
                    "fontSize": 40.0,
                    "fontFamily": "Segoe UI Light",
                    "fontColor": "#00CC66FF"
                },
                "paragraphFormat": {
                    "afterSpacing": 30.0,
                    "lineSpacing": 1.0,
                    "lineSpacingType": "Multiple"
                }
            },
            {
                "type": "Character",
                "name": "Title Char",
                "basedOn": "Default Paragraph Font",
                "characterFormat": {
                    "fontSize": 40.0,
                    "fontFamily": "Segoe UI Light",
                    "fontColor": "#00CC66FF"
                }
            },
            {
                "type": "Paragraph",
                "name": "Quote",
                "basedOn": "Normal",
                "next": "Normal",
                "link": "Quote Char",
                "characterFormat": {
                    "fontSize": 16.0,
                    "fontFamily": "Segoe UI Light",
                    "fontColor": "#00CC66FF"
                },
                "paragraphFormat": {
                    "lineSpacing": 1.0,
                    "lineSpacingType": "Multiple"
                }
            },
            {
                "type": "Character",
                "name": "Quote Char",
                "basedOn": "Default Paragraph Font",
                "characterFormat": {
                    "fontSize": 16.0,
                    "fontFamily": "Segoe UI Light",
                    "fontColor": "#00CC66FF"
                }
            },
            {
                "type": "Paragraph",
                "name": "Balloon Text",
                "basedOn": "Normal",
                "link": "Balloon Text Char",
                "characterFormat": {
                    "fontSize": 8.0,
                    "fontFamily": "Tahoma"
                },
                "paragraphFormat": {
                    "afterSpacing": 0.0,
                    "lineSpacing": 1.0,
                    "lineSpacingType": "Multiple"
                }
            },
            {
                "type": "Character",
                "name": "Balloon Text Char",
                "basedOn": "Default Paragraph Font",
                "characterFormat": {
                    "fontSize": 8.0,
                    "fontFamily": "Tahoma",
                    "fontColor": "#595959FF"
                }
            },
            {
                "type": "Paragraph",
                "name": "Quick Fact",
                "basedOn": "Normal",
                "characterFormat": {
                    "italic": true,
                    "fontFamily": "Cambria"
                },
                "paragraphFormat": {
                    "afterSpacing": 0.0,
                    "lineSpacing": 1.0,
                    "lineSpacingType": "Multiple"
                }
            },
            {
                "type": "Paragraph",
                "name": "List Paragraph",
                "basedOn": "Normal",
                "next": "List Paragraph",
                "paragraphFormat": {
                    "leftIndent": 36.0,
                    "beforeSpacing": 10.0
                }
            },
            {
                "type": "Character",
                "name": "annotation reference",
                "basedOn": "Default Paragraph Font",
                "characterFormat": {
                    "fontSize": 8.0
                }
            },
            {
                "type": "Paragraph",
                "name": "annotation text",
                "basedOn": "Normal",
                "next": "Normal",
                "link": "Comment Text Char",
                "paragraphFormat": {
                "lineSpacing": 1.0,
                "lineSpacingType": "Multiple"
                }
            },
            {
                "type": "Character",
                "name": "Comment Text Char",
                "basedOn": "Default Paragraph Font",
                "characterFormat": {
                    "fontSize": 10.0,
                    "fontColor": "#595959FF"
                }
            },
            {
                "type": "Paragraph",
                "name": "annotation subject",
                "basedOn": "annotation text",
                "next": "annotation text",
                "link": "Comment Subject Char",
                "characterFormat": {
                    "bold": true
                }
            },
            {
                "type": "Character",
                "name": "Comment Subject Char",
                "basedOn": "Comment Text Char",
                "characterFormat": {
                    "bold": true,
                    "fontSize": 10.0,
                    "fontColor": "#595959FF"
                }
            },
            {
                "type": "Paragraph",
                "name": "Header",
                "basedOn": "Normal",
                "next": "Normal",
                "link": "Header Char",
                "paragraphFormat": {
                    "afterSpacing": 0.0,
                    "lineSpacing": 1.0,
                    "lineSpacingType": "Multiple",
                    "tabs": [
                        {
                            "tabJustification": "Center",
                            "position": 234.0,
                            "tabLeader": "None",
                            "deletePosition": 0.0
                        },
                        {
                            "tabJustification": "Right",
                            "position": 468.0,
                            "tabLeader": "None",
                            "deletePosition": 0.0
                        }
                    ]
                }
            },
            {
                "type": "Character",
                "name": "Header Char",
                "basedOn": "Default Paragraph Font",
                "characterFormat": {
                    "fontSize": 10.0,
                    "fontColor": "#595959FF"
                }
            },
            {
                "type": "Paragraph",
                "name": "Footer",
                "basedOn": "Normal",
                "next": "Normal",
                "link": "Footer Char",
                "paragraphFormat": {
                    "afterSpacing": 0.0,
                    "lineSpacing": 1.0,
                    "lineSpacingType": "Multiple",
                    "tabs": [
                        {
                            "tabJustification": "Center",
                            "position": 234.0,
                            "tabLeader": "None",
                            "deletePosition": 0.0
                        },
                        {
                            "tabJustification": "Right",
                            "position": 468.0,
                            "tabLeader": "None",
                            "deletePosition": 0.0
                        }
                    ]
                }
            },
            {
                "type": "Character",
                "name": "Footer Char",
                "basedOn": "Default Paragraph Font",
                "characterFormat": {
                    "fontSize": 10.0,
                    "fontColor": "#595959FF"
                }
            },
            {
                "type": "Character",
                "name": "Hyperlink",
                "basedOn": "Default Paragraph Font",
                "characterFormat": {
                    "underline": "Single",
                    "fontColor": "#085296FF"
                }
            },
            {
                "type": "Character",
                "name": "Heading 4 Char",
                "basedOn": "Default Paragraph Font",
                "characterFormat": {
                    "italic": true,
                    "fontFamily": "Calibri Light",
                    "fontColor": "#2F5496FF"
                }
            },
            {
                "type": "Character",
                "name": "Heading 5 Char",
                "basedOn": "Default Paragraph Font",
                "characterFormat": {
                    "fontFamily": "Calibri Light",
                    "fontColor": "#2F5496FF"
                }
            },
            {
                "type": "Character",
                "name": "Heading 6 Char",
                "basedOn": "Default Paragraph Font",
                "characterFormat": {
                    "fontFamily": "Calibri Light",
                    "fontColor": "#1F3763FF"
                }
            }
        ],
        "comments": [
            {
                "commentId": "Comment_e5affde3-0e01-48df-938c-071a057c6f8e",
                "author": "Nancy Davolio",
                "initial": "ND",
                "date": "2019-11-14T18:18:00Z",
                "blocks": [
                    {
                        "inlines": [
                            {
                                "text": "Giant panda also known as panda bear or simply panda,"
                            },
                            {
                                "text": " is a bear native to south central China"
                            },
                            {
                                "text": "."
                            }
                        ]
                    }
                ],
                "done": false,
                "replyComments": []
            },
            {
                "commentId": "Comment_b99ebea3-29b7-4d2c-8410-ce8fecb2c30d",
                "author": "Nancy Davolio",
                "initial": "ND",
                "date": "2019-11-14T18:41:00Z",
                "blocks": [
                    {
                        "inlines": [
                            {
                                "text": "Please add more facts."
                            }
                        ]
                    }
                ],
                "done": true,
                "replyComments": [
                    {
                        "commentId": "Comment_dd401ff7-c247-45e8-9d4e-fe9f3fc45603",
                        "author": "Andrew Fuller",
                        "initial": "AF",
                        "date": "2019-11-14T18:44:00Z",
                        "blocks": [
                            {
                                "inlines": [
                                    {
                                        "text": "Giant pandas are good at climbing trees and can also swim."
                                    }
                                ]
                            }
                        ],
                        "done": true,
                        "replyComments": []
                    },
                    {
                        "commentId": "Comment_c1623cbf-5221-4da7-9158-539d7748f786",
                        "author": "Andrew Fuller",
                        "initial": "AF",
                        "date": "2019-11-14T18:46:00Z",
                        "blocks": [
                            {
                                "inlines": [
                                    {
                                        "text": "An adult can eat 12–38 kilos of bamboo per day!"
                                    }
                                ]
                            }
                        ],
                        "done": true,
                        "replyComments": []
                    }
                ]
            },
            {
                "commentId": "Comment_875b5153-42a7-4f48-930b-f4d4ab5df625",
                "author": "Nancy Davolio",
                "initial": "ND",
                "date": "2019-11-14T18:14:00Z",
                "blocks": [
                    {
                        "inlines": [
                            {
                                "text": "Grammar changes required for “may actually be a” as “may be”"
                            }
                        ]
                    }
                ],
                "done": false,
                "replyComments": [
                    {
                        "commentId": "Comment_6f94599b-64a1-4652-a3c4-a57d3e13ae88",
                        "author": "Andrew Fuller",
                        "initial": "AF",
                        "date": "2019-11-14T18:16:00Z",
                        "blocks": [
                            {
                                "inlines": [
                                    {
                                        "text": "Thanks for the update. Will correct it."
                                    }
                                ]
                            }
                        ],
                        "done": false,
                        "replyComments": []
                    }
                ]
            }
        ],
        "defaultTabWidth": 36.0,
        "formatting": false,
        "protectionType": "NoProtection",
        "enforcement": false
    };
    var waitingPopUp = document.getElementById('waiting-popup');
    container.documentEditor.open(JSON.stringify(defaultDocument));    
    container.documentEditor.documentName = 'Comments';    
    container.documentEditor.showComments = true;
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
};