import { HttpMethod, route } from '@spksoft/koa-decorator'
import yup from 'yup'
import validate from '@spksoft/koa-validator-decorator'
import User from '../../../models/user/user.repository'

@route('/v1/hello-world')
export default class HelloWorldController {
  @route('/', HttpMethod.POST)
  @validate({
    body: yup.object().shape({
      username: yup.string().required(),
      password: yup.string().required(),
    }),
  })
  async main(ctx) {
    const { username, password } = ctx.request.body
    await User.create({
      username,
      password,
    })

    ctx.body = {
      hello: 'world',
    }
  }

  @route('/', HttpMethod.GET)
  async get (ctx) {
    const result = await User.find({})
    ctx.body = result
  }

  @route('/', HttpMethod.PATCH)
  async update (ctx) {
    const { username, password } = ctx.request.body
    const result = await User.update({username}, {password})
    ctx.body = result
  }
}
