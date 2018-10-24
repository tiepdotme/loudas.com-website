#!/usr/bin/php
<?php

$website="https://www.loudas.com";
$JsonArray=Array();

$ignoredPages=Array($website.'/google320bf1ff354f76ce.html', $website.'/thanks.html');

# load xml from downloaded version or server.xml
$myXMLData=file_get_contents($website."/sitemap.xml");
$string = str_replace('&', '&amp;', $myXMLData);

$xml=simplexml_load_string($string) or die("Error: Cannot create object");

function pageTitle($url) {
    $dom = new DOMDocument('1.0');
    $dom->validateOnParse = true;
    @$dom->loadHTMLFile($url); // this warns about "new" tags like <nav> and <figure> hence the @$dom
    return $dom->getElementById("pageTitle")->textContent;
}

function pageContents($url) {
    $dom = new DOMDocument('1.0');
    $dom->validateOnParse = true;
    @$dom->loadHTMLFile($url); // this warns about "new" tags like <nav> and <figure> hence the @$dom
    return preg_replace('/^[ \t]*[\r\n]+/m', '', strip_tags($dom->getElementById("pwnzContainer")->textContent)); //strip tabs and newlines
}

$count=0;
foreach ($xml->url as $url_list) {
    if(!in_array((string)$url_list->loc, $ignoredPages)) {
        $JsonArray[$count]["url"]=(string)$url_list->loc;
        $JsonArray[$count]["title"]=pageTitle((string)$url_list->loc);
        $JsonArray[$count]["content"]=pageContents((string)$url_list->loc);
        $count++;
    }
}

echo json_encode($JsonArray);
?>
