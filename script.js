var input = document.querySelector("input");
let matching;
var data = [
    { naam: "Sanji", src: "https://th.bing.com/th/id/OIP.tzmhQvM07Ftfv4tr6VEukwHaHa?w=193&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { naam: "Luffy", src: "https://th.bing.com/th/id/OIP.-Ff6cNVmHvEh_U7fDCrswQHaHa?pid=ImgDet&w=206&h=206&c=7&dpr=1.3" },
    { naam: "Ace", src: "https://th.bing.com/th/id/OIP.DHXnvqUD4bX-Yz9YLvccRgHaHa?pid=ImgDet&w=206&h=206&c=7&dpr=1.3" },
    { naam: "Mr.x", src: "https://th.bing.com/th/id/OIP.WjTf4WtNSkFPth9TxdF7AwHaHa?w=165&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { naam: "Naruto", src: "https://th.bing.com/th/id/OIP.IBTmyM_kW9euCRR2VgCxcQHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3" },
    { naam: "Doraemon", src: "https://th.bing.com/th/id/OIP.m0yfW3ayTJOjSN1k3KIxDQHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3" },
    { naam: "Light", src: "https://th.bing.com/th/id/OIP.shKY-HUyyTQ2BnGGwLAONgHaHa?w=206&h=206&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { naam: "L lawliet", src: "https://th.bing.com/th/id/OIP.m9sPwT5LVp-j4VdIMl-3QwHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { naam: "Pooh", src: "https://th.bing.com/th/id/OIP.IUqrtq3dT7c5KgdQrHtUkgHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3" },
    { naam: "jack sparrow", src: "https://yt3.ggpht.com/a/AATXAJwsLUbvp4uGOAGZ9yP3PfWWLMzWWCGfgNzOAg=s900-c-k-c0xffffffff-no-rj-mo" },
    { naam: "Potter", src: "https://th.bing.com/th/id/OIP.6siDWicBoxwvJsqmNeKrgAHaHa?rs=1&pid=ImgDetMain" }
];

var pers = "";
data.forEach(function (e) {
    pers += `<div class="person">
                    <img src="${e.src}">
                    <h4>${e.naam}</h4>
                </div>`
})
document.querySelector(".people").innerHTML = pers;

input.addEventListener("input", function () {
     matching = data.filter(function (e) {
        return e.naam.toLocaleLowerCase().startsWith(input.value)
    })
    var newusers = "";
    matching.forEach(function (e) {
        newusers += `<div class="person">
        <img src="${e.src}">
        <h4>${e.naam}</h4>
        </div>`
    })    
    document.querySelector(".people").innerHTML = newusers;
})