async function editFormHandler(event) {
  event.preventDefault();
  console.log('hey');
  
  const description = document.querySelector('#description').value;
  const title = document.querySelector('#title').value;

  // window.location gives us access to the URL. We then use the .split() method to access the number at the end of the URL and set that equal to id.
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  // What part of our application will handle this 'put' request?
  // The Controller will handle this 'put' request.

  const response = await fetch(`/api/project/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      description
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // What happens if the response is ok?
  // If the response is ok, that means that the dish was updated successfully.
  if (response.ok) {
    document.location.replace(`/project/${id}`);
  } else {
    alert('Failed to edit post');
  }
}

document
  .querySelector('.btn')
  .addEventListener('submit', editFormHandler);
