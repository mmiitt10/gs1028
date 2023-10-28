document.addEventListener('DOMContentLoaded', function() {
    const memoForm = document.getElementById('memoForm');
    const memoList = document.getElementById('memoList');

    memoForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const title = e.target.title.value;
        const details = e.target.details.value;

        addMemo(title, details);
        
        e.target.title.value = '';
        e.target.details.value = '';
    });

    function addMemo(title, details) {
        const listItem = document.createElement('li');
        const deleteBtn = document.createElement('span');

        deleteBtn.innerText = '削除';
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.addEventListener('click', function() {
            memoList.removeChild(listItem);
        });

        const currentDate = new Date();
        const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;
        
        listItem.innerHTML = `<strong>${formattedDate}</strong><br><strong>タイトル:</strong> ${title}<br><strong>詳細:</strong> ${details}`;
        listItem.appendChild(deleteBtn);
        
        memoList.appendChild(listItem);
    }
});
