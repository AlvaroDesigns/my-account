/* Modules */
const { of } = require('rxjs');
const { catchError, take, switchMap } = require('rxjs/operators');
const { ajax } = require('rxjs/ajax');

function postServices(endpoint, body) {
  return ajax({
    url: endpoint,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      ...body,
    },
  }).pipe(
    take(1),
    switchMap((response) => {
      if (response.ok) {
        return response.json();
      }
      return of({
        error: true,
        message: `Error fetching products ${response.statusText}`,
      });
    }),
    catchError((err) =>
      of({
        error: true,
        message: err.message,
      })
    )
  );
}

/* Export */
export default postServices;
