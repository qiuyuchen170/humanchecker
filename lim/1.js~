function gcd(a,b){
    while (true){
                var yu=a%b;
                if (yu==0){
                    return b;
                }
                a=b;
                b=yu;
            }
    }

var a,b,c,d,e,f;
const max=40;
const min=1;
a=Math.floor(Math.random() * (max - min + 1)) + min;
b=Math.floor(Math.random() * (max - min + 1)) + min;
c=Math.floor(Math.random() * (max - min + 1)) + min;
d=Math.floor(Math.random() * (max - min + 1)) + min;
e=Math.floor(Math.random() * (max - min + 1)) + min;
f=Math.floor(Math.random() * (max - min + 1)) + min;
var q=`<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><munder><mo data-mjx-texclass="OP" movablelimits="true">lim</mo><mrow><mi>x</mi><mo accent="false" stretchy="false">→</mo><mi mathvariant="normal">∞</mi></mrow></munder><mfrac><mrow><msup><mi>${a}x</mi><mn>2</mn></msup><mo>+</mo><mi>${b}x</mi><mo>+${c}</mo></mrow><mrow><msup><mi>${d}x</mi><mn>2</mn></msup><mo>+</mo><mi>${e}x</mi><mo>+${f}</mo></mrow></mfrac></math>`;
document.getElementById("q").innerHTML=q;
var n=gcd(a,d);
var x=a/n;
var y=d/n;
var ans=`<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mfrac><mi>${x}</mi><mi>${y}</mi></mfrac></math>`;
//document.getElementById("a").innerHTML=ans;
function check(r){
    x1=document.getElementById("x").value;
    y1=document.getElementById("y").value;
    r(!(x1!=x||y1!=y));
    /*if(x1!=x||y1!=y){
        alert(`是人吗？不是人。`);
    }
    else{
        alert("检测成功，是人类！");
    }*/
}
function res(result){
    if(result){
        alert("通过验证");
    }
    else{
        alert("是人吗？不是人。");
    }
}