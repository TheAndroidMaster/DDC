class AndroidUtils {
  static sdkToVersion(sdk) {
    if (sdk == 2)
      return "1.1";
    else if (sdk == 3)
      return "1.5";
    else if (sdk == 4)
      return "1.6";
    else if (sdk == 5 || sdk == 6)
      return "2.0";
    else if (sdk == 7)
      return "2.1";
    else if (sdk == 8)
      return "2.2";
    else if (sdk == 9 || sdk == 10)
      return "2.3";
    else if (sdk == 11)
      return "3.0";
    else if (sdk == 12)
      return "3.1";
    else if (sdk == 13)
      return "3.2";
    else if (sdk == 14 || sdk == 15)
      return "4.0";
    else if (sdk == 16)
      return "4.1";
    else if (sdk == 17)
      return "4.2";
    else if (sdk == 18)
      return "4.3";
    else if (sdk == 19 || sdk == 20 || sdk == 21)
      return "4.4";
    else if (sdk == 21)
      return "5.0";
    else if (sdk == 22)
      return "5.1";
    else if (sdk == 23)
      return "6.0";
    else if (sdk == 24)
      return "7.0";
    else if (sdk == 25)
      return "7.1";
    else if (sdk == 26)
      return "8.0";
    else return sdk;
  }
}

class ElementUtils {
  static createElement(html) {
      var fragment = document.createDocumentFragment();
      var temp = document.createElement('div');
      temp.innerHTML = html;
      while (temp.firstChild) {
          fragment.appendChild(temp.firstChild);
      }

      return fragment;
  }

  static clearElement(element) {
  	while (element.firstChild) {
  		element.removeChild(element.firstChild);
  	}
  }
}

class UrlUtils {
  static stringToArguments(args) {
  	var array = args.split("&");
  	var args = {};
  	for (var i = 0; i < array.length; i++) {
  		if (array[i].indexOf("=") >= 0) {
  			var argArray = array[i].split("=");
  			args[argArray[0]] = argArray[1];
  		} else args[array[i]] = true;
  	}

  	return args;
  }

  static argumentsToString(args) {
  	var string = "";
  	for (var i in args) {
  		string += i + "=" + args[i] + "&";
  	}

  	return string.substring(0, string.length - 1);
  }

  static getCurrentArguments() {
    if (window.location.search)
      return UrlUtils.stringToArguments(window.location.search.replace("?", ""));
    else return {"page": "home"};
  }
}

class SiteUtils {
  static getRatingColor(rating) {
    if (rating < 2)
      return "#E24E0D";
    else if (rating < 3)
      return "#E29D0D";
    else if (rating < 4)
      return "#E2BB0D";
    else return "#15AF5E";
  }
}
