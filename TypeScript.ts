//! დაწერეთ არსებული კოდი Typescript-ში:

// მაგალითი 1

type Name = string;
let names: Name = "Alice";

// მაგალითი 2
type Num = Number;
let numbers: Number[] = [1, 2, 3];

// მაგალითი 3

function multiply(a: number, b: number): number {
  return a * b;
}

// მაგალითი 4
type user = {
  id: Number;
  name: String;
};

const users: user = { id: 1, name: "Alice" };

// მაგალითი 5
// რისთვის ვიყენებთ არსებული კოდში = Guest-ს :

function greet(name: string = "Guest") {}

// პასუხი:
// დეფოლთ მნიშვნელობააა ნეიმის

// მაგალითი 6
// დაწერეთ ტიპი რომელიც მოერგება ყველა ქვემოთ ჩამოთვლილ ელემენტს. მაგ: type Config = {
type Config = {
  theme: string;
  options: {
    fontSize: Number;
    layout: undefined;
  };
  tester: string;
};
const config1 = {
  theme: "dark",
  options: {
    fontSize: 16,
    layout: null,
  },
};

const config2 = {
  theme: "dark",
};

const config3 = {
  tester: "test",
};

// მაგალითი 7
// დაწერეთ ტიპი რომელიც მოერგება ყველა ქვემოთ ჩამოთვლილ ელემენტს. მაგ: type MixedArray =

type MixedArray = [
  [number, string, { name: string }],
  [string, boolean, { isValid: boolean }],
  any
];
const array1 = [42, "hello", { name: "Alice" }];
const array2 = ["apple", true, { isValid: false }];
const array3 = [];

// მაგალითი 8
// აღწერეთ რისი ტიპიზაცია ხდება არსებულ კოდში წერილობით

type Handler = {
  process?: () => string;
  validate?: (input: string) => boolean;
  log?: () => void;
};

// მაგალითი 9

// შექმენით ტიპი მონაცემისთივს:

type User = {
  id: number;
  username: string;
  isAdmin: boolean;
  profile: {
    fullName: string;
    age: number;
    interests: string[];
  };
  settings: {
    theme: string;
    notifications: {
      email: boolean;
      sms: boolean;
    };
  };
  metadata: undefined;
};

const user: User = {
  id: 101,
  username: "tech_learner",
  isAdmin: false,
  profile: {
    fullName: "Alice Johnson",
    age: 25,
    interests: ["coding", "gaming", "reading"],
  },
  settings: {
    theme: "dark",
    notifications: {
      email: true,
      sms: false,
    },
  },
  metadata: undefined,
};
