'use client';

import { useCallback, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import EstateButton from '@repo/ui/estate-button';
import { EstateCheckbox } from '@repo/ui/estate-checkbox';
import { EstateInput } from '@repo/ui/estate-input';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { LoginCheckIcon } from '@/components/svg/LoginCheckIcon/icon-day';
import SendIcon from '@/components/svg/SendIcon/send-icon';

const formErrorMessages: Record<string, string> = {
  email: 'A valid email address is required',
  firstName: 'First name is required',
  lastName: 'Last name is required',
};

export default function FooterForm() {
  const [isLoading, setLoading] = useState(false);
  const [hasSignedUp, setSignedUp] = useState(false);
  const defaultValues = {
    firstName: '',
    lastName: '',
    email: '',
    termsChecked: false,
  };
  const form = useForm({
    defaultValues,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = useCallback(() => {
    setSignedUp(true);
  }, []);

  if (hasSignedUp) {
    return (
      <div className="flex flex-col items-center text-center">
        <Image
          src="/images/done.png"
          alt="Thank you"
          width={32}
          height={32}
          priority
        />

        <h1 className="mb-4 mt-2 text-4xl font-bold">
          Form submitted successfully – please confirm your subscription.
        </h1>

        <p className="mb-10 text-center text-xl">
          You will receive an email to confirm your newsletter subscription.
          Click the button in the email to complete your signup.
        </p>
      </div>
    );
  }

  return (
    <>
      <h1 className="text-sm">Get notified for investment opportunities!</h1>
      <h2 className="text-2xl font-bold md:text-4xl">
        Sign up for the newsletter now
      </h2>
      <ul className="mt-2 text-sm md:mt-5">
        <li className="mb-2 flex items-center">
          {/* <Image
            src="/icons/login-check-icon.svg"
            width={32}
            height={32}
            quality={100}
            alt=""
            className="mr-3 h-7 w-7"
          /> */}
          <LoginCheckIcon className="mr-3 h-7 w-7" />
          Free, non-binding, and can be canceled at any time!
        </li>
        <li className="flex items-center">
          <LoginCheckIcon className="mr-3 h-7 w-7" />
          {/* <Image
            src="/icons/login-check-icon.svg"
            width={32}
            height={32}
            quality={100}
            alt=""
            className="mr-3 h-7 w-7"
          /> */}
          Get new offers, special promotions, and estates – never miss out
          again!
        </li>
      </ul>
      <FormProvider {...form}>
        <form method="post" onSubmit={handleSubmit(onSubmit)} className="mt-5">
          <div className="mb-5 flex flex-col items-center justify-center gap-5 lg:flex-row">
            <EstateInput
              color="secondary"
              type="text"
              variant="faded"
              label="First Name"
              isInvalid={!!errors.firstName}
              errorMessage={errors.firstName && 'First name is required'}
            />
            <EstateInput
              color="secondary"
              type="text"
              variant="faded"
              label="Last Name"
              isInvalid={!!errors.lastName}
              errorMessage={errors.lastName && 'Last name is required'}
              {...register('lastName', { required: true })}
            />
          </div>
          <EstateInput
            color="secondary"
            type="email"
            variant="faded"
            label="Email Address"
            isInvalid={!!errors.email}
            errorMessage={errors.email && 'A valid email address is required'}
            {...register('email', {
              required: true,
            })}
          />
          <div className="mb-6 mt-6 flex gap-2">
            <Controller
              render={({ field }) => (
                <EstateCheckbox
                  color="secondary"
                  isRequired={true}
                  isInvalid={!!errors.termsChecked}
                  isSelected={field.value}
                  {...field}
                >
                  <div className="text-sm">
                    I would like to receive news via email and agree to the
                    processing of my personal data as described*. You can
                    unsubscribe at any time.
                  </div>
                </EstateCheckbox>
              )}
              name="termsChecked"
              rules={{ required: true }}
            />
          </div>
          {/* <p className="my-4 text-sm text-secondary">*Required field</p> */}
          <EstateButton
            type="submit"
            variant="solid"
            color="secondary"
            fullWidth={true}
            endContent={<SendIcon className="h-4 w-4" />}
            isLoading={isLoading}
          >
            Sign up now
          </EstateButton>
        </form>
      </FormProvider>
    </>
  );
}
