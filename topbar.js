document.write('\
<div id="topbar">\
    <div class="container">\
        <div class="row">\
            <div id="last-tweets-3" class="widget-first span6 widget last-tweets">\
                <h3>Last Tweets</h3>\
                <div class="list-tweets-3"></div>\
\
                <script type="text/javascript">\
                    jQuery(function($){\
                        $("#last-tweets-3 .list-tweets-3").tweetable({\
                            listClass: "tweets-widget-3",\
                            username: "YIW",\
                            time: false,\
                            limit: 3,\
                            replies: false\
                        });\
                    });\
                </script>\
\
            </div>\
\
            <div id="text-8" class=" widget-last span6 widget widget_text">\
                <div class="textwidget">\
                    <a href="https://facebook.com/droidsrobotics" class="socials-small facebook-small" title="Facebook"  >facebook</a>\
\
                    <!--<a href="#" class="socials-small rss-small" title="Rss"  >rss</a>-->\
\
                    <a href="https://twitter.com/droidsrobotics" class="socials-small twitter-small" title="Twitter"  >twitter</a>\
\
                    <a href="https://plus.google.com/u/0/b/100693516412608981402/100693516412608981402/posts/p/pub" class="socials-small google-small" title="Google"  >google</a>\
\
                    <!--<a href="#" class="socials-small linkedin-small" title="Linkedin"  >linkedin</a>\
\
                    <a href="#" class="socials-small pinterest-small" title="Pinterest"  >pinterest</a>--></div>\
            </div>\
        </div>\
    </div>\
</div>\
\
<script>\
    jQuery(function($){\
        var twitterSlider = function(){\
            $("#topbar .last-tweets ul").addClass("slides");\
            $("#topbar .last-tweets").flexslider({\
                animation: "fade",\
                slideshowSpeed: 5 * 1000,\
                animationDuration: 700,\
                directionNav: false,\
                controlNav: false,\
                keyboardNav: false\
            });\
        };\
        $("#topbar .last-tweets > div").bind("tweetable_loaded", function(){\
            twitterSlider();\
        });\
    });\
</script>\
\
');

