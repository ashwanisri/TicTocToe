gameNotOver = true;





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


flag = true;

function changeImage4() {
    if (gameNotOver == true) {
        if (document.getElementById("Block4").src.indexOf("empty.PNG") > 0) {
            if (flag == true) {
                document.getElementById("Block4").src = "tic_tac_x.PNG";
                //document.getElementById("Block5").src="tic_tac_x.PNG";
                //document.getElementById("Block6").src="tic_tac_x.PNG";
                a = document.getElementById("Block1").src;
                b = document.getElementById("Block2").src;
                c = document.getElementById("Block3").src;
                d = document.getElementById("Block4").src;
                e = document.getElementById("Block5").src;
                f = document.getElementById("Block6").src;
                g = document.getElementById("Block7").src;
                h = document.getElementById("Block8").src;
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
}







function changeImage5() {
    if (gameNotOver == true) {
        if (document.getElementById("Block5").src.indexOf("empty.PNG") > 0) {
            if (flag == true) {
                //document.getElementById("Block4").src="tic_tac_x.PNG";
                document.getElementById("Block5").src = "tic_tac_x.PNG";
                //document.getElementById("Block6").src="tic_tac_x.PNG";
                a = document.getElementById("Block1").src;
                b = document.getElementById("Block2").src;
                c = document.getElementById("Block3").src;
                d = document.getElementById("Block4").src;
                e = document.getElementById("Block5").src;
                f = document.getElementById("Block6").src;
                g = document.getElementById("Block7").src;
                h = document.getElementById("Block8").src;
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

                if (flag == false) {
                    //document.getElementById("Block4").src="tic_tac_o.PNG";
                    document.getElementById("Block5").src = "tic_tac_o.PNG";
                    // document.getElementById("Block6").src="tic_tac_o.PNG";
                    a = document.getElementById("Block1").src;
                    b = document.getElementById("Block2").src;
                    c = document.getElementById("Block3").src;
                    d = document.getElementById("Block4").src;
                    e = document.getElementById("Block5").src;
                    f = document.getElementById("Block6").src;
                    g = document.getElementById("Block7").src;
                    h = document.getElementById("Block8").src;
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
    }
}






function changeImage6() {
    if (gameNotOver == true) {
        if (document.getElementById("Block6").src.indexOf("empty.PNG") > 0) {
            if (flag == true) {
                document.getElementById("Block6").src = "tic_tac_x.PNG";
                c = document.getElementById("Block3").src;
                f = document.getElementById("Block6").src;
                i = document.getElementById("Block9").src;
                d = document.getElementById("Block4").src;
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
}



function changeImage9() {
    flag = false;

}