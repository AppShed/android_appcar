appbuilder.app.FileLoader.fetched({"settings":{"currentscreen":null,"main":"11910921","maintype":"screen"},"screen":{"11910921":{"html":"<style scoped>#item15267338.item {\n\tborder-bottom-width: 0;\n}\n#item15267339.item {\n\tborder-bottom-width: 0;\n}\n<\/style><div class=\" screen list\" id=\"screen11910921\" data-screentype=\"list\" data-tab=\"2628225\"><div class=\"header\" x-blackberry-focusable=\"true\"><div class=\"background\"><\/div><div class=\"title\"><span>Demo Mode<\/span><\/div><\/div><div class=\"items scrolling\"><div class=\"items-inner\"><div class=\" item thumb link\" id=\"item15267334\" data-linktype=\"screen\" data-href=\"11910926\" x-blackberry-focusable=\"true\"><div class=\"link-arrow\"><\/div><div class=\"title\">Instructions<\/div><div class=\"text\">You can create your own demo programs.\n\nView the Action for the link called \"Run demo\" to see some sample code.\n\nCreate your own links and modify the demo code to make the RC Car obey your instructions!<\/div><\/div><div class=\" item plain link link-no-arrow\" id=\"item15267335\" data-linktype=\"jscode\" data-href=\"item15267335\" x-blackberry-focusable=\"true\"><img class=\"icon\" src=\"4055845plain_x2\" width=\"40\" height=\"40\"\/><div class=\"text\">Basic demo<\/div><\/div><div class=\" item plain link link-no-arrow\" id=\"item15267336\" data-linktype=\"jscode\" data-href=\"item15267336\" x-blackberry-focusable=\"true\"><img class=\"icon\" src=\"4055845plain_x2\" width=\"40\" height=\"40\"\/><div class=\"text\">Demo: Parking<\/div><\/div><div class=\" item plain link link-no-arrow\" id=\"item15267337\" data-linktype=\"jscode\" data-href=\"item15267337\" x-blackberry-focusable=\"true\"><img class=\"icon\" src=\"4055845plain_x2\" width=\"40\" height=\"40\"\/><div class=\"text\">Demo: Test Drive<\/div><\/div><div class=\" item html text\" id=\"item15267338\"><div class=\"html\">Demo Code<br\/><br\/>\nYou can write your own demo code in the box below. Click the \"Run\" link below to test it out.<\/div><\/div><div class=\" item textarea\" id=\"item15267339\"><div class=\"title\">Code<\/div><div class=\"textarea-container\"><textarea class=\"textarea\" name=\"democode\" data-variable=\"democode\" data-save-value=\"yes\">alert(\"This is some code.\")<\/textarea><\/div><\/div><div class=\" item plain link link-no-arrow\" id=\"item15267340\" data-linktype=\"jscode\" data-href=\"item15267340\" x-blackberry-focusable=\"true\"><img class=\"icon\" src=\"4055845plain_x2\" width=\"40\" height=\"40\"\/><div class=\"text\">Run the demo code<\/div><\/div><\/div><\/div><\/div>","updated":1498901778,"css":"","secured":false,"javascripts":{"item15267335":"app.setVariable(\"apiMode\",0)\napp.setVariable(\"motiondriving\",0)\n\nsetTimeout(\"app.rc.control('D',100)\",10)\nsetTimeout(\"app.rc.control('D',100,'left')\",2000)\nsetTimeout(\"app.rc.control('D',100)\",2500)\nsetTimeout(\"app.rc.control('D',100,'left')\",4500)\nsetTimeout(\"app.rc.control('D',100)\",5000)\nsetTimeout(\"app.rc.control('D',100,'left')\",7000)\nsetTimeout(\"app.rc.control('D',100)\",7500)\nsetTimeout(\"app.rc.control('N',0)\",9500)\nsetTimeout(\"app.rc.control('D',100,'left)\",12000)\nsetTimeout(\"app.rc.control('D',100,'right')\",12500)\nsetTimeout(\"app.rc.control('N',0)\",13000)","item15267336":"app.setVariable(\"apiMode\",0)\napp.setVariable(\"motiondriving\",0)\n\n\n\nsetTimeout(\"app.rc.control('D',100)\",0);\nsetTimeout(\"app.rc.control('D',100,'right')\",3000);\nsetTimeout(\"app.rc.control('D',100)\",5000);\nsetTimeout(\"app.rc.control('D',100,'left')\",7000);\nsetTimeout(\"app.rc.control('D',100)\",9000);\nsetTimeout(\"app.rc.control('D',100,'left')\",11000);\nsetTimeout(\"app.rc.control('D',100)\",13000);\nsetTimeout(\"app.rc.control('D',100,'left')\",15000);\nsetTimeout(\"app.rc.control('N',0)\",19000);\nsetTimeout(\"app.rc.control('R',100,'left')\",20000);\nsetTimeout(\"app.rc.control('R',100)\",22000);\nsetTimeout(\"app.rc.control('N',0)\",25000);","item15267337":"app.rc.addCommand(\"D\",100,\"\",300)\napp.rc.addCommand(\"R\",100,\"\",50)\napp.rc.addCommand(\"D\",100,\"\",300)\napp.rc.addCommand(\"R\",100,\"\",50)\napp.rc.addCommand(\"D\",100,\"\",300)\napp.rc.addCommand(\"R\",100,\"\",50)\napp.rc.addCommand(\"D\",100,\"\",300)\napp.rc.addCommand(\"R\",100,\"\",50)\napp.rc.addCommand(\"D\",100,\"\",300)\napp.rc.addCommand(\"R\",100,\"\",50)\napp.rc.addCommand(\"D\",100,\"\",300)\napp.rc.addCommand(\"R\",100,\"\",50)\napp.rc.addCommand(\"D\",100,\"\",300)\napp.rc.addCommand(\"R\",100,\"\",50)","item15267340":"eval(app.getVariable('democode'))"},"events":[]}}});