import { Checkbox } from "@/components/ui/checkbox";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface AreaOption {
  label: string;
  value: string; // Use a string for checkbox values
}

const areas: AreaOption[] = [
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

type AreasSelection = {
  register: any;
  control: any;
  errors: any;
};

export function AreaCheckboxes({ register, control, errors }: AreasSelection) {
  return (
    <ToggleGroup type="multiple" className="flex flex-wrap">
      {areas.map((area) => (
        <div key={area.value} className="relative ">
          <Checkbox
            id={area.value}
            className="sr-only"
            {...register(`${area.value}`)}
          />

          <label
            htmlFor={area.value}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            <ToggleGroupItem
              value={area.value}
              aria-label="Toggle bold"
              className="rounded-full"
              variant="outline"
            >
              {area.label}
            </ToggleGroupItem>
          </label>
        </div>
      ))}
      {errors.areas && (
        <span className="text-red-500">{errors.areas.message}</span>
      )}
    </ToggleGroup>
  );
}
