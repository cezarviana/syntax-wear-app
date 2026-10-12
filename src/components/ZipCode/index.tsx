import { useState } from 'react'
import { useZipForm } from './zipcode-form-schema'
import type { Address } from '../../interfaces/address'
import formatCurrency from '#/utils/format-currency'

const SHIPPING_BY_REGION: Record<string, number> = {
  Norte: 39.9,
  Nordeste: 29.9,
  'Centro-Oeste': 24.9,
  Sudeste: 14.9,
  Sul: 19.9,
}

export const ZipCodeForm = () => {
  const { register, handleSubmit, errors, isSubmitting } = useZipForm()

  const [address, setAddress] = useState<Address | null>(null)
  const [addressError, setAddressError] = useState<string | null>(null)

  const onSubmit = async ({ zip }: { zip: string }) => {
    setAddress(null)
    setAddressError(null)

    // para esperar e o botão calculate apresentar os outros estados: "Calculating..."
    // await new Promise((resolve) => setTimeout(resolve, 3000));


    try {
      const response = await fetch(`https://viacep.com.br/ws/${zip}/json`)
      const data = await response.json()

      const shippingCost = SHIPPING_BY_REGION[data.regiao]
      console.log(data.regiao)
      console.log(shippingCost)

      if (data.erro) {
        setAddressError('Zip Code not found.')
        return
      }

      if (!shippingCost) {
        setAddressError('We do not delivery to this region.')
        return
      }

      setAddress({ ...data, shippingCost: shippingCost })
    } catch {
      setAddressError(
        'An error occurred while retrieving the ZIP code. Please try again later.',
      )
    }
  }

  return (
    <>
      <form className="flex gap-3" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="flex flex-col flex-1">
          <input
            type="text"
            placeholder="Zip Code"
            className={`rounded-md p-3 border border-[#C0C0C0] ${errors.zip ? 'border-red-500' : ''}`}
            aria-invalid={!!errors.zip}
            {...register('zip')}
          />
        </div>
        {errors.zip && (
          <span className="text-red-600 text-sm mt-1">
            {String(errors.zip.message)}
          </span>
        )}
        <button
          className="bg-black text-white py-3 px-6 rounded-md cursor-pointer hover:bg-gray-800 disabled:opacity-50"
          disabled={isSubmitting}
        >
          { isSubmitting ? "Calculating..." : "Caculate" }
        </button>
      </form>

      {addressError && (
        <div className="m-4">
          <p className='text-red-600 text-sm mt-1'>{addressError}</p>
        </div>
      )}

      {address && (
        <div className="m-4">
          <p>
            <strong>Region:</strong> {address.regiao}
          </p>
          <p>
            <strong>Delivery cost:</strong>
            {'  '}
            {formatCurrency(address.shippingCost)}{' '}
          </p>
        </div>
      )}
    </>
  )
}
