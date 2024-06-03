"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import React, { useState } from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import toast from "react-hot-toast";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import Link from "next/link";

const formSchema = z.object({
    name: z.string(),
    email: z.string(),
    number: z.string(),
    floor: z.string(),
    bhk: z.string(),
    message: z.string().min(50).max(2500).trim()
});

// interface GetEstimateFormProps {
//     initialData?: GetEstimateType | null;
// }
// : React.FC =

const GetEstimateForm = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            name: "",
            email: "",
            number: "",
            floor: "",
            bhk: "",
            message: "",
        },
    });

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement> | React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
        }
    }

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            setLoading(true);
            const url = "/api/getEstimate";
            const res = await fetch(url, {
                method: "POST",
                body: JSON.stringify(values)
            });
            if (!res.ok) {
                throw new Error(await res.text());
            }
        } catch (err) {
            console.log("[getEstimate_POST]", err);
            toast.error("Something went wrong! Please try again");
        } finally {
            setLoading(false);
            toast.success(`Get Estimate Send `);
            window.location.href = '/getEstimate';
            router.push("/getEstimate");
        }
    }

    return (
        <section className="bg-gray-100">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div className="lg:col-span-2 lg:py-12 items-center">
                        <div className='flex text-center pb-8'>
                            <FaQuoteLeft /> 
                                <h2 className='text-heading2-bold px-5'>Get Free Estimate Value </h2>
                            <FaQuoteRight />
                        </div>
                        <p className="max-w-xl text-lg">
                            Summarizes various methods to estimate the value of interior design, including cost per square foot, hourly rates, and value-based pricing. It emphasizes considering factors like complexity, expertise, and client budget for accurate estimates.
                        </p>

                        <div className="mt-8">
                            <Link href={"#"} className="text-2xl font-bold text-pink-600">Contact: +91 70220 47203 </Link>
                            <address className="mt-2 not-italic">BTM Layout, Bengaluru Karnataka India.</address>
                        </div>
                    </div>

                    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                <span className="flex items-center">
                                    <span className="h-px flex-1 bg-black"></span>
                                    <span className="shrink-0 px-6 text-heading3-bold">Let&apos;s Get Started</span>
                                    <span className="h-px flex-1 bg-black"></span>
                                </span>

                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                                                    placeholder="Name"
                                                    {...field}
                                                    onKeyDown={handleKeyPress}
                                                    type="text"
                                                    id="name"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <FormField control={form.control} name="email" render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                                    placeholder="Email address"
                                                    {...field}
                                                    onKeyDown={handleKeyPress}
                                                    type="email"
                                                    id="email"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />

                                    <FormField control={form.control} name="number" render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                                    placeholder="Phone Number"
                                                    {...field}
                                                    onKeyDown={handleKeyPress}
                                                    type="number"
                                                    id="number"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />
                                </div>

                                <FormField
                                    control={form.control}
                                    name="floor"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select Your Interior Floor" />
                                                    </SelectTrigger>
                                                    <SelectContent className="bg-white">
                                                        <SelectItem value="Complete Home Interior">Complete Home Interior</SelectItem>
                                                        <SelectItem value="Modular Kitchen Interior">Modular Kitchen Interior</SelectItem>
                                                        <SelectItem value="Living Room Interior">Living Room Interior</SelectItem>
                                                        <SelectItem value="BedRoom Interior">BedRoom Interior</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="bhk"
                                    render={({ field }) => (
                                        <FormItem className="space-y-3">
                                            <FormControl >
                                                <RadioGroup
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value}
                                                    className="flex flex-col space-y-1"
                                                >
                                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem  value="1 BHK" />
                                                        </FormControl>
                                                        <FormLabel htmlFor="1 BHK">
                                                            1 BHK
                                                        </FormLabel>
                                                    </FormItem>
                                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem  value="2 BHK" />
                                                        </FormControl>
                                                        <FormLabel htmlFor="2 BHK" >
                                                            2 BHK
                                                        </FormLabel>
                                                    </FormItem>
                                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem value="3 BHK" />
                                                        </FormControl>
                                                        <FormLabel htmlFor="3 BHK">
                                                            3 BHK
                                                        </FormLabel>
                                                    </FormItem>
                                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem value="Others" />
                                                        </FormControl>
                                                        <FormLabel htmlFor="Others">
                                                            Others
                                                        </FormLabel>
                                                    </FormItem>
                                                </RadioGroup>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="sr-only" htmlFor="message">Description</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                                    placeholder="Message"
                                                    {...field}
                                                    rows={8}
                                                    onKeyDown={handleKeyPress}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <div className="mt-4 text-center">
                                    <Button
                                        type="submit"
                                        className="inline-block w-full rounded-lg hover:bg-black px-5 font-medium hover:text-white border border-slate-950 sm:w-auto"
                                        disabled={loading}
                                    >
                                        {loading ? "Sending..." : "Get Estimate"}
                                        
                                    </Button>
                                </div>

                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GetEstimateForm;
