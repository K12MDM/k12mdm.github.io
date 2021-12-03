ej.base.enableRipple(window.ripple)

  //Documenteditor control rendering starts
  var hostUrl = "http://localhost:62728/";
  var container = new ej.documenteditor.DocumentEditorContainer();
  ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar);
  container.serviceUrl = hostUrl + "api/documenteditor/";
  container.appendTo("#container");
  container.height = "590px";
  var defaultDocument = {
    sections: [
      {
        blocks: [
          {
            rows: [
              {
                rowFormat: {
                  allowBreakAcrossPages: true,
                  isHeader: false,
                  height: 8.600000381469727,
                  heightType: "AtLeast",
                  borders: {
                    left: {
                      lineStyle: "Single",
                      lineWidth: 0.5,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: false,
                      color: "#000000FF"
                    },
                    right: {
                      lineStyle: "Single",
                      lineWidth: 0.5,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: false,
                      color: "#000000FF"
                    },
                    top: {
                      lineStyle: "Single",
                      lineWidth: 0.5,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: false,
                      color: "#000000FF"
                    },
                    bottom: {
                      lineStyle: "Single",
                      lineWidth: 0.5,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: false,
                      color: "#000000FF"
                    },
                    vertical: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: true
                    },
                    horizontal: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: true
                    },
                    diagonalDown: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: false
                    },
                    diagonalUp: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: false
                    }
                  },
                  leftMargin: 0.5,
                  rightMargin: 0.5
                },
                cells: [
                  {
                    blocks: [
                      {
                        characterFormat: { bold: true, boldBidi: true },
                        paragraphFormat: {
                          textAlignment: "Center",
                          styleName: "Normal"
                        },
                        inlines: [
                          {
                            text: "Bill To:",
                            characterFormat: { bold: true, boldBidi: true }
                          }
                        ]
                      }
                    ],
                    cellFormat: {
                      columnSpan: 1,
                      rowSpan: 4,
                      preferredWidth: 78,
                      preferredWidthType: "Point",
                      verticalAlignment: "Center",
                      isSamePaddingAsTable: true,
                      borders: {
                        left: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        right: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        top: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        bottom: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        horizontal: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      },
                      shading: {
                        texture: "TextureNone",
                        backgroundColor: "#FFFFFFFF"
                      },
                      cellWidth: 78
                    }
                  },
                  {
                    blocks: [
                      {
                        paragraphFormat: { styleName: "Normal" },
                        inlines: [{ text: "Hanari" }, { text: " Carnes" }]
                      }
                    ],
                    cellFormat: {
                      columnSpan: 1,
                      rowSpan: 1,
                      preferredWidth: 78,
                      preferredWidthType: "Point",
                      verticalAlignment: "Top",
                      isSamePaddingAsTable: true,
                      borders: {
                        left: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        right: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        top: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        bottom: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        horizontal: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      },
                      shading: {
                        texture: "TextureNone",
                        backgroundColor: "#FFFFFFFF"
                      },
                      cellWidth: 78
                    }
                  },
                  {
                    blocks: [
                      {
                        characterFormat: { bold: true, boldBidi: true },
                        paragraphFormat: {
                          textAlignment: "Center",
                          styleName: "Normal"
                        },
                        inlines: [
                          {
                            text: "Ship To:",
                            characterFormat: { bold: true, boldBidi: true }
                          }
                        ]
                      }
                    ],
                    cellFormat: {
                      columnSpan: 1,
                      rowSpan: 4,
                      preferredWidth: 78,
                      preferredWidthType: "Point",
                      verticalAlignment: "Center",
                      isSamePaddingAsTable: true,
                      borders: {
                        left: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        right: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        top: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        bottom: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        horizontal: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      },
                      shading: {
                        texture: "TextureNone",
                        backgroundColor: "#FFFFFFFF"
                      },
                      cellWidth: 78
                    }
                  },
                  {
                    blocks: [
                      {
                        paragraphFormat: { styleName: "Normal" },
                        inlines: [{ text: "Hanari" }, { text: " Carnes" }]
                      }
                    ],
                    cellFormat: {
                      columnSpan: 1,
                      rowSpan: 1,
                      preferredWidth: 95.75,
                      preferredWidthType: "Point",
                      verticalAlignment: "Top",
                      isSamePaddingAsTable: true,
                      borders: {
                        left: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        right: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        top: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        bottom: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        horizontal: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      },
                      shading: {
                        texture: "TextureNone",
                        backgroundColor: "#FFFFFFFF"
                      },
                      cellWidth: 95.75
                    }
                  },
                  {
                    blocks: [
                      {
                        paragraphFormat: {
                          rightIndent: 32.099998474121094,
                          textAlignment: "Center",
                          styleName: "Normal"
                        },
                        inlines: [
                          {
                            text: "Invoice No:",
                            characterFormat: { bold: true, boldBidi: true }
                          },
                          { text: "10250" }
                        ]
                      },
                      {
                        paragraphFormat: {
                          rightIndent: 32.099998474121094,
                          textAlignment: "Center",
                          styleName: "Normal"
                        },
                        inlines: [
                          {
                            text: "Date:",
                            characterFormat: { bold: true, boldBidi: true }
                          },
                          { text: "7/12/1996" }
                        ]
                      }
                    ],
                    cellFormat: {
                      columnSpan: 1,
                      rowSpan: 4,
                      preferredWidth: 138.25,
                      preferredWidthType: "Point",
                      verticalAlignment: "Center",
                      isSamePaddingAsTable: true,
                      borders: {
                        left: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        right: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        top: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        bottom: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        horizontal: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      },
                      shading: {
                        texture: "TextureNone",
                        backgroundColor: "#FFFFFFFF"
                      },
                      cellWidth: 138.25
                    }
                  }
                ]
              },
              {
                rowFormat: {
                  allowBreakAcrossPages: true,
                  isHeader: false,
                  height: 1,
                  heightType: "AtLeast",
                  borders: {
                    left: {
                      lineStyle: "Single",
                      lineWidth: 0.5,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: false,
                      color: "#000000FF"
                    },
                    right: {
                      lineStyle: "Single",
                      lineWidth: 0.5,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: false,
                      color: "#000000FF"
                    },
                    top: {
                      lineStyle: "Single",
                      lineWidth: 0.5,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: false,
                      color: "#000000FF"
                    },
                    bottom: {
                      lineStyle: "Single",
                      lineWidth: 0.5,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: false,
                      color: "#000000FF"
                    },
                    vertical: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: true
                    },
                    horizontal: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: true
                    },
                    diagonalDown: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: false
                    },
                    diagonalUp: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: false
                    }
                  },
                  leftMargin: 0.5,
                  rightMargin: 0.5
                },
                cells: [
                  {
                    blocks: [
                      {
                        paragraphFormat: { styleName: "Normal" },
                        inlines: [
                          { text: "Rua" },
                          { text: " do " },
                          { text: "Paço" },
                          { text: ", 67" }
                        ]
                      }
                    ],
                    cellFormat: {
                      columnSpan: 1,
                      rowSpan: 1,
                      preferredWidth: 78,
                      preferredWidthType: "Point",
                      verticalAlignment: "Top",
                      isSamePaddingAsTable: true,
                      borders: {
                        left: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        right: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        top: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        bottom: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        horizontal: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      },
                      shading: {
                        texture: "TextureNone",
                        backgroundColor: "#FFFFFFFF"
                      },
                      cellWidth: 78
                    }
                  },
                  {
                    blocks: [
                      {
                        paragraphFormat: { styleName: "Normal" },
                        inlines: [
                          { text: "Rua" },
                          { text: " do " },
                          { text: "Paço" },
                          { text: ", 67" }
                        ]
                      }
                    ],
                    cellFormat: {
                      columnSpan: 1,
                      rowSpan: 1,
                      preferredWidth: 95.75,
                      preferredWidthType: "Point",
                      verticalAlignment: "Top",
                      isSamePaddingAsTable: true,
                      borders: {
                        left: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        right: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        top: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        bottom: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        horizontal: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      },
                      shading: {
                        texture: "TextureNone",
                        backgroundColor: "#FFFFFFFF"
                      },
                      cellWidth: 95.75
                    }
                  }
                ]
              },
              {
                rowFormat: {
                  allowBreakAcrossPages: true,
                  isHeader: false,
                  height: 1,
                  heightType: "AtLeast",
                  borders: {
                    left: {
                      lineStyle: "Single",
                      lineWidth: 0.5,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: false,
                      color: "#000000FF"
                    },
                    right: {
                      lineStyle: "Single",
                      lineWidth: 0.5,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: false,
                      color: "#000000FF"
                    },
                    top: {
                      lineStyle: "Single",
                      lineWidth: 0.5,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: false,
                      color: "#000000FF"
                    },
                    bottom: {
                      lineStyle: "Single",
                      lineWidth: 0.5,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: false,
                      color: "#000000FF"
                    },
                    vertical: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: true
                    },
                    horizontal: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: true
                    },
                    diagonalDown: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: false
                    },
                    diagonalUp: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: false
                    }
                  },
                  leftMargin: 0.5,
                  rightMargin: 0.5
                },
                cells: [
                  {
                    blocks: [
                      {
                        paragraphFormat: { styleName: "Normal" },
                        inlines: [{ text: "Rio de Janeiro" }]
                      }
                    ],
                    cellFormat: {
                      columnSpan: 1,
                      rowSpan: 1,
                      preferredWidth: 78,
                      preferredWidthType: "Point",
                      verticalAlignment: "Top",
                      isSamePaddingAsTable: true,
                      borders: {
                        left: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        right: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        top: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        bottom: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        horizontal: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      },
                      shading: {
                        texture: "TextureNone",
                        backgroundColor: "#FFFFFFFF"
                      },
                      cellWidth: 78
                    }
                  },
                  {
                    blocks: [
                      {
                        paragraphFormat: { styleName: "Normal" },
                        inlines: [{ text: "Rio de Janeiro" }]
                      }
                    ],
                    cellFormat: {
                      columnSpan: 1,
                      rowSpan: 1,
                      preferredWidth: 95.75,
                      preferredWidthType: "Point",
                      verticalAlignment: "Top",
                      isSamePaddingAsTable: true,
                      borders: {
                        left: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        right: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        top: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        bottom: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        horizontal: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      },
                      shading: {
                        texture: "TextureNone",
                        backgroundColor: "#FFFFFFFF"
                      },
                      cellWidth: 95.75
                    }
                  }
                ]
              },
              {
                rowFormat: {
                  allowBreakAcrossPages: true,
                  isHeader: false,
                  height: 1,
                  heightType: "AtLeast",
                  borders: {
                    left: {
                      lineStyle: "Single",
                      lineWidth: 0.5,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: false,
                      color: "#000000FF"
                    },
                    right: {
                      lineStyle: "Single",
                      lineWidth: 0.5,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: false,
                      color: "#000000FF"
                    },
                    top: {
                      lineStyle: "Single",
                      lineWidth: 0.5,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: false,
                      color: "#000000FF"
                    },
                    bottom: {
                      lineStyle: "Single",
                      lineWidth: 0.5,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: false,
                      color: "#000000FF"
                    },
                    vertical: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: true
                    },
                    horizontal: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: true
                    },
                    diagonalDown: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: false
                    },
                    diagonalUp: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: false
                    }
                  },
                  leftMargin: 0.5,
                  rightMargin: 0.5
                },
                cells: [
                  {
                    blocks: [
                      {
                        paragraphFormat: { styleName: "Normal" },
                        inlines: [{ text: "Brazil" }]
                      }
                    ],
                    cellFormat: {
                      columnSpan: 1,
                      rowSpan: 1,
                      preferredWidth: 78,
                      preferredWidthType: "Point",
                      verticalAlignment: "Top",
                      isSamePaddingAsTable: true,
                      borders: {
                        left: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        right: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        top: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        bottom: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        horizontal: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      },
                      shading: {
                        texture: "TextureNone",
                        backgroundColor: "#FFFFFFFF"
                      },
                      cellWidth: 78
                    }
                  },
                  {
                    blocks: [
                      {
                        paragraphFormat: { styleName: "Normal" },
                        inlines: [{ text: "Brazil" }]
                      }
                    ],
                    cellFormat: {
                      columnSpan: 1,
                      rowSpan: 1,
                      preferredWidth: 95.75,
                      preferredWidthType: "Point",
                      verticalAlignment: "Top",
                      isSamePaddingAsTable: true,
                      borders: {
                        left: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        right: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        top: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        bottom: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        horizontal: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      },
                      shading: {
                        texture: "TextureNone",
                        backgroundColor: "#FFFFFFFF"
                      },
                      cellWidth: 95.75
                    }
                  }
                ]
              }
            ],
            title: null,
            description: null,
            tableFormat: {
              allowAutoFit: true,
              leftMargin: 0.5,
              rightMargin: 0.5,
              leftIndent: 0,
              tableAlignment: "Left",
              preferredWidth: 468,
              preferredWidthType: "Point",
              borders: {
                left: {
                  lineStyle: "Single",
                  lineWidth: 0.5,
                  shadow: false,
                  space: 0,
                  hasNoneStyle: false,
                  color: "#000000FF"
                },
                right: {
                  lineStyle: "Single",
                  lineWidth: 0.5,
                  shadow: false,
                  space: 0,
                  hasNoneStyle: false,
                  color: "#000000FF"
                },
                top: {
                  lineStyle: "Single",
                  lineWidth: 0.5,
                  shadow: false,
                  space: 0,
                  hasNoneStyle: false,
                  color: "#000000FF"
                },
                bottom: {
                  lineStyle: "Single",
                  lineWidth: 0.5,
                  shadow: false,
                  space: 0,
                  hasNoneStyle: false,
                  color: "#000000FF"
                },
                vertical: {
                  lineStyle: "None",
                  lineWidth: 0,
                  shadow: false,
                  space: 0,
                  hasNoneStyle: false
                },
                horizontal: {
                  lineStyle: "None",
                  lineWidth: 0,
                  shadow: false,
                  space: 0,
                  hasNoneStyle: false
                },
                diagonalDown: {
                  lineStyle: "None",
                  lineWidth: 0,
                  shadow: false,
                  space: 0,
                  hasNoneStyle: false
                },
                diagonalUp: {
                  lineStyle: "None",
                  lineWidth: 0,
                  shadow: false,
                  space: 0,
                  hasNoneStyle: false
                }
              },
              shading: { texture: "TextureNone", backgroundColor: "#FFFFFFFF" },
              bidi: false,
              horizontalPositionAbs: "Left",
              horizontalPosition: 0
            }
          },
          { paragraphFormat: { styleName: "Normal" }, inlines: [] },
          { paragraphFormat: { styleName: "Normal" }, inlines: [] },
          { paragraphFormat: { styleName: "Normal" }, inlines: [] },
          {
            rows: [
              {
                rowFormat: {
                  allowBreakAcrossPages: true,
                  isHeader: false,
                  height: 19.5,
                  heightType: "Exactly",
                  borders: {
                    left: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: true
                    },
                    right: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: true
                    },
                    top: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: true
                    },
                    bottom: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: true
                    },
                    vertical: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: true
                    },
                    horizontal: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: true
                    },
                    diagonalDown: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: false
                    },
                    diagonalUp: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: false
                    }
                  },
                  leftMargin: 5,
                  rightMargin: 5
                },
                cells: [
                  {
                    blocks: [
                      {
                        paragraphFormat: {
                          textAlignment: "Center",
                          styleName: "Normal"
                        },
                        inlines: [
                          {
                            text: "ID",
                            characterFormat: {
                              bold: true,
                              fontSize: 10,
                              fontFamily: "Segoe UI",
                              fontColor: "#FFFFFFFF",
                              boldBidi: true,
                              fontSizeBidi: 10,
                              fontFamilyBidi: "Segoe UI"
                            }
                          }
                        ]
                      }
                    ],
                    cellFormat: {
                      columnSpan: 1,
                      rowSpan: 1,
                      preferredWidth: 8.899999618530273,
                      preferredWidthType: "Percent",
                      verticalAlignment: "Top",
                      isSamePaddingAsTable: true,
                      borders: {
                        left: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        right: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        top: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        bottom: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        horizontal: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      },
                      shading: {
                        texture: "TextureNone",
                        backgroundColor: "#4B88BAFF"
                      },
                      cellWidth: 42.607242584228516
                    }
                  },
                  {
                    blocks: [
                      {
                        paragraphFormat: {
                          textAlignment: "Center",
                          styleName: "Normal"
                        },
                        inlines: [
                          {
                            text: "Product Name",
                            characterFormat: {
                              bold: true,
                              fontSize: 10,
                              fontFamily: "Segoe UI",
                              fontColor: "#FFFFFFFF",
                              boldBidi: true,
                              fontSizeBidi: 10,
                              fontFamilyBidi: "Segoe UI"
                            }
                          }
                        ]
                      }
                    ],
                    cellFormat: {
                      columnSpan: 1,
                      rowSpan: 1,
                      preferredWidth: 38.540000915527344,
                      preferredWidthType: "Percent",
                      verticalAlignment: "Top",
                      isSamePaddingAsTable: true,
                      borders: {
                        left: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        right: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        top: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        bottom: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        horizontal: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      },
                      shading: {
                        texture: "TextureNone",
                        backgroundColor: "#4B88BAFF"
                      },
                      cellWidth: 184.2046356201172
                    }
                  },
                  {
                    blocks: [
                      {
                        paragraphFormat: {
                          textAlignment: "Center",
                          styleName: "Normal"
                        },
                        inlines: [
                          {
                            text: "Quantity",
                            characterFormat: {
                              bold: true,
                              fontSize: 10,
                              fontFamily: "Segoe UI",
                              fontColor: "#FFFFFFFF",
                              boldBidi: true,
                              fontSizeBidi: 10,
                              fontFamilyBidi: "Segoe UI"
                            }
                          }
                        ]
                      }
                    ],
                    cellFormat: {
                      columnSpan: 1,
                      rowSpan: 1,
                      preferredWidth: 12.859999656677246,
                      preferredWidthType: "Percent",
                      verticalAlignment: "Top",
                      isSamePaddingAsTable: true,
                      borders: {
                        left: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        right: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        top: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        bottom: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        horizontal: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      },
                      shading: {
                        texture: "TextureNone",
                        backgroundColor: "#4B88BAFF"
                      },
                      cellWidth: 61.452754974365234
                    }
                  },
                  {
                    blocks: [
                      {
                        paragraphFormat: {
                          textAlignment: "Center",
                          styleName: "Normal"
                        },
                        inlines: [
                          {
                            text: "Unit Price",
                            characterFormat: {
                              bold: true,
                              fontSize: 10,
                              fontFamily: "Segoe UI",
                              fontColor: "#FFFFFFFF",
                              boldBidi: true,
                              fontSizeBidi: 10,
                              fontFamilyBidi: "Segoe UI"
                            }
                          }
                        ]
                      }
                    ],
                    cellFormat: {
                      columnSpan: 1,
                      rowSpan: 1,
                      preferredWidth: 12.859999656677246,
                      preferredWidthType: "Percent",
                      verticalAlignment: "Top",
                      isSamePaddingAsTable: true,
                      borders: {
                        left: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        right: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        top: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        bottom: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        horizontal: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      },
                      shading: {
                        texture: "TextureNone",
                        backgroundColor: "#4B88BAFF"
                      },
                      cellWidth: 61.452754974365234
                    }
                  },
                  {
                    blocks: [
                      {
                        paragraphFormat: {
                          textAlignment: "Center",
                          styleName: "Normal"
                        },
                        inlines: [
                          {
                            text: "Discount",
                            characterFormat: {
                              bold: true,
                              fontSize: 10,
                              fontFamily: "Segoe UI",
                              fontColor: "#FFFFFFFF",
                              boldBidi: true,
                              fontSizeBidi: 10,
                              fontFamilyBidi: "Segoe UI"
                            }
                          }
                        ]
                      }
                    ],
                    cellFormat: {
                      columnSpan: 1,
                      rowSpan: 1,
                      preferredWidth: 12.859999656677246,
                      preferredWidthType: "Percent",
                      verticalAlignment: "Top",
                      isSamePaddingAsTable: true,
                      borders: {
                        left: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        right: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        top: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        bottom: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        horizontal: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      },
                      shading: {
                        texture: "TextureNone",
                        backgroundColor: "#4B88BAFF"
                      },
                      cellWidth: 61.452754974365234
                    }
                  },
                  {
                    blocks: [
                      {
                        paragraphFormat: {
                          textAlignment: "Center",
                          styleName: "Normal"
                        },
                        inlines: [
                          {
                            text: "Price",
                            characterFormat: {
                              bold: true,
                              fontSize: 10,
                              fontFamily: "Segoe UI",
                              fontColor: "#FFFFFFFF",
                              boldBidi: true,
                              fontSizeBidi: 10,
                              fontFamilyBidi: "Segoe UI"
                            }
                          }
                        ]
                      }
                    ],
                    cellFormat: {
                      columnSpan: 1,
                      rowSpan: 1,
                      preferredWidth: 14,
                      preferredWidthType: "Percent",
                      verticalAlignment: "Top",
                      isSamePaddingAsTable: true,
                      borders: {
                        left: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        right: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        top: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        bottom: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        horizontal: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      },
                      shading: {
                        texture: "TextureNone",
                        backgroundColor: "#4B88BAFF"
                      },
                      cellWidth: 66.82987213134766
                    }
                  }
                ]
              },
              {
                rowFormat: {
                  allowBreakAcrossPages: true,
                  isHeader: false,
                  height: 19.5,
                  heightType: "Exactly",
                  borders: {
                    left: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: true
                    },
                    right: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: true
                    },
                    top: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: true
                    },
                    bottom: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: true
                    },
                    vertical: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: true
                    },
                    horizontal: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: true
                    },
                    diagonalDown: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: false
                    },
                    diagonalUp: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: false
                    }
                  },
                  leftMargin: 5,
                  rightMargin: 5
                },
                cells: [
                  {
                    blocks: [
                      {
                        paragraphFormat: {
                          textAlignment: "Center",
                          styleName: "Normal"
                        },
                        inlines: [
                          {
                            text: "41",
                            characterFormat: {
                              fontSize: 10,
                              fontFamily: "Segoe UI",
                              fontColor: "#000000FF",
                              fontSizeBidi: 10,
                              fontFamilyBidi: "Segoe UI"
                            }
                          }
                        ]
                      }
                    ],
                    cellFormat: {
                      columnSpan: 1,
                      rowSpan: 1,
                      preferredWidth: 8.899999618530273,
                      preferredWidthType: "Percent",
                      verticalAlignment: "Top",
                      isSamePaddingAsTable: true,
                      borders: {
                        left: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        right: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        top: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        bottom: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        horizontal: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      },
                      shading: { texture: "TextureNone" },
                      cellWidth: 42.607242584228516
                    }
                  },
                  {
                    blocks: [
                      {
                        paragraphFormat: { styleName: "Normal" },
                        inlines: [
                          {
                            text: "Jack's New England Clam Chowder",
                            characterFormat: {
                              fontSize: 10,
                              fontFamily: "Segoe UI",
                              fontColor: "#000000FF",
                              fontSizeBidi: 10,
                              fontFamilyBidi: "Segoe UI"
                            }
                          }
                        ]
                      }
                    ],
                    cellFormat: {
                      columnSpan: 1,
                      rowSpan: 1,
                      preferredWidth: 38.540000915527344,
                      preferredWidthType: "Percent",
                      verticalAlignment: "Top",
                      isSamePaddingAsTable: true,
                      borders: {
                        left: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        right: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        top: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        bottom: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        horizontal: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      },
                      shading: { texture: "TextureNone" },
                      cellWidth: 184.2046356201172
                    }
                  },
                  {
                    blocks: [
                      {
                        paragraphFormat: {
                          textAlignment: "Right",
                          styleName: "Normal"
                        },
                        inlines: [
                          {
                            text: "10",
                            characterFormat: {
                              fontSize: 10,
                              fontFamily: "Segoe UI",
                              fontColor: "#000000FF",
                              fontSizeBidi: 10,
                              fontFamilyBidi: "Segoe UI"
                            }
                          }
                        ]
                      }
                    ],
                    cellFormat: {
                      columnSpan: 1,
                      rowSpan: 1,
                      preferredWidth: 12.859999656677246,
                      preferredWidthType: "Percent",
                      verticalAlignment: "Top",
                      isSamePaddingAsTable: true,
                      borders: {
                        left: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        right: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        top: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        bottom: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        horizontal: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      },
                      shading: { texture: "TextureNone" },
                      cellWidth: 61.452754974365234
                    }
                  },
                  {
                    blocks: [
                      {
                        paragraphFormat: {
                          textAlignment: "Right",
                          styleName: "Normal"
                        },
                        inlines: [
                          {
                            text: "$7.70",
                            characterFormat: {
                              fontSize: 10,
                              fontFamily: "Segoe UI",
                              fontColor: "#000000FF",
                              fontSizeBidi: 10,
                              fontFamilyBidi: "Segoe UI"
                            }
                          }
                        ]
                      }
                    ],
                    cellFormat: {
                      columnSpan: 1,
                      rowSpan: 1,
                      preferredWidth: 12.859999656677246,
                      preferredWidthType: "Percent",
                      verticalAlignment: "Top",
                      isSamePaddingAsTable: true,
                      borders: {
                        left: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        right: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        top: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        bottom: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        horizontal: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      },
                      shading: { texture: "TextureNone" },
                      cellWidth: 61.452754974365234
                    }
                  },
                  {
                    blocks: [
                      {
                        paragraphFormat: {
                          textAlignment: "Right",
                          styleName: "Normal"
                        },
                        inlines: [
                          {
                            text: "0.00%",
                            characterFormat: {
                              fontSize: 10,
                              fontFamily: "Segoe UI",
                              fontColor: "#000000FF",
                              fontSizeBidi: 10,
                              fontFamilyBidi: "Segoe UI"
                            }
                          }
                        ]
                      }
                    ],
                    cellFormat: {
                      columnSpan: 1,
                      rowSpan: 1,
                      preferredWidth: 12.859999656677246,
                      preferredWidthType: "Percent",
                      verticalAlignment: "Top",
                      isSamePaddingAsTable: true,
                      borders: {
                        left: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        right: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        top: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        bottom: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        horizontal: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      },
                      shading: { texture: "TextureNone" },
                      cellWidth: 61.452754974365234
                    }
                  },
                  {
                    blocks: [
                      {
                        paragraphFormat: {
                          textAlignment: "Right",
                          styleName: "Normal"
                        },
                        inlines: [
                          {
                            text: "$77.00",
                            characterFormat: {
                              fontSize: 10,
                              fontFamily: "Segoe UI",
                              fontColor: "#000000FF",
                              fontSizeBidi: 10,
                              fontFamilyBidi: "Segoe UI"
                            }
                          }
                        ]
                      }
                    ],
                    cellFormat: {
                      columnSpan: 1,
                      rowSpan: 1,
                      preferredWidth: 14,
                      preferredWidthType: "Percent",
                      verticalAlignment: "Top",
                      isSamePaddingAsTable: true,
                      borders: {
                        left: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        right: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        top: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        bottom: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        horizontal: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      },
                      shading: { texture: "TextureNone" },
                      cellWidth: 66.82987213134766
                    }
                  }
                ]
              },
              {
                rowFormat: {
                  allowBreakAcrossPages: true,
                  isHeader: false,
                  height: 19.5,
                  heightType: "Exactly",
                  borders: {
                    left: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: true
                    },
                    right: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: true
                    },
                    top: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: true
                    },
                    bottom: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: true
                    },
                    vertical: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: true
                    },
                    horizontal: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: true
                    },
                    diagonalDown: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: false
                    },
                    diagonalUp: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: false
                    }
                  },
                  leftMargin: 5,
                  rightMargin: 5
                },
                cells: [
                  {
                    blocks: [
                      {
                        paragraphFormat: {
                          textAlignment: "Center",
                          styleName: "Normal"
                        },
                        inlines: [
                          {
                            text: "51",
                            characterFormat: {
                              fontSize: 10,
                              fontFamily: "Segoe UI",
                              fontColor: "#000000FF",
                              fontSizeBidi: 10,
                              fontFamilyBidi: "Segoe UI"
                            }
                          }
                        ]
                      }
                    ],
                    cellFormat: {
                      columnSpan: 1,
                      rowSpan: 1,
                      preferredWidth: 8.899999618530273,
                      preferredWidthType: "Percent",
                      verticalAlignment: "Top",
                      isSamePaddingAsTable: true,
                      borders: {
                        left: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        right: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        top: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        bottom: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        horizontal: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      },
                      shading: { texture: "TextureNone" },
                      cellWidth: 42.607242584228516
                    }
                  },
                  {
                    blocks: [
                      {
                        paragraphFormat: { styleName: "Normal" },
                        inlines: [
                          {
                            text: "Manjimup",
                            characterFormat: {
                              fontSize: 10,
                              fontFamily: "Segoe UI",
                              fontColor: "#000000FF",
                              fontSizeBidi: 10,
                              fontFamilyBidi: "Segoe UI"
                            }
                          },
                          {
                            text: " Dried Apples",
                            characterFormat: {
                              fontSize: 10,
                              fontFamily: "Segoe UI",
                              fontColor: "#000000FF",
                              fontSizeBidi: 10,
                              fontFamilyBidi: "Segoe UI"
                            }
                          }
                        ]
                      }
                    ],
                    cellFormat: {
                      columnSpan: 1,
                      rowSpan: 1,
                      preferredWidth: 38.540000915527344,
                      preferredWidthType: "Percent",
                      verticalAlignment: "Top",
                      isSamePaddingAsTable: true,
                      borders: {
                        left: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        right: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        top: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        bottom: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        horizontal: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      },
                      shading: { texture: "TextureNone" },
                      cellWidth: 184.2046356201172
                    }
                  },
                  {
                    blocks: [
                      {
                        paragraphFormat: {
                          textAlignment: "Right",
                          styleName: "Normal"
                        },
                        inlines: [
                          {
                            text: "35",
                            characterFormat: {
                              fontSize: 10,
                              fontFamily: "Segoe UI",
                              fontColor: "#000000FF",
                              fontSizeBidi: 10,
                              fontFamilyBidi: "Segoe UI"
                            }
                          }
                        ]
                      }
                    ],
                    cellFormat: {
                      columnSpan: 1,
                      rowSpan: 1,
                      preferredWidth: 12.859999656677246,
                      preferredWidthType: "Percent",
                      verticalAlignment: "Top",
                      isSamePaddingAsTable: true,
                      borders: {
                        left: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        right: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        top: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        bottom: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        horizontal: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      },
                      shading: { texture: "TextureNone" },
                      cellWidth: 61.452754974365234
                    }
                  },
                  {
                    blocks: [
                      {
                        paragraphFormat: {
                          textAlignment: "Right",
                          styleName: "Normal"
                        },
                        inlines: [
                          {
                            text: "$42.40",
                            characterFormat: {
                              fontSize: 10,
                              fontFamily: "Segoe UI",
                              fontColor: "#000000FF",
                              fontSizeBidi: 10,
                              fontFamilyBidi: "Segoe UI"
                            }
                          }
                        ]
                      }
                    ],
                    cellFormat: {
                      columnSpan: 1,
                      rowSpan: 1,
                      preferredWidth: 12.859999656677246,
                      preferredWidthType: "Percent",
                      verticalAlignment: "Top",
                      isSamePaddingAsTable: true,
                      borders: {
                        left: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        right: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        top: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        bottom: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        horizontal: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      },
                      shading: { texture: "TextureNone" },
                      cellWidth: 61.452754974365234
                    }
                  },
                  {
                    blocks: [
                      {
                        paragraphFormat: {
                          textAlignment: "Right",
                          styleName: "Normal"
                        },
                        inlines: [
                          {
                            text: "15.00%",
                            characterFormat: {
                              fontSize: 10,
                              fontFamily: "Segoe UI",
                              fontColor: "#000000FF",
                              fontSizeBidi: 10,
                              fontFamilyBidi: "Segoe UI"
                            }
                          }
                        ]
                      }
                    ],
                    cellFormat: {
                      columnSpan: 1,
                      rowSpan: 1,
                      preferredWidth: 12.859999656677246,
                      preferredWidthType: "Percent",
                      verticalAlignment: "Top",
                      isSamePaddingAsTable: true,
                      borders: {
                        left: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        right: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        top: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        bottom: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        horizontal: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      },
                      shading: { texture: "TextureNone" },
                      cellWidth: 61.452754974365234
                    }
                  },
                  {
                    blocks: [
                      {
                        paragraphFormat: {
                          textAlignment: "Right",
                          styleName: "Normal"
                        },
                        inlines: [
                          {
                            text: "$1,484.00",
                            characterFormat: {
                              fontSize: 10,
                              fontFamily: "Segoe UI",
                              fontColor: "#000000FF",
                              fontSizeBidi: 10,
                              fontFamilyBidi: "Segoe UI"
                            }
                          }
                        ]
                      }
                    ],
                    cellFormat: {
                      columnSpan: 1,
                      rowSpan: 1,
                      preferredWidth: 14,
                      preferredWidthType: "Percent",
                      verticalAlignment: "Top",
                      isSamePaddingAsTable: true,
                      borders: {
                        left: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        right: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        top: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        bottom: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        horizontal: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      },
                      shading: { texture: "TextureNone" },
                      cellWidth: 66.82987213134766
                    }
                  }
                ]
              },
              {
                rowFormat: {
                  allowBreakAcrossPages: true,
                  isHeader: false,
                  height: 19.5,
                  heightType: "Exactly",
                  borders: {
                    left: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: true
                    },
                    right: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: true
                    },
                    top: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: true
                    },
                    bottom: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: true
                    },
                    vertical: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: true
                    },
                    horizontal: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: true
                    },
                    diagonalDown: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: false
                    },
                    diagonalUp: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: false
                    }
                  },
                  leftMargin: 5,
                  rightMargin: 5
                },
                cells: [
                  {
                    blocks: [
                      {
                        paragraphFormat: {
                          textAlignment: "Center",
                          styleName: "Normal"
                        },
                        inlines: [
                          {
                            text: "65",
                            characterFormat: {
                              fontSize: 10,
                              fontFamily: "Segoe UI",
                              fontColor: "#000000FF",
                              fontSizeBidi: 10,
                              fontFamilyBidi: "Segoe UI"
                            }
                          }
                        ]
                      }
                    ],
                    cellFormat: {
                      columnSpan: 1,
                      rowSpan: 1,
                      preferredWidth: 8.899999618530273,
                      preferredWidthType: "Percent",
                      verticalAlignment: "Top",
                      isSamePaddingAsTable: true,
                      borders: {
                        left: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        right: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        top: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        bottom: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        horizontal: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      },
                      shading: { texture: "TextureNone" },
                      cellWidth: 42.607242584228516
                    }
                  },
                  {
                    blocks: [
                      {
                        paragraphFormat: { styleName: "Normal" },
                        inlines: [
                          {
                            text: "Louisiana Fiery Hot Pepper Sauce",
                            characterFormat: {
                              fontSize: 10,
                              fontFamily: "Segoe UI",
                              fontColor: "#000000FF",
                              fontSizeBidi: 10,
                              fontFamilyBidi: "Segoe UI"
                            }
                          }
                        ]
                      }
                    ],
                    cellFormat: {
                      columnSpan: 1,
                      rowSpan: 1,
                      preferredWidth: 38.540000915527344,
                      preferredWidthType: "Percent",
                      verticalAlignment: "Top",
                      isSamePaddingAsTable: true,
                      borders: {
                        left: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        right: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        top: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        bottom: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        horizontal: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      },
                      shading: { texture: "TextureNone" },
                      cellWidth: 184.2046356201172
                    }
                  },
                  {
                    blocks: [
                      {
                        paragraphFormat: {
                          textAlignment: "Right",
                          styleName: "Normal"
                        },
                        inlines: [
                          {
                            text: "15",
                            characterFormat: {
                              fontSize: 10,
                              fontFamily: "Segoe UI",
                              fontColor: "#000000FF",
                              fontSizeBidi: 10,
                              fontFamilyBidi: "Segoe UI"
                            }
                          }
                        ]
                      }
                    ],
                    cellFormat: {
                      columnSpan: 1,
                      rowSpan: 1,
                      preferredWidth: 12.859999656677246,
                      preferredWidthType: "Percent",
                      verticalAlignment: "Top",
                      isSamePaddingAsTable: true,
                      borders: {
                        left: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        right: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        top: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        bottom: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        horizontal: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      },
                      shading: { texture: "TextureNone" },
                      cellWidth: 61.452754974365234
                    }
                  },
                  {
                    blocks: [
                      {
                        paragraphFormat: {
                          textAlignment: "Right",
                          styleName: "Normal"
                        },
                        inlines: [
                          {
                            text: "$16.80",
                            characterFormat: {
                              fontSize: 10,
                              fontFamily: "Segoe UI",
                              fontColor: "#000000FF",
                              fontSizeBidi: 10,
                              fontFamilyBidi: "Segoe UI"
                            }
                          }
                        ]
                      }
                    ],
                    cellFormat: {
                      columnSpan: 1,
                      rowSpan: 1,
                      preferredWidth: 12.859999656677246,
                      preferredWidthType: "Percent",
                      verticalAlignment: "Top",
                      isSamePaddingAsTable: true,
                      borders: {
                        left: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        right: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        top: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        bottom: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        horizontal: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      },
                      shading: { texture: "TextureNone" },
                      cellWidth: 61.452754974365234
                    }
                  },
                  {
                    blocks: [
                      {
                        paragraphFormat: {
                          textAlignment: "Right",
                          styleName: "Normal"
                        },
                        inlines: [
                          {
                            text: "15.00%",
                            characterFormat: {
                              fontSize: 10,
                              fontFamily: "Segoe UI",
                              fontColor: "#000000FF",
                              fontSizeBidi: 10,
                              fontFamilyBidi: "Segoe UI"
                            }
                          }
                        ]
                      }
                    ],
                    cellFormat: {
                      columnSpan: 1,
                      rowSpan: 1,
                      preferredWidth: 12.859999656677246,
                      preferredWidthType: "Percent",
                      verticalAlignment: "Top",
                      isSamePaddingAsTable: true,
                      borders: {
                        left: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        right: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        top: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        bottom: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        horizontal: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      },
                      shading: { texture: "TextureNone" },
                      cellWidth: 61.452754974365234
                    }
                  },
                  {
                    blocks: [
                      {
                        paragraphFormat: {
                          textAlignment: "Right",
                          styleName: "Normal"
                        },
                        inlines: [
                          {
                            text: "$252.00",
                            characterFormat: {
                              fontSize: 10,
                              fontFamily: "Segoe UI",
                              fontColor: "#000000FF",
                              fontSizeBidi: 10,
                              fontFamilyBidi: "Segoe UI"
                            }
                          }
                        ]
                      }
                    ],
                    cellFormat: {
                      columnSpan: 1,
                      rowSpan: 1,
                      preferredWidth: 14,
                      preferredWidthType: "Percent",
                      verticalAlignment: "Top",
                      isSamePaddingAsTable: true,
                      borders: {
                        left: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        right: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        top: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        bottom: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        horizontal: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      },
                      shading: { texture: "TextureNone" },
                      cellWidth: 66.82987213134766
                    }
                  }
                ]
              },
              {
                rowFormat: {
                  allowBreakAcrossPages: true,
                  isHeader: false,
                  height: 19.5,
                  heightType: "Exactly",
                  borders: {
                    left: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: true
                    },
                    right: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: true
                    },
                    top: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: true
                    },
                    bottom: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: true
                    },
                    vertical: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: true
                    },
                    horizontal: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: true
                    },
                    diagonalDown: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: false
                    },
                    diagonalUp: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: false
                    }
                  },
                  leftMargin: 5,
                  rightMargin: 5
                },
                cells: [
                  {
                    blocks: [
                      {
                        characterFormat: {
                          fontSize: 10,
                          fontFamily: "Segoe UI",
                          fontColor: "#000000FF",
                          fontSizeBidi: 10,
                          fontFamilyBidi: "Segoe UI"
                        },
                        paragraphFormat: {
                          textAlignment: "Right",
                          styleName: "Normal"
                        },
                        inlines: [
                          {
                            text: "Total",
                            characterFormat: {
                              bold: true,
                              fontSize: 10,
                              fontFamily: "Arial",
                              fontColor: "#000000FF",
                              boldBidi: true,
                              fontSizeBidi: 10,
                              fontFamilyBidi: "Arial"
                            }
                          }
                        ]
                      }
                    ],
                    cellFormat: {
                      columnSpan: 5,
                      rowSpan: 1,
                      preferredWidth: 86,
                      preferredWidthType: "Percent",
                      verticalAlignment: "Top",
                      isSamePaddingAsTable: true,
                      borders: {
                        left: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        right: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        top: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        bottom: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        horizontal: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      },
                      shading: { texture: "TextureNone" },
                      cellWidth: 411.170166015625
                    }
                  },
                  {
                    blocks: [
                      {
                        characterFormat: {
                          fontSize: 10,
                          fontFamily: "Segoe UI",
                          fontColor: "#000000FF",
                          fontSizeBidi: 10,
                          fontFamilyBidi: "Segoe UI"
                        },
                        paragraphFormat: {
                          textAlignment: "Right",
                          styleName: "Normal"
                        },
                        inlines: [
                          {
                            text: "$1,813.00",
                            characterFormat: {
                              fontSize: 10,
                              fontFamily: "Arial",
                              fontColor: "#000000FF",
                              fontSizeBidi: 10,
                              fontFamilyBidi: "Arial"
                            }
                          }
                        ]
                      }
                    ],
                    cellFormat: {
                      columnSpan: 1,
                      rowSpan: 1,
                      preferredWidth: 14,
                      preferredWidthType: "Percent",
                      verticalAlignment: "Top",
                      isSamePaddingAsTable: true,
                      borders: {
                        left: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        right: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        top: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        bottom: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        horizontal: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      },
                      shading: { texture: "TextureNone" },
                      cellWidth: 66.82987213134766
                    }
                  }
                ]
              }
            ],
            title: null,
            description: null,
            tableFormat: {
              allowAutoFit: true,
              leftMargin: 5,
              rightMargin: 5,
              leftIndent: 0,
              tableAlignment: "Left",
              preferredWidth: 100,
              preferredWidthType: "Percent",
              borders: {
                left: {
                  lineStyle: "None",
                  lineWidth: 0,
                  shadow: false,
                  space: 0,
                  hasNoneStyle: true
                },
                right: {
                  lineStyle: "None",
                  lineWidth: 0,
                  shadow: false,
                  space: 0,
                  hasNoneStyle: true
                },
                top: {
                  lineStyle: "None",
                  lineWidth: 0,
                  shadow: false,
                  space: 0,
                  hasNoneStyle: true
                },
                bottom: {
                  lineStyle: "None",
                  lineWidth: 0,
                  shadow: false,
                  space: 0,
                  hasNoneStyle: true
                },
                vertical: {
                  lineStyle: "None",
                  lineWidth: 0,
                  shadow: false,
                  space: 0,
                  hasNoneStyle: true
                },
                horizontal: {
                  lineStyle: "None",
                  lineWidth: 0,
                  shadow: false,
                  space: 0,
                  hasNoneStyle: true
                },
                diagonalDown: {
                  lineStyle: "None",
                  lineWidth: 0,
                  shadow: false,
                  space: 0,
                  hasNoneStyle: false
                },
                diagonalUp: {
                  lineStyle: "None",
                  lineWidth: 0,
                  shadow: false,
                  space: 0,
                  hasNoneStyle: false
                }
              },
              bidi: false,
              horizontalPositionAbs: "Left",
              horizontalPosition: 0
            }
          },
          { paragraphFormat: { styleName: "Normal" }, inlines: [] },
          {
            rows: [
              {
                rowFormat: {
                  allowBreakAcrossPages: true,
                  isHeader: false,
                  height: 19.5,
                  heightType: "Exactly",
                  borders: {
                    left: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: true
                    },
                    right: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: true
                    },
                    top: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: true
                    },
                    bottom: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: true
                    },
                    vertical: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: true
                    },
                    horizontal: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: true
                    },
                    diagonalDown: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: false
                    },
                    diagonalUp: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: false
                    }
                  },
                  leftMargin: 5,
                  rightMargin: 5
                },
                cells: [
                  {
                    blocks: [
                      {
                        paragraphFormat: {
                          textAlignment: "Center",
                          styleName: "Normal"
                        },
                        inlines: [
                          {
                            text: "Ship Name",
                            characterFormat: {
                              bold: true,
                              fontSize: 10,
                              fontFamily: "Segoe UI",
                              fontColor: "#FFFFFFFF",
                              boldBidi: true,
                              fontSizeBidi: 10,
                              fontFamilyBidi: "Segoe UI"
                            }
                          }
                        ]
                      }
                    ],
                    cellFormat: {
                      columnSpan: 1,
                      rowSpan: 1,
                      preferredWidth: 109.69999694824219,
                      preferredWidthType: "Point",
                      verticalAlignment: "Top",
                      isSamePaddingAsTable: true,
                      borders: {
                        left: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        right: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        top: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        bottom: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        horizontal: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      },
                      shading: {
                        texture: "TextureNone",
                        backgroundColor: "#4B88BAFF"
                      },
                      cellWidth: 109.69999694824219
                    }
                  },
                  {
                    blocks: [
                      {
                        paragraphFormat: {
                          textAlignment: "Center",
                          styleName: "Normal"
                        },
                        inlines: [
                          {
                            text: "Ship Address",
                            characterFormat: {
                              bold: true,
                              fontSize: 10,
                              fontFamily: "Segoe UI",
                              fontColor: "#FFFFFFFF",
                              boldBidi: true,
                              fontSizeBidi: 10,
                              fontFamilyBidi: "Segoe UI"
                            }
                          }
                        ]
                      }
                    ],
                    cellFormat: {
                      columnSpan: 1,
                      rowSpan: 1,
                      preferredWidth: 86.6500015258789,
                      preferredWidthType: "Point",
                      verticalAlignment: "Top",
                      isSamePaddingAsTable: true,
                      borders: {
                        left: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        right: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        top: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        bottom: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        horizontal: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      },
                      shading: {
                        texture: "TextureNone",
                        backgroundColor: "#4B88BAFF"
                      },
                      cellWidth: 86.6500015258789
                    }
                  },
                  {
                    blocks: [
                      {
                        paragraphFormat: {
                          textAlignment: "Center",
                          styleName: "Normal"
                        },
                        inlines: [
                          {
                            text: "Freight",
                            characterFormat: {
                              bold: true,
                              fontSize: 10,
                              fontFamily: "Segoe UI",
                              fontColor: "#FFFFFFFF",
                              boldBidi: true,
                              fontSizeBidi: 10,
                              fontFamilyBidi: "Segoe UI"
                            }
                          }
                        ]
                      }
                    ],
                    cellFormat: {
                      columnSpan: 1,
                      rowSpan: 1,
                      preferredWidth: 50.349998474121094,
                      preferredWidthType: "Point",
                      verticalAlignment: "Top",
                      isSamePaddingAsTable: true,
                      borders: {
                        left: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        right: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        top: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        bottom: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        horizontal: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      },
                      shading: {
                        texture: "TextureNone",
                        backgroundColor: "#4B88BAFF"
                      },
                      cellWidth: 50.349998474121094
                    }
                  },
                  {
                    blocks: [
                      {
                        paragraphFormat: {
                          textAlignment: "Center",
                          styleName: "Normal"
                        },
                        inlines: [
                          {
                            text: "Shipped Date",
                            characterFormat: {
                              bold: true,
                              fontSize: 10,
                              fontFamily: "Segoe UI",
                              fontColor: "#FFFFFFFF",
                              boldBidi: true,
                              fontSizeBidi: 10,
                              fontFamilyBidi: "Segoe UI"
                            }
                          }
                        ]
                      }
                    ],
                    cellFormat: {
                      columnSpan: 1,
                      rowSpan: 1,
                      preferredWidth: 76.8499984741211,
                      preferredWidthType: "Point",
                      verticalAlignment: "Top",
                      isSamePaddingAsTable: true,
                      borders: {
                        left: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        right: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        top: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        bottom: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        horizontal: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      },
                      shading: {
                        texture: "TextureNone",
                        backgroundColor: "#4B88BAFF"
                      },
                      cellWidth: 76.8499984741211
                    }
                  },
                  {
                    blocks: [
                      {
                        paragraphFormat: {
                          textAlignment: "Center",
                          styleName: "Normal"
                        },
                        inlines: [
                          {
                            text: "Ship City",
                            characterFormat: {
                              bold: true,
                              fontSize: 10,
                              fontFamily: "Segoe UI",
                              fontColor: "#FFFFFFFF",
                              boldBidi: true,
                              fontSizeBidi: 10,
                              fontFamilyBidi: "Segoe UI"
                            }
                          }
                        ]
                      }
                    ],
                    cellFormat: {
                      columnSpan: 1,
                      rowSpan: 1,
                      preferredWidth: 56.54999923706055,
                      preferredWidthType: "Point",
                      verticalAlignment: "Top",
                      isSamePaddingAsTable: true,
                      borders: {
                        left: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        right: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        top: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        bottom: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        horizontal: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      },
                      shading: {
                        texture: "TextureNone",
                        backgroundColor: "#4B88BAFF"
                      },
                      cellWidth: 56.54999923706055
                    }
                  },
                  {
                    blocks: [
                      {
                        paragraphFormat: {
                          textAlignment: "Center",
                          styleName: "Normal"
                        },
                        inlines: [
                          {
                            text: "Ship Country",
                            characterFormat: {
                              bold: true,
                              fontSize: 10,
                              fontFamily: "Segoe UI",
                              fontColor: "#FFFFFFFF",
                              boldBidi: true,
                              fontSizeBidi: 10,
                              fontFamilyBidi: "Segoe UI"
                            }
                          }
                        ]
                      }
                    ],
                    cellFormat: {
                      columnSpan: 1,
                      rowSpan: 1,
                      preferredWidth: 86.5999984741211,
                      preferredWidthType: "Point",
                      verticalAlignment: "Top",
                      isSamePaddingAsTable: true,
                      borders: {
                        left: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        right: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        top: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        bottom: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        horizontal: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      },
                      shading: {
                        texture: "TextureNone",
                        backgroundColor: "#4B88BAFF"
                      },
                      cellWidth: 86.5999984741211
                    }
                  }
                ]
              },
              {
                rowFormat: {
                  allowBreakAcrossPages: true,
                  isHeader: false,
                  height: 32.25,
                  heightType: "Exactly",
                  borders: {
                    left: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: true
                    },
                    right: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: true
                    },
                    top: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: true
                    },
                    bottom: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: true
                    },
                    vertical: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: true
                    },
                    horizontal: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: true
                    },
                    diagonalDown: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: false
                    },
                    diagonalUp: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: false
                    }
                  },
                  leftMargin: 5,
                  rightMargin: 5
                },
                cells: [
                  {
                    blocks: [
                      {
                        paragraphFormat: { styleName: "Normal" },
                        inlines: [
                          {
                            text: "Hanari",
                            characterFormat: {
                              fontSize: 10,
                              fontFamily: "Segoe UI",
                              fontColor: "#000000FF",
                              fontSizeBidi: 10,
                              fontFamilyBidi: "Segoe UI"
                            }
                          },
                          {
                            text: " Carnes",
                            characterFormat: {
                              fontSize: 10,
                              fontFamily: "Segoe UI",
                              fontColor: "#000000FF",
                              fontSizeBidi: 10,
                              fontFamilyBidi: "Segoe UI"
                            }
                          }
                        ]
                      }
                    ],
                    cellFormat: {
                      columnSpan: 1,
                      rowSpan: 1,
                      preferredWidth: 109.69999694824219,
                      preferredWidthType: "Point",
                      verticalAlignment: "Top",
                      isSamePaddingAsTable: true,
                      borders: {
                        left: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        right: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        top: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        bottom: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        horizontal: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      },
                      shading: { texture: "TextureNone" },
                      cellWidth: 109.69999694824219
                    }
                  },
                  {
                    blocks: [
                      {
                        paragraphFormat: { styleName: "Normal" },
                        inlines: [
                          {
                            text: "Rua",
                            characterFormat: {
                              fontSize: 10,
                              fontFamily: "Segoe UI",
                              fontColor: "#000000FF",
                              fontSizeBidi: 10,
                              fontFamilyBidi: "Segoe UI"
                            }
                          },
                          {
                            text: " do ",
                            characterFormat: {
                              fontSize: 10,
                              fontFamily: "Segoe UI",
                              fontColor: "#000000FF",
                              fontSizeBidi: 10,
                              fontFamilyBidi: "Segoe UI"
                            }
                          },
                          {
                            text: "Paço",
                            characterFormat: {
                              fontSize: 10,
                              fontFamily: "Segoe UI",
                              fontColor: "#000000FF",
                              fontSizeBidi: 10,
                              fontFamilyBidi: "Segoe UI"
                            }
                          },
                          {
                            text: ", 67",
                            characterFormat: {
                              fontSize: 10,
                              fontFamily: "Segoe UI",
                              fontColor: "#000000FF",
                              fontSizeBidi: 10,
                              fontFamilyBidi: "Segoe UI"
                            }
                          }
                        ]
                      }
                    ],
                    cellFormat: {
                      columnSpan: 1,
                      rowSpan: 1,
                      preferredWidth: 86.6500015258789,
                      preferredWidthType: "Point",
                      verticalAlignment: "Top",
                      isSamePaddingAsTable: true,
                      borders: {
                        left: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        right: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        top: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        bottom: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        horizontal: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      },
                      shading: { texture: "TextureNone" },
                      cellWidth: 86.6500015258789
                    }
                  },
                  {
                    blocks: [
                      {
                        paragraphFormat: {
                          textAlignment: "Right",
                          styleName: "Normal"
                        },
                        inlines: [
                          {
                            text: "$65.83",
                            characterFormat: {
                              fontSize: 10,
                              fontFamily: "Segoe UI",
                              fontColor: "#000000FF",
                              fontSizeBidi: 10,
                              fontFamilyBidi: "Segoe UI"
                            }
                          }
                        ]
                      }
                    ],
                    cellFormat: {
                      columnSpan: 1,
                      rowSpan: 1,
                      preferredWidth: 50.349998474121094,
                      preferredWidthType: "Point",
                      verticalAlignment: "Top",
                      isSamePaddingAsTable: true,
                      borders: {
                        left: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        right: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        top: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        bottom: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        horizontal: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      },
                      shading: { texture: "TextureNone" },
                      cellWidth: 50.349998474121094
                    }
                  },
                  {
                    blocks: [
                      {
                        paragraphFormat: {
                          textAlignment: "Center",
                          styleName: "Normal"
                        },
                        inlines: [
                          {
                            text: "7/12/1996",
                            characterFormat: {
                              fontSize: 10,
                              fontFamily: "Segoe UI",
                              fontColor: "#000000FF",
                              fontSizeBidi: 10,
                              fontFamilyBidi: "Segoe UI"
                            }
                          }
                        ]
                      }
                    ],
                    cellFormat: {
                      columnSpan: 1,
                      rowSpan: 1,
                      preferredWidth: 76.8499984741211,
                      preferredWidthType: "Point",
                      verticalAlignment: "Top",
                      isSamePaddingAsTable: true,
                      borders: {
                        left: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        right: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        top: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        bottom: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        horizontal: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      },
                      shading: { texture: "TextureNone" },
                      cellWidth: 76.8499984741211
                    }
                  },
                  {
                    blocks: [
                      {
                        paragraphFormat: { styleName: "Normal" },
                        inlines: [
                          {
                            text: "Rio de Janeiro",
                            characterFormat: {
                              fontSize: 10,
                              fontFamily: "Segoe UI",
                              fontColor: "#000000FF",
                              fontSizeBidi: 10,
                              fontFamilyBidi: "Segoe UI"
                            }
                          }
                        ]
                      }
                    ],
                    cellFormat: {
                      columnSpan: 1,
                      rowSpan: 1,
                      preferredWidth: 56.54999923706055,
                      preferredWidthType: "Point",
                      verticalAlignment: "Top",
                      isSamePaddingAsTable: true,
                      borders: {
                        left: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        right: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        top: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        bottom: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        horizontal: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      },
                      shading: { texture: "TextureNone" },
                      cellWidth: 56.54999923706055
                    }
                  },
                  {
                    blocks: [
                      {
                        paragraphFormat: { styleName: "Normal" },
                        inlines: [
                          {
                            text: "Brazil",
                            characterFormat: {
                              fontSize: 10,
                              fontFamily: "Segoe UI",
                              fontColor: "#000000FF",
                              fontSizeBidi: 10,
                              fontFamilyBidi: "Segoe UI"
                            }
                          }
                        ]
                      }
                    ],
                    cellFormat: {
                      columnSpan: 1,
                      rowSpan: 1,
                      preferredWidth: 86.5999984741211,
                      preferredWidthType: "Point",
                      verticalAlignment: "Top",
                      isSamePaddingAsTable: true,
                      borders: {
                        left: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        right: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        top: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        bottom: {
                          lineStyle: "Single",
                          lineWidth: 1.25,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false,
                          color: "#D3D3D3FF"
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        horizontal: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      },
                      shading: { texture: "TextureNone" },
                      cellWidth: 86.5999984741211
                    }
                  }
                ]
              }
            ],
            title: null,
            description: null,
            wrapTextAround: true,
            positioning: {
              allowOverlap: false,
              distanceTop: 0,
              distanceRight: 9,
              distanceLeft: 9,
              distanceBottom: 0,
              verticalOrigin: "Page",
              verticalPosition: 240.05,
              horizontalOrigin: "Column",
              horizontalAlignment: "Left",
              horizontalPosition: 0
            },
            tableFormat: {
              allowAutoFit: false,
              leftMargin: 5,
              rightMargin: 5,
              leftIndent: 0,
              tableAlignment: "Left",
              preferredWidthType: "Auto",
              borders: {
                left: {
                  lineStyle: "None",
                  lineWidth: 0,
                  shadow: false,
                  space: 0,
                  hasNoneStyle: true
                },
                right: {
                  lineStyle: "None",
                  lineWidth: 0,
                  shadow: false,
                  space: 0,
                  hasNoneStyle: true
                },
                top: {
                  lineStyle: "None",
                  lineWidth: 0,
                  shadow: false,
                  space: 0,
                  hasNoneStyle: true
                },
                bottom: {
                  lineStyle: "None",
                  lineWidth: 0,
                  shadow: false,
                  space: 0,
                  hasNoneStyle: true
                },
                vertical: {
                  lineStyle: "None",
                  lineWidth: 0,
                  shadow: false,
                  space: 0,
                  hasNoneStyle: true
                },
                horizontal: {
                  lineStyle: "None",
                  lineWidth: 0,
                  shadow: false,
                  space: 0,
                  hasNoneStyle: true
                },
                diagonalDown: {
                  lineStyle: "None",
                  lineWidth: 0,
                  shadow: false,
                  space: 0,
                  hasNoneStyle: false
                },
                diagonalUp: {
                  lineStyle: "None",
                  lineWidth: 0,
                  shadow: false,
                  space: 0,
                  hasNoneStyle: false
                }
              },
              bidi: false,
              horizontalPositionAbs: "Left",
              horizontalPosition: 0
            }
          },
          { paragraphFormat: { styleName: "Normal" }, inlines: [] }
        ],
        headersFooters: {
          header: {
            blocks: [
              {
                rows: [
                  {
                    rowFormat: {
                      allowBreakAcrossPages: true,
                      isHeader: false,
                      height: 1,
                      heightType: "AtLeast",
                      borders: {
                        left: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: true
                        },
                        right: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: true
                        },
                        top: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: true
                        },
                        bottom: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: true
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: true
                        },
                        horizontal: {
                          lineStyle: "Single",
                          lineWidth: 0.5,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      }
                    },
                    cells: [
                      {
                        blocks: [
                          {
                            paragraphFormat: { styleName: "Header" },
                            inlines: [
                              {
                                text: "Northwind Traders",
                                characterFormat: {
                                  bold: true,
                                  fontSize: 18,
                                  fontFamily: "Segoe UI",
                                  fontColor: "#4B88BAFF",
                                  boldBidi: true,
                                  fontSizeBidi: 18,
                                  fontFamilyBidi: "Segoe UI"
                                }
                              }
                            ]
                          }
                        ],
                        cellFormat: {
                          columnSpan: 1,
                          rowSpan: 1,
                          preferredWidth: 233.75,
                          preferredWidthType: "Point",
                          verticalAlignment: "Top",
                          isSamePaddingAsTable: true,
                          borders: {
                            left: {
                              lineStyle: "None",
                              lineWidth: 0,
                              shadow: false,
                              space: 0,
                              hasNoneStyle: false
                            },
                            right: {
                              lineStyle: "None",
                              lineWidth: 0,
                              shadow: false,
                              space: 0,
                              hasNoneStyle: false
                            },
                            top: {
                              lineStyle: "None",
                              lineWidth: 0,
                              shadow: false,
                              space: 0,
                              hasNoneStyle: false
                            },
                            bottom: {
                              lineStyle: "Single",
                              lineWidth: 0.5,
                              shadow: false,
                              space: 0,
                              hasNoneStyle: false,
                              color: "#A5A5A5FF"
                            },
                            vertical: {
                              lineStyle: "None",
                              lineWidth: 0,
                              shadow: false,
                              space: 0,
                              hasNoneStyle: false
                            },
                            horizontal: {
                              lineStyle: "None",
                              lineWidth: 0,
                              shadow: false,
                              space: 0,
                              hasNoneStyle: false
                            },
                            diagonalDown: {
                              lineStyle: "None",
                              lineWidth: 0,
                              shadow: false,
                              space: 0,
                              hasNoneStyle: false
                            },
                            diagonalUp: {
                              lineStyle: "None",
                              lineWidth: 0,
                              shadow: false,
                              space: 0,
                              hasNoneStyle: false
                            }
                          },
                          shading: { texture: "TextureNone" },
                          cellWidth: 233.75
                        }
                      },
                      {
                        blocks: [
                          {
                            paragraphFormat: {
                              textAlignment: "Right",
                              styleName: "Header"
                            },
                            inlines: [
                              {
                                text: "Invoice",
                                characterFormat: {
                                  bold: true,
                                  fontSize: 18,
                                  fontFamily: "Segoe UI",
                                  fontColor: "#4B88BAFF",
                                  boldBidi: true,
                                  fontSizeBidi: 18,
                                  fontFamilyBidi: "Segoe UI"
                                }
                              }
                            ]
                          }
                        ],
                        cellFormat: {
                          columnSpan: 1,
                          rowSpan: 1,
                          preferredWidth: 233.75,
                          preferredWidthType: "Point",
                          verticalAlignment: "Top",
                          isSamePaddingAsTable: true,
                          borders: {
                            left: {
                              lineStyle: "None",
                              lineWidth: 0,
                              shadow: false,
                              space: 0,
                              hasNoneStyle: false
                            },
                            right: {
                              lineStyle: "None",
                              lineWidth: 0,
                              shadow: false,
                              space: 0,
                              hasNoneStyle: false
                            },
                            top: {
                              lineStyle: "None",
                              lineWidth: 0,
                              shadow: false,
                              space: 0,
                              hasNoneStyle: false
                            },
                            bottom: {
                              lineStyle: "Single",
                              lineWidth: 0.5,
                              shadow: false,
                              space: 0,
                              hasNoneStyle: false,
                              color: "#A5A5A5FF"
                            },
                            vertical: {
                              lineStyle: "None",
                              lineWidth: 0,
                              shadow: false,
                              space: 0,
                              hasNoneStyle: false
                            },
                            horizontal: {
                              lineStyle: "None",
                              lineWidth: 0,
                              shadow: false,
                              space: 0,
                              hasNoneStyle: false
                            },
                            diagonalDown: {
                              lineStyle: "None",
                              lineWidth: 0,
                              shadow: false,
                              space: 0,
                              hasNoneStyle: false
                            },
                            diagonalUp: {
                              lineStyle: "None",
                              lineWidth: 0,
                              shadow: false,
                              space: 0,
                              hasNoneStyle: false
                            }
                          },
                          shading: { texture: "TextureNone" },
                          cellWidth: 233.75
                        }
                      }
                    ]
                  },
                  {
                    rowFormat: {
                      allowBreakAcrossPages: true,
                      isHeader: false,
                      height: 1,
                      heightType: "AtLeast",
                      borders: {
                        left: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: true
                        },
                        right: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: true
                        },
                        top: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: true
                        },
                        bottom: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: true
                        },
                        vertical: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: true
                        },
                        horizontal: {
                          lineStyle: "Single",
                          lineWidth: 0.5,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalDown: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        },
                        diagonalUp: {
                          lineStyle: "None",
                          lineWidth: 0,
                          shadow: false,
                          space: 0,
                          hasNoneStyle: false
                        }
                      }
                    },
                    cells: [
                      {
                        blocks: [
                          {
                            paragraphFormat: { styleName: "Normal" },
                            inlines: []
                          }
                        ],
                        cellFormat: {
                          columnSpan: 1,
                          rowSpan: 1,
                          preferredWidth: 233.75,
                          preferredWidthType: "Point",
                          verticalAlignment: "Top",
                          isSamePaddingAsTable: true,
                          borders: {
                            left: {
                              lineStyle: "None",
                              lineWidth: 0,
                              shadow: false,
                              space: 0,
                              hasNoneStyle: false
                            },
                            right: {
                              lineStyle: "None",
                              lineWidth: 0,
                              shadow: false,
                              space: 0,
                              hasNoneStyle: false
                            },
                            top: {
                              lineStyle: "Single",
                              lineWidth: 0.5,
                              shadow: false,
                              space: 0,
                              hasNoneStyle: false,
                              color: "#A5A5A5FF"
                            },
                            bottom: {
                              lineStyle: "None",
                              lineWidth: 0,
                              shadow: false,
                              space: 0,
                              hasNoneStyle: false
                            },
                            vertical: {
                              lineStyle: "None",
                              lineWidth: 0,
                              shadow: false,
                              space: 0,
                              hasNoneStyle: false
                            },
                            horizontal: {
                              lineStyle: "None",
                              lineWidth: 0,
                              shadow: false,
                              space: 0,
                              hasNoneStyle: false
                            },
                            diagonalDown: {
                              lineStyle: "None",
                              lineWidth: 0,
                              shadow: false,
                              space: 0,
                              hasNoneStyle: false
                            },
                            diagonalUp: {
                              lineStyle: "None",
                              lineWidth: 0,
                              shadow: false,
                              space: 0,
                              hasNoneStyle: false
                            }
                          },
                          shading: { texture: "TextureNone" },
                          cellWidth: 233.75
                        }
                      },
                      {
                        blocks: [
                          {
                            characterFormat: { bold: true, boldBidi: true },
                            paragraphFormat: {
                              beforeSpacing: 6,
                              textAlignment: "Right",
                              styleName: "Normal"
                            },
                            inlines: [
                              {
                                text: "July 1996",
                                characterFormat: {
                                  fontFamily: "Segoe UI",
                                  fontColor: "#4B88BAFF",
                                  fontFamilyBidi: "Segoe UI"
                                }
                              }
                            ]
                          }
                        ],
                        cellFormat: {
                          columnSpan: 1,
                          rowSpan: 1,
                          preferredWidth: 233.75,
                          preferredWidthType: "Point",
                          verticalAlignment: "Top",
                          isSamePaddingAsTable: true,
                          borders: {
                            left: {
                              lineStyle: "None",
                              lineWidth: 0,
                              shadow: false,
                              space: 0,
                              hasNoneStyle: false
                            },
                            right: {
                              lineStyle: "None",
                              lineWidth: 0,
                              shadow: false,
                              space: 0,
                              hasNoneStyle: false
                            },
                            top: {
                              lineStyle: "Single",
                              lineWidth: 0.5,
                              shadow: false,
                              space: 0,
                              hasNoneStyle: false,
                              color: "#A5A5A5FF"
                            },
                            bottom: {
                              lineStyle: "None",
                              lineWidth: 0,
                              shadow: false,
                              space: 0,
                              hasNoneStyle: false
                            },
                            vertical: {
                              lineStyle: "None",
                              lineWidth: 0,
                              shadow: false,
                              space: 0,
                              hasNoneStyle: false
                            },
                            horizontal: {
                              lineStyle: "None",
                              lineWidth: 0,
                              shadow: false,
                              space: 0,
                              hasNoneStyle: false
                            },
                            diagonalDown: {
                              lineStyle: "None",
                              lineWidth: 0,
                              shadow: false,
                              space: 0,
                              hasNoneStyle: false
                            },
                            diagonalUp: {
                              lineStyle: "None",
                              lineWidth: 0,
                              shadow: false,
                              space: 0,
                              hasNoneStyle: false
                            }
                          },
                          shading: { texture: "TextureNone" },
                          cellWidth: 233.75
                        }
                      }
                    ]
                  }
                ],
                title: null,
                description: null,
                tableFormat: {
                  allowAutoFit: true,
                  leftIndent: 0,
                  tableAlignment: "Left",
                  preferredWidthType: "Auto",
                  borders: {
                    left: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: false
                    },
                    right: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: false
                    },
                    top: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: false
                    },
                    bottom: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: false
                    },
                    vertical: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: false
                    },
                    horizontal: {
                      lineStyle: "Single",
                      lineWidth: 0.5,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: false
                    },
                    diagonalDown: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: false
                    },
                    diagonalUp: {
                      lineStyle: "None",
                      lineWidth: 0,
                      shadow: false,
                      space: 0,
                      hasNoneStyle: false
                    }
                  },
                  bidi: false,
                  horizontalPositionAbs: "Left",
                  horizontalPosition: 0
                }
              },
              { paragraphFormat: { styleName: "Header" }, inlines: [] }
            ]
          },
          footer: { blocks: [{ inlines: [] }] },
          evenHeader: { blocks: [{ inlines: [] }] },
          evenFooter: { blocks: [{ inlines: [] }] },
          firstPageHeader: { blocks: [{ inlines: [] }] },
          firstPageFooter: { blocks: [{ inlines: [] }] }
        },
        sectionFormat: {
          headerDistance: 36,
          footerDistance: 36,
          pageWidth: 612,
          pageHeight: 792,
          leftMargin: 72,
          rightMargin: 72,
          topMargin: 72,
          bottomMargin: 72,
          differentFirstPage: false,
          differentOddAndEvenPages: false,
          bidi: false,
          restartPageNumbering: false,
          pageStartingNumber: 0,
          endnoteNumberFormat: "LowerCaseRoman",
          footNoteNumberFormat: "Arabic",
          restartIndexForFootnotes: "DoNotRestart",
          restartIndexForEndnotes: "DoNotRestart"
        }
      }
    ],
    characterFormat: {
      fontSize: 11,
      fontFamily: "Calibri",
      fontSizeBidi: 11,
      fontFamilyBidi: "Calibri"
    },
    paragraphFormat: {
      afterSpacing: 8,
      lineSpacing: 1.0791666507720947,
      lineSpacingType: "Multiple"
    },
    background: { color: "#FFFFFFFF" },
    styles: [
      { type: "Paragraph", name: "Normal", next: "Normal" },
      {
        type: "Paragraph",
        name: "Heading 1",
        basedOn: "Normal",
        next: "Normal",
        link: "Heading 1 Char",
        characterFormat: {
          fontSize: 16,
          fontFamily: "Calibri Light",
          fontColor: "#2F5496FF",
          fontSizeBidi: 16,
          fontFamilyBidi: "Calibri Light"
        },
        paragraphFormat: {
          beforeSpacing: 12,
          afterSpacing: 0,
          outlineLevel: "Level1"
        }
      },
      {
        type: "Paragraph",
        name: "Heading 2",
        basedOn: "Normal",
        next: "Normal",
        link: "Heading 2 Char",
        characterFormat: {
          fontSize: 13,
          fontFamily: "Calibri Light",
          fontColor: "#2F5496FF",
          fontSizeBidi: 13,
          fontFamilyBidi: "Calibri Light"
        },
        paragraphFormat: {
          beforeSpacing: 2,
          afterSpacing: 0,
          outlineLevel: "Level2"
        }
      },
      {
        type: "Paragraph",
        name: "Heading 3",
        basedOn: "Normal",
        next: "Normal",
        link: "Heading 3 Char",
        characterFormat: {
          fontSize: 12,
          fontFamily: "Calibri Light",
          fontColor: "#1F3763FF",
          fontSizeBidi: 12,
          fontFamilyBidi: "Calibri Light"
        },
        paragraphFormat: {
          beforeSpacing: 2,
          afterSpacing: 0,
          outlineLevel: "Level3"
        }
      },
      {
        type: "Paragraph",
        name: "Heading 4",
        basedOn: "Normal",
        next: "Normal",
        link: "Heading 4 Char",
        characterFormat: {
          italic: true,
          fontFamily: "Calibri Light",
          fontColor: "#2F5496FF",
          italicBidi: true,
          fontFamilyBidi: "Calibri Light"
        },
        paragraphFormat: {
          beforeSpacing: 2,
          afterSpacing: 0,
          outlineLevel: "Level4"
        }
      },
      {
        type: "Paragraph",
        name: "Heading 5",
        basedOn: "Normal",
        next: "Normal",
        link: "Heading 5 Char",
        characterFormat: {
          fontFamily: "Calibri Light",
          fontColor: "#2F5496FF",
          fontFamilyBidi: "Calibri Light"
        },
        paragraphFormat: {
          beforeSpacing: 2,
          afterSpacing: 0,
          outlineLevel: "Level5"
        }
      },
      {
        type: "Paragraph",
        name: "Heading 6",
        basedOn: "Normal",
        next: "Normal",
        link: "Heading 6 Char",
        characterFormat: {
          fontFamily: "Calibri Light",
          fontColor: "#1F3763FF",
          fontFamilyBidi: "Calibri Light"
        },
        paragraphFormat: {
          beforeSpacing: 2,
          afterSpacing: 0,
          outlineLevel: "Level6"
        }
      },
      { type: "Character", name: "Default Paragraph Font" },
      {
        type: "Paragraph",
        name: "Notes",
        basedOn: "Normal",
        next: "Normal",
        characterFormat: { bold: true, boldBidi: true },
        paragraphFormat: {
          afterSpacing: 6,
          lineSpacing: 1,
          lineSpacingType: "Multiple"
        }
      },
      {
        type: "Paragraph",
        name: "Header",
        basedOn: "Normal",
        next: "Normal",
        link: "Header Char",
        paragraphFormat: {
          afterSpacing: 0,
          lineSpacing: 1,
          lineSpacingType: "Multiple",
          tabs: [
            {
              tabJustification: "Center",
              position: 234,
              tabLeader: "None",
              deletePosition: 0
            },
            {
              tabJustification: "Right",
              position: 468,
              tabLeader: "None",
              deletePosition: 0
            }
          ]
        }
      },
      {
        type: "Character",
        name: "Header Char",
        basedOn: "Default Paragraph Font"
      },
      {
        type: "Paragraph",
        name: "Footer",
        basedOn: "Normal",
        next: "Footer",
        link: "Footer Char",
        paragraphFormat: {
          afterSpacing: 0,
          lineSpacing: 1,
          lineSpacingType: "Multiple",
          tabs: [
            {
              tabJustification: "Center",
              position: 234,
              tabLeader: "None",
              deletePosition: 0
            },
            {
              tabJustification: "Right",
              position: 468,
              tabLeader: "None",
              deletePosition: 0
            }
          ]
        }
      },
      {
        type: "Character",
        name: "Footer Char",
        basedOn: "Default Paragraph Font"
      },
      {
        type: "Character",
        name: "Heading 1 Char",
        basedOn: "Default Paragraph Font",
        characterFormat: {
          fontSize: 16,
          fontFamily: "Calibri Light",
          fontColor: "#2F5496FF",
          fontSizeBidi: 16,
          fontFamilyBidi: "Calibri Light"
        }
      },
      {
        type: "Character",
        name: "Heading 2 Char",
        basedOn: "Default Paragraph Font",
        characterFormat: {
          fontSize: 13,
          fontFamily: "Calibri Light",
          fontColor: "#2F5496FF",
          fontSizeBidi: 13,
          fontFamilyBidi: "Calibri Light"
        }
      },
      {
        type: "Character",
        name: "Heading 3 Char",
        basedOn: "Default Paragraph Font",
        characterFormat: {
          fontSize: 12,
          fontFamily: "Calibri Light",
          fontColor: "#1F3763FF",
          fontSizeBidi: 12,
          fontFamilyBidi: "Calibri Light"
        }
      },
      {
        type: "Character",
        name: "Heading 4 Char",
        basedOn: "Default Paragraph Font",
        characterFormat: {
          italic: true,
          fontFamily: "Calibri Light",
          fontColor: "#2F5496FF",
          italicBidi: true,
          fontFamilyBidi: "Calibri Light"
        }
      },
      {
        type: "Character",
        name: "Heading 5 Char",
        basedOn: "Default Paragraph Font",
        characterFormat: {
          fontFamily: "Calibri Light",
          fontColor: "#2F5496FF",
          fontFamilyBidi: "Calibri Light"
        }
      },
      {
        type: "Character",
        name: "Heading 6 Char",
        basedOn: "Default Paragraph Font",
        characterFormat: {
          fontFamily: "Calibri Light",
          fontColor: "#1F3763FF",
          fontFamilyBidi: "Calibri Light"
        }
      }
    ],
    defaultTabWidth: 36,
    formatting: false,
    trackChanges: false,
    protectionType: "NoProtection",
    enforcement: false,
    dontUseHTMLParagraphAutoSpacing: false,
    alignTablesRowByRow: false,
    formFieldShading: true,
    footnotes: {
      separator: [
        {
          paragraphFormat: {
            afterSpacing: 0,
            lineSpacing: 1,
            lineSpacingType: "Multiple",
            styleName: "Normal"
          },
          inlines: [{ text: "\u0003" }]
        }
      ],
      continuationSeparator: [
        {
          paragraphFormat: {
            afterSpacing: 0,
            lineSpacing: 1,
            lineSpacingType: "Multiple",
            styleName: "Normal"
          },
          inlines: [{ text: "\u0004" }]
        }
      ],
      continuationNotice: [{ inlines: [] }]
    },
    endnotes: {
      separator: [
        {
          paragraphFormat: {
            afterSpacing: 0,
            lineSpacing: 1,
            lineSpacingType: "Multiple",
            styleName: "Normal"
          },
          inlines: [{ text: "\u0003" }]
        }
      ],
      continuationSeparator: [
        {
          paragraphFormat: {
            afterSpacing: 0,
            lineSpacing: 1,
            lineSpacingType: "Multiple",
            styleName: "Normal"
          },
          inlines: [{ text: "\u0004" }]
        }
      ],
      continuationNotice: [{ inlines: [] }]
    },
    compatibilityMode: "Word2013"
  };
  var waitingPopUp = document.getElementById("waiting-popup");
  container.documentEditor.open(JSON.stringify(defaultDocument));
  container.documentEditor.documentName = "Table Formatting";
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

