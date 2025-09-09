"use client"
import { Card, CardContent } from "./ui/card";
import {
  Form,
  FormControl, FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import Link from 'next/link';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

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

const formMessageWhasapp = z.object({
  message: z.string().min(1, { message: "A mensagem é obrigatório" }),
});

type FormMessageWhasappData = z.infer<typeof formMessageWhasapp>;

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

function useFormMessageWhasapp({ message }: FormMessageWhasappData) {
  return useForm<FormMessageWhasappData>({
    resolver: zodResolver(formMessageWhasapp),
    defaultValues: {
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

  const formMessage = useFormMessageWhasapp({
    message: ""
  });


  const onSubmit = async (values: FormContactData): Promise<void> => {
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

  const sendWhatsapp = (): void => {
    window.open(`https://wa.me/65981278291?text=${formMessage.getValues().message}`, "_blank");
    formMessage.reset();
    toast.success("Enviado com sucesso!");
  }


  return (
    <section id="contato" className="flex items-center justify-center">

      <div className="container mx-auto px-4 w-full">
        <h2 className="text-3xl font-bold mb-12 text-center bg-linear-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
          Entre em contato
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Card className='relative group hover:border-red-500/50'>
              <div className="absolute -z-[1] -inset-2 bg-linear-to-r from-red-600 to-orange-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity blur-lg" />
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
                      <Button
                        aria-label='enviar mensagem'
                        type="submit" disabled={isLoading}
                        aria-busy={isLoading}
                        className={`w-full cursor-pointer ${isLoading && "cursor-not-allowed"} bg-linear-to-bl from-red-500/0 to-orange-500/0 hover:from-orange-600 hover:to-red-600 hover:text-white transition-colors duration-300`}>
                        {isLoading
                          ? <div className="w-4 h-4 border border-white border-t-red-500 rounded-full animate-spin" />
                          : "Enviar"}
                      </Button>
                    </div>
                  </CardContent>
                </form>
              </Form>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Informações de contato</h3>
                <div className="flex items-center space-x-3">
                  <Mail aria-label='encaminhar email' size={20} className="text-red-400" />
                  <a href="mailto:rafinha.head@gmail.com" className="hover:text-red-400 transition-colors">
                    rafinha.head@gmail.com
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Mídias sociais</h3>
                <div className="flex space-x-6">
                  <Link
                    href="www.linkedin.com/in/thalyson-rafael-br"
                    target="_blank"
                    rel="noopener noreferrer"
                    title='Linkedin'
                    className="hover:text-red-400 transition-colors"
                  >
                    <FaLinkedinIn aria-label='ir para o linkedin' size={24} />
                  </Link>
                  <Link
                    href="https://github.com/ThalysonRibeiro"
                    target="_blank"
                    rel="noopener noreferrer"
                    title='GitHub'
                    className="hover:text-red-400 transition-colors"
                  >
                    <FaGithub aria-label='ir para o github' size={24} />
                  </Link>

                  <Dialog>
                    <DialogTrigger>
                      <IoLogoWhatsapp aria-label='iniciar conversa no whatsapp'
                        size={24}
                        title='WhatsApp'
                        className="hover:text-red-400 transition-colors cursor-pointer"
                      />
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>
                          Contato pelo WhatsApp
                        </DialogTitle>
                        <DialogDescription>
                          Descreva sua mensagem.
                        </DialogDescription>
                      </DialogHeader>
                      <Form {...formMessage}>
                        <form
                          className="space-y-4"
                          onSubmit={formMessage.handleSubmit(sendWhatsapp)}
                        >
                          <FormField
                            control={formMessage.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
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

                          <Button
                            className="w-full cursor-pointer bg-linear-to-bl from-red-500/0 to-orange-500/0"
                            aria-label='enviar mensagem'
                            type="submit"
                            disabled={isLoading}
                            aria-busy={isLoading}
                          >
                            Enviar
                          </Button>
                        </form>
                      </Form>
                    </DialogContent>
                  </Dialog>

                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};