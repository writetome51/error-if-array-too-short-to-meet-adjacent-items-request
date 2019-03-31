## errorIfArrayTooShortToMeetAdjacentItemsRequest(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;startingIndex,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;numberRequested,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arrayLength<br>): void

Triggers error if `arrayLength` is too short to have `numberRequested` adjacent  
items beginning at `startingIndex`.


### Examples
```

errorIfArrayTooShortToMeetAdjacentItemsRequest();
// Error: "the array does not have enough items to fulfill your request"
```

### Installation
`npm install  error-if-array-too-short-to-meet-adjacent-items-request`

### Loading
```
// if using TypeScript:
import { errorIfArrayTooShortToMeetAdjacentItemsRequest } 
    from 'error-if-array-too-short-to-meet-adjacent-items-request';
// if using ES5 JavaScript:
var errorIfArrayTooShortToMeetAdjacentItemsRequest = 
    require('error-if-array-too-short-to-meet-adjacent-items-request')
    .errorIfArrayTooShortToMeetAdjacentItemsRequest;
```

### License
[MIT](https://choosealicense.com/licenses/mit/)
