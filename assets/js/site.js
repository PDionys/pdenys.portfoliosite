// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function contactMe(button) {
    var mail = "p.deniskpi@gmail.com";

    navigator.clipboard.writeText(mail).then(function () {
        if (button !== null) {
            alert("Mail copied to clipboard!");
            button.innerText = mail;
        } else {
            alert("Mail: " + mail + " copied to clipboard!");
        }
        
    }).catch(function (error) {
        alert("Failed to copy text: " + error);
    });
}