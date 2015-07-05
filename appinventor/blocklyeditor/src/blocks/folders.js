'use strict';

goog.provide('Blockly.Blocks.folder');

Blockly.Blocks['folder'] = {
    category: "Folders",
    init: function() {
        this.setColour(Blockly.FOLDER_CATEGORY_HUE);
        var name = Blockly.Folder.findLegalName(
            Blockly.Msg.LANG_FOLDERS_FOLDER, this);
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput(name, Blockly.AIFolder.renameFolder), 'NAME');
            //.appendField(new Blockly.FieldTextBlockInput('FOLDER NAME'), 'TEXT');
        //this.setMutator(new Blockly.Mutator(['procedures_mutatorarg']));
        this.setFolderIcon(new Blockly.FolderIcon());
    },
    decompose: function(workspace){
        return Blockly.decompose(workspace,'folder',this);
    },
    getFolderName: function(){
        return this.getFieldValue('NAME');
    },
    customContextMenu: function (options) {
      if(!this.expandedFolder_)
        return;
      var metrics = this.miniworkspace.getMetrics();
      var folderName = this.getFolderName();
      var captureOption =
            { enabled: true,
              text: 'Capture Mini-Workspace',
              callback: function () { Blockly.ExportBlocksImage.onclickExportBlocks(metrics, "foldername-" + folderName, folderName + ".png");}
            };
      options.push(captureOption);
    },
    compose: Blockly.compose,
    typeblock: [{ translatedName: Blockly.Msg.LANG_FOLDERS_FOLDER }]
};
