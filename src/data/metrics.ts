export interface Metric {
  value: string;
  label: string;
}

export const metrics: Metric[] = [
  { value: "7+", label: "Years experience" },
  { value: "From scratch", label: "Merchant app shipped" },
  { value: "10×", label: "CI/CD faster" },
  { value: "~50%", label: "Faster page loads" },
  { value: "AWS", label: "Infra ownership" },
  { value: "On-call", label: "Production engineer" },
  { value: "E2E", label: "Testing introduced" },
];
