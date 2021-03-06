var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

jQuery(function($) {


    $('head').append('<meta http-equiv="Content-Type" content="text/html"></meta>');

    $('head').append('<style>.access_relative{position:relative;}.access__absolute_bad{position: relative;}.access__absolute{position:relative;width:auto;display:flex;justify-content:center;align-items:center;flex-direction:column}.access__check{border:2px solid #adff2f;position:relative}.access__check.bad{border:3px solid red;color:red}.info__access{background-color:#000;color:#fff!important;width:auto;display:flex;justify-content:center;align-items:center;padding:.5rem .75rem;position:relative;border-radius:5px;top:0;font-size:16px;opacity:.8;right:0}.info__access::after{content:"";width:10px;height:10px;border-right:4px solid #000;border-bottom:4px solid #000;position:absolute;background-color:#000;bottom:-5px;transform:rotate(45deg)}.access__absolute .info__access{background-color:#000;color:#fff!important;max-width:90%;display:flex;justify-content:center;align-items:center;padding:.5rem .75rem;position:relative;border-radius:5px;font-size:16px;opacity:.8;right:0;top:0;height:80px;text-align:center;z-index:99}.access__absolute_bad .info__access{background-color:#000;color:#fff!important;width:125px;display:flex;justify-content:center;align-items:center;padding:.5rem .75rem;position:relative;border-radius:5px;font-size:16px;opacity:.8;right:0;top:0;height:80px;text-align:center;z-index:99}</style>');


    if ($("body").hasClass("access-widget")) {

        //selectores de documento
        var body = document.querySelector("body");
        var header = document.querySelector("div.access_header");
        var navegacion = document.querySelector("div.access_nav");
        var main = document.querySelector("div.access_main");
        var aside = document.querySelector("div.access_aside");
        var section = document.querySelector("div.access_section");
        var footer = document.querySelector("div.access_footer");
        var form = document.querySelector("div.access_form");
        var img = document.querySelector("div.access_img");
        var title = document.querySelector("div.access_title");

        //agregar roles a los elementos semanticos, siempre y cuando no los tenga
        header.setAttribute("role", "banner");
        navegacion.setAttribute("role", "navigation");
        main.setAttribute("role", "main");


    } else {
        console.log("nada");
    }

    if (document.querySelector("h1")) {


        //busco el h1 en el documento
        var tituloh = $("body h1");
        var check = $("<div class='info__access'><span>???Existe etiqueta h1</span></div>");
        var check_bad = $("<div class='info__access'><span>???Ya existe etiqueta h1, debe cambiar encabezado repedito</span></div>");
        //Imprimo en la consola un log si existe el el selector
        console.log("h1 existe en esta vista");
        //Cuento la cantidad de selectores que hay
        console.log("h1 totales en esta vista:", tituloh.length);
        var ps = document.getElementsByTagName('h1');


        //Agrego un elemento al selector, para identificarlo


        //Agrego un color verde si hay uno

        tituloh.addClass("access__check");
        $("h1:first").prepend(check);

        if ($('body').find('h1').length > 0) {
            $("body").find('h1:nth-last-child(2)').prepend(check_bad);
            $("body").find('h1:nth-last-child(2)').addClass('bad');
        } else {
            console.log("Vista correcta:", $("h1").length);
        }

    } else {
        console.log("h1 no existe, favor declarar solo uno");
    }


    if (document.querySelector("h2")) {
        //busco el h1 en el documento
        var tituloh1 = $("body h2");
        var check_h1 = $("<div class='info__access'><span>???Existe etiqueta h2</span></div>");
        //Imprimo en la consola un log si existe el el selector
        console.log("h2 existe en esta vista");
        //Cuento la cantidad de selectores que hay
        console.log("h2 totales en esta vista:", tituloh1.length);
        var ps = document.getElementsByTagName('h1');


        //Agrego un elemento al selector, para identificarlo


        //Agrego un color verde si hay uno

        tituloh1.addClass("access__check");
        $("h2").prepend(check_h1);


    } else {
        console.log("h1 no existe, favor declarar solo uno");
    }


    if (document.querySelector("img")) {
        var imagenes = $("body img");

        console.log("img existe");
        console.log("Imagenes totales en esta vista:", imagenes.length);
    } else {
        console.log("img no existe");
    }

    if (document.querySelector("footer")) {
        var footer = $("body footer");

        console.log("Footer existe");
        console.log("Footer totales en esta vista:", footer.length);

        footer.attr("role", "contentinfo");
    } else {
        console.log("El footer  no existe");
    }





    $("body").find("img").each(function() {
        if (this.alt.trim() != "") {


            var myAlt = this.alt;
            var check = $("<div class='info__access'><span>???Existe alt Text</span></div>");
            var nombre_archivo = (this.src);
            var dimensiones = this.width + 'x' + this.height;
            var peso = fetch($('img').prop('src')).then(function(response) {});
            var newDiv = document.createElement("div");
            var altText = $(this).attr('alt');
            $(newDiv).html(altText);
            $(newDiv).attr('class', 'divAltText');


            let imgtable = [
                ["largo de texto:", myAlt.length],
                ["ALT text:", myAlt],
                ["Nombre del archivo y URL:", nombre_archivo],
                ["Dimensiones:", dimensiones],
                ["peso:", dimensiones],


            ]

            console.table(imgtable);
            $(this).parent().addClass('access_relative');
            $(this).wrap("<div class='access__absolute'>");
            $(check).insertBefore(this);
            $(newDiv).css("border", "5px solid green");
            $(newDiv).wrap(check);
            $(check).insertBefore(this);
            $(this).css("border", "5px solid green");


            console.log(myAlt);



        } else {
            var newDiv = document.createElement("div");
            var check_bad = $("<div class='info__access'><span>??? No existe  atributo Alt text</span></div>");
            $(this).after(newDiv);
            $(this).parent().addClass('access_relative');
            $(this).wrap("<div class='access__absolute_bad'>");
            //$(newDiv).css("border", "5px solid red");
            //$(newDiv).wrap("<p class='access-text_img_bad'>");
            $(this).css("border", "5px solid red");
            $(check_bad).insertBefore(this);


            //this.alt = 'IMAGEN SIN ALT TEXT';
            var myAlt = this.alt;
            //console.log(myAlt);

            var nombre_archivo = (this.src);
            var imgtable = [
                ["largo de texto:", myAlt.length],
                ["ALT text:", myAlt],
                ["Nombre del archivo y URL:", nombre_archivo]
            ]

            //console.table(imgtable);
        }
    });









});