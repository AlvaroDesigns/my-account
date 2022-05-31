/* Modules */
import { of } from 'rxjs';
import { catchError, switchMap, take } from 'rxjs/operators';
import { fromFetch } from 'rxjs/fetch';

function getServices(endpoint) {
  return fromFetch(endpoint, {
    credentials: 'same-origin',
    cache: 'no-store',
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
export default getServices;
