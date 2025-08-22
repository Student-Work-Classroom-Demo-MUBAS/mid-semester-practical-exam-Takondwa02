(function () {
    const form = document.getElementById('enrollForm');
    const fields = [ // objects covering student name, id, course semster
    {
      id: 'studentName',
      errorId: 'studentNameError',
      validate: value => value.trim() !== '', //for validation
      errorMessage: 'Student name is required.'
    },
    {
      id: 'studentId',
      errorId: 'studentIdError',
      validate: value => /^\d{4}-\d{4}$/.test(value),
      errorMessage: 'Student ID must be in format YYYY-NNNN.'
    },
    {
      id: 'courseCode',
      errorId: 'courseCodeError',
      validate: value => value.trim() !== '',
      errorMessage: 'Course code is required.'
    },
    {
      id: 'semester',
      errorId: 'semesterError',
      validate: value => value.trim() !== '',
      errorMessage: 'Semester is required.'
    },
    {
      id: 'reason',
      errorId: 'reasonError',
      validate: value => true, // Optional field, no validation needed
      errorMessage: ''
    }
  ];
    
    const studName = document.getElementById('studentName');
    const studId = document.getElementById('studentId');
    const courseCode = document.getElementById('courseCode');
    const semester = document.getElementById('semester');
    const reason = document.getElementById('reason');

    // document.getElementById('enrollbutton').addEventListener('click', function validation() {
    //     if(studName.value = '') {
    //         alert('Student name is required');
    //         return false;
    //     };
    //     if(studId.value = '') {
    //         alert('Student ID is required');
    //         return false;
    //     };
    //     if(courseCode.value = '') {
    //         alert('Course code is required');
    //         return false;
    //     };
    //     if(semester.value = '') {
    //         alert('Semester is required');
    //         return false;
    //     };
    // });

     reason.addEventListener('input', () => {
        `${reason.value.length} / 200`;
    });

    function clearValidation() {
    form.textContent = '';
    fields.forEach(field => {
      const input = document.getElementById(field.id);
      const errorElem = document.getElementById(field.errorId);
      input.classList.remove('error');
      errorElem.textContent = '';
    });
  }

  function showError(inputElem, errorElem, message) {
    inputElem.classList.add('error');
    errorElem.textContent = message;
  }

    form.addEventListener('submit', function (e){
        e.preventDefault();
        clearValidation();

    })

       
            


    }
)




