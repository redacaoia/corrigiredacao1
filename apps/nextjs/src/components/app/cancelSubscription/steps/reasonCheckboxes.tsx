import { Checkbox } from "@/components/ui/checkbox";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface AreaOption {
  label: string;
  value: string; // Use a string for checkbox values
}

const reasonCheckbox: AreaOption[] = [
  {
    value: "nao-preciso-mais",
    label: "Não preciso mais",
  },
  {
    value: "acho-caro",
    label: "Acho caro",
  },
  {
    value: "contratei-um-outro-servico",
    label: "Contratei um outro serviço",
  },
  {
    value: "problemas-tecnicos",
    label: "Problemas técnicos",
  },
  {
    value: "outro-motivo",
    label: "Outro motivo",
  },
];

type ReasonSelection = {
  register: any;
  control: any;
  errors: any;
};

export function ReasonCheckboxes({ register, control, errors }: ReasonSelection) {
  return (
    <ToggleGroup type="multiple" className="flex flex-wrap">
      {reasonCheckbox.map((item) => (
        <div key={item.value} className="relative ">
          <Checkbox
            id={item.value}
            className="sr-only"
            {...register(`${item.value}`)}
          />

          <label
            htmlFor={item.value}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            <ToggleGroupItem
              value={item.value}
              aria-label="Toggle bold"
              className="rounded-full"
              variant="outline"
            >
              {item.label}
            </ToggleGroupItem>
          </label>
        </div>
      ))}
      {errors.reason && (
        <span className="text-red-500">{errors.reason.message}</span>
      )}
    </ToggleGroup>
  );
}
