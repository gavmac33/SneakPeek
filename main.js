
const linkClass = "iUh30";


function main() {
    let pageLinks = document.body.getElementsByClassName(linkClass);

    
    for(let page of pageLinks){
        let iframe = document.createElement("iframe");
        iframe.src = page.innerHTML;

        iframe.frameBorder = 0;
        

        page.insertAdjacentElement('beforebegin', iframe);
    }

}











main()






