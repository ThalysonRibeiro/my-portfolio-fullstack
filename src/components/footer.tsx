export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto py-4">
        <p className="mt-6 text-center text-sm text-muted-foreground md:mt-0">
          © {new Date().getFullYear()} Thalyson Rafael. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}