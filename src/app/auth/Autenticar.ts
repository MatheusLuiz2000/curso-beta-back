import jwt from 'jsonwebtoken';

export default async function(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  console.log(req.headers);

  if (!authorization) {
    return res.status(401).json('Usuario não autenticado');
  }

  const [, token] = authorization.split(' ');

  const verifica_token = await jwt.verify(token, process.env.KEY, function(
    err,
    decoded
  ) {
    if (err) {
      return res.status(200).json('Usuario não autenticado');
    }

    return next();
  });
}
