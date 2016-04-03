/// <reference path="negotiator.d.ts" />

import Negotiator = require('negotiator');

import * as http from "http";

var incomingMessage: http.IncomingMessage,
	listOfStrings: string[],
	negotiator: Negotiator,
	str: string;


negotiator = new Negotiator(incomingMessage);

incomingMessage = negotiator.request;

str = negotiator.charset(listOfStrings);
listOfStrings = negotiator.charsets(listOfStrings);

str = negotiator.encoding(listOfStrings);
listOfStrings = negotiator.encodings(listOfStrings);

str = negotiator.language(listOfStrings);
listOfStrings = negotiator.languages(listOfStrings);

str = negotiator.mediaType(listOfStrings);
listOfStrings = negotiator.mediaTypes(listOfStrings);
