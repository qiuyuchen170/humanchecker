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

var a,b,c,x,y;
const max=40;
const min=1;
a=Math.floor(Math.random() * (max - min + 1)) + min;
x=Math.floor(Math.random() * (max - min + 1)) + min;
y=Math.floor(Math.random() * (max - min + 1)) + min;
b=(x+y)*a;
c=a*x*y;
var q=`<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mi>${a}</mi><msup><mi>x</mi><mrow><mn>2</mn></mrow></msup><mo>−</mo><mi>${b}</mi><mi>x</mi><mo>+</mo><mi>${c}</mi></math>`;
document.getElementById("q").innerHTML=q;
console.log(`x1=${x},x2=${y}`);
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

