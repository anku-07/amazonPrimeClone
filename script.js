var favChannels = [
    {img_url: "/New folder/img/channels/Discovery.jpg"},
    {img_url: "/New folder/img/channels/Docubay.jpg"},
    {img_url: "/New folder/img/channels/Erosnow.jpg"},
    {img_url: "/New folder/img/channels/Hayu.jpg"},
    {img_url: "/New folder/img/channels/Hoichoi.jpg"},
    {img_url: "/New folder/img/channels/LionsgatePlay.jpg"},
    {img_url: "/New folder/img/channels/MANORAMAMAX.jpg"},
    {img_url: "/New folder/img/channels/Mubi.jpg"},
    {img_url: "/New folder/img/channels/ShortsTv.jpg"}
];

favChannels.map(function(elem){
    var div = document.createElement('div');
    div.setAttribute("class","channelDiv");

    var image = document.createElement("img");
    image.setAttribute("src", elem.img_url);

    div.append(image);
    document.querySelector(".channel-btn").append(div);
})

localStorage.setItem("favChannels", JSON.stringify(favChannels));