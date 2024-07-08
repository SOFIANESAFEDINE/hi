var L1 = 0;
var L2 = 100;
var L3 = 110;
var L4 = 120;
var L5 = 130;
var L6 = 140;
var L7 = 150;
var L8 = 160;
var L9 = 170;
var L10 = 180;
var L10B = 200;

var L11 = 130;
var L12 = 140;
var L13 = 150;
var L14 = 160;
var L15 = 170;
var L16 = 180;
var L17 = 190;
var L18 = 200;
var L19 = 210;
var L20 = 220;
var L20B = 300;

var L21 = 160;
var L22 = 170;
var L23 = 180;
var L24 = 190;
var L25 = 200;
var L26 = 210;
var L27 = 220;
var L28 = 230;
var L29 = 240;
var L30 = 250;
var L30B = 400;

var L31 = 180;
var L32 = 190;
var L33 = 200;
var L34 = 210;
var L35 = 220;
var L36 = 230;
var L37 = 240;
var L38 = 250;
var L39 = 260;
var L40 = 270;
var L40B = 500;

var L41 = 200;
var L42 = 210;
var L43 = 220;
var L44 = 230;
var L45 = 240;
var L46 = 250;
var L47 = 260;
var L48 = 270;
var L49 = 280;
var L50 = 290;
var L50B = 800;

var L51 = 160;
var L52 = 180;
var L53 = 200;
var L54 = 220;
var L55 = 240;
var L56 = 260;
var L57 = 280;
var L58 = 300;
var L59 = 320;
var L60 = 340;
var L60B = 600;

var L61 = 220;
var L62 = 240;
var L63 = 260;
var L64 = 280;
var L65 = 300;
var L66 = 320;
var L67 = 340;
var L68 = 360;
var L69 = 380;
var L70 = 400;
var L70B = 700;

var L71 = 280;
var L72 = 300;
var L73 = 320;
var L74 = 340;
var L75 = 360;
var L76 = 380;
var L77 = 400;
var L78 = 420;
var L79 = 440;
var L80 = 460;
var L80B = 900;

var L81 = 340;
var L82 = 360;
var L83 = 380;
var L84 = 400;
var L85 = 420;
var L86 = 440;
var L87 = 460;
var L88 = 480;
var L89 = 500;
var L90 = 520;
var L90B = 1200;

var L91 = 400;
var L92 = 420;
var L93 = 440;
var L94 = 460;
var L95 = 480;
var L96 = 500;
var L97 = 520;
var L98 = 540;
var L99 = 560;
var L100 = 580;
var L100B = 2000;

var L101 = 240;
var L102 = 270;
var L103 = 300;
var L104 = 330;
var L105 = 360;
var L106 = 390;
var L107 = 420;
var L108 = 450;
var L109 = 480;
var L110 = 510;
var L110B = 2000;

var L111 = 330;
var L112 = 360;
var L113 = 390;
var L114 = 420;
var L115 = 450;
var L116 = 480;
var L117 = 510;
var L118 = 540;
var L119 = 570;
var L120 = 600;
var L120B = 2000;

var L121 = 420;
var L122 = 450;
var L123 = 480;
var L124 = 510;
var L125 = 540;
var L126 = 570;
var L127 = 600;
var L128 = 630;
var L129 = 660;
var L130 = 690;
var L130B = 3000;

var L131 = 510;
var L132 = 540;
var L133 = 570;
var L134 = 600;
var L135 = 630;
var L136 = 660;
var L137 = 690;
var L138 = 720;
var L139 = 750;
var L140 = 780;
var L140B = 4000;

var L141 = 600;
var L142 = 630;
var L143 = 660;
var L144 = 690;
var L145 = 720;
var L146 = 750;
var L147 = 780;
var L148 = 810;
var L149 = 840;
var L150 = 870;
var L150B = 5000;

var L151 = 360;
var L152 = 400;
var L153 = 440;
var L154 = 480;
var L155 = 520;
var L156 = 560;
var L157 = 600;
var L158 = 640;
var L159 = 680;
var L160B = 5000;
var L161 = 400;
var L162 = 440;
var L163 = 480;
var L164 = 520;
var L165 = 560;
var L166 = 600;
var L167 = 640;
var L168 = 680;
var L169 = 720;
var L170 = 760;
var L170B = 5000;
var L171 = 520;
var L172 = 560;
var L173 = 600;
var L174 = 640;
var L175 = 680;
var L176 = 720;
var L177 = 760;
var L178 = 800;
var L179 = 840;
var L180 = 880;
var L180B = 5800;
var L181 = 600;
var L182 = 640;
var L183 = 680;
var L184 = 720;
var L185 = 760;
var L186 = 800;
var L187 = 840;
var L188 = 880;
var L189 = 920;
var L190 = 980;

function calculate() {
  var currentLevel = parseInt(document.getElementById('E14').value);
  var nextLevel = parseInt(document.getElementById('E15').value);
  var totalRequirements = 0;
  var blueAsh = 0;

  for (var i = currentLevel + 1; i <= nextLevel; i++) {
    var levelVar = 'L' + i;
    if (i % 10 === 0 && window[levelVar + 'B'] !== undefined) {
      totalRequirements += window[levelVar + 'B'];
    } else {
      totalRequirements += window[levelVar];
    }
  }

  blueAsh = totalRequirements; // Assuming blue ash is the same as total requirements

  document.getElementById('M10').innerText = 'مجموع المتطلبات: ' + totalRequirements;
  document.getElementById('T888').innerText = 'جوهر الـلهـب: ' + blueAsh;
}

document.getElementById('B').addEventListener('click', calculate);