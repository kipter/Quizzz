var question_tag = document.querySelector('.question-tag');
var option_head = document.querySelector('.option-head');
var next = document.getElementById('next');
var sc = document.getElementById('score_s');

var que_count = 0;
var score = 0;

window.onload = () => {
showQues(que_count);
var option = document.querySelectorAll('.option')
	option.forEach(element=>{
	element.addEventListener('click', function () {
		if(this.innerHTML == questions[que_count].ans){
			this.style.background = "#03a9f4"
			score++;
			sc.innerHTML = "score "+score+"/"+questions.length;
			option_head.classList.add('block');
		}else{
			this.style.background = '#ff0000'
			option_head.classList.add('block');
		}
	})
})
			sc.innerHTML = "score "+score+"/"+questions.length;

}

next.addEventListener('click', function () {
	option_head.classList.remove('block');
	que_count++;
	if(que_count <= questions.length){
	showQues(que_count);
	var option = document.querySelectorAll('.option')
	option.forEach(element=>{
	element.addEventListener('click', function () {
		if(this.innerHTML == questions[que_count].ans){
			this.style.background = "#03a9f4"
			score++;
			option_head.classList.add('block');
			sc.innerHTML = "score "+score+"/"+questions.length;
		}else{
			option_head.classList.add('block');
			this.style.background = '#ff0000'
		}
	})
})
	}if(que_count+1 == questions.length){
		sc.innerHTML = "Please Follow Back Me " + '<a href="https://www.instagram.com/luoshenshi">Here</a>'
	}
})

function showQues(index){
	question_tag.innerHTML = questions[index].question;
	option_head.innerHTML = `<p class="option">${questions[index].opt[0]}</p>
	<p class="option">${questions[index].opt[1]}</p><p class="option">${questions[index].opt[2]}</p><p class="option">${questions[index].opt[3]}</p>`
}