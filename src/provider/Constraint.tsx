import { type ComponentChildren, createContext } from "preact";
import type { Constraints } from "../lib/solver";
import { useState } from "preact/hooks";

export const Constraint = createContext<{
  constraints: Constraints;
  setConstraints: (constraints: Constraints) => void;
}>(null);

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
