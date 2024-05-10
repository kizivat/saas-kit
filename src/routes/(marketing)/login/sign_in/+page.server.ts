export const ssr = false

import { fail, redirect, type Actions } from "@sveltejs/kit"

export const actions: Actions = {
  default: async ({ request, locals: { supabase } }) => {
    const formData = await request.formData()
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) {
      return fail(400, { error: error.message })
    } else {
      throw redirect(303, "/auth/callback")
    }
  },
}
