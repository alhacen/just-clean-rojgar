---
layout: employer_dash
title: job seekers
description: just no description.
theme_color: grey
---
<div class="pages" id="home">
home
</div>
<div class="pages card" style="padding:25px" id="add_job_form">
    <div class="row">
        <div class="col back_btn" style="font-size:40px;padding:0 20 0 20px"  onclick="window.location.hash='#!'"><b><</b></div>
        <div class="center" style="font-size:40px;padding:0 10 0 10px">Post a New Job</div>
    </div>
    <div>
    <form id="add_job_form_html">
    <input type="hidden" name="job_id" id="job_id">
    <input type="hidden" name="seekers_applied" id="seekers_applied_tmp">
        <div class="row">
            <div class="col s10 input-field ">
                <input id="job_title" name="job_title" type="text" class="validate">
                <label for="job_title">Job Title</label>
            </div>
            <div>
                <input type="submit" class="btn grey" value="post">
            </div>
            <div class="col l8 s12 input-field ">
                <input id="job_description" name="job_description" type="text" class="validate">
                <label for="job_description">Job Description</label>
            </div>
            <div class="col s12 l4 input-field ">
                <select id="job_profile" name="job_profile">
                    <option value="" disabled selected>Job Profile</option>
                </select>
            </div>
            <div class="col s12 l4 input-field ">
                <select name="job_creteria">
                    <option value="" disabled selected>Job creteria</option>
                    <option value="Class 5th to 9th">Class 5th to 9th</option>
                    <option value="10th Pass">10th Pass</option>
                    <option value="12th Pass">12th Pass</option>
                    <option value="Polytechnic">Polytechnic</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Graduate(B.A.,B.Com.,B.Sc">Graduate(B.A.,B.Com.,B.Sc)</option>
                    <option value="Other Graduate(Any Stream)">Other Graduate(Any Stream)</option>
                    <option value="B.Tech(Any Stream)">B.Tech(Any Stream)</option>
                    <option value="M.Tech(Any Stream)">M.Tech(Any Stream)</option>
                    <option value="Post Greaduate(Any Stream)">Post Greaduate(Any Stream)</option>
                    <option value="MBA/PGDM(Any Stream)">MBA/PGDM(Any Stream)</option>
                </select>
            </div>
            <div class="col s12 l4 input-field ">
                <select name="job_experience">
                    <option value="" disabled selected>Experience</option>
                    <option value="Experience (0 to 1 yrs)">Experience (0 to 1 yrs)</option>
                    <option value="Experience (1 to 2 yrs)">Experience (1 to 2 yrs)</option>
                    <option value="Experience (2 to 3 yrs)">Experience (2 to 3 yrs)</option>
                    <option value="Experience (3 to 4 yrs)">Experience (3 to 4 yrs)</option>
                    <option value="Experience (above 5 yrs)">Experience (above 5 yrs)</option>
                </select>
            </div>
            <div class="col s12 l4 input-field ">
            <input type="text" class="datepicker" placeholder="Last Date For Apply">
            </div>
        </div>
        <div>
        </div>
        </form>
    </div>
</div>
<div class="pages card" style="padding:25px" id="post_new_job">
    <div>
    <div class="row">
        <div class="col s8">
            <h4>Jobs: <a href="#!add_job_form" class="btn grey">New</a></h4>
        </div>
        <!-- <div class="col s2">
            <div class="col s12 input-field ">
                <input id="q" type="text" class="validate">
                <label for="q">Search</label>
            </div>
        </div> -->
        </div>
        <ul id="employer_job_lists" class="collection">
            <li class="collection-item">            
                <div class="row">
                    <div class="col s6"><a href="#!">Title</a></div>
                    <div class="col s4">Description</div>
                    <div class="col s2"><a href="#!">Delete</a></div>
                </div>
            </li>
        </ul>
    </div>
</div>
<div class="pages card" style="padding:25px" id="seekers_applied">
    <ul id="applied_seekers_list" class="collection">
            <li class="collection-item" onclick='window.location="#!display_applied_seekers[162]"' style="cursor:pointer">   
                <div class="row">
                    <div class="col s12">Title<span class="new badge green" data-badge-caption="Applications">4</span></div> 
                </div>
            </li>
        </ul>
</div>
<div class="pages card" style="padding:25px" id="display_applied_seekers">
    <ul id="display_applied_seekers_list" class="collection">
        <li class="collection-item">            
            <div class="row">
                <div class="col s6"><a href="#!">Title</a></div>
                <div class="col s4">Description</div>
                <div class="col s2"><a href="#!">Delete</a></div>
            </div>
        </li>
    </ul>
</div>
<style>
    /* .collection li a{padding:15px!important} */
    .collection div{margin:0!important}
</style>
