// 存数据
// name：命名 data：数据
function saveData(name, data) {
    localStorage.setItem(name, JSON.stringify({ 'time': Date.now(), 'data': data }))
}

// 取数据
// name：命名 time：过期时长,单位分钟,如传入30,即加载数据时如果超出30分钟返回0,否则返回数据
function loadData(name, time) {
    let d = JSON.parse(localStorage.getItem(name));
    // 过期或有错误返回 0 否则返回数据
    if (d) {
        let t = Date.now() - d.time
        if (t < (time * 60 * 1000) && t > -1) return d.data;
    }
    return 0;
}

// 上面两个函数如果你有其他需要存取数据的功能，也可以直接使用

// 读取背景
try {
    let data = loadData('blogbg', 1440)
    if (data) changeBg(data, 1)
    else localStorage.removeItem('blogbg');
} catch (error) { localStorage.removeItem('blogbg'); }

// 切换背景函数
// 此处的flag是为了每次读取时都重新存储一次,导致过期时间不稳定
// 如果flag为0则存储,即设置背景. 为1则不存储,即每次加载自动读取背景.
function changeBg(s, flag) {
    let bg = document.getElementById('web_bg')
    if (s.charAt(0) == '#') {
        bg.style.backgroundColor = s
        bg.style.backgroundImage = 'none'
    } else bg.style.backgroundImage = s
    if (!flag) { saveData('blogbg', s) }
}

// 以下为2.0新增内容

// 创建窗口
var winbox = ''

function createWinbox() {
    let div = document.createElement('div')
    document.body.appendChild(div)
    winbox = WinBox({
        id: 'changeBgBox',
        index: 999,
        title: "切换背景",
        x: "center",
        y: "center",
        minwidth: '300px',
        height: "60%",
        background: '#49b1f5',
        onmaximize: () => { div.innerHTML = `<style>body::-webkit-scrollbar {display: none;}div#changeBgBox {width: 100% !important;}</style>` },
        onrestore: () => { div.innerHTML = '' }
    });
    winResize();
    window.addEventListener('resize', winResize)

    // 每一类我放了一个演示，直接往下复制粘贴 a标签 就可以，需要注意的是 函数里面的链接 冒号前面需要添加反斜杠\进行转义
    winbox.body.innerHTML = `
    <div id="article-container" style="padding:10px;">
    
    <p><button onclick="localStorage.removeItem('blogbg');location.reload();" style="background:#5fcdff;display:block;width:100%;padding: 15px 0;border-radius:6px;color:white;"><i class="fa-solid fa-arrows-rotate"></i> 点我恢复默认背景</button></p>
    <h2 id="图片（手机）"><a href="#图片（手机）" class="headerlink" title="图片（手机）"></a>图片(手机)</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.jsdelivr.net/gh/binwenwu/picgo_demo/img/01.jpg)" class="pimgbox" onclick="changeBg('url(https\://cdn.jsdelivr.net/gh/binwenwu/picgo_demo/img/01.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.jsdelivr.net/gh/binwenwu/picgo_demo/img/02.jpg)" class="pimgbox" onclick="changeBg('url(https\://cdn.jsdelivr.net/gh/binwenwu/picgo_demo/img/02.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.jsdelivr.net/gh/binwenwu/picgo_demo/img/03.jpg)" class="pimgbox" onclick="changeBg('url(https\://cdn.jsdelivr.net/gh/binwenwu/picgo_demo/img/03.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.jsdelivr.net/gh/binwenwu/picgo_demo/img/04.jpg)" class="pimgbox" onclick="changeBg('url(https\://cdn.jsdelivr.net/gh/binwenwu/picgo_demo/img/04.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.jsdelivr.net/gh/binwenwu/picgo_demo/img/05.jpg)" class="pimgbox" onclick="changeBg('url(https\://cdn.jsdelivr.net/gh/binwenwu/picgo_demo/img/05.jpg)')"></a>
    </div>
    
    <h2 id="图片（电脑）"><a href="#图片（电脑）" class="headerlink" title="图片（电脑）"></a>图片(电脑)</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.jsdelivr.net/gh/binwenwu/picgo_demo/img/%E7%A7%8B%E5%A4%A9%E9%A3%8E%E6%99%AF%20%E6%A0%91%20%E7%8B%97%20%E8%90%BD%E5%8F%B6%20%E9%AB%98%E5%B1%B1%20%E5%94%AF%E7%BE%8E%E6%84%8F%E5%A2%83%E9%A3%8E%E6%99%AF4k%E5%A3%81%E7%BA%B8_%E5%BD%BC%E5%B2%B8%E5%9B%BE%E7%BD%91.jpg)" class="imgbox" onclick="changeBg('url(https\://cdn.jsdelivr.net/gh/binwenwu/picgo_demo/img/%E7%A7%8B%E5%A4%A9%E9%A3%8E%E6%99%AF%20%E6%A0%91%20%E7%8B%97%20%E8%90%BD%E5%8F%B6%20%E9%AB%98%E5%B1%B1%20%E5%94%AF%E7%BE%8E%E6%84%8F%E5%A2%83%E9%A3%8E%E6%99%AF4k%E5%A3%81%E7%BA%B8_%E5%BD%BC%E5%B2%B8%E5%9B%BE%E7%BD%91.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.jsdelivr.net/gh/binwenwu/picgo_demo/img/beyond_the_clouds_v01_5120x2880.png)" class="imgbox" onclick="changeBg('url(https\://cdn.jsdelivr.net/gh/binwenwu/picgo_demo/img/beyond_the_clouds_v01_5120x2880.png)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.jsdelivr.net/gh/binwenwu/picgo_demo/img/ASCASC.jpg)" class="imgbox" onclick="changeBg('url(https\://cdn.jsdelivr.net/gh/binwenwu/picgo_demo/img/ASCASC.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.jsdelivr.net/gh/binwenwu/picgo_demo/img/anime_sniper-wallpaper-1280x720.jpg)" class="imgbox" onclick="changeBg('url(https\://cdn.jsdelivr.net/gh/binwenwu/picgo_demo/img/anime_sniper-wallpaper-1280x720.jpg)')"></a>
    </div>
    
    
    <h2 id="渐变色"><a href="#渐变色" class="headerlink" title="渐变色"></a>渐变色</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #eecda3, #ef629f,#cc44dc)" onclick="changeBg('linear-gradient(to right, #eecda3, #ef629f,#cc44dc)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #0000FF, #800080)" onclick="changeBg('linear-gradient(to right, #0000FF, #800080)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #FFFF00 , #00FF00)" onclick="changeBg('linear-gradient(to right, #FFFF00 , #00FF00)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #FFA500 , #FF69B4)" onclick="changeBg('linear-gradient(to right, #FFA500 , #FF69B4)')"></a>
    </div>
    
    <h2 id="纯色"><a href="#纯色" class="headerlink" title="纯色"></a>纯色</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #7D9D9C" onclick="changeBg('#7D9D9C')"></a> 
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #aadfac" onclick="changeBg('#aadfac')"></a> 
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #20c3a7" onclick="changeBg('#caa2ca')"></a> 
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #d2dfdc" onclick="changeBg('#d2dfdc')"></a> 
    </div>
`;
}

// 适应窗口大小
function winResize() {
    let box = document.querySelector('#changeBgBox')
    if (!box || box.classList.contains('min') || box.classList.contains('max')) return // 2023-02-10更新
    var offsetWid = document.documentElement.clientWidth;
    if (offsetWid <= 768) {
        winbox.resize(offsetWid * 0.95 + "px", "90%").move("center", "center");
    } else {
        winbox.resize(offsetWid * 0.6 + "px", "70%").move("center", "center");
    }
}

// 切换状态，窗口已创建则控制窗口显示和隐藏，没窗口则创建窗口
function toggleWinbox() {
    if (document.querySelector('#changeBgBox')) winbox.toggleClass('hide');
    else createWinbox();
}

