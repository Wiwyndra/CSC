function showHide(element_id) {
                //Если элемент с id-шником element_id существует
                if (document.getElementById(element_id)) { 
                    //Записываем ссылку на элемент в переменную obj
                    var obj = document.getElementById(element_id); 
                    //Если css-свойство display не block, то: 
                    if (obj.style.display != "block") { 
                        obj.style.display = "block";//Показываем элемент
						obj.scrollIntoView(false);						
                    }
                    else obj.style.display = "none"; //Скрываем элемент
                }
                //Если элемент с id-шником element_id не найден, то выводим сообщение
                else alert("Извините, в данный момент этот раздел находится на редактировании!"); 
				
            }   
			
function hashSearch(value) {
	var Items = document.getElementById('hashFilter');// в диве hashFilter	
	var items = Items.getElementsByClassName('news-item');// отбираем все элементы с классом news-item
		for (var i=0; i<items.length; i++) {// для каждого в списке
			if (items[i].classList.contains(value)) {//если в имени класса содержится искомое значение
				items[i].style.display = 'block';//показать
			} else {
				items[i].style.display = 'none';//скрыть
			}
		}
		
	window.location = "#"+value;  //при активации функции добавить искомое значение через хэш к url
	
 //сброс кнопки "назад" браузера, "починка" нормального течения события "назад" - полное открытие списка новостей
	window.addEventListener("popstate",function(e) { 	//прослушка события  "popstate", добавлена фукция обработки	
			document.location.href = "news.html"; //переход на вкладку "news.html"
			e.preventDefault(); //сброс исходного значения действия
		},false); 
	
}



			
