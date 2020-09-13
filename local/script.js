




function readFile(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#local_img')
                    .attr('src', e.target.result)
                    
            };

            reader.readAsDataURL(input.files[0]);
        }
    }

function readURL(input){
    console.log("ran")
    if( $('#urlBox').val().length == 0){
        console.log("nothing")
    }else{
        console.log($('#urlBox').val());
        $('#web_img').attr('src' , $('#urlBox').val());
    }
}

function updateFilter() {
    
    let gs       = $("#gs").val();      // grayscale
    let blur     = $("#blur").val();    // blur
    let br       = $("#br").val();      // brightness
    let ct       = $("#ct").val();      // contrast
    let huer     = $("#huer").val();    //hue-rotate
    let opacity      = $("#opacity").val(); //opacity
    let invert   = $("#invert").val();  //invert
    let saturate     = $("#saturate").val();//saturate
    let sepia    = $("#sepia").val();   //sepia
    let filter =    'grayscale(' + gs+
            '%) blur(' + blur +
            'px) brightness(' + br +
            '%) contrast(' + ct +
            '%) hue-rotate(' + huer +
            'deg) opacity(' + opacity +
            '%) invert(' + invert +
            '%) saturate(' + saturate +
            '%) sepia(' + sepia + '%)';

    //$('gslabel').text(`Grayscale: ${gs}`);
    document.getElementById('gslabel').innerHTML = `Grayscale ${gs}%`;
    document.getElementById('blurlabel').innerHTML = `Blur ${blur}px`;
    document.getElementById('brlabel').innerHTML = `brightness ${br}%`;
    document.getElementById('ctlabel').innerHTML = `Contrast ${ct}%`;
    document.getElementById('huerlabel').innerHTML = `Hue Rotation ${huer} deg`;
    document.getElementById('opacitylabel').innerHTML = `Opacity ${opacity}%`;
    document.getElementById('invertlabel').innerHTML = `Invert ${invert}%`;
    document.getElementById('saturatelabel').innerHTML = `Saturate ${saturate}%`;
    document.getElementById('sepialabel').innerHTML = `Sepia ${gs}%`;




    $("#local_img").css("filter", filter);
    $("#local_img").css("-webkit-filter", filter); 
    $("#web_img").css("filter", filter);
    $("#web_img").css("-webkit-filter", filter);
    console.log("updateFilter called");
}
        
function resetSliders(){
    //console.log("reset sliders");
    //console.log($("#gs").val() )
     //   console.log($("#gs").defaultValue() )
    //document.getElementById("myRange").defaultValue
    //console.log( document.getElementById("gs").defaultValue);

    document.getElementById("gs").value = document.getElementById("gs").defaultValue;
    document.getElementById("blur").value = document.getElementById("blur").defaultValue;
    document.getElementById("br").value = document.getElementById("br").defaultValue;
    document.getElementById("ct").value = document.getElementById("ct").defaultValue;
    document.getElementById("huer").value = document.getElementById("huer").defaultValue;
    document.getElementById("opacity").value = document.getElementById("opacity").defaultValue; 
    document.getElementById("invert").value = document.getElementById("invert").defaultValue;
    document.getElementById("saturate").value = document.getElementById("saturate").defaultValue;
    document.getElementById("sepia").value = document.getElementById("sepia").defaultValue;
    updateFilter();

}

function makeBigger(){
    img1width = Number($("#local_img").width()) + 20
    img2width = Number($("#web_img").width()) + 20
    $("#local_img").css("width", img1width+"px"); 
    $("#web_img").css("width", img2width +"px");
}
function makeSmaller(){
    img1width = Number($("#local_img").width()) - 20
    img2width = Number($("#web_img").width()) - 20
    $("#local_img").css("width", img1width +"px");
    $("#web_img").css("width", img2width+"px"); 
}