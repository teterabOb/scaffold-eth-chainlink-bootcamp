# 🏗 Scaffold-ETH 2

<h4 align="center">
  <a href="https://docs.scaffoldeth.io">Documentación</a> |
  <a href="https://scaffoldeth.io">Sitio Web</a>
</h4>

🧪 Un kit de herramientas de código abierto y actualizado para construir aplicaciones descentralizadas (dapps) en la cadena de bloques Ethereum. Está diseñado para facilitar a los desarrolladores la creación y despliegue de contratos inteligentes y la construcción de interfaces de usuario que interactúen con esos contratos.

⚙️ Construido usando NextJS, RainbowKit, Hardhat, Wagmi, Viem y Typescript.

- ✅ **Recarga en caliente de contratos**: Tu frontend se adapta automáticamente a tu contrato inteligente a medida que lo editas.
- 🪝 **[Hooks personalizados](https://docs.scaffoldeth.io/hooks/)**: Colección de envoltorios de hooks de React alrededor de [wagmi](https://wagmi.sh/) para simplificar las interacciones con los contratos inteligentes con autocompletado de Typescript.
- 🧱 [**Componentes**](https://docs.scaffoldeth.io/components/): Colección de componentes web3 comunes para construir rápidamente tu frontend.
- 🔥 **Billetera Burner y Grifo Local**: Prueba rápidamente tu aplicación con una billetera burner y un grifo local.
- 🔐 **Integración con proveedores de billeteras**: Conéctate a diferentes proveedores de billeteras e interactúa con la red Ethereum.

![Pestaña de depuración de contratos](https://github.com/scaffold-eth/scaffold-eth-2/assets/55535804/b237af0c-5027-4849-a5c1-2e31495cccb1)

## Requisitos

Antes de comenzar, necesitas instalar las siguientes herramientas:

- [Node (>= v18.17)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) o [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Inicio rápido

Para comenzar con Scaffold-ETH 2, sigue los pasos a continuación:

1. Clona este repositorio e instala las dependencias

```
git clone https://github.com/scaffold-eth/scaffold-eth-2.git
cd scaffold-eth-2
yarn install
```

2. Ejecuta una red local en la primera terminal:

```
yarn chain
```

Este comando inicia una red Ethereum local utilizando Hardhat. La red se ejecuta en tu máquina local y se puede utilizar para pruebas y desarrollo. Puedes personalizar la configuración de la red en `hardhat.config.ts`.

3. En una segunda terminal, despliega el contrato de prueba:

```
yarn deploy
```

Este comando despliega un contrato inteligente de prueba en la red local. El contrato se encuentra en `packages/hardhat/contracts` y se puede modificar para adaptarse a tus necesidades. El comando `yarn deploy` utiliza el script de despliegue ubicado en `packages/hardhat/deploy` para desplegar el contrato en la red. También puedes personalizar el script de despliegue.

4. En una tercera terminal, inicia tu aplicación NextJS:

```
yarn start
```

Visita tu aplicación en: `http://localhost:3000`. Puedes interactuar con tu contrato inteligente utilizando la página `Debug Contracts`. Puedes ajustar la configuración de la aplicación en `packages/nextjs/scaffold.config.ts`.

Ejecuta la prueba del contrato inteligente con `yarn hardhat:test`

- Edita tu contrato inteligente `YourContract.sol` en `packages/hardhat/contracts`
- Edita tu frontend en `packages/nextjs/pages`
- Edita tus scripts de despliegue en `packages/hardhat/deploy`

## Documentación

Visita nuestra [documentación](https://docs.scaffoldeth.io) para aprender cómo comenzar a construir con Scaffold-ETH 2.

Para conocer más sobre sus características, visita nuestro [sitio web](https://scaffoldeth.io).

## Contribuyendo a Scaffold-ETH 2

¡Damos la bienvenida a las contribuciones a Scaffold-ETH 2!

Por favor, consulta [CONTRIBUTING.MD](https://github.com/scaffold-eth/scaffold-eth-2/blob/main/CONTRIBUTING.md) para obtener más información y pautas para contribuir a Scaffold-ETH 2.