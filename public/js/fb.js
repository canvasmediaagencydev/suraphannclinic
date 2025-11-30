setFacebookChat()

async function setFacebookChat () {
    try {
        console.log('start inject code')
        var fb_root = document.createElement('div'); // is a node
        fb_root.innerHTML = '';
        fb_root.setAttribute("id", "fb-root");

        var fb_customer_chat = document.createElement('div'); // is a node
        fb_customer_chat.innerHTML = '';
        fb_customer_chat.setAttribute("id", "fb-customer-chat");
        fb_customer_chat.setAttribute("class", "fb-customerchat");

        document.body.appendChild(fb_root);
        document.body.appendChild(fb_customer_chat);

        var chatbox = document.getElementById('fb-customer-chat');
        chatbox.setAttribute("page_id", "1253897587974332");
        chatbox.setAttribute("attribution", "biz_inbox");

        window.fbAsyncInit = function () {
            FB.init({
                xfbml: true,
                version: 'v17.0'
            });
        };

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/th_TH/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        console.log('inject success')
    } catch (e) {
        console.log('error : stop inject code', e)
        setTimeout(() => {
            setFacebookChat()
        }, 500)
    }

}

