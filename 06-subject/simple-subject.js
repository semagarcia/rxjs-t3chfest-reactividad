const subject = new Rx.Subject();

subject.subscribe(d => console.log('[SUB1] Data: ', d));
subject.subscribe(d => console.log('[SUB2] Data: ', d));

for(let i=0; i<5; i++) {
    subject.next(i * 10);
}
