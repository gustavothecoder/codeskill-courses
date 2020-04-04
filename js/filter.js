function allCourses() {
    document.querySelectorAll('.course').forEach(course =>{
        course.style.display = 'block';
    }) ;
}

function filterWeb() {
    document.querySelectorAll('[course-web]').forEach(course => {
        course.style.display = 'block';
    });
    document.querySelectorAll('[course-mobile]').forEach(course => {
        course.style.display = 'none';
    });
}

function filterMobile() {
    document.querySelectorAll('[course-web]').forEach(course => {
        course.style.display = 'none';
    });
    document.querySelectorAll('[course-mobile]').forEach(course => {
        course.style.display = 'block';
    })
}