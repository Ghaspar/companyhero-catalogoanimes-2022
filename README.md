## DEV PLANEJAMENTO

### Levantando esforço (escopo + tempo + conhecimento + curva de aprendizado)

#### Objetivo:

Fazer um catalogo de animes conforme escopo, por falta de dominio nos recursos requeridos planejei fazer uma entrega mais simples que atenda a demanda, no caminho vou anotar *"features"* para pós entrega implementar futuramente como um projeto pessoal.  

#### Tecnologias propóstas:

- React Js              (done)
- Next Js               (done)
- Ant.Design            (done)
- Less Css              (fail) 
- Vercel (servidor)     (done)

#### Estrutura planejada:

- Pages:
    - Home (Apenas para introdução do projeto)
    - Painel exibindo 8 animes conforme utilizado kitsu API lib.
    - Página trazendo informações somente do anime selecionado.
    
#### Estratégia de SEO utilizada.

Foi implementado na _app.js um 'head' com conteúdo default, assim garantindo que todas as páginas vão ter o básico em metas para o buscador google, criado o componente 'mainHeader' para cada página conter seu h1 próprio garantindo um lugar no rank do google para cada página, alem disso também foi implementado a lib de 'next-seo' para cada página ter suas metas especificas sobre o conteúdo exibido pela mesma.  

Incluido sitemap e robots básicos só para ilustrar como eu lidaria com um projeto real nessa parte de performar em SEO.


#### Features planejadas

- Filtro por categorias
- URL (catalogo/$categoy/$slug/$id)
- melhorar componentização de estrutura deixar mais leve
- utilizar '/utils' para as requisições na API
- Melhorar layout

# Considerações de entrega

Foi um projeto um tanto desafiador pra mim, pois tirando o react/nextjs, eu nunca tinha usado o ant design e o vercel, mas no fim acabei me virando muito bem, na estilização optei por utilizar o sass, o ideal era alterar para less para manipular melhor o ant design, porem ali deu uns erros no processo de conversão, então pra não empacar eu utilizei o sass que é práticamente igual o less então nesse ponto não consegui demostrar minha dominação nele mas não tenho problema algum em estilizar utilizando o less.

Tem pontos que posso ir mais longe no projeto como modular mais componentes, fazer as requisições com a api utilizando o utils, melhorar o layout e adicionar um filtro de categorias, mas me foquei em ser simples e funcional nesse ponto, já que eu teria que aprender e desenvolver dentro da propósta  e prazo levantados.

Espero que gostem, fiz com muito carinho e dedicação, o projeto não para na entrega, no meu tempo livre vou seguir com as features levantadas e levantar mais algumas até eu ficar satisfeito com o projeto. 

Obrigado pela oportunidade!


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

