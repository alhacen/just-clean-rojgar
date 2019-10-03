---
layout: dashboard
title: job seekers
description: just no description.
---
<div class="pages" id="home">
home
</div>
<div class="pages" id="add_job_form">
    <div>
        <div class="row">
            <div class="col s10 input-field ">
                <input id="job_description" type="text" class="validate">
                <label for="job_description">Job Description</label>
            </div>
            <div>
                <input type="button" class="btn grey" value="post">
            </div>
            <div class="col s12 input-field ">
                <select>
                <option value="" disabled selected>profile</option>
                <option value="Experience (0 to 1 yr)">asdf</option>
                <option value="Experience (1 to 2 yrs)">asdf</option>
                </select>
            </div>
        </div>
        <div>
        </div>
    </div>
</div>
<div class="pages" id="post_now_job">
    <div>
    <div class="row">
        <div class="col s8">
            <h4>Jobs: <a href="#!add_job_form" class="btn grey">New</a></h4>
        </div>
        <div class="col s2">
            <div class="col s12 input-field ">
                <input id="q" type="text" class="validate">
                <label for="q">Search</label>
            </div>
        </div>
        </div>
        <ul class="collection">
            <li class="collection-item">            
                <div class="row">
                    <div class="col s6"><a href="#!">Title</a></div>
                    <div class="col s4">Description</div>
                    <div class="col s2"><a href="#!">Delete</a></div>
                </div>
            </li>
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
<div class="pages" id="seekers_applied">
ddddddddd
</div>
<style>
    .collection li a{padding:15px!important}
    .collection div{margin:0!important}
</style>