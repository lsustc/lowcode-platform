/**
 * @author  yinshangsheng <yinshangsheng@myhexin.com>
 * @date    2020-03-18
 * @desc    1）iphone X/Xs/XR/Xs-Max 适配
 *             调用该方法，当为需要适配的设备时将自动在html上添加 data-adapter="thsIphoneXAdapter" ，并 window上绑定 window.thsAdapter = "thsIphoneXAdapter"
 *          2）白天/黑夜模式 适配
 *             调用该方法，将自动在html上添加 白天：theme-mode="white" 黑夜：theme-mode="black"
 *          3）平台区分 安卓/ios
 *             调用该方法，将自动在html上添加 安卓：device-platform="gphone" ios：device-platform="iphone"
 */
 ;(function(){
    // 获取平台
    function getPlatform(){
        var browser={
            versions:function(){
                var u = navigator.userAgent, app = navigator.appVersion;
                return {
                    iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1,
                    iPad: u.indexOf('iPad') > -1
                };
            }(),
            language:(navigator.browserLanguage || navigator.language).toLowerCase()
        };
        if( browser.versions.iPhone || browser.versions.iPad )
        {
            var platform = "iphone";
        }else{
            var platform = "gphone";
        }
        return platform;
    }
    // 获取模式
    function getCssStyle(){
        var u = navigator.userAgent, flag = "white";
        var pos = u.indexOf("hxtheme");
        if( pos > -1 ){
            var hxtheme = u.substr( pos+8, 1 );
            if( hxtheme == 0 )
            {
                //白色的底
                flag = "white";
            }
            else if( hxtheme == 1 ){
                //黑色的底
                flag = "black";
            }
        }
        return flag;
    }

    function setAdapter(){
        document.getElementsByTagName('html')[0].setAttribute("data-adapter","thsIphoneXAdapter");
        window.thsAdapter = "thsIphoneXAdapter";
    }

    function needToAdapt(){
        var deviceWidth = window.screen.width;
        var deviceHeight = window.screen.height;
        var devicePixelRatio = window.devicePixelRatio;

        if("iphone" === getPlatform()){
            var iphoneX = deviceWidth == 375 && deviceHeight == 812 && devicePixelRatio == 3; // X or Xs
            var iphoneXR = (deviceWidth == 414 && deviceHeight == 896 && devicePixelRatio == 2) || (deviceWidth == 375 && deviceHeight == 812 && devicePixelRatio == 2);
            var iphoneXsMax = deviceWidth == 414 && deviceHeight == 896 && devicePixelRatio == 3;
            
            if(iphoneX || iphoneXR || iphoneXsMax){
                setAdapter();
            }
        }
    }

    function setMode(){
        var mode = getCssStyle();
        document.getElementsByTagName('html')[0].setAttribute("theme-mode", mode);
    }

    function setPlatform(){
        var platform = getPlatform();
        document.getElementsByTagName('html')[0].setAttribute("device-platform", platform);
    }

    needToAdapt();
    setMode();
    setPlatform();
})();