ej.base.enableRipple(window.ripple)
/**
 * File Manager custom thumbnail sample
 */

    var hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';
    var fileObject = new ej.filemanager.FileManager({
        ajaxSettings: {
            url: hostUrl + 'api/FileManager/FileOperations',
            getImageUrl: hostUrl + 'api/FileManager/GetImage',
            uploadUrl: hostUrl + 'api/FileManager/Upload',
            downloadUrl: hostUrl + 'api/FileManager/Download',
        },
        showThumbnail: false,
        view: 'LargeIcons'
    });
    fileObject.appendTo('#filemanager');

