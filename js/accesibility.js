jQuery(function($) {


    var cssId = 'myCss'; // you could encode the css path itself to generate id..
    if (!document.getElementById(cssId)) {
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.id = cssId;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'https://github.com/buradimiru08/Accessibility/blob/a77370bd2359904dfd1c3f876a311fb8f8cb932c/css/accesibilidad.css';
        link.media = 'all';
        head.appendChild(link);
    }

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
        var check = $("<div class='info__access'><span>✅Existe etiqueta h1</span></div>");
        var check_bad = $("<div class='info__access'><span>❌Ya existe etiqueta h1, debe cambiar encabezado repedito</span></div>");
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
        var check_h1 = $("<div class='info__access'><span>✅Existe etiqueta h2</span></div>");
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

    $("body")
        .find("img")
        .each(function() {
            if (this.alt.trim() != "") {
                var myAlt = this.alt;
                var check = $("<div class='info__access'><span>✅Existe alt Text</span></div>");
                var nombre_archivo = (this.src);
                var imgtable = [
                    ["largo de texto:", myAlt.length],
                    ["ALT text:", myAlt],
                    ["Nombre del archivo y URL:", nombre_archivo]
                ]

                console.table(imgtable);
                console.log(myAlt);





                $(this).css("border", "5px solid green");
                $(this).before("<p class='access-text_img'>");
                $(".access-text_img").html(myAlt);
                $(".access-text_img").css("border", "5px solid green");
                $(".access-text_img").prepend(check);

            } else {

                var check_bad = $("<div class='info__access'><span>❌ No existe  atributo Alt text</span></div>");
                $(this).before("<p class='access-text_img_bad'>");
                $(".access-text_img_bad").prepend(check_bad);
                $(".access-text_img_bad img").css("border", "5px solid red");
                //this.alt = 'IMAGEN SIN ALT TEXT';
                var myAlt = this.alt;
                //console.log(myAlt);

                var nombre_archivo = (this.src);
                var imgtable = [
                    ["largo de texto:", myAlt.length],
                    ["ALT text:", myAlt],
                    ["Nombre del archivo y URL:", nombre_archivo]
                ]

                console.table(imgtable);
            }
        });





});