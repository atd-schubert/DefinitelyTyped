// Type definitions for negotiator 0.6.0
// Project: https://github.com/jshttp/negotiator
// Definitions by: Arne Schubert <https://github.com/atd-schubert>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/* =================== USAGE ===================
 import * as Negotiator from "negotiator";
 var negotiator = new Negotiator(request);
 =============================================== */

/// <reference path="../node/node.d.ts" />

declare module "negotiator" {
	import * as http from "http";

	class Negotiator {
		constructor (request: http.IncomingMessage);

		request: http.IncomingMessage;

		// Accept negotiation
		charset(availableMediaType?: string[]): string;
		charsets(availableMediaType?: string[]): string[];

		encoding(availableMediaType?: string[]): string;
		encodings(availableMediaType?: string[]): string[];

		language(availableLanguages?: string[]): string;
		languages(availableLanguages?: string[]): string[];

		mediaType(availableMediaType?: string[]): string;
		mediaTypes(availableMediaType?: string[]): string[];
	}

	export = Negotiator;
}
