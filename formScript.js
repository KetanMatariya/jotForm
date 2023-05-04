$(document).ready(function() {
    console.log("Script running ... ");
    btnCheckEnabling();
    // #form-pagebreak-next_20 id is for next button
    $('#form-pagebreak-next_20').prop('disabled', true);

    // #input_3_0 id is for Q1 --> Yes option
    // #input_3_1 id is for Q1 --> No option
    // #id_4 id is for Q2 section
    $('#input_3_0').click(function(){
        if($("#input_3_0").is(":checked")){
            $('#id_4').hide();
            btnCheckEnabling();
        }
    })
    $('#input_3_1').click(function(){
        if($("#input_3_1").is(":checked")){
            $('#id_4').show();
            btnCheckEnabling();
        }
    })

    // #input_4_0 id is for Q2 --> Yes option
    // #input_4_1 id is for Q2 --> No option
    // #id_7 id is for Q4 section
    // #id_8 id is for Q5 section
    $('#input_4_0').click(function(){
        if($("#input_4_0").is(":checked")){
            $('#id_7').hide();
            $('#id_8').show();
            btnCheckEnabling();
        }
    })
    $('#input_4_1').click(function(){
        if($("#input_4_1").is(":checked")){
            $('#id_8').hide();
            $('#id_7').show();
            btnCheckEnabling();
        }
    })

    // #other_6 id is for Q3 --> other checkbox
    // #other_6_input id is for Q3 other text box section
    $('#other_6').click(function(){
        if($("#other_6").is(":checked")){
            $('#other_6_input').show();
        }else{
            $('#other_6_input').hide();
        }
    })

    // #other_7 id is for Q4 --> other checkbox
    // #other_7_input id is for Q4 other text box section
    $('#other_7').click(function(){
        if($("#other_7").is(":checked")){
            $('#other_7_input').show();
        }else{
            $('#other_7_input').hide();
        }
    })

    // #other_8 id is for Q5 --> other checkbox
    // #other_8_input id is for Q5 other text box section
    $('#other_8').click(function(){
        if($("#other_8").is(":checked")){
            $('#other_8_input').show();
        }else{
            $('#other_8_input').hide();
        }
    })
    
    // #other_9 id is for Q6 --> other checkbox
    // #other_9_input id is for Q6 other text box section
    $('#other_9').click(function(){
        if($("#other_9").is(":checked")){
            $('#other_9_input').show();
        }else{
            $('#other_9_input').hide();
        }
    })
    
    
    // q6_q3I[] name is for Q3 checkbox clicks
    $('input[name="q6_q3I[]"]').click(function(){
        btnCheckEnabling();
    })

    // q9_q6Are[] name is for Q6 checkbox clicks
    $('input[name="q9_q6Are[]"]').click(function(){
        btnCheckEnabling();
    })

    // q8_q5Problems[] name is for Q5 checkbox clicks
    $('input[name="q8_q5Problems[]"]').click(function(){
        btnCheckEnabling();
    })

    // q7_q4Problems[] name is for Q4 checkbox clicks
    $('input[name="q7_q4Problems[]"]').click(function(){
         btnCheckEnabling();
    })
});


// function calls on every click of checkboxes and radio buttons
// handle the enable and disable property of next button based on condition
function btnCheckEnabling(){

    // console.log("Please check the radio button ", $('#input_3_0').is(':checked'));
    // console.log("Please check the radio button input_3_1", $('#input_3_1').is(':checked'));
    
    
    let radio1 = $.map($('input[name="q3_q1Are"]:checked'), function(c){return c.value; })
    // console.log('radio1 :', radio1);
    let radio2 = $.map($('input[name="q4_q2Are"]:checked'), function(c){return c.value; })
    // console.log('radio2 :', radio2); 
    let q3Opt = $.map($('input[name="q6_q3I[]"]:checked'), function(c){return c.value; })
    let q6Opt = $.map($('input[name="q9_q6Are[]"]:checked'), function(c){return c.value; })
    let q4Opt = $.map($('input[name="q7_q4Problems[]"]:checked'), function(c){return c.value; })
    let q5Opt = $.map($('input[name="q8_q5Problems[]"]:checked'), function(c){return c.value; })
    console.log(q3Opt.length == 0 && q6Opt.length == 0);
    if((radio1.length == 0) || 
       (radio1[0] == 'Yes' && (q3Opt.length == 0 || q6Opt.length == 0)) ||
       (radio1[0] == 'No' && radio2.length == 0) ||
       (radio1[0] == 'No' && radio2[0] == 'Yes' && (q5Opt.length == 0 || q3Opt.length == 0 || q6Opt.length == 0)) ||
       (radio1[0] == 'No' && radio2[0] == 'No' && (q4Opt.length == 0 || q3Opt.length == 0 || q6Opt.length == 0))){
        $('#form-pagebreak-next_20').prop('disabled', true);
    }
    else{
        $('#form-pagebreak-next_20').prop('disabled', false);
    }
}

// function calls on next button click
function onNextClick(){
    console.log("Please check click is happned !");
}


