Introduction
------------

This module contains fundamental zip files manipulation functions to implement in an npm project.

## Installation
Install via npm:
    
    npm i os-zip-handler


## Usage       
Require zip handler:
        
    var zh = require("os-zip-handler")

## Functions and signatures:

    /**
     * Will extract a bunch of zips, from their archive, each to a given destination
     *
     * @param zips -> could be a dictionary {zipPath: destinationPath} or an array (in this scenario
     * the zip will be extracted in the directory they contain)
     * @param createIndividualDirs -> will create a directory for each extracted zip to keep
     * things in order
     */
    extractZips: async function (zips, createIndividualDirs=true) 

And more...


## Links -> see more tools
* [os-tools-npm](https://github.com/osfunapps/os-tools-npm) -> This module contains fundamental functions to implement in an npm project
* [os-file-handler-npm](https://github.com/osfunapps/os-file-handler-npm) -> This module contains fundamental files manipulation functions to implement in an npm project
* [os-file-stream-handler-npm](https://github.com/osfunapps/os-file-stream-handler-npm) -> This module contains read/write and more advanced operations on files
* [os-xml-handler-npm](https://github.com/osfunapps/os-xml-handler-npm) -> This module will build, read and manipulate an xml file. Other handy stuff is also available, like search for specific nodes

[GitHub - osfunappsapps](https://github.com/osfunapps)



## Licence
ISC