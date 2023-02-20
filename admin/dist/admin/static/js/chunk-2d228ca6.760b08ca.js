(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d228ca6"],{db4f:function(e,n,t){"use strict";t.r(n),t.d(n,"setupMode",(function(){return Ce}));var r,i,o,a,u,c,s,d,f,l,g,h,p,m,v,y=monaco.Promise,b=12e4,_=function(){function e(e){var n=this;this._defaults=e,this._worker=null,this._idleCheckInterval=setInterval((function(){return n._checkIfIdle()}),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange((function(){return n._stopWorker()}))}return e.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},e.prototype.dispose=function(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()},e.prototype._checkIfIdle=function(){if(this._worker){var e=Date.now()-this._lastUsedTime;e>b&&this._stopWorker()}},e.prototype._getClient=function(){return this._lastUsedTime=Date.now(),this._client||(this._worker=monaco.editor.createWebWorker({moduleId:"vs/language/css/cssWorker",label:this._defaults.languageId,createData:{languageSettings:this._defaults.diagnosticsOptions,languageId:this._defaults.languageId}}),this._client=this._worker.getProxy()),this._client},e.prototype.getLanguageServiceWorker=function(){for(var e,n=this,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return w(this._getClient().then((function(n){e=n})).then((function(e){return n._worker.withSyncedResources(t)})).then((function(n){return e})))},e}();function w(e){var n,t,r=new y((function(e,r){n=e,t=r}),(function(){}));return e.then(n,t),r}(function(e){function n(e,n){return{line:e,character:n}}function t(e){var n=e;return Q.objectLiteral(n)&&Q.number(n.line)&&Q.number(n.character)}e.create=n,e.is=t})(r||(r={})),function(e){function n(e,n,t,i){if(Q.number(e)&&Q.number(n)&&Q.number(t)&&Q.number(i))return{start:r.create(e,n),end:r.create(t,i)};if(r.is(e)&&r.is(n))return{start:e,end:n};throw new Error("Range#create called with invalid arguments["+e+", "+n+", "+t+", "+i+"]")}function t(e){var n=e;return Q.objectLiteral(n)&&r.is(n.start)&&r.is(n.end)}e.create=n,e.is=t}(i||(i={})),function(e){function n(e,n){return{uri:e,range:n}}function t(e){var n=e;return Q.defined(n)&&i.is(n.range)&&(Q.string(n.uri)||Q.undefined(n.uri))}e.create=n,e.is=t}(o||(o={})),function(e){function n(e,n,t,r){return{red:e,green:n,blue:t,alpha:r}}function t(e){var n=e;return Q.number(n.red)&&Q.number(n.green)&&Q.number(n.blue)&&Q.number(n.alpha)}e.create=n,e.is=t}(a||(a={})),function(e){function n(e,n){return{range:e,color:n}}function t(e){var n=e;return i.is(n.range)&&a.is(n.color)}e.create=n,e.is=t}(u||(u={})),function(e){function n(e,n,t){return{label:e,textEdit:n,additionalTextEdits:t}}function t(e){var n=e;return Q.string(n.label)&&(Q.undefined(n.textEdit)||p.is(n))&&(Q.undefined(n.additionalTextEdits)||Q.typedArray(n.additionalTextEdits,p.is))}e.create=n,e.is=t}(c||(c={})),function(e){e["Comment"]="comment",e["Imports"]="imports",e["Region"]="region"}(s||(s={})),function(e){function n(e,n,t,r,i){var o={startLine:e,endLine:n};return Q.defined(t)&&(o.startCharacter=t),Q.defined(r)&&(o.endCharacter=r),Q.defined(i)&&(o.kind=i),o}function t(e){var n=e;return Q.number(n.startLine)&&Q.number(n.startLine)&&(Q.undefined(n.startCharacter)||Q.number(n.startCharacter))&&(Q.undefined(n.endCharacter)||Q.number(n.endCharacter))&&(Q.undefined(n.kind)||Q.string(n.kind))}e.create=n,e.is=t}(d||(d={})),function(e){function n(e,n){return{location:e,message:n}}function t(e){var n=e;return Q.defined(n)&&o.is(n.location)&&Q.string(n.message)}e.create=n,e.is=t}(f||(f={})),function(e){e.Error=1,e.Warning=2,e.Information=3,e.Hint=4}(l||(l={})),function(e){function n(e,n,t,r,i,o){var a={range:e,message:n};return Q.defined(t)&&(a.severity=t),Q.defined(r)&&(a.code=r),Q.defined(i)&&(a.source=i),Q.defined(o)&&(a.relatedInformation=o),a}function t(e){var n=e;return Q.defined(n)&&i.is(n.range)&&Q.string(n.message)&&(Q.number(n.severity)||Q.undefined(n.severity))&&(Q.number(n.code)||Q.string(n.code)||Q.undefined(n.code))&&(Q.string(n.source)||Q.undefined(n.source))&&(Q.undefined(n.relatedInformation)||Q.typedArray(n.relatedInformation,f.is))}e.create=n,e.is=t}(g||(g={})),function(e){function n(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var i={title:e,command:n};return Q.defined(t)&&t.length>0&&(i.arguments=t),i}function t(e){var n=e;return Q.defined(n)&&Q.string(n.title)&&Q.string(n.command)}e.create=n,e.is=t}(h||(h={})),function(e){function n(e,n){return{range:e,newText:n}}function t(e,n){return{range:{start:e,end:e},newText:n}}function r(e){return{range:e,newText:""}}function o(e){var n=e;return Q.objectLiteral(n)&&Q.string(n.newText)&&i.is(n.range)}e.replace=n,e.insert=t,e.del=r,e.is=o}(p||(p={})),function(e){function n(e,n){return{textDocument:e,edits:n}}function t(e){var n=e;return Q.defined(n)&&x.is(n.textDocument)&&Array.isArray(n.edits)}e.create=n,e.is=t}(m||(m={})),function(e){function n(e){var n=e;return n&&(void 0!==n.changes||void 0!==n.documentChanges)&&(void 0===n.documentChanges||Q.typedArray(n.documentChanges,m.is))}e.is=n}(v||(v={}));var k,x,C,E,I,T,S,M,P,R,A,D,F,O,L,j,W,N=function(){function e(e){this.edits=e}return e.prototype.insert=function(e,n){this.edits.push(p.insert(e,n))},e.prototype.replace=function(e,n){this.edits.push(p.replace(e,n))},e.prototype.delete=function(e){this.edits.push(p.del(e))},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e}();(function(){function e(e){var n=this;this._textEditChanges=Object.create(null),e&&(this._workspaceEdit=e,e.documentChanges?e.documentChanges.forEach((function(e){var t=new N(e.edits);n._textEditChanges[e.textDocument.uri]=t})):e.changes&&Object.keys(e.changes).forEach((function(t){var r=new N(e.changes[t]);n._textEditChanges[t]=r})))}Object.defineProperty(e.prototype,"edit",{get:function(){return this._workspaceEdit},enumerable:!0,configurable:!0}),e.prototype.getTextEditChange=function(e){if(x.is(e)){if(this._workspaceEdit||(this._workspaceEdit={documentChanges:[]}),!this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for versioned document changes.");var n=e,t=this._textEditChanges[n.uri];if(!t){var r=[],i={textDocument:n,edits:r};this._workspaceEdit.documentChanges.push(i),t=new N(r),this._textEditChanges[n.uri]=t}return t}if(this._workspaceEdit||(this._workspaceEdit={changes:Object.create(null)}),!this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");t=this._textEditChanges[e];if(!t){r=[];this._workspaceEdit.changes[e]=r,t=new N(r),this._textEditChanges[e]=t}return t}})();(function(e){function n(e){return{uri:e}}function t(e){var n=e;return Q.defined(n)&&Q.string(n.uri)}e.create=n,e.is=t})(k||(k={})),function(e){function n(e,n){return{uri:e,version:n}}function t(e){var n=e;return Q.defined(n)&&Q.string(n.uri)&&Q.number(n.version)}e.create=n,e.is=t}(x||(x={})),function(e){function n(e,n,t,r){return{uri:e,languageId:n,version:t,text:r}}function t(e){var n=e;return Q.defined(n)&&Q.string(n.uri)&&Q.string(n.languageId)&&Q.number(n.version)&&Q.string(n.text)}e.create=n,e.is=t}(C||(C={})),function(e){e.PlainText="plaintext",e.Markdown="markdown"}(E||(E={})),function(e){function n(n){var t=n;return t===e.PlainText||t===e.Markdown}e.is=n}(E||(E={})),function(e){function n(e){var n=e;return Q.objectLiteral(e)&&E.is(n.kind)&&Q.string(n.value)}e.is=n}(I||(I={})),function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25}(T||(T={})),function(e){e.PlainText=1,e.Snippet=2}(S||(S={})),function(e){function n(e){return{label:e}}e.create=n}(M||(M={})),function(e){function n(e,n){return{items:e||[],isIncomplete:!!n}}e.create=n}(P||(P={})),function(e){function n(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}function t(e){var n=e;return Q.string(n)||Q.objectLiteral(n)&&Q.string(n.language)&&Q.string(n.value)}e.fromPlainText=n,e.is=t}(R||(R={})),function(e){function n(e){var n=e;return Q.objectLiteral(n)&&(I.is(n.contents)||R.is(n.contents)||Q.typedArray(n.contents,R.is))&&(void 0===e.range||i.is(e.range))}e.is=n}(A||(A={})),function(e){function n(e,n){return n?{label:e,documentation:n}:{label:e}}e.create=n}(D||(D={})),function(e){function n(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var i={label:e};return Q.defined(n)&&(i.documentation=n),Q.defined(t)?i.parameters=t:i.parameters=[],i}e.create=n}(F||(F={})),function(e){e.Text=1,e.Read=2,e.Write=3}(O||(O={})),function(e){function n(e,n){var t={range:e};return Q.number(n)&&(t.kind=n),t}e.create=n}(L||(L={})),function(e){e.File=1,e.Module=2,e.Namespace=3,e.Package=4,e.Class=5,e.Method=6,e.Property=7,e.Field=8,e.Constructor=9,e.Enum=10,e.Interface=11,e.Function=12,e.Variable=13,e.Constant=14,e.String=15,e.Number=16,e.Boolean=17,e.Array=18,e.Object=19,e.Key=20,e.Null=21,e.EnumMember=22,e.Struct=23,e.Event=24,e.Operator=25,e.TypeParameter=26}(j||(j={})),function(e){function n(e,n,t,r,i){var o={name:e,kind:n,location:{uri:r,range:t}};return i&&(o.containerName=i),o}e.create=n}(W||(W={}));var H,K,V,U,z,B=function(){function e(){}return e}();(function(e){function n(e,n,t,r,i,o){var a={name:e,detail:n,kind:t,range:r,selectionRange:i};return void 0!==o&&(a.children=o),a}function t(e){var n=e;return n&&Q.string(n.name)&&Q.string(n.detail)&&Q.number(n.kind)&&i.is(n.range)&&i.is(n.selectionRange)&&(void 0===n.deprecated||Q.boolean(n.deprecated))&&(void 0===n.children||Array.isArray(n.children))}e.create=n,e.is=t})(B||(B={})),function(e){e.QuickFix="quickfix",e.Refactor="refactor",e.RefactorExtract="refactor.extract",e.RefactorInline="refactor.inline",e.RefactorRewrite="refactor.rewrite",e.Source="source",e.SourceOrganizeImports="source.organizeImports"}(H||(H={})),function(e){function n(e,n){var t={diagnostics:e};return void 0!==n&&null!==n&&(t.only=n),t}function t(e){var n=e;return Q.defined(n)&&Q.typedArray(n.diagnostics,g.is)&&(void 0===n.only||Q.typedArray(n.only,Q.string))}e.create=n,e.is=t}(K||(K={})),function(e){function n(e,n,t){var r={title:e};return h.is(n)?r.command=n:r.edit=n,void 0!==t&&(r.kind=t),r}function t(e){var n=e;return n&&Q.string(n.title)&&(void 0===n.diagnostics||Q.typedArray(n.diagnostics,g.is))&&(void 0===n.kind||Q.string(n.kind))&&(void 0!==n.edit||void 0!==n.command)&&(void 0===n.command||h.is(n.command))&&(void 0===n.edit||v.is(n.edit))}e.create=n,e.is=t}(V||(V={})),function(e){function n(e,n){var t={range:e};return Q.defined(n)&&(t.data=n),t}function t(e){var n=e;return Q.defined(n)&&i.is(n.range)&&(Q.undefined(n.command)||h.is(n.command))}e.create=n,e.is=t}(U||(U={})),function(e){function n(e,n){return{tabSize:e,insertSpaces:n}}function t(e){var n=e;return Q.defined(n)&&Q.number(n.tabSize)&&Q.boolean(n.insertSpaces)}e.create=n,e.is=t}(z||(z={}));var q=function(){function e(){}return e}();(function(e){function n(e,n,t){return{range:e,target:n,data:t}}function t(e){var n=e;return Q.defined(n)&&i.is(n.range)&&(Q.undefined(n.target)||Q.string(n.target))}e.create=n,e.is=t})(q||(q={}));var J,$;(function(e){function n(e,n,t,r){return new G(e,n,t,r)}function t(e){var n=e;return!!(Q.defined(n)&&Q.string(n.uri)&&(Q.undefined(n.languageId)||Q.string(n.languageId))&&Q.number(n.lineCount)&&Q.func(n.getText)&&Q.func(n.positionAt)&&Q.func(n.offsetAt))}function r(e,n){for(var t=e.getText(),r=i(n,(function(e,n){var t=e.range.start.line-n.range.start.line;return 0===t?e.range.start.character-n.range.start.character:t})),o=t.length,a=r.length-1;a>=0;a--){var u=r[a],c=e.offsetAt(u.range.start),s=e.offsetAt(u.range.end);if(!(s<=o))throw new Error("Ovelapping edit");t=t.substring(0,c)+u.newText+t.substring(s,t.length),o=c}return t}function i(e,n){if(e.length<=1)return e;var t=e.length/2|0,r=e.slice(0,t),o=e.slice(t);i(r,n),i(o,n);var a=0,u=0,c=0;while(a<r.length&&u<o.length){var s=n(r[a],o[u]);e[c++]=s<=0?r[a++]:o[u++]}while(a<r.length)e[c++]=r[a++];while(u<o.length)e[c++]=o[u++];return e}e.create=n,e.is=t,e.applyEdits=r})(J||(J={})),function(e){e.Manual=1,e.AfterDelay=2,e.FocusOut=3}($||($={}));var Q,G=function(){function e(e,n,t,r){this._uri=e,this._languageId=n,this._version=t,this._content=r,this._lineOffsets=null}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!0,configurable:!0}),e.prototype.getText=function(e){if(e){var n=this.offsetAt(e.start),t=this.offsetAt(e.end);return this._content.substring(n,t)}return this._content},e.prototype.update=function(e,n){this._content=e.text,this._version=n,this._lineOffsets=null},e.prototype.getLineOffsets=function(){if(null===this._lineOffsets){for(var e=[],n=this._content,t=!0,r=0;r<n.length;r++){t&&(e.push(r),t=!1);var i=n.charAt(r);t="\r"===i||"\n"===i,"\r"===i&&r+1<n.length&&"\n"===n.charAt(r+1)&&r++}t&&n.length>0&&e.push(n.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var n=this.getLineOffsets(),t=0,i=n.length;if(0===i)return r.create(0,e);while(t<i){var o=Math.floor((t+i)/2);n[o]>e?i=o:t=o+1}var a=t-1;return r.create(a,e-n[a])},e.prototype.offsetAt=function(e){var n=this.getLineOffsets();if(e.line>=n.length)return this._content.length;if(e.line<0)return 0;var t=n[e.line],r=e.line+1<n.length?n[e.line+1]:this._content.length;return Math.max(Math.min(t+e.character,r),t)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!0,configurable:!0}),e}();(function(e){var n=Object.prototype.toString;function t(e){return"undefined"!==typeof e}function r(e){return"undefined"===typeof e}function i(e){return!0===e||!1===e}function o(e){return"[object String]"===n.call(e)}function a(e){return"[object Number]"===n.call(e)}function u(e){return"[object Function]"===n.call(e)}function c(e){return null!==e&&"object"===typeof e}function s(e,n){return Array.isArray(e)&&e.every(n)}e.defined=t,e.undefined=r,e.boolean=i,e.string=o,e.number=a,e.func=u,e.objectLiteral=c,e.typedArray=s})(Q||(Q={}));var X=monaco.Uri,Y=function(){function e(e,n,t){var r=this;this._languageId=e,this._worker=n,this._disposables=[],this._listener=Object.create(null);var i=function(e){var n,t=e.getModeId();t===r._languageId&&(r._listener[e.uri.toString()]=e.onDidChangeContent((function(){clearTimeout(n),n=setTimeout((function(){return r._doValidate(e.uri,t)}),500)})),r._doValidate(e.uri,t))},o=function(e){monaco.editor.setModelMarkers(e,r._languageId,[]);var n=e.uri.toString(),t=r._listener[n];t&&(t.dispose(),delete r._listener[n])};this._disposables.push(monaco.editor.onDidCreateModel(i)),this._disposables.push(monaco.editor.onWillDisposeModel(o)),this._disposables.push(monaco.editor.onDidChangeModelLanguage((function(e){o(e.model),i(e.model)}))),t.onDidChange((function(e){monaco.editor.getModels().forEach((function(e){e.getModeId()===r._languageId&&(o(e),i(e))}))})),this._disposables.push({dispose:function(){for(var e in r._listener)r._listener[e].dispose()}}),monaco.editor.getModels().forEach(i)}return e.prototype.dispose=function(){this._disposables.forEach((function(e){return e&&e.dispose()})),this._disposables=[]},e.prototype._doValidate=function(e,n){this._worker(e).then((function(n){return n.doValidation(e.toString())})).then((function(t){var r=t.map((function(n){return ee(e,n)})),i=monaco.editor.getModel(e);i.getModeId()===n&&monaco.editor.setModelMarkers(i,n,r)})).done(void 0,(function(e){console.error(e)}))},e}();function Z(e){switch(e){case l.Error:return monaco.MarkerSeverity.Error;case l.Warning:return monaco.MarkerSeverity.Warning;case l.Information:return monaco.MarkerSeverity.Info;case l.Hint:return monaco.MarkerSeverity.Hint;default:return monaco.MarkerSeverity.Info}}function ee(e,n){var t="number"===typeof n.code?String(n.code):n.code;return{severity:Z(n.severity),startLineNumber:n.range.start.line+1,startColumn:n.range.start.character+1,endLineNumber:n.range.end.line+1,endColumn:n.range.end.character+1,message:n.message,code:t,source:n.source}}function ne(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function te(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}function re(e){if(e)return new monaco.Range(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function ie(e){var n=monaco.languages.CompletionItemKind;switch(e){case T.Text:return n.Text;case T.Method:return n.Method;case T.Function:return n.Function;case T.Constructor:return n.Constructor;case T.Field:return n.Field;case T.Variable:return n.Variable;case T.Class:return n.Class;case T.Interface:return n.Interface;case T.Module:return n.Module;case T.Property:return n.Property;case T.Unit:return n.Unit;case T.Value:return n.Value;case T.Enum:return n.Enum;case T.Keyword:return n.Keyword;case T.Snippet:return n.Snippet;case T.Color:return n.Color;case T.File:return n.File;case T.Reference:return n.Reference}return n.Property}function oe(e){if(e)return{range:re(e.range),text:e.newText}}var ae=function(){function e(e){this._worker=e}return Object.defineProperty(e.prototype,"triggerCharacters",{get:function(){return[" ",":"]},enumerable:!0,configurable:!0}),e.prototype.provideCompletionItems=function(e,n,t){e.getWordUntilPosition(n);var r=e.uri;return xe(t,this._worker(r).then((function(e){return e.doComplete(r.toString(),ne(n))})).then((function(e){if(e){var n=e.items.map((function(e){var n={label:e.label,insertText:e.insertText,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,kind:ie(e.kind)};return e.textEdit&&(n.range=re(e.textEdit.range),n.insertText=e.textEdit.newText),e.additionalTextEdits&&(n.additionalTextEdits=e.additionalTextEdits.map(oe)),e.insertTextFormat===S.Snippet&&(n.insertText={value:n.insertText}),n}));return{isIncomplete:e.isIncomplete,items:n}}})))},e}();function ue(e){return e&&"object"===typeof e&&"string"===typeof e.kind}function ce(e){return"string"===typeof e?{value:e}:ue(e)?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"}}function se(e){if(e)return Array.isArray(e)?e.map(ce):[ce(e)]}var de=function(){function e(e){this._worker=e}return e.prototype.provideHover=function(e,n,t){var r=e.uri;return xe(t,this._worker(r).then((function(e){return e.doHover(r.toString(),ne(n))})).then((function(e){if(e)return{range:re(e.range),contents:se(e.contents)}})))},e}();function fe(e){switch(e){case O.Read:return monaco.languages.DocumentHighlightKind.Read;case O.Write:return monaco.languages.DocumentHighlightKind.Write;case O.Text:return monaco.languages.DocumentHighlightKind.Text}return monaco.languages.DocumentHighlightKind.Text}var le=function(){function e(e){this._worker=e}return e.prototype.provideDocumentHighlights=function(e,n,t){var r=e.uri;return xe(t,this._worker(r).then((function(e){return e.findDocumentHighlights(r.toString(),ne(n))})).then((function(e){if(e)return e.map((function(e){return{range:re(e.range),kind:fe(e.kind)}}))})))},e}();function ge(e){return{uri:X.parse(e.uri),range:re(e.range)}}var he=function(){function e(e){this._worker=e}return e.prototype.provideDefinition=function(e,n,t){var r=e.uri;return xe(t,this._worker(r).then((function(e){return e.findDefinition(r.toString(),ne(n))})).then((function(e){if(e)return[ge(e)]})))},e}(),pe=function(){function e(e){this._worker=e}return e.prototype.provideReferences=function(e,n,t,r){var i=e.uri;return xe(r,this._worker(i).then((function(e){return e.findReferences(i.toString(),ne(n))})).then((function(e){if(e)return e.map(ge)})))},e}();function me(e){if(e&&e.changes){var n=[];for(var t in e.changes){for(var r=[],i=0,o=e.changes[t];i<o.length;i++){var a=o[i];r.push({range:re(a.range),text:a.newText})}n.push({resource:X.parse(t),edits:r})}return{edits:n}}}var ve=function(){function e(e){this._worker=e}return e.prototype.provideRenameEdits=function(e,n,t,r){var i=e.uri;return xe(r,this._worker(i).then((function(e){return e.doRename(i.toString(),ne(n),t)})).then((function(e){return me(e)})))},e}();function ye(e){var n=monaco.languages.SymbolKind;switch(e){case j.File:return n.Array;case j.Module:return n.Module;case j.Namespace:return n.Namespace;case j.Package:return n.Package;case j.Class:return n.Class;case j.Method:return n.Method;case j.Property:return n.Property;case j.Field:return n.Field;case j.Constructor:return n.Constructor;case j.Enum:return n.Enum;case j.Interface:return n.Interface;case j.Function:return n.Function;case j.Variable:return n.Variable;case j.Constant:return n.Constant;case j.String:return n.String;case j.Number:return n.Number;case j.Boolean:return n.Boolean;case j.Array:return n.Array}return n.Function}var be=function(){function e(e){this._worker=e}return e.prototype.provideDocumentSymbols=function(e,n){var t=e.uri;return xe(n,this._worker(t).then((function(e){return e.findDocumentSymbols(t.toString())})).then((function(e){if(e)return e.map((function(e){return{name:e.name,detail:"",containerName:e.containerName,kind:ye(e.kind),range:re(e.location.range),selectionRange:re(e.location.range)}}))})))},e}(),_e=function(){function e(e){this._worker=e}return e.prototype.provideDocumentColors=function(e,n){var t=e.uri;return xe(n,this._worker(t).then((function(e){return e.findDocumentColors(t.toString())})).then((function(e){if(e)return e.map((function(e){return{color:e.color,range:re(e.range)}}))})))},e.prototype.provideColorPresentations=function(e,n,t){var r=e.uri;return xe(t,this._worker(r).then((function(e){return e.getColorPresentations(r.toString(),n.color,te(n.range))})).then((function(e){if(e)return e.map((function(e){var n={label:e.label};return e.textEdit&&(n.textEdit=oe(e.textEdit)),e.additionalTextEdits&&(n.additionalTextEdits=e.additionalTextEdits.map(oe)),n}))})))},e}(),we=function(){function e(e){this._worker=e}return e.prototype.provideFoldingRanges=function(e,n,t){var r=e.uri;return xe(t,this._worker(r).then((function(e){return e.provideFoldingRanges(r.toString(),n)})).then((function(e){if(e)return e.map((function(e){var n={start:e.startLine+1,end:e.endLine+1};return"undefined"!==typeof e.kind&&(n.kind=ke(e.kind)),n}))})))},e}();function ke(e){switch(e){case s.Comment:return monaco.languages.FoldingRangeKind.Comment;case s.Imports:return monaco.languages.FoldingRangeKind.Imports;case s.Region:return monaco.languages.FoldingRangeKind.Region}}function xe(e,n){return e.onCancellationRequested((function(){return n.cancel()})),n}function Ce(e){var n=new _(e),t=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return n.getLanguageServiceWorker.apply(n,[e].concat(t))},r=e.languageId;monaco.languages.registerCompletionItemProvider(r,new ae(t)),monaco.languages.registerHoverProvider(r,new de(t)),monaco.languages.registerDocumentHighlightProvider(r,new le(t)),monaco.languages.registerDefinitionProvider(r,new he(t)),monaco.languages.registerReferenceProvider(r,new pe(t)),monaco.languages.registerDocumentSymbolProvider(r,new be(t)),monaco.languages.registerRenameProvider(r,new ve(t)),monaco.languages.registerColorProvider(r,new _e(t)),monaco.languages.registerFoldingRangeProvider(r,new we(t)),new Y(r,t,e)}}}]);