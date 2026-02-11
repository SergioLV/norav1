export interface PaymentMethod {
  id: string
  label: string
  rate: number
}

export const PAYMENT_METHODS: PaymentMethod[] = [
  { id: 'cards', label: 'Tarjetas Débito/Crédito', rate: 0.0299 },
  { id: 'mach', label: 'Mach', rate: 0.0199 },
  { id: 'khipu', label: 'Khipu', rate: 0.0199 },
  { id: 'fintoc', label: 'Fintoc', rate: 0.0199 },
  { id: 'etpay', label: 'etpay', rate: 0.0199 },
  { id: 'pago46', label: 'Pago46', rate: 0.0299 },
]

export const PAYOUT_RATE = 0.0199
export const DEFAULT_IVA = 0.19
export const DEFAULT_FEE_NORA = 1000
export const MIN_PRICE = 1000
export const MAX_PRICE = 1000000

export function formatCLP(n: number): string {
  return '$' + Math.round(n).toLocaleString('es-CL')
}
