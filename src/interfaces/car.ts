export interface ICar {
  brand_id: number;
  model_id: number;
  name: string;
  model: string;
  country: string;
  description: string;
  year: number;
  hp: number;
  color: string;
  torqe: number;
  transmission: String;
  topSpeed: number;
  engine: string;
  size: {
    width: number;
    height: number;
    lenght: number;
  };
  weight: number;
}
