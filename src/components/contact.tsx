"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { useState, useCallback, memo } from "react";
import { Mail, ExternalLink, MapPin } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Textarea } from "./ui/textarea";
import { Button } from "./me-ui/button";
import { motion } from "framer-motion";

const formWhatsAppSchema = z.object({
  message: z
    .string()
    .min(10, { message: "Mensagem deve ter pelo menos 10 caracteres" })
    .max(300, { message: "Mensagem deve ter no máximo 300 caracteres" })
});

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
      id: "linkedin",
      href: "https://www.linkedin.com/in/thalyson-rafael-br",
      icon: FaLinkedinIn,
      color: "hover:text-blue-400",
      ariaLabel: "Visitar perfil no LinkedIn"
    },
    {
      id: "github",
      href: "https://github.com/ThalysonRibeiro",
      icon: FaGithub,
      color: "hover:text-gray-400",
      ariaLabel: "Visitar perfil no GitHub"
    },
    {
      id: "X",
      href: "https://x.com/thalyson_rb",
      icon: FaXTwitter,
      color: "hover:text-gray-400",
      ariaLabel: "Visitar perfil no GitHub"
    }
  ]
} as const;

export function Contact() {
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);

  const whatsAppForm = useForm<FormWhatsAppData>({
    resolver: zodResolver(formWhatsAppSchema),
    defaultValues: {
      message: ""
    }
  });

  const handleWhatsAppSubmit = useCallback(
    (values: FormWhatsAppData) => {
      const encodedMessage = encodeURIComponent(values.message);
      const whatsappUrl = `https://wa.me/5565981278291?text=${encodedMessage}`;

      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      whatsAppForm.reset();
      setIsWhatsAppOpen(false);
      toast.success("🔗 Redirecionando para o WhatsApp...");
    },
    [whatsAppForm]
  );

  return (
    <section
      id="contato"
      className="flex items-center justify-center pb-10 scroll-mt-20"
      aria-labelledby="contact-heading"
    >
      <div className="z-10 bg-background max-w-7xl mx-auto border p-6">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold">
              Entre em contato
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Vamos conversar sobre seu próximo projeto! Estou sempre aberto a novas oportunidades e
            colaborações.
          </p>
        </motion.header>

        <motion.div
          variants={ANIMATION_CONFIG.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto"
        >
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

const ContactInfo = memo(
  ({
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
    <motion.div variants={ANIMATION_CONFIG.item} className="grid grid-cols-1 md:grid-cols-2">
      <Card className="transition-all duration-300 rounded-none bg-transparent md:border-r-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-primary" />
            Informações de contato
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3 p-3 hover:bg-muted/50 transition-colors">
            <div className="p-2 border">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <p className="font-medium text-sm text-muted-foreground">Email</p>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-foreground hover:text-primary transition-colors font-medium"
                aria-label="Enviar email"
              >
                {CONTACT_INFO.email}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 hover:bg-muted/50 transition-colors">
            <div className="p-2 border">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="font-medium text-sm text-muted-foreground">Localização</p>
              <p className="text-foreground font-medium">{CONTACT_INFO.location}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div>
        <Card className="bg-transparent rounded-none transition-all duration-300 md:border-b-0 border-t-0 border-b-0 md:border-t">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ExternalLink className="w-5 h-5 text-primary" />
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
                    className={`flex items-center gap-3 p-4 border hover:border-current transition-all duration-200 hover:scale-105 ${social.color} group`}
                    aria-label={social.ariaLabel}
                  >
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </Link>
                );
              })}

              <Dialog open={isWhatsAppOpen} onOpenChange={setIsWhatsAppOpen}>
                <DialogTrigger asChild>
                  <button
                    className="flex items-center gap-3 p-4 border hover:text-green-500 hover:border-green-500 transition-all duration-200 hover:scale-105 group cursor-pointer"
                    aria-label="Abrir conversa no WhatsApp"
                  >
                    <IoLogoWhatsapp className="w-5 h-5 group-hover:scale-110 transition-transform" />
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
                    <form
                      onSubmit={whatsAppForm.handleSubmit(onWhatsAppSubmit)}
                      className="space-y-4"
                    >
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

        <Card className="glass-card bg-transparent rounded-none border-t-0 py-8">
          <CardContent>
            <div className="text-center space-y-4">
              <h3 className="font-bold text-2xl">
                Pronto para transformar sua ideia em realidade?
              </h3>
              <p className="text-muted-foreground text-base max-w-xl mx-auto">
                Respondo todas as mensagens em até 24 horas. Vamos construir algo incrível juntos!
              </p>
              <Button asChild size="lg" className="bg-primary hover:opacity-90">
                <Link href="https://wa.me/5565981278291" target="_blank">
                  💬 Vamos Conversar
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
);

// Display names
ContactInfo.displayName = "ContactInfo";
