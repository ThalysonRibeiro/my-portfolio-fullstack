"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Form,
  FormControl,
  FormField,
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
} from "@/components/ui/dialog";
import React, { useState, useCallback, memo } from 'react';
import { Mail, Send, MessageSquare, ExternalLink, Loader2, MapPin } from 'lucide-react';
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

const formContactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Nome deve ter pelo menos 2 caracteres" })
    .max(50, { message: "Nome deve ter no máximo 50 caracteres" })
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, { message: "Nome deve conter apenas letras" }),
  email: z
    .string()
    .email({ message: "Email inválido" })
    .min(1, { message: "Email é obrigatório" }),
  message: z
    .string()
    .min(10, { message: "Mensagem deve ter pelo menos 10 caracteres" })
    .max(500, { message: "Mensagem deve ter no máximo 500 caracteres" })
});

const formWhatsAppSchema = z.object({
  message: z
    .string()
    .min(10, { message: "Mensagem deve ter pelo menos 10 caracteres" })
    .max(300, { message: "Mensagem deve ter no máximo 300 caracteres" })
});

type FormContactData = z.infer<typeof formContactSchema>;
type FormWhatsAppData = z.infer<typeof formWhatsAppSchema>;

const ANIMATION_CONFIG = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  },
  item: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  }
} as const;

const CONTACT_INFO = {
  email: "rafinha.head@gmail.com",
  phone: "+55 65 98127-8291",
  location: "Natal, Rio Grande do Norte, Brasil",
  socialLinks: [
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/thalyson-rafael-br',
      icon: FaLinkedinIn,
      color: 'hover:text-blue-400',
      ariaLabel: 'Visitar perfil no LinkedIn'
    },
    {
      id: 'github',
      label: 'GitHub',
      href: 'https://github.com/ThalysonRibeiro',
      icon: FaGithub,
      color: 'hover:text-gray-400',
      ariaLabel: 'Visitar perfil no GitHub'
    }
  ]
} as const;


export function Contact() {
  const [isEmailLoading, setIsEmailLoading] = useState(false);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);

  const emailForm = useForm<FormContactData>({
    resolver: zodResolver(formContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const whatsAppForm = useForm<FormWhatsAppData>({
    resolver: zodResolver(formWhatsAppSchema),
    defaultValues: {
      message: ""
    }
  });

  const handleEmailSubmit = useCallback(async (values: FormContactData) => {
    setIsEmailLoading(true);

    try {
      const response = await fetch('https://api-email-topaz.vercel.app/api/send', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      if (!response.ok) {
        throw new Error(`Erro ${response.status}: ${response.statusText}`);
      }

      emailForm.reset();
      toast.success("✅ Mensagem enviada com sucesso! Responderei em breve.");

    } catch (error) {
      console.error('Erro ao enviar email:', error);
      toast.error("❌ Erro ao enviar mensagem. Tente novamente ou use outro meio de contato.");
    } finally {
      setIsEmailLoading(false);
    }
  }, [emailForm]);

  const handleWhatsAppSubmit = useCallback((values: FormWhatsAppData) => {
    const encodedMessage = encodeURIComponent(values.message);
    const whatsappUrl = `https://wa.me/5565981278291?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    whatsAppForm.reset();
    setIsWhatsAppOpen(false);
    toast.success("🔗 Redirecionando para o WhatsApp...");
  }, [whatsAppForm]);

  return (
    <section
      id="contato"
      className="min-h-screen flex items-center justify-center py-16 scroll-mt-20"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto px-4 w-full">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg">
              <MessageSquare className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <h2
              id="contact-heading"
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent"
            >
              Entre em contato
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Vamos conversar sobre seu próximo projeto! Estou sempre aberto a novas oportunidades e colaborações.
          </p>
        </motion.header>

        <motion.div
          variants={ANIMATION_CONFIG.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
        >
          <ContactForm
            form={emailForm}
            onSubmit={handleEmailSubmit}
            isLoading={isEmailLoading}
          />

          <ContactInfo
            whatsAppForm={whatsAppForm}
            onWhatsAppSubmit={handleWhatsAppSubmit}
            isWhatsAppOpen={isWhatsAppOpen}
            setIsWhatsAppOpen={setIsWhatsAppOpen}
          />
        </motion.div>
      </div>
    </section>
  );
}

const ContactForm = memo(({
  form,
  onSubmit,
  isLoading
}: {
  form: ReturnType<typeof useForm<FormContactData>>;
  onSubmit: (values: FormContactData) => Promise<void>;
  isLoading: boolean;
}) => (
  <motion.div variants={ANIMATION_CONFIG.item}>
    <Card className="bg-transparent relative group hover:border-red-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10">

      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Send className="w-5 h-5 text-red-500" />
          Envie uma mensagem
        </CardTitle>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">Nome *</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Seu nome completo"
                      className="focus:border-red-500 focus:ring-red-500"
                      disabled={isLoading}
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
                  <FormLabel className="text-sm font-medium">Email *</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="seu@email.com"
                      className="focus:border-red-500 focus:ring-red-500"
                      disabled={isLoading}
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
                  <FormLabel className="text-sm font-medium">Mensagem *</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Conte-me sobre seu projeto ou como posso ajudá-lo..."
                      className="min-h-[120px] max-h-40 focus:border-red-500 focus:ring-red-500 resize-none"
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                  <div className="text-xs text-muted-foreground text-right">
                    {field.value?.length || 0}/500 caracteres
                  </div>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full group relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-red-500/25"
              size="lg"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Enviar mensagem
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  </motion.div>
));

const ContactInfo = memo(({
  whatsAppForm,
  onWhatsAppSubmit,
  isWhatsAppOpen,
  setIsWhatsAppOpen
}: {
  whatsAppForm: ReturnType<typeof useForm<FormWhatsAppData>>;
  onWhatsAppSubmit: (values: FormWhatsAppData) => void;
  isWhatsAppOpen: boolean;
  setIsWhatsAppOpen: (open: boolean) => void;
}) => (
  <motion.div variants={ANIMATION_CONFIG.item} className="space-y-8">
    <Card className="bg-transparent hover:border-red-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mail className="w-5 h-5 text-red-500" />
          Informações de contato
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
          <div className="p-2 bg-red-100 dark:bg-red-900/20 rounded-lg">
            <Mail className="w-4 h-4 text-red-500" />
          </div>
          <div>
            <p className="font-medium text-sm text-muted-foreground">Email</p>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="text-foreground hover:text-red-500 transition-colors font-medium"
              aria-label="Enviar email"
            >
              {CONTACT_INFO.email}
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
            <MapPin className="w-4 h-4 text-blue-500" />
          </div>
          <div>
            <p className="font-medium text-sm text-muted-foreground">Localização</p>
            <p className="text-foreground font-medium">{CONTACT_INFO.location}</p>
          </div>
        </div>
      </CardContent>
    </Card>

    <Card className="bg-transparent hover:border-red-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ExternalLink className="w-5 h-5 text-red-500" />
          Redes sociais
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-4">
          {CONTACT_INFO.socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <Link
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 p-3 rounded-lg border hover:border-current transition-all duration-200 hover:scale-105 ${social.color} group`}
                aria-label={social.ariaLabel}
              >
                <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">{social.label}</span>
              </Link>
            );
          })}

          <Dialog open={isWhatsAppOpen} onOpenChange={setIsWhatsAppOpen}>
            <DialogTrigger asChild>
              <button
                className="flex items-center gap-3 p-3 rounded-lg border hover:text-green-500 hover:border-green-500 transition-all duration-200 hover:scale-105 group cursor-pointer"
                aria-label="Abrir conversa no WhatsApp"
              >
                <IoLogoWhatsapp className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">WhatsApp</span>
              </button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <IoLogoWhatsapp className="w-5 h-5 text-green-500" />
                  Contato pelo WhatsApp
                </DialogTitle>
                <DialogDescription>
                  Escreva sua mensagem e seja redirecionado para o WhatsApp.
                </DialogDescription>
              </DialogHeader>

              <Form {...whatsAppForm}>
                <form onSubmit={whatsAppForm.handleSubmit(onWhatsAppSubmit)} className="space-y-4">
                  <FormField
                    control={whatsAppForm.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder="Olá! Gostaria de conversar sobre..."
                            className="min-h-[100px] focus:border-green-500 focus:ring-green-500"
                          />
                        </FormControl>
                        <FormMessage />
                        <div className="text-xs text-muted-foreground text-right">
                          {field.value?.length || 0}/300 caracteres
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    size="lg"
                  >
                    <IoLogoWhatsapp className="w-4 h-4 mr-2" />
                    Enviar no WhatsApp
                  </Button>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>

    <Card className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-red-200 dark:border-red-800">
      <CardContent>
        <div className="text-center">
          <h3 className="font-bold text-lg mb-2">Pronto para começar?</h3>
          <p className="text-muted-foreground text-sm">
            Respondo todas as mensagens em até 24 horas. Vamos transformar sua ideia em realidade!
          </p>
        </div>
      </CardContent>
    </Card>
  </motion.div>
));

// Display names
ContactForm.displayName = "ContactForm";
ContactInfo.displayName = "ContactInfo";