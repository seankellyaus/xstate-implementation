import { Machine } from "xstate";

const employmentSteps = Machine({
  key: "employment",
  initial: "draft",
  states: {
    draft: {
      on: {
        SUBMIT: "review"
      }
    },
    review: {
      on: {
        SUBMIT: "manager",
        REJECT: "draft"
      }
    },
    manager: {
      on: {
        APPROVE: "complete",
        REJECT: "review"
      }
    },
    complete: {
      on: {
        RESTART: "draft"
      }
    }
  }
});

export { employmentSteps };
