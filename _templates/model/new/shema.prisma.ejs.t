---
inject: true
to: prisma/schema.prisma
after: //generated model 
skip_if: <%= h.changeCase.pascal(name) %>
---

model <%= h.changeCase.pascal(name) %> {
  id        Int      @id @default(autoincrement())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
