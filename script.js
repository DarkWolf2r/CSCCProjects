const moon = document.getElementById('moon');
const sun = document.getElementById('sun');
const input = document.getElementById('add');
const content = document.querySelector('.content');
const addBtn = document.getElementById('addBtn');
const body = document.body;
const addtrach = document.getElementById('trash');
const taskList = document.getElementById('taskList');

function trach(){
    if(taskList.childElementCount > 0){
        addtrach.style.visibility = 'visible';
    } else {
        addtrach.style.visibility = 'hidden';
    }
}
addtrach.addEventListener('click', () => {
    taskList.querySelectorAll('div').forEach(div => {
        div.remove();
    });
    taskList.style.display = 'none';
    addtrach.style.visibility = 'hidden';
});
moon.addEventListener('click', () => {
    moon.style.display = 'none';
    sun.style.display = 'inline-block';
    content.style.backgroundColor = 'rgba(68, 87, 114, 0.57)';
    content.style.border = '1px solid #9DB6CF';
    body.style.color = ' #D4E4ED';
    taskList.style.color = ' #303C4C';
    input.style.backgroundColor = ' #EDE9E8';
    taskList.style.backgroundColor = ' #EDE9E8';
    taskList.querySelectorAll('div').forEach(div => {
        div.style.border = '0.5px solid #9DB6CF';
    });
});
sun.addEventListener('click', () => {
    sun.style.display = 'none';
    moon.style.display = 'inline-block';
    content.style.backgroundColor = ' #EDE9E8';
    content.style.border = '1px solid #303C4C';
    body.style.color = ' #9DB6CF';
    taskList.style.color = ' #303C4C';
    input.style.backgroundColor = ' #B6CADE';
    taskList.style.backgroundColor = ' #B6CADE7F';
    taskList.querySelectorAll('div').forEach(div => {
        div.style.border = '0.5px solid #B6CADEA0';
    });
});
window.addEventListener('load', () => {
    sun.style.display = 'none';
    moon.style.display = 'inline-block';
    content.style.backgroundColor = ' #EDE9E8';
    content.style.border = '1px solid #303C4C';
    taskList.style.display = 'none';
});
input.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
        addBtn.click();
    }
    trach();
});

addBtn.addEventListener('click', () => {
    taskList.style.display = 'block';
    const textTask = input.value.trim();
    if (textTask !== ''){
        const divTask = document.createElement('div');
        const newCheckbox = document.createElement('input');
        const newTask = document.createElement('li');
        const deleteBtn = document.createElement('i');
        const menuBtn = document.createElement('i');
        const menuList = document.createElement('ul');
        divTask.style.display = 'flex';
        divTask.style.alignItems = 'center';
        divTask.style.justifyContent = 'space-between';
        newCheckbox.type = 'checkbox';
        deleteBtn.className = 'fa-solid fa-xmark';
        newTask.className = 'newTask';
        newTask.textContent = textTask;
        menuBtn.className = 'fa-solid fa-ellipsis-vertical';
        menuList.className = 'menuList';

        let pressed = false;
        menuBtn.addEventListener('click', () => {
            if(pressed) {
                menuList.style.opacity = '0';
            }
            else { 
                menuList.style.opacity = '1';
            }
            pressed = !pressed;
        });
        
        const edit = document.createElement('li');
        edit.className = 'edit';
        edit.textContent = 'Edit';
        menuList.appendChild(edit);
        edit.addEventListener('click', () => {
            menuList.style.display = 'none';
            input.value = newTask.textContent;
            divTask.remove();
            if(taskList.childElementCount == 0){
                taskList.style.display = 'none';
                trach();
            }
            if(addBtn.onclick()){
                newTask.textContent = input.value;
            }
        });       

        const colors = document.createElement('li');
        colors.className = 'colors';
        colors.textContent = 'Colors';
        menuList.appendChild(colors);
        const divColor = document.createElement('div');
        divColor.className = 'divColor';
        const blue = document.createElement('span');
        blue.className = 'blue';
        const green = document.createElement('span');
        green.className = 'green';
        const pink = document.createElement('span');
        pink.className = 'pink';
        const yellow = document.createElement('span');
        yellow.className = 'yellow';
        divColor.appendChild(blue);
        divColor.appendChild(green);
        divColor.appendChild(pink);
        divColor.appendChild(yellow);
        colors.appendChild(divColor);
        divColor.style.display = 'none';
        let click = false;
        colors.addEventListener('click', () => {
            if(!click) {
                divColor.style.display = 'flex';
                blue.addEventListener('click', () => {
                    divTask.style.backgroundColor = ' #B6CADEB2';
                });
                green.addEventListener('click', () => {
                    divTask.style.backgroundColor = ' #A8D5BAB2';
                });
                pink.addEventListener('click', () => {
                    divTask.style.backgroundColor = ' #F4B6C2B2';
                });
                yellow.addEventListener('click', () => {
                    divTask.style.backgroundColor = ' #F8E9A1B2';
                });
                if(taskList.childElementCount == 0){
                    taskList.style.display = 'none';
                    trach();
                }
            } else {
                divColor.style.display = 'none';
            }
            click = !click;
            document.addEventListener('click', (event) => {
                if(!menuList.contains(event.target) && !divColor.contains(event.target) && !colors.contains(event.target)){
                    divColor.style.display = 'none';
                }
            });
        });

        const details = document.createElement('li');
        details.className = 'details';
        details.textContent = 'Details';
        menuList.appendChild(details);
        const divDetails = document.createElement('div');
        divDetails.className = 'divDetails';
        divDetails.style.opacity = '0';
        details.addEventListener('click', () => {
            divColor.style.display = 'none';
            divDetails.style.display = 'flex';
            details.appendChild(divDetails);
            if(!divDetails.textContent) {
                const now = new Date();
                const formattedTime = `Created in ${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`; 
                divDetails.textContent = formattedTime;
            }
            divDetails.style.opacity = '0';
            document.addEventListener('click', (event) => {
                if(!menuList.contains(event.target) && !menuBtn.contains(event.target) && !divDetails.contains(event.target)) {
                    divDetails.style.display = 'none';
                }
            });
        });

        document.addEventListener('click', (event) => {
            if(!menuList.contains(event.target) && !menuBtn.contains(event.target)) {
                menuList.style.display = 'none';
            } 
            else {
                menuList.style.display = 'flex';
            }
        });
        divTask.appendChild(newCheckbox);
        divTask.appendChild(newTask);
        divTask.appendChild(deleteBtn);
        divTask.appendChild(menuBtn);
        divTask.appendChild(menuList);
        taskList.appendChild(divTask);
        deleteBtn.addEventListener('click', () => {
            divTask.remove();
            if(taskList.childElementCount == 0){
                taskList.style.display = 'none';
                trach();
            }
        });
        input.value = '';
        trach();
    } else {
        alert('Please, Enter a Task!');
        if(taskList.childElementCount == 0){
            taskList.style.display = 'none';
        }
    }
});
trach();