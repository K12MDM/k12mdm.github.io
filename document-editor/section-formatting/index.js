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
                                "text": "First Section"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Subtitle"
                        },
                        "inlines": [
                            {
                                "text": "Size "
                            },
                            {
                                "text": "816x1056"
                            },
                            {
                                "text": "px"
                            },
                            {
                                "text": " (Portrait)"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Subtitle"
                        },
                        "inlines": [
                            {
                                "text": "Margin 96px ("
                            },
                            {
                                "text": "top and bottom) "
                            },
                            {
                                "text": "72px (left and right)"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Lorem ipsum dolor sit "
                            },
                            {
                                "text": "amet"
                            },
                            {
                                "text": ", "
                            },
                            {
                                "text": "consectetur"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "adipiscing"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "elit"
                            },
                            {
                                "text": ", "
                            },
                            {
                                "text": "sed"
                            },
                            {
                                "text": " do "
                            },
                            {
                                "text": "eiusmod"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "tempor"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "incididunt"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "ut"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "labore"
                            },
                            {
                                "text": " et dolore magna "
                            },
                            {
                                "text": "aliqua"
                            },
                            {
                                "text": ". Ut "
                            },
                            {
                                "text": "enim"
                            },
                            {
                                "text": " ad minim "
                            },
                            {
                                "text": "veniam"
                            },
                            {
                                "text": ", "
                            },
                            {
                                "text": "quis"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "nostrud"
                            },
                            {
                                "text": " exercitation "
                            },
                            {
                                "text": "ullamco"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "laboris"
                            },
                            {
                                "text": " nisi "
                            },
                            {
                                "text": "ut"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "aliquip"
                            },
                            {
                                "text": " ex "
                            },
                            {
                                "text": "ea"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "commodo"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "consequat"
                            },
                            {
                                "text": ". Duis "
                            },
                            {
                                "text": "aute"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "irure"
                            },
                            {
                                "text": " dolor in "
                            },
                            {
                                "text": "reprehenderit"
                            },
                            {
                                "text": " in "
                            },
                            {
                                "text": "voluptate"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "velit"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "esse"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "cillum"
                            },
                            {
                                "text": " dolore "
                            },
                            {
                                "text": "eu"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "fugiat"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "nulla"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "pariatur"
                            },
                            {
                                "text": ". "
                            },
                            {
                                "text": "Excepteur"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "sint"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "occaecat"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "cupidatat"
                            },
                            {
                                "text": " non "
                            },
                            {
                                "text": "proident"
                            },
                            {
                                "text": ", "
                            },
                            {
                                "text": "sunt"
                            },
                            {
                                "text": " in culpa qui "
                            },
                            {
                                "text": "officia"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "deserunt"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "mollit"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "anim"
                            },
                            {
                                "text": " id "
                            },
                            {
                                "text": "est"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "laborum"
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
                                "text": "Sed"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "ut"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "perspiciatis"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "unde"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "omnis"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "iste"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "natus"
                            },
                            {
                                "text": " error sit "
                            },
                            {
                                "text": "voluptatem"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "accusantium"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "doloremque"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "laudantium"
                            },
                            {
                                "text": ", "
                            },
                            {
                                "text": "totam"
                            },
                            {
                                "text": " rem "
                            },
                            {
                                "text": "aperiam"
                            },
                            {
                                "text": ", "
                            },
                            {
                                "text": "eaque"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "ipsa"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "quae"
                            },
                            {
                                "text": " ab "
                            },
                            {
                                "text": "illo"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "inventore"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "veritatis"
                            },
                            {
                                "text": " et quasi "
                            },
                            {
                                "text": "architecto"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "beatae"
                            },
                            {
                                "text": " vitae dicta "
                            },
                            {
                                "text": "sunt"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "explicabo"
                            },
                            {
                                "text": ". Nemo "
                            },
                            {
                                "text": "enim"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "ipsam"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "voluptatem"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "quia"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "voluptas"
                            },
                            {
                                "text": " sit "
                            },
                            {
                                "text": "aspernatur"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "aut"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "odit"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "aut"
                            },
                            {
                                "text": " fugit, "
                            },
                            {
                                "text": "sed"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "quia"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "consequuntur"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "magni"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "dolores"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "eos"
                            },
                            {
                                "text": " qui "
                            },
                            {
                                "text": "ratione"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "voluptatem"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "sequi"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "nesciunt"
                            },
                            {
                                "text": ". "
                            },
                            {
                                "text": "Neque"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "porro"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "quisquam"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "est"
                            },
                            {
                                "text": ", qui "
                            },
                            {
                                "text": "dolorem"
                            },
                            {
                                "text": " ipsum "
                            },
                            {
                                "text": "quia"
                            },
                            {
                                "text": " dolor sit "
                            },
                            {
                                "text": "amet"
                            },
                            {
                                "text": ", "
                            },
                            {
                                "text": "consectetur"
                            },
                            {
                                "text": ", "
                            },
                            {
                                "text": "adipisci"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "velit"
                            },
                            {
                                "text": ", "
                            },
                            {
                                "text": "sed"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "quia"
                            },
                            {
                                "text": " non "
                            },
                            {
                                "text": "numquam"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "eius"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "modi"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "tempora"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "incidunt"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "ut"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "labore"
                            },
                            {
                                "text": " et dolore "
                            },
                            {
                                "text": "magnam"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "aliquam"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "quaerat"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "voluptatem"
                            },
                            {
                                "text": ". Ut "
                            },
                            {
                                "text": "enim"
                            },
                            {
                                "text": " ad minima "
                            },
                            {
                                "text": "veniam"
                            },
                            {
                                "text": ", "
                            },
                            {
                                "text": "quis"
                            },
                            {
                                "text": " nostrum "
                            },
                            {
                                "text": "exercitationem"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "ullam"
                            },
                            {
                                "text": " corporis "
                            },
                            {
                                "text": "suscipit"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "laboriosam"
                            },
                            {
                                "text": ", nisi "
                            },
                            {
                                "text": "ut"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "aliquid"
                            },
                            {
                                "text": " ex "
                            },
                            {
                                "text": "ea"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "commodi"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "consequatur"
                            },
                            {
                                "text": "? "
                            },
                            {
                                "text": "Quis"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "autem"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "vel"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "eum"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "iure"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "reprehenderit"
                            },
                            {
                                "text": " qui in "
                            },
                            {
                                "text": "ea"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "voluptate"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "velit"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "esse"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "quam"
                            },
                            {
                                "text": " nihil "
                            },
                            {
                                "text": "molestiae"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "consequatur"
                            },
                            {
                                "text": ", "
                            },
                            {
                                "text": "vel"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "illum"
                            },
                            {
                                "text": " qui "
                            },
                            {
                                "text": "dolorem"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "eum"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "fugiat"
                            },
                            {
                                "text": " quo "
                            },
                            {
                                "text": "voluptas"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "nulla"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "pariatur"
                            },
                            {
                                "text": "?"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "At "
                            },
                            {
                                "text": "vero"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "eos"
                            },
                            {
                                "text": " et "
                            },
                            {
                                "text": "accusamus"
                            },
                            {
                                "text": " et "
                            },
                            {
                                "text": "iusto"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "odio"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "dignissimos"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "ducimus"
                            },
                            {
                                "text": " qui "
                            },
                            {
                                "text": "blanditiis"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "praesentium"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "voluptatum"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "deleniti"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "atque"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "corrupti"
                            },
                            {
                                "text": " quos "
                            },
                            {
                                "text": "dolores"
                            },
                            {
                                "text": " et "
                            },
                            {
                                "text": "quas"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "molestias"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "excepturi"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "sint"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "occaecati"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "cupiditate"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "non provident"
                            },
                            {
                                "text": ", "
                            },
                            {
                                "text": "similique"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "sunt"
                            },
                            {
                                "text": " in culpa qui "
                            },
                            {
                                "text": "officia"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "deserunt"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "mollitia"
                            },
                            {
                                "text": " animi, id "
                            },
                            {
                                "text": "est"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "laborum"
                            },
                            {
                                "text": " et "
                            },
                            {
                                "text": "dolorum"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "fuga"
                            },
                            {
                                "text": ". Et "
                            },
                            {
                                "text": "harum"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "quidem"
                            },
                            {
                                "text": " rerum facilis "
                            },
                            {
                                "text": "est"
                            },
                            {
                                "text": " et "
                            },
                            {
                                "text": "expedita"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "distinctio"
                            },
                            {
                                "text": ". Nam libero tempore, cum "
                            },
                            {
                                "text": "soluta"
                            },
                            {
                                "text": " nobis "
                            },
                            {
                                "text": "est"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "eligendi"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "optio"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "cumque"
                            },
                            {
                                "text": " nihil "
                            },
                            {
                                "text": "impedit"
                            },
                            {
                                "text": " quo minus id quod "
                            },
                            {
                                "text": "maxime"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "placeat"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "facere"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "possimus"
                            },
                            {
                                "text": ", "
                            },
                            {
                                "text": "omnis"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "voluptas"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "assumenda"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "est"
                            },
                            {
                                "text": ", "
                            },
                            {
                                "text": "omnis"
                            },
                            {
                                "text": " dolor "
                            },
                            {
                                "text": "repellendus"
                            },
                            {
                                "text": ". "
                            },
                            {
                                "text": "Temporibus"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "autem"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "quibusdam"
                            },
                            {
                                "text": " et "
                            },
                            {
                                "text": "aut"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "officiis"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "debitis"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "aut"
                            },
                            {
                                "text": " rerum "
                            },
                            {
                                "text": "necessitatibus"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "saepe"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "eveniet"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "ut"
                            },
                            {
                                "text": " et "
                            },
                            {
                                "text": "voluptates"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "repudiandae"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "sint"
                            },
                            {
                                "text": " et "
                            },
                            {
                                "text": "molestiae"
                            },
                            {
                                "text": " non "
                            },
                            {
                                "text": "recusandae"
                            },
                            {
                                "text": ". "
                            },
                            {
                                "text": "Itaque"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "earum"
                            },
                            {
                                "text": " rerum hic "
                            },
                            {
                                "text": "tenetur"
                            },
                            {
                                "text": " a "
                            },
                            {
                                "text": "sapiente"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "delectus"
                            },
                            {
                                "text": ", "
                            },
                            {
                                "text": "ut"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "aut"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "reiciendis"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "voluptatibus"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "maiores"
                            },
                            {
                                "text": " alias "
                            },
                            {
                                "text": "consequatur"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "aut"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "perferendis"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "doloribus"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "asperiores"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "repellat"
                            },
                            {
                                "text": "."
                            }
                        ]
                    }
                ],
                "headersFooters": {
                    "header": {
                        "blocks": [
                            {
                                "paragraphFormat": {
                                    "textAlignment": "Right",
                                    "styleName": "Header"
                                },
                                "inlines": [
                                    {
                                        "text": "Header distance from top is 72px"
                                    }
                                ]
                            }
                        ]
                    },
                    "footer": {
                        "blocks": [
                            {
                                "paragraphFormat": {
                                    "textAlignment": "Right",
                                    "styleName": "Footer",
                                    "tabs": [
                                        {
                                            "tabJustification": "Left",
                                            "position": 0.0,
                                            "tabLeader": "None",
                                            "deletePosition": 234.0
                                        }
                                    ]
                                },
                                "inlines": [
                                    {
                                        "text": "Footer distance from bottom is 48px"
                                    }
                                ]
                            }
                        ]
                    }
                },
                "sectionFormat": {
                    "headerDistance": 54.0,
                    "footerDistance": 36.0,
                    "pageWidth": 595.29998779296875,
                    "pageHeight": 841.9000244140625,
                    "leftMargin": 54.0,
                    "rightMargin": 54.0,
                    "topMargin": 72.0,
                    "bottomMargin": 72.0,
                    "differentFirstPage": false,
                    "differentOddAndEvenPages": false
                }
            },
            {
                "blocks": [
                    {
                        "paragraphFormat": {
                            "styleName": "Title"
                        },
                        "inlines": [
                            {
                                "text": "Second Section"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Subtitle"
                        },
                        "inlines": [
                            {
                                "text": "Size 1056x816px (Landscape)"
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
                            "styleName": "Subtitle"
                        },
                        "inlines": [
                            {
                                "text": "Margin 48px (on all sides)"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Lorem ipsum dolor sit "
                            },
                            {
                                "text": "amet"
                            },
                            {
                                "text": ", "
                            },
                            {
                                "text": "consectetur"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "adipiscing"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "elit"
                            },
                            {
                                "text": ", "
                            },
                            {
                                "text": "sed"
                            },
                            {
                                "text": " do "
                            },
                            {
                                "text": "eiusmod"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "tempor"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "incididunt"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "ut"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "labore"
                            },
                            {
                                "text": " et dolore magna "
                            },
                            {
                                "text": "aliqua"
                            },
                            {
                                "text": ". Ut "
                            },
                            {
                                "text": "enim"
                            },
                            {
                                "text": " ad minim "
                            },
                            {
                                "text": "veniam"
                            },
                            {
                                "text": ", "
                            },
                            {
                                "text": "quis"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "nostrud"
                            },
                            {
                                "text": " exercitation "
                            },
                            {
                                "text": "ullamco"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "laboris"
                            },
                            {
                                "text": " nisi "
                            },
                            {
                                "text": "ut"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "aliquip"
                            },
                            {
                                "text": " ex "
                            },
                            {
                                "text": "ea"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "commodo"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "consequat"
                            },
                            {
                                "text": ". Duis "
                            },
                            {
                                "text": "aute"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "irure"
                            },
                            {
                                "text": " dolor in "
                            },
                            {
                                "text": "reprehenderit"
                            },
                            {
                                "text": " in "
                            },
                            {
                                "text": "voluptate"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "velit"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "esse"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "cillum"
                            },
                            {
                                "text": " dolore "
                            },
                            {
                                "text": "eu"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "fugiat"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "nulla"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "pariatur"
                            },
                            {
                                "text": ". "
                            },
                            {
                                "text": "Excepteur"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "sint"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "occaecat"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "cupidatat"
                            },
                            {
                                "text": " non "
                            },
                            {
                                "text": "proident"
                            },
                            {
                                "text": ", "
                            },
                            {
                                "text": "sunt"
                            },
                            {
                                "text": " in culpa qui "
                            },
                            {
                                "text": "officia"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "deserunt"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "mollit"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "anim"
                            },
                            {
                                "text": " id "
                            },
                            {
                                "text": "est"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "laborum"
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
                                "text": "Sed"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "ut"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "perspiciatis"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "unde"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "omnis"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "iste"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "natus"
                            },
                            {
                                "text": " error sit "
                            },
                            {
                                "text": "voluptatem"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "accusantium"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "doloremque"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "laudantium"
                            },
                            {
                                "text": ", "
                            },
                            {
                                "text": "totam"
                            },
                            {
                                "text": " rem "
                            },
                            {
                                "text": "aperiam"
                            },
                            {
                                "text": ", "
                            },
                            {
                                "text": "eaque"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "ipsa"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "quae"
                            },
                            {
                                "text": " ab "
                            },
                            {
                                "text": "illo"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "inventore"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "veritatis"
                            },
                            {
                                "text": " et quasi "
                            },
                            {
                                "text": "architecto"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "beatae"
                            },
                            {
                                "text": " vitae dicta "
                            },
                            {
                                "text": "sunt"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "explicabo"
                            },
                            {
                                "text": ". Nemo "
                            },
                            {
                                "text": "enim"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "ipsam"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "voluptatem"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "quia"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "voluptas"
                            },
                            {
                                "text": " sit "
                            },
                            {
                                "text": "aspernatur"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "aut"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "odit"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "aut"
                            },
                            {
                                "text": " fugit, "
                            },
                            {
                                "text": "sed"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "quia"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "consequuntur"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "magni"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "dolores"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "eos"
                            },
                            {
                                "text": " qui "
                            },
                            {
                                "text": "ratione"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "voluptatem"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "sequi"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "nesciunt"
                            },
                            {
                                "text": ". "
                            },
                            {
                                "text": "Neque"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "porro"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "quisquam"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "est"
                            },
                            {
                                "text": ", qui "
                            },
                            {
                                "text": "dolorem"
                            },
                            {
                                "text": " ipsum "
                            },
                            {
                                "text": "quia"
                            },
                            {
                                "text": " dolor sit "
                            },
                            {
                                "text": "amet"
                            },
                            {
                                "text": ", "
                            },
                            {
                                "text": "consectetur"
                            },
                            {
                                "text": ", "
                            },
                            {
                                "text": "adipisci"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "velit"
                            },
                            {
                                "text": ", "
                            },
                            {
                                "text": "sed"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "quia"
                            },
                            {
                                "text": " non "
                            },
                            {
                                "text": "numquam"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "eius"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "modi"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "tempora"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "incidunt"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "ut"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "labore"
                            },
                            {
                                "text": " et dolore "
                            },
                            {
                                "text": "magnam"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "aliquam"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "quaerat"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "voluptatem"
                            },
                            {
                                "text": ". Ut "
                            },
                            {
                                "text": "enim"
                            },
                            {
                                "text": " ad minima "
                            },
                            {
                                "text": "veniam"
                            },
                            {
                                "text": ", "
                            },
                            {
                                "text": "quis"
                            },
                            {
                                "text": " nostrum "
                            },
                            {
                                "text": "exercitationem"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "ullam"
                            },
                            {
                                "text": " corporis "
                            },
                            {
                                "text": "suscipit"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "laboriosam"
                            },
                            {
                                "text": ", nisi "
                            },
                            {
                                "text": "ut"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "aliquid"
                            },
                            {
                                "text": " ex "
                            },
                            {
                                "text": "ea"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "commodi"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "consequatur"
                            },
                            {
                                "text": "? "
                            },
                            {
                                "text": "Quis"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "autem"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "vel"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "eum"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "iure"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "reprehenderit"
                            },
                            {
                                "text": " qui in "
                            },
                            {
                                "text": "ea"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "voluptate"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "velit"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "esse"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "quam"
                            },
                            {
                                "text": " nihil "
                            },
                            {
                                "text": "molestiae"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "consequatur"
                            },
                            {
                                "text": ", "
                            },
                            {
                                "text": "vel"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "illum"
                            },
                            {
                                "text": " qui "
                            },
                            {
                                "text": "dolorem"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "eum"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "fugiat"
                            },
                            {
                                "text": " quo "
                            },
                            {
                                "text": "voluptas"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "nulla"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "pariatur"
                            },
                            {
                                "text": "?"
                            }
                        ]
                    },
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "At "
                            },
                            {
                                "text": "vero"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "eos"
                            },
                            {
                                "text": " et "
                            },
                            {
                                "text": "accusamus"
                            },
                            {
                                "text": " et "
                            },
                            {
                                "text": "iusto"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "odio"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "dignissimos"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "ducimus"
                            },
                            {
                                "text": " qui "
                            },
                            {
                                "text": "blanditiis"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "praesentium"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "voluptatum"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "deleniti"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "atque"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "corrupti"
                            },
                            {
                                "text": " quos "
                            },
                            {
                                "text": "dolores"
                            },
                            {
                                "text": " et "
                            },
                            {
                                "text": "quas"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "molestias"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "excepturi"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "sint"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "occaecati"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "cupiditate"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "non provident"
                            },
                            {
                                "text": ", "
                            },
                            {
                                "text": "similique"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "sunt"
                            },
                            {
                                "text": " in culpa qui "
                            },
                            {
                                "text": "officia"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "deserunt"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "mollitia"
                            },
                            {
                                "text": " animi, id "
                            },
                            {
                                "text": "est"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "laborum"
                            },
                            {
                                "text": " et "
                            },
                            {
                                "text": "dolorum"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "fuga"
                            },
                            {
                                "text": ". Et "
                            },
                            {
                                "text": "harum"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "quidem"
                            },
                            {
                                "text": " rerum facilis "
                            },
                            {
                                "text": "est"
                            },
                            {
                                "text": " et "
                            },
                            {
                                "text": "expedita"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "distinctio"
                            },
                            {
                                "text": ". Nam libero tempore, cum "
                            },
                            {
                                "text": "soluta"
                            },
                            {
                                "text": " nobis "
                            },
                            {
                                "text": "est"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "eligendi"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "optio"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "cumque"
                            },
                            {
                                "text": " nihil "
                            },
                            {
                                "text": "impedit"
                            },
                            {
                                "text": " quo minus id quod "
                            },
                            {
                                "text": "maxime"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "placeat"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "facere"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "possimus"
                            },
                            {
                                "text": ", "
                            },
                            {
                                "text": "omnis"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "voluptas"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "assumenda"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "est"
                            },
                            {
                                "text": ", "
                            },
                            {
                                "text": "omnis"
                            },
                            {
                                "text": " dolor "
                            },
                            {
                                "text": "repellendus"
                            },
                            {
                                "text": ". "
                            },
                            {
                                "text": "Temporibus"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "autem"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "quibusdam"
                            },
                            {
                                "text": " et "
                            },
                            {
                                "text": "aut"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "officiis"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "debitis"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "aut"
                            },
                            {
                                "text": " rerum "
                            },
                            {
                                "text": "necessitatibus"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "saepe"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "eveniet"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "ut"
                            },
                            {
                                "text": " et "
                            },
                            {
                                "text": "voluptates"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "repudiandae"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "sint"
                            },
                            {
                                "text": " et "
                            },
                            {
                                "text": "molestiae"
                            },
                            {
                                "text": " non "
                            },
                            {
                                "text": "recusandae"
                            },
                            {
                                "text": ". "
                            },
                            {
                                "text": "Itaque"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "earum"
                            },
                            {
                                "text": " rerum hic "
                            },
                            {
                                "text": "tenetur"
                            },
                            {
                                "text": " a "
                            },
                            {
                                "text": "sapiente"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "delectus"
                            },
                            {
                                "text": ", "
                            },
                            {
                                "text": "ut"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "aut"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "reiciendis"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "voluptatibus"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "maiores"
                            },
                            {
                                "text": " alias "
                            },
                            {
                                "text": "consequatur"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "aut"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "perferendis"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "doloribus"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "asperiores"
                            },
                            {
                                "text": " "
                            },
                            {
                                "text": "repellat"
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
                        "inlines": []
                    }
                ],
                "headersFooters": {
                    "header": {
                        "blocks": [
                            {
                                "paragraphFormat": {
                                    "textAlignment": "Right",
                                    "styleName": "Header"
                                },
                                "inlines": [
                                    {
                                        "text": "Header distance from top is 24px"
                                    }
                                ]
                            }
                        ]
                    },
                    "footer": {
                        "blocks": [
                            {
                                "paragraphFormat": {
                                    "textAlignment": "Right",
                                    "styleName": "Footer",
                                    "tabs": [
                                        {
                                            "tabJustification": "Left",
                                            "position": 0.0,
                                            "tabLeader": "None",
                                            "deletePosition": 234.0
                                        }
                                    ]
                                },
                                "inlines": [
                                    {
                                        "text": "Footer distance from bottom is 24px"
                                    }
                                ]
                            }
                        ]
                    }
                },
                "sectionFormat": {
                    "headerDistance": 18.0,
                    "footerDistance": 18.0,
                    "pageWidth": 792.0,
                    "pageHeight": 612.0,
                    "leftMargin": 36.0,
                    "rightMargin": 36.0,
                    "topMargin": 36.0,
                    "bottomMargin": 36.0,
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
                "name": "Subtitle",
                "basedOn": "Normal",
                "next": "Normal",
                "link": "Subtitle Char",
                "characterFormat": {
                    "fontColor": "#5A5A5AFF"
                },
                "paragraphFormat": {
                    "listFormat": {
                        "listLevelNumber": 1
                    }
                }
            },
            {
                "type": "Character",
                "name": "Subtitle Char",
                "basedOn": "Default Paragraph Font",
                "characterFormat": {
                    "fontColor": "#5A5A5AFF"
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
                "basedOn": "Default Paragraph Font"
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
                "basedOn": "Default Paragraph Font"
            }
        ]
    };
    var waitingPopUp = document.getElementById('waiting-popup');
    container.documentEditor.open(JSON.stringify(defaultDocument));    
    container.documentEditor.documentName = 'Section Formatting';    
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
