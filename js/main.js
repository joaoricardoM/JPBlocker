var sleepTime = 1000;
block_servers_urls_list = ["https://raw.githubusercontent.com/easylist/easylist/master/easylist/easylist_adservers.txt"]
html_tags_list = ["img", "video", "iframe", "embed", "object", "source", "amp-img"]

function main(){
    get_blocked_servers(block_servers_urls_list);
}

function parse_response(response){
    var splited = response.split("\n");
    server_list = ""

    splited.forEach((s) => {
        if (s.includes("||")){
            server = s.replace("||", "").split("^")[0].split("/")[0];
            server_list += server + ","
        }
        
    });
    server_list = server_list.replace(" ", "").replace(window.location.hostname.toString(), "").split(",");

    var interval = setInterval(() => {
        html_tags_list.forEach((tag) => {
            block_ads(server_list, tag);
        });
    }, sleepTime);
}

function get_blocked_servers(urls){

    urls.forEach((url) => {
        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                raw_response = xhttp.responseText;
                parse_response(raw_response);
            }
        }

        xhttp.open("GET", url, true);
        xhttp.send();
    });
}

function block_ads(banned_ads_servers, html_tag){
    imgTags = document.querySelectorAll(html_tag);

    imgTags.forEach((tag) => {
        banned_ads_servers.forEach((server) => {
            if (!server == ""){
                if (html_tag == "object" && tag.data.toString().includes(server)){
                    console.log("BLOCKED: " + tag.data.toString())
                    tag.data = "";
                }
                else if (tag.src.toString().includes(server)){ 
                    console.log("BLOCKED: " + tag.src.toString())
                    tag.src = "";
                }
            }
        });  
    });
}

main();
