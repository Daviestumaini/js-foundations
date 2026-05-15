const KEY = 'studentList';
const inp    = document.getElementById('inp');
const list   = document.getElementById('list');
const err    = document.getElementById('err');
const countEl = document.getElementById('count');
const emptyEl = document.getElementById('empty');

function load() {
  try { return JSON.parse(localStorage.getItem(KEY)) || []; }
  catch { return []; }
}

function save(arr) {
  localStorage.setItem(KEY, JSON.stringify(arr));
}

function render() {
  const students = load();
  list.innerHTML = '';

  students.forEach((name, i) => {
    const li   = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = name;

    const btn = document.createElement('button');
    btn.className = 'rm';
    btn.setAttribute('aria-label', 'Remove ' + name);
    btn.textContent = '×';
    btn.onclick = () => {
      const arr = load();
      arr.splice(i, 1);
      save(arr);
      render();
    };

    li.appendChild(span);
    li.appendChild(btn);
    list.appendChild(li);
  });

  const n = students.length;
  countEl.textContent = n ? n + ' student' + (n !== 1 ? 's' : '') : '';
  emptyEl.textContent = n ? '' : 'No students yet.';
}

function add() {
  err.textContent = '';
  const name = inp.value.trim();
  if (!name) {
    err.textContent = 'Please enter a name.';
    return;
  }
  const arr = load();
  arr.push(name);
  save(arr);
  render();
  inp.value = '';
  inp.focus();
}

document.getElementById('add-btn').addEventListener('click', add);
inp.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') add();
});

render();
const themeBtn = document.getElementById('theme-btn');

// restore saved theme on load
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  themeBtn.textContent = '🌙';
}

themeBtn.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  themeBtn.textContent = isDark ? '🌙' : '☀️';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});