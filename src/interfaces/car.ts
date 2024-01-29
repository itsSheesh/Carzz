export interface ICar {
  brand_id: number;
  model_id: number;
  name: string;
  model: string;
  country: string;
  description: string;
  year: number;
  hp: number;
  torque: number;
  transmission: String;
  topSpeed: number;
  engine: string;
  size: {
    width: number;
    height: number;
    length: number;
  };
  weight: number;
}
