function showPage(id){document.querySelectorAll('section').forEach(s=>s.style.display='none');document.getElementById(id).style.display='block';}
function addGoal(){let g=JSON.parse(localStorage.getItem('goals')||'[]');g.push(goal.value);localStorage.setItem('goals',JSON.stringify(g));renderGoals();}
function renderGoals(){let g=JSON.parse(localStorage.getItem('goals')||'[]');goalsList.innerHTML=g.map(x=>'<li>'+x+'</li>').join('');}
function saveStudy(){localStorage.setItem('study',studyHours.value);studyOut.textContent=studyHours.value+' hrs';}
function saveSleep(){localStorage.setItem('sleep',sleepHours.value);sleepOut.textContent=sleepHours.value+' hrs';}
function saveNote(){let n=JSON.parse(localStorage.getItem('notes')||'[]');n.push(note.value);localStorage.setItem('notes',JSON.stringify(n));renderNotes();}
function renderNotes(){let n=JSON.parse(localStorage.getItem('notes')||'[]');notesOut.innerHTML=n.map(x=>'<p>'+x+'</p>').join('');}
renderGoals();renderNotes();