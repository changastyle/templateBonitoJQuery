function init()
{
        ajustar();
}
function ajustar()
{
        //MUESTRO:
       anchoPadre = $("#contenedorPrincipal").innerWidth();
       contenedorIzquierdoDataSize = $("#contenedorIzquierdo").data("size") ;
       contenedorDerechoDataSize = $("#contenedorDerecho").data("size") ;
       contenedorMedioDataSize = $("#contenedorMedio").data("size");
       
       console.log(     "AnchoPadre:" + anchoPadre     );
       console.log(     "contenedorIzquierdoDataSize:" + contenedorIzquierdoDataSize     );
       console.log(     "contenedorDerechoDataSize:" + contenedorDerechoDataSize     );
       console.log(     "contenedorMedioDataSize:" + contenedorMedioDataSize     );
       
       //AJUSTO:
       $("#contenedorIzquierdo").css("width",contenedorIzquierdoDataSize);
       $("#contenedorDerecho").css("width",contenedorDerechoDataSize);
       $("#contenedorMedio").css("width",contenedorMedioDataSize);
}

function desplegar(quien)
{
        console.log(quien.id);
        anchoPadre = $("#contenedorPrincipal").innerWidth();
        veinticinco = parseInt(anchoPadre /4) -10;
        anchoComponenteSeleccionado = $("#" + quien.id).innerWidth();
        dataSize = $("#" + quien.id).data("size") ;
        dataResize = $("#" + quien.id).data("resize");
        dataResizeContenedorMedio = $("#contenedorMedio").data("resize");
        dataSizeContenedorMedio = $("#contenedorMedio").data("size");
        
        console.log("anchoComponenteSeleccionado:" + anchoComponenteSeleccionado);
        console.log("dataResize:" + dataResize);
        console.log("dataSize:" + dataSize);
        console.log("dataResizeContenedorMedio:" + dataResizeContenedorMedio);
        console.log("dataSizeContenedorMedio:" + dataSizeContenedorMedio);
        console.log("veinticinco:" + veinticinco);
        
        //AJUSTO:
        if( anchoComponenteSeleccionado < veinticinco)
        {
                console.log("AGRANDO");
                $("#" + quien.id).css("width", dataResize);
                
                if(quien.id == "contenedorDerecho")
                {
                        console.log("AGRANDO DERECHO");
                        $("#contenedorMedio").css("width",dataResizeContenedorMedio );
                }
                else if(quien.id == "contenedorIzquierdo")
                {
                        console.log("AGRANDO IZQUIERDO");
                        $("#contenedorMedio").css("width",dataResizeContenedorMedio );
                        $("#contenedorMedio").css("left", dataResize);
                }
        }
        else
        {
                console.log("ACHICO");
                $("#" + quien.id).css("width", dataSize);     
                
                if(quien.id == "contenedorDerecho")
                {
                        console.log("ACHICO DERECHO");
                        $("#contenedorMedio").css("width",dataSizeContenedorMedio );
                }
                else if(quien.id == "contenedorIzquierdo")
                {
                        console.log("ACHICO IZQUIERDO");
                        $("#contenedorMedio").css("width",dataSizeContenedorMedio );
                        $("#contenedorMedio").css("left", dataSize);
                }
                
        }
         
}
/*function desplegar(quien)
{
        console.log(quien.id);
        strwidthLateral =  $("#" +  quien.id).css("width");
        widthLateral = parseInt( strwidthLateral.substr(0, strwidthLateral.length -2 ));
        
        if(       widthLateral < "300"       )
        {
                $("#" +  quien.id).css("width","300px");    
                
                //ACHICO CONTENEDOR MEDIO:
                /*strAnchoAachicar = "300px";
                anchoAachicar = parseInt( strAnchoAachicar.substring(0,strAnchoAachicar.length -2));
                
                strAnchoPrincipal =  $("#contenedorMedio").css("width");
                anchoPrincipal = parseInt( strAnchoPrincipal.substr(0, strAnchoPrincipal.length -2 ));
                
                queda = parseInt(anchoPrincipal -  anchoAachicar);
                strQueda = ""+ queda +"px";
                $("#contenedorMedio").css("width", strQueda);
               
               
                console.log("ancho a achicar = " + anchoAachicar  );
                console.log("ancho Principal = " + anchoPrincipal);  
                console.log("QUEDA = " +  strQueda);
                console.log("QUEDO = " +  $("#contenedorMedio").css("width"));
                
                strAnchoPadre =  $("#contenedorPrincipal").css("width");
                anchoPadre = parseInt( strAnchoPadre.substr(0, strAnchoPadre.length -2 ));
                $("#contenedorMedio").css("width", anchoPadre);
                
                //ACOMODO MEDIO:
                if(quien.id== "contenedorIzquierdo")
                {
                    $("#contenedorMedio").css("left","300px");  
                    $("#contenedorMedio").css("right","0px");  
                }
                else
                {
                    $("#contenedorMedio").css("left","0px");  
                    $("#contenedorMedio").css("right","300px");  
                }
                
                
                
        }
        else
        {
                $("#" +  quien.id).css("width","5%");    
                
                //AGRANDO CONTENEDOR MEDIO:
                /*strAnchoAachicar = "300px";
                anchoAachicar = parseInt( strAnchoAachicar.substring(0,strAnchoAachicar.length -2));
                
                strAnchoPrincipal =  $("#contenedorMedio").css("width");
                anchoPrincipal = parseInt( strAnchoPrincipal.substr(0, strAnchoPrincipal.length -2 ));
                
                queda = parseInt(anchoPrincipal +  anchoAachicar);
                strQueda = ""+ queda +"px";
                $("#contenedorMedio").css("width", strQueda);
               
               
                console.log("ancho a achicar = " + anchoAachicar  );
                console.log("ancho Principal = " + anchoPrincipal);  
                console.log("QUEDA = " +  strQueda);
                console.log("QUEDO = " +  $("#contenedorMedio").css("width"));
                
                strAnchoPadre =  $("#contenedorPrincipal").css("width");
                anchoPadre = parseInt( strAnchoPadre.substr(0, strAnchoPadre.length -2 ));
               $("#contenedorMedio").css("width", anchoPadre - 350 +"px" );
                //ACOMODO MEDIO:
                if(quien.id== "contenedorIzquierdo")
                {
                    $("#contenedorMedio").css("left","5%");    
                }
                else
                {
                        donde = $("#contenedorIzquierdo").css("width");
                        console.log(donde)
                        $("#contenedorMedio").css("left",donde);
                }
        }
        
}
*/