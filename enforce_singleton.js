/*jslint node: true */
"use strict";

if (global._bDragonBtmCoreLoaded)
	throw Error("Looks like you are loading multiple copies of btmcore, which is not supported.\nRunnung 'npm dedupe' might help.");

global._bDragonBtmCoreLoaded = true;
