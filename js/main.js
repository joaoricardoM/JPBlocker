var sleepTime = 1000;
var banned_ads_servers = ["googleads", "s0.2mdn.net", "filestatic.xyz","spider.ad","ad.lomadee.com","pestilenttidefilth.org","delightspiritedtroop.com","realmpallduns.com","rosqb6vb1cqp.com","dollsdeclare.com","breedtagask.com","348wd7etbann.com","pulpsbarndomed.com","humidmentioned.com","upsghpnqjoo.com","ttgmjfgldgv9ed10.com","jfxkxoicr.com","mimilcnf.pro","appendixwarmingauthors.com","disturbancecoldlilac.com","bgun5cxxi2dv.com","penjazzvice.com","ruthcraveastray.com","lataurir.com","sqhneencmysrk.com","ivfihumeajjmbc.com","fathuntsgall.com","eelfadechi.com","xo28pclotovi.com","mypopads.com","glenprejudice.com","selfswayjay.com","eshncdkjp.com","xclofrfa.com","aulteeby.net","ilohfbiph.com","xcsypkknp.com","dnemkhkbsdbl.com","beheadmuffleddetached.com","riminghoggoofy.com","tfzznclztl.com$third-party","zabanit.xyz","edthoutfre.fun","kaurouby.net","nickeeha.net","alawachi.net","ereenerall.fun","glazegha.com","qbcpicrtdje.com","wvekalpmn.com","finkyepbows.com","jcqwzssqks.com","btnldivewzzfso.com","waspaortascene.com","drawnperink.com","vobquhydgvyqf.com","tunviralbionic.com","zebuaridromps.com","alhypnoom.com","peuzubuqo.com","xyctmmogcv.com","misguidedstork.com","disappearanceinspiredscan.com","skillpropulsion.com","clxrggmghevqfu.com$third-party","edxlewni.com","pdxgfnnoan.com","sporedfryhum.com","statementssupervisorthorough.com","trysprierratty.com","closkeyrespond.com","chewsrompedhemp.com","vjkjjhbi.com","olouphoo.com","suptaibo.com","bighticeate.com","dragonspontaneous.com","dellswhinyrank.com","yepteaswont.com","nzbnjdukgaco.com","ptcqjliwwkldm.com","abroodeuripi.com","brazenwholly.com","aanqylta.com","samplerpouch.com","loftsbaacad.com","deliriousglowing.com","2mdn.net","ads","advertising","propaganda"]
var banned_adult_servers = ["porn"]

function main(){
    //block_ads();
    block_adult_content();
}

function block_ads(){
    imgTags = document.querySelectorAll("img");
    imgTags.forEach((tag) => {
        banned_ads_servers.forEach((server) => {
            if (tag.src.toString().includes(server)){
                tag.src = "";
            }
        });
    });
   
}

function block_adult_content(){
    if (window.location.href.includes("porn")){
        window.location.href = "https://www.youtube.com/watch?v=djnyU9-ZyVg"
    }
}

var interval = setInterval(() => {
    main();
}, sleepTime);
