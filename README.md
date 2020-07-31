## errorIfArrayTooShortToMeetAdjacentItemsRequest(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;startingIndex,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;numberRequested,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arrayLength<br>): void

Triggers error if `arrayLength` is too short to have `numberRequested` adjacent  
items beginning at `startingIndex`.  
`startingIndex` can be negative or positive.


### Example
```
let arr = [1,2,3,4,5,6];
errorIfArrayTooShortToMeetAdjacentItemsRequest(1, 6, arr.length);
// Error: "the array does not have enough items to fulfill your request"
```

### Installation
`npm install  error-if-array-too-short-to-meet-adjacent-items-request`

### Loading
```js
import { errorIfArrayTooShortToMeetAdjacentItemsRequest } 
    from 'error-if-array-too-short-to-meet-adjacent-items-request';
```

### License
[MIT](https://choosealicense.com/licenses/mit/)
