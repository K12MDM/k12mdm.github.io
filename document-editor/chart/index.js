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
                "sectionFormat": {
                    "pageWidth": 612,
                    "pageHeight": 792,
                    "leftMargin": 72,
                    "rightMargin": 72,
                    "topMargin": 72,
                    "bottomMargin": 72,
                    "differentFirstPage": false,
                    "differentOddAndEvenPages": false,
                    "headerDistance": 36,
                    "footerDistance": 36,
                    "bidi": false
                },
                "blocks": [
                    {
                        "paragraphFormat": {
                            "textAlignment": "Center",
                            "afterSpacing": 0,
                            "lineSpacing": 1,
                            "lineSpacingType": "Multiple",
                            "styleName": "Normal",
                            "listFormat": {}
                        },
                        "characterFormat": {
                            "bold": true,
                            "fontSize": 12,
                            "fontFamily": "Verdana",
                            "fontSizeBidi": 12,
                            "fontFamilyBidi": "Verdana"
                        },
                        "inlines": [
                            {
                                "characterFormat": {
                                    "bold": true,
                                    "fontSize": 14,
                                    "fontFamily": "Verdana",
                                    "fontColor": "#17365DFF",
                                    "styleName": "a",
                                    "fontSizeBidi": 14,
                                    "fontFamilyBidi": "Verdana"
                                },
                                "text": "Northwind Management Report"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "afterSpacing": 0,
                            "lineSpacing": 1,
                            "lineSpacingType": "Multiple",
                            "styleName": "Normal",
                            "listFormat": {}
                        },
                        "characterFormat": {
                            "fontSize": 10,
                            "fontFamily": "Verdana",
                            "fontSizeBidi": 10,
                            "fontFamilyBidi": "Verdana"
                        },
                        "inlines": []
                    },
                    {
                        "paragraphFormat": {
                            "afterSpacing": 0,
                            "styleName": "Normal",
                            "listFormat": {}
                        },
                        "characterFormat": {},
                        "inlines": [
                            {
                                "characterFormat": {
                                    "fontSize": 10,
                                    "fontFamily": "Verdana",
                                    "styleName": "a",
                                    "fontSizeBidi": 10,
                                    "fontFamilyBidi": "Verdana"
                                },
                                "text": "This management report provides information obtained through data analysis, regarding the "
                            },
                            {
                                "characterFormat": {
                                    "fontSize": 10,
                                    "fontFamily": "Verdana",
                                    "styleName": "a",
                                    "fontSizeBidi": 10,
                                    "fontFamilyBidi": "Verdana"
                                },
                                "text": "performance of Northwind Traders. This report will pay particular"
                            },
                            {
                                "characterFormat": {
                                    "fontSize": 10,
                                    "fontFamily": "Verdana",
                                    "styleName": "a",
                                    "fontSizeBidi": 10,
                                    "fontFamilyBidi": "Verdana"
                                },
                                "text": " "
                            },
                            {
                                "characterFormat": {
                                    "fontSize": 10,
                                    "fontFamily": "Verdana",
                                    "styleName": "a",
                                    "fontSizeBidi": 10,
                                    "fontFamilyBidi": "Verdana"
                                },
                                "text": " attention to the "
                            },
                            {
                                "characterFormat": {
                                    "fontSize": 10,
                                    "fontFamily": "Verdana",
                                    "styleName": "a",
                                    "fontSizeBidi": 10,
                                    "fontFamilyBidi": "Verdana"
                                },
                                "text": "best-selling products, of our company. "
                            },
                            {
                                "characterFormat": {
                                    "fontSize": 10,
                                    "fontFamily": "Verdana",
                                    "fontSizeBidi": 10,
                                    "fontFamilyBidi": "Times New Roman"
                                },
                                "text": "The best-selling products of Northwind Traders "
                            },
                            {
                                "characterFormat": {
                                    "fontSize": 10,
                                    "fontFamily": "Verdana",
                                    "fontSizeBidi": 10,
                                    "fontFamilyBidi": "Times New Roman"
                                },
                                "text": "Company as follows: "
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "afterSpacing": 0,
                            "styleName": "Normal",
                            "listFormat": {}
                        },
                        "characterFormat": {},
                        "inlines": []
                    },
                    {
                        "rows": [
                            {
                                "cells": [
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "rightIndent": 26.850000381469727,
                                                    "styleName": "Normal",
                                                    "listFormat": {}
                                                },
                                                "characterFormat": {},
                                                "inlines": [
                                                    {
                                                        "characterFormat": {
                                                            "fontSize": 10,
                                                            "fontFamily": "Verdana",
                                                            "fontSizeBidi": 10,
                                                            "fontFamilyBidi": "Times New Roman"
                                                        },
                                                        "text": "S.No"
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "borders": {
                                                "top": {
                                                    "color": "#4472C4FF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "left": {
                                                    "color": "#4472C4FF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "right": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "bottom": {
                                                    "color": "#4472C4FF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalDown": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalUp": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "horizontal": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "vertical": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                }
                                            },
                                            "shading": {
                                                "backgroundColor": "#4472C4FF",
                                                "foregroundColor": "empty",
                                                "textureStyle": "TextureNone"
                                            },
                                            "preferredWidth": 13.420000076293945,
                                            "preferredWidthType": "Percent",
                                            "cellWidth": 64.71214527422465,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "verticalAlignment": "Top"
                                        },
                                        "columnIndex": 0
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal",
                                                    "listFormat": {}
                                                },
                                                "characterFormat": {},
                                                "inlines": [
                                                    {
                                                        "characterFormat": {
                                                            "fontSize": 10,
                                                            "fontFamily": "Verdana",
                                                            "fontSizeBidi": 10,
                                                            "fontFamilyBidi": "Times New Roman"
                                                        },
                                                        "text": "Product Name"
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "borders": {
                                                "top": {
                                                    "color": "#4472C4FF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "left": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "right": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "bottom": {
                                                    "color": "#4472C4FF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalDown": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalUp": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "horizontal": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "vertical": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                }
                                            },
                                            "shading": {
                                                "backgroundColor": "#4472C4FF",
                                                "foregroundColor": "empty",
                                                "textureStyle": "TextureNone"
                                            },
                                            "preferredWidth": 48.86000061035156,
                                            "preferredWidthType": "Percent",
                                            "cellWidth": 292.87942351880633,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "verticalAlignment": "Top"
                                        },
                                        "columnIndex": 1
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal",
                                                    "listFormat": {}
                                                },
                                                "characterFormat": {},
                                                "inlines": [
                                                    {
                                                        "characterFormat": {
                                                            "fontSize": 10,
                                                            "fontFamily": "Verdana",
                                                            "fontSizeBidi": 10,
                                                            "fontFamilyBidi": "Times New Roman"
                                                        },
                                                        "text": "Sum of Sales(in $)"
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "borders": {
                                                "top": {
                                                    "color": "#4472C4FF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "left": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "right": {
                                                    "color": "#4472C4FF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "bottom": {
                                                    "color": "#4472C4FF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalDown": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalUp": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "horizontal": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "vertical": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                }
                                            },
                                            "shading": {
                                                "backgroundColor": "#4472C4FF",
                                                "foregroundColor": "empty",
                                                "textureStyle": "TextureNone"
                                            },
                                            "preferredWidth": 37.720001220703125,
                                            "preferredWidthType": "Percent",
                                            "cellWidth": 117.95841899993776,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "verticalAlignment": "Top"
                                        },
                                        "columnIndex": 2
                                    }
                                ],
                                "rowFormat": {
                                    "height": 14.399999618530273,
                                    "allowBreakAcrossPages": true,
                                    "heightType": "Exactly",
                                    "isHeader": false,
                                    "borders": {
                                        "top": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "left": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "right": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "bottom": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "diagonalDown": {
                                            "color": "#000000",
                                            "hasNoneStyle": false,
                                            "lineStyle": "None",
                                            "lineWidth": 0,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "diagonalUp": {
                                            "color": "#000000",
                                            "hasNoneStyle": false,
                                            "lineStyle": "None",
                                            "lineWidth": 0,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "horizontal": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "vertical": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        }
                                    },
                                    "gridBefore": 0,
                                    "gridBeforeWidth": 0,
                                    "gridBeforeWidthType": "Point",
                                    "gridAfter": 0,
                                    "gridAfterWidth": 0,
                                    "gridAfterWidthType": "Point"
                                }
                            },
                            {
                                "cells": [
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal",
                                                    "listFormat": {}
                                                },
                                                "characterFormat": {},
                                                "inlines": [
                                                    {
                                                        "characterFormat": {
                                                            "fontSize": 10,
                                                            "fontFamily": "Verdana",
                                                            "fontSizeBidi": 10,
                                                            "fontFamilyBidi": "Times New Roman"
                                                        },
                                                        "text": "1"
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "borders": {
                                                "top": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "left": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "right": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "bottom": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalDown": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalUp": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "horizontal": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "vertical": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                }
                                            },
                                            "shading": {
                                                "backgroundColor": "#D9E2F3FF",
                                                "foregroundColor": "empty",
                                                "textureStyle": "TextureNone"
                                            },
                                            "preferredWidth": 13.420000076293945,
                                            "preferredWidthType": "Percent",
                                            "cellWidth": 64.71214527422465,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "verticalAlignment": "Top"
                                        },
                                        "columnIndex": 0
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal",
                                                    "listFormat": {}
                                                },
                                                "characterFormat": {},
                                                "inlines": [
                                                    {
                                                        "characterFormat": {
                                                            "fontSize": 10,
                                                            "fontFamily": "Verdana",
                                                            "fontSizeBidi": 10,
                                                            "fontFamilyBidi": "Times New Roman"
                                                        },
                                                        "text": "Côte de Blaye"
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "borders": {
                                                "top": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "left": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "right": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "bottom": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalDown": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalUp": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "horizontal": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "vertical": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                }
                                            },
                                            "shading": {
                                                "backgroundColor": "#D9E2F3FF",
                                                "foregroundColor": "empty",
                                                "textureStyle": "TextureNone"
                                            },
                                            "preferredWidth": 48.86000061035156,
                                            "preferredWidthType": "Percent",
                                            "cellWidth": 292.87942351880633,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "verticalAlignment": "Top"
                                        },
                                        "columnIndex": 1
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal",
                                                    "listFormat": {}
                                                },
                                                "characterFormat": {},
                                                "inlines": [
                                                    {
                                                        "characterFormat": {
                                                            "fontSize": 10,
                                                            "fontFamily": "Verdana",
                                                            "fontSizeBidi": 10,
                                                            "fontFamilyBidi": "Times New Roman"
                                                        },
                                                        "text": "141.396"
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "borders": {
                                                "top": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "left": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "right": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "bottom": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalDown": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalUp": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "horizontal": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "vertical": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                }
                                            },
                                            "shading": {
                                                "backgroundColor": "#D9E2F3FF",
                                                "foregroundColor": "empty",
                                                "textureStyle": "TextureNone"
                                            },
                                            "preferredWidth": 37.720001220703125,
                                            "preferredWidthType": "Percent",
                                            "cellWidth": 117.95841899993776,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "verticalAlignment": "Top"
                                        },
                                        "columnIndex": 2
                                    }
                                ],
                                "rowFormat": {
                                    "height": 14.399999618530273,
                                    "allowBreakAcrossPages": true,
                                    "heightType": "Exactly",
                                    "isHeader": false,
                                    "borders": {
                                        "top": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "left": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "right": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "bottom": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "diagonalDown": {
                                            "color": "#000000",
                                            "hasNoneStyle": false,
                                            "lineStyle": "None",
                                            "lineWidth": 0,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "diagonalUp": {
                                            "color": "#000000",
                                            "hasNoneStyle": false,
                                            "lineStyle": "None",
                                            "lineWidth": 0,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "horizontal": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "vertical": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        }
                                    },
                                    "gridBefore": 0,
                                    "gridBeforeWidth": 0,
                                    "gridBeforeWidthType": "Point",
                                    "gridAfter": 0,
                                    "gridAfterWidth": 0,
                                    "gridAfterWidthType": "Point"
                                }
                            },
                            {
                                "cells": [
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal",
                                                    "listFormat": {}
                                                },
                                                "characterFormat": {},
                                                "inlines": [
                                                    {
                                                        "characterFormat": {
                                                            "fontSize": 10,
                                                            "fontFamily": "Verdana",
                                                            "fontSizeBidi": 10,
                                                            "fontFamilyBidi": "Times New Roman"
                                                        },
                                                        "text": "2"
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "borders": {
                                                "top": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "left": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "right": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "bottom": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalDown": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalUp": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "horizontal": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "vertical": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                }
                                            },
                                            "shading": {
                                                "backgroundColor": "#FFFFFFFF",
                                                "foregroundColor": "empty",
                                                "textureStyle": "TextureNone"
                                            },
                                            "preferredWidth": 13.420000076293945,
                                            "preferredWidthType": "Percent",
                                            "cellWidth": 64.71214527422465,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "verticalAlignment": "Top"
                                        },
                                        "columnIndex": 0
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal",
                                                    "listFormat": {}
                                                },
                                                "characterFormat": {},
                                                "inlines": [
                                                    {
                                                        "characterFormat": {
                                                            "fontSize": 10,
                                                            "fontFamily": "Verdana",
                                                            "fontSizeBidi": 10,
                                                            "fontFamilyBidi": "Times New Roman"
                                                        },
                                                        "text": "Thüringer Rostbratwurst"
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "borders": {
                                                "top": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "left": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "right": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "bottom": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalDown": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalUp": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "horizontal": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "vertical": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                }
                                            },
                                            "shading": {
                                                "backgroundColor": "#FFFFFFFF",
                                                "foregroundColor": "empty",
                                                "textureStyle": "TextureNone"
                                            },
                                            "preferredWidth": 48.86000061035156,
                                            "preferredWidthType": "Percent",
                                            "cellWidth": 292.87942351880633,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "verticalAlignment": "Top"
                                        },
                                        "columnIndex": 1
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal",
                                                    "listFormat": {}
                                                },
                                                "characterFormat": {},
                                                "inlines": [
                                                    {
                                                        "characterFormat": {
                                                            "fontSize": 10,
                                                            "fontFamily": "Verdana",
                                                            "fontSizeBidi": 10,
                                                            "fontFamilyBidi": "Times New Roman"
                                                        },
                                                        "text": "80.368"
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "borders": {
                                                "top": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "left": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "right": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "bottom": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalDown": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalUp": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "horizontal": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "vertical": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                }
                                            },
                                            "shading": {
                                                "backgroundColor": "#FFFFFFFF",
                                                "foregroundColor": "empty",
                                                "textureStyle": "TextureNone"
                                            },
                                            "preferredWidth": 37.720001220703125,
                                            "preferredWidthType": "Percent",
                                            "cellWidth": 117.95841899993776,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "verticalAlignment": "Top"
                                        },
                                        "columnIndex": 2
                                    }
                                ],
                                "rowFormat": {
                                    "height": 14.399999618530273,
                                    "allowBreakAcrossPages": true,
                                    "heightType": "Exactly",
                                    "isHeader": false,
                                    "borders": {
                                        "top": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "left": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "right": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "bottom": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "diagonalDown": {
                                            "color": "#000000",
                                            "hasNoneStyle": false,
                                            "lineStyle": "None",
                                            "lineWidth": 0,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "diagonalUp": {
                                            "color": "#000000",
                                            "hasNoneStyle": false,
                                            "lineStyle": "None",
                                            "lineWidth": 0,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "horizontal": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "vertical": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        }
                                    },
                                    "gridBefore": 0,
                                    "gridBeforeWidth": 0,
                                    "gridBeforeWidthType": "Point",
                                    "gridAfter": 0,
                                    "gridAfterWidth": 0,
                                    "gridAfterWidthType": "Point"
                                }
                            },
                            {
                                "cells": [
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal",
                                                    "listFormat": {}
                                                },
                                                "characterFormat": {},
                                                "inlines": [
                                                    {
                                                        "characterFormat": {
                                                            "fontSize": 10,
                                                            "fontFamily": "Verdana",
                                                            "fontSizeBidi": 10,
                                                            "fontFamilyBidi": "Times New Roman"
                                                        },
                                                        "text": "3"
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "borders": {
                                                "top": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "left": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "right": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "bottom": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalDown": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalUp": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "horizontal": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "vertical": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                }
                                            },
                                            "shading": {
                                                "backgroundColor": "#D9E2F3FF",
                                                "foregroundColor": "empty",
                                                "textureStyle": "TextureNone"
                                            },
                                            "preferredWidth": 13.420000076293945,
                                            "preferredWidthType": "Percent",
                                            "cellWidth": 64.71214527422465,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "verticalAlignment": "Top"
                                        },
                                        "columnIndex": 0
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal",
                                                    "listFormat": {}
                                                },
                                                "characterFormat": {},
                                                "inlines": [
                                                    {
                                                        "characterFormat": {
                                                            "fontSize": 10,
                                                            "fontFamily": "Verdana",
                                                            "fontSizeBidi": 10,
                                                            "fontFamilyBidi": "Times New Roman"
                                                        },
                                                        "text": "Raclette Courdavault"
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "borders": {
                                                "top": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "left": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "right": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "bottom": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalDown": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalUp": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "horizontal": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "vertical": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                }
                                            },
                                            "shading": {
                                                "backgroundColor": "#D9E2F3FF",
                                                "foregroundColor": "empty",
                                                "textureStyle": "TextureNone"
                                            },
                                            "preferredWidth": 48.86000061035156,
                                            "preferredWidthType": "Percent",
                                            "cellWidth": 292.87942351880633,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "verticalAlignment": "Top"
                                        },
                                        "columnIndex": 1
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal",
                                                    "listFormat": {}
                                                },
                                                "characterFormat": {},
                                                "inlines": [
                                                    {
                                                        "characterFormat": {
                                                            "fontSize": 10,
                                                            "fontFamily": "Verdana",
                                                            "fontSizeBidi": 10,
                                                            "fontFamilyBidi": "Times New Roman"
                                                        },
                                                        "text": "71.155"
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "borders": {
                                                "top": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "left": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "right": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "bottom": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalDown": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalUp": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "horizontal": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "vertical": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                }
                                            },
                                            "shading": {
                                                "backgroundColor": "#D9E2F3FF",
                                                "foregroundColor": "empty",
                                                "textureStyle": "TextureNone"
                                            },
                                            "preferredWidth": 37.720001220703125,
                                            "preferredWidthType": "Percent",
                                            "cellWidth": 117.95841899993776,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "verticalAlignment": "Top"
                                        },
                                        "columnIndex": 2
                                    }
                                ],
                                "rowFormat": {
                                    "height": 14.399999618530273,
                                    "allowBreakAcrossPages": true,
                                    "heightType": "Exactly",
                                    "isHeader": false,
                                    "borders": {
                                        "top": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "left": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "right": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "bottom": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "diagonalDown": {
                                            "color": "#000000",
                                            "hasNoneStyle": false,
                                            "lineStyle": "None",
                                            "lineWidth": 0,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "diagonalUp": {
                                            "color": "#000000",
                                            "hasNoneStyle": false,
                                            "lineStyle": "None",
                                            "lineWidth": 0,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "horizontal": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "vertical": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        }
                                    },
                                    "gridBefore": 0,
                                    "gridBeforeWidth": 0,
                                    "gridBeforeWidthType": "Point",
                                    "gridAfter": 0,
                                    "gridAfterWidth": 0,
                                    "gridAfterWidthType": "Point"
                                }
                            },
                            {
                                "cells": [
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal",
                                                    "listFormat": {}
                                                },
                                                "characterFormat": {},
                                                "inlines": [
                                                    {
                                                        "characterFormat": {
                                                            "fontSize": 10,
                                                            "fontFamily": "Verdana",
                                                            "fontSizeBidi": 10,
                                                            "fontFamilyBidi": "Times New Roman"
                                                        },
                                                        "text": "4"
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "borders": {
                                                "top": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "left": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "right": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "bottom": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalDown": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalUp": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "horizontal": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "vertical": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                }
                                            },
                                            "shading": {
                                                "backgroundColor": "#FFFFFFFF",
                                                "foregroundColor": "empty",
                                                "textureStyle": "TextureNone"
                                            },
                                            "preferredWidth": 13.420000076293945,
                                            "preferredWidthType": "Percent",
                                            "cellWidth": 64.71214527422465,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "verticalAlignment": "Top"
                                        },
                                        "columnIndex": 0
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal",
                                                    "listFormat": {}
                                                },
                                                "characterFormat": {},
                                                "inlines": [
                                                    {
                                                        "characterFormat": {
                                                            "fontSize": 10,
                                                            "fontFamily": "Verdana",
                                                            "fontSizeBidi": 10,
                                                            "fontFamilyBidi": "Times New Roman"
                                                        },
                                                        "text": "Tarte au sucre "
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "borders": {
                                                "top": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "left": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "right": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "bottom": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalDown": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalUp": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "horizontal": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "vertical": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                }
                                            },
                                            "shading": {
                                                "backgroundColor": "#FFFFFFFF",
                                                "foregroundColor": "empty",
                                                "textureStyle": "TextureNone"
                                            },
                                            "preferredWidth": 48.86000061035156,
                                            "preferredWidthType": "Percent",
                                            "cellWidth": 292.87942351880633,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "verticalAlignment": "Top"
                                        },
                                        "columnIndex": 1
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal",
                                                    "listFormat": {}
                                                },
                                                "characterFormat": {},
                                                "inlines": [
                                                    {
                                                        "characterFormat": {
                                                            "fontSize": 10,
                                                            "fontFamily": "Verdana",
                                                            "fontSizeBidi": 10,
                                                            "fontFamilyBidi": "Times New Roman"
                                                        },
                                                        "text": "47.234"
                                                    },
                                                    {
                                                        "characterFormat": {},
                                                        "bookmarkType": 1,
                                                        "name": "_GoBack"
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "borders": {
                                                "top": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "left": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "right": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "bottom": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalDown": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalUp": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "horizontal": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "vertical": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                }
                                            },
                                            "shading": {
                                                "backgroundColor": "#FFFFFFFF",
                                                "foregroundColor": "empty",
                                                "textureStyle": "TextureNone"
                                            },
                                            "preferredWidth": 37.720001220703125,
                                            "preferredWidthType": "Percent",
                                            "cellWidth": 117.95841899993776,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "verticalAlignment": "Top"
                                        },
                                        "columnIndex": 2
                                    }
                                ],
                                "rowFormat": {
                                    "height": 14.399999618530273,
                                    "allowBreakAcrossPages": true,
                                    "heightType": "Exactly",
                                    "isHeader": false,
                                    "borders": {
                                        "top": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "left": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "right": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "bottom": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "diagonalDown": {
                                            "color": "#000000",
                                            "hasNoneStyle": false,
                                            "lineStyle": "None",
                                            "lineWidth": 0,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "diagonalUp": {
                                            "color": "#000000",
                                            "hasNoneStyle": false,
                                            "lineStyle": "None",
                                            "lineWidth": 0,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "horizontal": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "vertical": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        }
                                    },
                                    "gridBefore": 0,
                                    "gridBeforeWidth": 0,
                                    "gridBeforeWidthType": "Point",
                                    "gridAfter": 0,
                                    "gridAfterWidth": 0,
                                    "gridAfterWidthType": "Point"
                                }
                            },
                            {
                                "cells": [
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal",
                                                    "listFormat": {}
                                                },
                                                "characterFormat": {},
                                                "inlines": [
                                                    {
                                                        "characterFormat": {},
                                                        "bookmarkType": 0,
                                                        "name": "_GoBack"
                                                    },
                                                    {
                                                        "characterFormat": {
                                                            "fontSize": 10,
                                                            "fontFamily": "Verdana",
                                                            "fontSizeBidi": 10,
                                                            "fontFamilyBidi": "Times New Roman"
                                                        },
                                                        "text": "5"
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "borders": {
                                                "top": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "left": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "right": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "bottom": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalDown": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalUp": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "horizontal": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "vertical": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                }
                                            },
                                            "shading": {
                                                "backgroundColor": "#D9E2F3FF",
                                                "foregroundColor": "empty",
                                                "textureStyle": "TextureNone"
                                            },
                                            "preferredWidth": 13.420000076293945,
                                            "preferredWidthType": "Percent",
                                            "cellWidth": 64.71214527422465,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "verticalAlignment": "Top"
                                        },
                                        "columnIndex": 0
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal",
                                                    "listFormat": {}
                                                },
                                                "characterFormat": {},
                                                "inlines": [
                                                    {
                                                        "characterFormat": {
                                                            "fontSize": 10,
                                                            "fontFamily": "Verdana",
                                                            "fontSizeBidi": 10,
                                                            "fontFamilyBidi": "Times New Roman"
                                                        },
                                                        "text": "Camembert Pierrot "
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "borders": {
                                                "top": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "left": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "right": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "bottom": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalDown": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalUp": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "horizontal": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "vertical": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                }
                                            },
                                            "shading": {
                                                "backgroundColor": "#D9E2F3FF",
                                                "foregroundColor": "empty",
                                                "textureStyle": "TextureNone"
                                            },
                                            "preferredWidth": 48.86000061035156,
                                            "preferredWidthType": "Percent",
                                            "cellWidth": 292.87942351880633,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "verticalAlignment": "Top"
                                        },
                                        "columnIndex": 1
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal",
                                                    "listFormat": {}
                                                },
                                                "characterFormat": {},
                                                "inlines": [
                                                    {
                                                        "characterFormat": {
                                                            "fontSize": 10,
                                                            "fontFamily": "Verdana",
                                                            "fontSizeBidi": 10,
                                                            "fontFamilyBidi": "Times New Roman"
                                                        },
                                                        "text": "46.825"
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "borders": {
                                                "top": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "left": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "right": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "bottom": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalDown": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalUp": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "horizontal": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "vertical": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                }
                                            },
                                            "shading": {
                                                "backgroundColor": "#D9E2F3FF",
                                                "foregroundColor": "empty",
                                                "textureStyle": "TextureNone"
                                            },
                                            "preferredWidth": 37.720001220703125,
                                            "preferredWidthType": "Percent",
                                            "cellWidth": 117.95841899993776,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "verticalAlignment": "Top"
                                        },
                                        "columnIndex": 2
                                    }
                                ],
                                "rowFormat": {
                                    "height": 14.399999618530273,
                                    "allowBreakAcrossPages": true,
                                    "heightType": "Exactly",
                                    "isHeader": false,
                                    "borders": {
                                        "top": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "left": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "right": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "bottom": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "diagonalDown": {
                                            "color": "#000000",
                                            "hasNoneStyle": false,
                                            "lineStyle": "None",
                                            "lineWidth": 0,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "diagonalUp": {
                                            "color": "#000000",
                                            "hasNoneStyle": false,
                                            "lineStyle": "None",
                                            "lineWidth": 0,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "horizontal": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "vertical": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        }
                                    },
                                    "gridBefore": 0,
                                    "gridBeforeWidth": 0,
                                    "gridBeforeWidthType": "Point",
                                    "gridAfter": 0,
                                    "gridAfterWidth": 0,
                                    "gridAfterWidthType": "Point"
                                }
                            },
                            {
                                "cells": [
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal",
                                                    "listFormat": {}
                                                },
                                                "characterFormat": {},
                                                "inlines": [
                                                    {
                                                        "characterFormat": {
                                                            "fontSize": 10,
                                                            "fontFamily": "Verdana",
                                                            "fontSizeBidi": 10,
                                                            "fontFamilyBidi": "Times New Roman"
                                                        },
                                                        "text": "6"
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "borders": {
                                                "top": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "left": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "right": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "bottom": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalDown": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalUp": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "horizontal": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "vertical": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                }
                                            },
                                            "shading": {
                                                "backgroundColor": "#FFFFFFFF",
                                                "foregroundColor": "empty",
                                                "textureStyle": "TextureNone"
                                            },
                                            "preferredWidth": 13.420000076293945,
                                            "preferredWidthType": "Percent",
                                            "cellWidth": 64.71214527422465,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "verticalAlignment": "Top"
                                        },
                                        "columnIndex": 0
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal",
                                                    "listFormat": {}
                                                },
                                                "characterFormat": {},
                                                "inlines": [
                                                    {
                                                        "characterFormat": {
                                                            "fontSize": 10,
                                                            "fontFamily": "Verdana",
                                                            "fontSizeBidi": 10,
                                                            "fontFamilyBidi": "Times New Roman"
                                                        },
                                                        "text": "Gnocchi di nonna Alice"
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "borders": {
                                                "top": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "left": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "right": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "bottom": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalDown": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalUp": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "horizontal": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "vertical": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                }
                                            },
                                            "shading": {
                                                "backgroundColor": "#FFFFFFFF",
                                                "foregroundColor": "empty",
                                                "textureStyle": "TextureNone"
                                            },
                                            "preferredWidth": 48.86000061035156,
                                            "preferredWidthType": "Percent",
                                            "cellWidth": 292.87942351880633,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "verticalAlignment": "Top"
                                        },
                                        "columnIndex": 1
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal",
                                                    "listFormat": {}
                                                },
                                                "characterFormat": {},
                                                "inlines": [
                                                    {
                                                        "characterFormat": {
                                                            "fontSize": 10,
                                                            "fontFamily": "Verdana",
                                                            "fontSizeBidi": 10,
                                                            "fontFamilyBidi": "Times New Roman"
                                                        },
                                                        "text": "42.593"
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "borders": {
                                                "top": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "left": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "right": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "bottom": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalDown": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalUp": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "horizontal": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "vertical": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                }
                                            },
                                            "shading": {
                                                "backgroundColor": "#FFFFFFFF",
                                                "foregroundColor": "empty",
                                                "textureStyle": "TextureNone"
                                            },
                                            "preferredWidth": 37.720001220703125,
                                            "preferredWidthType": "Percent",
                                            "cellWidth": 117.95841899993776,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "verticalAlignment": "Top"
                                        },
                                        "columnIndex": 2
                                    }
                                ],
                                "rowFormat": {
                                    "height": 14.399999618530273,
                                    "allowBreakAcrossPages": true,
                                    "heightType": "Exactly",
                                    "isHeader": false,
                                    "borders": {
                                        "top": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "left": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "right": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "bottom": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "diagonalDown": {
                                            "color": "#000000",
                                            "hasNoneStyle": false,
                                            "lineStyle": "None",
                                            "lineWidth": 0,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "diagonalUp": {
                                            "color": "#000000",
                                            "hasNoneStyle": false,
                                            "lineStyle": "None",
                                            "lineWidth": 0,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "horizontal": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "vertical": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        }
                                    },
                                    "gridBefore": 0,
                                    "gridBeforeWidth": 0,
                                    "gridBeforeWidthType": "Point",
                                    "gridAfter": 0,
                                    "gridAfterWidth": 0,
                                    "gridAfterWidthType": "Point"
                                }
                            },
                            {
                                "cells": [
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal",
                                                    "listFormat": {}
                                                },
                                                "characterFormat": {},
                                                "inlines": [
                                                    {
                                                        "characterFormat": {
                                                            "fontSize": 10,
                                                            "fontFamily": "Verdana",
                                                            "fontSizeBidi": 10,
                                                            "fontFamilyBidi": "Times New Roman"
                                                        },
                                                        "text": "7"
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "borders": {
                                                "top": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "left": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "right": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "bottom": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalDown": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalUp": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "horizontal": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "vertical": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                }
                                            },
                                            "shading": {
                                                "backgroundColor": "#D9E2F3FF",
                                                "foregroundColor": "empty",
                                                "textureStyle": "TextureNone"
                                            },
                                            "preferredWidth": 13.420000076293945,
                                            "preferredWidthType": "Percent",
                                            "cellWidth": 64.71214527422465,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "verticalAlignment": "Top"
                                        },
                                        "columnIndex": 0
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal",
                                                    "listFormat": {}
                                                },
                                                "characterFormat": {},
                                                "inlines": [
                                                    {
                                                        "characterFormat": {
                                                            "fontSize": 10,
                                                            "fontFamily": "Verdana",
                                                            "fontSizeBidi": 10,
                                                            "fontFamilyBidi": "Times New Roman"
                                                        },
                                                        "text": "Manjimup Dried Apples"
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "borders": {
                                                "top": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "left": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "right": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "bottom": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalDown": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalUp": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "horizontal": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "vertical": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                }
                                            },
                                            "shading": {
                                                "backgroundColor": "#D9E2F3FF",
                                                "foregroundColor": "empty",
                                                "textureStyle": "TextureNone"
                                            },
                                            "preferredWidth": 48.86000061035156,
                                            "preferredWidthType": "Percent",
                                            "cellWidth": 292.87942351880633,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "verticalAlignment": "Top"
                                        },
                                        "columnIndex": 1
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal",
                                                    "listFormat": {}
                                                },
                                                "characterFormat": {},
                                                "inlines": [
                                                    {
                                                        "characterFormat": {
                                                            "fontSize": 10,
                                                            "fontFamily": "Verdana",
                                                            "fontSizeBidi": 10,
                                                            "fontFamilyBidi": "Times New Roman"
                                                        },
                                                        "text": "41.819"
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "borders": {
                                                "top": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "left": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "right": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "bottom": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalDown": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalUp": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "horizontal": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "vertical": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                }
                                            },
                                            "shading": {
                                                "backgroundColor": "#D9E2F3FF",
                                                "foregroundColor": "empty",
                                                "textureStyle": "TextureNone"
                                            },
                                            "preferredWidth": 37.720001220703125,
                                            "preferredWidthType": "Percent",
                                            "cellWidth": 117.95841899993776,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "verticalAlignment": "Top"
                                        },
                                        "columnIndex": 2
                                    }
                                ],
                                "rowFormat": {
                                    "height": 14.399999618530273,
                                    "allowBreakAcrossPages": true,
                                    "heightType": "Exactly",
                                    "isHeader": false,
                                    "borders": {
                                        "top": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "left": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "right": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "bottom": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "diagonalDown": {
                                            "color": "#000000",
                                            "hasNoneStyle": false,
                                            "lineStyle": "None",
                                            "lineWidth": 0,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "diagonalUp": {
                                            "color": "#000000",
                                            "hasNoneStyle": false,
                                            "lineStyle": "None",
                                            "lineWidth": 0,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "horizontal": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "vertical": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        }
                                    },
                                    "gridBefore": 0,
                                    "gridBeforeWidth": 0,
                                    "gridBeforeWidthType": "Point",
                                    "gridAfter": 0,
                                    "gridAfterWidth": 0,
                                    "gridAfterWidthType": "Point"
                                }
                            },
                            {
                                "cells": [
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal",
                                                    "listFormat": {}
                                                },
                                                "characterFormat": {},
                                                "inlines": [
                                                    {
                                                        "characterFormat": {
                                                            "fontSize": 10,
                                                            "fontFamily": "Verdana",
                                                            "fontSizeBidi": 10,
                                                            "fontFamilyBidi": "Times New Roman"
                                                        },
                                                        "text": "8"
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "borders": {
                                                "top": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "left": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "right": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "bottom": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalDown": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalUp": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "horizontal": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "vertical": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                }
                                            },
                                            "shading": {
                                                "backgroundColor": "#FFFFFFFF",
                                                "foregroundColor": "empty",
                                                "textureStyle": "TextureNone"
                                            },
                                            "preferredWidth": 13.420000076293945,
                                            "preferredWidthType": "Percent",
                                            "cellWidth": 64.71214527422465,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "verticalAlignment": "Top"
                                        },
                                        "columnIndex": 0
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal",
                                                    "listFormat": {}
                                                },
                                                "characterFormat": {},
                                                "inlines": [
                                                    {
                                                        "characterFormat": {
                                                            "fontSize": 10,
                                                            "fontFamily": "Verdana",
                                                            "fontSizeBidi": 10,
                                                            "fontFamilyBidi": "Times New Roman"
                                                        },
                                                        "text": "Alice Mutton"
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "borders": {
                                                "top": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "left": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "right": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "bottom": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalDown": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalUp": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "horizontal": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "vertical": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                }
                                            },
                                            "shading": {
                                                "backgroundColor": "#FFFFFFFF",
                                                "foregroundColor": "empty",
                                                "textureStyle": "TextureNone"
                                            },
                                            "preferredWidth": 48.86000061035156,
                                            "preferredWidthType": "Percent",
                                            "cellWidth": 292.87942351880633,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "verticalAlignment": "Top"
                                        },
                                        "columnIndex": 1
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal",
                                                    "listFormat": {}
                                                },
                                                "characterFormat": {},
                                                "inlines": [
                                                    {
                                                        "characterFormat": {
                                                            "fontSize": 10,
                                                            "fontFamily": "Verdana",
                                                            "fontSizeBidi": 10,
                                                            "fontFamilyBidi": "Times New Roman"
                                                        },
                                                        "text": "32.698"
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "borders": {
                                                "top": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "left": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "right": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "bottom": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalDown": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalUp": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "horizontal": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "vertical": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                }
                                            },
                                            "shading": {
                                                "backgroundColor": "#FFFFFFFF",
                                                "foregroundColor": "empty",
                                                "textureStyle": "TextureNone"
                                            },
                                            "preferredWidth": 37.720001220703125,
                                            "preferredWidthType": "Percent",
                                            "cellWidth": 117.95841899993776,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "verticalAlignment": "Top"
                                        },
                                        "columnIndex": 2
                                    }
                                ],
                                "rowFormat": {
                                    "height": 14.399999618530273,
                                    "allowBreakAcrossPages": true,
                                    "heightType": "Exactly",
                                    "isHeader": false,
                                    "borders": {
                                        "top": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "left": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "right": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "bottom": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "diagonalDown": {
                                            "color": "#000000",
                                            "hasNoneStyle": false,
                                            "lineStyle": "None",
                                            "lineWidth": 0,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "diagonalUp": {
                                            "color": "#000000",
                                            "hasNoneStyle": false,
                                            "lineStyle": "None",
                                            "lineWidth": 0,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "horizontal": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "vertical": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        }
                                    },
                                    "gridBefore": 0,
                                    "gridBeforeWidth": 0,
                                    "gridBeforeWidthType": "Point",
                                    "gridAfter": 0,
                                    "gridAfterWidth": 0,
                                    "gridAfterWidthType": "Point"
                                }
                            },
                            {
                                "cells": [
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal",
                                                    "listFormat": {}
                                                },
                                                "characterFormat": {},
                                                "inlines": [
                                                    {
                                                        "characterFormat": {
                                                            "fontSize": 10,
                                                            "fontFamily": "Verdana",
                                                            "fontSizeBidi": 10,
                                                            "fontFamilyBidi": "Times New Roman"
                                                        },
                                                        "text": "9"
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "borders": {
                                                "top": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "left": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "right": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "bottom": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalDown": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalUp": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "horizontal": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "vertical": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                }
                                            },
                                            "shading": {
                                                "backgroundColor": "#D9E2F3FF",
                                                "foregroundColor": "empty",
                                                "textureStyle": "TextureNone"
                                            },
                                            "preferredWidth": 13.420000076293945,
                                            "preferredWidthType": "Percent",
                                            "cellWidth": 64.71214527422465,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "verticalAlignment": "Top"
                                        },
                                        "columnIndex": 0
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal",
                                                    "listFormat": {}
                                                },
                                                "characterFormat": {},
                                                "inlines": [
                                                    {
                                                        "characterFormat": {
                                                            "fontSize": 10,
                                                            "fontFamily": "Verdana",
                                                            "fontSizeBidi": 10,
                                                            "fontFamilyBidi": "Times New Roman"
                                                        },
                                                        "text": "Carnarvon Tigers"
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "borders": {
                                                "top": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "left": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "right": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "bottom": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalDown": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalUp": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "horizontal": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "vertical": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                }
                                            },
                                            "shading": {
                                                "backgroundColor": "#D9E2F3FF",
                                                "foregroundColor": "empty",
                                                "textureStyle": "TextureNone"
                                            },
                                            "preferredWidth": 48.86000061035156,
                                            "preferredWidthType": "Percent",
                                            "cellWidth": 292.87942351880633,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "verticalAlignment": "Top"
                                        },
                                        "columnIndex": 1
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal",
                                                    "listFormat": {}
                                                },
                                                "characterFormat": {},
                                                "inlines": [
                                                    {
                                                        "characterFormat": {
                                                            "fontSize": 10,
                                                            "fontFamily": "Verdana",
                                                            "fontSizeBidi": 10,
                                                            "fontFamilyBidi": "Times New Roman"
                                                        },
                                                        "text": "29.171"
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "borders": {
                                                "top": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "left": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "right": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "bottom": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalDown": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalUp": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "horizontal": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "vertical": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                }
                                            },
                                            "shading": {
                                                "backgroundColor": "#D9E2F3FF",
                                                "foregroundColor": "empty",
                                                "textureStyle": "TextureNone"
                                            },
                                            "preferredWidth": 37.720001220703125,
                                            "preferredWidthType": "Percent",
                                            "cellWidth": 117.95841899993776,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "verticalAlignment": "Top"
                                        },
                                        "columnIndex": 2
                                    }
                                ],
                                "rowFormat": {
                                    "height": 14.399999618530273,
                                    "allowBreakAcrossPages": true,
                                    "heightType": "Exactly",
                                    "isHeader": false,
                                    "borders": {
                                        "top": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "left": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "right": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "bottom": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "diagonalDown": {
                                            "color": "#000000",
                                            "hasNoneStyle": false,
                                            "lineStyle": "None",
                                            "lineWidth": 0,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "diagonalUp": {
                                            "color": "#000000",
                                            "hasNoneStyle": false,
                                            "lineStyle": "None",
                                            "lineWidth": 0,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "horizontal": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "vertical": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        }
                                    },
                                    "gridBefore": 0,
                                    "gridBeforeWidth": 0,
                                    "gridBeforeWidthType": "Point",
                                    "gridAfter": 0,
                                    "gridAfterWidth": 0,
                                    "gridAfterWidthType": "Point"
                                }
                            },
                            {
                                "cells": [
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal",
                                                    "listFormat": {}
                                                },
                                                "characterFormat": {},
                                                "inlines": [
                                                    {
                                                        "characterFormat": {
                                                            "fontSize": 10,
                                                            "fontFamily": "Verdana",
                                                            "fontSizeBidi": 10,
                                                            "fontFamilyBidi": "Times New Roman"
                                                        },
                                                        "text": "10"
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "borders": {
                                                "top": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "left": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "right": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "bottom": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalDown": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalUp": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "horizontal": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "vertical": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                }
                                            },
                                            "shading": {
                                                "backgroundColor": "#FFFFFFFF",
                                                "foregroundColor": "empty",
                                                "textureStyle": "TextureNone"
                                            },
                                            "preferredWidth": 13.420000076293945,
                                            "preferredWidthType": "Percent",
                                            "cellWidth": 64.71214527422465,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "verticalAlignment": "Top"
                                        },
                                        "columnIndex": 0
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal",
                                                    "listFormat": {}
                                                },
                                                "characterFormat": {},
                                                "inlines": [
                                                    {
                                                        "characterFormat": {
                                                            "fontSize": 10,
                                                            "fontFamily": "Verdana",
                                                            "fontSizeBidi": 10,
                                                            "fontFamilyBidi": "Times New Roman"
                                                        },
                                                        "text": "Rössle Sauerkraut."
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "borders": {
                                                "top": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "left": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "right": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "bottom": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalDown": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalUp": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "horizontal": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "vertical": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                }
                                            },
                                            "shading": {
                                                "backgroundColor": "#FFFFFFFF",
                                                "foregroundColor": "empty",
                                                "textureStyle": "TextureNone"
                                            },
                                            "preferredWidth": 48.86000061035156,
                                            "preferredWidthType": "Percent",
                                            "cellWidth": 292.87942351880633,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "verticalAlignment": "Top"
                                        },
                                        "columnIndex": 1
                                    },
                                    {
                                        "blocks": [
                                            {
                                                "paragraphFormat": {
                                                    "styleName": "Normal",
                                                    "listFormat": {}
                                                },
                                                "characterFormat": {},
                                                "inlines": [
                                                    {
                                                        "characterFormat": {
                                                            "fontSize": 10,
                                                            "fontFamily": "Verdana",
                                                            "fontSizeBidi": 10,
                                                            "fontFamilyBidi": "Times New Roman"
                                                        },
                                                        "text": "25.696"
                                                    }
                                                ]
                                            }
                                        ],
                                        "cellFormat": {
                                            "borders": {
                                                "top": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "left": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "right": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "bottom": {
                                                    "color": "#8EAADBFF",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "Single",
                                                    "lineWidth": 0.5,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalDown": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "diagonalUp": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "horizontal": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                },
                                                "vertical": {
                                                    "color": "#000000",
                                                    "hasNoneStyle": false,
                                                    "lineStyle": "None",
                                                    "lineWidth": 0,
                                                    "shadow": false,
                                                    "space": 0
                                                }
                                            },
                                            "shading": {
                                                "backgroundColor": "#FFFFFFFF",
                                                "foregroundColor": "empty",
                                                "textureStyle": "TextureNone"
                                            },
                                            "preferredWidth": 37.720001220703125,
                                            "preferredWidthType": "Percent",
                                            "cellWidth": 117.95841899993776,
                                            "columnSpan": 1,
                                            "rowSpan": 1,
                                            "verticalAlignment": "Top"
                                        },
                                        "columnIndex": 2
                                    }
                                ],
                                "rowFormat": {
                                    "height": 14.399999618530273,
                                    "allowBreakAcrossPages": true,
                                    "heightType": "Exactly",
                                    "isHeader": false,
                                    "borders": {
                                        "top": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "left": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "right": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "bottom": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "diagonalDown": {
                                            "color": "#000000",
                                            "hasNoneStyle": false,
                                            "lineStyle": "None",
                                            "lineWidth": 0,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "diagonalUp": {
                                            "color": "#000000",
                                            "hasNoneStyle": false,
                                            "lineStyle": "None",
                                            "lineWidth": 0,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "horizontal": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        },
                                        "vertical": {
                                            "color": "#8EAADBFF",
                                            "hasNoneStyle": false,
                                            "lineStyle": "Single",
                                            "lineWidth": 0.5,
                                            "shadow": false,
                                            "space": 0
                                        }
                                    },
                                    "gridBefore": 0,
                                    "gridBeforeWidth": 0,
                                    "gridBeforeWidthType": "Point",
                                    "gridAfter": 0,
                                    "gridAfterWidth": 0,
                                    "gridAfterWidthType": "Point"
                                }
                            }
                        ],
                        "grid": [
                            64.71214527422465,
                            292.87942351880633,
                            117.95841899993776
                        ],
                        "tableFormat": {
                            "borders": {
                                "top": {
                                    "color": "#8EAADBFF",
                                    "hasNoneStyle": false,
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
                                    "shadow": false,
                                    "space": 0
                                },
                                "left": {
                                    "color": "#8EAADBFF",
                                    "hasNoneStyle": false,
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
                                    "shadow": false,
                                    "space": 0
                                },
                                "right": {
                                    "color": "#8EAADBFF",
                                    "hasNoneStyle": false,
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
                                    "shadow": false,
                                    "space": 0
                                },
                                "bottom": {
                                    "color": "#8EAADBFF",
                                    "hasNoneStyle": false,
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
                                    "shadow": false,
                                    "space": 0
                                },
                                "diagonalDown": {
                                    "color": "#000000",
                                    "hasNoneStyle": false,
                                    "lineStyle": "None",
                                    "lineWidth": 0,
                                    "shadow": false,
                                    "space": 0
                                },
                                "diagonalUp": {
                                    "color": "#000000",
                                    "hasNoneStyle": false,
                                    "lineStyle": "None",
                                    "lineWidth": 0,
                                    "shadow": false,
                                    "space": 0
                                },
                                "horizontal": {
                                    "color": "#8EAADBFF",
                                    "hasNoneStyle": false,
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
                                    "shadow": false,
                                    "space": 0
                                },
                                "vertical": {
                                    "color": "#8EAADBFF",
                                    "hasNoneStyle": false,
                                    "lineStyle": "Single",
                                    "lineWidth": 0.5,
                                    "shadow": false,
                                    "space": 0
                                }
                            },
                            "shading": {
                                "backgroundColor": "#FFFFFFFF",
                                "foregroundColor": "empty",
                                "textureStyle": "TextureNone"
                            },
                            "cellSpacing": 0,
                            "leftIndent": 0,
                            "tableAlignment": "Left",
                            "topMargin": 0,
                            "rightMargin": 0.5,
                            "leftMargin": 0.5,
                            "bottomMargin": 0,
                            "preferredWidth": 475.54998779296875,
                            "preferredWidthType": "Point",
                            "bidi": false,
                            "allowAutoFit": true
                        },
                        "description": null,
                        "title": null
                    },
                    {
                        "paragraphFormat": {
                            "afterSpacing": 0,
                            "styleName": "Normal",
                            "listFormat": {}
                        },
                        "characterFormat": {
                            "fontFamily": "Calibri",
                            "fontColor": "#000000FF",
                            "fontFamilyBidi": "Calibri"
                        },
                        "inlines": []
                    },
                    {
                        "paragraphFormat": {
                            "afterSpacing": 0,
                            "styleName": "Normal",
                            "listFormat": {}
                        },
                        "characterFormat": {},
                        "inlines": [
                            {
                                "characterFormat": {
                                    "fontSize": 10,
                                    "fontFamily": "Verdana",
                                    "fontSizeBidi": 10,
                                    "fontFamilyBidi": "Times New Roman"
                                },
                                "text": "The best-selling product of the company is Cote de Blaye, being part of the Beverages "
                            },
                            {
                                "characterFormat": {
                                    "fontSize": 10,
                                    "fontFamily": "Verdana",
                                    "fontSizeBidi": 10,
                                    "fontFamilyBidi": "Times New Roman"
                                },
                                "text": "category. The contribution of this product to the sum of our sales is $ 141.396."
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "afterSpacing": 0,
                            "lineSpacing": 1,
                            "lineSpacingType": "Multiple",
                            "styleName": "Normal",
                            "listFormat": {}
                        },
                        "characterFormat": {
                            "fontSize": 10,
                            "fontFamily": "Verdana",
                            "fontSizeBidi": 10,
                            "fontFamilyBidi": "Times New Roman"
                        },
                        "inlines": []
                    },
                    {
                        "paragraphFormat": {
                            "afterSpacing": 0,
                            "lineSpacing": 1,
                            "lineSpacingType": "Multiple",
                            "styleName": "Normal",
                            "listFormat": {}
                        },
                        "characterFormat": {
                            "fontSize": 10,
                            "fontFamily": "Verdana",
                            "fontSizeBidi": 10,
                            "fontFamilyBidi": "Times New Roman"
                        },
                        "inlines": []
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Normal",
                            "listFormat": {}
                        },
                        "characterFormat": {},
                        "inlines": [
                            {
                                "characterFormat": {},
                                "chartLegend": {
                                    "position": "Right",
                                    "chartTitleArea": {
                                        "fontName": "+mn-lt",
                                        "fontSize": 9,
                                        "layout": {
                                            "layoutX": 0,
                                            "layoutY": 0
                                        },
                                        "dataFormat": {
                                            "fill": {
                                                "foreColor": "000000",
                                                "rgb": "#000000"
                                            },
                                            "line": {
                                                "color": "808080",
                                                "rgb": "#808080"
                                            }
                                        }
                                    }
                                },
                                "chartTitleArea": {
                                    "fontName": "+mn-lt",
                                    "fontSize": 14,
                                    "layout": {
                                        "layoutX": 0,
                                        "layoutY": 0
                                    },
                                    "dataFormat": {
                                        "fill": {
                                            "foreColor": "000000",
                                            "rgb": "#000000"
                                        },
                                        "line": {
                                            "color": "000000",
                                            "rgb": "#000000"
                                        }
                                    }
                                },
                                "chartArea": {
                                    "foreColor": "#FFFFFFFF"
                                },
                                "plotArea": {
                                    "foreColor": "#000000FF"
                                },
                                "chartCategory": [
                                    {
                                        "chartData": [
                                            {
                                                "yValue": 141.396
                                            }
                                        ],
                                        "categoryXName": "Côte de Blaye"
                                    },
                                    {
                                        "chartData": [
                                            {
                                                "yValue": 80.368
                                            }
                                        ],
                                        "categoryXName": "Thüringer Rostbratwurst"
                                    },
                                    {
                                        "chartData": [
                                            {
                                                "yValue": 71.155
                                            }
                                        ],
                                        "categoryXName": "Raclette Courdavault"
                                    },
                                    {
                                        "chartData": [
                                            {
                                                "yValue": 47.234
                                            }
                                        ],
                                        "categoryXName": "Tarte au sucre"
                                    },
                                    {
                                        "chartData": [
                                            {
                                                "yValue": 46.825
                                            }
                                        ],
                                        "categoryXName": "Camembert Pierrot"
                                    },
                                    {
                                        "chartData": [
                                            {
                                                "yValue": 42.593
                                            }
                                        ],
                                        "categoryXName": "Gnocchi di nonna Alice"
                                    },
                                    {
                                        "chartData": [
                                            {
                                                "yValue": 41.819
                                            }
                                        ],
                                        "categoryXName": "Manjimup Dried Apples"
                                    },
                                    {
                                        "chartData": [
                                            {
                                                "yValue": 32.698
                                            }
                                        ],
                                        "categoryXName": "Alice Mutton"
                                    },
                                    {
                                        "chartData": [
                                            {
                                                "yValue": 29.171
                                            }
                                        ],
                                        "categoryXName": "Carnarvon Tigers"
                                    },
                                    {
                                        "chartData": [
                                            {
                                                "yValue": 25.696
                                            }
                                        ],
                                        "categoryXName": "Rössle Sauerkraut"
                                    }
                                ],
                                "chartSeries": [
                                    {
                                        "dataPoints": [
                                            {
                                                "fill": {
                                                    "foreColor": "4472c4",
                                                    "rgb": "#4472c4"
                                                },
                                                "line": {
                                                    "color": "ffffff",
                                                    "rgb": "#ffffff"
                                                }
                                            },
                                            {
                                                "fill": {
                                                    "foreColor": "ed7d31",
                                                    "rgb": "#ed7d31"
                                                },
                                                "line": {
                                                    "color": "ffffff",
                                                    "rgb": "#ffffff"
                                                }
                                            },
                                            {
                                                "fill": {
                                                    "foreColor": "a5a5a5",
                                                    "rgb": "#a5a5a5"
                                                },
                                                "line": {
                                                    "color": "ffffff",
                                                    "rgb": "#ffffff"
                                                }
                                            },
                                            {
                                                "fill": {
                                                    "foreColor": "ffc000",
                                                    "rgb": "#ffc000"
                                                },
                                                "line": {
                                                    "color": "ffffff",
                                                    "rgb": "#ffffff"
                                                }
                                            },
                                            {
                                                "fill": {
                                                    "foreColor": "5b9bd5",
                                                    "rgb": "#5b9bd5"
                                                },
                                                "line": {
                                                    "color": "ffffff",
                                                    "rgb": "#ffffff"
                                                }
                                            },
                                            {
                                                "fill": {
                                                    "foreColor": "70ad47",
                                                    "rgb": "#70ad47"
                                                },
                                                "line": {
                                                    "color": "ffffff",
                                                    "rgb": "#ffffff"
                                                }
                                            },
                                            {
                                                "fill": {
                                                    "foreColor": "264379",
                                                    "rgb": "#264379"
                                                },
                                                "line": {
                                                    "color": "ffffff",
                                                    "rgb": "#ffffff"
                                                }
                                            },
                                            {
                                                "fill": {
                                                    "foreColor": "9f480e",
                                                    "rgb": "#9f480e"
                                                },
                                                "line": {
                                                    "color": "ffffff",
                                                    "rgb": "#ffffff"
                                                }
                                            },
                                            {
                                                "fill": {
                                                    "foreColor": "636363",
                                                    "rgb": "#636363"
                                                },
                                                "line": {
                                                    "color": "ffffff",
                                                    "rgb": "#ffffff"
                                                }
                                            },
                                            {
                                                "fill": {
                                                    "foreColor": "9a7200",
                                                    "rgb": "#9a7200"
                                                },
                                                "line": {
                                                    "color": "ffffff",
                                                    "rgb": "#ffffff"
                                                }
                                            }
                                        ],
                                        "seriesName": "Sales"
                                    }
                                ],
                                "chartPrimaryCategoryAxis": {
                                    "chartTitle": null,
                                    "chartTitleArea": {
                                        "layout": {},
                                        "dataFormat": {
                                            "fill": {},
                                            "line": {}
                                        }
                                    },
                                    "categoryType": "Automatic",
                                    "fontSize": 11,
                                    "fontName": "Calibri",
                                    "numberFormat": "General",
                                    "maximumValue": 0,
                                    "minimumValue": 0,
                                    "majorUnit": 0,
                                    "hasMajorGridLines": false,
                                    "hasMinorGridLines": false,
                                    "majorTickMark": "TickMark_Outside",
                                    "minorTickMark": "TickMark_None",
                                    "tickLabelPosition": "TickLabelPosition_NextToAxis"
                                },
                                "chartPrimaryValueAxis": {
                                    "chartTitle": null,
                                    "chartTitleArea": {
                                        "layout": {},
                                        "dataFormat": {
                                            "fill": {},
                                            "line": {}
                                        }
                                    },
                                    "fontSize": 11,
                                    "fontName": "Calibri",
                                    "maximumValue": 0,
                                    "minimumValue": 0,
                                    "majorUnit": 0,
                                    "hasMajorGridLines": false,
                                    "hasMinorGridLines": false,
                                    "majorTickMark": "TickMark_Outside",
                                    "minorTickMark": "TickMark_None",
                                    "tickLabelPosition": "TickLabelPosition_NextToAxis"
                                },
                                "chartTitle": "Best Selling Products",
                                "chartType": "Pie",
                                "gapWidth": 0,
                                "overlap": 0,
                                "height": 225,
                                "width": 432
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Normal",
                            "listFormat": {}
                        },
                        "characterFormat": {},
                        "inlines": []
                    },
                    {
                        "paragraphFormat": {
                            "afterSpacing": 0,
                            "lineSpacing": 1,
                            "lineSpacingType": "Multiple",
                            "styleName": "Normal",
                            "listFormat": {}
                        },
                        "characterFormat": {
                            "fontSize": 10,
                            "fontFamily": "Verdana",
                            "fontSizeBidi": 10,
                            "fontFamilyBidi": "Verdana"
                        },
                        "inlines": [
                            {
                                "characterFormat": {
                                    "fontSize": 10,
                                    "fontFamily": "Verdana",
                                    "styleName": "a",
                                    "fontSizeBidi": 10,
                                    "fontFamilyBidi": "Verdana"
                                },
                                "text": "According to the above chart, the total count of the selling products is 24 and the average "
                            },
                            {
                                "characterFormat": {
                                    "fontSize": 10,
                                    "fontFamily": "Verdana",
                                    "styleName": "a",
                                    "fontSizeBidi": 10,
                                    "fontFamilyBidi": "Verdana"
                                },
                                "text": "sales attributed to this product is $ 5.891 with highest sale $ 15.810 in the month of May in "
                            },
                            {
                                "characterFormat": {
                                    "fontSize": 10,
                                    "fontFamily": "Verdana",
                                    "styleName": "a",
                                    "fontSizeBidi": 10,
                                    "fontFamilyBidi": "Verdana"
                                },
                                "text": "2014. In the same year, in the month of March the same product reached the amount of $ "
                            },
                            {
                                "characterFormat": {
                                    "fontSize": 10,
                                    "fontFamily": "Verdana",
                                    "styleName": "a",
                                    "fontSizeBidi": 10,
                                    "fontFamilyBidi": "Verdana"
                                },
                                "text": "15.019. These were the highest sales of the product among the other products for the year "
                            },
                            {
                                "characterFormat": {
                                    "fontSize": 10,
                                    "fontFamily": "Verdana",
                                    "styleName": "a",
                                    "fontSizeBidi": 10,
                                    "fontFamilyBidi": "Verdana"
                                },
                                "text": "2014."
                            }
                        ]
                    }
                ],
                "headersFooters": {}
            }
        ],
        "characterFormat": {
            "bold": false,
            "italic": false,
            "fontSize": 11,
            "fontFamily": "Calibri",
            "underline": "None",
            "strikethrough": "None",
            "baselineAlignment": "Normal",
            "highlightColor": "NoColor",
            "fontColor": "#000000",
            "fontSizeBidi": 11,
            "fontFamilyBidi": "Calibri"
        },
        "paragraphFormat": {
            "leftIndent": 0,
            "rightIndent": 0,
            "firstLineIndent": 0,
            "textAlignment": "Left",
            "beforeSpacing": 0,
            "afterSpacing": 8,
            "lineSpacing": 1.0791666507720947,
            "lineSpacingType": "Multiple",
            "listFormat": {},
            "bidi": false
        },
        "defaultTabWidth": 36,
        "styles": [
            {
                "name": "Normal",
                "type": "Paragraph",
                "paragraphFormat": {
                    "listFormat": {}
                },
                "characterFormat": {},
                "next": "Normal"
            },
            {
                "name": "Heading 1",
                "type": "Paragraph",
                "paragraphFormat": {
                    "beforeSpacing": 12,
                    "afterSpacing": 3,
                    "lineSpacing": 1,
                    "lineSpacingType": "Multiple",
                    "outlineLevel": "Level1",
                    "listFormat": {}
                },
                "characterFormat": {
                    "bold": true,
                    "fontSize": 16,
                    "fontFamily": "Arial",
                    "boldBidi": true,
                    "fontSizeBidi": 16,
                    "fontFamilyBidi": "Arial"
                },
                "basedOn": "Normal",
                "link": "Heading 1 Char",
                "next": "Normal"
            },
            {
                "name": "Heading 1 Char",
                "type": "Character",
                "characterFormat": {
                    "bold": true,
                    "fontSize": 16,
                    "fontFamily": "Arial",
                    "boldBidi": true,
                    "fontSizeBidi": 16,
                    "fontFamilyBidi": "Arial"
                },
                "basedOn": "Default Paragraph Font"
            },
            {
                "name": "Default Paragraph Font",
                "type": "Character",
                "characterFormat": {}
            },
            {
                "name": "Balloon Text",
                "type": "Paragraph",
                "paragraphFormat": {
                    "afterSpacing": 0,
                    "lineSpacing": 1,
                    "lineSpacingType": "Multiple",
                    "listFormat": {}
                },
                "characterFormat": {
                    "fontSize": 9,
                    "fontFamily": "Segoe UI",
                    "fontSizeBidi": 9,
                    "fontFamilyBidi": "Segoe UI"
                },
                "basedOn": "Normal",
                "link": "Balloon Text Char"
            },
            {
                "name": "Balloon Text Char",
                "type": "Character",
                "characterFormat": {
                    "fontSize": 9,
                    "fontFamily": "Segoe UI",
                    "fontSizeBidi": 9,
                    "fontFamilyBidi": "Segoe UI"
                },
                "basedOn": "Default Paragraph Font"
            },
            {
                "name": "a",
                "type": "Character",
                "characterFormat": {},
                "basedOn": "Default Paragraph Font"
            },
            {
                "name": "Heading 2",
                "type": "Paragraph",
                "paragraphFormat": {
                    "leftIndent": 0,
                    "rightIndent": 0,
                    "firstLineIndent": 0,
                    "textAlignment": "Left",
                    "beforeSpacing": 2,
                    "afterSpacing": 0,
                    "lineSpacing": 1.0791666507720947,
                    "lineSpacingType": "Multiple",
                    "outlineLevel": "Level2",
                    "listFormat": {}
                },
                "characterFormat": {
                    "fontSize": 13,
                    "fontFamily": "Calibri Light",
                    "fontColor": "#2F5496"
                },
                "basedOn": "Normal",
                "link": "Heading 2 Char",
                "next": "Normal"
            },
            {
                "name": "Heading 2 Char",
                "type": "Character",
                "characterFormat": {
                    "fontSize": 13,
                    "fontFamily": "Calibri Light",
                    "fontColor": "#2F5496"
                },
                "basedOn": "Default Paragraph Font"
            },
            {
                "name": "Heading 3",
                "type": "Paragraph",
                "paragraphFormat": {
                    "leftIndent": 0,
                    "rightIndent": 0,
                    "firstLineIndent": 0,
                    "textAlignment": "Left",
                    "beforeSpacing": 2,
                    "afterSpacing": 0,
                    "lineSpacing": 1.0791666507720947,
                    "lineSpacingType": "Multiple",
                    "outlineLevel": "Level3",
                    "listFormat": {}
                },
                "characterFormat": {
                    "fontSize": 12,
                    "fontFamily": "Calibri Light",
                    "fontColor": "#1F3763"
                },
                "basedOn": "Normal",
                "link": "Heading 3 Char",
                "next": "Normal"
            },
            {
                "name": "Heading 3 Char",
                "type": "Character",
                "characterFormat": {
                    "fontSize": 12,
                    "fontFamily": "Calibri Light",
                    "fontColor": "#1F3763"
                },
                "basedOn": "Default Paragraph Font"
            },
            {
                "name": "Heading 4",
                "type": "Paragraph",
                "paragraphFormat": {
                    "leftIndent": 0,
                    "rightIndent": 0,
                    "firstLineIndent": 0,
                    "textAlignment": "Left",
                    "beforeSpacing": 2,
                    "afterSpacing": 0,
                    "lineSpacing": 1.0791666507720947,
                    "lineSpacingType": "Multiple",
                    "outlineLevel": "Level4",
                    "listFormat": {}
                },
                "characterFormat": {
                    "italic": true,
                    "fontFamily": "Calibri Light",
                    "fontColor": "#2F5496"
                },
                "basedOn": "Normal",
                "link": "Heading 4 Char",
                "next": "Normal"
            },
            {
                "name": "Heading 4 Char",
                "type": "Character",
                "characterFormat": {
                    "italic": true,
                    "fontFamily": "Calibri Light",
                    "fontColor": "#2F5496"
                },
                "basedOn": "Default Paragraph Font"
            },
            {
                "name": "Heading 5",
                "type": "Paragraph",
                "paragraphFormat": {
                    "leftIndent": 0,
                    "rightIndent": 0,
                    "firstLineIndent": 0,
                    "textAlignment": "Left",
                    "beforeSpacing": 2,
                    "afterSpacing": 0,
                    "lineSpacing": 1.0791666507720947,
                    "lineSpacingType": "Multiple",
                    "outlineLevel": "Level5",
                    "listFormat": {}
                },
                "characterFormat": {
                    "fontFamily": "Calibri Light",
                    "fontColor": "#2F5496"
                },
                "basedOn": "Normal",
                "link": "Heading 5 Char",
                "next": "Normal"
            },
            {
                "name": "Heading 5 Char",
                "type": "Character",
                "characterFormat": {
                    "fontFamily": "Calibri Light",
                    "fontColor": "#2F5496"
                },
                "basedOn": "Default Paragraph Font"
            },
            {
                "name": "Heading 6",
                "type": "Paragraph",
                "paragraphFormat": {
                    "leftIndent": 0,
                    "rightIndent": 0,
                    "firstLineIndent": 0,
                    "textAlignment": "Left",
                    "beforeSpacing": 2,
                    "afterSpacing": 0,
                    "lineSpacing": 1.0791666507720947,
                    "lineSpacingType": "Multiple",
                    "outlineLevel": "Level6",
                    "listFormat": {}
                },
                "characterFormat": {
                    "fontFamily": "Calibri Light",
                    "fontColor": "#1F3763"
                },
                "basedOn": "Normal",
                "link": "Heading 6 Char",
                "next": "Normal"
            },
            {
                "name": "Heading 6 Char",
                "type": "Character",
                "characterFormat": {
                    "fontFamily": "Calibri Light",
                    "fontColor": "#1F3763"
                },
                "basedOn": "Default Paragraph Font"
            }
        ],
        "lists": [],
        "abstractLists": []
    };
    var waitingPopUp = document.getElementById('waiting-popup');
    container.documentEditor.open(JSON.stringify(defaultDocument));    
    container.documentEditor.documentName = 'Getting Started';    
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
