import React from "react";
import Footer from "./Footer";
import { shallow, mount, render } from "enzyme";
import "../../../setupTests";

describe("Footer component", () => {
  it("renders without crashing", () => {
    shallow(<Footer />);
  });

  it('should be selectable by class "footer-bar"', function() {
    expect(shallow(<Footer />).is(".footer-bar")).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<Footer />).find('.footer-bar').length).toBe(1);
  });

  it('should render to static HTML', function() {
    expect(render(<Footer />).text()).toEqual(`Created by Adam Osiński, 2019©`);
  });
});
