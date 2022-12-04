let fileextension = ".jpg"; // image format

function variableSetter (gallery, renderID, pictureCount){
    for (let i = 1; i<=pictureCount; i++) {
        $("<img />").attr('src', gallery + i + fileextension).appendTo(renderID);
        if (i == pictureCount) {
            console.log('loaded ' + i + ' pictures to the gallery (max. 50 pictures to each gallery)');
        }
    }
}