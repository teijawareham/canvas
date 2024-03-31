/**
 * @type HTMLCanvasElement
 */

      const canvas = document.getElementById('myCanvas');
      const ctx = canvas.getContext('2d');


  

      // Set up background
      const backgroundImage = new Image();
       backgroundImage.src = 'images/sky-background.jpg';
      backgroundImage.onload = function() {
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
      }; 

      
      

      // Set up stick figure (mario)
      const stickFigureImage = new Image();
      stickFigureImage.src = 'images/mario1.png';
      
      let stickFigureX = 500;
      let stickFigureY = 350;

      

       // Set up stick figure (goomba)
       const goombaFigureImage = new Image();
       goombaFigureImage.src = 'images/goomba.png';
       
       let goombaFigureX = 0;
       let goombaFigureY = 520;

         // Set up stick figure (goomba)
         const goomba2FigureImage = new Image();
         goomba2FigureImage.src = 'images/goomba.png';
         
         let goomba2FigureX = 0;
         let goomba2FigureY = 520;

         // set up stick figure (gold coin)

         const goldcoinFigureImage = new Image();
         goldcoinFigureImage.src = 'images/goldcoin.png';
         
         let goldcoinFigureX = 500;
         let goldcoinFigureY = 50;

         // set up stick figure (cloud)

         const cloudFigureImage = new Image();
         cloudFigureImage.src = "images/cloud.png";

         let cloudFigureX = 300;
         let cloudFigureY = 300;

         




      // Define animation function
      function draw() {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw background
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

        // Draw stick figure
        ctx.drawImage(stickFigureImage, stickFigureX, stickFigureY);
        ctx.drawImage(goombaFigureImage, goombaFigureX, goombaFigureY);
        ctx.drawImage(goomba2FigureImage, goomba2FigureX, goomba2FigureY);
        ctx.drawImage(goldcoinFigureImage, goldcoinFigureX, goldcoinFigureY);
        ctx.drawImage(cloudFigureImage, cloudFigureX, goldcoinFigureY);


        // Update position
        stickFigureX += 0;
        goombaFigureX +=1.8
        goomba2FigureX +=1.3
        goldcoinFigureX += 0;
        cloudFigureX+= 2;
        
      

        if (goombaFigureX > canvas.width) {
        goombaFigureX = -goombaFigureImage.width;
        }

        if (goomba2FigureX > canvas.width) {
            goomba2FigureX = -goomba2FigureImage.width;
            }

        if (goldcoinFigureX > canvas.width) {
          goldcoinFigureX = -goldcoinFigureImage.width;
          }

          if (cloudFigureX > canvas.width) {
            cloudFigureX =-cloudFigureImage.width;
            
            }
      
    

        // Loop animation
        if (stickFigureX > canvas.width) {
          stickFigureX = -stickFigureImage.width;
          
        }


        // Animated mario to jump
        stickFigureY = stickFigureY +0.5

        if (stickFigureY > 480){
        stickFigureY=300;
        }

        if (goldcoinFigureX > canvas.width) {
        goldcoinFigureX = -goldcoinFigureImage.width
        }
        
        // pig text box!!!!!!

        ctx.fillStyle = "black"
        ctx.fillRect(695,358,330,80);
        
        ctx.fillStyle = "white"
        ctx.fillRect(700,375,320,50);


        // Pig text
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "black"
        ctx.font = "30px Monospace"
        ctx.fillText("It's a me, Mario!",860,400);


        
        // H1 text
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "red";
        ctx.font = "50px Monospace";
        ctx.fillText("SUPER MARIO ISLAND", 750, 100);

        

        



        // Call animation again
        requestAnimationFrame(draw);
      }
      

      // Start animation
      draw();


      

      
    