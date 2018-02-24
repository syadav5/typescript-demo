'use strict';
const obj = { linkName: 'myAccounts', linkUrl: '/accounts', linkId: 'acct' };

var obj2 = obj;
obj2.linkName = 'New Url';
const { linkName: ln, linkUrl: lu, linkId: lid } = obj;
document.write('linkname=' + ln + ' and link Url = ' + lu);
document.write('\n');
document.write(obj2.linkId);
const { linkName, linkUrl, linkId } = obj2;
document.write('\n');
document.write('linkname=' + linkName + ' and link Url = ' + linkUrl);
var arr = ['hello', 'world', 'third'];
var [a, b] = arr;
alert(a + ',,' + b);
obj = { link: 'hello' };
alert(obj.link);

/**
 * var {a,b} =arr would return undefined;;
 */
/**
 * 
 * function destructured pattern to supply parameters to the function
 * 
 */

function f(options) {
    //This is regular approach where we pass an object for dynamic parameter list
    document.write('\n');
    document.write(options.task);

}
f({ task: 'tsc compile', lang: 'typescript' });
var defaultObj = { task: 'default', lang: 'en' };
function f2({ obj4 = defaultObj }) {
    //This is function destructured pattern
    document.write('\n');
    document.write(obj4.task);
    document.write(' and lang is ' + obj4.lang);
}
var obj3 = { task: 'compilation and build', lang: 'fr' };
f2(obj3); //not working for some reason.. will c heck out later


