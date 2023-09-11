// let myModal = document.getElementById('modal-up')
// let myInput = document.getElementById('myInput')
//
// myModal.addEventListener('shown.bs.modal', function () {
// 	myInput.focus()
// })
//
//


const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
	toastTrigger.addEventListener('click', () => {
		const toast = new bootstrap.Toast(toastLiveExample)
		
		toast.show()
	})
}
