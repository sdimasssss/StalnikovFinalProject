let btns=document.querySelectorAll('.btn');
for(let btn of btns) {
	btn.addEventListener('click', function() {
		for(let btnInner of btns) {
			btnInner.classList.remove('active');
		}
		this.classList.add('active');
	});	
}