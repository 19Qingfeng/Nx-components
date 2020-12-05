// 文件下载
const downloadFile = function(sUrl) {
    // sUrl = "/api" + sUrl;
    // iOS devices do not support downloading. We have to inform user about this.
    if (/(iP)/g.test(navigator.userAgent)) {
        alert('Your device does not support files downloading. Please try again in desktop browser.')
        return false
    }

    // If in Chrome or Safari - download via virtual link click
    if (downloadFile.isChrome || downloadFile.isSafari || downloadFile.isFirefox) {
        // Creating new link node.
        var link = document.createElement('a')
        link.href = encodeURI(sUrl)
        link.target = '_blank'

        if (link.download !== undefined) {
            // Set HTML5 download attribute. This will prevent file from opening if supported.
            var fileName = sUrl.substring(sUrl.lastIndexOf('/') + 1, sUrl.length)
            link.download = fileName
        }

        // Dispatching click event.
        if (document.createEvent) {
            var e = document.createEvent('MouseEvents')
            e.initEvent('click', true, true)
            link.dispatchEvent(e)
            return true
        }
    }

    // Force file download (whether supported by server).
    if (sUrl.indexOf('?') === -1) {
        sUrl += '?download'
    }

    window.open(sUrl, '_self')
    return true
}
downloadFile.isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1
downloadFile.isSafari = navigator.userAgent.toLowerCase().indexOf('safari') > -1
downloadFile.isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1

// 邮件发送
const emailNode = document.createElement('a')
const sendEmail = (email) => {
    emailNode.setAttribute('href', `mailto:${email}`)
    emailNode.click()
}

export {
    downloadFile,
    sendEmail
}