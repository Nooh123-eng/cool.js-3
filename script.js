var MODE = "draw";
if (MODE === "draw"){
var CANVAS = function(w,h){
    var createCanvas = document.createElement("canvas");
    createCanvas.id = "silverjscanvas";
    document.body.appendChild(createCanvas);
    document.body.style.margin = "0px";
    document.body.style.overflow = "0px";
    document.getElementById("silverjscanvas").width = w;
    document.getElementById("silverjscanvas").height = h;
};
CANVAS(innerWidth,innerHeight);
    var canvas = document.querySelector("#silverjscanvas");
    var  ctx = canvas.getContext("2d");
    //Getting the canvas and its context
    
    //Give it a width and height
    
    //Make variables for its width and height.
    var width = canvas.width;
    var height = canvas.height;
    var typeLength1592 = 0;
    //make a function for cursor locks
    var CURSOR_LOCK = function(){
        canvas.requestPointerLock();
    };
    //Make a function for cursor changing
    var CURSOR = function(type){
        canvas.style.cursor = type;
    };
    var mouseX = 0;
    var mouseY = 0;
    var ADD_MOUSE_X_Y= function(){
        canvas.addEventListener("mousemove",function(e){
            mouseX = e.clientX - canvas.getBoundingClientRect().x;
            mouseY = e.clientY - canvas.getBoundingClientRect().y;
            
        });
    };
    addMouseXY();
    //Make a rect
    var RECT = function(x,y,w,h,r){
        //If r (radius) is not null
        if (r !== null){
            ctx.beginPath();
			ctx.moveTo(x + r, y);
			ctx.lineTo(x + w - r, y);
			ctx.quadraticCurveTo(x + w, y, x + w, y + r);
			ctx.lineTo(x + w, y + h - r);
			ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
			ctx.lineTo(x + r, y + h);
			ctx.quadraticCurveTo(x, y + h, x, y + h - r);
			ctx.lineTo(x, y + r);
			ctx.quadraticCurveTo(x, y, x + r, y);
			ctx.closePath();
			ctx.closePath();
			ctx.stroke();
			ctx.fill();
        }
        //If the radius is null
        if (r == null){
            //Make a rectangle
            ctx.beginPath();
            ctx.rect(x,y,w,h);
            ctx.stroke();
            ctx.fill();
            ctx.closePath();
        }
    };
    //Make an ellipse
    var CIR = function(x,y,w,h){
        //Make the ellipse itself no if statment needed
        ctx.beginPath();
        ctx.ellipse(x,y,w,h,0,0,2 * Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    };
    //Make a cube
    //Make a sphere
    var SPHERE = function(x,y,w,h,c1,c2,c3){
        var grad = ctx.createRadialGradient(x+w*1.5,y+h/1.5,20,x+90,y+150,190);
//Then add the colors to it
grad.addColorStop(0,c1);
grad.addColorStop(0.25,c2);
grad.addColorStop(0.4,c3);
//Make the circle
ctx.beginPath();
ctx.fillStyle = grad;
ctx.ellipse(x+150,y+100,w,h,0,0,2 * Math.PI);
ctx.fill();
ctx.closePath();
    };
    //Make a dpeth cube
    var DEPTH_CUBE = function(x,y,size,color){
        //Make the var for its side
        var depth = size;
        //Make the lines connecting the 2 rects together
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.moveTo(x,y);
        ctx.lineTo(x+depth/3.5,y+depth/3.5);
        ctx.moveTo(x+depth,y);
        ctx.lineTo(x+depth/1.46,y+depth/3.5);
        ctx.moveTo(x+depth,y+depth);
        ctx.lineTo(x+depth/1.46,y+depth/1.46);
        ctx.moveTo(x,y+depth);
        ctx.lineTo(x+depth/3.5,y+depth/1.46);
        ctx.stroke();
        ctx.closePath();
        //Make one rect
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.fillStyle = color;
        ctx.lineWidth = 2;
        ctx.rect(x+depth/3.5,y+depth/3.5,depth/2.5,depth/2.5);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
        //make the other rectangle.
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.fillStyle = color;
        ctx.lineWidth = 2;
        ctx.rect(x,y,depth,depth);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    };
    //Make a quadratic curve function
    var QUAD_C = function(x1,y1,x2,y2,x3,y3,x4,y4){
        ctx.beginPath();
        ctx.moveTo(x1,y1);
        ctx.quadraticCurveTo(x2,y2,x3,y3,x4,y4);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    };
    //Make a triangle
    var TRIANGLE = function(x1,y1,x2,y2,x3,y3){
        //Make all 3 of its lines.
        ctx.beginPath();
        ctx.moveTo(x1,y1);
        ctx.lineTo(x2,y2);
        ctx.lineTo(x3,y3);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        };
        //Make a line function
        var line = function(x1,y1,x2,y2){
            ctx.beginPath();
        ctx.moveTo(x1,y1);
        ctx.lineTo(x2,y2);
        ctx.closePath();
        ctx.stroke();
        };
    function ANIMATION() {
                draw();
                window.requestAnimationFrame(permitAnimations);
            }
        //make a quadulatiral function: 
        var QUAD = function(x1,y1,x2,y2,x3,y3,x4,y4){
            ctx.beginPath();
            ctx.moveTo(x1,y1);
        ctx.lineTo(x2,y2);
        ctx.lineTo(x3,y3);
        ctx.lineTo(x4,y4);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        };
        //Make a polygon function
        var POLYGON = function(xpos,ypos){
            ctx.beginPath();
            ctx.moveTo(xpos[plx-1],ypos[plx-1]);
            for (var plx = 1;plx < xpos.length&&plx < ypos.length;plx++){
                
                
                    
                    ctx.lineTo(xpos[plx],ypos[plx]);
            } 
            ctx.closePath();
            
                   ctx.stroke();
                   ctx.fill();
                    
        };
        //Text 
        var TEXT = function(txt,x,y,type,line){
            for (var j = 0;j < txt.length;j++){
            if (type === "fill"){
            ctx.beginPath();
            ctx.fillText(txt[j],x,y+line*j);
            ctx.fill();
            ctx.closePath();
            }
            else if (type === "stroke"){
            ctx.beginPath();
            ctx.strokeText(txt[j],x,y+line*j);
            ctx.stroke();
            ctx.closePath();
            }
            }
            
        };
        var TYPE_IT = function(txt,x,y,line,type){
            for (var tt = 0;tt < txt.length;tt++){
            if (type === "fill"){
            ctx.beginPath();
            ctx.fillText(txt[tt].substring(0,typeLength1592),x,y+line*tt);
            ctx.fill();
            ctx.closePath();
            typeLength1592 += 0.19;
            }
            else if (type === "stroke"){
            ctx.beginPath();
            ctx.strokeText(txt[tt].substring(0,typeLength1592),x,y+line*tt);
            ctx.stroke();
            ctx.closePath();
            typeLength1592 += 0.19;
            }
            
            }
            
        };
    //fill 
    var C_COLOR = function(r,g,b,a){ 
        if (a !== null){
        ctx.fillStyle = "rgba("+r+","+g+","+b+","+a+")";
        };
        if (a == null){
            ctx.fillStyle = "rgb("+r+","+g+","+b+")";
        }
    };
    //stroke
    var STROKE = function(r,g,b,a){ 
        if (a !== null){
        ctx.strokeStyle = "rgba("+r+","+g+","+b+","+a+")";
        };
        if (a == null){
            ctx.strokeStyle = "rgb("+r+","+g+","+b+")";
        }
    };
    //no fill
    var NO_FILL = function(){ 
        ctx.fillStyle = "transparent";
    };
    //no stroke
    var NO_STROKE = function(){ 
        ctx.strokeStyle = "transparent";
    };
    //stroke weight
    var STROKE_WEIGHT = function(w){ 
        ctx.lineWidth = w;
    };
    //Text align
    var TEXT_ALIGN = function(align){
        ctx.textAlign = align;
    };
    // font
    var TEXT_FONt = function(font,size){
        ctx.font = size+"px "+font;
    };
    //Background
    var B_C = function(r,g,b){
        ctx.fillStyle = "rgb("+r+","+g+","+b+")";
        ctx.fillRect(0,0,canvas.width,canvas.height);
    };
    var ROUND = function(num){
        return Math.round(num);
    };
    var ROUND_UP = function(num){
        return Math.ceil(num);
    };
    var ROUND_DOWN = function(num){
        return Math.floor(num);
    };
    var RANDOM = function(num1,num2){
        return Math.round((Math.random() * num2)+ num1);
    };
    var SAVE_MATRIX = function(){
        ctx.save();
    };
    var ROTATE = function(angle){
        ctx.rotate(angle * Math.PI / 30);
    };
    var TRANSLATE = function(x,y){
        ctx.translate(x,y);
    };
    var RESTROKE_MATRIX = function(){
        ctx.restore();
    };
    var R_CLEAR = function(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
    };
    var SOUND = function(src){
        var newSound = document.createElement("audio");
        newSound.src = src;
        newSound.style.display = "none";
        document.body.appendChild(newSound);
        newSound.play();
    };
    var IMG = function(src,x,y,width,height){
        var theImg = new Image();
        theImg.src = src;
        ctx.beginPath();
        ctx.drawImage(theImg,x,y,width,height);
        ctx.closePath();
    };
    var DISTANCE = function(){
        var distx = arguments[0] - arguments[2];
            var disty = arguments[1] - arguments[3];
            return Math.sqrt(distx * distx + disty * disty);
    };
    var COLOE = function(r,g,b,a){
        return "rgba("+r+","+g+","+b+","+a+")";
    };
    var GRADIENT = function(x,y,x2,y2,colors){
        
        
            var linearGrad = ctx.createLinearGradient(x,y,x2,y2);
        linearGrad.addColorStop(0,colors[0]);
        linearGrad.addColorStop(0.5,colors[1]);
        linearGrad.addColorStop(1,colors[2]);
        ctx.fillStyle = linearGrad;
        ctx.strokeStyle = linearGrad;
    };
    var sphereSize = 100;
    var j = 0;
}
else if (MODE === "js/dom"){
    var selector = function(slc){
        return document.querySelector(slc);
    };
    var create = function(element){
          return document.createElement(element);
    };
    var append = function(variable,where){
        where.appendChild(variable);
    };
    var je = create("h1");
    je.style.textAlign = "center";
    je.innerHTML = "You can also use cool.js with the DOM!";
    append(je,document.body);
}
