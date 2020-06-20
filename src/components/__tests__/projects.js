import React from "react"
import renderer from "react-test-renderer"
import Projects from "../projects"

describe("Projects", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Projects siteTitle="Site projects" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})