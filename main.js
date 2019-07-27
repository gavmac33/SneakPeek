import html2canvas from "html2canvas";

const linkClass = "iUh30";


document.body.appendChild(document.createElement('script')).src = 'node_modules/rasterizehtml/dist/rasterizeHTML.allinone.js';


function main() {
    let pageLinks = document.body.getElementsByClassName(linkClass);

    let temp = rasterizeHTML.drawURL(pageLinks[0].innerHTML);

    pageLinks[0].insertAdjacentElement('beforebegin', temp)
    /*
    for(let page of pageLinks){
        let iframe = document.createElement("iframe");
        iframe.src = page.innerHTML;
        page.insertAdjacentElement('beforebegin', iframe.getScreenshot(50, 100));
    }
*/
}











main()






