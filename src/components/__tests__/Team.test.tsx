import React from "react";
import Team from "../team/Team";
import { render, waitFor, prettyDOM, fireEvent } from "@testing-library/react";
import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { mocked } from "ts-jest/dist/util/testing";

jest.mock("axios");
let rendering: any;

const renderTeam = () => {
  rendering = render(<Team />);
};

const teamUsersResponse = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653",
      },
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications",
    },
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
      geo: {
        lat: "29.4572",
        lng: "-164.2990",
      },
    },
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: {
      name: "Robel-Corkery",
      catchPhrase: "Multi-tiered zero tolerance productivity",
      bs: "transition cutting-edge web services",
    },
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    address: {
      street: "Skiles Walks",
      suite: "Suite 351",
      city: "Roscoeview",
      zipcode: "33263",
      geo: {
        lat: "-31.8129",
        lng: "62.5342",
      },
    },
    phone: "(254)954-1289",
    website: "demarco.info",
    company: {
      name: "Keebler LLC",
      catchPhrase: "User-centric fault-tolerant solution",
      bs: "revolutionize end-to-end systems",
    },
  },
];

const axiosResponse = (mockData: any): AxiosResponse => {
  return {
    data: mockData,
    status: 200,
    statusText: "OK",
    config: {},
    headers: {},
  };
};

const customApiResponse = () => {
  mocked(axios).mockImplementation((url: any) => {
    const config = url as AxiosRequestConfig;
    if (config?.url?.includes("jsonplaceholder.typicode.com/users")) {
      return Promise.resolve(axiosResponse(teamUsersResponse));
    } else {
      return Promise.resolve({
        data: "",
        status: 500,
        statusText: "OK",
        config: {},
        headers: {},
      });
    }
  });
};

const customApiResponseEmpty = () => {
  const axiosResponse: AxiosResponse = {
    data: [],
    status: 200,
    statusText: "OK",
    config: {},
    headers: {},
  };
  mocked(axios).mockResolvedValue(axiosResponse);
  axios.get = jest.fn().mockResolvedValue({
    data: [],
  });
};

afterEach(async () => {
  jest.clearAllMocks();
//   await waitFor();
});

test("No records display for users table", async () => {
  customApiResponseEmpty();
  await renderTeam();
  const container = rendering.container;
  const noRecordsDisplay = container.getElementsByClassName("empty");
  expect(noRecordsDisplay).toHaveLength(1);
  const noRecords = rendering.getByText("No Records");
  expect(noRecords).not.toBeNull();
});

test("Load user records for table", async () => {
  customApiResponse();
  await renderTeam();
  const container = rendering.container;
  const noRecordsDisplay = container.getElementsByClassName("empty");
  expect(noRecordsDisplay).toHaveLength(0);

  const tableBody = rendering.getByTestId('tableBody');
  expect(tableBody.children).toHaveLength(5);

  expect(tableBody.children[0].childNodes).toHaveLength(8);
});

test("Filter user records by name field in table", async () => {
    customApiResponse();
    await renderTeam();
  
    const nameFilterInput = rendering.getByTestId('name');

    await waitFor(() => {
        fireEvent.change(nameFilterInput, { target: { value: 'le' } });
        fireEvent.blur(nameFilterInput);
    });

    const tableBody = rendering.getByTestId('tableBody');
    expect(tableBody.children).toHaveLength(3);
});

test("Filter user records by address field in table", async () => {
    customApiResponse();
    await renderTeam();
  
    const addressFilterInput = rendering.getByTestId('address');

    await waitFor(() => {
        fireEvent.change(addressFilterInput, { target: { value: 'ku' } });
        fireEvent.blur(addressFilterInput);
    });

    const tableBody = rendering.getByTestId('tableBody');
    expect(tableBody.children).toHaveLength(1);
});

test("Filter user records by name and username field in table", async () => {
    customApiResponse();
    await renderTeam();
  
    const nameFilterInput = rendering.getByTestId('name');
    const usernameFilterInput = rendering.getByTestId('username');

    await waitFor(() => {
        fireEvent.change(nameFilterInput, { target: { value: 'c' } });
        fireEvent.change(usernameFilterInput, { target: { value: 'k' } });
        fireEvent.blur(nameFilterInput);
    });

    const tableBody = rendering.getByTestId('tableBody');
    expect(tableBody.children).toHaveLength(2);
});
