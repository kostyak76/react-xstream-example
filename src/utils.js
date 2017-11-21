import xs from 'xstream';


export function buildStreamAndPusher() {
  let _listener;

  return [
    xs.create({ //stream
      start: lstn => {_listener = lstn},
      stop: () => {}
    }),
    value => _listener.next(value), //pusher
  ]
}
