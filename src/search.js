function hendleSearch() {
    refs.container.addEventListener('input', debounce(hendleInput, 500));
    
  }
  
  const hendleInput = event => {
    event.preventDefault();
    console.log(event.target.value);
  
    fetchCountries(event.target.value)
      .then(response => {
        if (response.ok) return response.json();
        // throw console.log(ErrorCode[error.response.status] );
        alert('что-то пошло не так');
      })
      .then(data => {
        // console.log(data);
  
        refs.countries.innerHTML = '';
        data.length > 10 &&
          alert('Слишком много совпадений. Конкретизируйте запрос');
        data.length < 2 && addMarkup(data[0]);
        data.length > 2 && data.length < 10 && renderCountryList(data);
      })
      .catch(error => {
        console.error('---ERROR---', error);
      });
  };
  
  export default hendleSearch;