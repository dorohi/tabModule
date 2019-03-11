window.addEventListener('DOMContentLoaded', function () {
	'use strict';
	let info = document.querySelector('.info-header'),					// Родитель навигации табами
		tabs = document.querySelectorAll('.info-header-tab'),			// Навигация табами - ссылки на блоки
		tabContent = document.querySelectorAll('.info-tabcontent');		// Сами табы, блоки с контентом
	hideTabContent(1);

	//Скрытие всех табов, кроме нужного (key - от какого таба скрывать) 
	function hideTabContent (key){
		for (let i = key; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}
	
	//Показ нужного таба
	function showTabContent(key){
		if (tabContent[key].classList.contains('hide')){
			tabContent[key].classList.remove('hide');
			tabContent[key].classList.add('show');
		}
	}

	info.addEventListener('click', (event) =>{
		let target = event.target;
		if (target && target.classList.contains('info-header-tab')) {
			for (let i = 0; i < tabs.length; i++) {
				if (tabs[i] == target){
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			}
		}
	});
});