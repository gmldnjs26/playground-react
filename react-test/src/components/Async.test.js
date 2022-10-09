/**
 * API 요청을 갖고 있는 컴포넌트의 경우에는 실제로 API를 요청하지 않는다 그 이유는
 * 1. API Server의 과부하
 * 2. 테스트로 인한 데이터 삽입
 **/

import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async Component", () => {
  test("renders posts if request success", async () => {
    // Arrange
    window.fetch = jest.fn(); // insert mock function

    // (한 번만) 비동기 모의 함수가 이행(Resolved)되면 지정한 값을 반환
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First Post" }],
    });
    render(<Async />);

    // Assert
    // findAllByRole은 Promise를 리턴하며 설정한 timeout동안 요청을 반복적으로 해서 해당 요소를 찾는다.
    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
