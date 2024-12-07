function setup() {
	let bg = createCanvas(windowWidth, windowHeight);
    bg.id('bg');
	clear()
}

function draw() {

    if( mouseIsPressed && windowWidth>450 ){

        clear()
        for(i=0;i<3;i++){
        stroke(255)
        strokeWeight(1);
        line(mouseX, mouseY, mouseX+random(-20*PI,20*PI), mouseY+random(-20*PI,20*PI));
        line(mouseX, mouseY, mouseX+random(-50*PI,50*PI), mouseY+random(-50*PI,50*PI));
        }
        // stroke(255)
        // fill(255, 244, 150)
        // circle(mouseX+random(-50,50), mouseY+random(-50,50),random(3))
        // fill(255)
        // circle(mouseX+random(-50,50), mouseY+random(-50,50),random(5))
        
        translate(mouseX,mouseY)
        // fill(117,242,17,255)
        fill(255)
        strokeWeight(0);
        circle(0,0,25)

        strokeWeight(2);
        // stroke(117,242,17,255)
        noFill()
        circle(0,0,150)
        // circle(0,0,50)
        strokeWeight(0);

        for(i=0;i<180;i++){
        fill('#75F211')
        rotate(2)
        circle(mouseX*noise(0.005 * frameCount), mouseY*noise(0.005 * frameCount),random(3))
        }		
        stroke(255)
        for(i=0;i<360;i++){
        fill(255)
        rotate(2)
        circle(mouseX*noise(0.005 * frameCount-10), mouseY*noise(0.005 * frameCount-10),random(3))
        }		


    }else if(windowWidth<450){
        
        clear()
        stroke('#75F211')
        translate(mouseX,mouseY)
        // fill(117,242,17,150)
        fill(255)
        strokeWeight(0);
        // circle(0,0,80)

        stroke(255)
        for(i=0;i<180;i++){
        fill(255)
        rotate(2)
        circle(mouseX*noise(0.005 * frameCount), mouseY*noise(0.005 * frameCount),random(3))
        }		
        for(i=0;i<360;i++){
        rotate(2)
        circle(mouseX*noise(0.005 * frameCount-10), mouseY*noise(0.005 * frameCount-10),random(3))
        }		

    }else if( windowWidth>450 ){

        clear()
        // for(i=0;i<4;i++){
        // stroke(255)
        // line(mouseX, mouseY, mouseX+random(-20*PI,20*PI), mouseY+random(-20*PI,20*PI));
        // line(mouseX, mouseY, mouseX+random(-50*PI,50*PI), mouseY+random(-50*PI,50*PI));
        // }
        // stroke(255)
        // fill(255, 244, 150)
        // circle(mouseX+random(-50,50), mouseY+random(-50,50),random(3))
        // fill(255)
        // circle(mouseX+random(-50,50), mouseY+random(-50,50),random(5))
        stroke('#75F211')
        translate(mouseX,mouseY)
        fill(117,242,17,150)
        fill(255)
        strokeWeight(0);
        circle(0,0,150)

        // strokeWeight(30);
        // // stroke(117,242,17,255)
        // stroke(255)
        // noFill()
        // circle(0,0,150)

        strokeWeight(0);
        stroke(255)
        for(i=0;i<180;i++){
        fill(255)
        rotate(2)
        circle(mouseX*noise(0.005 * frameCount), mouseY*noise(0.005 * frameCount),random(3))
        }		
        for(i=0;i<360;i++){
        rotate(2)
        circle(mouseX*noise(0.005 * frameCount-10), mouseY*noise(0.005 * frameCount-10),random(3))
        }		
    }


		
	
}