export default function TestHandler(req, res){
    res.status(200).json({ name: 'John Doe' })
}