import { type ComponentChildren, createContext } from "preact";
import type { Constraints } from "../lib/solver";
import { useState } from "preact/hooks";

const Constraint = createContext(null);

export const ConstraintProvider = ({
  children,
}: {
  children: ComponentChildren;
}) => {
  const [constraints, setConstraints] = useState<Constraints>({
    absent: [],
    present: [],
    incorrect: {},
    correct: {},
  });
  return (
    <Constraint.Provider value={{ constraints, setConstraints }}>
      {children}
    </Constraint.Provider>
  );
};
