/*
 * Tests EasyAutocomplete - event
 *
 * @author Łukasz Pawełczak
 */

 /*
QUnit.test("Event keypress - Esc keyCode", function( assert ) {
	expect(1);
	
	//given
	var completerOne = new EasyAutocomplete.main($("#inputOne"), {url: "resources/colors_string.json", ajaxCallback: function() {

	
			var e = $.Event("keyup", { keyCode: 27 });
			$("inputOne").trigger(e);
	

			//assert
			assertList();
		}
	});


	//execute
	
	completerOne.init();

	var e = $.Event('keyup');
	e.keyCode = 50; 
	$("#inputOne").val("c").trigger(e);

	//create event with Esc keyCode



	QUnit.stop();


	//assert

	function assertList() {
		var elements = $("#inputOne").next().find("ul li");

		assert.equal(3, elements.length, "Response size");
		//assert.equal("none", $("#eac-container-inputOne").find("ul").css("display"), "List should be hidden");

		QUnit.start();	
	}
});
*/

QUnit.test("Event onLoadEvent ", function( assert ) {
	expect(1);
	
	//given
	var completerOne = new EasyAutocomplete.main($("#inputOne"), {url: "resources/colors_string.json",


		list: {
			onLoadEvent: function() {

				//assert
				assertList();
			}
		}
			
	});


	//execute
	
	completerOne.init();

	var e = $.Event('keyup');
	e.keyCode = 50; 
	$("#inputOne").val("c").trigger(e);

	QUnit.stop();


	//assert

	function assertList() {
		var elements = $("#inputOne").next().find("ul li");

		assert.equal(3, elements.length, "Response size");

		QUnit.start();	
	}
});




QUnit.test("Event onClickEvent ", function( assert ) {
	expect(1);
	
	//given
	var completerOne = new EasyAutocomplete.main($("#inputOne"), {url: "resources/colors_string.json",


		list: {
			onClickEvent: function() {

				//assert
				assertList();
			},
			onLoadEvent: function() {

				//trigger click event
				$("#inputOne").next().find("ul li").eq(0).find(" > div").trigger("click");
			}
		}

			
	});


	//execute
	
	completerOne.init();

	var e = $.Event('keyup');
	e.keyCode = 50; 
	$("#inputOne").val("c").trigger(e);

	QUnit.stop();

	//assert

	function assertList() {
		var elements = $("#inputOne").next().find("ul li");

		assert.equal(3, elements.length, "Response size");

		QUnit.start();	
	}
});

QUnit.test("Event onMouseOverEvent ", function( assert ) {
	expect(1);
	
	//given
	var completerOne = new EasyAutocomplete.main($("#inputOne"), {url: "resources/colors_string.json",

		list: {
			onMouseOverEvent: function() {

				//assert
				assertList();
			},
			onLoadEvent: function() {

				//trigger click event
				$("#inputOne").next().find("ul li").eq(0).find(" > div").trigger("mouseover");
			}
		}
			
	});


	//execute
	
	completerOne.init();

	var e = $.Event('keyup');
	e.keyCode = 50; 
	$("#inputOne").val("c").trigger(e);

	QUnit.stop();

	//assert

	function assertList() {
		var elements = $("#inputOne").next().find("ul li");

		assert.equal(3, elements.length, "Response size");

		QUnit.start();	
	}
});


QUnit.test("Event onMouseOutEvent ", function( assert ) {
	expect(1);
	
	//given
	var completerOne = new EasyAutocomplete.main($("#inputOne"), {url: "resources/colors_string.json",

			list: {
				onMouseOutEvent: function() {

					//assert
					assertList();
				},
				onLoadEvent: function() {

					//trigger click event
					$("#inputOne").next().find("ul li").eq(0).find(" > div").trigger("mouseout");
				}	
			}
			
	});


	//execute
	
	completerOne.init();

	var e = $.Event('keyup');
	e.keyCode = 50; 
	$("#inputOne").val("c").trigger(e);

	QUnit.stop();

	//assert

	function assertList() {
		var elements = $("#inputOne").next().find("ul li");

		assert.equal(3, elements.length, "Response size");

		QUnit.start();	
	}
});

QUnit.test("Event onSelectItemEvent ", function( assert ) {
	expect(1);
	
	//given
	var completerOne = new EasyAutocomplete.main($("#inputOne"), {url: "resources/colors_string.json",

			list: {
				onSelectItemEvent: function() {

					//assert
					assertList();
				},
				onLoadEvent: function() {

					//trigger select event
					var key = $.Event('keyup');
					key.keyCode = 40; 
					$input.trigger(key);
				}	
			}
			
	}),
	$input = $("#inputOne");


	//execute
	completerOne.init();
	var e = $.Event('keyup');
	e.keyCode = 50; 
	$input.val("c").trigger(e);

	QUnit.stop();

	//assert

	function assertList() {

		var elements = $("#inputOne").next().find("ul li");

		assert.equal(3, elements.length, "Response size");

		QUnit.start();	
	}
});

QUnit.test("Event onShowListEvent ", function( assert ) {
	expect(1);
	
	//given
	var completerOne = new EasyAutocomplete.main($("#inputOne"), {url: "resources/colors_string.json",

			list: {
				onShowListEvent: function() {

					//assert
					assertList();
				}
			}
			
	}),
	$input = $("#inputOne");


	//execute
	completerOne.init();
	var e = $.Event('keyup');
	e.keyCode = 50; 
	$input.val("c").trigger(e); //trigger show list

	QUnit.stop();

	//assert

	function assertList() {

		var elements = $("#inputOne").next().find("ul li");

		assert.equal(3, elements.length, "Response size");

		QUnit.start();	
	}
});

QUnit.test("Event onHideListEvent ", function( assert ) {
	expect(1);
	
	//given
	var completerOne = new EasyAutocomplete.main($("#inputOne"), {url: "resources/colors_string.json",

			list: {
				onHideListEvent: function() {

					//assert
					assertList();
				},
				onLoadEvent: function() {

					//trigger hide list
					var key = $.Event('keyup');
					key.keyCode = 27; 
					$input.trigger(key);
				}	
			}
			
	}),
	$input = $("#inputOne");


	//execute
	completerOne.init();
	var e = $.Event('keyup');
	e.keyCode = 50; 
	$input.val("c").trigger(e);

	QUnit.stop();

	//assert

	function assertList() {

		var elements = $("#inputOne").next().find("ul li");

		assert.equal(3, elements.length, "Response size");

		QUnit.start();	
	}
});

QUnit.test("Event onKeyEnterEvent ", function( assert ) {
	expect(1);
	
	//given
	var completerOne = new EasyAutocomplete.main($("#inputOne"), {url: "resources/colors_string.json",

			list: {
				onKeyEnterEvent: function() {

					//assert
					assertList();
				},
				onLoadEvent: function() {


					//trigger select event
					var key = $.Event('keyup');
					key.keyCode = 40; 
					$input.trigger(key);


					//trigger key enter
					var key = $.Event('keydown');
					key.keyCode = 13; 
					$input.trigger(key);
				}	
			}
			
	}),
	$input = $("#inputOne");


	//execute
	completerOne.init();
	var e = $.Event('keyup');
	e.keyCode = 50; 
	$input.val("c").trigger(e);

	QUnit.stop();

	//assert

	function assertList() {

		var elements = $("#inputOne").next().find("ul li");

		assert.equal(3, elements.length, "Response size");

		QUnit.start();	
	}
});


QUnit.test("Event onClickEvent and selectedItemData - click", function( assert ) {
	expect(2);
	
	//given
	var $input = $("#inputOne");

	$input.easyAutocomplete({

			url: "resources/colors_string.json",

			list: {
				onClickEvent: function() {

					//assert
					assertList();
				},
				onLoadEvent: function() {


					//trigger click event
					$("#inputOne").next().find("ul li").eq(0).find(" > div").trigger("click");
				}	
			}
			
	});
	


	//execute
	
	var e = $.Event('keyup');
	e.keyCode = 50; 
	$input.val("c").trigger(e);

	QUnit.stop();

	//assert

	function assertList() {

		var elements = $input.next().find("ul li"),
			data = $input.getSelectedItemData();

		assert.equal(3, elements.length, "Response size");
		assert.equal("red", data, "selectedItemData matches");

		QUnit.start();	
	}
});

QUnit.test("Event onKeyEnterEvent and selectedItemData - keydown enter", function( assert ) {
	expect(2);
	
	//given
	var $input = $("#inputOne");

	$input.easyAutocomplete({

			url: "resources/colors_string.json",

			list: {
				onKeyEnterEvent: function() {

					//assert
					assertList();
				},
				onLoadEvent: function() {

					//trigger select event
					var key = $.Event('keyup');
					key.keyCode = 40; 
					$input.trigger(key);


					//trigger key enter
					var key = $.Event('keydown');
					key.keyCode = 13; 
					$input.trigger(key);
				}	
			}
			
	});
	


	//execute
	
	var e = $.Event('keyup');
	e.keyCode = 50; 
	$input.val("c").trigger(e);

	QUnit.stop();

	//assert

	function assertList() {

		var elements = $input.next().find("ul li"),
			data = $input.getSelectedItemData();

		assert.equal(3, elements.length, "Response size");
		assert.equal("red", data, "selectedItemData matches");


		QUnit.start();	
	}
});



QUnit.test("Event onChooseEvent - key enter", function( assert ) {
	expect(1);
	
	//given
	var completerOne = new EasyAutocomplete.main($("#inputOne"), {url: "resources/colors_string.json",

			list: {
				onChooseEvent: function() {

					//assert
					assertList();
				},
				onLoadEvent: function() {


					//trigger select event
					var key = $.Event('keyup');
					key.keyCode = 40; 
					$input.trigger(key);


					//trigger key enter
					var key = $.Event('keydown');
					key.keyCode = 13; 
					$input.trigger(key);
				}	
			}
			
	}),
	$input = $("#inputOne");


	//execute
	completerOne.init();
	var e = $.Event('keyup');
	e.keyCode = 50; 
	$input.val("c").trigger(e);

	QUnit.stop();

	//assert

	function assertList() {

		var elements = $("#inputOne").next().find("ul li");

		assert.equal(3, elements.length, "Response size");

		QUnit.start();	
	}
});

QUnit.test("Event onChooseEvent - click", function( assert ) {
	expect(1);
	
	//given
	var completerOne = new EasyAutocomplete.main($("#inputOne"), {url: "resources/colors_string.json",

			list: {
				onChooseEvent: function() {

					//assert
					assertList();
				},
				onLoadEvent: function() {


					//trigger click event
					$("#inputOne").next().find("ul li").eq(0).find(" > div").trigger("click");
				}	
			}
			
	}),
	$input = $("#inputOne");


	//execute
	completerOne.init();
	var e = $.Event('keyup');
	e.keyCode = 50; 
	$input.val("c").trigger(e);

	QUnit.stop();

	//assert

	function assertList() {

		var elements = $("#inputOne").next().find("ul li");

		assert.equal(3, elements.length, "Response size");

		QUnit.start();	
	}
});

