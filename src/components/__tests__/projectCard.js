import React from "react"
import renderer from "react-test-renderer"
import ProjectCard from "../projectCard"

describe("ProjectCard", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<ProjectCard siteTitle="Site projectCard" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})