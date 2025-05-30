function cutImg(imgdom, CutImgType, cutImgParent) {
  $(imgdom).each(function () {
    var $this = $(imgdom);
    $this.css("cssText", "");
    var objHeight, objWidth;
    if ($this[0].naturalWidth && $this[0].naturalHeight) {
      objWidth = $this[0].naturalWidth;
      objHeight = $this[0].naturalHeight;
    } else {
      var img = new Image();
      img.src = $this[0].src;
      objWidth = img.width;
      objHeight = img.height;
    }
    var parentHeight, parentWidth;
    if (cutImgParent != undefined) {
      parentHeight = $this.parents(cutImgParent).eq(0).height();
      parentWidth = $this.parents(cutImgParent).eq(0).width();
    } else {
      if (
        $this.parent().prop("tagName") == "a" ||
        $this.parent().prop("tagName") == "A"
      ) {
        parentHeight = $this.parent().parent().height();
        parentWidth = $this.parent().parent().width();
      } else {
        parentHeight = $this.parent().height();
        parentWidth = $this.parent().width();
      }
    }
    var imgCssText = "";
    if (CutImgType == "autocut") {
      var ratio = objHeight / objWidth;
      if (objHeight > objWidth) {
        if (parentWidth * ratio < parentHeight) {
          imgCssText =
            "width:" +
            parentHeight / ratio +
            "px!important;height:" +
            parentHeight +
            "px!important;";
        } else {
          imgCssText =
            "width:" +
            parentWidth +
            "px!important;height:" +
            parentWidth * ratio +
            "px!important;";
        }
        $this.css("cssText", imgCssText);
      } else {
        if (objHeight < objWidth) {
          if (parentHeight / ratio < parentWidth) {
            imgCssText =
              "width:" +
              parentWidth +
              "px!important;height:" +
              parentWidth * ratio +
              "px!important;";
          } else {
            imgCssText =
              "width:" +
              parentHeight / ratio +
              "px!important;height:" +
              parentHeight +
              "px!important;";
          }
          $this.css("cssText", imgCssText);
        } else {
          if (parentHeight > parentWidth) {
            imgCssText =
              "width:" +
              parentHeight +
              "px!important;height:" +
              parentHeight +
              "px!important;";
            $this.css("cssText", imgCssText);
          } else {
            imgCssText =
              "width:" +
              parentWidth +
              "px!important;height:" +
              parentWidth +
              "px!important;";
            $this.css("cssText", imgCssText);
          }
        }
      }
      objHeight = $this.css("height").replace("px", "");
      objWidth = $this.css("width").replace("px", "");
      if (objHeight > objWidth) {
        if (objHeight == parentHeight) {
          imgCssText =
            $this.attr("style") +
            ";margin-left:" +
            (parentWidth - objWidth) / 2 +
            "px!important;border:0px!important;";
        } else {
          imgCssText =
            $this.attr("style") +
            ";margin-top:" +
            (parentHeight - objHeight) / 2 +
            "px!important;border:0px!important;";
        }
        $this.css("cssText", imgCssText);
      } else {
        if (objHeight < objWidth) {
          if (objWidth == parentWidth) {
            imgCssText =
              $this.attr("style") +
              ";margin-top:" +
              (parentHeight - objHeight) / 2 +
              "px!important;border:0px!important;";
          } else {
            imgCssText =
              $this.attr("style") +
              ";margin-left:" +
              (parentWidth - objWidth) / 2 +
              "px!important;border:0px!important;";
          }
          $this.css("cssText", imgCssText);
        } else {
          if (parentHeight >= parentWidth) {
            imgCssText =
              $this.attr("style") +
              ";margin-left:" +
              (parentWidth - objWidth) / 2 +
              "px!important;border:0px!important;";
            $this.css("cssText", imgCssText);
          } else {
            imgCssText =
              $this.attr("style") +
              ";margin-top:" +
              (parentHeight - objHeight) / 2 +
              "px!important;border:0px!important;";
            $this.css("cssText", imgCssText);
          }
        }
      }
    } else {
      try {
        var widthrate = objWidth / parentWidth;
        var heightrate = objHeight / parentHeight;
        var imgwidth = 0;
        var imgheight = 0;
        if (
          widthrate > 1 ||
          heightrate > 1 ||
          widthrate < 1 ||
          heightrate < 1
        ) {
          if (CutImgType == "Scaling") {
            var rate = Math.max(widthrate, heightrate);
            imgwidth = Math.max(1, Math.min(objWidth / rate, parentWidth));
            imgheight = Math.max(1, Math.min(objHeight / rate, parentHeight));
          } else {
            imgwidth = parentWidth;
            imgheight = parentHeight;
          }
        } else {
          imgwidth = parentWidth;
          imgheight = parentHeight;
        }
        imgCssText +=
          "width:" +
          imgwidth +
          "px!important;height:" +
          imgheight +
          "px!important;";
        $this.css("cssText", imgCssText);
        if (imgwidth > imgheight) {
          if (imgwidth != parentWidth) {
            imgCssText =
              $this.attr("style") +
              ";margin-left:" +
              (parentWidth - imgwidth) / 2 +
              "px!important;border:0px!important;";
          } else {
            imgCssText =
              $this.attr("style") +
              ";margin-top:" +
              (parentHeight - imgheight) / 2 +
              "px!important;border:0px!important;";
          }
          $this.css("cssText", imgCssText);
        } else {
          if (imgheight != parentHeight) {
            imgCssText =
              $this.attr("style") +
              ";margin-top:" +
              (parentHeight - imgheight) / 2 +
              "px!important;border:0px!important;";
          } else {
            imgCssText =
              $this.attr("style") +
              ";margin-left:" +
              (parentWidth - imgwidth) / 2 +
              "px!important;border:0px!important;";
          }
          $this.css("cssText", imgCssText);
        }
      } catch (e) {}
    }
  });
}
