export function formatValueToReal(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
