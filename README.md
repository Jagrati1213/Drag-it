# REACT FLOW:

- It only used with React js.
- Need to import react-flow and react-flow style file, after that react-flow works.
- parent container needs a width and a height, because React Flow uses its parent dimensions.
- If you have multiple flows on one page, you need to pass a unique id prop to each component to make React Flow work properly.

## Id in Nodes:

- Each node have there own Id and position, and it's required.
- ID must be string type. If Id is same then second Id overlap the first Id.

## Connects Node by target/source:

- We used `useState`, `useCallback`, `applyEdgesChanges` and `applyNodeChanges`.
- To makeable drag things working.

## Create Edges to connect Node by manually:

- for this we used one more handler called `onconnect` and `addEdge`.

## Today's Task 👍:

- Learn Custom Node how to create.
- With input fields
