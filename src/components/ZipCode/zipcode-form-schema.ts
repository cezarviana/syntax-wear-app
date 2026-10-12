import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const onlyDigits = (value: string) => value.replace(/\D/g, "");

// /^\d{8}$/.test(v) : regex que retorna true se o CEP tiver exatamente 8 dígitos
const validateZip = (v: string): boolean => { return /^\d{8}$/.test(v); };

export const zipFormSchema = z.object({
    zip: z
    .string()
    .nonempty("Zip Code is mandatory")
    .transform(onlyDigits)
    .refine((v) => validateZip(v), "Invalid Zip Code")
});

export type ZipFormData = z.infer<typeof zipFormSchema>;

export const useZipForm = () => {
    
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ZipFormData>({ resolver: zodResolver(zipFormSchema),
    mode: "onBlur",
    defaultValues: { zip: "" },
    criteriaMode: "all",
    });

    return { register, handleSubmit, errors, isSubmitting, reset };
}