var spawnSync = require('child_process').spawnSync;

var iTunes_script = "airplay_control.scpt";

module.exports = iTunesSmarl;


function iTunesSmarl() {
};

var runscript = function(command, value){
    var args = [iTunes_script, command];
    if( value != null ) {
        args.push(value);
    }
    var cmdOutput = spawnSync('/usr/bin/osascript', args);
    return cmdOutput.stdout.trim();
}

iTunesSmarl.prototype.ListAirplay = function(){
    return runscript("list").split("|||");
}

iTunesSmarl.prototype.CurrentAirplay = function(){
    return runscript("current");
}

iTunesSmarl.prototype.SetAirplay = function(dev){
    return runscript("set", dev);
}

iTunesSmarl.prototype.RemoveAirplay = function(dev){
    return runscript("remove", dev);
}

iTunesSmarl.prototype.Playlists = function(){
    return runscript("playlists", dev);
}

iTunesSmarl.prototype.Play = function(playlist){
    return runscript("play", playlist);
}

iTunesSmarl.prototype.Stop = function(){
    return runscript("stop");
}

