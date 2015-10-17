var spawnSync = require('child_process').spawnSync;
var util = require('util');

var iTunes_script = "airplay_control.scpt";

module.exports = {iTunesSmarl:iTunesSmarl};


function iTunesSmarl() {
};

var runScript = function(command, value){
    var args = [__dirname + '/' + iTunes_script, command];
    if( value != null ) {
        args.push(value);
    }
    var cmdOutput = spawnSync('/usr/bin/osascript', args);
    console.error( String(cmdOutput.stderr) );
    return String(cmdOutput.stdout).trim();
}

var runScriptToArray = function(command) {
    var command_result = runScript(command).split("|||");
    return util.isArray(command_result) ? command_result : [command_result];
}

iTunesSmarl.prototype.ListAirplay = function(){
    return runScriptToArray("list");
}

iTunesSmarl.prototype.CurrentAirplay = function(){
    return runScript("current");
}

iTunesSmarl.prototype.SetAirplay = function(dev){
    return runScript("set", dev);
}

iTunesSmarl.prototype.RemoveAirplay = function(dev){
    return runScript("remove", dev);
}

iTunesSmarl.prototype.Playlists = function(){
    return runScriptToArray("playlists");
}

iTunesSmarl.prototype.Play = function(playlist){
    return runScript("play", playlist);
}

iTunesSmarl.prototype.Stop = function(){
    return runScript("stop");
}

