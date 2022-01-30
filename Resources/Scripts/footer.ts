const copy =  document.getElementById('copy')

export function setCopyright(){
    if (copy){
        copy.innerText = `© ${new Date().getFullYear()} Lucie Vidářová. All rights reserved.`
    }
}