<?php
$array='<option value="Machine Operator / Helper">Machine Operator / Helper</option>
<option value="IT / ITeS">IT / ITeS</option>
<option value="Driver (Private Vehicles)">Driver (Private Vehicles)</option>
<option value="Driver (Commercial Vehicles)">Driver (Commercial Vehicles)</option>
<option value="Driver (Heavy Vehicles - Bus, Truck, etc.)">Driver (Heavy Vehicles - Bus, Truck, etc.)</option>
<option value="Bouncer">Bouncer</option>
<option value="Security Staff">Security Staff</option>
<option value="Security Guard">Security Guard</option>
<option value="Security Guard (Armed)">Security Guard (Armed)</option>
<option value="PSO (Personal Security Officer)">PSO (Personal Security Officer)</option>
<option value="Computer Operator">Computer Operator</option>
<option value="Data Entry Operator">Data Entry Operator</option>
<option value="Plumber">Plumber</option>
<option value="Electrician">Electrician</option>
<option value="Housekeeping Staff">Housekeeping Staff</option>
<option value="Retail Sales Staff">Retail Sales Staff</option>
<option value="Retail Store Keeper">Retail Store Keeper</option>
<option value="Cashier">Cashier</option>';
//$fl_array = preg_grep("(?<=\>)(.*?)(?=\<)", $array);
preg_match_all('/(?<=\">)(.*?)(?=\<\/option>)/',$array, $out, PREG_PATTERN_ORDER);

for($i=0;$i<sizeof($out);$i++){
    echo '"'.$out[0][$i].'",';
}
?>