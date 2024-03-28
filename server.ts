/*
|--------------------------------------------------------------------------
| AdonisJs Server
|--------------------------------------------------------------------------
|
| The contents in this file is meant to bootstrap the AdonisJs application
| and start the HTTP server to accept incoming connections. You must avoid
| making this file dirty and instead make use of `lifecycle hooks` provided
| by AdonisJs service providers for custom code.
|
*/

import 'reflect-metadata'
import sourceMapSupport from 'source-map-support'
import { Ignitor } from '@adonisjs/core/build/standalone'

sourceMapSupport.install({ handleUncaughtExceptions: false })

async function startServer() {
  try {
    const ignitor = new Ignitor(__dirname)
    await ignitor.httpServer().start()
  } catch (error) {
    console.error('Error starting server:', error)
    process.exit(1)
  }
}

startServer()
