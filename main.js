canvas=new fabric.Canvas("canavil")
blockwidth=30
blockheight=30
playerx= 100
playery= 100
playerobject=""
blockobject=""
function playerupdate() {
    fabric.Image.fromURL("player.png",function (Img) {
    playerobject=Img
    playerobject.scaleToWidth(150)
    playerobject.scaleToHeight(150)
    playerobject.set({
        top:playery,
        left:playerx
    })
    canvas.add(playerobject)
    })
}

function blockupdate(block) {
    fabric.Image.fromURL(block , function (Img) {
        blockobject=Img
        blockobject.scaleToWidth(blockwidth)
        blockobject.scaleToHeight(blockheight)
        blockobject.set({
            top:playery,
            left:playerx
        })
        canvas.add(blockobject)
    })
}

window.addEventListener("keydown" , kd)
function kd(e) {
    keynumber=e.keyCode
    console.log(keynumber)
    if (keynumber==37) {
        console.log("left  is pressed")
        left()
    }
    if (keynumber==38) {
        console.log("up is pressed")
        up()        
    }
    if (keynumber==39) {
        console.log("right is pressed")
        right()        
    }
    if (keynumber==40) {
        console.log("down is pressed")
        down()        
    }
    if (keynumber==67) {
        console.log("c is pressed")
        blockupdate("cloud.jpg")        
    }
    if (keynumber==68) {
        console.log("d is pressed")
        blockupdate("dark_green.png")
    }
    if (keynumber==71) {
        console.log("g is pressed")
        blockupdate("ground.png")
    }
    if (keynumber==76) {
        console.log("l is pressed")
        blockupdate("light_green.png")
    }
    if (keynumber==82) {
        console.log("r is pressed")
        blockupdate("roof.jpg")
    }
    if (keynumber==84) {
        console.log("t is pressed")
        blockupdate("trunk.jpg")
    }
    if (keynumber==85) {
        console.log("u is pressed")
        blockupdate("unique.png")
    }
    if (keynumber==87) {
        console.log("w is pressed")
        blockupdate("wall.jpg")
    }
    if (keynumber==89) {
        console.log("y is pressed")
        blockupdate("yellow_wall.png")
    }
    if (keynumber==80 && e.shiftKey==true) {
        console.log("p & shift are pressed toghether")
        blockwidth=blockwidth+10
        blockheight=blockheight+10
        document.getElementById("Width").innerHTML=blockwidth;
        document.getElementById("Height").innerHTML=blockheight;
    }
    if (keynumber==77 && e.shiftKey==true) {
        console.log("m & shift are pressed toghether")
        blockheight=blockheight-10
        blockwidth=blockwidth-10
        document.getElementById("Height").innerHTML=blockheight;
        document.getElementById("Width").innerHTML=blockwidth
    }
}
function right() {
    if (playerx<=900) {
        playerx=playerx +blockwidth
        canvas.remove(playerobject)
        playerupdate()
    }
}
function left() {
    if (playerx>=0) {
        playerx=playerx -blockwidth
        canvas.remove(playerobject)
        playerupdate()
    }
}
function up() {
    if (playery>=0) {
        playery=playery -blockwidth
        canvas.remove(playerobject)
        playerupdate()
    }
}
function down() {
    if (playery<=700) {
        playery=playery +blockwidth
        canvas.remove(playerobject)
        playerupdate()
    }
}