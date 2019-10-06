function _(a){return document.getElementById(a);}
function string_bw__word(string, w1, w2){
    return string.split(w1).pop().split(w2)[0];
}
function _request(url = '',_method, data) {
// Default options are marked with *
    return fetch(url, {
        method: _method, // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'include', // include, *same-origin, omit
        headers: {
            //'Content-Type': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'	
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        body: data, // body data type must match "ConteExperiencent-Type" header
    })
    .then(response => response.json()); // parses JSON response into native JavaScript objects 
}
function seeker_exist(mobile_no){
    // _request("[]/exe/?seeker_exist")
    // .then(function(data) {
    //     return (data.data==1)?1:0;
    // })
    // .catch(error => console.error(error));
    return (mobile_no==9670820138)?1:0;
}
function seeker_auth(mobile_no,otp){
    /*
    using xhr auth user
    */
    return (mobile_no=="9670820138" && otp=="1111")?1:0;
}
function employer_auth(username,password){
    /*
    using xhr auth employer
    */
    return (username=="admin" && password=="admin")?1:0;
}
function login(a){
    if(a=="jobseeker"){
        //_("login_otp").style=(_("login_otp").style=="block")?"none":"block"
        if(_("login_otp_col").style.display=="none" && seeker_exist(_("mobile_no_for_login").value)){
            _("login_otp_col").style.display="block";
        }else if(!seeker_exist(_("mobile_no_for_login").value)){
            alert("user not exist")
        }else if(seeker_auth(_("mobile_no_for_login").value,_("login_otp").value)){
            // http request for login
            alert("logged successfully")
            window.location="/seeker_dash/"
        }else{
            alert("AH:enter correct otp");
            
        }
    }else if(a=="employer"){
        if(employer_auth(_("login_username").value,_("login_password").value)){
            alert("logged successfully");
            window.location="employer_dash";
        }else{
            alert("wrong credentials");
        }
    }
}
function delete_job(job_id){
    for(i=0;i<jobs.length;i++){
        if(jobs[i]['job_id']==job_id){
            jobs.splice(i,1);
            break;
        }
    }
    localStorage.setItem("jobs",JSON.stringify(jobs))
    update_job_list()
    update_applied_seekers_list()
}
(function() {
    function toJSONString( form ) {
        _("job_id").value=Math.floor(Math.random() * Math.floor(3000))
        _("seekers_applied_tmp").value=Math.floor(Math.random() * Math.floor(100))
        var not_mandatory_field=["branch"];
        var obj = {};
        var elements = form.querySelectorAll( "input, select, textarea" );
        for( var i = 0; i < elements.length; ++i ) {
            var element = elements[i];
            var name = element.name;
            var value = element.value;
            if( name ) {
                obj[ name ] = value;
            }
            if(name!=""&&value==""&&!not_mandatory_field.includes(name)){alert( name +" is required");throw new Error( name +" is required");}

        }
        //obj['img']=_("preview_img").src.replace(location.href,"")
        return JSON.stringify( obj );
    }
    document.addEventListener( "DOMContentLoaded", function() {
        var form = document.getElementById("add_job_form_html");
        if(form!=undefined){
        //var output = document.getElementById( "output" );
        form.addEventListener( "submit", function( e ) {
            e.preventDefault();
            var json = toJSONString( this );
            //alert(json);
            console.log(json);
            jobs.push(JSON.parse(json))
            alert(json)
            // localStorage.setItem("jobs",JSON.stringify(jobs))
            // window.location="/employer_dash/"

/*
                loading_scren_toggle()
                postData("http://127.0.0.1//upcjmi/server/index.php?update_profile",json)
                //.then(data => console.log(data)) // JSON-string from `response.json()` call
                .then(function(data) {loading_scren_toggle();if(data.data=="profile updated successfully"){
                    location.href="#!home";alert(data.data);
                    _("dp_desktop").src=_("dp_mobile").src=document.getElementsByName("preview_img")[0].src;
                    }else{
                        alert(data.data)
                    }

                })
                .catch(error => console.error(error));
                */
        }, false);}
        
    });
})();
function toJSONString( form ) {
    var not_mandatory_field=["branch"];
    var obj = {};
    var elements = form.querySelectorAll( "input, select, textarea" );
    for( var i = 0; i < elements.length; ++i ) {
        var element = elements[i];
        var value = element.value;
        var name = element.name;
        if(element.getAttribute("iform_init")!=null){
            var input_data=JSON.parse(element.getAttribute("iform_init"))
            required=input_data['alert']
            alert_name = input_data['name'];
        }else{
            required=null;
        }
        if( name ) {
            obj[ name ] = value;
        }
        if((name!=""&&value==""&&!not_mandatory_field.includes(name))&&required){alert( alert_name +" is required");throw new Error( alert_name +" is required");}
    }
    //obj['img']=_("preview_img").src.replace(location.href,"")
    return JSON.stringify( obj );
}
function submit_iform(e){
    if(e.form.getAttribute("iform")!=null){
        alert(toJSONString(e.form))
    }
}