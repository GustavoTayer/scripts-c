document.addEventListener("DOMContentLoaded", function() {

(function (d, t) {
    var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
    v.onload = function () {
        window.voiceflow.chat.load({
            verify: { projectID: '66c7bab6ac85545518b9613f' },
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production',
            /**
* [optional] override configured agent definitions on integrations tab
*/
            assistant: {
                title: "oie",
                description: "teste",
                // image: "string",
                // color: "string",
                // stylesheet: "string" //link to your self-hosted stylesheet
            }
        })
    };
    v.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
    v.type = "text/javascript";
    s.parentNode.insertBefore(v, s);
})(document, 'script');})