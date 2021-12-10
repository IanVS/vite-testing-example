type Props = {
  type: string;
  name: string;
  age: number;
};

export function Animal({ type, name, age }: Props) {
  return <span>{`${name} the ${type} is ${age} years old.`}</span>;
}
