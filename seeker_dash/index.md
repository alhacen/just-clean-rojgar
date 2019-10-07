---
layout: seeker_dash
title: job seekers
description: just no description.
theme_color: grey
---
<div class="pages" id="home">
home
</div>
<div class="pages card row" style="padding:25px" id="profile">
    <div>
        <form id="asdf" iform>
            <div class="col l4 s12 input-field con">
                <input id="candidate_name" name="candidate_name" type="text" class="validate" iform_init='{"required":true,"alert":true,"name":"Candidate Name"}'>
                <label for="candidate_name">Candidate Name</label>
            </div>
            <input type="hidden" name="otp">
            <input type="hidden" name="job_applied">
            <div class="col l8 s12 input-field ">
                <input id="address" name="address" type="text" class="validate" iform_init='{"required":true,"alert":true,"name":"Address"}'>
                <label for="address">Address</label>
            </div>
            <div class="col l4 s12 input-field ">
                <input id="mobile_no" name="mobile_no" type="text" class="validate" iform_init='{"required":true,"alert":true,"name":"Mobile No."}'>
                <label for="mobile_no">Mobile No.</label>
            </div>
            <div class="col l4 s12 input-field ">
                <input id="adhaar_no" name="adhaar_no" type="text" class="validate" iform_init='{"required":true,"alert":true,"name":"Adhaar No."}'>
                <label for="adhaar_no">Adhaar No</label>
            </div>
            <div class="col l4 s12 input-field ">
                <input id="father_name" name="father_name" type="text" class="validate" iform_init='{"required":true,"alert":true,"name":"Fathers Name"}'>
                <label for="father_name">Father's Name</label>
            </div>
            <div class="col l4 s12 input-field ">
                <select name="creteria" iform_init='{"required":true,"alert":true,"name":"Qualifications"}'>
                    <option value="" disabled selected>Educational Qualifications</option>
                    <option value="Below Class 5th">Below Class 5th</option>
                    <option value="Class 5th to 9th">Class 5th to 9th</option>
                    <option value="10th Pass">10th Pass</option>
                    <option value="12th Pass">12th Pass</option>
                    <option value="ITI">ITI</option>
                    <option value="Polytechnic">Polytechnic</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Graduate (B.A.,B.Com., B.Sc.)">Graduate (B.A.,B.Com., B.Sc.)</option>
                    <option value="Other Graduate (Any Stream)">Other Graduate (Any Stream)</option>
                    <option value="B.Tech. (Any Stream)">B.Tech. (Any Stream)</option>
                    <option value="M.Tech. (Any Stream)">M.Tech. (Any Stream)</option>
                    <option value="Post Graduate (Any Stream)">Post Graduate (Any Stream)</option>
                    <option value="MBA / PGDM (Any Stream)">MBA / PGDM (Any Stream)</option>
                </select>
            </div>
            <div class="col l4 s12 input-field ">
                <select name="job_experience" iform_init='{"required":true,"alert":true,"name":"Work Experience"}'>
                    <option value="" disabled selected>Work Experience</option>
                    <option value="Experience (0 to 1 yr)">Experience (0 to 1 yr)</option>
                    <option value="Experience (1 to 2 yrs)">Experience (1 to 2 yrs)</option>
                    <option value="Experience (2 to 5 yrs)">Experience (2 to 5 yrs)</option>
                    <option value="Experience (Above 5 yrs)">Experience (Above 5 yrs)</option>
                </select>
            </div>
            <div class="col l4 s12 input-field ">
                <select id="job_profile" name="job_profile" iform_init='{"required":true,"alert":true,"name":"Applied Position"}'>
                <option value="" disabled selected>Position applied for</option>
                </select>
            </div>
            <div class="col l6 s12 input-field ">
                <input id="work_experience" name="other_work_experience" type="text" class="validate" >
                <label for="work_experience">Work Experience</label>
            </div>
            <div class="col l6 s12 input-field ">
                <input id="additional_job_for" name="additional_applied_job" type="text" class="validate">
                <label for="additional_job_for">Mention any Additional Job Applied For</label>
            </div>
            <div class="center"><input type="button" onclick="submit_iform(this,update_seeker_profile)" value="Update" class="btn green "></div>
        </form>
    </div>
</div>
<div class="pages" id="jobs_available">
    <div>
        <div class="row">
         <ul id="seeker_available_jobs" class="collection">
            <li class="collection-item" style="cursor:pointer">   
                <div class="row">
                    <div class="col s12">Title<span class="new badge green" data-badge-caption=""><a class="white-text" onclick="seeker_job_apply()" >Apply</a></span></div> 
                </div>
            </li>
        </ul>
        </div>
    </div>
</div>
<div class="pages" id="jobs_applied">
    <div>
        <div class="row">
         <ul id="seeker_applied_jobs" class="collection">
            <li class="collection-item" style="cursor:pointer">   
                <div class="row">
                    <div class="col s12">Title<span class="new badge green" data-badge-caption=""><a class="white-text" onclick="seeker_job_apply()" >Apply</a></span></div> 
                </div>
            </li>
        </ul>
        </div>
    </div>
</div>
<style>
    /* .collection li a{padding:15px!important} */
    .collection div{margin:0!important}
</style>
<script>

/*  <tmp> */

/*  </tmp>  */
</script>