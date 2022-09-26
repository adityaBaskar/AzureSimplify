const VNGUrl = 'ms.portal.azure.com/#create/Microsoft.VirtualNetworkGateway'
const VMUrl = 'ms.portal.azure.com/#create/Microsoft.VirtualMachine'

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

function redirect()
{
    if (window.location.href.includes(VMUrl)) {
        location.assign('https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2Fazure-quickstart-templates%2Fmaster%2Fquickstarts%2Fmicrosoft.compute%2Fvm-simple-windows%2Fazuredeploy.json');
    } else if(window.location.href.includes(VNGUrl)) {
        var butt = document.getElementById("simplifyButton")
        const p2sbtn = document.createElement("button");
        p2sbtn.innerHTML = "p2s gateway";
        p2sbtn.setAttribute("id","p2s")
        const s2sbtn = document.createElement("button");
        s2sbtn.innerHTML = "s2s gateway";
        s2sbtn.setAttribute("id","s2s")
        butt.parentElement.appendChild(p2sbtn)
        butt.parentElement.appendChild(s2sbtn)
        butt.hidden = true
        sleep(500)
        p2sbtn.onclick = function(){location.assign('https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2Fazure-quickstart-templates%2Fmaster%2Fquickstarts%2Fmicrosoft.network%2Fpoint-to-site-aad%2Fazuredeploy.json')}
        s2sbtn.onclick = function(){location.assign('https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2Fazure-quickstart-templates%2Fmaster%2Fquickstarts%2Fmicrosoft.network%2Fsite-to-site-vpn-create%2Fazuredeploy.json')}        
    }
}

const btn = document.createElement("button");
btn.innerHTML = "Simplify";
btn.setAttribute("id","simplifyButton")
var innerTxt = document.getElementsByClassName("fxs-blade-title-titleText")[0]
innerTxt.appendChild(btn);
sleep(500)
var butt = document.getElementById("simplifyButton")
butt.onclick = function(){redirect()};