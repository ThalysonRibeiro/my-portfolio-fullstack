"use client"
import { Card, CardContent } from "./ui/card";
import {
  Form,
  FormControl, FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import React, { useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { IoLogoWhatsapp } from "react-icons/io5";
import Link from 'next/link';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

interface UseFormContactProps {
  name: string;
  email: string;
  message: string;
}

const formContactSchema = z.object({
  name: z.string().min(1, { message: "O nome é obrigatório" }),
  email: z.string().email({ message: "O email é obrigatório" }),
  message: z.string().min(1, { message: "A mensagem é obrigatório" })
});

type FormContactData = z.infer<typeof formContactSchema>;

function useFormContact({ name, email, message }: UseFormContactProps) {
  return useForm<FormContactData>({
    resolver: zodResolver(formContactSchema),
    defaultValues: {
      name: name || "",
      email: email || "",
      message: message || ""
    }
  });
}

export function Contact() {
  const [isLoading, setIsLoading] = useState(false);


  const form = useFormContact({
    name: "",
    email: "",
    message: ""
  });

  async function onSubmit(values: FormContactData): Promise<void> {
    setIsLoading(true);
    try {
      const response = await fetch('https://api-email-topaz.vercel.app/api/send', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar e-mail');
      }

      await response.json();
      form.reset();
      toast.success("Enviado com sucesso!");
    } catch (error: unknown) {
      console.log(error);
      toast.error('Ocorreu um erro ao enviar. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="contato" className="flex items-center justify-center">

      <div className="container mx-auto px-4 w-full">
        <h2 className="text-3xl font-bold mb-12 text-center bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Entre em contato
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="">
            <Card>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <CardContent>
                    <div className="space-y-2">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nome</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Digite seu nome."
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Digite seu email."
                              />
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
                            <FormLabel>Mensagem</FormLabel>
                            <FormControl>
                              <Textarea
                                {...field}
                                placeholder="Descreva sua mensagem."
                                className="h-28 max-h-32"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" disabled={isLoading} className={`w-full cursor-pointer ${isLoading && "cursor-not-allowed"}`}>
                        {isLoading
                          ? <div className="w-4 h-4 border border-white border-t-violet-500 rounded-full animate-spin" />
                          : "Enviar"}
                      </Button>
                    </div>
                  </CardContent>
                </form>
              </Form>
            </Card>

          </div>


          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Informações de contato</h3>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-purple-400" />
                <a href="mailto:rafinha.head@gmail.com" className="hover:text-purple-400 transition-colors">
                  rafinha.head@gmail.com
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Mídias sociais</h3>
              <div className="flex space-x-6">
                <Link
                  href="https://www.linkedin.com/in/thalyson-rafael/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title='Linkedin'
                  className="hover:text-purple-400 transition-colors"
                >
                  <Linkedin size={24} />
                </Link>
                <Link
                  href="https://github.com/ThalysonRibeiro"
                  target="_blank"
                  rel="noopener noreferrer"
                  title='GitHub'
                  className="hover:text-purple-400 transition-colors"
                >
                  <Github size={24} />
                </Link>
                <Link
                  href="https://wa.me/65981278291?text=Oi! Deixe sua mensagem que respondo assim que puder."
                  target="_blank"
                  rel="noopener noreferrer"
                  title='WhatsApp'
                  className="hover:text-purple-400 transition-colors"
                >
                  <IoLogoWhatsapp size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};