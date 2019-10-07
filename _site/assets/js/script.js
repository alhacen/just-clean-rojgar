function _(a){return document.getElementById(a)}
var elems = document.querySelectorAll('.tabs');
var instance = M.Tabs.init(elems);
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelector('.modal');
    var instances = M.Modal.init(elems);
    // instances.open();
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems);
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
});

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
    /*    <tmp>    */
    var seekers=JSON.parse(localStorage.getItem("seeker_accounts"));
   // console.log(seekers)
    a=seekers;
    var flag=0;
    for(i=0;i<seekers.length;i++){
        if(seekers[i]['mobile_no']==mobile_no){
            flag=1;
            break;
        }
    }
    /*    </tmp>    */
    return flag;
    //return (mobile_no==9670820138)?1:0;
}
function seeker_auth(mobile_no,otp){
    /*
    using xhr auth user
    */
    /*    <tmp>    */
    var seekers=JSON.parse(localStorage.getItem("seeker_accounts"));
    console.log(seekers)
    a=seekers;
    var flag=0;
    for(i=0;i<seekers.length;i++){
        if(seekers[i]['mobile_no']==mobile_no && otp==otp){
            flag=1;
            sessionStorage.setItem("logged_mobile", mobile_no);
            break;
        }
    }
    /*    </tmp>    */
    return flag;
    //return (mobile_no=="9670820138" && otp=="1111")?1:0;
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
        _("seekers_applied_tmp").value=0;
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
            //console.log(json);
            jobs.push(JSON.parse(json))
           // alert(json)
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
function submit_iform(e,callback){
    if(e.form.getAttribute("iform")!=null){
        //alert(toJSONString(e.form))
        callback(toJSONString(e.form))
    }
}
/*  <tmp>   */
if(localStorage.getItem("jobs")==undefined||localStorage.getItem("jobs")=="[]"){
    localStorage.setItem("jobs", '[{"job_id":"1","job_title":"demo","job_profile":"no profile","duration":"60 days","criteria":"no creteria","experience":"if !any experience then =>0","last_date":"15-05-2019","description":"bla bla bla bla bla","seekers_applied":"0"},{"job_id":"931","seekers_applied":"0","job_title":"developer","job_description":"have to create react app","job_profile":"IT / ITeS","job_creteria":"12th Pass","job_experience":"Experience (0 to 1 yrs)"},{"job_id":"1002","seekers_applied":"0","job_title":"drill operator","job_description":"have to operate drill machine","job_profile":"Machine Operator / Helper","job_creteria":"12th Pass","job_experience":"Experience (0 to 1 yrs)"},{"job_id":"2234","seekers_applied":"0","job_title":"drive","job_description":"have to drive bus from jamia to batla house ","job_profile":"Driver (Private Vehicles)","job_creteria":"10th Pass","job_experience":"Experience (1 to 2 yrs)"},{"job_id":"125","seekers_applied":"0","job_title":"react developer","job_description":"have to create react app","job_profile":"IT / ITeS","job_creteria":"12th Pass","job_experience":"Experience (0 to 1 yrs)"},{"job_id":"935","seekers_applied":"0","job_title":"server maintainer","job_description":"have have to maintaine server","job_profile":"IT / ITeS","job_creteria":"12th Pass","job_experience":"Experience (0 to 1 yrs)"}]');
}
/*  </tmp>   */