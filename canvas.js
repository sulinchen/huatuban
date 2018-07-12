//获取工具按钮的标签
var Brush=document.getElementById('mean_brush');
var Eraser=document.getElementById('mean_eraser');
var Paint=document.getElementById('means_paint');
var Straw=document.getElementById('means_straw');
var Text=document.getElementById('means_text');
var Magnifier=document.getElementById('means_magnifier');
//获取形状按钮的标签
var Line=document.getElementById('shape_line');
var Arc=document.getElementById('shape_arc');
var Rect=document.getElementById('shape_rect');
var Poly=document.getElementById('shape_poly');
var Arcfill=document.getElementById('shape_arcfill');
var Rectfill=document.getElementById('shape_rectfill');
//把12个工具形状标签放到一个数组中
var action=[Brush,Eraser,Paint,Straw,Text,Maginfier,
    Line,Arc,Rect,Poly,Arcfill,Rectfill]
//设置线宽按钮
var Line_1=document.getElementById('width_1');
var Line_3=document.getElementById('width_3');
var Line_5=document.getElementById('width_5');
var Line_8=document.getElementById('width_8');
//把4种线宽对象放到一个数组中
var width=[Line_1,Line_3,Line_5,Line_8];
//获取颜色按钮
var ColorRed=document.getElementById('red');
var ColorGreen=document.getElementById('green');
var ColorBlue=document.getElementById('blue');
var ColorYellow=document.getElementById('yellow');
var ColorWhite=document.getElementById('white');
var ColorBlack=document.getElementById('balck');
var ColorPink=document.getElementById('Pink');
var ColorPurple=document.getElementById('purple');
var ColorCyan=document.getElementById('cyan');
var ColorOrange=document.getElementById('orange');
//把10种标签对象放到一个数组中
var colors=[ColorRed,ColorGreen,ColorBlue,ColorYellow, ColorWhite,
    ColorBlack,ColorPink,ColorPurple,ColorCyan,ColorOrange]

//状态设置函数
function setStatus(Arr,num,type){
     for(var i=0;i<Arr.length;i++){
           if(i==num){
               if(type==1){
                   Arr[i].style.background='#ccc';
               }
               Arr[i].style.background="yellow";
           }else{
               Arr[i].style.background="#ccc";
           }
     }
}
//列出所有的按钮函数
//铅笔工具函数
function drawBrush(num){
   setStatus(action,num,1);
}
//橡皮工具函数
function drawEraser(num){
    setStatus(action,num,1);
}
//油漆桶函数
function drawPaint(num){
    setStatus(action,num,1);
}
//吸管工具函数
function drawStraw(num){
    setStatus(action,num,1);
}
//文本工具函数
function drawText(num){
    setStatus(action,num,1);
}
//放大镜工具函数
function drawMagnifier(num){
    setStatus(action,num,1);
}
//线型状函数
function drawLine(num){
    setStatus(action,num,1);
}
//圆形状函数
function drawArc(num){
    setStatus(action,num,1);
}
//矩形状函数
function drawRect(num){
    setStatus(action,num,1);
}
//多边形函数
function drawPoly(num){
    setStatus(action,num,1);
}
//圆形填充形状函数
function drawArcfill(num){
    setStatus(action,num,1);
}
//矩形填充形状函数
function drawRectfill(num){
    setStatus(action,num,1);
}
//线宽设置函数
function setLineWidth(num){
    setStatus(width,num,1);
}

function setLineWidth(num){
    for(var i=0;i<Arr.length;i++){
        if(i==num){
            Arr[i].style.background="yellow";
        }else{
            Arr[i].style.background="#ccc";
        }
    }
}
//颜色设置函数
function setColor(num){
    setSStatus(colors,num,1);
}
