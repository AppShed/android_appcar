appbuilder.app.FileLoader.fetched({"settings":{"currentscreen":null,"main":"13483577","maintype":"screen"},"screen":{"13483577":{"html":"<style scoped>#item17582544 {\n\tcolor: rgb(0,0,0);\n}\n#item17582544 button {\n\tcolor: rgb(0,0,0);\n}\n#item17582544 .item-icon-inner .title {\n\tcolor: rgb(0,0,0);\n}\n<\/style><div class=\" screen list\" id=\"screen13483577\" data-screentype=\"list\" data-tab=\"2628225\"><div class=\"header\" x-blackberry-focusable=\"true\"><div class=\"background\"><\/div><div class=\"back\" data-linktype=\"back\" data-href=\"13483539\" x-blackberry-focusable=\"true\">Back<\/div><div class=\"title\"><span>Manual Calibration<\/span><\/div><\/div><div class=\"items scrolling\"><div class=\"items-inner\"><div class=\" item textbox\" id=\"item17582541\"><div class=\"title\">Left Motor PWM (0-255)<\/div><div class=\"textbox-container\"><input class=\"textbox\" type=\"text\" name=\"leftPWM\" value=\"255\" placeholder=\"\" data-variable=\"leftPWM\" data-save-value=\"yes\" data-autocomplete-url=\"\" data-autocomplete-variable=\"leftPWM\"\/><\/div><\/div><div class=\" item textbox\" id=\"item17582542\"><div class=\"title\">Right Motor PWM (0-255)<\/div><div class=\"textbox-container\"><input class=\"textbox\" type=\"text\" name=\"rightPWM\" value=\"255\" placeholder=\"\" data-variable=\"rightPWM\" data-save-value=\"yes\" data-autocomplete-url=\"\" data-autocomplete-variable=\"rightPWM\"\/><\/div><\/div><div class=\" item button link link-no-arrow\" id=\"item17582544\" data-linktype=\"jscode\" data-href=\"item17582544\" x-blackberry-focusable=\"true\"><button class=\"button\">Save Settings<\/button><\/div><\/div><\/div><\/div>","updated":1498901776,"css":"","secured":false,"javascripts":{"item17582544":"app.analogWrite(null,2,app.getVariable(\"leftPWM\"));\napp.analogWrite(null,3,app.getVariable(\"rightPWM\"));"},"events":[]}}});