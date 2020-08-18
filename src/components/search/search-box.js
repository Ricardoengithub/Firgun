import React from "react"
import { connectSearchBox } from "react-instantsearch-dom"
// import { Search as SearchIcon } from "@styled-icons/fa-solid"
import { Form, FormControl } from "react-bootstrap"


export default connectSearchBox(
  ({ refine, currentRefinement, className, onFocus }) => (

    <Form inline>
        <FormControl 
            type="text"
            placeholder="Search"
            aria-label="Search"
            onChange={e => refine(e.target.value)}
            value={currentRefinement}
            onFocus={onFocus} className="mr-sm-2" />
    </Form>
  )
)