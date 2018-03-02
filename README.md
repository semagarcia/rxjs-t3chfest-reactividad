# rxjs-t3chfest-reactividad
Code repository of my talk about Rx and RxJS for [T3chFest2018](https://t3chfest.uc3m.es/2018/) (Leganés, Spain 2018).

# Table of Content
- [01 - Async datasources](#01)
- [02 - Callbacks](#02)
- [03 - New structures](#03)
- [04 - Seems an observable](#04)
- [06 - Subjects](#06)
- [07 - T3chfy State Machine](#07)
- [08 - Angular Auth](#08)

# Presentation (PPT)
The presentation can be found [here](https://www.slideshare.net/sema_hkd/).

# Examples
## 01 - Async DataSources <div id="01" />
Example situation to show the difference between sync and async operation:
- *sync-way.ts*: a sync save operation to the backend. With this example, the application will be blocked (remember that JavaScript is single-thread) until the request finishes. 
- *async-rp-way.ts*: in the asynchronous version, we use callbacks to not block the main execution. With this approach, it doesn't matter how much time takes the request, because we are not freezing the app.

To avoid to transpile the examples, there are the correspondent JavaScript version, in order to copy & paste easily to execute in the browser or in node.js.

## 02 - Callbacks <div id="02" />
Basic examples to show different use of callbackers, sync and async.
- *Clicks*: asynchronous callback to log each click on the screen (inside the body).
- *Array*: synchronous callback to print through console the numbers contained in the array.
- *Fetch*: asynchronous callbacks for an AJAX request (success callback) and another callback for error handling.
- *File*: asynchronous callbacks for: line read, error handling and file processed.

## 03 - New Structures <div id="03" />
Improved examples (evolving the [previous one](#02)).
### notifier.js
This file defines the three types of callbacks seen in the previous examples, standardized in this *notifier* object:
- *onData*: executed for each stream or event produced/emitted.
- *onError*: executed when an error ocurred.
- *onEnd*: executed when the stream has completed.

This notifier is just a function that will receive these three callbacks; for instance:
```js
const myWatcher = notifier(
    (data) => { /* Data produced */ },
    (error) => { /* Error */ },
    () => { /* Stream complete */ },
);
```

### Examples:
- *Clicks*: this browserable example will observe the clicks emitted inside the body element. This click stream produced will be logged through the notifier object.
- *Array*: this example shows the numbers contained inside of an array using notifier object, which is populated with logger for trace elements and another one to trace the end of the array.
- *Fetch*: this example shows how perform a fetch operation and log the result if it was successful or the error if the request failed.
- *File*: last full example to show a case when the three callbacks could be used. This snippet will trace each line (dataCb), an error (errorCb) and the end of the file (endCb). The same file contains a second execution to force an error trying to read an inexisten file.

## 04 - Seems an observable <div id="04" />
Snippets related to the lion example (see the slides of the PPT):
- *new-array.js*: convert array number example to lion array and use the observable structure.
- *someObs.js*: two observers subscribed to lion observable.
- *createObs.js*: use a function to create observables.
- *createObs2.js*: extend the previous example with filter operation. By default, the example has commented the last line (*.subscribe()*), in order to show how the observable does not work until this line would be uncommented.

## 06 - Subject <div id="06" />
- *simple-subject.js*: very basic example to show how subject works (observable and observer at same time). Once the subject is created, two subscription is created to observe the values emited. After that, the subject will emit five values. There is no unsubscribe operation (not recommended).
- *death-subject.js*: one subject created, which it will emit two values, then will be marked as complete (there is no more elements emitted). Although there is one value emitted (number 3), it is ignored because the stream is already finished by the previous *complete()* call. At this moment, the observer is subscribed yet, but no receives more data. However, after perform the *unsubscribe()*, if we try to emit a new value, we'll obtain *"Unhandled ObjectUnsubscribedError"*.

## 07 - Subject t3chfy state machine <div id="07" />

## 08 - Angular Auth <div id="08" />
Angular project made to show the use of subjects, subscribing to an source that emits the changes in the auth state (logged in / logged out). There are the following components in the UI:
- *Header*: it's the navbar and in its right side there is a button to switch between logged in and logged out.
- *Component one and three*: they are simple and plain objects which are subscribed to user's auth state.
- *Component two*: this component is also subscribed to the user's auth state, but after this initial step (subscription), it will be unsuscribed to show how this component won't listen changes anymore.
- *Core auth service*: service to log in or log out (mocked) and expose a method to subscribe to this changes.

# Disclaimer
Some of these examples are focused to show how some concept or topic works. Please, don't follow the examples line by line. For instance, in the Angular example, there is no unsubscribe action, what it could introduce a memory leak, but exemplifies how subscription/unsubscribe works.