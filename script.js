function executeAfterDelay() {
    setTimeout(function() {
        let postear = document.getElementsByClassName("css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3");
        let verificacion = document.getElementsByClassName("css-175oi2r r-14lw9ot r-jxzhtn r-1867qdf r-1phboty r-rs99b7 r-1ifxtd0 r-1udh08x");
        let verificacionOsc = document.getElementsByClassName("css-175oi2r r-kemksi r-1kqtdi0 r-1867qdf r-1phboty r-rs99b7 r-1ifxtd0 r-1udh08x");
        let verificacionOscClara = document.getElementsByClassName("css-175oi2r r-yfoy6g r-18bvks7 r-1867qdf r-1phboty r-rs99b7 r-1ifxtd0 r-1udh08x");
        let verificacionBotonOLD = document.getElementsByClassName("css-4rbku5 css-18t94o4 css-1dbjc4n r-1habvwh r-1loqt21 r-6koalj r-eqz5dr r-16y2uox r-1ny4l3l r-rjfia r-13qz1uu");
        let verificacionBoton = document.getElementsByClassName("css-4rbku5 css-18t94o4 css-1dbjc4n r-1habvwh r-1loqt21 r-6koalj r-eqz5dr r-16y2uox r-1ny4l3l r-oyd9sg r-13qz1uu");
        let postReply = document.getElementsByClassName("public-DraftEditorPlaceholder-inner");
        let logoDiv = document.getElementsByClassName('css-146c3p1 r-bcqeeo r-qvutc0 r-37j5jr r-q4m81j r-a023e6 r-rjixqe r-b88u0q r-1awozwy r-6koalj r-18u37iz r-16y2uox r-1777fci');
        let logoDivOSC = document.getElementsByClassName('css-901oao r-1awozwy r-6koalj r-18u37iz r-16y2uox r-37j5jr r-a023e6 r-b88u0q r-1777fci r-rjixqe r-bcqeeo r-q4m81j r-qvutc0');
        let icon = document.getElementsByTagName('link');

        let Xtitle = document.title
        let TwitterTitle = Xtitle.replace('X' ,'Twitter')
        document.title = TwitterTitle
        for (let item of icon) {
            if(item.href == 'https://abs.twimg.com/favicons/twitter.3.ico') {
                item.href = chrome.runtime.getURL('logo.svg');
            }
        }

        for (let item of postear) {
            if(item.innerHTML == 'Postear') {
                item.innerHTML = 'Twittear';
            }
            if(item.innerHTML == 'Reposts') {
                item.innerHTML = 'Retweets';
            }
            if(item.innerHTML == 'Repost') {
                item.innerHTML = 'Retweet';
            }


            if(item.innerHTML == 'Post') {
                item.innerHTML = 'Tweet';
            }
        }
        if(verificacion[0] != undefined) {
            if(verificacion[0].firstChild.firstChild.firstChild.innerHTML == 'Subscribe to Premium' || verificacion[0].firstChild.firstChild.firstChild.innerHTML == 'Suscríbete a Premium') {
                verificacion[0].remove();
            }
        } else if (verificacionOsc[0] != undefined){
            if(verificacionOsc[0].firstChild.firstChild.firstChild.innerHTML == 'Subscribe to Premium' || verificacionOsc[0].firstChild.firstChild.firstChild.innerHTML == 'Suscríbete a Premium') {
                    verificacionOsc[0].remove();
            }
        } else if (verificacionOscClara[0] != undefined){
            if(verificacionOscClara[0].firstChild.firstChild.firstChild.innerHTML == 'Subscribe to Premium' || verificacionOscClara[0].firstChild.firstChild.firstChild.innerHTML == 'Suscríbete a Premium') {
                verificacionOscClara[0].remove();
        }
        }
        if(verificacionBoton[0] != undefined) {
            for(let i = 0; i < verificacionBoton.length; i++){
                    if(verificacionBoton[i].firstChild.childNodes[1].firstChild.innerHTML == 'Verificado' || verificacionBoton[i].firstChild.childNodes[1].firstChild.innerHTML == 'Verified') {
                        if(verificacionBoton[i].firstChild.childNodes[1].firstChild.innerHTML == 'Verificado') {
                            verificacionBoton[i].remove();
                        }else if(verificacionBoton[i].firstChild.childNodes[1].firstChild.innerHTML == 'Verified') {
                            verificacionBoton[i].remove();
                        }
                }
            }
        } 
        if (verificacionBotonOLD[0] != undefined) {
            for(let i = 0; i < verificacionBotonOLD.length; i++){
                if(verificacionBotonOLD[i].firstChild.childNodes[1] != undefined) {
                    if(verificacionBotonOLD[i].firstChild.childNodes[1].firstChild.innerHTML == 'Verificado' || verificacionBotonOLD[i].firstChild.childNodes[1].firstChild.innerHTML == 'Verified') {
                        if(verificacionBotonOLD[i].firstChild.childNodes[1].firstChild.innerHTML == 'Verificado') {
                            verificacionBotonOLD[i].remove();
                        }else if(verificacionBotonOLD[i].firstChild.childNodes[1].firstChild.innerHTML == 'Verified') {
                            verificacionBotonOLD[i].remove();
                        }
                    }
                }
            }
        }

        if(postReply[0] != undefined) {
            if(postReply[0].textContent == "¡Postea tu respuesta!"){
                postReply[0].textContent = "¡Twittea tu respuesta!"
            }else if(postReply[0].textContent == "Post your reply!"){
                postReply[0].textContent = "Tweet your reply!"
            }
        }
        if(logoDiv[0] != undefined) {
            for(let i = 0; i < logoDiv.length; i++) {
                if((logoDiv[i].firstChild).tagName == 'svg' && (((logoDiv[i].firstChild).firstChild).firstChild).getAttribute('d') == 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z') { 
                    logoDiv[i].firstChild = (logoDiv[i].firstChild).replaceWith(document.createElement('img'));
                    logoDiv[i].firstChild.setAttribute('src', chrome.runtime.getURL('logo.svg'))
                    logoDiv[i].firstChild.setAttribute('width', '40');
                    logoDiv[i].firstChild.setAttribute('height', '40');
                    logoDiv[i].firstChild.setAttribute('style', 'margin-left: -2cpx;')
                }
            }
        } else {
            for(let i = 0; i < logoDivOSC.length; i++) {
                if((logoDivOSC[i].firstChild).tagName == 'svg' && (((logoDivOSC[i].firstChild).firstChild).firstChild).getAttribute('d') == 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z') { 
                    logoDivOSC[i].firstChild = (logoDivOSC[i].firstChild).replaceWith(document.createElement('img'));
                    logoDivOSC[i].firstChild.setAttribute('src', chrome.runtime.getURL('logoBlanco.png'));
                    logoDivOSC[i].firstChild.setAttribute('width', '40');
                    logoDivOSC[i].firstChild.setAttribute('height', '40');
                    logoDivOSC[i].firstChild.setAttribute('style', 'margin-left: 5px;');
                }
            }
        }
}, 1000);
  }

chrome.runtime.onMessage.addListener(
function(request, sender, sendResponse) {
    if (request.message === 'hello!') {
    executeAfterDelay();
    }
});

executeAfterDelay()
