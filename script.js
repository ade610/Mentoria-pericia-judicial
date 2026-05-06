const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("[data-menu]");
const whatsappForm = document.querySelector("[data-whatsapp-form]");
const whatsappNumber = "5543996015086";

function closeMenu() {
  menu?.classList.remove("is-open");
  document.body.classList.remove("menu-open");
  menuToggle?.setAttribute("aria-expanded", "false");
}

menuToggle?.addEventListener("click", () => {
  const isOpen = menu?.classList.toggle("is-open");
  document.body.classList.toggle("menu-open", Boolean(isOpen));
  menuToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
});

menu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

whatsappForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(whatsappForm);
  const nome = data.get("nome")?.toString().trim();
  const profissao = data.get("profissao")?.toString().trim();
  const whatsapp = data.get("whatsapp")?.toString().trim();
  const email = data.get("email")?.toString().trim();
  const mensagem = data.get("mensagem")?.toString().trim();

  const text = [
    "Olá, Ademilson Melo. Tenho interesse na Mentoria Perícia Judicial.",
    "",
    `Nome: ${nome}`,
    `Profissão: ${profissao}`,
    `WhatsApp: ${whatsapp}`,
    `E-mail: ${email}`,
    `Mensagem: ${mensagem}`,
  ].join("\n");

  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  whatsappForm.reset();
});
