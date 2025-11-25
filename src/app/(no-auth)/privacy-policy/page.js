import React from 'react'
import { Poppins } from 'next/font/google'
import Link from 'next/link'

const poppins = Poppins({
  subsets: ['latin'],
  style: 'normal',
  weight: ['400', '500', '600'],
  display: 'swap',
  fallback: ['sans-serif'],
})

export default async function Page() {
  return (
    <main
      className={`${poppins.className} relative z-20 mt-14 md:mb-10 md:mt-40 w-full max-w-screen-xl overflow-y-hidden h-full min-h-screen px-6 py-20 bg-white text-Black flex flex-col items-center gap-4 md:rounded-xl`}
    >
      <div className=" md:px-4 xl:px-6 relative w-full flex flex-col items-center gap-8">
        <section className="w-full flex flex-col gap-4">
          <TitleStyled>BEM-VINDO AO EXXXTREMO</TitleStyled>
          <ParagraphStyled>
            Sua privacidade é importante para nós. Para proteger melhor suas
            informações, fornecemos este aviso que explica nossas práticas de
            informações online e as escolhas que você pode fazer sobre como suas
            informações são coletadas e utilizadas em conexão com este Portal.
          </ParagraphStyled>
          <ParagraphStyled>
            Esta Política de Privacidade se aplica ao serviço EXXXTREMO e cobre
            informações coletadas sobre, por meio ou relacionadas ao seu uso
            deste Portal.
          </ParagraphStyled>
          <ParagraphStyled>
            As informações enviadas ou coletadas por meio deste Portal podem ser
            transferidas, processadas e mantidas em países diferentes daquele em
            que você reside.
          </ParagraphStyled>
          <ParagraphStyled>
            Ao usar o serviço EXXXTREMO, você concorda explicitamente com a
            coleta e uso de suas informações pessoais, conforme descrito nesta
            &quot;Política de Privacidade&quot;, e consente com as
            &quot;Condições Gerais&quot; deste Portal.
          </ParagraphStyled>
          <ParagraphStyled>
            Por favor, leia atentamente esta Política de Privacidade e, se tiver
            alguma dúvida, entre em contato conosco pelo{' '}
            <Link
              target="_blank"
              href="mailto:info@memoob.com"
              rel="noopener noreferrer"
              className="text-sky-600 hover:text-sky-800 underline transition-colors "
            >
              info@memoob.com
            </Link>
          </ParagraphStyled>
        </section>
        <section className=" w-full flex flex-col gap-4">
          <Title2Styled>1. TIPOS DE INFORMAÇÕES COLETADAS</Title2Styled>
          <ParagraphStyled>
            TIM Brasil e Cristanero S.A. coletam informações pessoais e não
            pessoais identificáveis sobre você e seu uso deste portal, incluindo
            as seguintes categorias de informações: Informações fornecidas por
            você ao assinar o portal, incluindo seu país de residência e número
            de telefone móvel/MSISDN.
          </ParagraphStyled>
          <ul className=" flex flex-col gap-2">
            <li>
              i. Informações que você fornece ao acessar o serviço EXXXTREMO.
            </li>
            <li>
              ii. Informações de localização (país) quando você visita nosso
              endereço de internet no seu celular ou ao usar este portal,
              incluindo informações de localização fornecidas por dispositivos
              móveis que interagem com nosso endereço de internet (incluindo
              tecnologias de cookies ou beacons) ou associadas ao seu endereço
              IP, quando são permitidas por lei para processar essas
              informações.
            </li>
            <li>
              iii. Endereço IP (Protocolo de Internet) usado por você para
              acessar este portal e histórico de uso.
            </li>
            <li>
              iv. Informações fornecidas ao usar este portal ou a interface do
              usuário da TIM Brasil.
            </li>
            <li>
              v. Uso, histórico de visualização de vídeos e hábitos de
              visualização, incluindo seu endereço IP quando você visita nosso
              endereço web.
            </li>
          </ul>
        </section>
        <section className=" w-full flex flex-col gap-4">
          <Title2Styled>
            2. INFORMAÇÕES QUE COLETAMOS AUTOMATICAMENTE
          </Title2Styled>
          <ParagraphStyled>
            Coletamos automaticamente certas informações não identificáveis para
            nos ajudar a entender como você usa este site (que nos referiremos
            coletivamente nesta Política de Privacidade como &quot;Dados de
            Uso&quot;). Por exemplo, sempre que você usa o serviço EXXXTREMO,
            podemos registrar seu endereço IP e outras informações sobre sua
            conectividade à Internet. Usamos informações não pessoais
            identificáveis para revisar seu uso deste site, incluindo, sem
            limitação: sua atividade online nesta página, seleção de títulos,
            avaliações, avaliações, correspondências, endereços IP, tipos de
            dispositivos, dados únicos de dispositivos, identificadores de
            dispositivos), sistemas operacionais, visualização instantânea de
            vídeos, acesso a editoriais, acessórios e atividades relacionadas no
            site. Usamos essas informações para esses fins, determinando sua
            localização geográfica geral, aplicando nossos termos, fornecendo
            recomendações em vídeo, permitindo que possamos aprimorar o design e
            o conteúdo deste portal. Além disso, usamos uma tecnologia chamada
            &quot;cookies&quot;. Um cookie é um dado que identifica você como um
            usuário único. Usamos cookies para melhorar a qualidade e facilitar
            o uso deste site. Fazemos isso armazenando informações (por exemplo,
            preferências de configurações) sobre uma sessão específica do
            usuário em cookies para proporcionar uma experiência fluida durante
            uma sessão específica. Você pode configurar seu navegador para
            deletar cookies existentes ou desativar completamente os cookies. No
            entanto, alguns recursos deste portal podem não funcionar se você
            excluir ou desativar cookies. Permitimos que empresas terceirizadas
            exibam anúncios e/ou coletem certas informações anônimas quando você
            visita nosso site/site pelo seu celular. Essas empresas podem usar
            informações não pessoais identificáveis (por exemplo, informações de
            cliques, tipo de navegador, hora e data, assunto dos anúncios
            clicados ou rolados) durante suas visitas a este e outros sites para
            fornecer anúncios sobre bens e serviços prováveis. ser do maior
            interesse para você. Essas empresas normalmente utilizam cookies de
            terceiros ou web beacon para coletar essas informações.
          </ParagraphStyled>
          <ParagraphStyled>
            Usamos as informações pessoais identificáveis que você nos fornece
            ao assinar para fornecer os recursos personalizados e serviços
            específicos para os quais você se inscreveu.
          </ParagraphStyled>
        </section>
        <section className=" w-full flex flex-col gap-4">
          <Title2Styled>3. OUTRAS DIVULGAÇÕES AUTORIZADAS</Title2Styled>
          <ParagraphStyled>
            Apesar desta Política de Privacidade, entende-se que a TIM Brasil
            e/ou a Cristanero S.A. podem acessar, preservar e divulgar qualquer
            informação que coletemos sobre você ou que você tenha submetido:
          </ParagraphStyled>
          <ul>
            <li>
              A. Em resposta a uma intimação, ordem judicial ou processo legal,
              ou para estabelecer, proteger ou exercer nossos direitos legais ou
              nos defender contra reivindicações legais.
            </li>
            <li>
              B. Proteger os direitos e a propriedade da TIM Brasil e/ou
              Cristanero S.A., suas afiliadas ou do público.
            </li>
            <li>
              C. Se acreditarmos ser necessário investigar, prevenir ou agir em
              relação a atividades ilegais, fraudes ou situações que envolvam
              possíveis ameaças à segurança de qualquer pessoa.
            </li>
            <li>
              D. Às nossas subsidiárias, joint ventures ou outras empresas sob
              controle comum com a TIM Brasil ou Cristanero S.A. (nesse caso,
              exigiremos que tais entidades respeitem esta Política de
              Privacidade).
            </li>
            <li>
              E. Se a TIM Brasil ou a Cristanero S.A. for adquirida ou fundida
              com outra entidade (nesse caso, exigiremos que essa entidade
              assuma nossas obrigações sob esta Política de Privacidade); Para
              cumprir as leis aplicáveis.
            </li>
          </ul>
          <ParagraphStyled>
            Além disso, a TIM Brasil ou a Cristanero S.A. podem encaminhar
            quaisquer contranotificações que você enviar conforme os Termos e
            Condições deste portal e quaisquer comunicações relacionadas a
            terceiros. Sujeito à legislação aplicável, a TIM Brasil e/ou a
            Cristanero S.A. também podem reter outras análises relacionadas ao
            usuário após a rescisão desta Política de Privacidade.
          </ParagraphStyled>
        </section>
        <section className=" w-full flex flex-col gap-4">
          <Title2Styled>4. SEGURANÇA</Title2Styled>
          <ParagraphStyled>
            Utilizamos medidas de segurança padrão da indústria para proteger
            suas informações, de modo que não sejam disponibilizadas a partes
            não autorizadas. Também exigimos que nossos prestadores de serviços
            implementem e mantenham procedimentos e práticas de segurança
            razoáveis, adequados à natureza das informações que compartilhamos
            com eles. Nenhuma transmissão de dados pela internet pode ser
            garantida como 100% segura. Como resultado, embora nos esforcemos
            para proteger as informações pessoais, não podemos e não garantimos
            a segurança de qualquer informação que você transmita para este
            site, e você o faz por sua conta e risco. Você é o único responsável
            por todas as atividades que ocorrem sob sua conta neste portal.
          </ParagraphStyled>
          <ParagraphStyled>
            Você concorda em notificar imediatamente a TIM Brasil ou a
            Cristanero S.A. sobre qualquer divulgação ou uso não autorizado de
            suas informações, ou qualquer outra violação de segurança. Se você
            tiver alguma dúvida sobre as medidas e técnicas que utilizamos, não
            hesite em nos contatar pelo{' '}
            <Link
              href="mailto:info@mediamoob.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 hover:text-sky-800 underline transition-colors"
            >
              info@mediamoob.com
            </Link>
            .
          </ParagraphStyled>
        </section>
        <section className=" w-full flex flex-col gap-4">
          <Title2Styled>5. DECLARAÇÃO DE PRIVACIDADE INFANTIL</Title2Styled>
          <ParagraphStyled>
            Não coletamos conscientemente informações pessoais identificáveis de
            crianças menores de 18 anos. No entanto, menores só podem usar este
            portal sob supervisão de um dos pais ou responsável legal. Se
            tomarmos conhecimento de que recebemos inadvertidamente informações
            pessoais identificáveis de um usuário menor de 18 anos, apagaremos
            essas informações de nossos registros. Como não coletamos
            conscientemente informações pessoais identificáveis de crianças
            menores de 18 anos, também não divulgamos essas informações
            conscientemente a terceiros.
          </ParagraphStyled>
        </section>
        <section className=" w-full flex flex-col gap-4">
          <Title2Styled>6. MUDANÇAS</Title2Styled>
          <ParagraphStyled>
            A TIM Brasil ou a Cristanero S.A. podem, a sua exclusiva e absoluta
            discrição, alterar esta Política de Privacidade de tempos em tempos.
            Em caso de qualquer alteração significativa nesta Política de
            Privacidade, substituiremos o link &quot;Privacidade&quot; em nossa
            página inicial por um intitulado &quot;Privacidade: Atualizado&quot;
            por um período mínimo de 30 dias. Todas as alterações na Política de
            Privacidade ou nas Condições Gerais serão efetivas quando
            publicadas, e o uso contínuo deste portal após a publicação
            constituirá aceitação e acordo de estar vinculado a essas
            alterações. Se você se opôs a tais mudanças, sua única solução será
            parar de usar este portal. No entanto, se fizermos qualquer
            alteração que nos permita usar suas informações pessoais de forma
            materialmente diferente do permitido pela Política de Privacidade em
            vigor no momento em que você enviou tais informações pessoais,
            obteremos seu consentimento antes de fazer um uso materialmente
            diferente.
          </ParagraphStyled>
        </section>
      </div>
    </main>
  )
}

const TitleStyled = ({ children }) => (
  <h1
    className={
      ' w-full uppercase font-oswaldItalic pointer-events-none cursor-default text-[1.8rem] leading-[2rem] md:text-3xl lg:text-4xl text-Black text-left  '
    }
  >
    {children}
  </h1>
)

const Title2Styled = ({ children }) => (
  <h2
    className={` w-full md:max-w-full font-oswaldItalic uppercase  text-Black text-xl md:text-lg lg:text-2xl`}
  >
    {children}
  </h2>
)

const ParagraphStyled = ({ children }) => (
  <p
    className={
      poppins.className +
      ' font-normal text-sm md:text-base lg:text-lg text-Black'
    }
  >
    {children}
  </p>
)
