export * from './actions.utils';

export function to(promise, errInfo) {
  return promise
    .then((res) => [undefined, res])
    .catch((err) => {
      if (errInfo) {
        Object.assign(err, errInfo);
      }

      return [err, undefined];
    });
}
