/*
电影先生 地址发布页
http://dyxs.vip
http://dyxs.me
*/
muban.mxone5.二级.title = 'h1&&Text;.video-info-aux&&Text';
muban.mxone5.二级.desc = '.video-info-items:eq(3)&&Text;;;.video-info-actor:eq(2)&&Text;.video-info-actor:eq(0)&&Text';
muban.mxone5.二级.content = '.video-info-content&&Text';
var rule = {
    title:'电影先生',
    模板:'mxone5',
    host:'http://dyxs.vip',
    hostJs:'print(HOST);let html=request(HOST,{headers:{"User-Agent":PC_UA}});let src=jsp.pdfh(html,"p:eq(5)&&a&&href");print(src);HOST=src',
    // url:'/pianku-fyclass--------fypage---/',
    url:'/pianku-fyclassfyfilter/',
    filterable:1,//是否启用分类筛选,
    filter_url:'-{{fl.area}}-{{fl.by}}-{{fl.class}}-{{fl.lang}}----fypage---{{fl.year}}',
    filter: {
        "dianying":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"剧情","v":"剧情"},{"n":"喜剧","v":"喜剧"},{"n":"动作","v":"动作"},{"n":"爱情","v":"爱情"},{"n":"科幻","v":"科幻"},{"n":"动画","v":"动画"},{"n":"悬疑","v":"悬疑"},{"n":"惊悚","v":"惊悚"},{"n":"警匪","v":"警匪"},{"n":"恐怖","v":"恐怖"},{"n":"犯罪","v":"犯罪"},{"n":"同性","v":"同性"},{"n":"音乐","v":"音乐"},{"n":"歌舞","v":"歌舞"},{"n":"传记","v":"传记"},{"n":"历史","v":"历史"},{"n":"战争","v":"战争"},{"n":"西部","v":"西部"},{"n":"奇幻","v":"奇幻"},{"n":"冒险","v":"冒险"},{"n":"灾难","v":"灾难"},{"n":"武侠","v":"武侠"},{"n":"古装","v":"古装"},{"n":"纪录","v":"纪录"},{"n":"运动","v":"运动"},{"n":"青春偶像","v":"青春偶像"},{"n":"都市","v":"都市"},{"n":"情景","v":"情景"},{"n":"短片","v":"短片"},{"n":"Netflix","v":"Netflix"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"中国大陆","v":"中国大陆"},{"n":"中国香港","v":"中国香港"},{"n":"中国台湾","v":"中国台湾"},{"n":"美国","v":"美国"},{"n":"韩国","v":"韩国"},{"n":"日本","v":"日本"},{"n":"泰国","v":"泰国"},{"n":"新加坡","v":"新加坡"},{"n":"马来西亚","v":"马来西亚"},{"n":"印度","v":"印度"},{"n":"英国","v":"英国"},{"n":"法国","v":"法国"},{"n":"加拿大","v":"加拿大"},{"n":"西班牙","v":"西班牙"},{"n":"俄罗斯","v":"俄罗斯"},{"n":"澳大利亚","v":"澳大利亚"},{"n":"其它","v":"其它"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"英语","v":"英语"},{"n":"粤语","v":"粤语"},{"n":"闽南语","v":"闽南语"},{"n":"韩语","v":"韩语"},{"n":"日语","v":"日语"},{"n":"法语","v":"法语"},{"n":"德语","v":"德语"},{"n":"意大利语","v":"意大利语"},{"n":"泰语","v":"泰语"},{"n":"西班牙语","v":"西班牙语"},{"n":"葡萄牙语","v":"葡萄牙语"},{"n":"印地语","v":"印地语"},{"n":"泰米尔语","v":"泰米尔语"},{"n":"俄语","v":"俄语"},{"n":"其它","v":"其它"}]},{"key":"year","name":"时间","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}],
        "dianshiju":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"剧情","v":"剧情"},{"n":"喜剧","v":"喜剧"},{"n":"动作","v":"动作"},{"n":"爱情","v":"爱情"},{"n":"科幻","v":"科幻"},{"n":"动画","v":"动画"},{"n":"悬疑","v":"悬疑"},{"n":"惊悚","v":"惊悚"},{"n":"警匪","v":"警匪"},{"n":"恐怖","v":"恐怖"},{"n":"犯罪","v":"犯罪"},{"n":"同性","v":"同性"},{"n":"音乐","v":"音乐"},{"n":"歌舞","v":"歌舞"},{"n":"传记","v":"传记"},{"n":"历史","v":"历史"},{"n":"战争","v":"战争"},{"n":"西部","v":"西部"},{"n":"奇幻","v":"奇幻"},{"n":"冒险","v":"冒险"},{"n":"灾难","v":"灾难"},{"n":"武侠","v":"武侠"},{"n":"古装","v":"古装"},{"n":"纪录","v":"纪录"},{"n":"运动","v":"运动"},{"n":"青春偶像","v":"青春偶像"},{"n":"都市","v":"都市"},{"n":"情景","v":"情景"},{"n":"短剧","v":"短剧"},{"n":"Netflix","v":"Netflix"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"中国大陆","v":"中国大陆"},{"n":"中国香港","v":"中国香港"},{"n":"中国台湾","v":"中国台湾"},{"n":"韩国","v":"韩国"},{"n":"日本","v":"日本"},{"n":"美国","v":"美国"},{"n":"泰国","v":"泰国"},{"n":"英国","v":"英国"},{"n":"新加坡","v":"新加坡"},{"n":"其他","v":"其他"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"英语","v":"英语"},{"n":"粤语","v":"粤语"},{"n":"闽南语","v":"闽南语"},{"n":"韩语","v":"韩语"},{"n":"日语","v":"日语"},{"n":"法语","v":"法语"},{"n":"德语","v":"德语"},{"n":"意大利语","v":"意大利语"},{"n":"泰语","v":"泰语"},{"n":"西班牙语","v":"西班牙语"},{"n":"葡萄牙语","v":"葡萄牙语"},{"n":"印地语","v":"印地语"},{"n":"泰米尔语","v":"泰米尔语"},{"n":"俄语","v":"俄语"},{"n":"其它","v":"其它"}]},{"key":"year","name":"时间","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}],
        "dongman":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"剧情","v":"剧情"},{"n":"喜剧","v":"喜剧"},{"n":"动作","v":"动作"},{"n":"爱情","v":"爱情"},{"n":"科幻","v":"科幻"},{"n":"动画","v":"动画"},{"n":"悬疑","v":"悬疑"},{"n":"惊悚","v":"惊悚"},{"n":"警匪","v":"警匪"},{"n":"恐怖","v":"恐怖"},{"n":"犯罪","v":"犯罪"},{"n":"同性","v":"同性"},{"n":"音乐","v":"音乐"},{"n":"歌舞","v":"歌舞"},{"n":"传记","v":"传记"},{"n":"历史","v":"历史"},{"n":"战争","v":"战争"},{"n":"西部","v":"西部"},{"n":"奇幻","v":"奇幻"},{"n":"冒险","v":"冒险"},{"n":"灾难","v":"灾难"},{"n":"武侠","v":"武侠"},{"n":"古装","v":"古装"},{"n":"纪录","v":"纪录"},{"n":"运动","v":"运动"},{"n":"青春偶像","v":"青春偶像"},{"n":"都市","v":"都市"},{"n":"情景","v":"情景"},{"n":"其他","v":"其他"},{"n":"Netflix","v":"Netflix"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"中国大陆","v":"中国大陆"},{"n":"中国香港","v":"中国香港"},{"n":"中国台湾","v":"中国台湾"},{"n":"日本","v":"日本"},{"n":"美国","v":"美国"},{"n":"其他","v":"其他"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"英语","v":"英语"},{"n":"粤语","v":"粤语"},{"n":"闽南语","v":"闽南语"},{"n":"韩语","v":"韩语"},{"n":"日语","v":"日语"},{"n":"法语","v":"法语"},{"n":"德语","v":"德语"},{"n":"意大利语","v":"意大利语"},{"n":"泰语","v":"泰语"},{"n":"西班牙语","v":"西班牙语"},{"n":"葡萄牙语","v":"葡萄牙语"},{"n":"印地语","v":"印地语"},{"n":"泰米尔语","v":"泰米尔语"},{"n":"俄语","v":"俄语"},{"n":"其它","v":"其它"}]},{"key":"year","name":"时间","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}],
        "zongyi":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"剧情","v":"剧情"},{"n":"喜剧","v":"喜剧"},{"n":"动作","v":"动作"},{"n":"爱情","v":"爱情"},{"n":"科幻","v":"科幻"},{"n":"动画","v":"动画"},{"n":"悬疑","v":"悬疑"},{"n":"惊悚","v":"惊悚"},{"n":"警匪","v":"警匪"},{"n":"恐怖","v":"恐怖"},{"n":"犯罪","v":"犯罪"},{"n":"同性","v":"同性"},{"n":"音乐","v":"音乐"},{"n":"歌舞","v":"歌舞"},{"n":"传记","v":"传记"},{"n":"历史","v":"历史"},{"n":"战争","v":"战争"},{"n":"西部","v":"西部"},{"n":"奇幻","v":"奇幻"},{"n":"冒险","v":"冒险"},{"n":"灾难","v":"灾难"},{"n":"武侠","v":"武侠"},{"n":"古装","v":"古装"},{"n":"纪录","v":"纪录"},{"n":"运动","v":"运动"},{"n":"青春偶像","v":"青春偶像"},{"n":"都市","v":"都市"},{"n":"情景","v":"情景"},{"n":"真人秀","v":"真人秀"},{"n":"旅游","v":"旅游"},{"n":"音乐","v":"音乐"},{"n":"美食","v":"美食"},{"n":"Netflix","v":"Netflix"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"中国大陆","v":"中国大陆"},{"n":"中国香港","v":"中国香港"},{"n":"中国台湾","v":"中国台湾"},{"n":"日本","v":"日本"},{"n":"美国","v":"美国"},{"n":"其他","v":"其他"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"英语","v":"英语"},{"n":"粤语","v":"粤语"},{"n":"闽南语","v":"闽南语"},{"n":"韩语","v":"韩语"},{"n":"日语","v":"日语"},{"n":"法语","v":"法语"},{"n":"德语","v":"德语"},{"n":"意大利语","v":"意大利语"},{"n":"泰语","v":"泰语"},{"n":"西班牙语","v":"西班牙语"},{"n":"葡萄牙语","v":"葡萄牙语"},{"n":"印地语","v":"印地语"},{"n":"泰米尔语","v":"泰米尔语"},{"n":"俄语","v":"俄语"},{"n":"其它","v":"其它"}]},{"key":"year","name":"时间","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}]
    },
	filter_def:{
		dianying:{by:'time'},
        dianshiju:{by:'time'},
        dongman:{by:'time'},
        zongyi:{by:'time'}
	},
    searchUrl:'/search-**-----------fypage--/',
    class_parse: '.nav-menu-items&&li:gt(0):lt(5);a&&Text;a&&href;.*/(.*?)/',
   tab_order:['kuaikan','1080zyk','tpm3u8','lzm3u8','bfzym3u8','ikm3u8','fsm3u8','kcm3u8','bjm3u8','ffm3u8','fem3u8','kbm3u8','wolong','xlm3u8','yhm3u8','tkm3u8','zuidam3u8','jsm3u8','ukm3u8','dbm3u8','hnm3u8','jyzm3u8','lem3u8','foxm3u8','gsm3u8','kdm3u8','sdm3u8','wjm3u8','ptyunm','jinyingm3u8','68zy_m3u8'],
//线路顺序,按里面的顺序优先，没写的依次排后面
	tab_rename:{'KK节点':'🌟快看','1080节点':'🌟優質','TP节点':'🌟淘片','LZ节点':'🌟量子','BF节点':'🌟暴风','IK节点':'🌟ikun','FS节点':'🌟飞速','KC节点':'🌟快车','BJ节点':'🌟八戒','FF节点':'🌟非凡','FE节点':'🌟飛速','KB节点':'🌟快播','WL节点':'🌟卧龙','XL节点':'🌟新浪','YH节点':'🌟樱花','TK节点':'🌕天空','ZD节点':'🌕最大','JS节点':'🌕极数','BK节点':'🌕U酷','DB节点':'🌕百度','HN节点':'🌕红牛','JY节点':'🌕金鷹','LE节点':'🌕鱼乐','FOX节点':'😰FOX','GS节点':'😰光速','KD节点':'😰酷点','SD节点':'😰闪电','WJ节点':'😰无尽'}, 
lazy:"js:var html=JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);log(html);var url=html.url;if(html.encrypt=='1'){url=unescape(url).split('&')[0]}else if(html.encrypt=='2'){url=unescape(base64Decode(url).split('&')[0])}if(/m3u8|mp4/.test(url)){input=url}else{input}",
}