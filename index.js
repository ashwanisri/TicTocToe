gameNotOver = true;
flag = true;

function reset() {
    document.getElementById("Block1").src = "empty.PNG";
    document.getElementById("Block2").src = "empty.PNG";
    document.getElementById("Block3").src = "empty.PNG";
    document.getElementById("Block4").src = "empty.PNG";
    document.getElementById("Block5").src = "empty.PNG";
    document.getElementById("Block6").src = "empty.PNG";
    document.getElementById("Block7").src = "empty.PNG";
    document.getElementById("Block8").src = "empty.PNG";
    document.getElementById("Block9").src = "empty.PNG";
    gameNotOver = true;
    flag = true;

}

function changeImage1() {
    if (gameNotOver == true) {
        if (document.getElementById("Block1").src.indexOf("empty.PNG") > 0) {
            // var a = document.getElementById("Block1").src,
            // b = document.getElementById("Block2").src,
            // c = document.getElementById("Block3").src,
            // d = document.getElementById("Block4").src,
            // e = document.getElementById("Block5").src,
            // f = document.getElementById("Block6").src,
            // g = document.getElementById("Block7").src,
            // h = document.getElementById("Block8").src,
            // i = document.getElementById("Block9").src;

            if (flag == true) {
                //document.getElementById("Block4").src="tic_tac_x.PNG";
                document.getElementById("Block1").src = "tic_tac_x.PNG";
                //document.getElementById("Block6").src="tic_tac_x.PNG";
                var a = document.getElementById("Block1").src,
                    b = document.getElementById("Block2").src,
                    c = document.getElementById("Block3").src,
                    d = document.getElementById("Block4").src,
                    e = document.getElementById("Block5").src,
                    f = document.getElementById("Block6").src,
                    g = document.getElementById("Block7").src,
                    h = document.getElementById("Block8").src,
                    i = document.getElementById("Block9").src;
                //Check blocks 1, 2 and 3
                if (a.indexOf("tic_tac_x.PNG") > 0 && b.indexOf("tic_tac_x.PNG") > 0 && c.indexOf("tic_tac_x.PNG") > 0) {
                    document.getElementById("Block1").src = "rotes-x.PNG";
                    document.getElementById("Block2").src = "rotes-x.PNG";
                    document.getElementById("Block3").src = "rotes-x.PNG";
                    gameNotOver = false;
                }



                //Check blocks 1, 4 and 7
                if (c.indexOf("tic_tac_x.PNG") > 0 && e.indexOf("tic_tac_x.PNG") > 0 && g.indexOf("tic_tac_x.PNG") > 0) {
                    document.getElementById("Block3").src = "rotes-x.PNG";
                    document.getElementById("Block5").src = "rotes-x.PNG";
                    document.getElementById("Block7").src = "rotes-x.PNG";
                    gameNotOver = false;
                }
                //Check blocks 7, 8 and 9
                if (i.indexOf("tic_tac_x.PNG") > 0 && h.indexOf("tic_tac_x.PNG") > 0 && g.indexOf("tic_tac_x.PNG") > 0) {
                    document.getElementById("Block7").src = "rotes-x.PNG";
                    document.getElementById("Block8").src = "rotes-x.PNG";
                    document.getElementById("Block9").src = "rotes-x.PNG";
                    gameNotOver = false;
                }

                //Check blocks 4, 5 and 6
                if (d.indexOf("tic_tac_x.PNG") > 0 && f.indexOf("tic_tac_x.PNG") > 0 && e.indexOf("tic_tac_x.PNG") > 0) {
                    document.getElementById("Block4").src = "rotes-x.PNG";
                    document.getElementById("Block5").src = "rotes-x.PNG";
                    document.getElementById("Block6").src = "rotes-x.PNG";
                    gameNotOver = false;
                }

                if (a.indexOf("tic_tac_x.PNG") > 0 && e.indexOf("tic_tac_x.PNG") > 0 && i.indexOf("tic_tac_x.PNG") > 0) {
                    document.getElementById("Block1").src = "rotes-x.PNG";
                    document.getElementById("Block5").src = "rotes-x.PNG";
                    document.getElementById("Block9").src = "rotes-x.PNG";
                    gameNotOver = false;
                }

                if (b.indexOf("tic_tac_x.PNG") > 0 && e.indexOf("tic_tac_x.PNG") > 0 && h.indexOf("tic_tac_x.PNG") > 0) {
                    document.getElementById("Block2").src = "rotes-x.PNG";
                    document.getElementById("Block5").src = "rotes-x.PNG";
                    document.getElementById("Block8").src = "rotes-x.PNG";
                    gameNotOver = false;
                }


                flag = false;
            } else {


                //document.getElementById("Block4").src="tic_tac_o.PNG";
                document.getElementById("Block1").src = "tic_tac_o.PNG";
                //document.getElementById("Block6").src="tic_tac_o.PNG";
                var a = document.getElementById("Block1").src,
                    b = document.getElementById("Block2").src,
                    c = document.getElementById("Block3").src,
                    d = document.getElementById("Block4").src,
                    e = document.getElementById("Block5").src,
                    f = document.getElementById("Block6").src,
                    g = document.getElementById("Block7").src,
                    h = document.getElementById("Block8").src,
                    i = document.getElementById("Block9").src;

                //Check blocks 1, 2 and 3
                if (a.indexOf("tic_tac_o.PNG") > 0 && b.indexOf("tic_tac_o.PNG") > 0 && c.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block1").src = "rotes-o.PNG";
                    document.getElementById("Block2").src = "rotes-o.PNG";
                    document.getElementById("Block3").src = "rotes-o.PNG";
                    gameNotOver = false;
                }


                //Check blocks 1, 4 and 7
                if (a.indexOf("tic_tac_o.PNG") > 0 && d.indexOf("tic_tac_o.PNG") > 0 && g.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block1").src = "rotes-o.PNG";
                    document.getElementById("Block4").src = "rotes-o.PNG";
                    document.getElementById("Block7").src = "rotes-o.PNG";
                    gameNotOver = false;
                }

                //Check blocks 7, 8 and 9
                if (g.indexOf("tic_tac_o.PNG") > 0 && h.indexOf("tic_tac_o.PNG") > 0 && i.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block7").src = "rotes-o.PNG";
                    document.getElementById("Block8").src = "rotes-o.PNG";
                    document.getElementById("Block9").src = "rotes-o.PNG";
                    gameNotOver = false;
                }


                if (c.indexOf("tic_tac_o.PNG") > 0 && e.indexOf("tic_tac_o.PNG") > 0 && g.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block3").src = "rotes-o.PNG";
                    document.getElementById("Block5").src = "rotes-o.PNG";
                    document.getElementById("Block7").src = "rotes-o.PNG";
                    gameNotOver = false;
                }

                if (d.indexOf("tic_tac_o.PNG") > 0 && f.indexOf("tic_tac_o.PNG") > 0 && e.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block4").src = "rotes-o.PNG";
                    document.getElementById("Block5").src = "rotes-o.PNG";
                    document.getElementById("Block6").src = "rotes-o.PNG";
                    gameNotOver = false;
                }

                if (a.indexOf("tic_tac_o.PNG") > 0 && e.indexOf("tic_tac_o.PNG") > 0 && i.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block1").src = "rotes-o.PNG";
                    document.getElementById("Block5").src = "rotes-o.PNG";
                    document.getElementById("Block9").src = "rotes-o.PNG";
                    gameNotOver = false;
                }

                if (b.indexOf("tic_tac_o.PNG") > 0 && e.indexOf("tic_tac_o.PNG") > 0 && h.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block2").src = "rotes-o.PNG";
                    document.getElementById("Block5").src = "rotes-o.PNG";
                    document.getElementById("Block8").src = "rotes-o.PNG";
                    gameNotOver = false;

                }
                flag = true;




            }

        }
    }
    // if (gameNotOver == false && flag == true) {

    //     alert("Congrats!!! 'X'has won.");
        
    // } 
    
    // if(gameNotOver == false && flag == false) {
    //     alert("Congrats!!! 'o'has won.");
    // }

}

function changeImage2() {
    if (gameNotOver == true) {
        if (document.getElementById("Block2").src.indexOf("empty.PNG") > 0) {
            // var a = document.getElementById("Block1").src,
            // b = document.getElementById("Block2").src,
            // c = document.getElementById("Block3").src,
            // d = document.getElementById("Block4").src,
            // e = document.getElementById("Block5").src,
            // f = document.getElementById("Block6").src,
            // g = document.getElementById("Block7").src,
            // h = document.getElementById("Block8").src,
            // i = document.getElementById("Block9").src;

            if (flag == true) {
                //document.getElementById("Block4").src="tic_tac_x.PNG";
                document.getElementById("Block2").src = "tic_tac_x.PNG";
                //document.getElementById("Block6").src="tic_tac_x.PNG";
                var a = document.getElementById("Block1").src,
                    b = document.getElementById("Block2").src,
                    c = document.getElementById("Block3").src,
                    d = document.getElementById("Block4").src,
                    e = document.getElementById("Block5").src,
                    f = document.getElementById("Block6").src,
                    g = document.getElementById("Block7").src,
                    h = document.getElementById("Block8").src,
                    i = document.getElementById("Block9").src;
                //Check blocks 1, 2 and 3
                if (a.indexOf("tic_tac_x.PNG") > 0 && b.indexOf("tic_tac_x.PNG") > 0 && c.indexOf("tic_tac_x.PNG") > 0) {
                    document.getElementById("Block1").src = "rotes-x.PNG";
                    document.getElementById("Block2").src = "rotes-x.PNG";
                    document.getElementById("Block3").src = "rotes-x.PNG";
                    gameNotOver = false;
                }



                //Check blocks 1, 4 and 7
                if (c.indexOf("tic_tac_x.PNG") > 0 && e.indexOf("tic_tac_x.PNG") > 0 && g.indexOf("tic_tac_x.PNG") > 0) {
                    document.getElementById("Block3").src = "rotes-x.PNG";
                    document.getElementById("Block5").src = "rotes-x.PNG";
                    document.getElementById("Block7").src = "rotes-x.PNG";
                    gameNotOver = false;
                }
                //Check blocks 7, 8 and 9
                if (i.indexOf("tic_tac_x.PNG") > 0 && h.indexOf("tic_tac_x.PNG") > 0 && g.indexOf("tic_tac_x.PNG") > 0) {
                    document.getElementById("Block7").src = "rotes-x.PNG";
                    document.getElementById("Block8").src = "rotes-x.PNG";
                    document.getElementById("Block9").src = "rotes-x.PNG";
                    gameNotOver = false;
                }

                //Check blocks 4, 5 and 6
                if (d.indexOf("tic_tac_x.PNG") > 0 && f.indexOf("tic_tac_x.PNG") > 0 && e.indexOf("tic_tac_x.PNG") > 0) {
                    document.getElementById("Block4").src = "rotes-x.PNG";
                    document.getElementById("Block5").src = "rotes-x.PNG";
                    document.getElementById("Block6").src = "rotes-x.PNG";
                    gameNotOver = false;
                }

                if (a.indexOf("tic_tac_x.PNG") > 0 && e.indexOf("tic_tac_x.PNG") > 0 && i.indexOf("tic_tac_x.PNG") > 0) {
                    document.getElementById("Block1").src = "rotes-x.PNG";
                    document.getElementById("Block5").src = "rotes-x.PNG";
                    document.getElementById("Block9").src = "rotes-x.PNG";
                    gameNotOver = false;
                }

                if (b.indexOf("tic_tac_x.PNG") > 0 && e.indexOf("tic_tac_x.PNG") > 0 && h.indexOf("tic_tac_x.PNG") > 0) {
                    document.getElementById("Block2").src = "rotes-x.PNG";
                    document.getElementById("Block5").src = "rotes-x.PNG";
                    document.getElementById("Block8").src = "rotes-x.PNG";
                    gameNotOver = false;
                }


                flag = false;
            } else {


                //document.getElementById("Block4").src="tic_tac_o.PNG";
                document.getElementById("Block2").src = "tic_tac_o.PNG";
                //document.getElementById("Block6").src="tic_tac_o.PNG";
                var a = document.getElementById("Block1").src,
                    b = document.getElementById("Block2").src,
                    c = document.getElementById("Block3").src,
                    d = document.getElementById("Block4").src,
                    e = document.getElementById("Block5").src,
                    f = document.getElementById("Block6").src,
                    g = document.getElementById("Block7").src,
                    h = document.getElementById("Block8").src,
                    i = document.getElementById("Block9").src;

                //Check blocks 1, 2 and 3
                if (a.indexOf("tic_tac_o.PNG") > 0 && b.indexOf("tic_tac_o.PNG") > 0 && c.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block1").src = "rotes-o.PNG";
                    document.getElementById("Block2").src = "rotes-o.PNG";
                    document.getElementById("Block3").src = "rotes-o.PNG";
                    gameNotOver = false;
                }




                //Check blocks 1, 4 and 7
                if (a.indexOf("tic_tac_o.PNG") > 0 && d.indexOf("tic_tac_o.PNG") > 0 && g.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block1").src = "rotes-o.PNG";
                    document.getElementById("Block4").src = "rotes-o.PNG";
                    document.getElementById("Block7").src = "rotes-o.PNG";
                    gameNotOver = false;
                }

                //Check blocks 7, 8 and 9
                if (g.indexOf("tic_tac_o.PNG") > 0 && h.indexOf("tic_tac_o.PNG") > 0 && i.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block7").src = "rotes-o.PNG";
                    document.getElementById("Block8").src = "rotes-o.PNG";
                    document.getElementById("Block9").src = "rotes-o.PNG";
                    gameNotOver = false;
                }


                if (c.indexOf("tic_tac_o.PNG") > 0 && e.indexOf("tic_tac_o.PNG") > 0 && g.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block3").src = "rotes-o.PNG";
                    document.getElementById("Block5").src = "rotes-o.PNG";
                    document.getElementById("Block7").src = "rotes-o.PNG";
                    gameNotOver = false;
                }

                if (d.indexOf("tic_tac_o.PNG") > 0 && f.indexOf("tic_tac_o.PNG") > 0 && e.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block4").src = "rotes-o.PNG";
                    document.getElementById("Block5").src = "rotes-o.PNG";
                    document.getElementById("Block6").src = "rotes-o.PNG";
                    gameNotOver = false;
                }

                if (a.indexOf("tic_tac_o.PNG") > 0 && e.indexOf("tic_tac_o.PNG") > 0 && i.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block1").src = "rotes-o.PNG";
                    document.getElementById("Block5").src = "rotes-o.PNG";
                    document.getElementById("Block9").src = "rotes-o.PNG";
                    gameNotOver = false;
                }

                if (b.indexOf("tic_tac_o.PNG") > 0 && e.indexOf("tic_tac_o.PNG") > 0 && h.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block2").src = "rotes-o.PNG";
                    document.getElementById("Block5").src = "rotes-o.PNG";
                    document.getElementById("Block8").src = "rotes-o.PNG";
                    gameNotOver = false;

                }
                flag = true;




            }

        }
    }
    // if (gameNotOver == false && flag == true) {

    //     alert("Congrats!!! 'X'has won.");
        
    // } 
    
    // if(gameNotOver == false && flag == false) {
    //     alert("Congrats!!! 'o'has won.");
    // }

}

function changeImage3() {
    if (gameNotOver == true) {
        if (document.getElementById("Block3").src.indexOf("empty.PNG") > 0) {
            // var a = document.getElementById("Block1").src,
            // b = document.getElementById("Block2").src,
            // c = document.getElementById("Block3").src,
            // d = document.getElementById("Block4").src,
            // e = document.getElementById("Block5").src,
            // f = document.getElementById("Block6").src,
            // g = document.getElementById("Block7").src,
            // h = document.getElementById("Block8").src,
            // i = document.getElementById("Block9").src;

            if (flag == true) {
                //document.getElementById("Block4").src="tic_tac_x.PNG";
                document.getElementById("Block3").src = "tic_tac_x.PNG";
                //document.getElementById("Block6").src="tic_tac_x.PNG";
                var a = document.getElementById("Block1").src,
                    b = document.getElementById("Block2").src,
                    c = document.getElementById("Block3").src,
                    d = document.getElementById("Block4").src,
                    e = document.getElementById("Block5").src,
                    f = document.getElementById("Block6").src,
                    g = document.getElementById("Block7").src,
                    h = document.getElementById("Block8").src,
                    i = document.getElementById("Block9").src;
                //Check blocks 1, 2 and 3
                if (a.indexOf("tic_tac_x.PNG") > 0 && b.indexOf("tic_tac_x.PNG") > 0 && c.indexOf("tic_tac_x.PNG") > 0) {
                    document.getElementById("Block1").src = "rotes-x.PNG";
                    document.getElementById("Block2").src = "rotes-x.PNG";
                    document.getElementById("Block3").src = "rotes-x.PNG";
                    gameNotOver = false;
                }

                //Check blocks 9, 6 and 3
                if (c.indexOf("tic_tac_x.PNG") > 0 && f.indexOf("tic_tac_x.PNG") > 0 && i.indexOf("tic_tac_x.PNG") > 0) {
                    document.getElementById("Block3").src = "rotes-x.PNG";
                    document.getElementById("Block6").src = "rotes-x.PNG";
                    document.getElementById("Block9").src = "rotes-x.PNG";
                    gameNotOver = false;
                }

                //Check blocks 1, 4 and 7
                if (c.indexOf("tic_tac_x.PNG") > 0 && e.indexOf("tic_tac_x.PNG") > 0 && g.indexOf("tic_tac_x.PNG") > 0) {
                    document.getElementById("Block3").src = "rotes-x.PNG";
                    document.getElementById("Block5").src = "rotes-x.PNG";
                    document.getElementById("Block7").src = "rotes-x.PNG";
                    gameNotOver = false;
                }
                //Check blocks 7, 8 and 9
                if (i.indexOf("tic_tac_x.PNG") > 0 && h.indexOf("tic_tac_x.PNG") > 0 && g.indexOf("tic_tac_x.PNG") > 0) {
                    document.getElementById("Block7").src = "rotes-x.PNG";
                    document.getElementById("Block8").src = "rotes-x.PNG";
                    document.getElementById("Block9").src = "rotes-x.PNG";
                    gameNotOver = false;
                }

                //Check blocks 4, 5 and 6
                if (d.indexOf("tic_tac_x.PNG") > 0 && f.indexOf("tic_tac_x.PNG") > 0 && e.indexOf("tic_tac_x.PNG") > 0) {
                    document.getElementById("Block4").src = "rotes-x.PNG";
                    document.getElementById("Block5").src = "rotes-x.PNG";
                    document.getElementById("Block6").src = "rotes-x.PNG";
                    gameNotOver = false;
                }

                if (a.indexOf("tic_tac_x.PNG") > 0 && e.indexOf("tic_tac_x.PNG") > 0 && i.indexOf("tic_tac_x.PNG") > 0) {
                    document.getElementById("Block1").src = "rotes-x.PNG";
                    document.getElementById("Block5").src = "rotes-x.PNG";
                    document.getElementById("Block9").src = "rotes-x.PNG";
                    gameNotOver = false;
                }

                if (b.indexOf("tic_tac_x.PNG") > 0 && e.indexOf("tic_tac_x.PNG") > 0 && h.indexOf("tic_tac_x.PNG") > 0) {
                    document.getElementById("Block2").src = "rotes-x.PNG";
                    document.getElementById("Block5").src = "rotes-x.PNG";
                    document.getElementById("Block8").src = "rotes-x.PNG";
                    gameNotOver = false;
                }


                flag = false;
            } else {


                //document.getElementById("Block4").src="tic_tac_o.PNG";
                document.getElementById("Block3").src = "tic_tac_o.PNG";
                //document.getElementById("Block6").src="tic_tac_o.PNG";
                var a = document.getElementById("Block1").src,
                    b = document.getElementById("Block2").src,
                    c = document.getElementById("Block3").src,
                    d = document.getElementById("Block4").src,
                    e = document.getElementById("Block5").src,
                    f = document.getElementById("Block6").src,
                    g = document.getElementById("Block7").src,
                    h = document.getElementById("Block8").src,
                    i = document.getElementById("Block9").src;

                //Check blocks 1, 2 and 3
                if (a.indexOf("tic_tac_o.PNG") > 0 && b.indexOf("tic_tac_o.PNG") > 0 && c.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block1").src = "rotes-o.PNG";
                    document.getElementById("Block2").src = "rotes-o.PNG";
                    document.getElementById("Block3").src = "rotes-o.PNG";
                    gameNotOver = false;
                }

                //Check blocks 1, 2 and 3
                if (c.indexOf("tic_tac_o.PNG") > 0 && f.indexOf("tic_tac_o.PNG") > 0 && i.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block3").src = "rotes-o.PNG";
                    document.getElementById("Block6").src = "rotes-o.PNG";
                    document.getElementById("Block9").src = "rotes-o.PNG";
                    gameNotOver = false;
                }

                //Check blocks 1, 4 and 7
                if (a.indexOf("tic_tac_o.PNG") > 0 && d.indexOf("tic_tac_o.PNG") > 0 && g.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block1").src = "rotes-o.PNG";
                    document.getElementById("Block4").src = "rotes-o.PNG";
                    document.getElementById("Block7").src = "rotes-o.PNG";
                    gameNotOver = false;
                }

                //Check blocks 7, 8 and 9
                if (g.indexOf("tic_tac_o.PNG") > 0 && h.indexOf("tic_tac_o.PNG") > 0 && i.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block7").src = "rotes-o.PNG";
                    document.getElementById("Block8").src = "rotes-o.PNG";
                    document.getElementById("Block9").src = "rotes-o.PNG";
                    gameNotOver = false;
                }


                if (c.indexOf("tic_tac_o.PNG") > 0 && e.indexOf("tic_tac_o.PNG") > 0 && g.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block3").src = "rotes-o.PNG";
                    document.getElementById("Block5").src = "rotes-o.PNG";
                    document.getElementById("Block7").src = "rotes-o.PNG";
                    gameNotOver = false;
                }

                if (d.indexOf("tic_tac_o.PNG") > 0 && f.indexOf("tic_tac_o.PNG") > 0 && e.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block4").src = "rotes-o.PNG";
                    document.getElementById("Block5").src = "rotes-o.PNG";
                    document.getElementById("Block6").src = "rotes-o.PNG";
                    gameNotOver = false;
                }

                if (a.indexOf("tic_tac_o.PNG") > 0 && e.indexOf("tic_tac_o.PNG") > 0 && i.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block1").src = "rotes-o.PNG";
                    document.getElementById("Block5").src = "rotes-o.PNG";
                    document.getElementById("Block9").src = "rotes-o.PNG";
                    gameNotOver = false;
                }

                if (b.indexOf("tic_tac_o.PNG") > 0 && e.indexOf("tic_tac_o.PNG") > 0 && h.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block2").src = "rotes-o.PNG";
                    document.getElementById("Block5").src = "rotes-o.PNG";
                    document.getElementById("Block8").src = "rotes-o.PNG";
                    gameNotOver = false;

                }
                flag = true;




            }

        }
    }
    // if (gameNotOver == false && flag == true) {

    //     alert("Congrats!!! 'X'has won.");
        
    // } 
    
    // if(gameNotOver == false && flag == false) {
    //     alert("Congrats!!! 'o'has won.");
    // }

}




function changeImage4() {
    if (gameNotOver == true) {
        if (document.getElementById("Block4").src.indexOf("empty.PNG") > 0) {
            if (flag == true) {
                document.getElementById("Block4").src = "tic_tac_x.PNG";
                //document.getElementById("Block5").src="tic_tac_x.PNG";
                //document.getElementById("Block6").src="tic_tac_x.PNG";
                var a = document.getElementById("Block1").src,
                    b = document.getElementById("Block2").src,
                    c = document.getElementById("Block3").src,
                    d = document.getElementById("Block4").src,
                    e = document.getElementById("Block5").src,
                    f = document.getElementById("Block6").src,
                    g = document.getElementById("Block7").src,
                    h = document.getElementById("Block8").src,
                    i = document.getElementById("Block9").src;

                if (a.indexOf("tic_tac_x.PNG") > 0 && d.indexOf("tic_tac_x.PNG") > 0 && g.indexOf("tic_tac_x.PNG") > 0) {
                    document.getElementById("Block1").src = "rotes-x.PNG";
                    document.getElementById("Block4").src = "rotes-x.PNG";
                    document.getElementById("Block7").src = "rotes-x.PNG";
                    gameNotOver = false;
                }

                if (d.indexOf("tic_tac_x.PNG") > 0 && f.indexOf("tic_tac_x.PNG") > 0 && e.indexOf("tic_tac_x.PNG") > 0) {
                    document.getElementById("Block4").src = "rotes-x.PNG";
                    document.getElementById("Block5").src = "rotes-x.PNG";
                    document.getElementById("Block6").src = "rotes-x.PNG";
                    gameNotOver = false;
                }



                flag = false;
            } else {
                debugger;

                document.getElementById("Block4").src = "tic_tac_o.PNG";
                //document.getElementById("Block5").src="tic_tac_o.PNG";
                // document.getElementById("Block6").src="tic_tac_o.PNG";
                var a = document.getElementById("Block1").src,
                    b = document.getElementById("Block2").src,
                    c = document.getElementById("Block3").src,
                    d = document.getElementById("Block4").src,
                    e = document.getElementById("Block5").src,
                    f = document.getElementById("Block6").src,
                    g = document.getElementById("Block7").src,
                    h = document.getElementById("Block8").src,
                    i = document.getElementById("Block9").src;

                if (a.indexOf("tic_tac_o.PNG") > 0 && d.indexOf("tic_tac_o.PNG") > 0 && g.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block1").src = "rotes-o.PNG";
                    document.getElementById("Block4").src = "rotes-o.PNG";
                    document.getElementById("Block7").src = "rotes-o.PNG";
                    gameNotOver = false;
                }

                if (d.indexOf("tic_tac_o.PNG") > 0 && f.indexOf("tic_tac_o.PNG") > 0 && e.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block4").src = "rotes-o.PNG";
                    document.getElementById("Block5").src = "rotes-o.PNG";
                    document.getElementById("Block6").src = "rotes-o.PNG";
                    gameNotOver = false;
                }


                flag = true;
            }



        }

    }
    // if (gameNotOver == false && flag == true) {

    //     alert("Congrats!!! 'X'has won.");
        
    // } 
    
    // if(gameNotOver == false && flag == false) {
    //     alert("Congrats!!! 'o'has won.");
    // }

}







function changeImage5() {
    if (gameNotOver == true) {
        if (document.getElementById("Block5").src.indexOf("empty.PNG") > 0) {
            // var a = document.getElementById("Block1").src,
            // b = document.getElementById("Block2").src,
            // c = document.getElementById("Block3").src,
            // d = document.getElementById("Block4").src,
            // e = document.getElementById("Block5").src,
            // f = document.getElementById("Block6").src,
            // g = document.getElementById("Block7").src,
            // h = document.getElementById("Block8").src,
            // i = document.getElementById("Block9").src;

            if (flag == true) {
                //document.getElementById("Block4").src="tic_tac_x.PNG";
                document.getElementById("Block5").src = "tic_tac_x.PNG";
                //document.getElementById("Block6").src="tic_tac_x.PNG";
                var a = document.getElementById("Block1").src,
                    b = document.getElementById("Block2").src,
                    c = document.getElementById("Block3").src,
                    d = document.getElementById("Block4").src,
                    e = document.getElementById("Block5").src,
                    f = document.getElementById("Block6").src,
                    g = document.getElementById("Block7").src,
                    h = document.getElementById("Block8").src,
                    i = document.getElementById("Block9").src;

                if (c.indexOf("tic_tac_x.PNG") > 0 && e.indexOf("tic_tac_x.PNG") > 0 && g.indexOf("tic_tac_x.PNG") > 0) {
                    document.getElementById("Block3").src = "rotes-x.PNG";
                    document.getElementById("Block5").src = "rotes-x.PNG";
                    document.getElementById("Block7").src = "rotes-x.PNG";
                    gameNotOver = false;
                }

                if (d.indexOf("tic_tac_x.PNG") > 0 && f.indexOf("tic_tac_x.PNG") > 0 && e.indexOf("tic_tac_x.PNG") > 0) {
                    document.getElementById("Block4").src = "rotes-x.PNG";
                    document.getElementById("Block5").src = "rotes-x.PNG";
                    document.getElementById("Block6").src = "rotes-x.PNG";
                    gameNotOver = false;
                }

                if (a.indexOf("tic_tac_x.PNG") > 0 && e.indexOf("tic_tac_x.PNG") > 0 && i.indexOf("tic_tac_x.PNG") > 0) {
                    document.getElementById("Block1").src = "rotes-x.PNG";
                    document.getElementById("Block5").src = "rotes-x.PNG";
                    document.getElementById("Block9").src = "rotes-x.PNG";
                    gameNotOver = false;
                }

                if (b.indexOf("tic_tac_x.PNG") > 0 && e.indexOf("tic_tac_x.PNG") > 0 && h.indexOf("tic_tac_x.PNG") > 0) {
                    document.getElementById("Block2").src = "rotes-x.PNG";
                    document.getElementById("Block5").src = "rotes-x.PNG";
                    document.getElementById("Block8").src = "rotes-x.PNG";
                    gameNotOver = false;
                }


                flag = false;
            } else {


                //document.getElementById("Block4").src="tic_tac_o.PNG";
                document.getElementById("Block5").src = "tic_tac_o.PNG";
                //document.getElementById("Block6").src="tic_tac_o.PNG";
                var a = document.getElementById("Block1").src,
                    b = document.getElementById("Block2").src,
                    c = document.getElementById("Block3").src,
                    d = document.getElementById("Block4").src,
                    e = document.getElementById("Block5").src,
                    f = document.getElementById("Block6").src,
                    g = document.getElementById("Block7").src,
                    h = document.getElementById("Block8").src,
                    i = document.getElementById("Block9").src;

                if (c.indexOf("tic_tac_o.PNG") > 0 && e.indexOf("tic_tac_o.PNG") > 0 && g.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block3").src = "rotes-o.PNG";
                    document.getElementById("Block5").src = "rotes-o.PNG";
                    document.getElementById("Block7").src = "rotes-o.PNG";
                    gameNotOver = false;
                }

                if (d.indexOf("tic_tac_o.PNG") > 0 && f.indexOf("tic_tac_o.PNG") > 0 && e.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block4").src = "rotes-o.PNG";
                    document.getElementById("Block5").src = "rotes-o.PNG";
                    document.getElementById("Block6").src = "rotes-o.PNG";
                    gameNotOver = false;
                }

                if (a.indexOf("tic_tac_o.PNG") > 0 && e.indexOf("tic_tac_o.PNG") > 0 && i.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block1").src = "rotes-o.PNG";
                    document.getElementById("Block5").src = "rotes-o.PNG";
                    document.getElementById("Block9").src = "rotes-o.PNG";
                    gameNotOver = false;
                }

                if (b.indexOf("tic_tac_o.PNG") > 0 && e.indexOf("tic_tac_o.PNG") > 0 && h.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block2").src = "rotes-o.PNG";
                    document.getElementById("Block5").src = "rotes-o.PNG";
                    document.getElementById("Block8").src = "rotes-o.PNG";
                    gameNotOver = false;

                }
                flag = true;




            }

        }
    }
    // if (gameNotOver == false && flag == true) {

    //     alert("Congrats!!! 'X'has won.");
        
    // } 
    
    // if(gameNotOver == false && flag == false) {
    //     alert("Congrats!!! 'o'has won.");
    // }

}






function changeImage6() {
    if (gameNotOver == true) {
        if (document.getElementById("Block6").src.indexOf("empty.PNG") > 0) {
            //var c = document.getElementById("Block3").src,
            // f = document.getElementById("Block6").src,
            // i = document.getElementById("Block9").src,
            // d = document.getElementById("Block4").src,
            // e = document.getElementById("Block5").src;
            if (flag == true) {
                document.getElementById("Block6").src = "tic_tac_x.PNG";
                var c = document.getElementById("Block3").src,
                    f = document.getElementById("Block6").src,
                    i = document.getElementById("Block9").src,
                    d = document.getElementById("Block4").src,
                    e = document.getElementById("Block5").src;

                if (c.indexOf("tic_tac_x.PNG") > 0 && f.indexOf("tic_tac_x.PNG") > 0 && i.indexOf("tic_tac_x.PNG") > 0) {
                    document.getElementById("Block3").src = "rotes-x.PNG";
                    document.getElementById("Block6").src = "rotes-x.PNG";
                    document.getElementById("Block9").src = "rotes-x.PNG";
                    gameNotOver = false;
                }

                if (d.indexOf("tic_tac_x.PNG") > 0 && f.indexOf("tic_tac_x.PNG") > 0 && e.indexOf("tic_tac_x.PNG") > 0) {
                    document.getElementById("Block4").src = "rotes-x.PNG";
                    document.getElementById("Block5").src = "rotes-x.PNG";
                    document.getElementById("Block6").src = "rotes-x.PNG";
                    gameNotOver = false;
                }


                flag = false;
            } else {
                document.getElementById("Block6").src = "tic_tac_o.PNG";
                var c = document.getElementById("Block3").src,
                    f = document.getElementById("Block6").src,
                    i = document.getElementById("Block9").src,
                    d = document.getElementById("Block4").src,
                    e = document.getElementById("Block5").src;
                if (c.indexOf("tic_tac_o.PNG") > 0 && f.indexOf("tic_tac_o.PNG") > 0 && i.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block3").src = "rotes-o.PNG";
                    document.getElementById("Block6").src = "rotes-o.PNG";
                    document.getElementById("Block9").src = "rotes-o.PNG";
                    gameNotOver = false;

                }
                if (d.indexOf("tic_tac_o.PNG") > 0 && f.indexOf("tic_tac_o.PNG") > 0 && e.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block4").src = "rotes-o.PNG";
                    document.getElementById("Block5").src = "rotes-o.PNG";
                    document.getElementById("Block6").src = "rotes-o.PNG";
                    gameNotOver = false;
                }
                flag = true;

            }
        }
    }
    // if (gameNotOver == false && flag == true) {

    //     alert("Congrats!!! 'X'has won.");
        
    // } 
    
    // if(gameNotOver == false && flag == false) {
    //     alert("Congrats!!! 'o'has won.");
    // }

}

function changeImage7() {
    if (gameNotOver == true) {
        if (document.getElementById("Block7").src.indexOf("empty.PNG") > 0) {
            // var a = document.getElementById("Block1").src,
            // b = document.getElementById("Block2").src,
            // c = document.getElementById("Block3").src,
            // d = document.getElementById("Block4").src,
            // e = document.getElementById("Block5").src,
            // f = document.getElementById("Block6").src,
            // g = document.getElementById("Block7").src,
            // h = document.getElementById("Block8").src,
            // i = document.getElementById("Block9").src;

            if (flag == true) {
                //document.getElementById("Block4").src="tic_tac_x.PNG";
                document.getElementById("Block7").src = "tic_tac_x.PNG";
                //document.getElementById("Block6").src="tic_tac_x.PNG";
                var a = document.getElementById("Block1").src,
                    b = document.getElementById("Block2").src,
                    c = document.getElementById("Block3").src,
                    d = document.getElementById("Block4").src,
                    e = document.getElementById("Block5").src,
                    f = document.getElementById("Block6").src,
                    g = document.getElementById("Block7").src,
                    h = document.getElementById("Block8").src,
                    i = document.getElementById("Block9").src;

                //Check blocks 1, 4 and 7
                if (a.indexOf("tic_tac_x.PNG") > 0 && d.indexOf("tic_tac_x.PNG") > 0 && g.indexOf("tic_tac_x.PNG") > 0) {
                    document.getElementById("Block1").src = "rotes-x.PNG";
                    document.getElementById("Block4").src = "rotes-x.PNG";
                    document.getElementById("Block7").src = "rotes-x.PNG";
                    gameNotOver = false;
                }


                //Check blocks 3, 5 and 7
                if (c.indexOf("tic_tac_x.PNG") > 0 && e.indexOf("tic_tac_x.PNG") > 0 && g.indexOf("tic_tac_x.PNG") > 0) {
                    document.getElementById("Block3").src = "rotes-x.PNG";
                    document.getElementById("Block5").src = "rotes-x.PNG";
                    document.getElementById("Block7").src = "rotes-x.PNG";
                    gameNotOver = false;
                }
                //Check blocks 7, 8 and 9
                if (i.indexOf("tic_tac_x.PNG") > 0 && h.indexOf("tic_tac_x.PNG") > 0 && g.indexOf("tic_tac_x.PNG") > 0) {
                    document.getElementById("Block7").src = "rotes-x.PNG";
                    document.getElementById("Block8").src = "rotes-x.PNG";
                    document.getElementById("Block9").src = "rotes-x.PNG";
                    gameNotOver = false;
                }

                //Check blocks 4, 5 and 6
                if (d.indexOf("tic_tac_x.PNG") > 0 && f.indexOf("tic_tac_x.PNG") > 0 && e.indexOf("tic_tac_x.PNG") > 0) {
                    document.getElementById("Block4").src = "rotes-x.PNG";
                    document.getElementById("Block5").src = "rotes-x.PNG";
                    document.getElementById("Block6").src = "rotes-x.PNG";
                    gameNotOver = false;
                }

                if (a.indexOf("tic_tac_x.PNG") > 0 && e.indexOf("tic_tac_x.PNG") > 0 && i.indexOf("tic_tac_x.PNG") > 0) {
                    document.getElementById("Block1").src = "rotes-x.PNG";
                    document.getElementById("Block5").src = "rotes-x.PNG";
                    document.getElementById("Block9").src = "rotes-x.PNG";
                    gameNotOver = false;
                }

                if (b.indexOf("tic_tac_x.PNG") > 0 && e.indexOf("tic_tac_x.PNG") > 0 && h.indexOf("tic_tac_x.PNG") > 0) {
                    document.getElementById("Block2").src = "rotes-x.PNG";
                    document.getElementById("Block5").src = "rotes-x.PNG";
                    document.getElementById("Block8").src = "rotes-x.PNG";
                    gameNotOver = false;
                }


                flag = false;
            } else {


                //document.getElementById("Block4").src="tic_tac_o.PNG";
                document.getElementById("Block7").src = "tic_tac_o.PNG";
                //document.getElementById("Block6").src="tic_tac_o.PNG";
                var a = document.getElementById("Block1").src,
                    b = document.getElementById("Block2").src,
                    c = document.getElementById("Block3").src,
                    d = document.getElementById("Block4").src,
                    e = document.getElementById("Block5").src,
                    f = document.getElementById("Block6").src,
                    g = document.getElementById("Block7").src,
                    h = document.getElementById("Block8").src,
                    i = document.getElementById("Block9").src;

                //Check blocks 1, 4 and 7
                if (a.indexOf("tic_tac_o.PNG") > 0 && d.indexOf("tic_tac_o.PNG") > 0 && g.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block1").src = "rotes-o.PNG";
                    document.getElementById("Block4").src = "rotes-o.PNG";
                    document.getElementById("Block7").src = "rotes-o.PNG";
                    gameNotOver = false;
                }

                //Check blocks 7, 8 and 9
                if (g.indexOf("tic_tac_o.PNG") > 0 && h.indexOf("tic_tac_o.PNG") > 0 && i.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block7").src = "rotes-o.PNG";
                    document.getElementById("Block8").src = "rotes-o.PNG";
                    document.getElementById("Block9").src = "rotes-o.PNG";
                    gameNotOver = false;
                }


                if (c.indexOf("tic_tac_o.PNG") > 0 && e.indexOf("tic_tac_o.PNG") > 0 && g.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block3").src = "rotes-o.PNG";
                    document.getElementById("Block5").src = "rotes-o.PNG";
                    document.getElementById("Block7").src = "rotes-o.PNG";
                    gameNotOver = false;
                }

                if (d.indexOf("tic_tac_o.PNG") > 0 && f.indexOf("tic_tac_o.PNG") > 0 && e.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block4").src = "rotes-o.PNG";
                    document.getElementById("Block5").src = "rotes-o.PNG";
                    document.getElementById("Block6").src = "rotes-o.PNG";
                    gameNotOver = false;
                }

                if (a.indexOf("tic_tac_o.PNG") > 0 && e.indexOf("tic_tac_o.PNG") > 0 && i.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block1").src = "rotes-o.PNG";
                    document.getElementById("Block5").src = "rotes-o.PNG";
                    document.getElementById("Block9").src = "rotes-o.PNG";
                    gameNotOver = false;
                }

                if (b.indexOf("tic_tac_o.PNG") > 0 && e.indexOf("tic_tac_o.PNG") > 0 && h.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block2").src = "rotes-o.PNG";
                    document.getElementById("Block5").src = "rotes-o.PNG";
                    document.getElementById("Block8").src = "rotes-o.PNG";
                    gameNotOver = false;

                }
                flag = true;




            }

        }
    }
    // if (gameNotOver == false && flag == true) {

    //     alert("Congrats!!! 'X'has won.");
        
    // } 
    
    // if(gameNotOver == false && flag == false) {
    //     alert("Congrats!!! 'o'has won.");
    // }

}


function changeImage8() {
    if (gameNotOver == true) {
        if (document.getElementById("Block8").src.indexOf("empty.PNG") > 0) {
            // var a = document.getElementById("Block1").src,
            // b = document.getElementById("Block2").src,
            // c = document.getElementById("Block3").src,
            // d = document.getElementById("Block4").src,
            // e = document.getElementById("Block5").src,
            // f = document.getElementById("Block6").src,
            // g = document.getElementById("Block7").src,
            // h = document.getElementById("Block8").src,
            // i = document.getElementById("Block9").src;

            if (flag == true) {
                //document.getElementById("Block4").src="tic_tac_x.PNG";
                document.getElementById("Block8").src = "tic_tac_x.PNG";
                //document.getElementById("Block6").src="tic_tac_x.PNG";
                var a = document.getElementById("Block1").src,
                    b = document.getElementById("Block2").src,
                    c = document.getElementById("Block3").src,
                    d = document.getElementById("Block4").src,
                    e = document.getElementById("Block5").src,
                    f = document.getElementById("Block6").src,
                    g = document.getElementById("Block7").src,
                    h = document.getElementById("Block8").src,
                    i = document.getElementById("Block9").src;
                //Check blocks 1, 2 and 3
                if (a.indexOf("tic_tac_x.PNG") > 0 && b.indexOf("tic_tac_x.PNG") > 0 && c.indexOf("tic_tac_x.PNG") > 0) {
                    document.getElementById("Block1").src = "rotes-x.PNG";
                    document.getElementById("Block2").src = "rotes-x.PNG";
                    document.getElementById("Block3").src = "rotes-x.PNG";
                    gameNotOver = false;
                }

                //Check blocks 9, 6 and 3
                if (c.indexOf("tic_tac_x.PNG") > 0 && f.indexOf("tic_tac_x.PNG") > 0 && i.indexOf("tic_tac_x.PNG") > 0) {
                    document.getElementById("Block3").src = "rotes-x.PNG";
                    document.getElementById("Block6").src = "rotes-x.PNG";
                    document.getElementById("Block9").src = "rotes-x.PNG";
                    gameNotOver = false;
                }

                //Check blocks 1, 4 and 7
                if (c.indexOf("tic_tac_x.PNG") > 0 && e.indexOf("tic_tac_x.PNG") > 0 && g.indexOf("tic_tac_x.PNG") > 0) {
                    document.getElementById("Block3").src = "rotes-x.PNG";
                    document.getElementById("Block5").src = "rotes-x.PNG";
                    document.getElementById("Block7").src = "rotes-x.PNG";
                    gameNotOver = false;
                }
                //Check blocks 7, 8 and 9
                if (i.indexOf("tic_tac_x.PNG") > 0 && h.indexOf("tic_tac_x.PNG") > 0 && g.indexOf("tic_tac_x.PNG") > 0) {
                    document.getElementById("Block7").src = "rotes-x.PNG";
                    document.getElementById("Block8").src = "rotes-x.PNG";
                    document.getElementById("Block9").src = "rotes-x.PNG";
                    gameNotOver = false;
                }

                //Check blocks 4, 5 and 6
                if (d.indexOf("tic_tac_x.PNG") > 0 && f.indexOf("tic_tac_x.PNG") > 0 && e.indexOf("tic_tac_x.PNG") > 0) {
                    document.getElementById("Block4").src = "rotes-x.PNG";
                    document.getElementById("Block5").src = "rotes-x.PNG";
                    document.getElementById("Block6").src = "rotes-x.PNG";
                    gameNotOver = false;
                }

                if (a.indexOf("tic_tac_x.PNG") > 0 && e.indexOf("tic_tac_x.PNG") > 0 && i.indexOf("tic_tac_x.PNG") > 0) {
                    document.getElementById("Block1").src = "rotes-x.PNG";
                    document.getElementById("Block5").src = "rotes-x.PNG";
                    document.getElementById("Block9").src = "rotes-x.PNG";
                    gameNotOver = false;
                }

                if (b.indexOf("tic_tac_x.PNG") > 0 && e.indexOf("tic_tac_x.PNG") > 0 && h.indexOf("tic_tac_x.PNG") > 0) {
                    document.getElementById("Block2").src = "rotes-x.PNG";
                    document.getElementById("Block5").src = "rotes-x.PNG";
                    document.getElementById("Block8").src = "rotes-x.PNG";
                    gameNotOver = false;
                }


                flag = false;
            } else {


                //document.getElementById("Block4").src="tic_tac_o.PNG";
                document.getElementById("Block8").src = "tic_tac_o.PNG";
                //document.getElementById("Block6").src="tic_tac_o.PNG";
                var a = document.getElementById("Block1").src,
                    b = document.getElementById("Block2").src,
                    c = document.getElementById("Block3").src,
                    d = document.getElementById("Block4").src,
                    e = document.getElementById("Block5").src,
                    f = document.getElementById("Block6").src,
                    g = document.getElementById("Block7").src,
                    h = document.getElementById("Block8").src,
                    i = document.getElementById("Block9").src;

                //Check blocks 1, 2 and 3
                if (a.indexOf("tic_tac_o.PNG") > 0 && b.indexOf("tic_tac_o.PNG") > 0 && c.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block1").src = "rotes-o.PNG";
                    document.getElementById("Block2").src = "rotes-o.PNG";
                    document.getElementById("Block3").src = "rotes-o.PNG";
                    gameNotOver = false;
                }

                //Check blocks 1, 2 and 3
                if (c.indexOf("tic_tac_o.PNG") > 0 && f.indexOf("tic_tac_o.PNG") > 0 && i.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block3").src = "rotes-o.PNG";
                    document.getElementById("Block6").src = "rotes-o.PNG";
                    document.getElementById("Block9").src = "rotes-o.PNG";
                    gameNotOver = false;
                }

                //Check blocks 1, 4 and 7
                if (a.indexOf("tic_tac_o.PNG") > 0 && d.indexOf("tic_tac_o.PNG") > 0 && g.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block1").src = "rotes-o.PNG";
                    document.getElementById("Block4").src = "rotes-o.PNG";
                    document.getElementById("Block7").src = "rotes-o.PNG";
                    gameNotOver = false;
                }

                //Check blocks 7, 8 and 9
                if (g.indexOf("tic_tac_o.PNG") > 0 && h.indexOf("tic_tac_o.PNG") > 0 && i.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block7").src = "rotes-o.PNG";
                    document.getElementById("Block8").src = "rotes-o.PNG";
                    document.getElementById("Block9").src = "rotes-o.PNG";
                    gameNotOver = false;
                }


                if (c.indexOf("tic_tac_o.PNG") > 0 && e.indexOf("tic_tac_o.PNG") > 0 && g.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block3").src = "rotes-o.PNG";
                    document.getElementById("Block5").src = "rotes-o.PNG";
                    document.getElementById("Block7").src = "rotes-o.PNG";
                    gameNotOver = false;
                }

                if (d.indexOf("tic_tac_o.PNG") > 0 && f.indexOf("tic_tac_o.PNG") > 0 && e.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block4").src = "rotes-o.PNG";
                    document.getElementById("Block5").src = "rotes-o.PNG";
                    document.getElementById("Block6").src = "rotes-o.PNG";
                    gameNotOver = false;
                }

                if (a.indexOf("tic_tac_o.PNG") > 0 && e.indexOf("tic_tac_o.PNG") > 0 && i.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block1").src = "rotes-o.PNG";
                    document.getElementById("Block5").src = "rotes-o.PNG";
                    document.getElementById("Block9").src = "rotes-o.PNG";
                    gameNotOver = false;
                }

                if (b.indexOf("tic_tac_o.PNG") > 0 && e.indexOf("tic_tac_o.PNG") > 0 && h.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block2").src = "rotes-o.PNG";
                    document.getElementById("Block5").src = "rotes-o.PNG";
                    document.getElementById("Block8").src = "rotes-o.PNG";
                    gameNotOver = false;

                }
                flag = true;




            }

        }
    }
    // if (gameNotOver == false && flag == true) {

    //     alert("Congrats!!! 'X'has won.");
        
    // } 
    
    // if(gameNotOver == false && flag == false) {
    //     alert("Congrats!!! 'o'has won.");
    // }

}





function changeImage9() {
    if (gameNotOver == true) {
        if (document.getElementById("Block9").src.indexOf("empty.PNG") > 0) {
            // var a = document.getElementById("Block1").src,
            // b = document.getElementById("Block2").src,
            // c = document.getElementById("Block3").src,
            // d = document.getElementById("Block4").src,
            // e = document.getElementById("Block5").src,
            // f = document.getElementById("Block6").src,
            // g = document.getElementById("Block7").src,
            // h = document.getElementById("Block8").src,
            // i = document.getElementById("Block9").src;

            if (flag == true) {
                //document.getElementById("Block4").src="tic_tac_x.PNG";
                document.getElementById("Block9").src = "tic_tac_x.PNG";
                //document.getElementById("Block6").src="tic_tac_x.PNG";
                var a = document.getElementById("Block1").src,
                    b = document.getElementById("Block2").src,
                    c = document.getElementById("Block3").src,
                    d = document.getElementById("Block4").src,
                    e = document.getElementById("Block5").src,
                    f = document.getElementById("Block6").src,
                    g = document.getElementById("Block7").src,
                    h = document.getElementById("Block8").src,
                    i = document.getElementById("Block9").src;
                //Check blocks 1, 2 and 3
                if (a.indexOf("tic_tac_x.PNG") > 0 && b.indexOf("tic_tac_x.PNG") > 0 && c.indexOf("tic_tac_x.PNG") > 0) {
                    document.getElementById("Block1").src = "rotes-x.PNG";
                    document.getElementById("Block2").src = "rotes-x.PNG";
                    document.getElementById("Block3").src = "rotes-x.PNG";
                    gameNotOver = false;
                }

                //Check blocks 9, 6 and 3
                if (c.indexOf("tic_tac_x.PNG") > 0 && f.indexOf("tic_tac_x.PNG") > 0 && i.indexOf("tic_tac_x.PNG") > 0) {
                    document.getElementById("Block3").src = "rotes-x.PNG";
                    document.getElementById("Block6").src = "rotes-x.PNG";
                    document.getElementById("Block9").src = "rotes-x.PNG";
                    gameNotOver = false;
                }

                //Check blocks 1, 4 and 7
                if (c.indexOf("tic_tac_x.PNG") > 0 && e.indexOf("tic_tac_x.PNG") > 0 && g.indexOf("tic_tac_x.PNG") > 0) {
                    document.getElementById("Block3").src = "rotes-x.PNG";
                    document.getElementById("Block5").src = "rotes-x.PNG";
                    document.getElementById("Block7").src = "rotes-x.PNG";
                    gameNotOver = false;
                }
                //Check blocks 7, 8 and 9
                if (i.indexOf("tic_tac_x.PNG") > 0 && h.indexOf("tic_tac_x.PNG") > 0 && g.indexOf("tic_tac_x.PNG") > 0) {
                    document.getElementById("Block7").src = "rotes-x.PNG";
                    document.getElementById("Block8").src = "rotes-x.PNG";
                    document.getElementById("Block9").src = "rotes-x.PNG";
                    gameNotOver = false;
                }

                //Check blocks 4, 5 and 6
                if (d.indexOf("tic_tac_x.PNG") > 0 && f.indexOf("tic_tac_x.PNG") > 0 && e.indexOf("tic_tac_x.PNG") > 0) {
                    document.getElementById("Block4").src = "rotes-x.PNG";
                    document.getElementById("Block5").src = "rotes-x.PNG";
                    document.getElementById("Block6").src = "rotes-x.PNG";
                    gameNotOver = false;
                }

                if (a.indexOf("tic_tac_x.PNG") > 0 && e.indexOf("tic_tac_x.PNG") > 0 && i.indexOf("tic_tac_x.PNG") > 0) {
                    document.getElementById("Block1").src = "rotes-x.PNG";
                    document.getElementById("Block5").src = "rotes-x.PNG";
                    document.getElementById("Block9").src = "rotes-x.PNG";
                    gameNotOver = false;
                }

                if (b.indexOf("tic_tac_x.PNG") > 0 && e.indexOf("tic_tac_x.PNG") > 0 && h.indexOf("tic_tac_x.PNG") > 0) {
                    document.getElementById("Block2").src = "rotes-x.PNG";
                    document.getElementById("Block5").src = "rotes-x.PNG";
                    document.getElementById("Block8").src = "rotes-x.PNG";
                    gameNotOver = false;
                }


                flag = false;
            } else {


                //document.getElementById("Block4").src="tic_tac_o.PNG";
                document.getElementById("Block9").src = "tic_tac_o.PNG";
                //document.getElementById("Block6").src="tic_tac_o.PNG";
                var a = document.getElementById("Block1").src,
                    b = document.getElementById("Block2").src,
                    c = document.getElementById("Block3").src,
                    d = document.getElementById("Block4").src,
                    e = document.getElementById("Block5").src,
                    f = document.getElementById("Block6").src,
                    g = document.getElementById("Block7").src,
                    h = document.getElementById("Block8").src,
                    i = document.getElementById("Block9").src;

                //Check blocks 1, 2 and 3
                if (a.indexOf("tic_tac_o.PNG") > 0 && b.indexOf("tic_tac_o.PNG") > 0 && c.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block1").src = "rotes-o.PNG";
                    document.getElementById("Block2").src = "rotes-o.PNG";
                    document.getElementById("Block3").src = "rotes-o.PNG";
                    gameNotOver = false;
                }

                //Check blocks 1, 2 and 3
                if (c.indexOf("tic_tac_o.PNG") > 0 && f.indexOf("tic_tac_o.PNG") > 0 && i.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block3").src = "rotes-o.PNG";
                    document.getElementById("Block6").src = "rotes-o.PNG";
                    document.getElementById("Block9").src = "rotes-o.PNG";
                    gameNotOver = false;
                }

                //Check blocks 1, 4 and 7
                if (a.indexOf("tic_tac_o.PNG") > 0 && d.indexOf("tic_tac_o.PNG") > 0 && g.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block1").src = "rotes-o.PNG";
                    document.getElementById("Block4").src = "rotes-o.PNG";
                    document.getElementById("Block7").src = "rotes-o.PNG";
                    gameNotOver = false;
                }

                //Check blocks 7, 8 and 9
                if (g.indexOf("tic_tac_o.PNG") > 0 && h.indexOf("tic_tac_o.PNG") > 0 && i.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block7").src = "rotes-o.PNG";
                    document.getElementById("Block8").src = "rotes-o.PNG";
                    document.getElementById("Block9").src = "rotes-o.PNG";
                    gameNotOver = false;
                }


                if (c.indexOf("tic_tac_o.PNG") > 0 && e.indexOf("tic_tac_o.PNG") > 0 && g.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block3").src = "rotes-o.PNG";
                    document.getElementById("Block5").src = "rotes-o.PNG";
                    document.getElementById("Block7").src = "rotes-o.PNG";
                    gameNotOver = false;
                }

                if (d.indexOf("tic_tac_o.PNG") > 0 && f.indexOf("tic_tac_o.PNG") > 0 && e.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block4").src = "rotes-o.PNG";
                    document.getElementById("Block5").src = "rotes-o.PNG";
                    document.getElementById("Block6").src = "rotes-o.PNG";
                    gameNotOver = false;
                }

                if (a.indexOf("tic_tac_o.PNG") > 0 && e.indexOf("tic_tac_o.PNG") > 0 && i.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block1").src = "rotes-o.PNG";
                    document.getElementById("Block5").src = "rotes-o.PNG";
                    document.getElementById("Block9").src = "rotes-o.PNG";
                    gameNotOver = false;
                }

                if (b.indexOf("tic_tac_o.PNG") > 0 && e.indexOf("tic_tac_o.PNG") > 0 && h.indexOf("tic_tac_o.PNG") > 0) {
                    document.getElementById("Block2").src = "rotes-o.PNG";
                    document.getElementById("Block5").src = "rotes-o.PNG";
                    document.getElementById("Block8").src = "rotes-o.PNG";
                    gameNotOver = false;

                }
                flag = true;




            }

        }
    }
    // if (gameNotOver == false && flag == true) {

    //     alert("Congrats!!! 'X'has won.");
        
    // } 
    
    // if(gameNotOver == false && flag == false) {
    //     alert("Congrats!!! 'o'has won.");
    // }

}