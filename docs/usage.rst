========
Usage
========

To use this template, simply update it::

	import read-the-docs-template


-----------------
Uploading a file:
-----------------

**CLI**

.. code:: shell

    $ files-upload -v -F files/picksumipsum.txt -S api.tacc.cloud nryan

..

.. container:: foldable

    .. container:: header

        :fa:`caret-right`
        **cURL**

    .. code:: shell

        $ curl -sk -H "Authorization: Bearer $ACCESS_TOKEN" \
             -X POST \
             -F "fileToUpload=@files/picksumipsum.txt" \
             https://tacc.cloud/files/v2/media/api.tacc.cloud/nryan

..

The response will look something like this:

..

.. code:: javascript

    {
        "internalUsername": null,
        "lastModified": "2014-09-03T10:28:09.943-05:00",
        "name": "picksumipsum.txt",
        "nativeFormat": "raw",
        "owner": "nryan",
        "path": "/home/nryan/picksumipsum.txt",
        "source": "http://127.0.0.1/picksumipsum.txt",
        "status": "STAGING_QUEUED",
        "systemId": "api.tacc.cloud",
        "uuid": "0001409758089943-5056a550b8-0001-002",
        "_links": {
            "history": {
                "href": "https://tacc.cloud/files/v2/history/system/api.tacc.cloud/nryan/picksumipsum.txt"
            },
            "self": {
                "href": "https://tacc.cloud/files/v2/media/system/api.tacc.cloud/nryan/picksumipsum.txt"
            },
            "system": {
                "href": "https://tacc.cloud/systems/v2/api.tacc.cloud"
            }
        }
    }

..

You may upload data to a remote systems by performing a multipart POST on the FILES service. If you are using the Agave CLI, you can perform recursive directory uploads. If you are manually calling curl or building an app with the Agave SDK, you will need to implement the recursion yourself. You can take a look in the *files-upload* script to see how this is done. The following is an example of how to upload a file that we will use in the remainder of this tutorial.

You will see a progress bar while the file uploads, followed by a response from the server with a description of the uploaded file. Agave does not block during data movement operations, so it may be just a moment before the file physically shows up on the remote system.
