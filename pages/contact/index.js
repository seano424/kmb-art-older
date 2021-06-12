import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Layout from '@/components/layout'
import SidebarLayout from '@/components/sidebar-layout'
import PostTitle from '@/components/post-title'
import Container from '@/components/container'

export default function index() {
  const [statusMessage, setStatusMessage] = useState(
    'Thanks for getting in touch!'
  )
  const [isNotified, setIsNotified] = useState(false)
  const [isError, setIsError] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const form = document.querySelector('#contact-form')

    const { sendForm, init } = (await import('emailjs-com')).default

    init(process.env.NEXT_PUBLIC_VERCEL_EMAIL_JS_ID)
    sendForm('default_service', 'template_cauvbxi', '#contact-form').then(
      function (response) {
        console.log('SUCCESS!', response.status, response.text)
        form.reset()
        setStatusMessage('Thanks for getting in touch!')
        setIsNotified(true)
        setTimeout(() => {
          setIsNotified(false)
        }, 3000)
      },
      function (error) {
        console.log('FAILED...', error)
        form.reset()
        setStatusMessage('Hmm something seems to have gone wrong 🤔 🦭')
        setIsNotified(true)
        setIsError(true)
        setTimeout(() => {
          setIsError(false)
          setIsNotified(false)
        }, 3000)
      }
    )
  }

  const warning = 'bg-red-500 text-white'

  return (
    <Layout>
      <SidebarLayout>
        <Container background>
          <PostTitle>Contact Karrie</PostTitle>
          <section>
            <form
              className="flex w-full flex-col items-center xl:pr-64 absolute bottom-0 left-0 top-24 rounded-tr-full bg-blue-200 bg-opacity-75"
              id="contact-form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h1 className="px-10 pt-10 pb-5 lg:py-10 text-4xl lg:text-7xl text-center">
                {isNotified ? 'Thank you!' : 'Get in touch!'} 🧚🏼‍♀️
              </h1>
              <article className="flex flex-col gap-4 w-9/12 xl:w-8/12">
                <input
                  placeholder="Name"
                  className="dark:text-gray-900 py-2 px-2 rounded focus:outline-none dark:bg-white"
                  type="text"
                  name="userName"
                  {...register('userName')}
                />
                {errors.userName && (
                  <span className={warning}>This field is required</span>
                )}

                <input
                  placeholder="Email"
                  className="dark:text-gray-900 py-2 px-2 rounded focus:outline-none dark:bg-white"
                  type="email"
                  name="userEmail"
                  {...register('userEmail')}
                />
                {errors.userEmail && errors.userEmail.type === 'required' && (
                  <span className={warning}>This field is required</span>
                )}
                <textarea
                  placeholder="Message"
                  className="h-40 dark:bg-white px-2 py-2 focus:outline-none rounded"
                  name="message"
                  {...register('message')}
                />
                <input
                  className="py-2 w-full rounded text-xl m-auto bg-black text-white uppercase tracking-widest cursor-pointer focus:outline-none"
                  type="submit"
                  value="Send"
                />
              </article>
            </form>
          </section>
        </Container>
      </SidebarLayout>
    </Layout>
  )
}
