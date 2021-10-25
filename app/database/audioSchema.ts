import Realm from 'realm'

const AUDIO_SCHEMA = 'AudioRecording'

const AudioSchema = {
    name: AUDIO_SCHEMA,
    properties: {
        uri: {type: 'string'}
    }
}

let realm = new Realm({schema: [AudioSchema], schemaVersion: 1});

export default realm;