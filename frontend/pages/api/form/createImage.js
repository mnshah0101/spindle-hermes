
import multer from 'multer';

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})
var upload = multer({ storage: storage })


app.post('/createImage', upload.single('image'), (req, res) => {
    try {

        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        



        res.status(200).json({ message: 'Image Uploaded Successfully' });
    } catch (error) {
        res.status(400).send(error);
    }
});