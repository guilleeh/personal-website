import React from "react"
import renderer from "react-test-renderer"
import Body from "../body"

describe("Body", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Body siteTitle="Default Starter" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})