function _(a){return document.getElementById(a);}
function string_bw__word(string, w1, w2){
    return string.split(w1).pop().split(w2)[0];
}
function seeker_exist(mobile_no){
    /*
    using xhr check if user exist
    */
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
            //window.location="dashboard"
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
}
(function() {
    function toJSONString( form ) {
        _("job_id").value=Math.floor(Math.random() * Math.floor(3000))
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
            localStorage.setItem("jobs",JSON.stringify(jobs))
            window.location="/employer_dash/"

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
