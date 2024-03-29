import html2Canvas from 'html2canvas';
import JsPDF from 'jspdf';

export default (elementId, fileName, type) => {
    if (!elementId) throw new Error('请传入元素id');
    const container = document.querySelector(`#${elementId}`);
    const canvas = document.createElement('canvas');
    const contentWidth = container.clientWidth;
    const contentHeight = container.clientHeight;
    const scale = window.devicePixelRatio;
    const canvasCcale = 3;
    canvas.width = contentWidth * canvasCcale;
    canvas.height = contentHeight * canvasCcale;
    canvas.getContext('2d').scale(canvasCcale, canvasCcale);
    const opts = {
        scale: scale,
        canvas: canvas,
        width: contentWidth,
        height: contentHeight,
        useCORS: true
    };
    html2Canvas(container, opts).then(function (canvas) {
        let contentWidth = canvas.width;
        let contentHeight = canvas.height;
        let pageHeight = contentWidth / 592.28 * 841.89;
        let leftHeight = contentHeight;
        let position = 0;
        let imgWidth = 595.28;
        let imgHeight = 592.28 / contentWidth * contentHeight;
        let pageData = canvas.toDataURL('image/jpeg', 1.0);
        if (type === 'pdf') {
            let PDF = new JsPDF('', 'pt', 'a4');
            if (leftHeight < pageHeight) {
                PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
            } else {
                while (leftHeight > 0) {
                    PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight);
                    leftHeight -= pageHeight;
                    position -= 841.89;
                    if (leftHeight > 0) {
                        PDF.addPage();
                    }
                }
            }
            PDF.save(fileName + '.pdf');
        } else if (type === 'img') {
            const a = document.createElement('a');
            a.download = fileName;
            a.href = pageData;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }

    });
}