var voiceShowPanelInput = "voiceShowPanel";
var voiceHidePanelInput = "voiceHidePanel";

var voiceControlPanelInput = "voiceControlPanel";

var initVoice = function() {
    if (annyang) {
        var commands = {
            'show (me|us) panel *panel': function(panel) {
                Shiny.onInputChange(voiceShowPanelInput, panel);
            },
            'hide panel *panel': function(panel) {
                Shiny.onInputChange(voiceHidePanelInput, panel);
            },
            'control panel *panel': function(panel) {
                Shiny.onInputChange(voiceControlPanelInput, panel);
            },
        };
        annyang.addCommands(commands);
        annyang.start();
        }
};

$(function() {
    setTimeout(initVoice, 10);
});
