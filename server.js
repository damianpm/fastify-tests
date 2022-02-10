import Fastify from 'fastify'
import items from './items.js'

const PORT = 4000
const fastify = Fastify({ logger: true })

fastify.get('/items', (req, reply) => {
  reply.send({ test: 'Hello there' })
})

fastify.get('/items/:id', (req, reply) => {
  const { id } = req.params
  const item = items.find(item => item.id.toString() === id)
  reply.send(item)
})

const start = async () => {
  try {
    await fastify.listen(PORT)
  }
  catch (error) {
    fastify.log.error(error)
    process.exit(1)
  }
}

start()
