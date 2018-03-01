const subject = new Rx.Subject();

subject.subscribe(d => console.log('[SUB1] Data: ', d));

subject.next(1);    // 1
subject.next(2);    // 2
subject.complete();

subject.next(3);    // silently ignored

subject.unsubscribe();
subject.next(4);    // Unhandled ObjectUnsubscribedError