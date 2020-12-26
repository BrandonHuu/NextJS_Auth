export default function logout(req, res) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')

    const _json = {

    }

    res.end(JSON.stringify(_json))
  }