import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
    posts: []
})

export { useGlobalState, setGlobalState }