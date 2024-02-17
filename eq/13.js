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

var b,c,d,x1,x2,x3;
const max=40;
const min=1;
x1=Math.floor(Math.random() * (3 - 1 + 1)) + 1;
x2=Math.floor(Math.random() * (max - min + 1)) + min;
x3=Math.floor(Math.random() * (max - min + 1)) + min;
b=x1+x2+x3;
c=x1*x2+x1*x3+x2*x3;
d=x1*x2*x3;
var q=`<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><mi>${b}</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>${c}</mi><mi>x</mi><mo>−</mo><mi>${d}</mi></math>`;
document.getElementById("q").innerHTML=q;
console.log(`x1=${x1},x2=${x2},x3=${x3}`);
function check(r){
    ax1=parseInt(document.getElementById("x1").value);
    ax2=parseInt(document.getElementById("x2").value);
    ax3=parseInt(document.getElementById("x3").value);
    console.log(ax1+ax2+ax3,x1+x2+x3,ax1*ax2+ax1*ax3+ax2*ax3,x1*x2+x1*x3+x2*x3,ax1*ax2*ax3,x1*x2*x3);
    r((ax1+ax2+ax3 == x1+x2+x3) && (ax1*ax2+ax1*ax3+ax2*ax3 == x1*x2+x1*x3+x2*x3) && (ax1*ax2*ax3 == x1*x2*x3));
    /*if(x1!=x||y1!=y){
        alert(`是人吗？不是人。`);
    }
    else{
        alert("检测成功，是人类！");
    }*/
}

