ej.base.enableRipple(window.ripple)
/**
 * Rich Text Editor Ajax content sample
 */
var defaultRTE;

    var ajax = new ej.base.Ajax('./src/rich-text-editor/ajax-content.html', 'GET', false);
    ajax.send().then(function(data) {
        defaultRTE = new ej.richtexteditor.RichTextEditor({ value: data });
        defaultRTE.appendTo('#defaultRTE');
    });
