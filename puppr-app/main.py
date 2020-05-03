import json
import requests
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/toronto')
def dogs():
    return all_dogs()


def all_dogs():
    all_results = {}
    URL = 'https://www.torontohumanesociety.com/api/api.php?action=getAnimalsForSpeciesId&id=1&stageId=2'
    response = requests.get(URL).json()
    for index, node in enumerate(response['AdoptableSearchResult']['XmlNode']):
        if node:
            res = node['adoptableSearch']
            all_results[index] = res
            all_results[index]['description'] = get_dog_description(int(res['ID']))

    return all_results


def get_dog_description(id: [int]):
    URL = f'https://www.torontohumanesociety.com/api/api.php?action=getListingForAnimalId&id={id}'
    response = requests.get(URL).json()
    if response['AdoptableDetailsResult']['adoptableDetails']:
        return response['AdoptableDetailsResult']['adoptableDetails']['Dsc']
    return None


if __name__ == '__main__':
    # This is used when running locally only. When deploying to Google App
    # Engine, a webserver process such as Gunicorn will serve the app. This
    # can be configured by adding an `entrypoint` to app.yaml.
    # Flask's development server will automatically serve static files in
    # the "static" directory. See:
    # http://flask.pocoo.org/docs/1.0/quickstart/#static-files. Once deployed,
    # App Engine itself will serve those files as configured in app.yaml.
    app.run(host='0.0.0.0', port=8080, debug=True)