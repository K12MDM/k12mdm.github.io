ej.base.enableRipple(window.ripple)

  //Documenteditor control rendering starts
  var hostUrl = "http://localhost:62728/";
  var container = new ej.documenteditor.DocumentEditorContainer();
  ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar);
  container.serviceUrl = hostUrl + "api/documenteditor/";
  container.appendTo("#container");
  container.height = "590px";
  var defaultDocument = {
    "sections": [
        {
            "blocks": [
                {
                    "characterFormat": {
                        "fontColor": "#4472C4FF"
                    },
                    "paragraphFormat": {
                        "afterSpacing": 36,
                        "styleName": "Normal"
                    },
                    "inlines": [
                        {
                            "text": "List of text alignment options",
                            "characterFormat": {
                                "fontSize": 18,
                                "fontFamily": "Monotype Corsiva",
                                "fontColor": "#4472C4FF",
                                "fontSizeBidi": 18,
                                "fontFamilyBidi": "Monotype Corsiva"
                            }
                        }
                    ]
                },
                {
                    "characterFormat": {
                        "bold": true,
                        "fontSize": 14,
                        "fontFamily": "Calibri",
                        "fontColor": "empty",
                        "boldBidi": true,
                        "fontSizeBidi": 14,
                        "fontFamilyBidi": "Calibri"
                    },
                    "paragraphFormat": {
                        "styleName": "Normal"
                    },
                    "inlines": [
                        {
                            "text": "Left-aligned",
                            "characterFormat": {
                                "bold": true,
                                "fontSize": 14,
                                "fontFamily": "Calibri",
                                "fontColor": "empty",
                                "boldBidi": true,
                                "fontSizeBidi": 14,
                                "fontFamilyBidi": "Calibri"
                            }
                        }
                    ]
                },
                {
                    "characterFormat": {
                        "fontFamily": "Calibri",
                        "fontColor": "empty",
                        "fontFamilyBidi": "Calibri"
                    },
                    "paragraphFormat": {
                        "afterSpacing": 18,
                        "styleName": "Normal"
                    },
                    "inlines": [
                        {
                            "text": "The giant panda, which only lives in China outside of captivity, has captured the hearts of people of all ages across the globe. From their furry black and white bodies to their shy and docile nature, they are considered one of the world's most loved animals.",
                            "characterFormat": {
                                "fontFamily": "Calibri",
                                "fontColor": "empty",
                                "fontFamilyBidi": "Calibri"
                            }
                        }
                    ]
                },
                {
                    "characterFormat": {
                        "bold": true,
                        "fontSize": 14,
                        "fontFamily": "Calibri",
                        "fontColor": "empty",
                        "boldBidi": true,
                        "fontSizeBidi": 14,
                        "fontFamilyBidi": "Calibri"
                    },
                    "paragraphFormat": {
                        "beforeSpacing": 18,
                        "textAlignment": "Center",
                        "styleName": "Normal"
                    },
                    "inlines": [
                        {
                            "text": "Centered",
                            "characterFormat": {
                                "bold": true,
                                "fontSize": 14,
                                "fontFamily": "Calibri",
                                "fontColor": "empty",
                                "boldBidi": true,
                                "fontSizeBidi": 14,
                                "fontFamilyBidi": "Calibri"
                            }
                        }
                    ]
                },
                {
                    "characterFormat": {
                        "fontFamily": "Calibri",
                        "fontColor": "empty",
                        "fontFamilyBidi": "Calibri"
                    },
                    "paragraphFormat": {
                        "afterSpacing": 18,
                        "textAlignment": "Center",
                        "styleName": "Normal"
                    },
                    "inlines": [
                        {
                            "text": "A characteristic of the giant panda that has mystified scientists is their movable, elongated wrist bone that acts like an opposable thumb. This human-like quality that helps give them even more of a cuddly-bear appearance enables the giant panda to pick up objects and even eat sitting up.",
                            "characterFormat": {
                                "fontFamily": "Calibri",
                                "fontColor": "empty",
                                "fontFamilyBidi": "Calibri"
                            }
                        }
                    ]
                },
                {
                    "characterFormat": {
                        "bold": true,
                        "fontSize": 14,
                        "fontFamily": "Calibri",
                        "fontColor": "empty",
                        "boldBidi": true,
                        "fontSizeBidi": 14,
                        "fontFamilyBidi": "Calibri"
                    },
                    "paragraphFormat": {
                        "beforeSpacing": 18,
                        "textAlignment": "Right",
                        "styleName": "Normal"
                    },
                    "inlines": [
                        {
                            "text": "Right-aligned",
                            "characterFormat": {
                                "bold": true,
                                "fontSize": 14,
                                "fontFamily": "Calibri",
                                "fontColor": "empty",
                                "boldBidi": true,
                                "fontSizeBidi": 14,
                                "fontFamilyBidi": "Calibri"
                            }
                        }
                    ]
                },
                {
                    "characterFormat": {
                        "fontFamily": "Calibri",
                        "fontColor": "empty",
                        "fontFamilyBidi": "Calibri"
                    },
                    "paragraphFormat": {
                        "afterSpacing": 18,
                        "textAlignment": "Right",
                        "styleName": "Normal"
                    },
                    "inlines": [
                        {
                            "text": "Giant pandas are generally referred to as bears and are typically called panda bears rather than giant pandas. Though we may think they look like bears, there has been a great deal of discussion for decades about where giant pandas fit in the animal kingdom. Much of the debate has been whether they are more closely related to the red panda, once thought to be a member of the raccoon family, than the bear family.",
                            "characterFormat": {
                                "fontFamily": "Calibri",
                                "fontColor": "empty",
                                "fontFamilyBidi": "Calibri"
                            }
                        }
                    ]
                },
                {
                    "characterFormat": {
                        "bold": true,
                        "fontSize": 14,
                        "fontFamily": "Calibri",
                        "fontColor": "empty",
                        "boldBidi": true,
                        "fontSizeBidi": 14,
                        "fontFamilyBidi": "Calibri"
                    },
                    "paragraphFormat": {
                        "beforeSpacing": 18,
                        "textAlignment": "Justify",
                        "styleName": "Normal"
                    },
                    "inlines": [
                        {
                            "text": "Justified",
                            "characterFormat": {
                                "bold": true,
                                "fontSize": 14,
                                "fontFamily": "Calibri",
                                "fontColor": "empty",
                                "boldBidi": true,
                                "fontSizeBidi": 14,
                                "fontFamilyBidi": "Calibri"
                            }
                        }
                    ]
                },
                {
                    "characterFormat": {
                        "fontFamily": "Calibri",
                        "fontColor": "empty",
                        "fontFamilyBidi": "Calibri"
                    },
                    "paragraphFormat": {
                        "afterSpacing": 18,
                        "textAlignment": "Justify",
                        "styleName": "Normal"
                    },
                    "inlines": [
                        {
                            "text": "Gi",
                            "characterFormat": {
                                "fontFamily": "Calibri",
                                "fontColor": "empty",
                                "fontFamilyBidi": "Calibri"
                            }
                        },
                        {
                            "text": "a",
                            "characterFormat": {
                                "fontFamily": "Calibri",
                                "fontColor": "empty",
                                "fontFamilyBidi": "Calibri"
                            }
                        },
                        {
                            "text": "nt pandas can digest bamboo is attributed to tiny microbes that live within their digestive system. As they can only digest about 20% of what they eat, the average giant panda consumes around 14 kilograms (30 pounds) of bamboo a day. In comparison, humans eat about 2 kilograms (5 pounds) of food a day",
                            "characterFormat": {
                                "fontFamily": "Calibri",
                                "fontColor": "empty",
                                "fontFamilyBidi": "Calibri"
                            }
                        }
                    ]
                },
                {
                    "characterFormat": {
                        "fontColor": "#4472C4FF"
                    },
                    "paragraphFormat": {
                        "afterSpacing": 36,
                        "styleName": "Normal"
                    },
                    "inlines": [
                        {
                            "text": "List of indentation options",
                            "characterFormat": {
                                "fontSize": 18,
                                "fontFamily": "Monotype Corsiva",
                                "fontColor": "#4472C4FF",
                                "fontSizeBidi": 18,
                                "fontFamilyBidi": "Monotype Corsiva"
                            }
                        }
                    ]
                },
                {
                    "characterFormat": {
                        "bold": true,
                        "fontSize": 14,
                        "fontFamily": "Calibri",
                        "fontColor": "empty",
                        "boldBidi": true,
                        "fontSizeBidi": 14,
                        "fontFamilyBidi": "Calibri"
                    },
                    "paragraphFormat": {
                        "leftIndent": 36,
                        "textAlignment": "Justify",
                        "styleName": "Normal"
                    },
                    "inlines": [
                        {
                            "text": "Left indent is 48 pixels",
                            "characterFormat": {
                                "bold": true,
                                "fontSize": 14,
                                "fontFamily": "Calibri",
                                "fontColor": "empty",
                                "boldBidi": true,
                                "fontSizeBidi": 14,
                                "fontFamilyBidi": "Calibri"
                            }
                        }
                    ]
                },
                {
                    "characterFormat": {
                        "fontFamily": "Calibri",
                        "fontColor": "empty",
                        "fontFamilyBidi": "Calibri"
                    },
                    "paragraphFormat": {
                        "leftIndent": 36,
                        "afterSpacing": 6,
                        "textAlignment": "Justify",
                        "styleName": "Normal"
                    },
                    "inlines": [
                        {
                            "text": "G",
                            "characterFormat": {
                                "fontFamily": "Calibri",
                                "fontColor": "empty",
                                "fontFamilyBidi": "Calibri"
                            }
                        },
                        {
                            "text": "iant panda has a body that resembles a small bear and climbs trees like a bear, it also has several characteristics in common with the red panda. For example, both giant pandas and red pandas eat bamboo and have the same pseudo thumb.",
                            "characterFormat": {
                                "fontFamily": "Calibri",
                                "fontColor": "empty",
                                "fontFamilyBidi": "Calibri"
                            }
                        }
                    ]
                },
                {
                    "characterFormat": {
                        "fontFamily": "Calibri",
                        "fontColor": "empty",
                        "fontFamilyBidi": "Calibri"
                    },
                    "paragraphFormat": {
                        "leftIndent": 36,
                        "textAlignment": "Justify",
                        "styleName": "Normal"
                    },
                    "inlines": []
                },
                {
                    "characterFormat": {
                        "bold": true,
                        "fontSize": 14,
                        "fontFamily": "Calibri",
                        "fontColor": "empty",
                        "boldBidi": true,
                        "fontSizeBidi": 14,
                        "fontFamilyBidi": "Calibri"
                    },
                    "paragraphFormat": {
                        "rightIndent": 36,
                        "textAlignment": "Justify",
                        "styleName": "Normal"
                    },
                    "inlines": [
                        {
                            "text": "Right indent is 48 pixels",
                            "characterFormat": {
                                "bold": true,
                                "fontSize": 14,
                                "fontFamily": "Calibri",
                                "fontColor": "empty",
                                "boldBidi": true,
                                "fontSizeBidi": 14,
                                "fontFamilyBidi": "Calibri"
                            }
                        }
                    ]
                },
                {
                    "characterFormat": {
                        "fontFamily": "Calibri",
                        "fontColor": "empty",
                        "fontFamilyBidi": "Calibri"
                    },
                    "paragraphFormat": {
                        "rightIndent": 36,
                        "afterSpacing": 18,
                        "textAlignment": "Justify",
                        "styleName": "Normal"
                    },
                    "inlines": [
                        {
                            "text": "Giant pandas are generally referred to as bears and are typically called panda bears rather than giant pandas. Though we may think they look like bears, there has been a great deal of discussion for decades about where giant pandas fit in the animal kingdom. Much of ",
                            "characterFormat": {
                                "fontFamily": "Calibri",
                                "fontColor": "empty",
                                "fontFamilyBidi": "Calibri"
                            }
                        },
                        {
                            "text": "the debate has been whether they are more closely related to the red panda, once thought to be a member of the raccoon family, than the bear family.",
                            "characterFormat": {
                                "fontFamily": "Calibri",
                                "fontColor": "empty",
                                "fontFamilyBidi": "Calibri"
                            }
                        }
                    ]
                },
                {
                    "characterFormat": {
                        "fontColor": "empty"
                    },
                    "paragraphFormat": {
                        "styleName": "Normal"
                    },
                    "inlines": []
                },
                {
                    "characterFormat": {
                        "bold": true,
                        "fontSize": 14,
                        "fontFamily": "Calibri",
                        "fontColor": "empty",
                        "boldBidi": true,
                        "fontSizeBidi": 14,
                        "fontFamilyBidi": "Calibri"
                    },
                    "paragraphFormat": {
                        "firstLineIndent": 36,
                        "textAlignment": "Justify",
                        "styleName": "Normal"
                    },
                    "inlines": [
                        {
                            "text": "First line indent is 48 pixels",
                            "characterFormat": {
                                "bold": true,
                                "fontSize": 14,
                                "fontFamily": "Calibri",
                                "fontColor": "empty",
                                "boldBidi": true,
                                "fontSizeBidi": 14,
                                "fontFamilyBidi": "Calibri"
                            }
                        }
                    ]
                },
                {
                    "characterFormat": {
                        "fontFamily": "Calibri",
                        "fontColor": "empty",
                        "fontFamilyBidi": "Calibri"
                    },
                    "paragraphFormat": {
                        "firstLineIndent": 36,
                        "afterSpacing": 18,
                        "textAlignment": "Justify",
                        "styleName": "Normal"
                    },
                    "inlines": [
                        {
                            "text": "A characteristic of the giant panda that has mystified scientists is their movable, elongated wrist bone that acts like an opposable thumb. This human-like quality that helps give them even more of a cuddly-bear appearance enables the giant panda to pick up objects and even eat sitting up.",
                            "characterFormat": {
                                "fontFamily": "Calibri",
                                "fontColor": "empty",
                                "fontFamilyBidi": "Calibri"
                            }
                        }
                    ]
                },
                {
                    "characterFormat": {
                        "bold": true,
                        "fontSize": 14,
                        "fontFamily": "Calibri",
                        "fontColor": "empty",
                        "boldBidi": true,
                        "fontSizeBidi": 14,
                        "fontFamilyBidi": "Calibri"
                    },
                    "paragraphFormat": {
                        "leftIndent": 36,
                        "firstLineIndent": -36,
                        "textAlignment": "Justify",
                        "styleName": "Normal"
                    },
                    "inlines": [
                        {
                            "text": "Hanging indent is 48 pixels",
                            "characterFormat": {
                                "bold": true,
                                "fontSize": 14,
                                "fontFamily": "Calibri",
                                "fontColor": "empty",
                                "boldBidi": true,
                                "fontSizeBidi": 14,
                                "fontFamilyBidi": "Calibri"
                            }
                        }
                    ]
                },
                {
                    "characterFormat": {
                        "fontFamily": "Calibri",
                        "fontColor": "empty",
                        "fontFamilyBidi": "Calibri"
                    },
                    "paragraphFormat": {
                        "leftIndent": 36,
                        "firstLineIndent": -36,
                        "afterSpacing": 18,
                        "textAlignment": "Justify",
                        "styleName": "Normal"
                    },
                    "inlines": [
                        {
                            "text": "Gaint",
                            "characterFormat": {
                                "fontFamily": "Calibri",
                                "fontColor": "empty",
                                "fontFamilyBidi": "Calibri"
                            }
                        },
                        {
                            "text": " pandas can digest bamboo is attributed to tiny microbes that live within their digestive system. As they can only digest about 20% of what they eat, the average giant panda consumes around 14 kilograms (30 pounds) of bamboo a day. In comparison, humans eat about 2 kilograms (5 pounds) of food a day. This enormous diet means the giant panda spends more than 12 hours a day eating to stay nourished.",
                            "characterFormat": {
                                "fontFamily": "Calibri",
                                "fontColor": "empty",
                                "fontFamilyBidi": "Calibri"
                            }
                        }
                    ]
                },
                {
                    "characterFormat": {
                        "fontFamily": "Calibri",
                        "fontColor": "empty",
                        "fontFamilyBidi": "Calibri"
                    },
                    "paragraphFormat": {
                        "afterSpacing": 8,
                        "lineSpacing": 1.0791666507720947,
                        "lineSpacingType": "Multiple",
                        "styleName": "Normal"
                    },
                    "inlines": [
                        {
                            "text": " ",
                            "characterFormat": {
                                "fontFamily": "Calibri",
                                "fontColor": "empty",
                                "fontFamilyBidi": "Calibri"
                            }
                        }
                    ]
                },
                {
                    "characterFormat": {
                        "fontColor": "#4472C4FF"
                    },
                    "paragraphFormat": {
                        "afterSpacing": 36,
                        "styleName": "Normal"
                    },
                    "inlines": [
                        {
                            "text": "List of line spacing options",
                            "characterFormat": {
                                "fontSize": 18,
                                "fontFamily": "Monotype Corsiva",
                                "fontColor": "#4472C4FF",
                                "fontSizeBidi": 18,
                                "fontFamilyBidi": "Monotype Corsiva"
                            }
                        }
                    ]
                },
                {
                    "characterFormat": {
                        "bold": true,
                        "fontSize": 14,
                        "fontFamily": "Calibri",
                        "fontColor": "empty",
                        "boldBidi": true,
                        "fontSizeBidi": 14,
                        "fontFamilyBidi": "Calibri"
                    },
                    "paragraphFormat": {
                        "lineSpacing": 2,
                        "lineSpacingType": "Multiple",
                        "textAlignment": "Justify",
                        "styleName": "Normal"
                    },
                    "inlines": [
                        {
                            "text": "Double line spacing",
                            "characterFormat": {
                                "bold": true,
                                "fontSize": 14,
                                "fontFamily": "Calibri",
                                "fontColor": "empty",
                                "boldBidi": true,
                                "fontSizeBidi": 14,
                                "fontFamilyBidi": "Calibri"
                            }
                        }
                    ]
                },
                {
                    "characterFormat": {
                        "fontFamily": "Calibri",
                        "fontColor": "empty",
                        "fontFamilyBidi": "Calibri"
                    },
                    "paragraphFormat": {
                        "afterSpacing": 18,
                        "lineSpacing": 2,
                        "lineSpacingType": "Multiple",
                        "textAlignment": "Justify",
                        "styleName": "Normal"
                    },
                    "inlines": [
                        {
                            "text": "Giant pandas are generally referred to as bears and are typically called panda bears rather than giant pandas. Though we may think they look like bears, there has been a great deal of discussion for decades about where giant pandas fit in the animal kingdom. Much of the debate has been whether they are more closely related to the red panda, once thought to be a member of the raccoon family, than the bear family.",
                            "characterFormat": {
                                "fontFamily": "Calibri",
                                "fontColor": "empty",
                                "fontFamilyBidi": "Calibri"
                            }
                        }
                    ]
                },
                {
                    "characterFormat": {
                        "fontColor": "empty"
                    },
                    "paragraphFormat": {
                        "styleName": "Normal"
                    },
                    "inlines": []
                },
                {
                    "characterFormat": {
                        "bold": true,
                        "fontSize": 14,
                        "fontFamily": "Calibri",
                        "fontColor": "empty",
                        "boldBidi": true,
                        "fontSizeBidi": 14,
                        "fontFamilyBidi": "Calibri"
                    },
                    "paragraphFormat": {
                        "lineSpacing": 18,
                        "lineSpacingType": "AtLeast",
                        "textAlignment": "Justify",
                        "styleName": "Normal"
                    },
                    "inlines": [
                        {
                            "text": "Line spacing is at least 24 pixels",
                            "characterFormat": {
                                "bold": true,
                                "fontSize": 14,
                                "fontFamily": "Calibri",
                                "fontColor": "empty",
                                "boldBidi": true,
                                "fontSizeBidi": 14,
                                "fontFamilyBidi": "Calibri"
                            }
                        }
                    ]
                },
                {
                    "characterFormat": {
                        "fontFamily": "Calibri",
                        "fontColor": "empty",
                        "fontFamilyBidi": "Calibri"
                    },
                    "paragraphFormat": {
                        "afterSpacing": 18,
                        "lineSpacing": 18,
                        "lineSpacingType": "AtLeast",
                        "textAlignment": "Justify",
                        "styleName": "Normal"
                    },
                    "inlines": [
                        {
                            "name": "_Hlk80958955",
                            "bookmarkType": 0
                        },
                        {
                            "text": "Giant panda has a body that resembles a small bear and climbs trees like a bear, it also has several characteristics in common with the red panda. For example, both giant pandas and red pandas eat bamboo and have the same pseudo thumb.",
                            "characterFormat": {
                                "fontFamily": "Calibri",
                                "fontColor": "empty",
                                "fontFamilyBidi": "Calibri"
                            }
                        },
                        {
                            "name": "_Hlk80958955",
                            "bookmarkType": 1
                        }
                    ]
                },
                {
                    "characterFormat": {
                        "bold": true,
                        "fontSize": 14,
                        "fontFamily": "Calibri",
                        "fontColor": "empty",
                        "boldBidi": true,
                        "fontSizeBidi": 14,
                        "fontFamilyBidi": "Calibri"
                    },
                    "paragraphFormat": {
                        "lineSpacing": 15,
                        "lineSpacingType": "Exactly",
                        "textAlignment": "Justify",
                        "styleName": "Normal"
                    },
                    "inlines": [
                        {
                            "text": "Line spacing is exactly 20 pixels",
                            "characterFormat": {
                                "bold": true,
                                "fontSize": 14,
                                "fontFamily": "Calibri",
                                "fontColor": "empty",
                                "boldBidi": true,
                                "fontSizeBidi": 14,
                                "fontFamilyBidi": "Calibri"
                            }
                        }
                    ]
                },
                {
                    "characterFormat": {
                        "fontFamily": "Calibri",
                        "fontColor": "empty",
                        "fontFamilyBidi": "Calibri"
                    },
                    "paragraphFormat": {
                        "afterSpacing": 18,
                        "lineSpacing": 15,
                        "lineSpacingType": "Exactly",
                        "textAlignment": "Justify",
                        "styleName": "Normal"
                    },
                    "inlines": [
                        {
                            "text": "An infant giant panda cub is about the size of a croissant, weighs less than a teacup and is about 900 times smaller than its mother. An average adult mother weighs around 91 kilograms (200 pounds) while newborn weighs only 83 to 190 grams (3 to 4 ounces).",
                            "characterFormat": {
                                "fontFamily": "Calibri",
                                "fontColor": "empty",
                                "fontFamilyBidi": "Calibri"
                            }
                        }
                    ]
                },
                {
                    "characterFormat": {
                        "fontColor": "empty"
                    },
                    "paragraphFormat": {
                        "styleName": "Normal"
                    },
                    "inlines": []
                },
                {
                    "characterFormat": {
                        "fontColor": "#4472C4FF"
                    },
                    "paragraphFormat": {
                        "styleName": "Normal"
                    },
                    "inlines": [
                        {
                            "text": "List of ",
                            "characterFormat": {
                                "fontSize": 18,
                                "fontFamily": "Monotype Corsiva",
                                "fontColor": "#4472C4FF",
                                "fontSizeBidi": 18,
                                "fontFamilyBidi": "Monotype Corsiva"
                            }
                        },
                        {
                            "text": "paragraph",
                            "characterFormat": {
                                "fontSize": 18,
                                "fontFamily": "Monotype Corsiva",
                                "fontColor": "#4472C4FF",
                                "fontSizeBidi": 18,
                                "fontFamilyBidi": "Monotype Corsiva"
                            }
                        },
                        {
                            "text": " spacing options",
                            "characterFormat": {
                                "fontSize": 18,
                                "fontFamily": "Monotype Corsiva",
                                "fontColor": "#4472C4FF",
                                "fontSizeBidi": 18,
                                "fontFamilyBidi": "Monotype Corsiva"
                            }
                        }
                    ]
                },
                {
                    "characterFormat": {
                        "bold": true,
                        "fontSize": 14,
                        "fontFamily": "Calibri",
                        "fontColor": "empty",
                        "boldBidi": true,
                        "fontSizeBidi": 14,
                        "fontFamilyBidi": "Calibri"
                    },
                    "paragraphFormat": {
                        "beforeSpacing": 18,
                        "afterSpacing": 12,
                        "styleName": "Normal"
                    },
                    "inlines": [
                        {
                            "text": "Spacing before the paragraph is 24 pixels and after the paragraph is 16 pixels",
                            "characterFormat": {
                                "bold": true,
                                "fontSize": 14,
                                "fontFamily": "Calibri",
                                "fontColor": "empty",
                                "boldBidi": true,
                                "fontSizeBidi": 14,
                                "fontFamilyBidi": "Calibri"
                            }
                        }
                    ]
                },
                {
                    "characterFormat": {
                        "fontFamily": "Calibri",
                        "fontColor": "empty",
                        "fontFamilyBidi": "Calibri"
                    },
                    "paragraphFormat": {
                        "beforeSpacing": 18,
                        "afterSpacing": 12,
                        "styleName": "Normal"
                    },
                    "inlines": [
                        {
                            "text": "Giant pandas are generally referred to as bears and are typically called panda bears rather than giant pandas. Though we may think they look like bears, there has been a great deal of discussion for decades about where giant pandas fit in the animal kingdom. Much of the debate has been whether they are more closely related to the red panda, once thought to be a member of the raccoon family, than the bear family.",
                            "characterFormat": {
                                "fontFamily": "Calibri",
                                "fontColor": "empty",
                                "fontFamilyBidi": "Calibri"
                            }
                        }
                    ]
                },
                {
                    "characterFormat": {
                        "bold": true,
                        "fontSize": 14,
                        "fontFamily": "Calibri",
                        "fontColor": "empty",
                        "boldBidi": true,
                        "fontSizeBidi": 14,
                        "fontFamilyBidi": "Calibri"
                    },
                    "paragraphFormat": {
                        "styleName": "Normal"
                    },
                    "inlines": [
                        {
                            "text": "No spacing before and after the paragraph",
                            "characterFormat": {
                                "bold": true,
                                "fontSize": 14,
                                "fontFamily": "Calibri",
                                "fontColor": "empty",
                                "boldBidi": true,
                                "fontSizeBidi": 14,
                                "fontFamilyBidi": "Calibri"
                            }
                        }
                    ]
                },
                {
                    "characterFormat": {
                        "fontFamily": "Calibri",
                        "fontColor": "empty",
                        "fontFamilyBidi": "Calibri"
                    },
                    "paragraphFormat": {
                        "styleName": "Normal"
                    },
                    "inlines": [
                        {
                            "text": "A characteristic of the giant panda that has mystified scientists is their movable, elongated wrist bone that acts like an opposable thumb. This human-like quality that helps give them even more of a cuddly-bear appearance enables the giant panda to pick up objects and even eat sitting up.",
                            "characterFormat": {
                                "fontFamily": "Calibri",
                                "fontColor": "empty",
                                "fontFamilyBidi": "Calibri"
                            }
                        }
                    ]
                },
                {
                    "characterFormat": {
                        "fontFamily": "Calibri",
                        "fontColor": "empty",
                        "fontFamilyBidi": "Calibri"
                    },
                    "paragraphFormat": {
                        "styleName": "Normal"
                    },
                    "inlines": []
                },
                {
                    "characterFormat": {
                        "bold": true,
                        "fontSize": 14,
                        "fontFamily": "Calibri",
                        "fontColor": "empty",
                        "boldBidi": true,
                        "fontSizeBidi": 14,
                        "fontFamilyBidi": "Calibri"
                    },
                    "paragraphFormat": {
                        "styleName": "Normal",
                        "keepWithNext": true,
                        "keepLinesTogether": true
                    },
                    "inlines": [
                        {
                            "text": "Keep with next and Keep lines together",
                            "characterFormat": {
                                "bold": true,
                                "fontSize": 14,
                                "fontFamily": "Calibri",
                                "fontColor": "empty",
                                "boldBidi": true,
                                "fontSizeBidi": 14,
                                "fontFamilyBidi": "Calibri"
                            }
                        }
                    ]
                },
                {
                    "characterFormat": {
                        "fontFamily": "Calibri",
                        "fontColor": "empty",
                        "fontFamilyBidi": "Calibri"
                    },
                    "paragraphFormat": {
                        "afterSpacing": 12,
                        "styleName": "Normal",
                        "keepWithNext": true,
                        "keepLinesTogether": true
                    },
                    "inlines": [
                        {
                            "text": "The giant ",
                            "characterFormat": {
                                "fontFamily": "Calibri",
                                "fontColor": "empty",
                                "fontFamilyBidi": "Calibri"
                            }
                        },
                        {
                            "text": "panda,",
                            "characterFormat": {
                                "fontFamily": "Calibri",
                                "fontColor": "empty",
                                "fontFamilyBidi": "Calibri"
                            }
                        },
                        {
                            "text": " which only lives in China outside of captivity, has captured the hearts of people of all ages across the globe. From their furry black and white bodies to their shy and docile nature, they are considered one of the world's most loved animals.",
                            "characterFormat": {
                                "fontFamily": "Calibri",
                                "fontColor": "empty",
                                "fontFamilyBidi": "Calibri"
                            }
                        }
                    ]
                },
                {
                    "characterFormat": {
                        "fontFamily": "Calibri",
                        "fontColor": "empty",
                        "fontFamilyBidi": "Calibri"
                    },
                    "paragraphFormat": {
                        "afterSpacing": 12,
                        "styleName": "Normal",
                        "keepWithNext": true,
                        "keepLinesTogether": true
                    },
                    "inlines": [
                        {
                            "text": "A characteristic of the giant panda that has mystified scientists is their movable, elongated wrist bone that acts like an opposable thumb. This human-like quality that helps give them even more of a cuddly-bear appearance enables the giant panda to pick up objects and even eat sitting up",
                            "characterFormat": {
                                "fontFamily": "Calibri",
                                "fontColor": "empty",
                                "fontFamilyBidi": "Calibri"
                            }
                        }
                    ]
                },
                {
                    "characterFormat": {
                        "fontFamily": "Calibri",
                        "fontColor": "empty",
                        "fontFamilyBidi": "Calibri"
                    },
                    "paragraphFormat": {
                        "afterSpacing": 12,
                        "styleName": "Normal",
                        "keepWithNext": true,
                        "keepLinesTogether": true
                    },
                    "inlines": [
                        {
                            "text": "Giant pandas are generally referred to as bears and are typically called panda bears rather than giant pandas. Though we may think they look like bears, there has been a great deal of discussion for decades about where giant pandas fit in the animal kingdom. Much of the debate has been whether they are more closely related to the red panda, once thought to be a member of the raccoon family, than the bear family.",
                            "characterFormat": {
                                "fontFamily": "Calibri",
                                "fontColor": "empty",
                                "fontFamilyBidi": "Calibri"
                            }
                        }
                    ]
                },
                {
                    "characterFormat": {
                        "fontFamily": "Calibri",
                        "fontColor": "empty",
                        "fontFamilyBidi": "Calibri"
                    },
                    "paragraphFormat": {
                        "afterSpacing": 12,
                        "styleName": "Normal",
                        "keepWithNext": true,
                        "keepLinesTogether": true
                    },
                    "inlines": [
                        {
                            "text": "While a giant panda has a body that resembles a small bear and climbs trees like a bear, it also has several characteristics in common with the red panda. For example, both giant pandas and red pandas eat bamboo and have the same pseudo thumb. The table below lists the main characteristics the giant panda shares with bears and red pandas.",
                            "characterFormat": {
                                "fontFamily": "Calibri",
                                "fontColor": "empty",
                                "fontFamilyBidi": "Calibri"
                            }
                        }
                    ]
                },
                {
                    "characterFormat": {
                        "fontFamily": "Calibri",
                        "fontColor": "empty",
                        "fontFamilyBidi": "Calibri"
                    },
                    "paragraphFormat": {
                        "afterSpacing": 12,
                        "styleName": "Normal",
                        "keepWithNext": true,
                        "keepLinesTogether": true
                    },
                    "inlines": [
                        {
                            "text": "Giant panda has a body that resembles a small bear and climbs trees like a bear, it also has several characteristics in common with the red panda. For example, both giant pandas and red pandas eat bamboo and have the same pseudo thumb.",
                            "characterFormat": {
                                "fontFamily": "Calibri",
                                "fontColor": "empty",
                                "fontFamilyBidi": "Calibri"
                            }
                        }
                    ]
                },
                {
                    "characterFormat": {
                        "fontFamily": "Calibri",
                        "fontColor": "empty",
                        "fontFamilyBidi": "Calibri"
                    },
                    "paragraphFormat": {
                        "afterSpacing": 12,
                        "styleName": "Normal",
                        "keepWithNext": true,
                        "keepLinesTogether": true
                    },
                    "inlines": [
                        {
                            "name": "_Hlk80971878",
                            "bookmarkType": 0
                        },
                        {
                            "text": "While most adore their fluffy fur and round heads, which help give them their cuddly bear quality, others are fascinated by the many mysteries of the giant panda. Did you know that the giant panda may be a raccoon, they have an opposable pseudo thumb, and that they’re technically a carnivore even though their diet is primarily vegetarian? These things and more have baffled scientists and naturalists for hundreds of years",
                            "characterFormat": {
                                "fontFamily": "Calibri",
                                "fontColor": "empty",
                                "fontFamilyBidi": "Calibri"
                            }
                        },
                        {
                            "name": "_Hlk80971878",
                            "bookmarkType": 1
                        }
                    ]
                },
                {
                    "characterFormat": {
                        "fontFamily": "Calibri",
                        "fontColor": "empty",
                        "fontFamilyBidi": "Calibri"
                    },
                    "paragraphFormat": {
                        "afterSpacing": 12,
                        "styleName": "Normal",
                        "keepWithNext": true,
                        "keepLinesTogether": true
                    },
                    "inlines": [
                        {
                            "text": "An infant giant panda cub is about the size of a croissant, weighs less than a teacup and is about 900 times smaller than its mother. An average adult mother weighs around 91 kilograms (200 pounds) while newborn weighs only 83 to 190 grams (3 to 4 ounces).",
                            "characterFormat": {
                                "fontFamily": "Calibri",
                                "fontColor": "empty",
                                "fontFamilyBidi": "Calibri"
                            }
                        }
                    ]
                },
                {
                    "characterFormat": {
                        "fontFamily": "Calibri",
                        "fontColor": "empty",
                        "fontFamilyBidi": "Calibri"
                    },
                    "paragraphFormat": {
                        "afterSpacing": 12,
                        "styleName": "Normal",
                        "keepWithNext": true,
                        "keepLinesTogether": true
                    },
                    "inlines": [
                        {
                            "text": "Giant panda has a body that resembles a small bear and climbs trees like a bear, it also has several characteristics in common with the red panda. For example, both giant pandas and red pandas eat bamboo and have the same pseudo thumb.",
                            "characterFormat": {
                                "fontFamily": "Calibri",
                                "fontColor": "empty",
                                "fontFamilyBidi": "Calibri"
                            }
                        }
                    ]
                },
                {
                    "characterFormat": {
                        "fontFamily": "Calibri",
                        "fontColor": "empty",
                        "fontFamilyBidi": "Calibri"
                    },
                    "paragraphFormat": {
                        "afterSpacing": 12,
                        "styleName": "Normal",
                        "keepWithNext": true,
                        "keepLinesTogether": true
                    },
                    "inlines": [
                        {
                            "text": "An infant giant panda cub is about the size of a croissant, weighs less than a teacup and is about 900 times smaller than its mother. An average adult mother weighs around 91 kilograms (200 pounds) while newborn weighs only 83 to 190 grams (3 to 4 ounces).",
                            "characterFormat": {
                                "fontFamily": "Calibri",
                                "fontColor": "empty",
                                "fontFamilyBidi": "Calibri"
                            }
                        }
                    ]
                },
                {
                    "characterFormat": {
                        "fontFamily": "Calibri",
                        "fontColor": "empty",
                        "fontFamilyBidi": "Calibri"
                    },
                    "paragraphFormat": {
                        "afterSpacing": 12,
                        "styleName": "Normal",
                        "keepWithNext": true,
                        "keepLinesTogether": true
                    },
                    "inlines": [
                        {
                            "text": "An infant giant panda cub is about the size of a croissant, weighs less than a teacup and is about 900 times smaller than its mother. An average adult mother weighs around 91 kilograms (200 pounds) while newborn weighs only 83 to 190 grams (3 to 4 ounces).",
                            "characterFormat": {
                                "fontFamily": "Calibri",
                                "fontColor": "empty",
                                "fontFamilyBidi": "Calibri"
                            }
                        }
                    ]
                },
                {
                    "characterFormat": {
                        "fontFamily": "Calibri",
                        "fontColor": "empty",
                        "fontFamilyBidi": "Calibri"
                    },
                    "paragraphFormat": {
                        "afterSpacing": 12,
                        "styleName": "Normal",
                        "keepWithNext": true,
                        "keepLinesTogether": true
                    },
                    "inlines": [
                        {
                            "text": "While most adore their fluffy fur and round heads, which help give them their cuddly bear quality, others are fascinated by the many mysteries of the giant panda. Did you know that the giant panda may be a raccoon, they have an opposable pseudo thumb, and that they’re technically a carnivore even though their diet is primarily vegetarian? These things and more have baffled scientists and naturalists for hundreds of years",
                            "characterFormat": {
                                "fontFamily": "Calibri",
                                "fontColor": "empty",
                                "fontFamilyBidi": "Calibri"
                            }
                        }
                    ]
                },
                {
                    "characterFormat": {
                        "fontFamily": "Calibri",
                        "fontColor": "empty",
                        "fontFamilyBidi": "Calibri"
                    },
                    "paragraphFormat": {
                        "styleName": "Normal"
                    },
                    "inlines": []
                },
                {
                    "characterFormat": {
                        "fontColor": "empty"
                    },
                    "paragraphFormat": {
                        "styleName": "Normal"
                    },
                    "inlines": []
                }
            ],
            "headersFooters": {
                "header": {
                    "blocks": [
                        {
                            "inlines": []
                        }
                    ]
                },
                "footer": {
                    "blocks": [
                        {
                            "inlines": []
                        }
                    ]
                },
                "evenHeader": {
                    "blocks": [
                        {
                            "inlines": []
                        }
                    ]
                },
                "evenFooter": {
                    "blocks": [
                        {
                            "inlines": []
                        }
                    ]
                },
                "firstPageHeader": {
                    "blocks": [
                        {
                            "inlines": []
                        }
                    ]
                },
                "firstPageFooter": {
                    "blocks": [
                        {
                            "inlines": []
                        }
                    ]
                }
            },
            "sectionFormat": {
                "headerDistance": 36,
                "footerDistance": 36,
                "pageWidth": 612,
                "pageHeight": 792,
                "leftMargin": 72,
                "rightMargin": 72,
                "topMargin": 72,
                "bottomMargin": 72,
                "differentFirstPage": false,
                "differentOddAndEvenPages": false,
                "bidi": false,
                "restartPageNumbering": false,
                "pageStartingNumber": 0,
                "endnoteNumberFormat": "LowerCaseRoman",
                "footNoteNumberFormat": "Arabic",
                "restartIndexForFootnotes": "DoNotRestart",
                "restartIndexForEndnotes": "DoNotRestart"
            }
        }
    ],
    "characterFormat": {
        "fontSize": 11,
        "fontFamily": "Calibri",
        "fontColor": "empty",
        "fontSizeBidi": 11,
        "fontFamilyBidi": "Calibri"
    },
    "paragraphFormat": {
        "afterSpacing": 8,
        "lineSpacing": 1.0791666507720947,
        "lineSpacingType": "Multiple"
    },
    "background": {
        "color": "#FFFFFFFF"
    },
    "styles": [
        {
            "type": "Paragraph",
            "name": "Normal",
            "next": "Normal",
            "characterFormat": {
                "fontSize": 12,
                "fontFamily": "Times New Roman",
                "fontColor": "empty",
                "fontSizeBidi": 12,
                "fontFamilyBidi": "Times New Roman"
            },
            "paragraphFormat": {
                "afterSpacing": 0,
                "lineSpacing": 1,
                "lineSpacingType": "Multiple"
            }
        },
        {
            "type": "Paragraph",
            "name": "Heading 1",
            "basedOn": "Normal",
            "next": "Normal",
            "link": "Heading 1 Char",
            "characterFormat": {
                "fontSize": 16,
                "fontFamily": "Calibri Light",
                "fontColor": "#2F5496FF",
                "fontSizeBidi": 16,
                "fontFamilyBidi": "Calibri Light"
            },
            "paragraphFormat": {
                "beforeSpacing": 12,
                "lineSpacing": 1.0791666507720947,
                "lineSpacingType": "Multiple",
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
                "fontSize": 13,
                "fontFamily": "Calibri Light",
                "fontColor": "#2F5496FF",
                "fontSizeBidi": 13,
                "fontFamilyBidi": "Calibri Light"
            },
            "paragraphFormat": {
                "beforeSpacing": 2,
                "lineSpacing": 1.0791666507720947,
                "lineSpacingType": "Multiple",
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
                "fontFamily": "Calibri Light",
                "fontColor": "#1F3763FF",
                "fontFamilyBidi": "Calibri Light"
            },
            "paragraphFormat": {
                "beforeSpacing": 2,
                "lineSpacing": 1.0791666507720947,
                "lineSpacingType": "Multiple",
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
                "fontColor": "#2F5496FF",
                "italicBidi": true,
                "fontFamilyBidi": "Calibri Light"
            },
            "paragraphFormat": {
                "beforeSpacing": 2,
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
                "fontColor": "#2F5496FF",
                "fontFamilyBidi": "Calibri Light"
            },
            "paragraphFormat": {
                "beforeSpacing": 2,
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
                "fontColor": "#1F3763FF",
                "fontFamilyBidi": "Calibri Light"
            },
            "paragraphFormat": {
                "beforeSpacing": 2,
                "lineSpacing": 1.0791666507720947,
                "lineSpacingType": "Multiple",
                "outlineLevel": "Level6"
            }
        },
        {
            "type": "Character",
            "name": "Default Paragraph Font",
            "characterFormat": {
                "fontColor": "empty"
            }
        },
        {
            "type": "Character",
            "name": "Heading 1 Char",
            "basedOn": "Default Paragraph Font",
            "characterFormat": {
                "fontSize": 16,
                "fontFamily": "Calibri Light",
                "fontColor": "#2F5496FF",
                "fontSizeBidi": 16,
                "fontFamilyBidi": "Calibri Light"
            }
        },
        {
            "type": "Character",
            "name": "Heading 2 Char",
            "basedOn": "Default Paragraph Font",
            "characterFormat": {
                "fontSize": 13,
                "fontFamily": "Calibri Light",
                "fontColor": "#2F5496FF",
                "fontSizeBidi": 13,
                "fontFamilyBidi": "Calibri Light"
            }
        },
        {
            "type": "Character",
            "name": "Heading 3 Char",
            "basedOn": "Default Paragraph Font",
            "characterFormat": {
                "fontSize": 12,
                "fontFamily": "Calibri Light",
                "fontColor": "#1F3763FF",
                "fontSizeBidi": 12,
                "fontFamilyBidi": "Calibri Light"
            }
        },
        {
            "type": "Character",
            "name": "Heading 4 Char",
            "basedOn": "Default Paragraph Font",
            "characterFormat": {
                "italic": true,
                "fontFamily": "Calibri Light",
                "fontColor": "#2F5496FF",
                "italicBidi": true,
                "fontFamilyBidi": "Calibri Light"
            }
        },
        {
            "type": "Character",
            "name": "Heading 5 Char",
            "basedOn": "Default Paragraph Font",
            "characterFormat": {
                "fontFamily": "Calibri Light",
                "fontColor": "#2F5496FF",
                "fontFamilyBidi": "Calibri Light"
            }
        },
        {
            "type": "Character",
            "name": "Heading 6 Char",
            "basedOn": "Default Paragraph Font",
            "characterFormat": {
                "fontFamily": "Calibri Light",
                "fontColor": "#1F3763FF",
                "fontFamilyBidi": "Calibri Light"
            }
        },
        {
            "type": "Paragraph",
            "name": "Notes",
            "basedOn": "Normal",
            "next": "Normal",
            "characterFormat": {
                "bold": true,
                "fontColor": "empty",
                "boldBidi": true
            },
            "paragraphFormat": {
                "afterSpacing": 6
            }
        },
        {
            "type": "Paragraph",
            "name": "Header",
            "basedOn": "Normal",
            "next": "Header",
            "link": "Header Char",
            "characterFormat": {
                "fontColor": "empty",
                "fontSizeBidi": 15,
                "fontFamilyBidi": "Angsana New"
            },
            "paragraphFormat": {
                "tabs": [
                    {
                        "tabJustification": "Center",
                        "position": 234,
                        "tabLeader": "None",
                        "deletePosition": 0
                    },
                    {
                        "tabJustification": "Right",
                        "position": 468,
                        "tabLeader": "None",
                        "deletePosition": 0
                    }
                ]
            }
        },
        {
            "type": "Character",
            "name": "Header Char",
            "basedOn": "Default Paragraph Font",
            "characterFormat": {
                "fontSize": 12,
                "fontFamily": "Times New Roman",
                "fontColor": "empty",
                "fontSizeBidi": 15,
                "fontFamilyBidi": "Angsana New"
            }
        },
        {
            "type": "Paragraph",
            "name": "Footer",
            "basedOn": "Normal",
            "next": "Footer",
            "link": "Footer Char",
            "characterFormat": {
                "fontColor": "empty",
                "fontSizeBidi": 15,
                "fontFamilyBidi": "Angsana New"
            },
            "paragraphFormat": {
                "tabs": [
                    {
                        "tabJustification": "Center",
                        "position": 234,
                        "tabLeader": "None",
                        "deletePosition": 0
                    },
                    {
                        "tabJustification": "Right",
                        "position": 468,
                        "tabLeader": "None",
                        "deletePosition": 0
                    }
                ]
            }
        },
        {
            "type": "Character",
            "name": "Footer Char",
            "basedOn": "Default Paragraph Font",
            "characterFormat": {
                "fontSize": 12,
                "fontFamily": "Times New Roman",
                "fontColor": "empty",
                "fontSizeBidi": 15,
                "fontFamilyBidi": "Angsana New"
            }
        }
    ],
    "defaultTabWidth": 36,
    "formatting": false,
    "trackChanges": false,
    "protectionType": "NoProtection",
    "enforcement": false,
    "dontUseHTMLParagraphAutoSpacing": false,
    "alignTablesRowByRow": false,
    "formFieldShading": true,
    "footnotes": {
        "separator": [
            {
                "characterFormat": {
                    "fontColor": "empty"
                },
                "paragraphFormat": {
                    "styleName": "Normal"
                },
                "inlines": [
                    {
                        "text": "\u0003",
                        "characterFormat": {
                            "fontColor": "empty"
                        }
                    }
                ]
            }
        ],
        "continuationSeparator": [
            {
                "characterFormat": {
                    "fontColor": "empty"
                },
                "paragraphFormat": {
                    "styleName": "Normal"
                },
                "inlines": [
                    {
                        "text": "\u0004",
                        "characterFormat": {
                            "fontColor": "empty"
                        }
                    }
                ]
            }
        ],
        "continuationNotice": [
            {
                "inlines": []
            }
        ]
    },
    "endnotes": {
        "separator": [
            {
                "characterFormat": {
                    "fontColor": "empty"
                },
                "paragraphFormat": {
                    "styleName": "Normal"
                },
                "inlines": [
                    {
                        "text": "\u0003",
                        "characterFormat": {
                            "fontColor": "empty"
                        }
                    }
                ]
            }
        ],
        "continuationSeparator": [
            {
                "characterFormat": {
                    "fontColor": "empty"
                },
                "paragraphFormat": {
                    "styleName": "Normal"
                },
                "inlines": [
                    {
                        "text": "\u0004",
                        "characterFormat": {
                            "fontColor": "empty"
                        }
                    }
                ]
            }
        ],
        "continuationNotice": [
            {
                "inlines": []
            }
        ]
    },
    "compatibilityMode": 3
};
  var waitingPopUp = document.getElementById("waiting-popup");
  container.documentEditor.open(JSON.stringify(defaultDocument));
  container.documentEditor.documentName = "Paragraph Formatting";
  // TitleBar sample starts
  titleBarDiv = document.getElementById("documenteditor_titlebar");
  initializeTitleBar(true);
  updateDocumentTitle();
  wireEventsInTitleBar();
  container.documentChange = function() {
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
    documentTitle = ej.base.createElement("label", {
      id: "documenteditor_title_name",
      styles:
        "text-transform:capitalize;font-weight:400;text-overflow:ellipsis;white-space:pre;overflow:hidden;user-select:none;cursor:text"
    });
    documentTitleContentEditor = ej.base.createElement("div", {
      id: "documenteditor_title_contentEditor",
      className: "single-line"
    });
    documentTitleContentEditor.appendChild(documentTitle);
    titleBarDiv.appendChild(documentTitleContentEditor);
    documentTitleContentEditor.setAttribute(
      "title",
      "Document Name. Click or tap to rename this document."
    );
    var btnStyles =
      "float:right;background: transparent;box-shadow:none; font-family: inherit;border-color: transparent;" +
      "border-radius: 2px;color:inherit;font-size:12px;text-transform:capitalize;margin-top:4px;height:28px;font-weight:400";
    print = addButton(
      "e-de-icon-Print e-de-padding-right",
      "Print",
      btnStyles,
      "de-print",
      "Print this document (Ctrl+P).",
      false
    );
    openBtn = addButton(
      "e-de-icon-Open e-de-padding-right",
      "open",
      btnStyles,
      "de-open",
      "Open",
      false
    );
    var items = [
      { text: "Microsoft Word (.docx)", id: "word" },
      { text: "Syncfusion Document Text (.sfdt)", id: "sfdt" }
    ];
    download = addButton(
      "e-de-icon-Download e-de-padding-right",
      "Download",
      btnStyles,
      "documenteditor-share",
      "Download this document.",
      true,
      items
    );
    if (!isShareNeeded) {
      download.element.style.display = "none";
    } else {
      openBtn.element.style.display = "none";
    }
  }
  function wireEventsInTitleBar() {
    print.element.addEventListener("click", onPrint);
    openBtn.element.addEventListener("click", function(e) {
      if (e.target.id === "de-open") {
        var fileUpload = document.getElementById("uploadfileButton");
        fileUpload.value = "";
        fileUpload.click();
      }
    });
    documentTitleContentEditor.addEventListener("keydown", function(e) {
      if (e.keyCode === 13) {
        e.preventDefault();
        documentTitleContentEditor.contentEditable = "false";
        if (documentTitleContentEditor.textContent === "") {
          documentTitleContentEditor.textContent = "Document1";
        }
      }
    });
    documentTitleContentEditor.addEventListener("blur", function() {
      if (documentTitleContentEditor.textContent === "") {
        documentTitleContentEditor.textContent = "Document1";
      }
      documentTitleContentEditor.contentEditable = "false";
      container.documentEditor.documentName = documentTitle.textContent;
    });
    documentTitleContentEditor.addEventListener("click", function() {
      updateDocumentEditorTitle();
    });
  }
  function updateDocumentEditorTitle() {
    documentTitleContentEditor.contentEditable = "true";
    documentTitleContentEditor.focus();
    window.getSelection().selectAllChildren(documentTitleContentEditor);
  }
  function updateDocumentTitle() {
    if (container.documentEditor.documentName === "") {
      container.documentEditor.documentName = "Untitled";
    }
    documentTitle.textContent = container.documentEditor.documentName;
  }
  function onPrint() {
    container.documentEditor.print();
  }
  function onExportClick(args) {
    var value = args.item.id;
    switch (value) {
      case "word":
        save("Docx");
        break;
      case "sfdt":
        save("Sfdt");
        break;
    }
  }
  function save(format) {
    container.documentEditor.save(
      container.documentEditor.documentName === ""
        ? "sample"
        : container.documentEditor.documentName,
      format
    );
  }
  function setTooltipForPopup() {
    document
      .getElementById("documenteditor-share-popup")
      .querySelectorAll("li")[0]
      .setAttribute(
        "title",
        "Download a copy of this document to your computer as a DOCX file."
      );
    document
      .getElementById("documenteditor-share-popup")
      .querySelectorAll("li")[1]
      .setAttribute(
        "title",
        "Download a copy of this document to your computer as an SFDT file."
      );
  }
  function addButton(
    iconClass,
    btnText,
    styles,
    id,
    tooltipText,
    isDropDown,
    items
  ) {
    var button = ej.base.createElement("button", { id: id, styles: styles });
    titleBarDiv.appendChild(button);
    button.setAttribute("title", tooltipText);
    if (isDropDown) {
      var dropButton = new ej.splitbuttons.DropDownButton(
        {
          select: onExportClick,
          items: items,
          iconCss: iconClass,
          cssClass: "e-caret-hide",
          content: btnText,
          open: function() {
            setTooltipForPopup();
          }
        },
        button
      );
      return dropButton;
    } else {
      var ejButton = new ej.buttons.Button(
        { iconCss: iconClass, content: btnText },
        button
      );
      return ejButton;
    }
  }

