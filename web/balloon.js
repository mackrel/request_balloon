//吹き出しを生成する関数
//speaker:しゃべっている人 (0:他人 1:自分)
//text:吹き出しの内容 (HTML要素も可)
//picUrl:アイコンのURL
function MkBalloon(speaker , text, picUrl) {

    //要素を追加する場所の取得
    var talk_m = document.getElementById('talk_m');

/*以下の要素の作成して追加する
		<div class="item_m">
			<div class="iconWrap_m">
				<img class="icon_m" src="icon.jpg"/>
			</div>
			<div class="balloonWrap_m">
				<div class="balloon_m">
					<i class="tale fab fa-affiliatetheme fa-4x fa-flip-horizontal"></i>
					<p class="text_m">うはwww本能寺燃えてるwwww</p>
					<p class="text_m"></p>
				</div>
			</div>
		</div>
*/
    //1つのメッセージの大枠
    var item_m = document.createElement('div');
    item_m.setAttribute('class', 'item_m');
    if(speaker)item_m.setAttribute('class', 'item_m me_m');
    
    //アイコン画像の要素
    var iconWrap_m = document.createElement('div');
    iconWrap_m.setAttribute('class' ,'iconWrap_m');
    var icon_m = document.createElement('img');
    icon_m.setAttribute('class', 'icon_m');
    icon_m.setAttribute('src', picUrl);

    iconWrap_m.appendChild(icon_m);
    item_m.appendChild(iconWrap_m);

    //吹き出しの要素
    var balloonWrap_m = document.createElement('div');
    balloonWrap_m.setAttribute('class', 'balloonWrap_m');
    var balloon_m = document.createElement('div');
    balloon_m.setAttribute('class', 'balloon_m');
    //吹き出しの要素（tale)
    var tale = document.createElement('i');
    tale.setAttribute('class', 'tale fab fa-affiliatetheme fa-4x fa-flip-horizontal');
    if(speaker) tale.setAttribute('class', 'tale fab fa-affiliatetheme fa-4x');
    balloon_m.appendChild(tale);
    //吹き出しの要素（text）
    var text_m = document.createElement('p');
    text_m.setAttribute('class', 'text_m');
    //text_m.textContent = text;
    text_m.innerHTML = text;
    balloon_m.appendChild(text_m);
    balloonWrap_m.appendChild(balloon_m);
    item_m.appendChild(balloonWrap_m);

    //ぶち込む
    talk_m.appendChild(item_m);
}

MkBalloon(0, 'aaaaa', 'icon.jpg');
MkBalloon(1, '<img src="icon2.jpg">','icon.jpg');
MkBalloon(0, '<a href="https://www.google.com/">リンクはこちら</a>', 'icon.jpg');